import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [product] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return product as IProduct[];
  };

  public create = async (name: string, amount: string): Promise<IProduct> => {
    const [newProduct] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );
  
    const newProductInserted = { 
      id: newProduct.insertId, 
      name, 
      amount, 
    };

    return newProductInserted;
  };    
}