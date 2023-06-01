import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrgReg } from './organisation-registration.schema';
import { CreateOrgRegDto } from './organisation-registration.dto';

@Controller('organisation-registration')
export class OrganisationRegistrationController {
  constructor(private readonly orgReg: OrganisationRegistrationService) {}

  @Get()
  findAll(): Promise<OrgReg[]> {
    return this.orgReg.findAll();
  }

  @Post()
  async createNewOrg(
    @Body()
    newOrg: CreateOrgRegDto,
  ): Promise<OrgReg> {
    return this.orgReg.createNewOrg(newOrg);
  }

  @Get(':id')
  async findOrg(
    @Param('id')
    id: string,
  ): Promise<OrgReg> {
    return this.orgReg.findOrg(id);
  }
}
