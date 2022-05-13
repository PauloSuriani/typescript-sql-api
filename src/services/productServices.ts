import ProductModels from '../models/productModels';
import IProduct from '../interfaces/product.interface';

export default class ProductServices {
  public productModels = new ProductModels();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.productModels.getAll();
    return products;
  };

  /*    public create = async (name: string, quantity: number): Promise<IProduct> => {
    // const productsWithSameName = await this.model.getByName(name);
    // if (productsWithSameName.length > 0) throw new Error('Product already exists.');
    const product = await this.productModels.create(name, quantity);
    return product;
  };    */
}