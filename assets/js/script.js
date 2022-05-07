
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//THEN a timer starts and I am presented with a question


//GIVEN I am taking a code quiz
//WHEN I click the Start button
var timerEl = document.getElementById('timer');
var timeLeft = 75;

function countdown() {
    var timeInterval = setInterval(function () {
      if (timeLeft  > 0 || timeLeft  == 75 ) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
          timerEl.textContent = 'Done';
        clearInterval(timeInterval);
      }
    }, 1000);
  }



var startQuizEl = document.getElementById("start-btn");

startQuizEl.addEventListener("click", function() {
  countdown();
});


var questions = [ 
  {
  question: "Commonly used data types DO NOT include:",
  answers: {
    1: "strings",
    2: "booleans",
    3: "alerts",
    4: "numbers",
  },
  correctAnswer: "alerts",
},

{
  question:
    "The condition in an if/else statement is enclosed within ________.",
  answers: {
    1: "quotes",
    2: "curly brackets",
    3: "parenthesis",
    4: "square brackets",
  },
  correctAnswer: "curly brackets",
},

{
  question: "Arrays in JavaScript can be used to store ____________.",
  answers: {
    1: "numbers and strings",
    2: "other arrays",
    3: "booleans",
    4: "all of the above",
  },
  correctAnswer: "all of the above",
},

{
  question:
    "String values must be enclosed within ______ when being assigned to variables.",
  answers: {
    1: "commas",
    2: "curly brackets",
    3: "quotes",
    4: "parenthesis",
  },
  correctAnswer: "quotes",
},

{
  question:
    "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: {
    1: "JavaScript",
    2: "terminal/bash",
    3: "for loops",
    4: "console.log",
  },
  correctAnswer: "console.log",
},
];






