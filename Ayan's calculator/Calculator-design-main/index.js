const keys = document.querySelectorAll(".key");
const screen = document.querySelector("#screen");
const clearKey = document.querySelector(".clear-screen");
const equalsKey = document.querySelector(".sep_key");

let exp = '';
let isResultShown = false;

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (isResultShown) {
      screen.innerText = key.id;
      exp = key.id;
      isResultShown = false;
    } else {
      if (screen.innerText === "0" && key.id !== "/" && key.id !== "*" && key.id !== "+" && key.id !== "-") {
        screen.innerText = key.id;
        exp = key.id;
      } else {
        screen.innerText += key.id;
        exp += key.id;
      }
    }
  });
});

const calculateVal = () => {
  try {
    const result = eval(exp);
    if (result === Infinity || isNaN(result)) {
      throw new Error("Invalid Calculation");
    }
    screen.innerText = result;
    exp = result.toString(); // Update exp to keep the result
    isResultShown = true; // Indicate that a result was shown
  } catch (error) {
    screen.innerText = "Error";
    exp = "";
    isResultShown = false;
  }
};

equalsKey.addEventListener("click", calculateVal);

clearKey.addEventListener("click", () => {
  screen.innerText = "0";
  exp = "";
  isResultShown = false;
});
