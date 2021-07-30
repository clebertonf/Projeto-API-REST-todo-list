const express = require('express');

const app = express();

app.get('/', (_req, resp) => {
  resp.send('ok');
});

app.listen(3000, () => console.log('Servidor rodando!'));
