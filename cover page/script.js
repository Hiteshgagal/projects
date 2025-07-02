var pre = document.getElementById("pre")
var next = document.getElementById("next")
var thumbnail = document.getElementsByClassName("thambnail")
var hero = document.getElementById("hero")

var backgroundimg = new Array(
    "assets/download (1).jpg",
    "assets/download (2).jpg",
    "assets/download (3).jpg",
    "assets/istockphoto-2154764422-612x612 - Copy.webp",
    "assets/jpg.webp",
);
let i = 0;
next.onclick = function () {
    if(i < 4){
        hero.style.backgroundImage = 'url("'+backgroundimg[i+1]+'")'
        thumbnail[i+1].classList.add("active")
        thumbnail[i].classList.remove("active")
        i++;
    }
}
pre.onclick = function () {
    if(i > 0){
        hero.style.backgroundImage = 'url("'+backgroundimg[i-1]+'")'
        thumbnail[i-1].classList.add("active")
        thumbnail[i].classList.remove("active")
        i--;
    }
}