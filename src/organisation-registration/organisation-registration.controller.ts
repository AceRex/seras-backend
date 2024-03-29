import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrgReg } from './organisation-registration.schema';
import { CreateOrgRegDto } from './organisation-registration.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

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
    const createdOrg = await this.orgReg.createNewOrg(newOrg);
    return createdOrg;
  }

  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.orgReg.uploadFile(file);
  }

  @Get(':id')
  async findOrg(
    @Param('id')
    id: string,
  ): Promise<OrgReg> {
    return this.orgReg.findOrg(id);
  }

  @Put()
  async updateOrg(
    @Body()
    newOrgDto: CreateOrgRegDto,
  ): Promise<OrgReg> {
    const newOrg: OrgReg = {
      ...newOrgDto,
    };
    return this.orgReg.updateOrg(newOrg);
  }

  @Delete(':id')
  async deleteOrg(
    @Param('id')
    id: string,
  ): Promise<OrgReg> {
    return this.orgReg.deleteOrg(id);
  }
}
