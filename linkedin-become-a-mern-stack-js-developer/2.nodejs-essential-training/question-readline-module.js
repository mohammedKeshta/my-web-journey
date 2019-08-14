const { log } = require("util");
const collectAnswers = require("./libs/collectAnswers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.once("ask", () => console.log("started asking questions"));

answerEvents.on("answer", answer => {
  log(`question answered => ${answer}`);
});

answerEvents.on("complete", answers => {
  log(`Thanks for your answers`);
  log(`${answers}`);
});

answerEvents.on("complete", () => {
  process.exit();
});
