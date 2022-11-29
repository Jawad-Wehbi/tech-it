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
const getQuestionsByTopic = async (req, res, next) => {
  try {
    const questions = await company.getQuestionsByTopic(req.body);
    res.status(200).json({
      message: "Questions shown successfully",
      data: questions,
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const getCompanyInfo = async (req, res, next) => {
  try {
    const id = req.body.id;
    const tests = await company.getCompanyInfo(id);
    res.status(200).json({
      message: "Company info shown successfully",
      data: tests,
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const addTeamMember = async (req, res, next) => {
  try {
    const addMember = await company.addTeamMember(req.body);
    res.status(200).json({
      message: "Assignee created successfully"
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const deleteTeamMember = async (req, res, next) => {
  try {
    const deleteMemeber = await company.deleteTeamMember(req.body.id);
    res.status(200).json({
      message: "Assignee deleted successfully"
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const addCodingQuestion = async (req, res, next) => {
  try {
    const addCodingQuestion = await company.addCodingQuestion(req.body);
    res.status(200).json({
      message: "Coding Question created successfully",
      data: req.body
    }); 
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const addMcqQuestion = async (req, res, next) => {
  try {
    const addMcqQuestion = await company.addMcqQuestion(req.body);
    res.status(200).json({
      message: "MCQ Question created successfully",
      data: req.body
    }); 
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const editProfile = async (req, res, next) => {
  try {
    const editProfile = await company.editProfile(req.body);
    res.status(200).json({
      message: "Profile edited successfully",
      data: req.body
    }); 
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};
const addTest = async (req, res, next) => {
  try {
    const addTest = await company.addTest(req.body);
    res.status(200).json({
      message: "Test created successfully"
    });
  } catch (err) {
    console.log("e :>> ", err);
    res.status(400).json(formatFatalError(err));
  }
};

module.exports={
  getAlltests,  
  getQuestionsByTopic,
  getCompanyInfo,
  addTeamMember,
  deleteTeamMember,
  addCodingQuestion,
  addMcqQuestion,
  editProfile,
  addTest


} 
