-- ConveyancingFeeIndex SDK exists test

local sdk = require("conveyancing-fee-index_sdk")

describe("ConveyancingFeeIndexSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
