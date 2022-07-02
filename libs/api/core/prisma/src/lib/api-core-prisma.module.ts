import { Module } from '@nestjs/common';
import { ApiCorePrismaService } from './api-core-prisma.service';

@Module({
  controllers: [],
  providers: [ApiCorePrismaService],
  exports: [ApiCorePrismaService],
})
export class ApiCorePrismaModule {}
