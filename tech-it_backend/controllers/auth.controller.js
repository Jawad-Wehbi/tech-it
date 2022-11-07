const auth = require('../services/auth.service');
const createError = require('http-errors');
  const register = async (req, res, next) => {
      try {
          const user = await auth.register(req.body);
          res.status(200).json({
              status: '',
              message: 'User created successfully',
              data: user
          })
        // res.status(200);
      }
      catch (e) {
            console.log('e :>> ', e);
          next(createError(e.statusCode, e.message))
      }
  }
  const login = async (req, res, next) => {
        try {
          const data = await auth.login(req.body)
          res.status(200).json({
              status: true,
              message: "Account login successful",
              data
          })
      } catch (e) {
          next(createError(e.statusCode, e.message))
      }
  }
  const all = async (req, res, next) => {
      try {
          const users = await auth.all();
          res.status(200).json({
              status: true,
              message: 'All users',
              data: users
          })
      }
      catch (e) {
          next(createError(e.statusCode, e.message))
      }
  }
  module.exports = {
    register,
    login,
    all
}