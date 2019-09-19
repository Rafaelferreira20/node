const templates = require('../views/templates');

class BaseController {

    static rotas(){
        return {
            home: '/',
            login: '/login' // nova URL de rota adicionada.
        }
    }

    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
                // require('../views/base/home/home.marko')
            );
        };
    }

    login() {

        return function(req, resp) {
            resp.marko(templates.base.login);
        };
    }

    efetuaLogin() {

        return function(req, resp) app.get(rotasBase.home, baseController.home());{
app.get(rotasBase.home, baseController.home());
        };app.get(rotasBase.home, baseController.home());
    }
}

module.exports = BaseController;