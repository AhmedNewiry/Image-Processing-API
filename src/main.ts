import express from 'express';
import routes from './routes/index.js';
const app = express();
const port = 3000;

app.listen(port, (): void => {
  console.log(`sever is up and working on port ${port}`);
});

app.use('/api', routes);

export default app;
