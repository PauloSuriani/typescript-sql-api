import { Request, Response, NextFunction } from 'express';
import OrderServices from '../services/orderServices';

export default class OrderController {
  public orderServices = new OrderServices();

  public getAll = async (_req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const orders = await this.orderServices.getAll();
    console.log('orders: ', orders);
    return res.status(200).json(orders);
  }; 
}