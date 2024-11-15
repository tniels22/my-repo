import { Controller, Get, Post, Patch, Param, Body, HttpCode, HttpStatus, Res, Query} from '@nestjs/common';
import { CocoasService } from './cocoas.service';
import { Cocoa } from './entities/cocoa.entity';
import { CreateCocoaDto } from './dto/create-cocoa.dto.ts/create-cocoa.dto';
import { UpdateCocoaDto } from './dto/update-cocoa.dto.ts/update-cocoa.dto';

@Controller('cocoa')
export class CocoasController {
    constructor(private readonly cocoasService: CocoasService) {}
    // EXPRESS EXAMPLE //
    //The Express way to do it enabling pattern manipulation and library specific features.
    // - Lose compatability with interceptors and http decorator
    // - Requires mocking to test
    // - Requires middleware to handle

    // @Get()
    // findAll(@Res() response) {
    //     response.status(200).send('This action returns all cocoa flavors');
    // }
    /////////////////////

    @Get('flavors')
    findAll(@Query() paginationQuery): Cocoa[] {
        // const { limit, offset } = paginationQuery;
        return this.cocoasService.findAll();
        // return 'This action returns all cocoa flavors';
    }

    @Get('flavors')
    findAllFlavors(): Cocoa[] {
        return this.cocoasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Cocoa {
        return this.cocoasService.findOne(id);
    }

    //Example of post with non-default httpcode
    // @Post()
    // @HttpCode(HttpStatus.GONE) // Most helpful for status code is static // we could use under the hood fastify instead.
    // create(@Body() body) {
    // return body;
    // // return `This action creates a coffee`;
    // }
    
    @Post()
    create(@Body() CreateCocoaDto: CreateCocoaDto) {
      return this.cocoasService.create(CreateCocoaDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateCocoaDto: UpdateCocoaDto) {
        return this.cocoasService.update(id, UpdateCocoaDto);
    }
    
}
