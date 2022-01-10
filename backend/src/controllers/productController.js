const Product = require('../models/productModel');
// const ErrorResponse = require('../utils/errorResponse');

exports.createProdut = async (req, res, next) => {
  const { name, price, image, description } = req.body;
  try {
    const product = await Product.create({ name, price, image, description });

    res.status(201).json({
      status: 'success',
      product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 8;
    }
    const totalProducts = await Product.countDocuments();
    const limit = parseInt(size);
    const skip = (parseInt(page) - 1) * size;
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await Product.find().limit(limit).skip(skip);

    res.status(200).json({
      status: 'sucess',
      pageProducts: products.length,
      totalProducts,
      totalPages,
      products,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
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

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
