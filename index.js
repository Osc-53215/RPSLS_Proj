'use strict';

const PromptSync = require('prompt-sync');

const prompt = require('prompt-sync')();


class Game {
    constructor() {
        this.playerOne = new Player('Oscar');
        this.playerTwo = new Player('John');
        this.playerThree = new Player('AI');

        

    }

 

    runGame(){
        this.displayRules();

        while(this.playerOne.score < 3 && this.playerTwo < 3){
            let playerOneTotal = this.playerOne.throwAllRpsls(this.rpsls);
            let playerTwoTotal = this.playerTwo.throwAllRpsls(this.rpsls);

            if(playerOneTotal > playerTwoTotal){
                console.log(this.playerOne.name + ' wins the round!');
                this.playerOne.score++;
            }
            else if (playerTwoTotal > this.playerOneTotal){
                console.log(this.playerTwo.name + ' wins the round!')
                this.playerTwo.score++;
            }
            else {
                console.log('Wow! You managed to tie after each round which totals to ' + this.rpsls.length + ' !');
            }
        }
    }



    displayRules() {
        console.log("Welcome to the game of RPSLS!")
        console.log("Two players will throw rock, paper, scissors, lizard or spock!")
        console.log("The player with the dominant trait will win the round");
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

class Player{
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.selectedGesture = null;

        this.rpsls = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
}

class Human extends Player{
    constructor(){
        super()

    }

    chooseGesture(){
        let choosenGesture = prompt('Please select gesture ');

        switch(choosenGesture){
            case 'rock':
                this.selectedGesture = this.rpsls[0];
                break;
        }

    }



}



class Rpsls {
    constructor(rockPaperScissorsLizardSpock) {
      this.rockPaperScissorsLizardSpock = rockPaperScissorsLizardSpock;
    }

    generateRandomNumber() {
      let randomNumber = Math.floor(Math.random() * this.rockPaperScissorsLizardSpock) + 1;
      return randomNumber;
    }
}




function throwRpsls(rpsls) {
    let throwResult = rpsls.generateRandomNumber();
    return throwResult;
  }

function throwAllRpsls(rpslsArray) {
    let runningTotal = 0;
    if (rpslsArray == 'rock'){
      return 0;
      }
  else if (rpslsArray == 'Spock'){
      return 1;
      }
  else if (rpslsArray == 'paper'){
      return 2;
      }
  else if (rpslsArray == 'lizard'){
      return 3;
      }
  else if (rpslsArray == 'scissor'){
      return 4;
      }

    for(let i = 0; i < rpslsArray.length; i++) {
      let result = this.throwAllRpsls(rpslsArray[i]);
      runningTotal += result;
    }

    return runningTotal;
  }