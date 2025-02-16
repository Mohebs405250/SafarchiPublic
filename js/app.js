// let mHeaderLanguageSubMenuToggle = document.getElementById("HeaderLanguageSubMenuToggle");
// mHeaderLanguageSubMenuToggle.addEventListener("click" , function f1(){
//     let mHeaderLanguageSubMenu = document.getElementById("mHeaderLanguageSubMenu");
//     mHeaderLanguageSubMenu.classList.toggle("displayBlock");
// })

let mHeaderToggle3 = document.getElementById("mHeaderToggle3");
let mHeadersub3 = document.getElementById("mHeaderSub3")
mHeaderToggle3.addEventListener("click",function f3() {
    mHeadersub3.classList.toggle("displayBlock")
})

let mQuestionsToggle = document.querySelectorAll("#mQuestionsToggle");
let mQuestionsContent = document.querySelectorAll("#mQuestionsContent");
let mQuestionsImg = document.querySelectorAll("#mQuestionsImg");
let mQuestionsClose = document.querySelectorAll("#mQuestionsClose");
mQuestionsToggle.addEventListener("click",()=>{
    mQuestionsContent.classList.toggle("df");
    mQuestionsImg.classList.toggle("rotate");   
})

/////////////////////////////////////////////////////////////////////////////////
let star5= document.getElementById("star5")
let star4= document.getElementById("star4")
let star3= document.getElementById("star3")
let star2= document.getElementById("star2")
let star1= document.getElementById("star1")

star5.addEventListener("click",()=>{
    star1.classList.toggle("mStar")
    star2.classList.toggle("mStar")
    star3.classList.toggle("mStar")
    star4.classList.toggle("mStar")
    star5.classList.toggle("mStar")
})

star4.addEventListener("click",()=>{
    star1.classList.toggle("mStar")
    star2.classList.toggle("mStar")
    star3.classList.toggle("mStar")
    star4.classList.toggle("mStar")
})

star3.addEventListener("click",()=>{
    star1.classList.toggle("mStar")
    star2.classList.toggle("mStar")
    star3.classList.toggle("mStar")
})

star2.addEventListener("click",()=>{
    star1.classList.toggle("mStar")
    star2.classList.toggle("mStar")
})

star1.addEventListener("click",()=>{
    star1.classList.toggle("mStar")
})

let star10= document.getElementById("star10")
let star9= document.getElementById("star9")
let star8= document.getElementById("star8")
let star7= document.getElementById("star7")
let star6= document.getElementById("star6")

star10.addEventListener("click",()=>{
    star6.classList.toggle("mStar")
    star7.classList.toggle("mStar")
    star8.classList.toggle("mStar")
    star9.classList.toggle("mStar")
    star10.classList.toggle("mStar")
})

star9.addEventListener("click",()=>{
    star6.classList.toggle("mStar")
    star7.classList.toggle("mStar")
    star8.classList.toggle("mStar")
    star9.classList.toggle("mStar")
})

star8.addEventListener("click",()=>{
    star6.classList.toggle("mStar")
    star7.classList.toggle("mStar")
    star8.classList.toggle("mStar")
})

star7.addEventListener("click",()=>{
    star6.classList.toggle("mStar")
    star7.classList.toggle("mStar")
})

star6.addEventListener("click",()=>{
    star6.classList.toggle("mStar")
})

let star15= document.getElementById("star15")
let star14= document.getElementById("star14")
let star13= document.getElementById("star13")
let star12= document.getElementById("star12")
let star11= document.getElementById("star11")

star15.addEventListener("click",()=>{
    star11.classList.toggle("mStar")
    star12.classList.toggle("mStar")
    star13.classList.toggle("mStar")
    star14.classList.toggle("mStar")
    star15.classList.toggle("mStar")
})

star14.addEventListener("click",()=>{
    star11.classList.toggle("mStar")
    star12.classList.toggle("mStar")
    star13.classList.toggle("mStar")
    star14.classList.toggle("mStar")
})

star13.addEventListener("click",()=>{
    star11.classList.toggle("mStar")
    star12.classList.toggle("mStar")
    star13.classList.toggle("mStar")
})

star12.addEventListener("click",()=>{
    star11.classList.toggle("mStar")
    star12.classList.toggle("mStar")
})

star11.addEventListener("click",()=>{
    star11.classList.toggle("mStar")
})

let star20= document.getElementById("star20")
let star19= document.getElementById("star19")
let star18= document.getElementById("star18")
let star17= document.getElementById("star17")
let star16= document.getElementById("star16")

star20.addEventListener("click",()=>{
    star16.classList.toggle("mStar")
    star17.classList.toggle("mStar")
    star18.classList.toggle("mStar")
    star19.classList.toggle("mStar")
    star20.classList.toggle("mStar")
})

star19.addEventListener("click",()=>{
    star16.classList.toggle("mStar")
    star17.classList.toggle("mStar")
    star18.classList.toggle("mStar")
    star19.classList.toggle("mStar")
})

star18.addEventListener("click",()=>{
    star16.classList.toggle("mStar")
    star17.classList.toggle("mStar")
    star18.classList.toggle("mStar")
})

star17.addEventListener("click",()=>{
    star16.classList.toggle("mStar")
    star17.classList.toggle("mStar")
})

star16.addEventListener("click",()=>{
    star16.classList.toggle("mStar")
})

