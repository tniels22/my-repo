import { Module } from '@nestjs/common';
import { CocoasController } from './cocoas.controller';
import { CocoasService } from './cocoas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocoa } from './entities/cocoa.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cocoa])],
    controllers: [CocoasController],
    providers: [CocoasService]
})
export class CocoasModule {}
