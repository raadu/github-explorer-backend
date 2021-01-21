import { Test, TestingModule } from '@nestjs/testing';
import { GitSearchService } from './git-search.service';

describe('GitSearchService', () => {
  let service: GitSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GitSearchService],
    }).compile();

    service = module.get<GitSearchService>(GitSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
