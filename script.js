const hamburger = document.getElementById("hamburg");
const menu = document.getElementById("menu");
const copy = document.getElementsByClassName('copy');
const shortUrl = document.getElementById('shortUrl')

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

const copied = () => {
    console.log('click');
    // if(copy.classList.contains('bg-cyan')){
      // copy.classList.remove('bg-cyan');
      // copy.classList.add('bg-veryDarkBlue');
      copy.textContent = "Copied";
      console.log(copy.classList);
      document.body.style.backgroundColor = 'veryDarkBlue';
    // } 
    // else{
      // copy.classList.add('bg-cyan');
      // copy.classList.remove('bg-veryDarkBlue');
      // }
      var text = shortUrl.textContent;
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
};

