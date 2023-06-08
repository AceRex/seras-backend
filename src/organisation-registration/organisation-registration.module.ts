import { Module } from '@nestjs/common';
import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrganisationRegistrationController } from './organisation-registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrgRegSchema } from './organisation-registration.schema';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'OrgReg', schema: OrgRegSchema }]),
    MailModule
  ],
  providers: [OrganisationRegistrationService],
  controllers: [OrganisationRegistrationController],
})
export class OrganisationRegistrationModule {}
