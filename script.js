var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("Please enter your first number"));
if (isNaN(num1)) {
  containerEle.innerHTML = "Invalid Entry";
} else {
  var operator = prompt("Please enter your operator");
}
if (operator == "/" || operator == "*" || operator == "+" || operator == "-") {
  var num2 = Number(prompt("Please enter your second number"));
} else {
  containerEle.innerHTML = "Invalid Entry";
} if (isNaN(num2)) {
  containerEle.innerHTML = "Invalid Entry";
}
var sum = num1 ** num2;
if (operator == "/") {
  sum = num1 / num2;
  containerEle.innerHTML = "Your answer is " + sum;
} else if (operator == "*") {
  sum = num1 * num2;
  containerEle.innerHTML = "Your answer is " + sum;
} else if (operator == "+") {
  sum = num1 + num2;
  containerEle.innerHTML = "Your answer is " + sum;
} else if (operator == "-") {
  sum = num1 - num2;
  containerEle.innerHTML = "Your answer is " + sum;
}