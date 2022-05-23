import OrderModels from '../models/orderModels';
import ProductModels from '../models/productModels';

export default class ProductServices {
  public orderModels = new OrderModels();

  public productModels = new ProductModels();

  public getAll = async (): Promise<object> => {
    const orders = await this.orderModels.getAll();

    const products = await this.productModels.getAll();
    
    return orders.map((order) => (
      {
        ...order,
        productsIds: products
          .filter((product) => product.orderId === order.id)
          .map((filteredProducts) => filteredProducts.id),
      }
    ));
  };
}

// [
//     {
//       "id": 1,
//       "userId": 2,
//       "productsIds": [1, 2]
//     },
//     {
//       "id": 2,
//       "userId": 2,
//       "productsIds": [3, 4]
//     }
//   ]