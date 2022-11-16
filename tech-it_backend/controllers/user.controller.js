const { questions } = require("../config/db.config");
const user = require("../services/user.service");

const getAllMembers = async (req, res) => {
  try {
    const assignees = await db.users.findMany();
    return res.json(assignees);
  } catch (e) {
    res.send(e.message);
  }
};


const getQuestionsByTest = async (req, res, next) => {
  try {
    const id = req.body.id;
    const test = await user.getQuestionsByTest(id);
    res.status(200).json({
      message: "Test info shown successfully",
      data: test,
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
module.exports={
  getAllMembers,
  getQuestionsByTest
} 