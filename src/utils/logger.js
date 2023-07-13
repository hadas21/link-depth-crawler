const EventEmitter = require("events");

class Logger extends EventEmitter {
  constructor() {
    super(); // Call the superclass constructor
  }

  logResults(results) {
    results.forEach((v, k) => console.log(`Results for ${k}:`, v));

  }
}

module.exports = new Logger();
