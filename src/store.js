
class Store {
  constructor() {
    this.results = new Map();
  }

  saveResult(path, links) {
    this.results.set(path, links);
  }

  getResult() {
    return this.results;
  }
}

module.exports = new Store();
