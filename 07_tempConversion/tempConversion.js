const convertToCelsius = function(fahrenNum) {
  celsius = ((fahrenNum - 32) * (5/9));
  if (Number.isInteger(celsius)) {
    return celsius;
  }
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsiusNum) {
  fahren = ((celsiusNum * (9/5)) + 32);
  if (Number.isInteger(fahren)) {
    return fahren;
  } 
  return parseFloat(fahren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
