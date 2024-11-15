import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocoasController } from './cocoas/cocoas.controller';
import { CocoasService } from './cocoas/cocoas.service';
import { CocoasModule } from './cocoas/cocoas.module';

@Module({
  imports: [CocoasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
