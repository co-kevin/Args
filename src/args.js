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
        break;
      case 'string':
          break;
      default:
        throw new Error('Unexpected arg type: ' + argSpec.type)
    }
  }

  _boolanValue (name) {
    const index = this.argsArray.findIndex(arg => arg === ('-' + name))
    return index !== -1
  }

  _hasArg (name) {
    return this.argSpecs.find(spec => {return spec.name === name})
  }
}