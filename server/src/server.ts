import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json(['Yan', 'Diego', 'Robson', 'Caio']);
});

app.listen(3333);
