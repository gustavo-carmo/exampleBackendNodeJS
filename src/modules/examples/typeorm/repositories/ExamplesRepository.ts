import { getRepository, Like, Repository } from 'typeorm';

import ICreateExampleDTO from '@modules/examples/dtos/ICreateExampleDTO';
import IExamplesRepository from '@modules/examples/repositories/IExamplesRepository';

import Example from '@modules/examples/typeorm/entities/Example';
import IFindExampleDTO from '@modules/examples/dtos/IFindExampleDTO';

class ExamplesRepository implements IExamplesRepository {
  private ormRepository: Repository<Example>;

  constructor() {
    this.ormRepository = getRepository(Example);
  }

  public async findById(id: string): Promise<Example | undefined> {
    const example = await this.ormRepository.findOne({
      where: {
        _id: id,
      },
    });

    return example;
  }

  public async find({ name, email }: IFindExampleDTO): Promise<Example[]> {
    const queryParams = {};

    if (name) {
      Object.assign(queryParams, { name: Like(`%${name}%`) });
    }

    if (email) {
      Object.assign(queryParams, { email: Like(`%${email}%`) });
    }

    const examples = await this.ormRepository.find({
      where: queryParams,
    });

    return examples;
  }

  public async create({ name, email }: ICreateExampleDTO): Promise<Example> {
    const example = this.ormRepository.create({
      name,
      email,
    });

    await this.ormRepository.save(example);

    return example;
  }

  public async findByName(name: string): Promise<Example | undefined> {
    const example = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return example;
  }

  public async save(example: Example): Promise<Example> {
    return this.ormRepository.save(example);
  }

  public async delete(example: Example): Promise<void> {
    await this.ormRepository.remove(example);
  }
}

export default ExamplesRepository;
