const mongoose = require('mongoose');

const connectDb = () => {
  mongoose
    .connect(process.env.DB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Base de dados connectada com sucesso!');
    })
    .catch((e) => {
      console.log(`Erro ao connectar a base de dados: ${e.message}`);
    });
};

module.exports = connectDb;
