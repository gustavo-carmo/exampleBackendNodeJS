import AppError from '@shared/errors/AppError';
import FakeExamplesRepository from '../repositories/fakes/FakeExamplesRepository';
import UpdateExampleService from './UpdateExampleService';

let fakeExamplesRepository: FakeExamplesRepository;
let updateExamplesService: UpdateExampleService;

describe('UpdateExample', () => {
  beforeEach(() => {
    fakeExamplesRepository = new FakeExamplesRepository();

    updateExamplesService = new UpdateExampleService(fakeExamplesRepository);
  });

  it('should be able to update example', async () => {
    const example = await fakeExamplesRepository.create({
      name: 'São Paulo',
      email: 'SP',
    });

    await updateExamplesService.execute({
      id: example.id,
      name: 'Novo Estado',
      email: 'TT',
    });

    expect(example).toHaveProperty('id');
    expect(example.name).toBe('Novo Estado');
    expect(example.email).toBe('TT');
  });

  it('should not to be able to update an inexistent example', async () => {
    await expect(
      updateExamplesService.execute({
        id: 'fake-example-id',
        name: 'São Paulo',
        email: 'TT',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not to be able to update example', async () => {
    await fakeExamplesRepository.create({
      name: 'São Paulo',
      email: 'SP',
    });

    const example = await fakeExamplesRepository.create({
      name: 'Santa Catarina',
      email: 'SC',
    });

    await expect(
      updateExamplesService.execute({
        id: example.id,
        name: 'São Paulo',
        email: 'TT',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      updateExamplesService.execute({
        id: example.id,
        name: 'Santa Catarina',
        email: 'SP',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
