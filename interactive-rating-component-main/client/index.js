let second = document.querySelector(".second")
let submitBtn = document.querySelector(".submit-btn")
let first = document.querySelector(".first") 
let rating = document.querySelector(".out-of")
let number = document.querySelectorAll(".number")


second.style.display = "none";


submitBtn.addEventListener("click", function() {
    first.style.display = "none"
    second.style.display = "block"
     
})

number.forEach(function(chosen){
    chosen.addEventListener("click", function() {
    number.forEach(function(clicked) {
        if (chosen !== clicked) {
        clicked.classList.remove("active")
        }
    })
    chosen.classList.add("active")

    rating.innerHTML = chosen.textContent
})

})