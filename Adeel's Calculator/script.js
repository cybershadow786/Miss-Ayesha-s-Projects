let expression = "";
const btns = document.querySelectorAll(".btn");
let clear = document.querySelector(".clear");
let screen = document.querySelector(".screen");
const collectVal = (val) => {
  expression = expression + val;
  console.log(expression);
  showVal(expression);
};
const showVal = (val) => {
  val = val.replace("*", "x");
  screen.innerHTML = val;
  screen.style.color = "white";
};
clear.addEventListener("click", () => {
  screen.innerHTML = "Result";
  screen.style.color = "rgb(89,93,92)";
  expression = "";
});
const calculateVal = () => {
  if (expression === "") {
    screen.innerHTML = "Error";
    screen.style.color = "white";
  } else {
    screen.innerHTML = eval(expression);
    screen.style.color = "white";
    console.log(eval(expression));
    expression = "";
  }
};
