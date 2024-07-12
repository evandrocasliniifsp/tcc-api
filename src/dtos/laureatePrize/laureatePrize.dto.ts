import { InstitutionDto } from "../institution";
import { LaureateDto } from "../laureate";
import { PrizeDto } from "../prize";

export class LaureatePrizeDto {
  public readonly id!: string;

  public readonly prize!: PrizeDto;

  public readonly laureate!: LaureateDto;

  public readonly institution!: InstitutionDto;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt?: Date;
}