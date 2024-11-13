import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocoasController } from './cocoas/cocoas.controller';
import { CocoasService } from './cocoas/cocoas.service';

@Module({
  imports: [],
  controllers: [AppController, CocoasController],
  providers: [AppService, CocoasService],
})
export class AppModule {}
