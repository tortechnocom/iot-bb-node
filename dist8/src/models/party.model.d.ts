import { Entity } from '@loopback/repository';
export declare class Party extends Entity {
    partyId: string;
    partyTypeId: string;
    statusId?: string;
    constructor(data?: Partial<Party>);
}
