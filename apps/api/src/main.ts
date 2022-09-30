import * as express from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware'
// import { Message } from '@digitalmischief/api-interfaces';
import { addTodoRoutes } from './app/todos';

const app = express();
// const apiProxy = createProxyMiddleware({ target: 'http://localhost:' + process.env.APIPORT, changeOrigin: true })


// const greeting: Message = { message: 'Welcome to api!' };

// app.get('/api', (req, res) => {
//   res.send(greeting);
// });
// app.use('/api', apiProxy)
addTodoRoutes(app);

const port = process.env.APIPORT || 3333;
const server = app.listen(port, () => {
  console.log('API Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
