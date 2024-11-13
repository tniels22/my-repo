import { Test, TestingModule } from '@nestjs/testing';
import { CocoasService } from './cocoas.service';

describe('CocoasService', () => {
  let service: CocoasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CocoasService],
    }).compile();

    service = module.get<CocoasService>(CocoasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
