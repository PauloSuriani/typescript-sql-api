import { Request, Response, NextFunction } from 'express';
import ProductServices from '../services/productServices';

export default class ProductController {
  public productServices = new ProductServices();

  public getAll = async (_req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const products = await this.productServices.getAll();
    return res.status(200).json(products);
  };
  
  public create = 
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { name, amount } = req.body; 
    try {
      const newProduct = await this.productServices.create(name, amount);
      return res.status(201).json(newProduct);
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('Product already exists')) {
        return res.status(409).json({ message: error.message });
      }
      next(error);
    }  
  };   
}