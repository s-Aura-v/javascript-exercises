const repeatString = function(string, amountToRepeat) {
  outputString = '';
  for (i = 0; i < amountToRepeat; i++) {
    outputString+= string;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
