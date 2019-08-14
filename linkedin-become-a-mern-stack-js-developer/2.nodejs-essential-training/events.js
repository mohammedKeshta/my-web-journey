// Import events module
const event = require("events");
// Create an eventEmitter object
const emitter = new event.EventEmitter();

emitter.on("customEvent", (message, user = "user") => {
  console.log(`${user} => ${message}`);
});



process.stdin.on('data', data => {
  const inputMsg = data.toString().trim();
  if (inputMsg.toLowerCase() === 'exit') {
    emitter.emit('customEvent', 'GoddBye', 'Process');
    process.exit();
  } else {
    emitter.emit('customEvent', inputMsg, 'terminal');
  }
});
