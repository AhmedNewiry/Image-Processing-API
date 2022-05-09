import express from 'express';
import footage from './api/footage.js';
var routes = express.Router();
routes.get('/', function (req, res) {
    res.send("hello Ahmed, I'm working just fine!");
});
routes.use('/footage', footage);
export default routes;
