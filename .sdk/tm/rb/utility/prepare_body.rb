# ConveyancingFeeIndex SDK utility: prepare_body
require_relative 'media'
module ConveyancingFeeIndexUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ConveyancingFeeIndexUtilities.raw_body(ctx.reqdata) if ConveyancingFeeIndexUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
