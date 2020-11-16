import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListExampleService from '@modules/examples/services/ListExampleService';
import ShowExampleService from '@modules/examples/services/ShowExampleService';
import CreateExampleService from '@modules/examples/services/CreateExampleService';
import UpdateExampleService from '@modules/examples/services/UpdateExampleService';
import DeleteExampleService from '@modules/examples/services/DeleteExampleService';

export default class ExamplesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.query;

    const listExampleService = container.resolve(ListExampleService);

    const examples = await listExampleService.execute({
      ...(name ? { name: String(name) } : {}),
      ...(email ? { email: String(email) } : {}),
    });

    return response.json(examples);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showExampleService = container.resolve(ShowExampleService);

    const example = await showExampleService.execute(id);

    return response.json(example);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createExampleService = container.resolve(CreateExampleService);

    const example = await createExampleService.execute({ name, email });

    return response.json(example);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, email } = request.body;

    const updateExampleService = container.resolve(UpdateExampleService);

    const example = await updateExampleService.execute({
      id,
      name,
      email,
    });

    return response.json(example);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteExampleService = container.resolve(DeleteExampleService);

    await deleteExampleService.execute(id);

    return response.status(204).json();
  }
}
