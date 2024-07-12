import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';

import { CreatePrizeInputDto, PrizeDto, PrizeListDto } from '../dtos/prize';
import { PrizeService } from '../services';

export class PrizeController {
  constructor(
    private readonly prizeService: PrizeService,
  ) {}

  public create = async (
    req: Request<unknown, unknown, CreatePrizeInputDto>,
    res: Response<PrizeDto>,
  ): Promise<Response<PrizeDto>> => {
    const prize = await this.prizeService.create(
      req.body,
    );
    return res.status(201).json(
      plainToInstance(PrizeDto, prize),
    );
  }

  public find = async (
    _req: Request,
    res: Response<PrizeListDto>,
  ): Promise<Response<PrizeListDto>> => {
    const [foundPrizes, total] = await this.prizeService.find();
    const prizes = foundPrizes.map((prize) => (
      plainToInstance(PrizeDto, prize)
    ));
    return res.status(200).json(
      plainToInstance(PrizeListDto, {
        prizes,
        total,
      }),
    );
  }
}