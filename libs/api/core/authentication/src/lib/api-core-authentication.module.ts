import { ApiCoreAdministrationModule } from '@coinverse/api/core/administration';
import { Global, Module } from '@nestjs/common';
import { ApiCoreAuthenticationController } from './api-core-authentication.controller';
import { ApiCoreAuthenticationService } from './api-core-authentication.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy, LocalAuthGuard, JwtStrategy, JwtAuthGuard } from './utils';
import { JwtModule } from '@nestjs/jwt';

import { ApiCommonModule, authenticationConfig } from '@coinverse/api/common';

@Global()
@Module({
  imports: [ApiCoreAdministrationModule, ApiCommonModule, PassportModule, JwtModule.register({
    publicKey: authenticationConfig.keyPair.public,
    privateKey: authenticationConfig.keyPair.private,
    signOptions: {
      expiresIn: '60s',
      algorithm: 'RS256'
    },
  })],
  controllers: [ApiCoreAuthenticationController],
  providers: [ApiCoreAuthenticationService, LocalStrategy, LocalAuthGuard,JwtStrategy, JwtAuthGuard],
  exports: [ApiCoreAuthenticationService, LocalAuthGuard, JwtAuthGuard],
})
export class ApiCoreAuthenticationModule {}
