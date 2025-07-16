

let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newbtn = document.querySelector('.new');
let msg = document.querySelector('.msg');
let victoryText = document.querySelector('.victory');
let winnerName = document.querySelector('.winner-name');

let turnO = true;
let winpattern = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 4, 6], [2, 5, 8],
  [3, 4, 5], [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turnO ? "O" : "X";
      box.disabled = true;
      turnO = !turnO;
      checkwinner();
    }
  });
});

const showWinner = (winner) => {
  winnerName.innerText = winner;
  msg.classList.remove("hide");
  victoryText.classList.remove("hide");  
  newbtn.classList.remove("hide");       
  boxes.forEach((box) => box.disabled = true);
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      return;
    }
  }
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg.classList.add("hide");
  newbtn.classList.add("hide");
  victoryText.classList.add("hide");
  winnerName.innerText = "";
};

reset.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);

