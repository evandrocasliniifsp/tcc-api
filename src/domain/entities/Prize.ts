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
export class Prize extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id!: string;

  @Column({ type: 'integer' })
  public readonly year!: number;
  
  @Column()
  public readonly category!: string;

  @Column({ type: 'integer' })
  public readonly share!: number;

  @Column()
  public readonly motivation!: string;

  @OneToMany(() => LaureatePrize, (laureatePrize) => laureatePrize.prize, {
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