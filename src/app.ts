import express from 'express';
import ProductRouters from './routers/productRouters';
import UserRouters from './routers/userRouters';
import OrderRouters from './routers/orderRouters';

const app = express();

app.use(express.json());

app.use('/products', ProductRouters);
app.use('/users', UserRouters);
app.use('/orders', OrderRouters);

export default app;
