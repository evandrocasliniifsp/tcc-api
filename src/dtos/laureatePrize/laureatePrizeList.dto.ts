import { LaureatePrizeDto } from "./laureatePrize.dto";

export class LaureatePrizeListDto {
  public readonly laureatePrizes!: LaureatePrizeDto;

  public readonly total!: number;
}