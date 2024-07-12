import { Service } from 'typedi';
import { Equal } from "typeorm";

import { CreateLaureateInputDto } from "../dtos/laureate";
import { Laureate } from "../domain/entities";

@Service()
export class LaureateService {
  public async create(
    createLaureateInputDto: CreateLaureateInputDto
  ): Promise<Laureate> {
    return Laureate.save(
      Laureate.create({
        ...(createLaureateInputDto.id && {
          id: createLaureateInputDto.id,
        }),
        firstname: createLaureateInputDto.firstname,
        surname: createLaureateInputDto.surname,
        ...(createLaureateInputDto.birthDate && {
          birthDate: createLaureateInputDto.birthDate,
        }),
        ...(createLaureateInputDto.deathDate && {
          deathDate: createLaureateInputDto.deathDate,
        }),
        birthLocation: createLaureateInputDto.birthLocation,
        ...(createLaureateInputDto.deathLocation && {
          deathLocation: createLaureateInputDto.deathLocation,
        }),
        gender: createLaureateInputDto.gender,
      })
    );
  }

  public async findOne(id: string): Promise<Laureate> {
    return Laureate.findOneOrFail({
      where: {
        id: Equal(id),
      },
      withDeleted: false,
      relations: {
        laureatePrizes: true,
      },
    });
  }

  public async find(): Promise<[Laureate[], number]> {
    return Laureate.findAndCount({
      relations: {
        laureatePrizes: {
          prize: true,
          institution: true,
        },
      },
    });
  }
}