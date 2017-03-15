//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if (x > y) {
    return x;
  } else  if (y > x) {
    return y;
  } else {
    return x;
  }
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  if (language === 'German') {
    return 'Guten Tag!';
  }
  //language: 'English' -> 'Hello!'
  else if (language === 'English') {
    return 'Hello!';
  }
  //language: 'Spanish' -> 'Hola!'
  else if (language === 'Spanish') {
    return 'Hola!';
  }
  //if language is undefined return 'Hello!'
  else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  if (num === 5 || num === 10) {
    return true;
  }
  //otherwise return false
  else if (num !== 5 || num !== 10) {
    return false;
  }
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num > 20 && num < 50) {
    return true;
  }
  else {
    return false;
  }
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  if (num % 1 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  }
  //if num is divisible by 5 return 'buzz'
  else if (num % 5 === 0) {
    return 'buzz';
  }
  //if num is divisible by 3 return 'fizz'
  else if (num % 3 === 0) {
    return 'fizz';
  }
  //otherwise return num
  else {
    return num;
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
    for (var i = 2; i < num; i++){
      if (num % i !== 0){
        return true;
      } 
      else {
        break;
      }
  }
  return false;
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  var sentence = words.join(' ');
  return sentence;
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  if (arr.indexOf(item) != -1) {
    return true;
  }
  else {
    return false;
  }
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var sum = 0;
  for ( var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < testScores.length; i++) {
    sum += testScores[i];
    avg = sum / testScores.length;
  }
  return avg;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var large = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > large) {
      large = numbers[i];
    }
  }
  return large;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
