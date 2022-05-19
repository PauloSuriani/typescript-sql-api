import { Router } from 'express';

import ProductControllers from '../controllers/productControllers';
import ValidationsProduct from '../middlewares/productValidation';

const productControllers = new ProductControllers();
const validationsProduct = new ValidationsProduct();

const route = Router();

route.get('/', productControllers.getAll);
route.post(
  '/',
  validationsProduct.productNameVerify, 
  validationsProduct.productAmountVerify,
  productControllers.create,
);

export default route;