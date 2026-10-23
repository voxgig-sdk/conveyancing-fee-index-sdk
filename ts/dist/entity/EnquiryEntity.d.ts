import { ConveyancingFeeIndexEntityBase } from '../ConveyancingFeeIndexEntityBase';
import type { ConveyancingFeeIndexSDK } from '../ConveyancingFeeIndexSDK';
import type { Control } from '../types';
import type { Enquiry, EnquiryCreateData } from '../ConveyancingFeeIndexTypes';
declare class EnquiryEntity extends ConveyancingFeeIndexEntityBase<Enquiry> {
    constructor(client: ConveyancingFeeIndexSDK, entopts: any);
    make(this: EnquiryEntity): EnquiryEntity;
    create(this: any, reqdata?: EnquiryCreateData, ctrl?: Control): Promise<EnquiryEntity>;
}
export { EnquiryEntity };
