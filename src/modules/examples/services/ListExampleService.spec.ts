import FakeExamplesRepository from '../repositories/fakes/FakeExamplesRepository';
import ListExampleService from './ListExampleService';

let fakeExamplesRepository: FakeExamplesRepository;
let listExamplesService: ListExampleService;

describe('ListExample', () => {
  beforeEach(() => {
    fakeExamplesRepository = new FakeExamplesRepository();

    listExamplesService = new ListExampleService(fakeExamplesRepository);
  });

  it('should be able to list examples', async () => {
    const example1 = await fakeExamplesRepository.create({
      name: 'São Paulo',
      email: 'SP',
    });

    const example2 = await fakeExamplesRepository.create({
      name: 'Santa Catarina',
      email: 'SC',
    });

    const examples = await listExamplesService.execute({});

    expect(examples).toEqual([example1, example2]);
    // TODO CREATE TESTS TO VALIDATE THE LIKE
  });
});
