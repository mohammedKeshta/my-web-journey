const readline = require("readline");
const { log } = require("util");
const collectAnswers = require("./libs/collectAnswers");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

collectAnswers(questions, answers => {
  log(`Thanks for your answers`);
  log(`${answers}`);
  process.exit();
});
