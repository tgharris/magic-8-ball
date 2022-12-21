// SELECTORS & VARIABLES
const input = document.querySelector('.input')
const submitBtn = document.querySelector('.submit-btn')
const question = document.getElementById('question')
const answer = document.getElementById('answer')

const answersArray = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
]

// FUNCTIONS
ask = (event) => {

    // Prevent from submitting
    event.preventDefault();

    // Check to see if the input contains a question mark
    if(input.value.includes('?')) {

        // Fade out the '8'
        fadeOut();

        // Generate random answer after the fade out animation is complete
        setTimeout(() => {
            const rand = Math.floor(Math.random() * answersArray.length);
            answer.innerText = answersArray[rand];
            answer.style.cssText = 'font-size: 1.75em;';
            question.reset();
        }, 500);

        // Fade in the new answer
        setTimeout(fadeIn, 1000);
    
    // If the input does not contain a question mark
    } else {

        // Fade out whatever is in the 'answer' paragraph element
        fadeOut();

        // Update the answer to display '8' after the fade out animation is complete
        setTimeout(() => {
            answer.innerText = '8';
            answer.style.cssText = 'font-size: 10em;';
        }, 500);

        // Fade in the '8'
        setTimeout(fadeIn, 1000);
    }
}

fadeOut = () => {
    answer.className = '';
    answer.classList.add('fade-out');
}

fadeIn = () => {
    answer.className = '';
    answer.classList.add('fade-in');
}

// EVENT LISTENER
submitBtn.addEventListener('click', ask)
