const hamburger = document.getElementById("hamburg");
const menu = document.getElementById("menu");
const copy = document.getElementById('copy');

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }

  if (hamburger.getAttribute("src") == "images/icon-hamburger.svg") {
    hamburger.src = "images/icon-close.svg";
  } else {
    hamburger.src = "images/icon-hamburger.svg"
  }
});

copy.addEventListener("click", () => {
    console.log('click');
    // copy.classList.remove('bg-cyan');
    // copy.classList.add('bg-grayy')
})
