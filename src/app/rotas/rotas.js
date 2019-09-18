const baseRoute = require('./baseRoute');
const livroRoute = require('./livroRoute');

module.exports = (app) => {
    baseRoute(app);
    livroRoute(app);
};