import express from 'express';
import EventoControllers from '../controllers/eventosControllers.js';

const router = express.Router();

router
  .get('/eventos', EventoControllers.listarEventos);

export default router;
