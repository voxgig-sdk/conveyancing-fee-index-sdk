<?php
declare(strict_types=1);

// ConveyancingFeeIndex SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ConveyancingFeeIndexMakeContext
{
    public static function call(array $ctxmap, ?ConveyancingFeeIndexContext $basectx): ConveyancingFeeIndexContext
    {
        return new ConveyancingFeeIndexContext($ctxmap, $basectx);
    }
}
