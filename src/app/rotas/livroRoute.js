const LivroCrontroller = require('../controller/LivroController');
const livroController = new LivroCrontroller();

const Livro = require('../model/Livro');

module.exports = (app) => {
    const rotasLivro = LivroCrontroller.rotas();

    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.cadastro)
        .get(livroController.formularioCadastro())
        .post(Livro.validacoes(), livroController.cadastra())
        .put( Livro.validacoes(), livroController.edita());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.delete(rotasLivro.delecao, livroController.remove());
};