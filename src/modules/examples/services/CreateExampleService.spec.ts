import AppError from '@shared/errors/AppError';
import FakeExamplesRepository from '../repositories/fakes/FakeExamplesRepository';
import CreateExampleService from './CreateExampleService';

let fakeExamplesRepository: FakeExamplesRepository;
let createExamplesService: CreateExampleService;

describe('CreateExample', () => {
  beforeEach(() => {
    fakeExamplesRepository = new FakeExamplesRepository();

    createExamplesService = new CreateExampleService(fakeExamplesRepository);
  });

  it('should be able to create a new example', async () => {
    const example = await createExamplesService.execute({
      name: 'São Paulo',
      email: 'SP',
    });

    expect(example).toHaveProperty('id');
  });

  it('should not be able to create two examples with same name', async () => {
    await createExamplesService.execute({
      name: 'São Paulo',
      email: 'SP',
    });

    await expect(
      createExamplesService.execute({
        name: 'São Paulo',
        email: 'SC',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create two examples with same name', async () => {
    await createExamplesService.execute({
      name: 'São Paulo',
      email: 'SP',
    });

    await expect(
      createExamplesService.execute({
        name: 'Santa Catarina',
        email: 'SP',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
