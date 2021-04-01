'use strict';

const prompt = require('prompt-sync')();


class Game {
    constructor() {
        this.playerOne = new Human('Oscar');
        this.playerTwo = new Ai('Jarvis');
    }

 

    runGame(){
        this.displayRules();

        

        while(this.playerOne.score < 3 && this.playerTwo < 3){
            let playerOneTotal = this.playerOne.choosenGesture;
            let playerTwoTotal = this.playerTwo.choosenGesture;

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

        this.displayGameWinner();
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

        this.rockLoses = ['spock', 'paper'];
        this.paperLoses = ['lizard', 'scissors'];
        this.scissorsLoses = ['rock', 'spock'];
        this.lizardLoses = ['rock', 'scissors'];
        this.spockLoses = ['lizard', 'paper'];
    }
}

class Human extends Player{
    constructor(){
      super();

    }

    choosenGesture(){
        let choosenGesture = prompt('Please select gesture ');

        switch(choosenGesture){
            case 'rock':
                this.selectedGesture = this.rpsls[0];
                break;
            case 'paper':
                this.selectedGesture = this.rpsls[1];
                break;
            case 'scissors':
                this.selectedGesture = this.rpsls[2];
                break;
            case 'lizard':
                this.selectedGesture = this.rpsls[3];
                break;
            case 'spock':
                this.selectedGesture = this.rpsls[4];
                break;
            default:
                console.log('Your input is incorrect, please try again. ');
                break;
        }

    }


}


class Ai extends Player{
    constructor(){
        super();

    }

    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * this.rockPaperScissorsLizardSpock) + 1;
        return randomNumber;
      }

    choosenGesture(){
        let choosenGesture;

        switch(choosenGesture){
            case 'rock':
                this.selectedGesture = this.rpsls[this.generateRandomNumber]
                break;
            case 'paper':
                this.selectedGesture = this.rpsls[this.generateRandomNumber];
                break;
            case 'scissors':
                this.selectedGesture = this.rpsls[this.generateRandomNumber];
                break;
            case 'lizard':
                this.selectedGesture = this.rpsls[this.generateRandomNumber];
                break;
            case 'spock':
                this.selectedGesture = this.rpsls[this.generateRandomNumber];
                break;
        }

    }


}




let game = new Game();
game.runGame();