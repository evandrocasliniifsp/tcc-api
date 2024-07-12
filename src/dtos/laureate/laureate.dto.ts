import { LaureatePrizeDto } from "../laureatePrize";

export class LaureateDto {
  public readonly id!: string;

  public readonly firstname!: string;

  public readonly surname?: string;

  public readonly birthDate?: Date;

  public readonly deathDate?: Date;

  public readonly birthLocation?: string;

  public readonly deathLocation?: string;

  public readonly gender!: string;

  public readonly laureatePrizes!: LaureatePrizeDto[];

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt?: Date;
}