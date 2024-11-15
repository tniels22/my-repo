import { Module } from '@nestjs/common';
import { CocoasController } from './cocoas.controller';
import { CocoasService } from './cocoas.service';

@Module({
    controllers: [CocoasController],
    providers: [CocoasService]
})
export class CocoasModule {}
