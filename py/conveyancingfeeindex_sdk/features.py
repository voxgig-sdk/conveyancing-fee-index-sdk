# ConveyancingFeeIndex SDK feature factory

from conveyancingfeeindex_sdk.feature.base_feature import ConveyancingFeeIndexBaseFeature
from conveyancingfeeindex_sdk.feature.ratelimit_feature import ConveyancingFeeIndexRatelimitFeature
from conveyancingfeeindex_sdk.feature.retry_feature import ConveyancingFeeIndexRetryFeature
from conveyancingfeeindex_sdk.feature.test_feature import ConveyancingFeeIndexTestFeature
from conveyancingfeeindex_sdk.feature.timeout_feature import ConveyancingFeeIndexTimeoutFeature


_FEATURES = {
    "base": lambda: ConveyancingFeeIndexBaseFeature(),
    "ratelimit": lambda: ConveyancingFeeIndexRatelimitFeature(),
    "retry": lambda: ConveyancingFeeIndexRetryFeature(),
    "test": lambda: ConveyancingFeeIndexTestFeature(),
    "timeout": lambda: ConveyancingFeeIndexTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
