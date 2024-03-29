import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiCoreAdministrationModule } from '@coinverse/api/core/administration';
import { ApiCoreAuthenticationModule, JwtAuthGuard } from '@coinverse/api/core/authentication';
@Module({
  imports: [ApiCoreAdministrationModule, ApiCoreAuthenticationModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule {}
