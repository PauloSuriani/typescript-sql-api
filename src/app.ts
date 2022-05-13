import express from 'express';
import ProductRouters from './routers/productRouters';

const app = express();

app.use(express.json());

app.use('/products', ProductRouters);

export default app;
