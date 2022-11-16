const prisma = require("../config/db.config");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const createError = require("http-errors");

const register = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        name,
        email,
        password,
        user_type,
        company_logo,
        company_brief,
        employees_number,
      } = data;
      data.password = bcrypt.hashSync(data.password, 8);
      let user = await prisma.Users.create({
        include: {
          companies: true,
        },
        data: {
          name,
          email,
          password,
          user_type,
          companies: {
            create: { company_logo, company_brief, employees_number },
          },
        },
      });
      data.accessToken = await jwt.signAccessToken(user);
      resolve(data);
    } catch (e) {
      console.error("--------> accountRegistration rejected: ", e);
      reject(e);
    }
  });
};

const login = async (data) => {
  console.log("------> data :>> ", data);
  const { email, password } = data;
  const user = await prisma.Users.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw createError.NotFound("User not registered");
  }
  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword)
    throw createError.Unauthorized("Email address or password not valid");
  delete user.password;
  const accessToken = await jwt.signAccessToken(user);
  return { ...user, accessToken };
};

module.exports = {
  register,
  login,
};
