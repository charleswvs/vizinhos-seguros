import Usuario from '../models/Usuario';

class UsuarioController {
  // cria um usuário na base de dados
  async index(req, res) {
    return res.json({ hello: 'world' });
  }

  async store(req, res) {
    const { email, nome, hash_senha } = req.body;

    await Usuario.create({ nome, email, hash_senha });

    return res.json({ nome, email, hash_senha });
  }
}

export default new UsuarioController();
