import { Router } from 'express';

import ProductControllers from '../controllers/productControllers';

const productControllers = new ProductControllers();

const route = Router();

route.get('/', productControllers.getAll);

export default route;