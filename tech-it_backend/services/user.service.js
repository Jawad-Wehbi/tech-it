const prisma = require("../config/db.config");


const getQuestionsByTest = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const test = await prisma.tests_questions.findMany({
        where: {
          test_id:id,
        },
        include: { question:true },
      });
      resolve(test);
    } catch (e) {
      console.error("--------> Can't get Test Information: ", e);
      reject(err);
    }
  });
};




module.exports = {
  getQuestionsByTest
}