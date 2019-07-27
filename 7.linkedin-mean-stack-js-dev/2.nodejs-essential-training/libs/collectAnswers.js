const readline = require("readline");
const { log } = require("util");
const { EventEmitter } = require('events');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = (questions, done = f => f) => {

  const answers = [];
  const [firstQuestion] = questions;
  const emitter = new EventEmitter();

  const questionAnswered = (answer) => {
    answers.push(answer);
    emitter.emit('answer', answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else  {
      emitter.emit('complete', answers);
      done(answers);
    }
  };

  process.nextTick(() => {
    emitter.emit("ask", firstQuestion);
    rl.question(firstQuestion, questionAnswered);
  });

  return emitter;
};

