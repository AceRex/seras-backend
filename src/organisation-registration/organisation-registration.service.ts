import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrgReg } from './organisation-registration.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class OrganisationRegistrationService {
  constructor(
    @InjectModel(OrgReg.name) private orgModel: mongoose.Model<OrgReg>,
  ) {}

  async findAll(): Promise<OrgReg[]> {
    const orgRegs = await this.orgModel.find();
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
