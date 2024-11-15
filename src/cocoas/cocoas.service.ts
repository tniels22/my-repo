import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cocoa } from './entities/cocoa.entity';
import { CreateCocoaDto } from './dto/create-cocoa.dto.ts/create-cocoa.dto';
import { UpdateCocoaDto } from './dto/update-cocoa.dto.ts/update-cocoa.dto';

@Injectable()
export class CocoasService {
    private cocoas: Cocoa[] = [
        {
            id: 1,
            name: 'Dark Chocolate',
            brand: 'Hershey',
            description: 'Dark chocolate is a form of chocolate containing cocoa solids, cocoa butter and sugar, without the milk found in milk chocolate.',
            flavor: ['bitter', 'sweet'],
            price: 2.99,
            quantity: 100,
            image: 'https://images.unsplash.com/photo-1562887063-8c9b3a3a3f1e'
        },
        {
            id: 2,
            name: 'Milk Chocolate',
            brand: 'Cadbury',
            description: 'Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk.',
            flavor: ['sweet', 'milky'],
            price: 1.99,
            quantity: 200,
            image: 'https://images.unsplash.com/photo-1562887063-8c9b3a3a3f1e'
        },
        {
            id: 3,
            name: 'White Chocolate',
            brand: 'Lindt',
            description: 'White chocolate is a chocolate confection, pale ivory in color, made from cocoa butter, sugar, milk solids and sometimes vanilla.',
            flavor: ['sweet', 'milky'],
            price: 3.99,
            quantity: 50,
            image: 'https://images.unsplash.com/photo-1562887063-8c9b3a3a3f1e'
        }
    ];

    findAll(): Cocoa[] {
        return this.cocoas;
    }
    // Use HttpException to throw a 404 error if the cocoa is not found
    // findOne(id: string): Cocoa {
    //     const cocoa = this.cocoas.find(cocoa => cocoa.id === +id);
    //     if (!cocoa) {
    //         throw new HttpException(`Cocoa #${id} not found`, HttpStatus.NOT_FOUND);
    //     }
    //     return cocoa;
    // }
    
    // Helper Use NotFoundException to throw a 404 error if the cocoa is not found
    findOne(id: string) {
        const cocoa = this.cocoas.find(cocoa => cocoa.id === +id);
        if (!cocoa) {
            throw new NotFoundException(`Cocoa #${id} not found`);
        }
        return cocoa;
    }
    create(CreateCocoaDto : any) {
        this.cocoas.push(CreateCocoaDto);
        return CreateCocoaDto;
    }

    update(id: string, UpdateCocoaDto: any) {
    const existingCocoa = this.findOne(id);
        if (existingCocoa) {
        // update the existing entity
        }
    }
    remove(id: string): void {
        this.cocoas = this.cocoas.filter(cocoa => cocoa.id !== +id);
    }  
    

}
