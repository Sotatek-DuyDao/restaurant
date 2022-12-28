import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
}
