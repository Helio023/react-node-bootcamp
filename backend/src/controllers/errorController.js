const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  const error = { ...err };

  error.message = err.message;

  if (err.code === 11000) {
    const message = 'Duplicate field entered';
    error = new ErrorResponse(message, 400);
  }

  res.status(err.statusCode || 500).json({
    status: 'fail',
    message: error.message || 'Server error',
  });
};

module.exports = errorHandler