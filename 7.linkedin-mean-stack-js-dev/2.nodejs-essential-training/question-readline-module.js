const readline = require("readline");
const { log } = require("util");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

const collectAnswers = (questions, done) => {

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
collectAnswers(questions, answers => {
  log(`Thanks for your answers`);
  log(`${answers}`);
  process.exit();
});
