'use strict';


const prompt = require('prompt-sync')();


class Game {
    constructor() {
        this.playerOne = new Human('Oscar');
        this.playerTwo = new Ai('Jarvis');
    }

 

    runGame(){
        this.displayRules();

        let a = new Human();
        let b = new Ai();
        let c = new Gesture();

        a.choosenGesture();
        b.choosenGesturer();
        c;


        if(this.playerOne.selectedGesture== this.playerTwoTotal){

        }
        else if(this.playerOne.selectedGesture.includes(this.playerTwo.selectedGesture)){
                console.log(this.playerOne + 'wins!')
        }
        else console.log(this.playerTwo.typeOf + " wins!");


        while(this.playerOne.score < 3 && this.playerTwo < 3){
            this.playerOne.choosenGesture();
            this.playerTwo.choosenGesturer();

            if(this.playerOne.selectedGesture.typeOf === this.playerTwo.selectedGesture.typeOf){
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
        console.log("Welcome to the game of RPSLS!\n")
        console.log("Two players will throw rock, paper, scissors, lizard or spock!\n")
        console.log("The player with the dominant trait will win the round\n");
        console.log("The first player to three points will win the game!\n");
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
        this.rock = new Gesture('Rock', ['Spock', 'Paper']);
        this.paper = new Gesture('Paper', ['Lizard', 'Scossors']);
        this.scissors = new Gesture('Scissors', ['Rock', 'Spock']);
        this.lizard = new Gesture('Lizard', ['Rock', 'Scissors']);
        this.spock = new Gesture('Spock'['Lizard', 'Paper']);
        this.gestures = [this.rock, this.paper, this.scissors, this.lizard, this.spock];
    }

}

class Human extends Player{
    constructor(){
      super();

    }

    choosenGesture(){
        let pickedGestures = prompt('Please select gesture ');

        switch(pickedGestures){
            case 'rock':
                this.selectedGesture = this.gestures[0];
                break;
            case 'paper':
                this.selectedGesture = this.gestures[1];
                break;
            case 'scissors':
                this.selectedGesture = this.gestures[2];
                break;
            case 'lizard':
                this.selectedGesture = this.gestures[3];
                break;
            case 'spock':
                this.selectedGesture = this.gestures[4];
                break;
            default:
                console.log('Your input is incorrect, please try again. ');
                this.choosenGesture();
        }

    }


}


class Ai extends Player{
    constructor(){
        super();

    }

    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 4);
        return randomNumber;
      }

    choosenGesturer(){
        let choosenGesture;

        switch(choosenGesture){
            case 'rock':
                this.selectedGesture = this.gestures[this.generateRandomNumber]
                break;
            case 'paper':
                this.selectedGesture = this.gestures[this.generateRandomNumber];
                break;
            case 'scissors':
                this.selectedGesture = this.gestures[this.generateRandomNumber];
                break;
            case 'lizard':
                this.selectedGesture = this.gestures[this.generateRandomNumber];
                break;
            case 'spock':
                this.selectedGesture = this.gestures[this.generateRandomNumber];
                break;
            
        }return choosenGesture;

    }


}

class Gesture{
    constructor(typeOf, losesToo){
        this.typeOf = typeOf;
        this.losesToo = losesToo;
    }
}

let game = new Game();
game.runGame();



