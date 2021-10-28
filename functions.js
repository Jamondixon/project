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
        if (guessArray.includes(guess) === false)guessArray.push(guess);
        message.innerHTML = "You Got it! It took you " + guessArray.length + " tries! Your guesses were " + guessArray
    } else if (guess > num &&  guess <= pickedNumber){
        message.innerHTML = "No try a lower number.";
        count ++;
        if (guessArray.includes(guess) === false)guessArray.push(guess);
        console.log(guessArray)
    } else if (isNaN(guess)) {
        message.innerHTML = "That is not a number!"
    } else if (guess < 1) {
        message.innerHTML = "That number is not in range, try again!"
    } else if (guess < num && guess <= pickedNumber){
        message.innerHTML = "No try a higher number.";
        count ++;
        if (guessArray.includes(guess) === false)guessArray.push(guess);
        console.log(guessArray)
    }else {
        message.innerHTML = "That number is not in range, try again!"
    }
}

// guess < num && guess <= pickedNumber
