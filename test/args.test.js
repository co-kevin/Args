import Args from '../src/args'
import assert from 'assert'
import Schema from '../src/schema';

const schema = new Schema('l:boolean p:number g:string_array d:number_array')
const argsArray = ['-l', '-p', '8080', '-g', 'this,is,a,list', '-d', '1,2,-3,5']
describe('Args', function () {
  it('should return Args Object', function () {
    const args = new Args(schema, argsArray)
    assert.ok(args instanceof Args)
  })
  it ('should return true when get arg l', function () {
    const args = new Args(schema, argsArray)
    assert.equal(args.value('l'), true)
  })
  it ('should return 8080 when get arg p', function () {
    const args = new Args(schema, argsArray)
    assert.equal(args.value('p'), 8080)
  })
  it ('should return string array when get arg g', function () {
    const args = new Args(schema, argsArray)
    const value = args.value('g')
    assert.ok(value instanceof Array)
    assert.equal(JSON.stringify(value), JSON.stringify(['this', 'is', 'a', 'list']))
  })
  it ('should return number array when get arg d', function () {
    const args = new Args(schema, argsArray)
    const value = args.value('d')
    assert.ok(value instanceof Array)
    assert.equal(JSON.stringify(value), JSON.stringify([1, 2, -3, 5]))
  })
})
