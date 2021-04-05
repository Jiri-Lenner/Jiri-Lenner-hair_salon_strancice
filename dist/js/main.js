//Roundaround
const images = document.getElementsByClassName("slide_container");
let currentImage = 0;

//navbar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    //navbar.classList.toggle("sticky", window.crollY > 0);
    if (window.scrollY > 0) {
        navbar.classList.add("sticky")
        //console.log(window.scrollY)
        //=> jak daleko je od vršku
    }
    else {
        navbar.classList.remove("sticky")
    }
})

//buttons
const imageButtonLeft = document.getElementById("arrow_left");
const imageButtonRight = document.getElementById("arrow_right");

//slide Elements
let slideContainer = document.getElementsByClassName("slide_text")

//Setup images
let imgSetup = function () {

    for (let i = 0; i < images.length; i++) {
        images[i].style.left = i * 100 + "%";
    }
    textAnimate()
}

//text Animation reset
let textAnimateReset = function () {
    for (item of slideContainer) {
        for (let element of item.getElementsByClassName("frontInnerElement")) {
            setTimeout(() => {
                element.classList.remove("leftAppear")
            }, 240)
        }
    }
}

//Text Animation
let animation = function (object) {
    object.classList.add("leftAppear")
}

let textAnimate = function () {
    let counter = 0
    for (item of slideContainer) {
        if (counter == currentImage) {
            let timer = 250
            for (let element of item.getElementsByClassName("frontInnerElement")) {
                setTimeout(function () {
                    animation(element);
                    console.log(element);
                }, timer)
                timer += 100
            }
        }
        counter++
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
        images[i].style.left = distance * 100 + "%";
    }
    //remove previous animation
    textAnimate()
    textAnimateReset()
}

imageButtonLeft.addEventListener("click", () => {
    movingImg(-1);
})
imageButtonRight.addEventListener("click", () => {
    movingImg(1);
})
