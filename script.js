document.querySelector("#btn1").onclick = function firstAssigment () {

/* Write a JavaScript program to find the diagonal of a square where the length of each
side is 9. */

function findSquareDiagonal (side) {

    return Math.SQRT2 * side;
};

console.log(" The square diagonal is: ")
console.log(findSquareDiagonal(9));

/*Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7.*/

function triangleArea (side1,side2,side3) {

    const perimeter = ( side1 + side2 + side3 ) / 2;
    const area =  Math.sqrt( perimeter * (( perimeter-side1 ) * ( perimeter-side2 ) * 
    ( perimeter-side3 )));
    return area;
};

console.log("The triangle area is: ")
console.log(triangleArea(5,6,7));

/*Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.*/

function circumferenceCircle (radius) {

    const pi = Math.PI;
    const circumference = 2 * pi * radius;
    return circumference;
};

console.log("The circle circumference is: ")
console.log(circumferenceCircle(4));

function surfaceArea ( radius) {

    const pi = Math.PI;
    const area = pi * Math.pow( radius,2);
    return area;
};

console.log("The circle area is: ")
console.log(surfaceArea(4));
}

document.querySelector("#btn2").onclick = function secondAssigment () {

//Write a JavaScript program that accepts two integers and displays the larger of the two.

function largestInteger (num1,num2) {

        if (parseInt(num1) === parseInt(num2)) {
            console.log( " Numbers are equal");
        }else {
            console.log("The larger number is " + (parseInt(num1) > parseInt(num2) ? 
            parseInt(num1) : parseInt(num2) ));
        }
    };

    
largestInteger(120,60);

// Write a JavaScript program that checks whether an integer is an even or an odd number.

function checkOddOrEven (num) {

    if (parseInt(num) % 2 === 0) {
        console.log("The number is even");
    }else {
        console.log("The number is odd")
    }
};

checkOddOrEven(5);
};


document.querySelector("#btn3").onclick = function playOne () {
    //Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. ++
    
    let myOptions = ["rock", "paper", "scissors"];
    let playerSelection = function() {
      return prompt("Pick between : Rock, Paper, Scissors").toLowerCase();
    };
     let computerSelection = function computerPlay() {
      return myOptions[ Math.floor (Math.random() * myOptions.length)];
    };
   
    //modal functions
function modalWin () {
    document.getElementById("modalWin").style.display = "block";
}
function modalDraw () {
    document.getElementById("modalDraw").style.display = "block";
}
function modalLose () {
    document.getElementById("modalLose").style.display = "block";
}
document.getElementById("close1").onclick = function closeModal () {
    document.getElementById("modalWin").style.display = "none";
}
document.getElementById("close2").onclick = function closeModal () {
    document.getElementById("modalDraw").style.display = "none";
}
document.getElementById("close3").onclick = function closeModal () {
    document.getElementById("modalLose").style.display = "none";
}

/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters 
- the playerSelection and computerSelection - and then return a string that declares the winner of the round like so:
 "You Lose! Paper beats Rock"  */
   
function playRound(playerSelection, computerSelection) {
       
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
          console.log( "It's a draw!  You both chose Rock!" );
          modalDraw();
          return;
        } else {
          if (computerSelection === "paper") {
            console.log( "You lose!  Paper  beats Rock!" );
            modalLose();
            return false;
          } else {
            if (computerSelection === "scissors") {
              console.log( "You win!  Rock beats Scissors!" );
              modalWin();
              return true;
            }
          }
        }
    }
      if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "paper") {
          console.log( "It's a draw!  You both chose Paper!" );
          modalDraw();
          return;
        } else {
          if (computerSelection === "rock") {
            console.log( "You win!  Paper beats Rock!" );
            modalWin();
            return true;
          } else {
            if (computerSelection === "scissors") {
              console.log( "You lose!  Scissors beats Paper!" );
              modalLose();
              return false;
            }
          }
        }
      }
      if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "scissors") {
          console.log( "It's a draw!  You both chose Scissors!" );
          modalDraw();
          return;
        } else {
          if (computerSelection === "rock") {
            console.log( "You lose!  Rock beats Scissors!" );
            modalLose();
            return false;
          } else {
            if (computerSelection === "paper") {
              console.log( "You win!  Scissors beats Paper!" );
              modalWin();
              return true;
            }
          }
        }
      }
    }
   
playRound(playerSelection(), computerSelection());
}


//Game with five tryies

document.querySelector("#btn4").onclick = function playFive () {

    let myOptions = ["rock", "paper", "scissors"];
    let playerSelection = function() {
      return prompt("Pick between : Rock, Paper, Scissors").toLowerCase();
    };
     let computerSelection = function computerPlay() {
      return myOptions[ Math.floor (Math.random() * myOptions.length)];
    };

 //modal functions
function modalWin () {
    document.getElementById("modalWin").style.display = "block";
}
function modalDraw () {
    document.getElementById("modalDraw").style.display = "block";
}
function modalLose () {
    document.getElementById("modalLose").style.display = "block";
}
document.getElementById("close1").onclick = function closeModal () {
    document.getElementById("modalWin").style.display = "none";
}
document.getElementById("close2").onclick = function closeModal () {
    document.getElementById("modalDraw").style.display = "none";
}
document.getElementById("close3").onclick = function closeModal () {
    document.getElementById("modalLose").style.display = "none";
}

//play function
 function playRound(playerSelection, computerSelection) {
       
        if (playerSelection.toLowerCase() === "rock") {
          if (computerSelection === "rock") {
            console.log( "It's a draw!  You both chose Rock!" );
            return;
          } else {
            if (computerSelection === "paper") {
              console.log( "You lose!  Paper  beats Rock!" );
              return false;
            } else {
              if (computerSelection === "scissors") {
                console.log( "You win!  Rock beats Scissors!" );
                return true;
              }
            }
          }
        }
        if (playerSelection.toLowerCase() === "paper") {
          if (computerSelection === "paper") {
            console.log( "It's a draw!  You both chose Paper!" );
            return;
          } else {
            if (computerSelection === "rock") {
              console.log( "You win!  Paper beats Rock!" );
              return true;
            } else {
              if (computerSelection === "scissors") {
                console.log( "You lose!  Scissors beats Paper!" )
                return false;
              }
            }
          }
        }
        if (playerSelection.toLowerCase() === "scissors") {
          if (computerSelection === "scissors") {
            console.log( "It's a draw!  You both chose Scissors!" );
            return;
          } else {
            if (computerSelection === "rock") {
              console.log( "You lose!  Rock beats Scissors!" );
              return false;
            } else {
              if (computerSelection === "paper") {
                console.log( "You win!  Scissors beats Paper!" );
                return true;
              }
            }
          }
        }
      }

/*Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
At this point you should still just be using console.log() to display the results of each round and the winner at the end.*/
   function game() {
    
      let playerWin = 0;
      let computerWin = 0;
      let playRoundReturn = true;
    
      for (let i = 1; i <= 5 ; i++) {
        playRoundReturn = playRound(playerSelection(), computerSelection());
        if ( playRoundReturn === true ) {
          playerWin++;
        } else {
          if ( playRoundReturn === false ) {
            computerWin++;
          }
        }
     }
      
      if( playerWin < computerWin) {
        console.log( "You lost! ");
        modalLose()
      } else {
        console.log( "You win! ")};
        modalWin();
      }        

    game();
    }