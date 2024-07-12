import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Resolver, Query } from 'type-graphql';
import { Service } from 'typedi';

import { LaureatePrizeListSchema } from '../graphql';
import { LaureatePrizeService } from '../services';

@Service()
@Resolver()
export class LaureatePrizeResolver {
  constructor(
    private readonly laureatePrizeService: LaureatePrizeService,
  ) {}

  @Query(() => LaureatePrizeListSchema)
  public async findLaureatePrize() {
    const [laureatePrizes, total] = await this.laureatePrizeService.find();
    return plainToInstance(LaureatePrizeListSchema, {
      laureatePrizes: instanceToPlain(laureatePrizes),
      total
    });
  }
}