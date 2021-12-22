const Product = require('../models/productModel');

exports.createProdut = async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const product = await Product.create({ name, price, image });

    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'sucess',
      totalProducts: products.length,
      products,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
