// let input = document.querySelector("input")

// input.addEventListener("input", function (event) {
//   let weight = document.querySelector("#weight").value
//   let height = document.querySelector("#height").value
//   let result = document.querySelector("#result")
//   console.log(height)
//   if (height === "" || isNaN(height)) {
//     result.innerHTML = "Provide height in cm"
//   }
//   if (weight === "" || isNaN(weight)) {
//     result.innerHTML = "Provide number of kg"
//   } else {
//     let bmi = parseInt((weight / ((height * height) / 10000)).toFixed(2))
//     if (bmi <= 18.5) {
//       result.innerHTML = `You are underweight : ${bmi}`
//     } else if (bmi >= 18.6 && bmi <= 25) {
//       result.innerHTML = `Normal weight. BMI is ${bmi}`
//     } else if (bmi >= 25.1 && bmi <= 30) {
//       result.innerHTML = `You are overweight. BMI is : ${bmi}`
//     } else {
//       result.innerHTML = `You are obese. BMI is : ${bmi}`
//     }
//   }
// })

// let input = document.querySelector("input")

function calcBmi() {
  let weight = document.querySelector("#weight").value
  let height = document.querySelector("#height").value
  let result = document.querySelector("#result")
  let bmi = (weight / ((height * height) / 10000)).toFixed(2)
  if (weight == false || height == false) {
    result.innerHTML = "Type both fields!"
  } else if (bmi <= 18.5) {
    result.innerHTML = `You are underweight. <br> BMI is : ${bmi}`
  } else if (bmi >= 18.6 && bmi <= 25) {
    result.innerHTML = `Normal weight. <br> BMI is ${bmi}`
  } else if (bmi >= 25.1 && bmi <= 30) {
    result.innerHTML = `You are overweight. <br> BMI is : ${bmi}`
  } else {
    result.innerHTML = `You are obese. <br> BMI is : ${bmi}`
  }
}

let resetBtn = document.querySelector("#resetBtn")

resetBtn.addEventListener("click", function (event) {
  weight.value = ""
  height.value = ""
  result.innerHTML = "Type your weight and height to find out your BMI"
})
