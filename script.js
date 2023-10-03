const n = 100;

const guessTheNumber = function () {
  let question = +prompt("Угадай число от 1 до 100");
  if (question !== n) {
    guessTheNumber();
  } else {
    alert("Вы угадали число!");
  }
};

guessTheNumber();
