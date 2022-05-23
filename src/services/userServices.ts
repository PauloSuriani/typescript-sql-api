import { sign } from 'jsonwebtoken';
import UserModels from '../models/userModels';

export default class UserServices {
  public userModels = new UserModels();

  public create = 
  async (username: string, classe: string, level: number, password:string): Promise<string> => {
    const newUserId = await this.userModels.create(username, classe, level, password);

    const userToken = sign({ id: newUserId }, 'novocodsecreto', { expiresIn: '15m' });
    return userToken;
  };    
}