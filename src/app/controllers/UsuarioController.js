import Usuario from '../models/Usuario';

class UsuarioController {
  async index(req, res) {
    return res.json({ hello: 'world' });
  }

  // cria um usuário na base de dados
  async store(req, res) {
    // pega os as variáveis do corpo da requisição
    const { email, nome, senha } = req.body;

    // cria um usuário no banco
    const usuario = await Usuario.create({
      nome,
      email,
      hash_senha: senha,
    });

    console.log(usuario); // retorna em json os objetos e dá um status 200
    return res.status(200).json(usuario);
  }
}

export default new UsuarioController();
