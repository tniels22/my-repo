import { Test, TestingModule } from '@nestjs/testing';
import { CocoaRatingService } from './cocoa-rating.service';

describe('CocoaRatingService', () => {
  let service: CocoaRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CocoaRatingService],
    }).compile();

    service = module.get<CocoaRatingService>(CocoaRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
