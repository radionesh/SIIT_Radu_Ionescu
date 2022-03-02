var array = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8, 8, 1, 1]

// 1. display in the console the numbers from 1 to 20

for (var index = 0; index < 20; index++) {
  if (array[index] <= 20) {
    console.log(array[index])
  }
}

// 2. display in the console the odd numbers from 1 to 20

for (var index = 0; index < array.length; index++) {
  if (array[index] % 2 !== 0 && array[index] <= 20) {
    console.log(array[index])
  }
}

// 3/ compute the sum of the elements of an array and display it in the console

var sum = 0
for (var index = 0; index < array.length; index++) {
  sum = sum + array[index]
}

console.log(sum)

// 4. compute the maximum of the elements of an array and display it in the console

var maxElement = Math.max(...array)
console.log(maxElement)

// 5. compute how many times a certain element appears in an array - tips: use object, var element = 2

// cu o functie

function elementCount(element) {
  var count = 0
  for (var index = 0; index < array.length; index++) {
    if (array[index] === element) {
      count++
    }
  }
  console.log(count)
}

// cu un object

var count = {}

for (var index = 0; index < array.length; index++) {
  var element = array[index]

  if (count[element]) {
    count[element] += 1
  } else {
    count[element] = 1
  }
}

console.log(count)

// 6. Using nested control structures (doua for + if) for generate the following pattern

// 0 1 0 1
// 1 0 1 0
// 0 1 0 1
// 1 0 1 0

// nu ii dau de cap la asta ultima... :)

var result = ""
for (var index = 0; index < 4; index++) {
  for (var index2 = 0; index2 < 4; index2++) {
    if (result) {
      result = result + "1 "
      // result = result + "0 "
    } else {
      result = result + "0 "
    }
  }
  result = result + "\n"
}
console.log(result)

var result = ""
for (var index = 0; index < 4; index++) {
  for (var index2 = 0; index2 < 4; index2++) {
    result = result + "1 "
  }

  result = result + "\n"
}
console.log(result)
