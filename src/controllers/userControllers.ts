import { Request, Response, NextFunction } from 'express';
import UserServices from '../services/userServices';

export default class UserController {
  public userServices = new UserServices();

  public create = 
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { username, classe, level, password } = req.body; 
    try {
      const newUserToken = await this.userServices.create(username, classe, level, password);
      return res.status(201).json({ token: newUserToken });
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('User already exists')) {
        return res.status(409).json({ message: error.message });
      }
      next(error);
    }  
  };   
}