import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrgReg } from './organisation-registration.schema';
import { CreateOrgRegDto } from './organisation-registration.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('organisation-registration')
export class OrganisationRegistrationController {
  constructor(private readonly orgReg: OrganisationRegistrationService) {}

  @Get()
  findAll(@Query() query: ExpressQuery): Promise<OrgReg[]> {
    return this.orgReg.findAll(query);
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

  @Delete(':id')
  async deleteOrg(
    @Param('id')
    id: string,
  ): Promise<OrgReg> {
    return this.orgReg.deleteOrg(id);
  }
}
