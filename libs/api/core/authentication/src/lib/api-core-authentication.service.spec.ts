import { Test } from '@nestjs/testing';
import { ApiCoreAuthenticationService } from './api-core-authentication.service';

describe('ApiCoreAuthenticationService', () => {
  let service: ApiCoreAuthenticationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCoreAuthenticationService],
    }).compile();

    service = module.get(ApiCoreAuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
