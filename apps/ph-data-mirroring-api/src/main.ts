import express from 'express';
import path from 'path';
import ROUTES from './app/routers';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// APP-USE ROUTES
app.use('/', ROUTES);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
