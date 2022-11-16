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
const addTeamMember = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        email,
        name,
        password,
        user_type,
        position,
        assignee_type,
        company_id,
      } = data;
      const addUserInfo = await prisma.users.create({
        include: {
          assignees: true,
        },
        data: {
          email,
          name,
          password,
          user_type,
          assignees: {
            create: { position, assignee_type, company_id },
          },
        },
      });
      resolve("User Created");
    } catch (e) {
      console.error("--------> Team Member Addition rejected: ", e);
      reject(e);
    }
  });
};
const deleteTeamMember = async ({ id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deleteMemeber = await prisma.users.delete({
        where: {
          id,
        },
      });
      resolve(deleteMemeber);
    } catch (e) {
      console.error("--------> Team Member Deletion rejected: ", e);
      reject(e);
    }
  });
};

module.exports = {
  getAlltests,
  getQuestionsByTopic,
  getCompanyInfo,
  addTeamMember,
  deleteTeamMember,

};
