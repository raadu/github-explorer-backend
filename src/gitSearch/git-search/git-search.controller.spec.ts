import { Test, TestingModule } from '@nestjs/testing';
import { GitSearchController } from './git-search.controller';

describe('GitSearchController', () => {
  let controller: GitSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitSearchController],
    }).compile();

    controller = module.get<GitSearchController>(GitSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
