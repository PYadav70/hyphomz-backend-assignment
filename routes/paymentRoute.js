import express from 'express';
import { createOrder } from '../controllers/paymentController.js';

const paymentRouter = express.Router();

paymentRouter.post('/order',createOrder)

export default paymentRouter