let startBtn = document.querySelector(".start");
let input = document.querySelector("input");
let box = document.querySelector(".words");
let wordTarget = document.querySelector(".word-target");
let level = document.querySelector("select");
let score = document.querySelector(".score");
if (localStorage.getItem("level")) {
  level.value = localStorage.getItem("level");
}
level.onchange = function () {
  localStorage.setItem("level", level.value);
};
const wordList = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];
let totalWords = document.querySelector(".total-words");
totalWords.innerHTML = wordList.length;
let timeElement = document.querySelector("#time");
let secondsLeft = document.querySelector(".seconds-left");
let time;
let inter;
let = startBtn.onclick = function () {
  timer();
  input.focus();

  startBtn.style.display = "none";
  wordTarget.style.display = "initial";

  wordTarget.innerHTML = randomWord();

  inter = setInterval(() => {
    secondsLeft.innerHTML = +secondsLeft.innerHTML - 1;
    if (secondsLeft.innerHTML == "0") {
      document.querySelector(".lose").style.display = "initial";
      input.value = "";
      input.blur();
      input.style.pointerEvents = "none";
      clearInterval(inter);
    }
  }, 1000);
};
function randomWord() {
  let w = wordList[Math.floor(Math.random() * wordList.length)];
  let i = wordList.indexOf(w);
  wordList.splice(i, 1);
  loadWords();
  return w;
}
input.oninput = function () {
  if (input.value.toLowerCase() == wordTarget.innerHTML.toLowerCase()) {
    input.value = "";
    score.innerHTML = +score.innerHTML + 1;
    secondsLeft.innerHTML = time;
    if (wordList.length <= 0) {
      document.querySelector(".win").style.display = "initial";
      input.value = "";
      input.blur();
      input.style.pointerEvents = "none";
      clearInterval(inter);
    } else {
      wordTarget.innerHTML = randomWord();
    }
  }
};
function loadWords() {
  box.innerHTML = "";
  wordList.forEach((word) => {
    let span = document.createElement("span");
    let text = document.createTextNode(word);
    span.appendChild(text);
    span.className = "word";
    box.appendChild(span);
  });
}

function timer() {
  if (level.value == "easy") {
    time = 10;
  } else if (level.value == "normal") {
    time = 5;
  } else if (level.value == "hard") {
    time = 3;
  }
  timeElement.innerHTML = time;
  secondsLeft.innerHTML = time;
}
