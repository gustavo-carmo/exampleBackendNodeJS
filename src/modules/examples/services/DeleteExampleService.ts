import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { ObjectID } from 'mongodb';
import IExamplesRepository from '../repositories/IExamplesRepository';

@injectable()
class CreateExampleService {
  constructor(
    @inject('ExamplesRepository')
    private examplesRepository: IExamplesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const example = await this.examplesRepository.findById(id);

    if (!example) {
      throw new AppError('Example not found.');
    }

    await this.examplesRepository.delete(example);
  }
}

export default CreateExampleService;
