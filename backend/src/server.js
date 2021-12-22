const app = require('./app');

const port = process.env.PORT 
app.listen(5000, () => {
  console.log(`App rodando na porta: ${port}`);
});
