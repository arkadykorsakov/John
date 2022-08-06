"use strict";
// фоновое изображение start
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// фоновое изображение end

// адаптивное меню start
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const body = document.body;

iconMenu.addEventListener("click", function () {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
});

// адаптивное меню end
