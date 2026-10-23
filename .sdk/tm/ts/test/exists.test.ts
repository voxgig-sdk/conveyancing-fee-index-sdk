
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ConveyancingFeeIndexSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ConveyancingFeeIndexSDK.test()
    equal(testsdk instanceof ConveyancingFeeIndexSDK, true,
      'ConveyancingFeeIndexSDK.test() must return a client synchronously')
  })

})
