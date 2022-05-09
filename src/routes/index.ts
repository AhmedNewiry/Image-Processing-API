import express from 'express';
import footage from './api/footage.js';
import { Request, Response } from 'express';

const routes = express.Router();
routes.get('/', (req: Request, res: Response): void => {
  res.send("hello Ahmed, I'm working just fine!");
});

routes.use('/footage', footage);
export default routes;
