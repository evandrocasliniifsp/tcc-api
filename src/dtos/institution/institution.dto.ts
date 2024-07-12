import { LaureatePrizeDto } from "../laureatePrize";

export class InstitutionDto {
  public readonly id!: string;

  public readonly name!: string;

  public readonly headquarters!: string;

  public readonly laureatePrizes!: LaureatePrizeDto[];

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt?: Date;
}