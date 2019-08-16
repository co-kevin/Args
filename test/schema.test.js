import Schema from '../src/schema'
import assert from 'assert'

describe('Schema', function () {
  it('should return Schema Object', function () {
    const schema = new Schema('l:boolean p:number d:string')
    assert.ok(schema instanceof Schema)
  })
  it('should return arg size 3', function () {
    const schema = new Schema('l:boolean p:number d:string')
    assert.equal(schema.size(), 3)
  })
})