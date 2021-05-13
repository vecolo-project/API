import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  EntityRepository,
  Repository,
  OneToMany,
} from 'typeorm';
import { Service } from 'typedi';
import { BikeModel } from './BikeModel';

@Entity()
export class BikeManufacturer extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @OneToMany(() => BikeModel, (bikeModel) => bikeModel.bikeManufacturer)
  bikeModel: BikeModel[];
}

@Service()
@EntityRepository(BikeManufacturer)
export class UserRepository extends Repository<BikeManufacturer> {}
