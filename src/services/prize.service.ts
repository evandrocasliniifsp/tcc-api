import { Service } from 'typedi';
import { Equal } from "typeorm";

import { Prize } from "../domain/entities";
import { CreatePrizeInputDto } from "../dtos/prize";

@Service()
export class PrizeService {
  public async create(
    createPrizeInputDto: CreatePrizeInputDto,
  ): Promise<Prize> {
    return Prize.save(
      Prize.create({
        ...(createPrizeInputDto.id && {
          id: createPrizeInputDto.id,
        }),
        year: createPrizeInputDto.year,
        category: createPrizeInputDto.category,
        share: createPrizeInputDto.share,
        motivation: createPrizeInputDto.motivation,
      }),
    );
  }

  public async findOne(id: string): Promise<Prize> {
    return Prize.findOneOrFail({
      where: {
        id: Equal(id),
      },
      withDeleted: false,
      relations: {
        laureatePrizes: true,
      },
    });
  }

  public async find(): Promise<[Prize[], number]> {
    return Prize.findAndCount({
      relations: {
        laureatePrizes: {
          laureate: true,
          institution: true,
        },
      },
    });
  }
}