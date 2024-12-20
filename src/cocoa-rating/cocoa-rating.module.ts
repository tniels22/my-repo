import { Module } from '@nestjs/common';
import { CocoasModule } from 'src/cocoas/cocoas.module';
import { CocoaRatingService } from './cocoa-rating.service';

@Module({
    imports: [CocoasModule],
    controllers: [],
    providers: [CocoaRatingService],
})
export class CocoaRatingModule {}
