console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const [, , firstName, lastName] = process.argv;
// -> run => node global-process mohammed elzanaty
console.log(`your name is ${firstName} ${lastName}`);

const grab = flag => {
  // Add 1 to index to get the value of this flag ['--flag', 'value']
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");
// -> run => node global-process --user mohammed --greeting Hello
console.log(`${greeting} ${user}`);
