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

//looping through array of questions and answers to create a list of buttons
function getQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  var questionTitleEl = document.getElementById("question-title");
  questionTitleEl.textContent = currentQuestion.choices.forEach(function (
    option,
    i
  ) {
    var optionBtn = document.createElement("button");
    optionBtn.setAttribute("value", option);
    optionBtn.textContent = i + 1 + ". " + option;
    optionBtn.addEventListener("click", clickQuestion);
    choicesEl.appendChild(optionBtn);
  });
}

//start of the quiz
function quizStart() {
  timeId = setInterval(ticker, 1000);
  timeEl.textContent = time;
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}


