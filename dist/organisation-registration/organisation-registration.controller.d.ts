import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrgReg } from './organisation-registration.schema';
import { CreateOrgRegDto } from './organisation-registration.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class OrganisationRegistrationController {
    private readonly orgReg;
    constructor(orgReg: OrganisationRegistrationService);
    findAll(query: ExpressQuery): Promise<OrgReg[]>;
    createNewOrg(newOrg: CreateOrgRegDto): Promise<OrgReg>;
    findOrg(id: string): Promise<OrgReg>;
    updateOrg(newOrgDto: CreateOrgRegDto): Promise<OrgReg>;
    deleteOrg(id: string): Promise<OrgReg>;
}
