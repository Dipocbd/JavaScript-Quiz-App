const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");

// If Start Quiz Button Clicked show info box 
start_btn.onClick = ()=>{
    info_box.classList.add("activeInfo");
}


// // If Quit Quiz Button Clicked remove info box
// exit_btn.onClick = ()=>{
//     info_box.classList.remove("activeInfo");
// } 


// // If Continue Button Clicked remove info box
// continue_btn.onClick = ()=>{
//     info_box.classList.remove("activeInfo");
//     quiz_box.classList.add("activeQuiz"); // show the quiz box
// } 