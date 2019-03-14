class MailError extends Error {
  constructor({ name, message, stack }) {
    console.log("Hello from MailError");

    super(...arguments);
    this.name = name;
    this.message = message;
    this.stack = stack;
  }

  toJSON() {
    return JSON.stringify({
      name: this.name,
      message: this.message,
      stack: this.stack
    });
  }

  static from(error) {
    return new MailError({
      name: error.name,
      message: error.message,
      stack: error.stack
    });
  }
}

module.exports = MailError;
