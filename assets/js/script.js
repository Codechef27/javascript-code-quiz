
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

var checkAnswerEl = document.querySelector("#check-answer");
var scoreContainer = document.querySelector("#score-container");
var score = document.querySelector("#score");
var enterInitials = document.querySelector("#initials");

var initialsBtn = document.querySelector("#initials-btn");
var highScoreContainer = document.querySelector("#high-score-container");
var highScores = document.querySelector("#high-scores");
var highScoresCheck = document.querySelector("#high-scores-check");
var finished = document.querySelector("#finished");
var tryAgainBtn = document.querySelector("#try-again-btn");
var clearBtn = document.querySelector("#clear-btn");

//questions
var questionsArray = [
  {
    question: "Question 1 : Which event occurs when the user clicks on an HTML element?",
    choices: ["A. onclick", "B. onchange", "C. onmouseover", "D. onmouseclick"],
    answer: "A"
  },
  {
    question: "Question 2 : To see if two variables are equal in an if / else statement you would use ____.",
    choices: ["A. =", "B. ==", "C. 'equals'", "D. !="],
    answer: "B"
  },
  {
    question: "Question 3 : Commonly used data types DO NOT include:",
    choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
    answer: "C"
  },
  {
    question: "Question 4 : How do you call a function named myFunction?",
    choices: ["A. call myFunction()", "B. call function myFunction()", "C. myFunction()", "D. call myFunction"],
    answer: "C"
  },
  {
    question: "Question 5 : How do you create a function in JavaScript",
    choices: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. createMyFunction()"],
    answer: "B"
  },
  {
    question: "Question 6 : String values must be enclosed within _____ when being assigned to variables.",
    choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
    answer: "C"
  },

  {
    question: "Question 7 : The first index of an array is ____.",
    choices: ["A. 0", "B. 1", "C. 8", "D. any"],
    answer: "A"
  },
  {
    question: "Question 8 : How to write an IF statement in JavaScript?",
    choices: ["A. if i == 5 then", "B. if i = 5 then", "C. if(i == 5)", "D. if i = 5"],
    answer: "C"
  },
  {
    question: "Question 9 : What will the code return? Boolean(3 < 7)",
    choices: ["A. true", "B. false", "C. NaN", "D. syntaxError"],
    answer: "A"

  },
  {
    question: "question 10 : Who is the best Programmer?",
    choices: ["A. Ronny", "B. Gary", "C. Jonathan", "D. Charles" ],
    answer: ["A", "B", "C", "D"]
  }
      
];

//WHEN I click the start button THEN a timer starts

var timerEl = document.getElementById('timer');
var timeLeft = 75;
var questionIndex = 0;
//var endScore = 0;
var questionCount = 1;

function countdown() {
    var timeInterval = setInterval(function () {
       timeLeft--;
       timerEl.textContent =  timeLeft;
      if (timeLeft  <= 0) {
        clearInterval(timeInterval);
        timerEl.textContent = 'Done';
       // done show on high score
        finished.textContent = 'Done';
        gameOver();

      } else if (questionCount >= questionsArray.length +1) {
          clearInterval(timeInterval);
          gameOver();
          }
    } , 1000);
}; //console.log(countdown);


 function startQuizEl () {
  countdown();
  introContainer.style.display = "none";
  questionIndex = 0
  questions.style.display = "block";
  renderQuestions (questionIndex);
  
};

function renderQuestions (n) {
  questionDisplayed.textContent = questionsArray[n].question;
  answerBtnA.textContent = questionsArray[n].choices[0];
  answerBtnB.textContent = questionsArray[n].choices[1];
  answerBtnC.textContent = questionsArray[n].choices[2];
  answerBtnD.textContent = questionsArray[n].choices[3];
  questionIndex = n;
};
// is it wrong or correct
function checkQuestions(event) {
  event.preventDefault ();
  checkAnswerEl.style.display = "block";
  setTimeout(function () {
    checkAnswerEl.style.display = "none";
  }, 3000);

  //answer check
  if (questionsArray[questionIndex].answer == event.target.value) {
    checkAnswerEl.textContent = "Correct"; 
    totalScore = totalScore + 10;

    //penalty for wrong answer
  } else {
     timeLeft = timeLeft - 10;
      checkAnswerEl.textContent = "Wrong! The answer is " + questionsArray[questionIndex].answer + " .";  
    } 

  //WHEN I answer a question THEN I am presented with another question 
  if (questionIndex < questionsArray.length -1 ) {
     renderQuestions(questionIndex +1);
  } else {
    gameOver();
  }

questionCount++;
};

//THEN the game is over
function gameOver() {
  questions.style.display = "none";
  score.textContent = "You scored: " + totalScore ;
  timerEl.style.display = "none";
  scoreContainer.style.display = "block";
  
};

//WHEN the game is over
//THEN I can save my initials and score
function getScore () {
  var list = localStorage.getItem("highScoreList");
  if (list !== null ){
    newList = JSON.parse(list);
    return newList;
  } else {
    newList = [];
  } return newList;
};

function renderScore () {
  highScores.innerHTML = "";
  highScores.style.display = "block";
  var highScoreEl = document.createElement("li");
  li.textContent = item.user + "-" + item.score;
  //li.setAttribute("data-index", i);
  highScores.appendChild(li);
};

function addScore (n) {
  var addScoreList = getScore ();
  addScoreList.push(n);
  localStorage.setItem("ScoreList", JSON.stringify(addScoreList));
};

function saveScore () {
  var scoreItem = {
    user: userInitials.value,
    score: totalScore
  }
  addScore(scoreItem);
  renderScore();
}



//event listener's

startBtn.addEventListener("click", startQuizEl);

questionButtons.forEach(function(click) {
    click.addEventListener("click", checkQuestions);
  });//console.log (questionButtons);

initialsBtn.addEventListener("click" , function(event){
  event.preventDefault();
  scoreContainer.style.display = "none";
  introContainer.style.display = "none";
  highScoreContainer.style.display = "block";
  questions.style.display = "none";

});

highScoresCheck.addEventListener("click", function(event) {
  event.preventDefault();
  scoreContainer.style.display = "none";
  introContainer.style.display = "none";
  highScoreContainer.style.display = "block";
  questions.style.display = "none";
  renderScore();
});

tryAgainBtn.addEventListener("click", function(event) {
  event.preventDefault();
  scoreContainer.style.display = "none";
  introContainer.style.display = "block";
  highScoreContainer.style.display = "none";
  questions.style.display = "none";
  location.reload();

});

clearBtn.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  renderScore();
});