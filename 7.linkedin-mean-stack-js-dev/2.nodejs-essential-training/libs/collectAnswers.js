const readline = require("readline");
const { log } = require("util");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = (questions, done = f => f) => {

  const answers = [];
  const [firstQuestion] = questions;
  const answeredQuestion = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], answeredQuestion);
    } else  {
      done(answers);
    }

  };
  rl.question(firstQuestion, answeredQuestion);
};

