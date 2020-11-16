import { container } from 'tsyringe';

import IExamplesRepository from '@modules/examples/repositories/IExamplesRepository';
import ExamplesRepository from '@modules/examples/typeorm/repositories/ExamplesRepository';

container.registerSingleton<IExamplesRepository>(
  'ExamplesRepository',
  ExamplesRepository,
);
