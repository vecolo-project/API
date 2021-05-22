import { Inject, Service } from 'typedi';
import CRUD from './CRUD';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Logger } from 'winston';
import { IssueThread, IssueThreadRepository } from '../entities/IssueThread';

@Service()
export default class IssueThreadService extends CRUD<IssueThread> {
  constructor(
    @InjectRepository(IssueThread)
    protected issueThreadRepo: IssueThreadRepository,
    @Inject('logger')
    protected logger: Logger
  ) {
    super(issueThreadRepo, logger);
  }
}
