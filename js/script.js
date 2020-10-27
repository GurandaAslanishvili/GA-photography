const hamburger = document.querySelector(".hamburger");
const menuBox = document.querySelector(".menu-box");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active");
    menuBox.classList.toggle("show");
    menuBox.classList.toggle("active");
});
