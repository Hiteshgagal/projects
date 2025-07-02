const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const loginBtn = document.querySelector(".login button");
const signupBtn = document.querySelector(".signup button");
const backLayer = document.querySelector(".back-layer");

const btn = document.querySelector(".btn")
const btn1 = document.querySelector(".btn1")
const s = document.querySelector(".s")
const c = document.querySelector(".c")
const o = document.querySelector(".o")
btn.addEventListener("click", ()=>{
    s.classList.toggle("p")
    o.classList.toggle("s")
    c.classList.toggle("s")

})
btn1.addEventListener("click", ()=>{
    o.classList.toggle("q")
    c.classList.toggle("s")
 })


 signupBtn.addEventListener("click", () => {
   loginForm.classList.remove("active");
   signupForm.classList.add("active");
   backLayer.style.clipPath = "inset(0 0 0 50%)";
 });
 
 loginBtn.addEventListener("click", () => {
   signupForm.classList.remove("active");
   loginForm.classList.add("active");
   backLayer.style.clipPath = "";
 });