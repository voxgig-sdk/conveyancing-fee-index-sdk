package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewEnquiryEntityFunc func(client *ConveyancingFeeIndexSDK, entopts map[string]any) ConveyancingFeeIndexEntity

var NewGuideEntityFunc func(client *ConveyancingFeeIndexSDK, entopts map[string]any) ConveyancingFeeIndexEntity

var NewMcpEntityFunc func(client *ConveyancingFeeIndexSDK, entopts map[string]any) ConveyancingFeeIndexEntity

