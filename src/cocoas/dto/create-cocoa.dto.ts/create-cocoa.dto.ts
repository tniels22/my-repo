import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateCocoaDto {
    @IsString()
    name: string;

    @IsString()
    brand: string;

    @IsString()
    description: string;

    @IsString({ each: true })
    flavor: string[];

    @IsNumber()
    price: number;

    @IsNumber()
    quantity: number;
    
    @IsString()
    image: string;
}
