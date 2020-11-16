import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IExamplesRepository from '../repositories/IExamplesRepository';

import Example from '../typeorm/entities/Example';

@injectable()
class UpdateExampleService {
  constructor(
    @inject('ExamplesRepository')
    private examplesRepository: IExamplesRepository,
  ) {}

  public async execute(id: string): Promise<Example | undefined> {
    const example = await this.examplesRepository.findById(id);

    if (!example) {
      throw new AppError('Example not found.');
    }

    return example;
  }
}

export default UpdateExampleService;
