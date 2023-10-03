const n = 100;

let NumberIsLessOrGreater = function (question) {
  if (question < n) {
    alert("Загаданное число больше!");
  } else if (question > n) {
    alert("Загаданное число меньше!");
  }
};

const guessTheNumber = function () {
  let question = +prompt("Угадай число от 1 до 100");
  if (question !== n) {
    NumberIsLessOrGreater(question);
    guessTheNumber();
  } else {
    alert("Поздравляю, вы угадали!");
  }
};

guessTheNumber();
