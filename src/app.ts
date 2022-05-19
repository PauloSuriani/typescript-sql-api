import express from 'express';
import ProductRouters from './routers/productRouters';
import UserRouters from './routers/userRouters';

const app = express();

app.use(express.json());

app.use('/products', ProductRouters);
app.use('/users', UserRouters);

export default app;
