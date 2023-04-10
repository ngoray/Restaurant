const productController = require('../controllers/productController');

function routeProducts(app) {
    app.route('/products').get(productController.getAllProducts);

}

module.exports = { routeProducts };