# ConveyancingFeeIndex SDK exists test

require "minitest/autorun"
require_relative "../ConveyancingFeeIndex_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ConveyancingFeeIndexSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
