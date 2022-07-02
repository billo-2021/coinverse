import { Test } from '@nestjs/testing';
import { ApiCoreAdministrationController } from './api-core-administration.controller';
import { ApiCoreAdministrationService } from './api-core-administration.service';

describe('ApiCoreAdministrationController', () => {
  let controller: ApiCoreAdministrationController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCoreAdministrationService],
      controllers: [ApiCoreAdministrationController],
    }).compile();

    controller = module.get(ApiCoreAdministrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
