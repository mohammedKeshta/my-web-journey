const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class SpeakerService {
  constructor(dataFile) {
    this.dataFile = dataFile;
  }

  async getNames() {
    const data = await this.getData();
    return data.map(speaker => ({ name: speaker.name, shortname: speaker.shortname }));
  }

  async getListShort() {
    const data = await this.getData();
    return data.map(speaker => ({
      title: speaker.title,
      name: speaker.name,
      shortname: speaker.shortname,
      avatar: speaker.avatar
    }));
  }

  async getList() {
    const data = await this.getData();
    return data.map(speaker => ({
      title: speaker.title,
      name: speaker.name,
      shortname: speaker.shortname,
      avatar: speaker.avatar,
      summary: speaker.summary
    }));
  }

  async getAllArtwork() {
    const data = await this.getData();
    return data.reduce((acc, currentSpeaker) => {
      if (currentSpeaker.artwork) {
        acc = [...acc, ...currentSpeaker.artwork];
      }
      return acc;
    }, []);
  }

  async getSpeaker(shortname) {
    const data = await this.getData();
    const speaker = data.find(speaker => {
      return speaker.shortname === shortname;
    });
    if (!speaker) return null;
    return {
      title: speaker.title,
      name: speaker.name,
      shortname: speaker.shortname,
      avatar: speaker.avatar,
      description: speaker.description
    };
  }

  async getArtworkForSpeaker(shortname) {
    const data = await this.getData();
    const speaker = data.find(speaker => {
      return speaker.shortname === shortname;
    });
    if (!speaker || !speaker.artwork) return null;
    return speaker.artwork;
  }

  async getData() {
    const data = await readFile(this.dataFile);
    return !data ? [] : JSON.parse(data).speakers;
  }
}

module.exports = SpeakerService;
