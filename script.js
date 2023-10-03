let NextOrStop = function () {
  if (!confirm("Начать новую игру?")) {
    alert("Игра завершена!");
  } else {
    guessTheNumber();
  }
};

let isNumber = function (num) {
  if (isNaN(question)) {
    alert("Введите число!");
    question = prompt("Угадай число от 1 до 100");
  }
};

const guessTheNumber = function () {
  const n = 100;

  let question = prompt("Угадай число от 1 до 100");

  if (question === null) {
    alert("Игра завершена!");
  } else {
    if (isNaN(question)) {
      alert("Введи число!");
      question = prompt("Угадай число от 1 до 100");
    }

    let conversion = parseInt(question);
    console.log(conversion);

    let NumberIsLessOrGreater = function (num) {
      if (num < n) {
        alert("Загаданное число больше!");
      } else if (num > n) {
        alert("Загаданное число меньше!");
      }
    };

    if (conversion !== n) {
      NumberIsLessOrGreater(conversion);
      guessTheNumber();
    } else {
      alert("Поздравляю, вы угадали!");
      NextOrStop();
    }
  }
};

guessTheNumber();
