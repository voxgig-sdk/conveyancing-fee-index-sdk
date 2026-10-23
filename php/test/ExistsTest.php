<?php
declare(strict_types=1);

// ConveyancingFeeIndex SDK exists test

require_once __DIR__ . '/../conveyancingfeeindex_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ConveyancingFeeIndexSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
