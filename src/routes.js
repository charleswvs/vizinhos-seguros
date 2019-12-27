import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

/** Rotas do usuário */
routes.post('/usuario', UsuarioController.store);

export default routes;
