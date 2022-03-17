//  Digital Timer
// 1. Vream sa afisam un timer in browser, va incepe cu 00:00:00
// 2. Sa se faca update in real time ( la fiecare secunda )

// Task1: Sa definim in html ca va arata acest timer + acces in js

const hourHtml = document.getElementById(`hour`)
const minuteHtml = document.getElementById(`minute`)
const secundeHtml = document.getElementById(`secunde`)

// console.log(hourHtml)
// console.log(minuteHtml)
// console.log(secundeHtml)

function addZero(value) {
  if (value < 10) {
    return `0` + value
  } // daca folosim return in if, nu mai trebuie else
  return value
  // sau asa
  // return value < 10 ? "0" + value : value
}

// minuteHtml.innerHTML = '10'

// Task2: Sa incrementam secundele, incepem de la zero,
// iar dupa ce trece o secunda sa cresca cu 1
// Task3: Sa crestem minutele iar secundele vor incepe de la zero
// Task3: Sa crestem orele iar minutele vor incepe de la zero
let secunde = 0
let minute = 0
let hour = 0

let startBtn = document.createElement(`button`)
document.body.appendChild(startBtn)
// startBtn.setAttribute("id", "start")
startBtn.innerText = `START`

let myInterval

startBtn.addEventListener(`click`, function () {
  myInterval = setInterval(function () {
    secunde = secunde + 1

    if (secunde == 60) {
      minute = minute + 1
      secunde = 0
    }

    if (minute == 60) {
      hour = hour + 1
      minute = 0
    }

    secundeHtml.innerHTML = addZero(secunde)
    minuteHtml.innerHTML = addZero(minute)
    hourHtml.innerHTML = addZero(hour)
  }, 1000)
})

// stop button
let stopBtn = document.createElement(`button`)
document.body.appendChild(stopBtn)
stopBtn.innerText = `STOP`

stopBtn.addEventListener(`click`, function () {
  clearInterval(myInterval)
})

// reset button

let resetBtn = document.createElement(`button`)
document.body.appendChild(resetBtn)
resetBtn.innerText = `RESET`

resetBtn.addEventListener(`click`, function () {
  secundeHtml.innerHTML = `0${(secunde = 0)}`
  minuteHtml.innerHTML = `0${(minute = 0)}`
  hourHtml.innerHTML = `0${(hour = 0)}`
})

// save timer button

let saveBtn = document.createElement(`button`)
document.body.appendChild(saveBtn)
saveBtn.innerText = `SAVE`
let divHtml = document.createElement(`div`)
divHtml.classList.add(`score-div`)
document.body.appendChild(divHtml)
let h3Html = document.createElement(`h3`)
divHtml.appendChild(h3Html)
h3Html.innerText = `Recorded times`
let ulHTML = document.createElement("ul")
divHtml.appendChild(ulHTML)

saveBtn.addEventListener(`click`, function () {
  let liHtml = document.createElement(`li`)
  ulHTML.prepend(liHtml) // am pus cu prepend ca sa fie cel mai recent input "at the top"
  liHtml.innerHTML = `${addZero(hour)} : ${addZero(minute)} : ${addZero(
    secunde
  )}`
})
