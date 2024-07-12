import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Resolver, Query } from 'type-graphql';
import { Service } from 'typedi';

import { LaureateListSchema } from '../graphql';
import { LaureateService } from '../services';

@Service()
@Resolver()
export class LaureateResolver {
  constructor(
    private readonly laureateService: LaureateService,
  ) {}

  @Query(() => LaureateListSchema)
  public async findLaureate() {
    const [laureates, total] = await this.laureateService.find();
    return plainToInstance(LaureateListSchema, {
      laureates: instanceToPlain(laureates),
      total
    });
  }
}