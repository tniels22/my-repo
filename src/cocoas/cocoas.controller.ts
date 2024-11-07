import { Controller, Get, Post, Param, Body, HttpCode, HttpStatus, Res} from '@nestjs/common';

@Controller('cocoa')
export class CocoasController {
    //The Express way to do it enabling pattern manipulation and library specific features.
    // Lose compatability with intercepqtors and http decorator
    //requires mocking to test
    // @Get()
    // findAll(@Res() response) {
    //     response.status(200).send('This action returns all cocoa flavors');
    // }


    @Get('flavors')
    findAll(): string {
        return 'This action returns all cocoa flavors';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns #${id} cocoa flavor`;
    }

    //Example of post with non-default httpcode
    /*
        @Post()
        @HttpCode(HttpStatus.GONE) // Most helpful for status code is static // we could use under the hood fastify instead.
        create(@Body() body) {
        return body;
        // return `This action creates a coffee`;
        }
    */
    @Post()
    @HttpCode()
    create(@Body() body) {
      return body;

    
}
