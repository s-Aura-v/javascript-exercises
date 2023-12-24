const removeFromArray = function(array, ...element) {
  output = [];
  for (i = 0; i < array.length; i++) {
    if (element.includes(array[i])) {
      continue;
    } else {
      output.push(array[i]);
    }
  }
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
