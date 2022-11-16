const company = require("../services/company.service");

const formatFatalError = (err) => {
  return {
    fail: err,
  };
};

const getAlltests = async (req, res, next) => {
  try {
    const tests = await company.getAlltests(req.body);
    res.status(200).json({
      message: "Tests shown successfully",
      data: tests,
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};

module.exports={
  getAlltests,

} 
