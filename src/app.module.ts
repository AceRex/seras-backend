import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisationRegistrationModule } from './organisation-registration/organisation-registration.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
    }),
    
    MongooseModule.forRoot("mongodb+srv://johnsonare2207:2I3Ke1HOwmoVxIp0@serasbackend.9ervhga.mongodb.net/?retryWrites=true&w=majority"),
    OrganisationRegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
console.log(process.env.DB_URI)
