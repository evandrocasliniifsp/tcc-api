import { InstitutionDto } from "./institution.dto";

export class InstitutionListDto {
  public readonly institutions!: InstitutionDto[];

  public readonly total!: number;
}