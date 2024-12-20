import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocoasController } from './cocoas/cocoas.controller';
import { CocoasService } from './cocoas/cocoas.service';
import { CocoasModule } from './cocoas/cocoas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CocoasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cocoa_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
