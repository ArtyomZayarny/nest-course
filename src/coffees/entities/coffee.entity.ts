import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //sql table === 'coffee'
export class Coffe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
