import { Router } from 'express';

import OrderControllers from '../controllers/orderControllers';

const orderControllers = new OrderControllers();

const route = Router();

route.get('/', orderControllers.getAll);

export default route;