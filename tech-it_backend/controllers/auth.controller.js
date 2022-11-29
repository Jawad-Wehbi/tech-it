const auth = require("../services/auth.service");

const formatFatalError = (err) => {
  return {
    fail: err,
  };
};

const register = async (req, res, next) => {
  try {
    const user = await auth.register(req.body);
    res.status(200).json({
      message: "User created successfully",
      accessToken: user.accessToken,
      id: user.id
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const login = async (req, res, next) => {
  try {
    const data = await auth.login(req.body);
    res.status(200).json({
      status: true,
      message: "Account login successful",
      data,
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
module.exports = {
  register,
  login
};
