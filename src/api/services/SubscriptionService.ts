import { Inject, Service } from 'typedi';
import CRUD, { getAllParams } from './CRUD';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Logger } from 'winston';
import { Subscription, SubscriptionRepository } from '../entities/Subscription';

@Service()
export default class SubscriptionService extends CRUD<Subscription> {
  constructor(
    @InjectRepository(Subscription)
    protected subscriptionRepo: SubscriptionRepository,
    @Inject('logger')
    protected logger: Logger
  ) {
    super(subscriptionRepo, logger);
  }

  async getAllFromPlan(
    id: number,
    params: getAllParams
  ): Promise<Subscription[]> {
    return this.repo.find({
      where: {
        plan: id,
      },
      skip: params.offset,
      take: params.limit,
    });
  }
  async getAllWithRelation(params: getAllParams): Promise<Subscription[]> {
    const result = await this.repo.find({
      relations: ['plan', 'user'],
      skip: params.offset,
      take: params.limit,
    });
    for (const sub of result) {
      Reflect.deleteProperty(sub.user, 'password');
    }
    return result;
  }
}
