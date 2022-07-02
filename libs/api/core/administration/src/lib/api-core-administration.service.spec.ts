import { Test } from '@nestjs/testing';
import { ApiCoreAdministrationService } from './api-core-administration.service';

describe('ApiCoreAdministrationService', () => {
  let service: ApiCoreAdministrationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCoreAdministrationService],
    }).compile();

    service = module.get(ApiCoreAdministrationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
