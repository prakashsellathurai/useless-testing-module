let test = require('./index')
function concatenate (hello, world) {
  return hello + world
}
test.describe('function test', function () {
  test.it('should concatenate the strings', function () {
    test.expect(concatenate('hello', 'world')).toEqual('helloworld')
  })
  test.it('should not concatenate the strings', function () {
    throw test.expect(concatenate('hello', 'world')).toEqual('helloNotworld')
  })
})
