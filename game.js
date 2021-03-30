const Player = require('./players');
const Rpsls = require('./rpsls');


class Game {
    constructor() {
      this.playerOne = new Player("Oscar");
      this.playerTwo = new Player("AI");
  
      this.rpsls = [];
  
      this.rpsls.push(new Rpsls(0));
      this.rpsls.push(new Rpsls(1));
      this.rpsls.push(new Rpsls(2));
      this.rpsls.push(new Rpsls(3));
      this.rpsls.push(new Rpsls(4));
    }
  
    runGame() {  // "main" method
      this.displayRules();
  
      while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
        let playerOneTotal = this.playerOne.throwAllRpsls(this.rpsls);
        let playerTwoTotal = this.playerTwo.throwAllRpsls(this.rpsls);
  
        if(playerOneTotal > playerTwoTotal) {
          console.log(this.playerOne.name + " wins this round!");
          this.playerOne.score++;
        }
        else if(playerTwoTotal > playerOneTotal) {
          console.log(this.playerTwo.name + " wins this round!");
          this.playerTwo.score++;
        }
        else {
          console.log("Wow! You managed to tie after each rolling " + this.rpsls.length + " dice!");
        }
      }
      
      this.displayGameWinner();
    }
  
    displayRules() {
      console.log("Welcome to the War Dice Game!")
      console.log("Two players will roll 6 dice and total up their results.")
      console.log("The higher total will earn that player a point");
      console.log("The first player to three points will win the game!");
    }
  
    displayGameWinner() {
      if(this.playerOne.score > this.playerTwo.score) {
        console.log(this.playerOne.name + " wins this game!");
      }
      else {
        console.log(this.playerTwo.name + " wins this game!");
      }
    }
  }
