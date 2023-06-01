import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrgReg } from './organisation-registration.schema';
import * as mongoose from 'mongoose';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Injectable()
export class OrganisationRegistrationService {
  constructor(
    @InjectModel(OrgReg.name) private orgModel: mongoose.Model<OrgReg>,
  ) {}

  async findAll(query: ExpressQuery): Promise<OrgReg[]> {
    const keyword = query.keyword
    ? {
        NameOfBusinessOrganization: {
            $regex: query.keyword,
            $options: 'i'
        }
    } : {};
    const orgRegs = await this.orgModel.find({...keyword});
    return orgRegs;
  }
  

  async createNewOrg(newOrg: OrgReg): Promise<OrgReg> {
    const res = await this.orgModel.create(newOrg);
    return res;
  }

  async findOrg(id: string): Promise<OrgReg> {
    const res = await this.orgModel.findById(id);
    return res;
  }

  async deleteOrg(id: string): Promise<OrgReg> {
    const res = await this.orgModel.findByIdAndDelete(id);
    return res;
  }

}
