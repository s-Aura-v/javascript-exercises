const sumAll = function(min, max) {
  totalSum = 0;
  if (!Number.isInteger(max) || !Number.isInteger(min) || min < 0 || max < 0 ) {
    return "ERROR";
  }

  if (min > max ) {
    temp = min;
    min = max;
    max = temp;
  }
  
  while (max >= min) {
    totalSum += max;
    max--;
  }
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
