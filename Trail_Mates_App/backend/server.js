const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { auth } = require('express-oauth2-jwt-bearer');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// enforce on all endpoints
//app.use(jwtCheck);


app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const tripRouter = require('./routes/trips');

app.use('/users', usersRouter);
app.use('/trips', tripRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
