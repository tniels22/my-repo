import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';
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

    @JoinTable()
    @ManyToMany( 
        type => Flavor, 
        (flavor) => flavor.cocoas
    )
    flavors: string[];

    @Column('decimal')
    price: number;

    @Column()
    quantity: number;

    @Column()
    image: string;
}