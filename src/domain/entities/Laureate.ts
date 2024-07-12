import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { LaureatePrize } from "./LaureatePrize";

@Entity()
export class Laureate extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id!: string;

  @Column()
  public readonly firstname!: string;
  
  @Column({ nullable: true })
  public readonly surname?: string;
  
  @Column({ type: 'timestamptz', nullable: true })
  public readonly birthDate?: Date;
  
  @Column({ type: 'timestamptz', nullable: true })
  public readonly deathDate?: Date;
  
  @Column({ nullable: true })
  public readonly birthLocation?: string;
  
  @Column({ nullable: true })
  public readonly deathLocation?: string;
  
  @Column()
  public readonly gender!: string;

  @OneToMany(() => LaureatePrize, (laureatePrize) => laureatePrize.laureate, {
    cascade: true
  })
  public readonly laureatePrizes!: LaureatePrize[];
  
  @CreateDateColumn({ type: 'timestamptz' })
  public readonly createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  public readonly updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  public readonly deletedAt?: Date;
}