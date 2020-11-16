import AppError from '@shared/errors/AppError';
import FakeExamplesRepository from '../repositories/fakes/FakeExamplesRepository';
import ShowExampleService from './ShowExampleService';

let fakeExamplesRepository: FakeExamplesRepository;
let showExamplesService: ShowExampleService;

describe('ShowExample', () => {
  beforeEach(() => {
    fakeExamplesRepository = new FakeExamplesRepository();

    showExamplesService = new ShowExampleService(fakeExamplesRepository);
  });

  it('should be able to show example', async () => {
    const example = await fakeExamplesRepository.create({
      name: 'Example Test',
      email: 'example@test.com',
    });

    const exampleRecovered = await showExamplesService.execute(example.id);

    expect(exampleRecovered).toHaveProperty('id');
    expect(example.name).toBe('Example Test');
    expect(example.email).toBe('example@test.com');
  });

  it('should not to be able to show an inexistent example', async () => {
    await expect(
      showExamplesService.execute('fake-example-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
