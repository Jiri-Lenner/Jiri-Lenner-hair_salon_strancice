//Roundaround
const images = document.getElementsByClassName("slide_container")
let currentImage = 0;

//buttons
const imageButtonLeft = document.getElementById("arrow_left")
const imageButtonRight = document.getElementById("arrow_right")

//slide Width
let slideWidth = images[0].clientWidth

//Setup images
let imgSetup = function () {
    for (let i = 0; i < images.length; i++) {
        images[i].style.left = i * 100 + "%"
    }
}

//Call setup function
imgSetup();

let movingImg = function (direction) {
    currentImage += direction;

    if (currentImage < 0)
        currentImage = images.length - 1;

    if (currentImage >= images.length)
        currentImage = 0;

    for (let i = 0; i < images.length; i++) {
        let distance = i - currentImage;
        images[i].style.left = distance * 100 + "%"
    }
}

imageButtonLeft.addEventListener("click", () => {
    movingImg(-1)
})
imageButtonRight.addEventListener("click", () => {
    movingImg(1)
})