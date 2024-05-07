const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRoute = require('./src/routes/userRoute'); // Importa rota

app.use(userRoute);

  app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});