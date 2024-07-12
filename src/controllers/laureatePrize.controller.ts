import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';

import { CreateLaureatePrizeInputDto, LaureatePrizeDto, LaureatePrizeListDto } from '../dtos/laureatePrize';
import { LaureatePrizeService } from '../services';

export class LaureatePrizeController {
  constructor(
    private readonly laureatePrizeService: LaureatePrizeService,
  ) {}

  public create = async (
    req: Request<unknown, unknown, CreateLaureatePrizeInputDto>,
    res: Response<LaureatePrizeDto>,
  ): Promise<Response<LaureatePrizeDto>> => {
    const laureatePrize = await this.laureatePrizeService.create(
      req.body,
    );
    return res.status(201).json(
      plainToInstance(LaureatePrizeDto, laureatePrize),
    );
  }

  public find = async (
    _req: Request,
    res: Response<LaureatePrizeListDto>
  ): Promise<Response<LaureatePrizeListDto>> => {
    const [foundLaureatePrizes, total] = await this.laureatePrizeService.find();
    const laureatePrizes = foundLaureatePrizes.map((laureatePrize) => (
      plainToInstance(LaureatePrizeDto, laureatePrize)
    ));
    return res.status(200).json(
      plainToInstance(LaureatePrizeListDto, {
        laureatePrizes,
        total,
      }),
    );
  }
}