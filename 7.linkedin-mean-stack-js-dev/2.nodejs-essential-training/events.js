const event = require("events");

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
