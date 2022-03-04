// 1
// https://edabit.com/challenge/4gzDuDkompAqujpRi

// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addToNumber(num) {
  let sum = 0
  for (var i = 0; i <= num; i++) {
    sum += i
  }
  return sum
}

// 2
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// Create a function that takes an array of numbers and return both
// the minimum and maximum numbers, in that order.

function smallToBig(arr) {
  let maximum = Math.max(...arr)
  let minimum = Math.min(...arr)
  console.log(minimum, maximum)
}

smallToBig([1, 2, 3, 4, 5, 6, 7])

// 3
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// Create a function that takes a string and returns a string in
// which each character is repeated once.

function repeatChar(string) {
  var chars = ""
  splitChar = string.split("").length
  for (var i = 0; i < splitChar; i++) {
    chars += string[i] + string[i]
  }
  return chars
}
repeatChar("cool")

// 4
// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
// A set is a collection of unique items. A set can be formed from
// an array by removing all duplicate items.
// Create a function that sorts an array and removes all duplicate
// items from it.

function sortArray(arr) {
  let arrSorted = arr.sort()
  let noDupes = [...new Set(arrSorted)]
  return noDupes
}

sortArray([1, 3, 3, 5, 5, 6, 7, 7])

// 5
// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
// Write a function that converts an object into an array, where each
// element represents a key-value pair in the form of an array.

function objToArr(toArray) {
  let result = Object.entries(toArray)
  return result
}

objToArr({ a: 1, b: 2 })
