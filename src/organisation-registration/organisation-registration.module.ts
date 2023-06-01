import { Module } from '@nestjs/common';
import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrganisationRegistrationController } from './organisation-registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
import { OrgRegSchema } from './organisation-registration.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'OrgReg', schema: OrgRegSchema }]),
  ],
  providers: [OrganisationRegistrationService],
  controllers: [OrganisationRegistrationController],
})
export class OrganisationRegistrationModule {}
