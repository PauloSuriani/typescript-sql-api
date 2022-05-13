import { Request, Response, NextFunction } from 'express';
import ProductServices from '../services/productServices';

export default class ProductController {
  public productServices = new ProductServices();

  public getAll = async (_req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const products = await this.productServices.getAll();
    return res.status(200).json(products);
  };
}