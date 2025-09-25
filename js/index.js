//калькулятор 
let number1 = Number(prompt("Введіть число:"));
const operator = prompt("Введіть оператор (+, -, *, /):");
let number2 = Number(prompt("Введіть друге число:"));
let result;

switch (operator) {
  case "+":
      result = number1 + number2;
      alert(`${result}`);
      break;
    case "-":
      result = number1 - number2;
      alert(`${result}`);
      break;
    case "/":
      result = number1 / number2;
      alert(`${result}`);
      break;
    case "*":
      result = number1 * number2;
      alert(`${result}`);
      break;
    default:
      alert("Будьте уважні! Введіть правильний оператор");
};


