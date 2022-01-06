const router = require('express').Router();
const productController = require('../controllers/productController');

router
  .route('/product')
  .post(productController.createProdut)
  .get(productController.getAllProducts);

router
  .route('/product/:id')
  .get(productController.getProduct)
  .delete(productController.deleteProduct);
module.exports = router;
