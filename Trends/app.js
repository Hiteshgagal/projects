
let card = document.querySelector(".trend")
let card2 = document.getElementById("trendSec")
let blog = document.querySelector(".trends")
let mainPage = document.querySelector(".main")
let about =  document.querySelector(".about")
let contact =  document.querySelector(".contact")


function homes() {
    mainPage.style.display = "flex"
    blog.style.display = "block"
    card.style.display = "block"
    about.style.display = "none";    
    card2.style.display = "block"
    document.getElementById("blog").style.color = "black"
    document.getElementById("home").style.color = "rgb(2, 173, 173)"
    document.getElementById("shop").style.color = "black"
    document.getElementById("contact").style.color = "black"
    document.getElementById("about").style.color = "black"
}
function shops() {
    about.style.display = "none";
    mainPage.style.display = "none"
    blog.style.display = "none"
    card.style.display = "block"
    card2.style.display = "block"
    document.getElementById("blog").style.color = "black"
    document.getElementById("home").style.color = "black"
    document.getElementById("shop").style.color = "rgb(2, 173, 173)"
    document.getElementById("contact").style.color = "black"
    document.getElementById("about").style.color = "black"
}

function blogs() {
    card.style.display = "none"
    mainPage.style.display = "none"
    card2.style.display = "none"
    blog.style.display = "block";
    about.style.display = "none";
    document.getElementById("blog").style.color = "rgb(2, 173, 173)"
    document.getElementById("home").style.color = "black"
    document.getElementById("shop").style.color = "black"
    document.getElementById("contact").style.color = "black"
    document.getElementById("about").style.color = "black"
}
function abouts(){
    about.style.display = "block";
     blog.style.display = "none";
     card.style.display = "none"
     mainPage.style.display = "none"
     card2.style.display = "none"
     document.getElementById("blog").style.color = "black"
     document.getElementById("home").style.color = "black"
     document.getElementById("shop").style.color = "black"
     document.getElementById("contact").style.color = "black"
     document.getElementById("about").style.color = "rgb(2, 173, 173)"
}

function contacts(){
    about.style.display = "none";
    blog.style.display = "none";
    card.style.display = "none"
    mainPage.style.display = "none"
    card2.style.display = "none"
    contact.style.display = "block"

    document.getElementById("blog").style.color = "black"
    document.getElementById("home").style.color = "black"
    document.getElementById("shop").style.color = "black"
    document.getElementById("about").style.color = "black"
    document.getElementById("contact").style.color = "rgb(2, 173, 173)"
}

function show(img){
    let newImg = document.getElementById("newImg")
    newImg.src=img.src;
    about.style.display = "none";
    blog.style.display = "none";
    card.style.display = "none"
    mainPage.style.display = "none"
    card2.style.display = "none"
    contact.style.display = "none"
    document.querySelector(".cart").style.display="flex"
}
 function addCart(){
    alert("Added Now")
    location.reload()
 }