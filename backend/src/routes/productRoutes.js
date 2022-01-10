const router = require('express').Router();
const {
  createProdut,
  getAllProducts,
  getProduct,
  deleteProduct,
} = require('../controllers/productController');

router.route('/product').post(createProdut).get(getAllProducts);

router.route('/product/:id').get(getProduct).delete(deleteProduct);
module.exports = router;
