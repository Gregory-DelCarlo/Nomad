const express = require('express');
const nomad = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

// set up root route
nomad.get('/', (req, res) => res.send('entry working'));

//set local and production port
const port = process.env.PORT || 3000;

//connect database to mongoose for use
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//set server so listen on the port specified
nomad.listen(port, () => console.log(`Server is running on port ${port}`));


