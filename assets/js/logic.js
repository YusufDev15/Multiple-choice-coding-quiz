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