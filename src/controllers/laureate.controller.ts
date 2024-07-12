import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';

import { CreateLaureateInputDto, LaureateDto, LaureateListDto } from "../dtos/laureate";
import { LaureateService } from '../services';

export class LaureateController {
  constructor(
    private readonly laureateService: LaureateService,
  ) {}

  public create = async (
    req: Request<unknown, unknown, CreateLaureateInputDto>,
    res: Response<LaureateDto>,
  ): Promise<Response<LaureateDto>> => {
    const laureate = await this.laureateService.create(
      req.body,
    );
    return res.status(201).json(
      plainToInstance(LaureateDto, laureate),
    );
  }

  public find = async (
    _req: Request,
    res: Response<LaureateListDto>
  ): Promise<Response<LaureateListDto>> => {
    const [foundLaureates, total] = await this.laureateService.find();
    const laureates = foundLaureates.map((laureate) => (
      plainToInstance(LaureateDto, laureate)
    ));
    return res.status(200).json(
      plainToInstance(LaureateListDto, {
        laureates,
        total,
      }),
    );
  }
}