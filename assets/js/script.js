
    var startBtn = document.querySelector("#start-btn");
    var introContainer = document.querySelector("#intro-container");
    
    var questionContainer = document.querySelector("#question-container");
    var displayedQuestion = document.querySelector("#displayed-question");
    
    var answerButtons = document.querySelectorAll(".choices");
    var answerBtnA = document.querySelector("#answer-btnA");
    var answerBtnB = document.querySelector("#answer-btnB");
    var answerBtnC = document.querySelector("#answer-btnC");
    var answerBtnD = document.querySelector("#answer-btnD");
    
    var checkEl = document.querySelector("#checkEl");
    var pointsReport = document.querySelector("#report-container");
    var playerScore = document.querySelector("#total-score");
    var playerInitials = document.querySelector("#player-initials");
    
    var saveScoreBtn = document.querySelector("#save-score-btn");
    var highScoreContainer = document.querySelector("#highscore-container");
    var recordScoreEl = document.querySelector("#record");
    var viewHighscore = document.querySelector("#view-highscore");
    var finish = document.querySelector("#finish");
    
    var tryAgainBtn = document.querySelector("#try-again-btn");
    var clearBtn = document.querySelector("#clear-btn");
    
        //Define questions (Object)
    var questionArray = [
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
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
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
    ];

        //Set other variables
    
    var clock = document.getElementById("timer");
    
    var timeLeft = 75;
    var questionIndex = 0;
    var totalScore = 0;
    var questionCount = 1;
    /*Functions*/
        //WHEN I click the start button, THEN a timer starts(The setInterval() Method)
    function countdown() {
            
        var timerInterval = setInterval(function () {
          timeLeft--;
            clock.textContent = ":" + timeLeft;       
             if (timeLeft <= 0){
                clearInterval(timerInterval);
                clock.textContent = "Done!"; 
                // if time is up, show on score board content instead of "all done!"
                 finish.textContent = "Done!";
                gameOver();
    
            } else  if(questionCount >= questionArray.length +1) {
                 clearInterval(timerInterval);
                 gameOver();
               } 
        }, 1000);
    }
    
        //Click the button to start the quiz
    function startQuiz () {
            introContainer.style.display = "none";
            questionContainer.style.display = "block";
            questionIndex = 0
            countdown();
            renderQuestion(questionIndex);
          
    }
        //present the questions and answers
    function renderQuestion (n) {
            displayedQuestion.textContent = questionArray[n].question;
            answerBtnA.textContent = questionArray[n].choices[0];
            answerBtnB.textContent = questionArray[n].choices[1];
            answerBtnC.textContent = questionArray[n].choices[2];
            answerBtnD.textContent = questionArray[n].choices[3];
            questionIndex = n;
        }
    
        //WHEN I answer a question,Show if answer is correct or wrong 
    function checkAnswer(event) {
        event.preventDefault();
        //make it display
        checkEl.style.display = "block";
        setTimeout(function () {
            checkEl.style.display = 'none';
        }, 2000);
    
        // answer check
        if (questionArray[questionIndex].answer == event.target.value) {
            checkEl.textContent = "Correct!"; 
            totalScore = totalScore + 10;
    
        } else {
            timeLeft = timeLeft - 10; 
            checkEl.textContent = "Wrong! The correct answer is " + questionArray[questionIndex].answer + " .";
        }
             //THEN I am presented with another question
        if (questionIndex < questionArray.length -1 ) {
        // call renderQuestions to bring in next question when any answertBtn is clicked
            renderQuestion(questionIndex +1);
        } else {
        gameOver();
    }
    questionCount++;
    }
        //WHEN all questions are answered or the timer reaches 0, Game is over
    function gameOver() {
    
      questionContainer.style.display = "none";
      pointsReport.style.display = "block";
      playerScore.textContent = "You scored :" + totalScore + " points"; 
      clock.style.display = "none"; 
      console.log(pointsReport);
    };
 
  function getScore () {
    var currentList = localStorage.getItem("ScoreList");
      if (currentList !== null ){
          freshList = JSON.parse(currentList);
          return freshList;
      } else {
          freshList = [];
      }
      return freshList;
  };

  function renderScore () {
    recordScoreEl.innerHTML = "";
    recordScoreEl.style.display ="block";
    var highScores = getScore();   
    for (var i = 0; i < highScores.length; i++) {
       var item = highScores[i];
    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("scoreList", i);
    recordScoreEl.appendChild(li);
    }
  };

  // push new score and initial to the local storage
  function addItem (n) {
      var addedList = getScore();
      addedList.push(n);
      localStorage.setItem("ScoreList", JSON.stringify(addedList));
  };
  
  function saveScore () {
      var scoreItem ={
        user: playerInitials.value,
        score: totalScore
      }
      addItem(scoreItem);
      renderScore();
  }
  
  function clearScore() {
    //localStorage.removeItem(scoreItem);
    localStorage.clear();
    location.reload
  };

    // eventlistners
    // startbtn to start the quiz
    startBtn.addEventListener("click", startQuiz);
    
    //click any choices button, go to the next question
    answerButtons.forEach(function(click){
    
        click.addEventListener("click", checkAnswer);
    });
    
    //save information and go to next page
    saveScoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        pointsReport.style.display = "none";
        introContainer.style.display = "none";
        highScoreContainer.style.display = "block";
        questionContainer.style.display ="none";
        saveScore();
    });
    
    // check highscore 
    viewHighscore.addEventListener("click", function(event) {
        event.preventDefault();
        pointsReport.style.display = "none";
        introContainer.style.display = "none";
        highScoreContainer.style.display = "block";
        questionContainer.style.display ="none";
        getScore();
        renderScore();
    });
    
    //go back to intro page
    tryAgainBtn.addEventListener("click",function(event){
        event.preventDefault();
        pointsReport.style.display = "none";
        introContainer.style.display = "block";
        highScoreContainer.style.display = "none";
        questionContainer.style.display ="none";
        location.reload();
    });
    
    //clear local storage.
    clearBtn.addEventListener("click",function(event) {
        event.preventDefault();
        localStorage.clear();
        clearScore();
        renderScore();
    });