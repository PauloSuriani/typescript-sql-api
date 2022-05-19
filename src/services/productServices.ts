import ProductModels from '../models/productModels';
import IProduct from '../interfaces/product.interface';

export default class ProductServices {
  public productModels = new ProductModels();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.productModels.getAll();
    return products;
  };

  public create = async (name: string, amount: string): Promise<IProduct> => {
    const product = await this.productModels.create(name, amount);
    return product;
  };    
}