import * as express from 'express';

const app: express.Express = express();

app.use('/', (req, res) => {
  res.send('Hello, world!');
});

export default app;