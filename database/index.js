// Mongoose
const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set('useFindAndModify', false);

// Conectar mongoose con MongoDB
const db_url = process.env.URI


mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (!err) {
    console.log("Conexion exitosa a MongoDB!!");
  } else {
    console.log('Something bad happen with database');
  }
});