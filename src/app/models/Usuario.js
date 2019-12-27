import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        hash_senha: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Usuario;
