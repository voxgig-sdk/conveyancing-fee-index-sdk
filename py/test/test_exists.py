# ConveyancingFeeIndex SDK exists test

import pytest
from conveyancingfeeindex_sdk import ConveyancingFeeIndexSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ConveyancingFeeIndexSDK.test(None, None)
        assert testsdk is not None
