import { Prize } from "../../domain/entities";

export class PrizeListDto {
  public readonly prizes!: Prize[];

  public readonly total!: number;
}