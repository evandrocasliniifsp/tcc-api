import { Service } from 'typedi';

import { LaureatePrize } from "../domain/entities";
import { CreateLaureatePrizeInputDto } from "../dtos/laureatePrize";
import { InstitutionService } from "./institution.service";
import { LaureateService } from "./laureate.service";
import { PrizeService } from "./prize.service";

@Service()
export class LaureatePrizeService {
  constructor(
    private readonly laureateService: LaureateService,
    private readonly prizeService: PrizeService,
    private readonly institutionService: InstitutionService,
  ) {}

  public async create(
    createLaureatePrizeInpuDto: CreateLaureatePrizeInputDto,
  ): Promise<LaureatePrize> {
    const { laureateId, prizeId, institutionId } = createLaureatePrizeInpuDto;

    const laureate = await this.laureateService.findOne(laureateId);
    const prize = await this.prizeService.findOne(prizeId);
    const institution = await this.institutionService.findOne(institutionId);

    return LaureatePrize.save(
      LaureatePrize.create({
        ...(createLaureatePrizeInpuDto.id && {
          id: createLaureatePrizeInpuDto.id,
        }),
        laureate,
        prize,
        institution,
      }),
    );
  }

  public async find(): Promise<[LaureatePrize[], number]> {
    return LaureatePrize.findAndCount({
      relations: {
        prize: true,
        laureate: true,
        institution: true
      },
    });
  }
}