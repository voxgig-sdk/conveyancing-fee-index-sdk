# ConveyancingFeeIndex SDK utility: make_context

from conveyancingfeeindex_sdk.core.context import ConveyancingFeeIndexContext


def make_context_util(ctxmap, basectx):
    return ConveyancingFeeIndexContext(ctxmap, basectx)
