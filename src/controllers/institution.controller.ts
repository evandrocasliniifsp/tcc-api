import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';

import { CreateInstitutionInputDto, InstitutionDto, InstitutionListDto } from '../dtos/institution';
import { InstitutionService } from '../services';

export class InstitutionController {
  constructor(
    private readonly institutionService: InstitutionService,
  ) {}

  public create = async (
    req: Request<unknown, unknown, CreateInstitutionInputDto>,
    res: Response<CreateInstitutionInputDto>,
  ): Promise<Response<CreateInstitutionInputDto>> => {
    const institution = await this.institutionService.create(
      req.body,
    );
    return res.status(201).json(
      plainToInstance(InstitutionDto, institution),
    );
  }

  public find = async (
    _req: Request,
    res: Response<InstitutionListDto>
  ): Promise<Response<InstitutionListDto>> => {
    const [foundInstitutions, total] = await this.institutionService.find();
    const institutions = foundInstitutions.map((institution) => (
      plainToInstance(InstitutionDto, institution)
    ));
    return res.status(200).json(
      plainToInstance(InstitutionListDto, {
        institutions,
        total,
      }),
    );
  }
}