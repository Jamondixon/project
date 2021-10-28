let pickedNumber = get_number("Welcome to The Guessing Game! \r\n Please enter the max number for the game.")
let num = Math.floor(Math.random() * pickedNumber) + 1;


function get_number(prompt){
    let valid_input = false;
    let initial_number, input;
    
    while(!valid_input) {
        input = window.prompt(prompt);
        initial_number = Math.round(Number(input));
        
        if(initial_number != NaN && initial_number > 0) {
            valid_input = true;
        }
    }
    
    document.getElementById("answer").innerHTML = `Please guess a number between 1 and ${initial_number}! `
    
    console.log(initial_number);
    return(initial_number);
}

// function init_guesses() {
//     let guesses = []
//     for(let i = 0; i < pickedNumber; i++) {
//         guesses.push();
//     }

//     return rolls;
// }


// let num = Math.floor(Math.random() * 25) + 1;
console.log(num)
var count = 0
let guessArray = []

let previousGuess = document.createElement('h4');
previousGuess.textContent = '';
document.body.appendChild(previousGuess);




function do_guess() {
    
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if(guess == num) {
        count ++;
        guessArray.push(guess);
        message.innerHTML = "You Got it! It took you " + guessArray.length + " tries! Your guesses were " + guessArray
    } else if (guess > num &&  guess <= pickedNumber){
        message.innerHTML = "No try a lower number.";
        count ++;
        guessArray.push(guess);
        console.log(guessArray)
    } else if (isNaN(guess)) {
        message.innerHTML = "That is not a number!"
    } else if (guess < 1) {
        message.innerHTML = "That number is not in range, try again!"
    } else if (guess < num && guess <= pickedNumber){
        message.innerHTML = "No try a higher number.";
        count ++;
        guessArray.push(guess);
        console.log(guessArray)
    }else {
        message.innerHTML = "That number is not in range, try again!"
    }
}

guess < num && guess <= pickedNumber


// function guessArray(n){
//     var newArray = [];
//     for(var i=0; i <= 25; i++){
//         newArray.push(n[i]);
//     }
//     return newArray;
// }

// not working
// function do_guess() {
    
//     let guess = Number(document.getElementById("guess").value);
//     let message = document.getElementById("message");
// switch(guess) {
//     case 1: (isNaN(guess) )
//         message.innerHTML = "That is not a number!";
//     case 2: (guess < 1 || guess > 25)
//         message.innerHTML = "That is out of range";
//     case 3: (guess > num && guess < 25)
//         message.innerHTML = "Guess a lower number";
//         count++;
//     case 4: (guess < num && guess > 1)
//         message.innerHTML = "Guess a higher number";
//         count++;
//     case 5: (guess === num)
//         count++;
//         message.innerHTML = "You got it! It took you " + count + " tries!"
//     }
// }