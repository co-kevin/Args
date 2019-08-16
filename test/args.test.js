import Args from '../src/args'
import assert from 'assert'
import Schema from '../src/schema';

const schema = new Schema('l:boolean p:number d:string')
const argsArray = ['-l', '-p', '8080', '-d', '/usr/logs']
describe('Args', function () {
  it('should return Args Object', function () {
    const args = new Args(schema, argsArray)
    assert.ok(args instanceof Args)
  })
  it ('should return true when get value l', function () {
    const args = new Args(schema, argsArray)
    assert.equal(args.value('l'), true)
  })
})
