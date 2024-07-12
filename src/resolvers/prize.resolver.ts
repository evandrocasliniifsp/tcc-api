import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Resolver, Query } from 'type-graphql';
import { Service } from 'typedi';

import { PrizeListSchema } from '../graphql';
import { PrizeService } from '../services';

@Service()
@Resolver()
export class PrizeResolver {
  constructor(
    private readonly prizeService: PrizeService,
  ) {}

  @Query(() => PrizeListSchema)
  public async findPrize() {
    const [prizes, total] = await this.prizeService.find();
    return plainToInstance(PrizeListSchema, {
      prizes: instanceToPlain(prizes),
      total
    });
  }
}