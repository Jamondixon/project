let num = Math.floor(Math.random() * 20) +1;

console.log(num)

// function get_number(prompt){
//     let valid_input = false;
//     let initial_number, input;
//     // let answer = document.querySelector('#answer')
    
//     while(!valid_input) {
//         input = window.prompt(prompt);

//         initial_number = Number(input);

//         if(initial_number != NaN && initial_number > 0) {
//             valid_input = true;
//         }
//     }
//     let rounded = Math.round(initial_number)

//     return(rounded);
// }

function init_guesses() {
    let guesses = []
    for(let i = 0; i < 20; i++) {
        guesses.push(0);
    }

    return guesses;
}

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");
    
    let guessNumber = init_guesses.length

    console.log(guess)

    if(guess == num) {
        message.innerHTML = `You got it. It took you ${guessNumber} guesses and here are your guesses ${init_guesses}`
    }
    else if (isNaN(guess)) {
        message.innerHTML = "That is not a number!"
    }
    else if (guess < 1) {
        message.innerHTML = "That number in not in range, try again."
    }
    else if (guess > 20) {
        message.innerHTML = "That number in not in range, try again."
    }
    else {
        message.innerHTML = "Try again."
    }

}

// function createAnswerPrompt() {
//     var answer = document.createElement('p')
//     answer.textContent = `Pick a number between 1 and ${get_number}`
//     answer.append(answerContainer)
// }

// let num = get_number("Welcome to The Guessing Game! \r\n Please enter the max number for the game.")

// if (get_number != null) {
//     document.getElementById("answer").innerHTML = `Please guess a number between 1 and ${get_number}! `
// }

// let answer = document.getElementById("answer");
// document.getElementById("answer").innerHTML = `Please guess a number between 1 and ${prompt}! `