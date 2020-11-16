import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IExamplesRepository from '../repositories/IExamplesRepository';

import Example from '../typeorm/entities/Example';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

@injectable()
class UpdateExampleService {
  constructor(
    @inject('ExamplesRepository')
    private examplesRepository: IExamplesRepository,
  ) {}

  public async execute({
    id,
    name,
    email,
  }: IRequest): Promise<Example | undefined> {
    const example = await this.examplesRepository.findById(id);

    if (!example) {
      throw new AppError('Example not found.');
    }

    // TODO - Change this find to a findByName - The generic find, search by like and we need validate if the name is exactly the same
    let examples = await this.examplesRepository.find({
      name,
    });

    const exampleWithName = examples.length ? examples[0] : null;

    if (exampleWithName && String(exampleWithName.id) !== String(id)) {
      throw new AppError('Example name already in use.');
    }

    // TODO - Change this find to a findByEmail - The generic find, search by like and we need validate if the email is exactly the same
    examples = await this.examplesRepository.find({
      email,
    });

    const exampleWithAbbreviation = examples.length ? examples[0] : null;

    if (
      exampleWithAbbreviation &&
      String(exampleWithAbbreviation.id) !== String(id)
    ) {
      throw new AppError('Example email already in use.');
    }

    Object.assign(example, { name, email });

    await this.examplesRepository.save(example);

    return example;
  }
}

export default UpdateExampleService;
