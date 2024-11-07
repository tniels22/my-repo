import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocoasController } from './cocoas/cocoas.controller';

@Module({
  imports: [],
  controllers: [AppController, CocoasController],
  providers: [AppService],
})
export class AppModule {}
