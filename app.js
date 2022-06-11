const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://UserOrganic:UserOrganic@cluster0.0sezk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 5000
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(port), console.log("connected to db, on port 5000"))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
// blog routes
app.use('', routes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});