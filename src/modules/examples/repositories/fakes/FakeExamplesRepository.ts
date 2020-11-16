import ICreateExampleDTO from '@modules/examples/dtos/ICreateExampleDTO';
import IExamplesRepository from '@modules/examples/repositories/IExamplesRepository';

import Example from '@modules/examples/typeorm/entities/Example';
import IFindExampleDTO from '@modules/examples/dtos/IFindExampleDTO';
import { uuid } from 'uuidv4';

class FakeExamplesRepository implements IExamplesRepository {
  private examples: Example[] = [];

  public async create({ name, email }: ICreateExampleDTO): Promise<Example> {
    const example = new Example();

    Object.assign(example, { id: uuid(), name, email });

    this.examples.push(example);

    return example;
  }

  public async findById(id: string): Promise<Example | undefined> {
    return this.examples.find((example) => example.id === id);
  }

  public async save(example: Example): Promise<Example> {
    const exampleIndex = this.examples.findIndex(
      (findExample) => findExample.id === example.id,
    );

    this.examples[exampleIndex] = example;

    return example;
  }

  public async delete(example: Example): Promise<void> {
    const exampleIndex = this.examples.findIndex(
      (findExample) => findExample.id === example.id,
    );

    this.examples.splice(exampleIndex, 1);
  }

  public async find({ name, email }: IFindExampleDTO): Promise<Example[]> {
    return this.examples.filter(
      (example) =>
        (name && example.name === name) ||
        (email && example.email === email) ||
        (!name && !email && example),
    );
  }
}

export default FakeExamplesRepository;
