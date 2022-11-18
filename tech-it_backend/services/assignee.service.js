const prisma = require("../config/db.config");


const postMcqAnswers = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        score,
        selected_choice
      } = data;
      const postMcqAnswer = await prisma.assignee_answers.create({
        include: {
          mcq_selected_choices: true,
        },
        data: {
          score,
          mcq_selected_choices: {
            create: { selected_choice },
          },
        },
      });
      resolve("MCQ Answer Posted Successfully");
    } catch (e) {
      console.error("--------> MCQ Answer rejected: ", e);
      reject(e);
    }
  });
};

module.exports = {
  postMcqAnswer,
};