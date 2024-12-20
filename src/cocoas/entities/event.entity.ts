import { Entity, PrimaryColumn, Column, Index } from "typeorm";

@Index(['type', 'name'])
@Entity()
export class Event {
    @PrimaryColumn()
    id: number;

    @Column()
    type: string;

    @Index()
    @Column()
    name: string;

    @Column()
    payload: Record<string, any>;

}
