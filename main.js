// OBJECT
console.log(document)
const playingField = document.getElementById("playing-field")
console.log(playingField)
const down = document.getElementById("down")
console.log(down)
console.log(down.innerHTML)
// down.innerHTML = "Down"
console.log(playingField.innerHTML)
playingField.style.backgroundColor = "blue"
// ball = document.getElementById("block")
// ball.style.backgroundColor = "yellow"
// document.getElementById("block").style.backgroundColor = "yellow"

// const moveRight = function(){
//     let david = parseInt(document.getElementById("block").style.left) || 0
//     david += 15
//     document.getElementById("block").style.left = (david + "px")
// }

const mainHeader = document.createElement("h1")
mainHeader.innerHTML = "The Best Game Ever"
mainHeader.style.color = "#c0392b"
mainHeader.style.fontFamily = "Helvetica"
mainHeader.setAttribute("class", "mainHeader")
document.body.appendChild(mainHeader)

const subHeader = document.createElement("h2")
subHeader.innerHTML = ("Game by: Benazuz")
subHeader.setAttribute("class", "subHeader")
document.body.appendChild(subHeader)

//arrows:
const allArrows = document.getElementById("arrows")
const upArrow = document.getElementById("up")
const leftArrow = document.getElementById("left")
const rightArrow = document.getElementById("right")
const downArrow = document.getElementById("down")

const moveBallLeft = function () {
    let ball = document.getElementById("block")
    let pixels = parseInt(ball.style.left) || 0
    pixels -= 15
    if(pixels >= 0){
        ball.style.left = (pixels + "px")
    }
    
}

const moveBallRight = function () {
    let ball = document.getElementById("block")
    let pixels = parseInt(ball.style.left) || 0
    pixels += 15
    if(pixels <= 405){
        ball.style.left = (pixels + "px")
    }
    console.log(pixels)

}

const moveBallUp = function () {
    let ball = document.getElementById("block")
    let pixels = parseInt(ball.style.top) || 0
    pixels -= 15
    if(pixels >= 0){
        ball.style.top = (pixels + "px")
    }
    console.log(pixels)
}

const moveBallDown = function () {
    let ball = document.getElementById("block")
    let pixels = parseInt(ball.style.top) || 0
    pixels += 15
    if(pixels <= 405){
        ball.style.top = (pixels + "px")
    }
    console.log(pixels)
}