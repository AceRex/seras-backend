import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrgReg } from './organisation-registration.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class OrganisationRegistrationService {
  constructor(
    @InjectModel(OrgReg.name) private orgModel: mongoose.Model<OrgReg>
  ) {}

  async findAll(): Promise<OrgReg[]> {
    const orgRegs = await this.orgModel.find();
    return orgRegs 
  }
}
