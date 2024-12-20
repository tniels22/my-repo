import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cocoa } from "./cocoa.entity";

@Entity()
export class Flavor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(
        type => Cocoa,
        cocoa => cocoa.flavors,
    )
    cocoas: Cocoa[]
}
