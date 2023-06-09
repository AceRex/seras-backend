import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User) {
    const url = `serasaward2023/auth`;

    await this.mailerService.sendMail({
      to: user.EmailOfBusinessOrganization,
      from: '"No Reply" <noreply@serasaward2023.com>',
      subject: 'Thank you for Registring! We got your registration ',
      template: './UserEmail',
      context: {
        name: user.NameOfBusinessOrganization,
        url,
      },
    });
  }
}
