//ranking the scores in order by getting them from the local storage
function printHighScores() {
  let highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  highScores.forEach(function (score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}


