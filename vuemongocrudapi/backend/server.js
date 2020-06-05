/*
* @Author: @vedatbozkurt
* @Date:   2020-05-20 02:06:46
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-06-05 13:53:28
*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Task = require('./api/models/taskModel');
const routes = require('./api/routes/taskRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb+srv://username:password@cluster0-mptpj.mongodb.net/tablename??retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);
