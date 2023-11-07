//Get Dom elements
var timeEl = document.querySelector("#time");
var starQuizBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var feedbackEl = document.querySelector("#feedback");

//object for a quiz, which will have question objects
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timeId;

//start of the quiz
function quizStart() {
  timeId = setInterval(ticker, 1000);
  timeEl.textContent = time;
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}

//looping through array of questions and answers to create a list of buttons
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var questionTitleEl = document.getElementById("question-title");
  questionTitleEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (option, i) {
    var optionBtn = document.createElement("button");
    optionBtn.setAttribute("value", option);
    optionBtn.textContent = i + 1 + ". " + option;
    optionBtn.addEventListener("click", clickQuestion);
    choicesEl.appendChild(optionBtn);
  });
}

//checking for the right answer and deducting time off for the wrong answer
function clickQuestion() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
      time = 0; //clearInterval()
    }
    timeEl.textContent = time;
    feedbackEl.textContent = `Incorrect! The correct answer was ${questions[currentQuestionIndex].answer}.`;
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 2000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

//when the quiz ends the questions are hidden, the timer stops and displays the final score
function quizEnd() {
  clearInterval(timeId);
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}

//Stop the quiz if the timer reaches 0
function ticker() {
  time--;
  timeEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

starQuizBtn.addEventListener("click", quizStart);
