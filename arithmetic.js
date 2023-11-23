// Variables for each equation constructor //
let operand1, operand2, operator, btnName;
//
//
//Variable for calculator windows
const inputField = document.querySelector("#inputValue");
const outPutField = document.querySelector("#resultValue");
//
// variable for clear button
const clearAllBtn = document.querySelector("#btn-clear");
//  variable for equal button
const equalsBtn = document.querySelector("#btn-equotient");
// array collecting number buttons //
const numberBtns = Array.from(document.querySelectorAll(".numBtn"));
// array collecting operator buttons //
const operatorBtns = Array.from(document.querySelectorAll(".opBtn"));
//
// click eventlisteners on every number buttons //
numberBtns.forEach((el) =>
  el.addEventListener("click", function () {
    document.querySelector("#inputValue").value += `${this.value}`;
  })
);
//BUG
//  click eventlisteners on every operator button //
operatorBtns.forEach((elBtn) =>
  elBtn.addEventListener("click", function () {
    btnName = elBtn.name;
    if (!operator) {
      operator = btnName;
    }
    operationSetter(btnName);
  })
);
//BUG
// Function for inital operator analysis
const operationSetter = function (btnName) {
  if (inputField.value && !operand1) {
    operand1 = Number(inputField.value);
    inputField.value = "";
  } else if (inputField.value && !operand2) {
    operand2 = Number(inputField.value);
    inputField.value = "";
    outPutField.value = operatorSorter(operator);
    operator = "";
    console.log(operator, btnName);
    operand1 = Number(outPutField.value);

    console.log(operand1, operand2);
  }
};
//
// Function for operation construction
function operatorSorter(operator) {
  switch (operator) {
    case "add":
      return add([operand1, operand2]);
      break;
    case "subtract":
      return subtract([operand1, operand2]);
      break;
    case "divide":
      return divide([operand1, operand2]);
      break;
    case "multiply":
      return multiply([operand1, operand2]);
      break;
    default:
      console.log(`error: (+/- button)`);
  }
}
//
// event listener to clear all values constructed
clearAllBtn.addEventListener("click", function () {
  inputField.value = "";
  outPutField.value = "";
  operand1 = "";
  operand2 = "";
  operator = "";
  btnName = "";

  console.log(
    inputField.value,
    outPutField.value,
    operand1,
    operand2,
    btnName,
    operator
  );
});
//
// eventlistener to equate the values that have been are held in operand1 and operand2
equalsBtn.addEventListener("click", function () {
  if (inputField.value && operand1) {
    operand2 = Number(inputField.value);
    outPutField.value = operatorSorter(operator);
    inputField.value = "";
  }
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ARITHMETIC FUNCTIONS
//add function
const add = function (input) {
  const sum = input.reduce(function (total, num) {
    total += num;
    return total;
  });
  console.log(`sum: ${sum}`);
  return sum;
};
//
//subtract function
const subtract = function (input) {
  const difference = input.reduce(function (num1, num2) {
    return num1 - num2;
  });
  console.log(`difference: ${difference}`);
  return difference;
};
//
//mupltiply function
const multiply = function (input) {
  const product = input.reduce(function (num1, num2) {
    return num1 * num2;
  });
  console.log(`product: ${product}`);
  return product;
};
//
// divide function
const divide = function (input) {
  const quotient = input.reduce(function (num1, num2) {
    return num1 / num2;
  });
  console.log(`quotient: ${quotient}`);
  return quotient;
};
//
//
//
//
//
//
//
//
//
//
// DO NOT ADD CODE BELOW HERE
// module.exports = { add, subtract, multiply, divide };
