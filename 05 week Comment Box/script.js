// 1 sa afisam comentarii
// 2 sa adaugam comentarii
// 3 sa stergem comentarii

let section = document.querySelector(".comments-box")
let userBox = document.querySelector(".user-box")
let user = document.querySelector(".user")
let textInput = document.querySelector("#input")
let uniqComment = document.querySelector("#uniqComment")
const addBtn = document.querySelector("#add-btn")
const delBtn = document.querySelector("#del-btn")

// let commentList = ["comment1", "comment2", "comment3"]

for (let i = 0; commentList.length; i++) {
  let userComment = commentList[i]
  // let commentHTML = document.createComment("li")
  // commentHTML.innerHTML = comment
  // document.body.appendChild(commentHTML)
  // console.log(comment)
  // uniqComment.innerHTML = comment
  // document.body.appendChild(uniqComment)
  // let itemHtml = createComment(comment)
}

// userBox.style.display = "none"

function displayComments() {
  var clone = userBox.cloneNode(true)
  userBox.after(clone)
}

addBtn.addEventListener("click", function (event) {
  // userBox.style.display = "block"
  commentList.push(textInput.value)
  uniqComment.innerText = textInput.value
  // displayComments()
})

// let myElement = document.createElement("p")
// user.appendChild(myElement)
// uniqComment.innerText = textInput.value
// uniqComment.classList.add("ptest")
// myElement.parentElement.removeChild(myElement)
