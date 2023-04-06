const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
var methodOverride = require('method-override');

const sortMiddleware = require('./app/middlewares/sortMiddleware');

const route = require('./routes');
const db = require('./config/db');

//Connection Database
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
  

app.use(express.json());

app.use(methodOverride('_method'));

app.use(sortMiddleware);

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers:{
      sum:(a,b)=> a+b,
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

//Route init
route(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
