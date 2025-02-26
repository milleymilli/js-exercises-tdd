// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
    var fact = 1
    for (var i = int; i > 0; i--) {
        fact *= i;
    }

    return fact;
}
  var array = [];
  var i = 1;
  while (i <= int) {
    array.push(i);
    i++;
  }
  if (array.length > 1) {
    return array.reduce((totall, num) => totall * num);
  } else {
    return 1;
  }
}

module.exports = factorial;
