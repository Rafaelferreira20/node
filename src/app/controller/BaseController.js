const templates = require('../views/templates');

class BaseController {

    static rotas(){
        return {
            home: '/'
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
}

module.exports = BaseController;