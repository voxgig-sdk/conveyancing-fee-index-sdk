# ConveyancingFeeIndex SDK utility: make_context
require_relative '../core/context'
module ConveyancingFeeIndexUtilities
  MakeContext = ->(ctxmap, basectx) {
    ConveyancingFeeIndexContext.new(ctxmap, basectx)
  }
end
