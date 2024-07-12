import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Institution } from "./Institution";
import { Laureate } from "./Laureate";
import { Prize } from "./Prize";

@Entity()
export class LaureatePrize extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id!: string;

  @ManyToOne(() => Prize, (prize) => prize.laureatePrizes)
  public readonly prize!: Prize;

  @ManyToOne(() => Laureate, (laureate) => laureate.laureatePrizes)
  public readonly laureate!: Laureate;

  @ManyToOne(() => Institution, (institution) => institution.laureatePrizes)
  public readonly institution!: Institution;
  
  @CreateDateColumn({ type: 'timestamptz' })
  public readonly createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  public readonly updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  public readonly deletedAt?: Date;
}