import { Router } from 'express';

import UserControllers from '../controllers/userControllers';
import ValidationsUser from '../middlewares/userValidation';

const userControllers = new UserControllers();
const validationsUser = new ValidationsUser();

const route = Router();

route.post(
  '/',
  validationsUser.userNameVerify,
  validationsUser.userClasseVerify,
  validationsUser.userLevelVerify,
  validationsUser.userPasswordVerify,
  userControllers.create,
);

export default route;