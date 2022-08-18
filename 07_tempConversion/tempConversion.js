const ftoc = function(temp) {
  calc = (temp - 32) * 5/9;
  roundCalc = Math.round(calc * 10) / 10;
  return roundCalc;
};

const ctof = function(temperature) {
  calculation = (temperature * 9/5) + 32; 
  roundedCalc = Math.round(calculation * 10) / 10;
  return roundedCalc;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
