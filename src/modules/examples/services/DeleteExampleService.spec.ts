import AppError from '@shared/errors/AppError';
import FakeExamplesRepository from '../repositories/fakes/FakeExamplesRepository';
import DeleteExampleService from './DeleteExampleService';

let fakeExamplesRepository: FakeExamplesRepository;
let deleteExamplesService: DeleteExampleService;

describe('DeleteExample', () => {
  beforeEach(() => {
    fakeExamplesRepository = new FakeExamplesRepository();

    deleteExamplesService = new DeleteExampleService(fakeExamplesRepository);
  });

  it('should be able to delete example', async () => {
    const example = await fakeExamplesRepository.create({
      name: 'São Paulo',
      email: 'SP',
    });

    const example2 = await fakeExamplesRepository.create({
      name: 'Santa Catarina',
      email: 'SC',
    });

    await deleteExamplesService.execute(example.id);

    const examples = await fakeExamplesRepository.find({});

    expect(examples).toEqual(expect.arrayContaining([example2]));
  });

  it('should not be able to delete an inexistent example', async () => {
    await expect(
      deleteExamplesService.execute('fake-example-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
