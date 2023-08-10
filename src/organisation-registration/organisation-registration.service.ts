import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrgReg } from './organisation-registration.schema';
import * as mongoose from 'mongoose';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudniary-response';
const streamifier = require('streamifier');

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
            $options: 'i',
          },
        }
      : {};
    const orgRegs = await this.orgModel.find({ ...keyword });
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

  async uploadFile(file: Express.Multer.File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error: any, result: CloudinaryResponse) => {
          if (error) return reject(error);
          resolve(result.url);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}
