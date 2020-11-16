import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IExamplesRepository from '../repositories/IExamplesRepository';

import Example from '../typeorm/entities/Example';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateExampleService {
  constructor(
    @inject('ExamplesRepository')
    private examplesRepository: IExamplesRepository,
  ) {}

  public async execute({
    name,
    email,
  }: IRequest): Promise<Example | undefined> {
    // TODO - Change this find to a findByName - The generic find, search by like and we need validate if the name is exactly the same
    let examples = await this.examplesRepository.find({ name });
    let checkExampleExists = examples.length ? examples[0] : null;

    if (checkExampleExists) {
      throw new AppError('Example already created.');
    }

    // TODO - Change this find to a findByEmail - The generic find, search by like and we need validate if the email is exactly the same
    examples = await this.examplesRepository.find({ email });
    checkExampleExists = examples.length ? examples[0] : null;

    if (checkExampleExists) {
      throw new AppError('Example already created.');
    }

    const example = await this.examplesRepository.create({
      name,
      email,
    });

    return example;
  }
}

export default CreateExampleService;
