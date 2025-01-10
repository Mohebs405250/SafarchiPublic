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

let mQuestionsToggle1 = document.getElementById("mQuestionsToggle1");
let mQuestionsContent1 = document.getElementById("mQuestionsContent1");
let mQuestionsImg1 = document.getElementById("mQuestionsImg1");
mQuestionsToggle1.addEventListener("click",()=>{
    mQuestionsContent1.classList.toggle("df");
    mQuestionsImg1.classList.toggle("rotate");   
})


let mQuestionsToggle2 = document.getElementById("mQuestionsToggle2");
let mQuestionsContent2 = document.getElementById("mQuestionsContent2")
let mQuestionsImg2 = document.getElementById("mQuestionsImg2");
    mQuestionsToggle2.addEventListener("click",()=>{
    mQuestionsContent2.classList.toggle("df");
    mQuestionsImg2.classList.toggle("rotate");
})

let mQuestionsToggle3 = document.getElementById("mQuestionsToggle3");
let mQuestionsContent3 = document.getElementById("mQuestionsContent3")
let mQuestionsImg3 = document.getElementById("mQuestionsImg3");
    mQuestionsToggle3.addEventListener("click",()=>{
    mQuestionsContent3.classList.toggle("df");
    mQuestionsImg3.classList.toggle("rotate");
})

let mQuestionsToggle4 = document.getElementById("mQuestionsToggle4");
let mQuestionsContent4 = document.getElementById("mQuestionsContent4")
let mQuestionsImg4 = document.getElementById("mQuestionsImg4");
    mQuestionsToggle4.addEventListener("click",()=>{
    mQuestionsContent4.classList.toggle("df");
    mQuestionsImg4.classList.toggle("rotate");
})

let mQuestionsToggle5 = document.getElementById("mQuestionsToggle5");
let mQuestionsContent5 = document.getElementById("mQuestionsContent5")
let mQuestionsImg5 = document.getElementById("mQuestionsImg5");
    mQuestionsToggle5.addEventListener("click",()=>{
    mQuestionsContent5.classList.toggle("df");
    mQuestionsImg5.classList.toggle("rotate");
})

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

