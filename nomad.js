const express = require('express');
const nomad = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const bodyParser = require('body-parser');

nomad.use('/api/users', users);

//set up root route
nomad.get('/', (req, res) => res.send('entry working'));

//set local and production port
const port = process.env.PORT || 5000;

//connect database to mongoose for use
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//set up json parsing so that it can be properly sent to the frontend
nomad.use(bodyParser.urlencoded({ extended: false }));
nomad.use(bodyParser.json());

//set server so listen on the port specified
nomad.listen(port, () => console.log(`Server is running on port ${port}`));


