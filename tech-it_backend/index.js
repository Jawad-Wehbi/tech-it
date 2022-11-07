const express = require('express');
require('dotenv').config();
require('./config/db.config');
require('@prisma/client');

const app = express();
app.use(express.json());


const authRoutes = require('./routes/auth.route');
app.use('/auth', authRoutes)
// const userRoutes = require('./routes/user.route');
// app.use('/user', userRoutes)

app.listen(process.env.PORT, (err) => {
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`)
  })