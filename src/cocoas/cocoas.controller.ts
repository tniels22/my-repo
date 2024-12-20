import { Controller, Get, Post, Patch, Param, Body, HttpCode, HttpStatus, Res, Query} from '@nestjs/common';
import { CocoasService } from './cocoas.service';
import { Cocoa } from './entities/cocoa.entity';
import { CreateCocoaDto } from './dto/create-cocoa.dto.ts/create-cocoa.dto';
import { UpdateCocoaDto } from './dto/update-cocoa.dto.ts/update-cocoa.dto';

@Controller('cocoa')
export class CocoasController {
    constructor(private readonly cocoasService: CocoasService) {}
    
    // EXPRESS EXAMPLE //
    // The Express way to do it enabling pattern manipulation and library specific features.
    // - Lose compatability with interceptors and http decorator
    // - Requires mocking to test
    // - Requires middleware to handle

    // @Get()
    // findAll(@Res() response) {
    //     response.status(200).send('This action returns all cocoa flavors');
    // }
    /////////////////////

    @Get()
    async findAll(@Query() paginationQuery): Promise<Cocoa[]> {
        const { limit, offset } = paginationQuery;
        const cocoas = await this.cocoasService.findAll();
        return cocoas;
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Cocoa> {
        const cocoa = await this.cocoasService.findOne(id);
        return cocoa;
    }

    @Get('flavors')
    async findAllFlavors(): Promise<Cocoa[]> {
        const cocoas = await this.cocoasService.findAll();
        return cocoas;
    }

    @Post()
    async create(@Body() CreateCocoaDto: CreateCocoaDto): Promise<Cocoa> {
        const cocoa = await this.cocoasService.create(CreateCocoaDto);
        return cocoa;
    }

    //Example of post with non-default httpcode
    // @Post()
    // @HttpCode(HttpStatus.GONE) // Most helpful for status code is static // we could use under the hood fastify instead.
    // create(@Body() body) {
    // return body;
    // // return `This action creates a coffee`;
    // }

    // @Patch(':id')
    // async update(@Param('id') id: string, @Body() UpdateCocoaDto: UpdateCocoaDto): Promise<Cocoa> {
    //     const cocoa = await this.cocoasService.update(id, UpdateCocoaDto);
    //     return cocoa;
    // }
    
}
