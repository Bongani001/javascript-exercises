const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((final, num1) => final + num1, 0);
};

const multiply = function(array) {
  return array.reduce((total, num1) => total * num1);
};

const power = function(whole, up) {
	return whole ** up;
};

const factorial = function(factor) {
    let num = 1;
    if (factor == 0 || factor == 1) {
      return num;
    } else {
      for (let i = factor; i > 1; i--) {
        num = num * i;
      };
      return num;
    };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
