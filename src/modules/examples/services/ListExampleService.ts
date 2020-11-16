import { injectable, inject } from 'tsyringe';

import IExamplesRepository from '../repositories/IExamplesRepository';

import Example from '../typeorm/entities/Example';

interface IRequest {
  name?: string;
  email?: string;
}

@injectable()
class ListExampleService {
  constructor(
    @inject('ExamplesRepository')
    private examplesRepository: IExamplesRepository,
  ) {}

  public async execute({ name, email }: IRequest): Promise<Example[]> {
    const examples = await this.examplesRepository.find({ name, email });

    return examples;
  }
}

export default ListExampleService;
