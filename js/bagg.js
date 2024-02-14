const btn = document.getElementById("menu");
const addRadius = document.getElementById("round-onclick");
btn.addEventListener("click", function(){
    addRadius.classList.toggle("radius-50");
})
