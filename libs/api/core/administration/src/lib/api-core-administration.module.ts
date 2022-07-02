import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

import { ApiCoreAdministrationController } from './api-core-administration.controller';
import { ApiCoreAdministrationService } from './api-core-administration.service';

import { ApiCorePrismaModule } from '@coinverse/api/core/prisma';


@Module({
  imports: [ ApiCorePrismaModule, AutomapperModule.forRoot({
    strategyInitializer: classes()
  }) ],
  controllers: [ApiCoreAdministrationController],
  providers: [ApiCoreAdministrationService],
  exports: [ ApiCoreAdministrationService ]
})
export class ApiCoreAdministrationModule {}
