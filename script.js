let bubbles = document.querySelector(".bubbles");
let hitSelect = document.querySelector("#hit");
let scoreNum = document.querySelector("#score");
let timeCont = document.querySelector("#time");
let score = 0;
let hitrn;
let bubblern;
let time = 4;
const bubbleSize = 80;

function calculateNumberofBubbles() {
  let containerWidth = bubbles.clientWidth;
  let containerHeight = bubbles.clientHeight;
  let bubblesPerRow = Math.floor(containerWidth / bubbleSize);
  let numberOfRows = Math.floor(containerHeight / bubbleSize);
  return bubblesPerRow * numberOfRows;
}

function bubbleCreation() {
  let bubbleStore = "";
  let numberOfBubbles = calculateNumberofBubbles();
  for (let i = 1; i <= numberOfBubbles; i++) {
    bubblern = Math.floor(Math.random() * 10) + 1;
    bubbleStore += `<div class="bubble flex">${bubblern}</div>`;
  }
  bubbles.innerHTML = bubbleStore;
}

function timer() {
  let timerInterval = setInterval(() => {
    if (time >= 0) {
      timeCont.textContent = time;
      time--;
    } else {
      clearInterval(timerInterval);
      bubbles.innerHTML = "<h1>Game Over</h1>";
    }
  }, 1000);
}

function hit() {
  hitrn = Math.floor(Math.random() * 10) + 1;
  hitSelect.textContent = hitrn;
}
function finalScore() {
  score += 10;
  scoreNum.textContent = score;
}

bubbles.addEventListener("click", (e) => {
  let bubbleNum = Number(e.target.textContent);
  if (bubbleNum === hitrn) {
    bubbleCreation();
    hit();
    finalScore();
  } else {
    bubbles.innerHTML = "<h1>Game Over</h1>";
    time = 0;
  }
});

bubbleCreation();
hit();
timer();
