import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cocoa } from './entities/cocoa.entity';
import { CreateCocoaDto } from './dto/create-cocoa.dto.ts/create-cocoa.dto';
import { UpdateCocoaDto } from './dto/update-cocoa.dto.ts/update-cocoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Flavor } from './entities/flavor.entity';
@Injectable()
export class CocoasService {
    constructor( 
        @InjectRepository(Cocoa)
        private readonly cocoasRepository: Repository<Cocoa>,
        @InjectRepository(Flavor)
        private readonly flavorRepository: Repository<Flavor>,
    ) {}

    private cocoas_list: Cocoa[] = [
        {
            id: 1,
            name: 'Dark Chocolate',
            brand: 'Hershey',
            description: 'Dark chocolate is a form of chocolate containing cocoa solids, cocoa butter and sugar, without the milk found in milk chocolate.',
            flavors: ['bitter', 'sweet'],
            price: 2.99,
            quantity: 100,
            image: 'https://images.unsplash.com/photo-1562887063-8c9b3a3a3f1e'
        },
        {
            id: 2,
            name: 'Milk Chocolate',
            brand: 'Cadbury',
            description: 'Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk.',
            flavors: ['sweet', 'milky'],
            price: 1.9,
            quantity: 200,
            image: 'https://images.unsplash.com/photo-1562887063-8c9b3a3a3f1e'
        },
        {
            id: 3,
            name: 'White Chocolate',
            brand: 'Lindt',
            description: 'White chocolate is a chocolate confection, pale ivory in color, made from cocoa butter, sugar, milk solids and sometimes vanilla.',
            flavors: ['sweet', 'milky'],
            price: 3.99,
            quantity: 50,
            image: 'https://images.unsplash.com/photo-1562887063-8c9b3a3a3f1e'
        }
    ];

    async findAll() {
        return this.cocoasRepository.find({
            relations: {
                flavors: true,
            },
        }
        );
    }
    
    async findOne(id: number) {
        const cocoa = await this.cocoasRepository.findOne({ 
            where: { id: +id},
            relations: {
                flavors: true,
            }
        });
        if (!cocoa) {
            // Use HttpException to throw a 404 error if the cocoa is not found
            // throw new HttpException(`Cocoa #${id} not found`, HttpStatus.NOT_FOUND);
            throw new NotFoundException(`Cocoa #${id} not found`); // Helper -> NotFoundException
        }
        return cocoa;
    }
    async create(CreateCocoaDto : CreateCocoaDto) {
        const flavors = await Promise.all(
            CreateCocoaDto.flavors.map(name => this.preloadFlavorByName(name)),
        );
        const cocoa = await this.cocoasRepository.create({
            ...CreateCocoaDto,
            flavors,
        });
        return this.cocoasRepository.save(cocoa);
    }

    // async update(id: string, UpdateCocoaDto: UpdateCocoaDto) {
    //     const existingCocoa = this.cocoasRepository.preload({
    //         id: +id,
    //         ...UpdateCocoaDto,
    //     });
    //     if (!existingCocoa) {
    //         throw new NotFoundException(`Cocoa #${id} not found`);
    //     }
    //     return this.cocoasRepository.save(existingCocoa);
    // }

    async remove(id: string) {
        const cocoa = await this.findOne(+id);
        return this.cocoasRepository.remove(cocoa);
    } 

    private async preloadFlavorByName(name: string): Promise<Flavor> {
        const existingFlavor = await this.cocoasRepository.findOne({ 
            where: {name},
        });
        // if (existingFlavor) {
        //     return existingFlavor;
        // }
        return this.flavorRepository.create({ name });
    }
}
