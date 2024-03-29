import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get('HOST'),
          port: 143,
          secure: false,
          auth: {
            user: configService.get('EMAIL'),
            pass: configService.get('EMAIL_PASSWORD'),
          },
          tls: {
            ciphers:'SSLv3'
        }
        },
        defaults: {
          from: '"SEARAS AWARD 2023" <noreply@serasaward2023.com>',
        },
        template: {
          dir: __dirname.replace('dist', 'src') + '/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
