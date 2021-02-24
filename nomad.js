const express = require('express');
const nomad = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const parks = require("./routes/api/parks")
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    nomad.use(express.static('frontend/build'));
    nomad.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

  
const passport = require('passport');
// nomad.get('/', (req, res) => res.send('entry working'));

//set local and production port
const port = process.env.PORT || 5000;

//connect database to mongoose for use
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

nomad.use(passport.initialize());
require('./config/passport')(passport);

//set up json parsing so that it can be properly sent to the frontend
nomad.use(bodyParser.urlencoded({ extended: false }));
nomad.use(bodyParser.json());

nomad.use('/api/users', users);
nomad.use('/api/parks', parks);

// set up root route
// nomad.get('/', (req, res) => res.send('entry working'));

//set server so listen on the port specified
nomad.listen(port, () => console.log(`Server is running on port ${port}`));