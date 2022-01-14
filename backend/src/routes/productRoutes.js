const router = require('express').Router();
const {
  createProdut,
  getAllProducts,
  getProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../controllers/authController');

router.route('/product').post(protect, createProdut).get(getAllProducts);

router.route('/product/:id').get(getProduct).delete(protect, deleteProduct);
module.exports = router;
