let attempts = 10;
let NextOrStop = function () {
  if (!confirm("Начать новую игру?")) {
    alert("Игра завершена!");
  } else {
    attempts = 10;
    guessTheNumber();
  }
};

let counter = function () {
  attempts--;
};

const guessTheNumber = function () {
  const n = 100;

  if (attempts === 0) {
    alert("Игра окончена!");
    NextOrStop();
  }

  let question = prompt(
    "Угадай число от 1 до 100. У Вас " + attempts + " попыток"
  );

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
        alert("Загаданное число больше! Осталось попыток: " + attempts);
      } else if (num > n) {
        alert("Загаданное число больше! Осталось попыток: " + attempts);
      }
    };

    if (conversion !== n) {
      counter();
      NumberIsLessOrGreater(conversion);
      guessTheNumber();
    } else {
      alert("Поздравляю, вы угадали!");
      NextOrStop();
    }
  }
};

guessTheNumber();
