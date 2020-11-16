import ICreateExampleDTO from '../dtos/ICreateExampleDTO';
import IFindExampleDTO from '../dtos/IFindExampleDTO';
import Example from '../typeorm/entities/Example';

export default interface IExamplesRepository {
  create(date: ICreateExampleDTO): Promise<Example>;
  findById(id: string): Promise<Example | undefined>;
  find(date: IFindExampleDTO): Promise<Example[]>;
  save(example: Example): Promise<Example>;
  delete(example: Example): Promise<void>;
}
