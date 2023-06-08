import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrgReg } from './organisation-registration.schema';
import * as mongoose from 'mongoose';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { MailchimpService } from '@mindik/mailchimp-nestjs';
import { InjectMailchimp } from '@mindik/mailchimp-nestjs';

@Injectable()
export class OrganisationRegistrationService {
  constructor(
    @InjectModel(OrgReg.name) private orgModel: mongoose.Model<OrgReg>,
    // @InjectMailchimp()
    // private readonly mailchimpService: MailchimpService,
  ) {}

  async findAll(query: ExpressQuery): Promise<OrgReg[]> {
    const keyword = query.keyword
      ? {
          NameOfBusinessOrganization: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const orgRegs = await this.orgModel.find({ ...keyword });
    return orgRegs;
  }

  async createNewOrg(newOrg: OrgReg): Promise<OrgReg> {
    const res = await this.orgModel.create(newOrg);

    // const subscriberData = {
    //   email_address: newOrg.EmailOfBusinessOrganization,
    //   status: 'subscribed',
    //   merge_fields: {
    //     FNAME: newOrg.EmailOfBusinessOrganization,
    //   },
    // };
    // try {
    //   await this.mailchimpService.members.create(
    //     'YOUR_MAILCHIMP_LIST_ID',
    //     subscriberData,
    //   );
    // } catch (error) {
    //   console.error('Error adding subscriber to Mailchimp:', error);
    // }
    return res;
  }

  async findOrg(id: string): Promise<OrgReg> {
    const res = await this.orgModel.findById(id);
    return res;
  }

  async updateOrg(newOrg: OrgReg): Promise<OrgReg> {
    const res = await this.orgModel.findOneAndUpdate(
      { NameOfBusinessOrganization: newOrg.NameOfBusinessOrganization },
      { $push: { AwardEntry: newOrg } },
      { new: true },
    );
    return res;
  }

  async deleteOrg(id: string): Promise<OrgReg> {
    const res = await this.orgModel.findByIdAndDelete(id);
    return res;
  }
}
