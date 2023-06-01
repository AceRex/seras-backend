import { Controller, Get } from '@nestjs/common';
import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrgReg } from './organisation-registration.schema';

@Controller('organisation-registration')
export class OrganisationRegistrationController {
  constructor(private readonly orgReg: OrganisationRegistrationService) {}

  @Get()
  findAll(): Promise<OrgReg[]> {
    return this.orgReg.findAll();
  }
}
