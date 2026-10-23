<?php
declare(strict_types=1);

// ConveyancingFeeIndex SDK base feature

class ConveyancingFeeIndexBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ConveyancingFeeIndexContext $ctx, array $options): void {}
    public function PostConstruct(ConveyancingFeeIndexContext $ctx): void {}
    public function PostConstructEntity(ConveyancingFeeIndexContext $ctx): void {}
    public function SetData(ConveyancingFeeIndexContext $ctx): void {}
    public function GetData(ConveyancingFeeIndexContext $ctx): void {}
    public function GetMatch(ConveyancingFeeIndexContext $ctx): void {}
    public function SetMatch(ConveyancingFeeIndexContext $ctx): void {}
    public function PrePoint(ConveyancingFeeIndexContext $ctx): void {}
    public function PreSpec(ConveyancingFeeIndexContext $ctx): void {}
    public function PreRequest(ConveyancingFeeIndexContext $ctx): void {}
    public function PreResponse(ConveyancingFeeIndexContext $ctx): void {}
    public function PreResult(ConveyancingFeeIndexContext $ctx): void {}
    public function PreDone(ConveyancingFeeIndexContext $ctx): void {}
    public function PreUnexpected(ConveyancingFeeIndexContext $ctx): void {}
}
