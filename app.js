const tab = document.querySelector('.tab');
const closeBtn = document.querySelector('.closeBtn');
const overlay = document.querySelector('.overlay');
const mode = document.querySelector('.mode');
menuBtn.addEventListener('click', ()=>{
    //tab.className = "show-tab";
    tab.classList.add("show-tab");
    overlay.classList.add("show-overlay");
});
closeBtn.addEventListener('click', ()=>{
    tab.classList.remove("show-tab");
    overlay.classList.remove("show-overlay");
});