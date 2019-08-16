export default class Args {
  constructor (schema, argsArray) {
    this.argSpecs = schema.argSpecs
    this.argsArray = argsArray
  }

  value (name) {
    const argSpec = this._hasArg(name)
    if (!argSpec) throw new Error('Undefined arg name [' + name + '] in the schema')

    switch (argSpec.type) {
      case 'boolean':
        return this._boolanValue(argSpec.name)
      case 'number':
        return this._numberValue(argSpec.name)
      case 'string':
        return this._stringValue(argSpec.name)
      default:
        throw new Error('Unexpected arg type: ' + argSpec.type)
    }
  }

  _boolanValue (name) {
    const index = this._findArgIndex(name)
    return index !== -1
  }

  _numberValue (name) {
    const index = this._findArgIndex(name)
    // default value
    if (index === -1) return 0
    return Number(this.argsArray[index + 1])
  }

  _stringValue (name) {
    const index = this._findArgIndex(name)
    // default value
    if (index === -1) return ''
    return this.argsArray[index + 1]
  }

  _findArgIndex (name) {
    return this.argsArray.findIndex(arg => arg === ('-' + name))
  }

  _hasArg (name) {
    return this.argSpecs.find(spec => {return spec.name === name})
  }
}