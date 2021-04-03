//Roundaround
const img_container = document.getElementsByClassName("slide_container")
let flow = 0;

//buttons
const img_but_left = document.getElementById("arrow_left")
const img_but_right = document.getElementById("arrow_right")

//slide Width
let slideWidth = img_container[0].clientWidth

//Setup images
let imgSetup = function () {
    for (let i = 0; i < img_container.length; i++) {
        img_container[i].style.left = i * 100 + "%"
    }
}

//Call setup function
imgSetup()

//move by one
let moveOne = function () {
    for (let i = 0; i < img_container.length; i++) {
        let percValue = parseInt(img_container[i].style.left)
        img_container[i].style.left = (percValue - 1 * 100) + "%"
    }
    flow = 0
}

let movingImg = function (index) {
    if (flow + index + 1 > img_container.length - 1) {

        //move one more
        moveOne()

        //img move to start
        setTimeout(() => {
            for (let i = 0; i < img_container.length; i++) {
                img_container[i].classList.remove("transitioned")
            }
            for (let i = 0; i < img_container.length; i++) {
                img_container[i].style.left = i * 100 + "%"
            }
        }, 1000)
        for (let i = 0; i < img_container.length; i++) {
            img_container[i].classList.add("transitioned")
        }
    }
    else if (flow + index >= 0 && flow + index <= img_container.length - 1) {
        for (let i = 0; i < img_container.length; i++) {
            let percValue = parseInt(img_container[i].style.left)
            img_container[i].style.left = (percValue - index * 100) + "%"
        }
        flow += index
        console.log(flow)
    }
    else {
        flow = img_container.length - 1
        for (let j = 0; j < img_container.length - 1; j++) {
            for (let i = 0; i < img_container.length; i++) {
                let percValue = parseInt(img_container[i].style.left)
                img_container[i].style.left = (percValue - 1 * 100) + "%"
            }
        }
    }

}

img_but_left.addEventListener("click", () => {
    movingImg(-1)
})
img_but_right.addEventListener("click", () => {
    movingImg(1)
})


