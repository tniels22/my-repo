import { cp } from 'fs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Cocoa {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    description: string;

    @Column('json', { array: true })
    flavor: string[];

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    image: string;
}