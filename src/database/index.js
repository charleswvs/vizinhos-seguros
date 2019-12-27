import Sequelize from 'sequelize';

import Usuario from '../app/models/Usuario';

import databaseConfig from '../config/database';

const models = [Usuario];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    // .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
