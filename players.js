class Player {
    constructor(name) {
      this.score = 0;
      this.name = name;
    }

    throwRpsls(rpsls) {
      let throwResult = rpsls.generateRandomNumber();
      return throwResult;
    }
  
    throwAllRpsls(rpslsArray) {
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
        let result = this.throwRpsls(rpslsArray[i]);
        runningTotal += result;
      }
  
      return runningTotal;
    }
}
    module.exports = Player
