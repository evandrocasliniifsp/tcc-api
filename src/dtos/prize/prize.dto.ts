import { LaureatePrizeDto } from "../laureatePrize";

export class PrizeDto {
  public readonly id!: string;

  public readonly year!: number;

  public readonly category!: string;

  public readonly share!: number;

  public readonly motivation!: string;

  public readonly laureatePrizes!: LaureatePrizeDto[];

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt?: Date;
};