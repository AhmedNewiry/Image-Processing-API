import express from 'express';
import routes from './routes/index.js';
var app = express();
var port = 3000;
app.listen(port, function () {
    console.log("sever is up and working on port " + port);
});
app.use('/api', routes);
export default app;
