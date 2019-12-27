import express from 'express';

import routes from './routes';

import './database';

class App {
  // inicia o appp e suas configurações
  constructor() {
    this.server = express();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    // middleware para receber o body da requisição, sem ele não é possível
    // receber
    this.server.use(express.json());
  }

  // chama as rotas da aplicação
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
