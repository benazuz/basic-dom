const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const changeColor = function(){
    box.style.backgroundColor = "#8e44ad"
}


// const list = document.getElementById("myList")
// const addItem = function(){
//     const newItem = document.createElement("li")
//     newItem.innerHTML = "New Item!"
//     list.appendChild(newItem)
// }

// const myBox = document.getElementById("box")
// box.onclick = function(){
//     myBox.innerHTML = "Clicked"
// }

// box.onmouseenter = function(){
//     box.innerHTML = "your mouse has slipped inside of me. please do click."
// }

// const box2 = document.createElement("div")
// box2.setAttribute("class", "moreBoxes")
// box2.style.backgroundColor = "red"
// box2.style.width = "100px"
// box2.style.height = "100px"
// box2.onclick = function(){
//     box2.innerHTML = "maybe im not the first box but i am still clicked."
// }

// document.getElementById("someID").appendChild(box2)