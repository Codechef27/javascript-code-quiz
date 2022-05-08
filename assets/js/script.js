

//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
//WHEN I click the start button
//THEN a timer starts
var questionsArray = [
  {
      question: "Questions 1 : String values must be enclosed within _____ when being assigned to variables.",
      choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
      answer: "c"
  },
  {
      question: "Questions 2 : Commonly used data types DO NOT include:",
      choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
      answer: "c"
  },
  {
      question: "Questions 3 : How do you create a function in JavaScript",
      choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
      answer: "b"
  },
  {
      question: "Questions 4 : How do you call a function named myFunction?",
      choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
      answer: "c"
  },
  {
      question: "Questions 5 : To see if two variables are equal in an if / else statement you would use ____.",
      choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
      answer: "b"
  },
  {
      question: "Questions 6 : The first index of an array is ____.",
      choices: ["a. 0", "b. 1", "c. 8", "d. any"],
      answer: "a"
  },
  {
      question: "Questions 7 : How to write an IF statement in JavaScript?",
      choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
      answer: "c"
  },
  {
      question: "Questions 8 : Which event occurs when the user clicks on an HTML element?",
      choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
      answer: "a"
  }
];

//WHEN I click the start button THEN a timer starts

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



var startQuizEl = document.getElementById('start-btn')
startQuizEl.addEventListener("click", function() {
  countdown();
  
});