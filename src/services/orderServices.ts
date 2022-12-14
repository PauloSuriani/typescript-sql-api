import OrderModels from '../models/orderModels';
import ProductModels from '../models/productModels';

export default class OrderServices {
  public orderModels = new OrderModels();

  public productModels = new ProductModels();

  public getAll = async (): Promise<object> => {
    const orders = await this.orderModels.getAll();

    const products = await this.productModels.getAll();
    
    const ordersObject = orders.map((order) => (
      {
        id: order.id,
        userId: order.userId,
        productsIds: products
          .map((product) => { 
            if (product.orderId === order.id) return product.id;
            return 0;
          }).filter(Boolean),
      }
    ));

    return ordersObject;
  };
}