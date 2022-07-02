import { Test } from '@nestjs/testing';
import { ApiCorePrismaService } from './api-core-prisma.service';

describe('ApiCorePrismaService', () => {
  let service: ApiCorePrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCorePrismaService],
    }).compile();

    service = module.get(ApiCorePrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
