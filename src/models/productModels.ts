// import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [product] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return product as IProduct[];
  };

/*  public create = async (name: string, quantity: number): Promise<IProduct> => {
    const [product] = await conn.execute<ResultSetHeader>(
      'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);',
      [name, quantity],
    );
  
    return { id: product.insertId, name, quantity };
  };    */
}