import { Service } from 'typedi';
import { Equal } from "typeorm";

import { Institution } from "../domain/entities";
import { CreateInstitutionInputDto } from "../dtos/institution";

@Service()
export class InstitutionService {
  public async create(
    createInstitutionInputDto: CreateInstitutionInputDto,
  ): Promise<Institution> {
    return Institution.save(
      Institution.create({
        ...(createInstitutionInputDto.id && {
          id: createInstitutionInputDto.id,
          name: createInstitutionInputDto.name,
          headquarters: createInstitutionInputDto.headquarters,
        }),
      }),
    );
  }

  public async findOne(id: string): Promise<Institution> {
    return Institution.findOneOrFail({
      where: {
        id: Equal(id),
      },
      withDeleted: false,
      relations: {
        laureatePrizes: true,
      },
    });
  }

  public async find(): Promise<[Institution[], number]> {
    return Institution.findAndCount({
      relations: {
        laureatePrizes: {
          prize: true,
          laureate: true,
        },
      },
    });
  }
}