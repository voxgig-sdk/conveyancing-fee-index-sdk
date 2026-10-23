<?php
declare(strict_types=1);

// ConveyancingFeeIndex SDK utility: result_headers

class ConveyancingFeeIndexResultHeaders
{
    public static function call(ConveyancingFeeIndexContext $ctx): ?ConveyancingFeeIndexResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
