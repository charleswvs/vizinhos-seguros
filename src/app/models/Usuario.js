import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        hash_senha: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    // return the used method
    return this;
  }
}

export default Usuario;
