import { Module } from '@nestjs/common';
import { CocoasController } from './cocoas.controller';
import { CocoasService } from './cocoas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocoa } from './entities/cocoa.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cocoa, Flavor])],
    controllers: [CocoasController],
    providers: [CocoasService]
})
export class CocoasModule {}
