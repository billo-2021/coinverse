import { Test } from '@nestjs/testing';
import { ApiCoreAuthenticationController } from './api-core-authentication.controller';
import { ApiCoreAuthenticationService } from './api-core-authentication.service';

describe('ApiCoreAuthenticationController', () => {
  let controller: ApiCoreAuthenticationController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCoreAuthenticationService],
      controllers: [ApiCoreAuthenticationController],
    }).compile();

    controller = module.get(ApiCoreAuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
