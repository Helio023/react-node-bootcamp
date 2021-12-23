const router = require('express').Router();
const prductController = require('../controllers/productController');

router
  .route('/product')
  .post(prductController.createProdut)
  .get(prductController.getAllProducts);

router.route('/product/:id').get(prductController.getProduct)
module.exports = router;
