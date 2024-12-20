import { Injectable } from '@nestjs/common';
import { CocoasService } from 'src/cocoas/cocoas.service';

@Injectable()
export class CocoaRatingService {
    constructor(private readonly cocoasService: CocoasService) {}
}
