let remainingLives = 7;
const chosenNumber = Math.floor(Math.random() * 101);

const check = document.getElementById("button");
check.addEventListener("click", function () {
  const inputNumber = document.getElementById("number1").value;
  checkInput(Number(inputNumber));
});

document.getElementById("text4").innerHTML = remainingLives;

function checkInput(input) {
  const text2 = document.getElementById("text2");
  if (input === chosenNumber) {
    text2.innerHTML = "Congrats! You guessed the number correctly!";
  } else if (input < chosenNumber) {
    text2.innerHTML = "Your guess is too low";
    remainingLives--;
    document.getElementById("text4").innerHTML = remainingLives;
    checkRemainingLives();
  } else if (input > chosenNumber) {
    text2.innerHTML = "Your guess is too high";
    remainingLives--;
    document.getElementById("text4").innerHTML = remainingLives;
    checkRemainingLives();
  }
}

function checkRemainingLives() {
  const text2 = document.getElementById("text2");
  if (remainingLives <= 0) {
    text2.innerHTML = "";
    document.getElementById("text4").innerHTML = "You Lost!";
    document.getElementById("text3").innerHTML = "";
  }
}
