import { ConveyancingFeeIndexEntityBase } from '../ConveyancingFeeIndexEntityBase';
import type { ConveyancingFeeIndexSDK } from '../ConveyancingFeeIndexSDK';
import type { Control } from '../types';
import type { Mcp, McpLoadMatch, McpCreateData } from '../ConveyancingFeeIndexTypes';
declare class McpEntity extends ConveyancingFeeIndexEntityBase<Mcp> {
    constructor(client: ConveyancingFeeIndexSDK, entopts: any);
    make(this: McpEntity): McpEntity;
    load(this: any, reqmatch?: McpLoadMatch, ctrl?: Control): Promise<McpEntity>;
    create(this: any, reqdata?: McpCreateData, ctrl?: Control): Promise<McpEntity>;
}
export { McpEntity };
