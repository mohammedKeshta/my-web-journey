const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class FeedbackService {
  constructor(dataFile) {
    this.datafile = dataFile;
  }

  async addEntry(name, title, message) {
    const data = await this.getData();
    data.unshift({ name, title, message });
    return writeFile(this.datafile, JSON.stringify(data));
  }

  async getList() {
    return await this.getData();
  }

  async getData() {
    const data = await readFile(this.datafile);
    return !data ? [] : JSON.parse(data);
  }
}

module.exports = FeedbackService;
