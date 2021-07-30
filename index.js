const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.get('/', (_req, resp) => {
  resp.send('ok');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
