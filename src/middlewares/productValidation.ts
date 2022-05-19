import { Response, Request, NextFunction } from 'express';
import IProduct from '../interfaces/product.interface';

export default class ValidationsProduct {
  public productNameVerify = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body as IProduct;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    if ((typeof name) !== 'string') {
      return res.status(422).json({ message: '"name" must be a string' });
    }
    if (name.length < 3) {
      return res.status(422).json({ 
        message: '"name" length must be at least 3 characters long' });
    }
    next();
  };

  public productAmountVerify = (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body as IProduct;
    if (!amount || amount === '') return res.status(400).json({ message: '"amount" is required' });

    if ((typeof amount) !== 'string') {
      return res.status(422).json({ message: '"amount" must be a string' });
    }
    if (amount.length < 3) {
      return res.status(422).json({ 
        message: '"amount" length must be at least 3 characters long' });
    }
    next();
  };
}
