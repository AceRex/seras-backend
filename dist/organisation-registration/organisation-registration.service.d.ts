import { OrgReg } from './organisation-registration.schema';
import * as mongoose from 'mongoose';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class OrganisationRegistrationService {
    private orgModel;
    constructor(orgModel: mongoose.Model<OrgReg>);
    findAll(query: ExpressQuery): Promise<OrgReg[]>;
    createNewOrg(newOrg: OrgReg): Promise<OrgReg>;
    findOrg(id: string): Promise<OrgReg>;
    updateOrg(newOrg: OrgReg): Promise<OrgReg>;
    deleteOrg(id: string): Promise<OrgReg>;
}
