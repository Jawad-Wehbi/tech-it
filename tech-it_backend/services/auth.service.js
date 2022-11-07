const prisma = require("../config/db.config");

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

  const register = async(data) =>  {

    console.log('data :>> ', data); 
      const { email } = data;
      data.password = bcrypt.hashSync(data.password, 8);
      let user = prisma.users.create({
        data
    })
    data.accessToken = await jwt.signAccessToken(user);
     
    return data; 
  }
       
  const login = async(data) =>  {
    const { email, password } = data;
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!user) {
        throw createError.NotFound('User not registered')
    }
    const checkPassword = bcrypt.compareSync(password, user.password)
    if (!checkPassword) throw createError.Unauthorized('Email address or password not valid')
    delete user.password
    const accessToken = await jwt.signAccessToken(user)
    return { ...user, accessToken }
  }
  const all = async(data) =>  {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }

module.exports = {
register,login,all
};