import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrgReg } from './organisation-registration.schema';
import { CreateOrgRegDto } from './organisation-registration.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { MailService } from '../mail/mail.service';
export declare class OrganisationRegistrationController {
    private readonly orgReg;
    private readonly mailService;
    constructor(orgReg: OrganisationRegistrationService, mailService: MailService);
    findAll(query: ExpressQuery): Promise<OrgReg[]>;
    createNewOrg(newOrg: CreateOrgRegDto): Promise<OrgReg>;
    findOrg(id: string): Promise<OrgReg>;
    updateOrg(newOrgDto: CreateOrgRegDto): Promise<OrgReg>;
    deleteOrg(id: string): Promise<OrgReg>;
}
