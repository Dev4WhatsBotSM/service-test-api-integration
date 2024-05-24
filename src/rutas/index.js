import express from 'express';
import middlewares from '../middlewares/index.js';
import controllers from '../controladores/index.js';
const router = express.Router();

router.post('/realizarPedido', middlewares.validaHeaders, middlewares.verificaToken, controllers.order.realizarPedido);

export default router;