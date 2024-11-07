import { Test, TestingModule } from '@nestjs/testing';
import { CocoasController } from './cocoas.controller';

describe('CocoasController', () => {
  let controller: CocoasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CocoasController],
    }).compile();

    controller = module.get<CocoasController>(CocoasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
