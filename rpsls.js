class Rpsls {
    constructor(rockPaperScissorsLizardSpock) {
      this.rockPaperScissorsLizardSpock = rockPaperScissorsLizardSpock;
    }

    generateRandomNumber() {
      let randomNumber = Math.floor(Math.random() * this.rockPaperScissorsLizardSpock) + 1;
      return randomNumber;
    }
  }

  module.exports = Rpsls;