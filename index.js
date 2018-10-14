const assert = require('assert')

function describe (testcase, callback) {
  console.log(testcase)
  callback()
}

function it (description, callback) {
  try {
    callback()
    console.log('\x1b[32m', `\t ✓ passed -> ${description}`)
  } catch (e) {
    console.log('\x1b[31m', `\t x failed -> ${description}`)
  }
}

function expect (actual) {
  return {
    toEqual (expected) {
      assert.equal(actual, expected)
    },
    toBe (expected) {
      assert.deepStrictEqual(actual, expected)
    },
    toBeTruthy () {
      assert.ok(actual)
    },
    toHaveLength (expected) {
      assert.ok(actual.length === expected)
    }
  }
}

module.exports = {
  describe,
  expect,
  it
}
