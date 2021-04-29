//Roundaround
const images = document.getElementsByClassName("slide_container");
let currentImage = 0;

//navbar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    let openHour = document.getElementById("openContainer");

    //navbar.classList.toggle("sticky", window.crollY > 0);
    if (window.scrollY > 0) {
        navbar.classList.add("sticky")
        //console.log(window.scrollY)
        //=> jak daleko je od vršku
    }
    else {
        navbar.classList.remove("sticky")
    }

    if (window.scrollY > window.innerHeight + 400) {
        openHour.classList.remove("movedContainer")
        openHour.classList.add("movigLines")
    }
})

//nav Slide in
let hiddenNav = document.getElementById("hiddenNav");

let animateHidden = function(){
    let animated = hiddenNav.animate([
        {
            left: "0%"
        }, 
        {
            
            left: "100%"
        }
    ],{
        duration: 500,
        easing: "ease-in",
    });
    hiddenNav.style.left = "100%";
} 

hiddenNav.querySelector("#navCross").addEventListener("click", ()=>{
    animateHidden();
})

document.getElementById("showNav").addEventListener("click", ()=>{
    let animated = hiddenNav.animate([
        {
            left: "100%"
        }, 
        {
            
            left: "0%"
        }
    ],{
        duration: 500,
        easing: "ease-in",
        
    });
    hiddenNav.style.left = "0%";
})

for (element of document.getElementsByClassName("hiddenButtons"))
{
    element.addEventListener("click", ()=>{
        animateHidden();
    })
}

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

//Services Buttons on lunch
if(window.innerWidth <= 800){
    for (let element of document.getElementsByClassName("expandable")) {
        element.style.height = "560px";
        element.querySelector(".expTop").classList.add("expTopLight");
        element.querySelector(".expBot").classList.add("expBotLight");
    }
}
else{
    for (let element of document.getElementsByClassName("expandable")) {
        element.addEventListener("mouseenter", e => {
            if(window.innerWidth > 800){
                e.target.style.height = "560px";
                e.target.querySelector(".expTop").classList.add("expTopLight");
                e.target.querySelector(".expBot").classList.add("expBotLight");
            }
        })
        element.addEventListener("mouseleave", e => {
            if(window.innerWidth > 800){
                e.target.style.height = "280px";
                e.target.querySelector(".expTop").classList.remove("expTopLight");
                e.target.querySelector(".expBot").classList.remove("expBotLight");
            }
        })
    }
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 800){
        //get it back to original shape
        for (let element of document.getElementsByClassName("expandable")) {
            
            element.style.height = "280px";
            element.querySelector(".expTop").classList.remove("expTopLight");
            element.querySelector(".expBot").classList.remove("expBotLight");

            //add event listener
            element.addEventListener("mouseenter", e => {
                if(window.innerWidth > 800){
                    e.target.style.height = "560px";
                    e.target.querySelector(".expTop").classList.add("expTopLight");
                    e.target.querySelector(".expBot").classList.add("expBotLight");
                }
            })
            element.addEventListener("mouseleave", e => { 
                if(window.innerWidth > 800){
                    e.target.style.height = "280px";
                    e.target.querySelector(".expTop").classList.remove("expTopLight");
                    e.target.querySelector(".expBot").classList.remove("expBotLight");
                }
            })
        }
    }else if(window.innerWidth <= 800){
        for (let element of document.getElementsByClassName("expandable")) {
            element.style.height = "560px";
            element.querySelector(".expTop").classList.add("expTopLight");
            element.querySelector(".expBot").classList.add("expBotLight");
        }
    }
})




