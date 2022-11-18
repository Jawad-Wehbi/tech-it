const assignee = require("../services/assignee.service");

const formatFatalError = (err) => {
  return {
    fail: err,
  };
};

const postMcqAnswer = async (req, res, next) => {
  try {
    const McqAnswer = await assignee.postMcqAnswer(req.body);
    res.status(200).json({
      message: "McqAnswer Posted successfully",
      data: McqAnswer,
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};

module.exports = {
  postMcqAnswers,
};