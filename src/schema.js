import ArgSpec from './arg_spec'

export default class Schema {
  /**
   * return new Schema Object
   * @param {*String} schemaText {arg-key}:{arg-type} {arg-key}:{arg-type} ...
   */
  constructor (schemaText) {
    const argSpecTexts = schemaText.split(' ')
    const argSpecs = []
    argSpecTexts.forEach(text => {
      argSpecs.push(new ArgSpec(...text.split(':')))
    })

    this.schemaText = schemaText
    this.argSpecs = argSpecs
  }

  size () {
    return this.argSpecs.length
  }
}
