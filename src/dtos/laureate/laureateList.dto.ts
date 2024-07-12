import { LaureateDto } from "./laureate.dto";

export class LaureateListDto {
  public readonly laureates!: LaureateDto;

  public readonly total!: number;
};