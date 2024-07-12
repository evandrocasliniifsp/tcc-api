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
export class Institution extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id!: string;

  @Column()
  public readonly name!: string;

  @Column()
  public readonly headquarters!: string;

  @OneToMany(() => LaureatePrize, (laureatePrize) => laureatePrize.institution, {
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