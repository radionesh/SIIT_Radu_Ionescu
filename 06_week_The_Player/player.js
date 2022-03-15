// 1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400)
// unde puteti playerul - il numim gameContainer

// Avem in html un div pentru mapa jocurilui
// Un div pentru player

// 2.  Player sa poate misca in toate directile ( incepeti doar cu o directie )
// Vom folosi tastatura - Arrow up, down,right,left
let player = document.querySelector(".player")
document.addEventListener("keydown", function (event) {
  console.log("event= ", event)
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top)
    if (oldTop < 370) {
      player.style.top = `${oldTop + 10}px`
    }
  }
  if (event.code === "ArrowUp") {
    let oldUp = parseInt(player.style.top) // daca style.left nu exista avem NaN
    if (oldUp <= 370 && oldUp > 0) {
      player.style.top = `${oldUp - 10}px` // NaN + 12 => NaN
    }
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left) // daca style.left nu exista avem NaN
    if (oldLeft < 370) {
      player.style.left = `${oldLeft + 10}px` // NaN + 12 => NaN
    }
  }
  if (event.code === "ArrowLeft") {
    let oldRight = parseInt(player.style.left) // daca style.left nu exista avem NaN
    if (oldRight <= 370 && oldRight > 0) {
      player.style.left = `${oldRight - 10}px` // NaN + 12 => NaN
    }
  }
  // la tema faceti pentru restul directilor
})

// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

// 4.  Adaugati abstacole, puneti cateva div-uri ( dimensiuni fixe cu anumita culoare) in gameContainer, pot fi random puse in mapa jocuri.
// tips

// obstacole puse dinamic la fiecare 3 secunde

setInterval(function () {
  //obstacol dinamic 1
  const obstaco1 = {
    left: Math.round(Math.random() * 300),
    top: Math.round(Math.random() * 300),
  }

  const obstacol1 = document.querySelector(".obstacol1")

  obstacol1.style.left = `${obstaco1.left}px`
  obstacol1.style.top = `${obstaco1.top}px`

  //obstacol dinamic 2
  const obstaco2 = {
    left: Math.round(Math.random() * 300),
    top: Math.round(Math.random() * 300),
  }

  const obstacol2 = document.querySelector(".obstacol2")

  obstacol2.style.left = `${obstaco2.left}px`
  obstacol2.style.top = `${obstaco2.top}px`
  //obstacol dinamic 3
  const obstaco3 = {
    left: Math.round(Math.random() * 300),
    top: Math.round(Math.random() * 300),
  }

  const obstacol3 = document.querySelector(".obstacol3")

  obstacol3.style.left = `${obstaco3.left}px`
  obstacol3.style.top = `${obstaco3.top}px`
}, 1000 * 3)

// for every 3 seconds alive, player gets +1 life points
let lifePoints = 0

let pPoints = document.createElement("p")
pPoints.classList.add("points")
document.body.appendChild(pPoints)
pPoints.innerHTML = `Number of lives ${lifePoints}`

setInterval(function () {
  lifePoints = lifePoints + 1
  console.log(lifePoints)
  pPoints.innerHTML = `Number of lives ${lifePoints}`
  // if nr of points is 50 then victory
  if (lifePoints === 10) {
    lifePoints = 0
    pPoints.innerHTML = "Victory!"
  }
}, 1000 * 3)
