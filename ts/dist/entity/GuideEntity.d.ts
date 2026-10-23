import { ConveyancingFeeIndexEntityBase } from '../ConveyancingFeeIndexEntityBase';
import type { ConveyancingFeeIndexSDK } from '../ConveyancingFeeIndexSDK';
import type { Control } from '../types';
import type { Guide, GuideCreateData } from '../ConveyancingFeeIndexTypes';
declare class GuideEntity extends ConveyancingFeeIndexEntityBase<Guide> {
    constructor(client: ConveyancingFeeIndexSDK, entopts: any);
    make(this: GuideEntity): GuideEntity;
    create(this: any, reqdata?: GuideCreateData, ctrl?: Control): Promise<GuideEntity>;
}
export { GuideEntity };
