import IOrder from '../interfaces/order.interface';
import connection from './connection';

export default class OrderModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return orders as IOrder[];
  };
}