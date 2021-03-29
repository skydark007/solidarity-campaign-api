import Product from '../infra/typeorm/entities/Product';

import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IUpdateProductDTO from '../dtos/IUpdateProductDTO';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  update(data: IUpdateProductDTO): Promise<Product>;
  deleteById(id: string): Promise<void>;
}
