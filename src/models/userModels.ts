import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export default class ProductModel {
  public create = 
  async (username: string, classe: string, level: number, password:string): Promise<number> => {
    const [newUser] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
  
    return newUser.insertId;
  };
}
