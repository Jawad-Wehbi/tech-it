const { users, mcq_answers } = require("../config/db.config");
const prisma = require("../config/db.config");

const getAlltests = async (topic) => {
  return new Promise(async (resolve, reject) => {
    try {
      const tests = await prisma.tests.findMany({
        where: { topic },
        include: { tests_questions: true },
      });
      resolve(tests);
    } catch (err) {
      // console.error("--------> Can't get tests: ", err);
      reject(err);
    }
  });
};
const getQuestionsByTopic = async ({ topic }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const questions = await prisma.questions.findMany({
        where: { topic },
      });
      resolve(questions);
    } catch (err) {
      console.error("--------> Can't get questions: ", err);
      reject(err);
    }
  });
};
const getCompanyInfo = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const company = await prisma.users.findFirst({
        where: {
          user_type: "COMPANY",
          id,
        },
        include: { companies: true },
      });
      resolve(company);
    } catch (e) {
      console.error("--------> Can't get Company Information: ", e);
      reject(err);
    }
  });
};

module.exports = {
  getAlltests,
  getQuestionsByTopic,
  getCompanyInfo,

};
