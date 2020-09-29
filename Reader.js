const fs = require("fs");
const util = require("util");

class Reader {

  constructor() {
    // util.promisify, será responsavel por converter meu readFile em uma função nova que vai aceitar promises, como o async await;
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath) {
    try {
      return await this.reader(filepath, "utf8");
    } catch (err) {
      return undefined;
    }
  }

}

module.exports = Reader;

// CASO NÃO TENHA ENTENDIDO ESSA PARTE DE "util.promisify", BASTA IR NA AULA 182. Mágica com Promisify, NO CURSO FORMAÇÃO NODE.JS NA UDEMY