const path = require("path");
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(`The current file name is ${path.basename(__filename)}`);
log(getHeapStatistics());
