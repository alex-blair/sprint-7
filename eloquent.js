// Exercise 1 - Minimum
function min (num1, num2) {
  return Math.min(num1, num2);
};

console.log(min(0, -10));


// Exercise 2 - Recursion
function isEven (num) {
  if (num < 0) {
    num = num * -1
  }
  if (num === 0) {
    return true
  }
  else if (num === 1) {
    return false
  }
  else {
    return isEven(num-2);
  }
}

console.log(isEven(-2));


// Exercise 3 - Bean Counting
// Part 1
function countBs (string) {
  var count = string.split('').reduce(function(acc, val) {
    if (val === "B") {
      return acc + 1;
    }
    return acc
  }, 0)
  return count;
}
countBs("BeeBee")

// Part 2
function countChars (string, char) {
  var count = string.split('').reduce(function(acc, val) {
    if (val === char) {
      return acc + 1;
    }
    return acc
  }, 0)
  return count;
}
countChars("BeeBee", "e")
