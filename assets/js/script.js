

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

//query selector's/ define vars
var intro = document.querySelector("#intro");
var introContainer = document.querySelector("#intro-container");
var startBtn = document.querySelector('#start-btn');

var questions = document.querySelector("#questions");
var questionDisplayed = document.querySelector("#question-displayed");

var questionButtons = document.querySelectorAll(".choices");
var answerBtnA = document.querySelector("#answer-btn-A");
var answerBtnB = document.querySelector("#answer-btn-B");
var answerBtnC = document.querySelector("#answer-btn-C");
var answerBtnD = document.querySelector("#answer-btn-D");

var checkAnswer = document.querySelector("#check-answer");
var report = document.querySelector("#report-section");
var score = document.querySelector("#score");
var enterInitials = document.querySelector("#initials");

var initialsBtn = document.querySelector("#initials-btn");
var highScoreContainer = document.querySelector("#high-score-container");
var highScores = document.querySelector("#high-scores");
var highScoresCheck = document.querySelector("#high-scores-check");
var finished = document.querySelector("#finished");
var tryAgainBtn = document.querySelector("#try-again-btn");
var clearBtn = document.querySelector("#clear-btn");

var questionsArray = [
  {
      question: "Questions 1 : Which event occurs when the user clicks on an HTML element?",
      choices: ["A. onclick", "B. onchange", "C. onmouseover", "D. onmouseclick"],
      answer: "A"
  },
  {
      question: "Questions 2 : To see if two variables are equal in an if / else statement you would use ____.",
      choices: ["A. =", "B. ==", "C. 'equals'", "D. !="],
      answer: "B"
  },
  {
      question: "Questions 3 : Commonly used data types DO NOT include:",
      choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
      answer: "c"
  },
  {
      question: "Questions 4 : How do you call a function named myFunction?",
      choices: ["A. call myFunction()", "B. call function myFunction()", "C. myFunction()", "D. call myFunction"],
      answer: "C"
  },
  {
     question: "Questions 5 : How do you create a function in JavaScript",
     choices: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. createMyFunction()"],
     answer: "B"
  },
  {
     question: "Questions 6 : String values must be enclosed within _____ when being assigned to variables.",
     choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
     answer: "C"
  },

  {
      question: "Questions 7 : The first index of an array is ____.",
      choices: ["A. 0", "B. 1", "C. 8", "D. any"],
      answer: "A"
  },
  {
      question: "Questions 8 : How to write an IF statement in JavaScript?",
      choices: ["A. if i == 5 then", "B. if i = 5 then", "C. if(i == 5)", "D. if i = 5"],
      answer: "C"
  },
  {
     question: "Questions 9 : What will the code return? Boolean(3 < 7)",
     choices: ["A. true", "B. false", "C. NaN", "D. syntaxError"],
     answer: "A"

  },
  {
     question: "questions 10 : Who is the best Developer in the world?",
     choices: ["A. Ronny", "B. Gary", "C. Jonathan", "D. Charles" ],
     answer: ["A", "B", "C", "D"]
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


 function startQuizEl () {
  countdown();
  introContainer.style.display = "none";
  
};

//event listener's

startBtn.addEventListener("click", startQuizEl);