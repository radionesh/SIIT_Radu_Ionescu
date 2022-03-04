// 1
// https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
// Create a function that takes two numbers as arguments and returns their sum.

function sum(a, b) {
  return a + b
}

// 2
// https://edabit.com/challenge/8q54MKnRrm89pSLmW
// Write a function that takes an integer minutes and converts it to seconds.

function toSeconds(minutes) {
  return minutes * 60
}

// 3
// https://edabit.com/challenge/NAQhEoxbofPidLxm9
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(num) {
  return num + 1
}

// 4
// https://edabit.com/challenge/QaApgtePE6QrCZ64o
// Create a function that takes an array containing only numbers and return the first element.

var array = [1, 2, 3, 4]

function getFirstNum() {
  return array[0]
}

// 5
// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
// Return the Remainder from Two Numbers

function remainder(a, b) {
  return a % b
}

// 6
// https://edabit.com/challenge/8Qg78sf5SNDEANKti
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

var chickensLegs = 2
var cowsLegs = 4
var pigsLegs = 4

function totalLegs(chickens, cows, pigs) {
  var totalChickenLegs = chickens * chickensLegs
  var totalCowsLegs = cows * cowsLegs
  var totalPigsLegs = pigs * pigsLegs
  var totalLegs = totalChickenLegs + totalCowsLegs + totalPigsLegs
  return totalLegs
}

// 7
// https://edabit.com/challenge/iBQYbSHZGhpktLRdn
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function checkDivByFive(int) {
  if (int % 5 === 0) {
    return true
  } else {
    return false
  }
}

// 8
// https://edabit.com/challenge/yHGowWucg3k2kJdZ4
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function compareChar(string1, string2) {
  if (string1.length === string2.length) {
    return true
  } else {
    return false
  }
}

// 9
// https://edabit.com/challenge/kLa2w7m4h849k8rmW
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

function greeting(name, num) {
  if (num === 1) {
    var name = name.toUpperCase()
    return "Hello " + name
    // sau `Hello ${name}`
  } else {
    return "Bye " + name
    // sau `Bye ${name}`
  }
}
