import { Module } from '@nestjs/common';
import { OrganisationRegistrationService } from './organisation-registration.service';
import { OrganisationRegistrationController } from './organisation-registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrgRegSchema } from './organisation-registration.schema';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
// import { MailService } from './mail.service';
import { join } from 'path';


@Module({
  imports: [
    MailerModule.forRoot({
      transport: 'smtps://oluwasegun.are@pelmanagers.com:NpfWjcra9VEM6R1L.sendinblue.com',
      defaults: {
        from: '"No Reply" <noreply@serasaward2023.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    MongooseModule.forFeature([{ name: 'OrgReg', schema: OrgRegSchema }]),
  ],
  providers: [OrganisationRegistrationService],
  controllers: [OrganisationRegistrationController],
})
export class OrganisationRegistrationModule {}
