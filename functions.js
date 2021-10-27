let num = getNumber("Welcome to The Guessing Game! \r\n Please enter the max number for the game.")
function getNumber(prompt){
    let valid_input = false;
    let initial_number, input;
    
    while(!valid_input) {
        input = window.prompt(prompt);
        initial_number = Number(input);
        
        if(initial_number != NaN && initial_number > 0) {
            valid_input = true;
        }
    }
    let rounded = Math.round(initial_number)

    document.getElementById("answer").innerHTML = `Please guess a number between 1 and ${rounded}! `

    return(rounded);
}
// var guessArray = []
// for(let i = 0; i < 20; i++) {
//     guessArray.push(0);
// }
// var guessNumber = guessArray.length

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");
    console.log(guess)

    if(guess == num) {
        message.innerHTML = `You got it. It took you ${guessNumber} guesses and here are your guesses ${guessArray}`
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

function log_results(rounded, guesses,) {
    let caption = document.createElement("caption");
    caption.innerText = `We rolled the dice ${guesses} times...`;


    table.insertBefore(caption, head);

    for(let i = 0; i < guesses.length; i++) {
        let num = i+2;
        let count = guesses[i];
        
        
        let p = document.createElement("p");
        row.innerHTML = `<td>${num}</td><td>${count}</td><td>${pct}%</td>`;
        body.appendChild(p);
    }
}

// function createAnswerPrompt() {
//     var answer = document.createElement('p')
//     answer.textContent = `Pick a number between 1 and ${get_number}`
//     answer.append(answerContainer)
// }


// }

