export default class Args {
  constructor (schema, argsArray) {
    this.argSpecs = schema.argSpecs
    this.argsArray = argsArray
  }

  value (name) {
    const argSpec = this._hasArg(name)
    if (!argSpec) throw new Error('Undefined arg name [' + name + '] in the schema')

    const argIndex = this._findArgIndex(name)
    switch (argSpec.type) {
      case 'boolean':
        return this._boolanValue(argIndex)
      case 'number':
        return this._numberValue(argIndex)
      case 'string':
        return this._stringValue(argIndex)
      case 'string_array':
        return this._stringArrayValue(argIndex)
      case 'number_array':
          return this._numberArrayValue(argIndex)
      default:
        throw new Error('Unexpected arg type: ' + argSpec.type)
    }
  }

  _stringArrayValue (argIndex) {
    // default value
    if (argIndex === -1) return []
    const valueText = this.argsArray[argIndex + 1]
    return valueText.split(',')
  }

  _numberArrayValue (argIndex) {
    return this._stringArrayValue(argIndex).map(arg => Number(arg))
  }

  _boolanValue (argIndex) {
    return argIndex !== -1
  }

  _numberValue (argIndex) {
    // default value
    if (argIndex === -1) return 0
    return Number(this.argsArray[argIndex + 1])
  }

  _stringValue (argIndex) {
    // default value
    if (argIndex === -1) return ''
    return this.argsArray[argIndex + 1]
  }

  _findArgIndex (name) {
    return this.argsArray.findIndex(arg => arg === ('-' + name))
  }

  _hasArg (name) {
    return this.argSpecs.find(spec => {return spec.name === name})
  }
}