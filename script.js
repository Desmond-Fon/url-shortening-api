const hamburger = document.getElementById("hamburg");
const menu = document.getElementById("menu");
const copy = document.querySelectorAll('.copy');
const shortUrl = document.querySelectorAll('.shortUrl');
const linkInput = document.getElementById('linkInput');
const btn = document.getElementById('btn');
const outputUrl = document.getElementById('output-Url');
const inputField = document.getElementsByTagName('input');
const copyBtn = document.getElementById('copy-button');



copy.forEach(copies => {
  copies.addEventListener('click', () => {
    console.log('clicked');
  copies.textContent = "Copied!";
  copies.setAttribute('style', 'background-color: hsl(257, 27%, 26%);');
  
  for (var i = 0; i < shortUrl.length; i++) {
    console.log('shortUrl: ', shortUrl[i].textContent);
  }
  });
});


function handleClick() {
  console.log('clicked');
  copy.textContent = "Copied!";
  copy.setAttribute('style', 'background-color: hsl(257, 27%, 26%);');
  
  for (var i = 0; i < shortUrl.length; i++) {
    console.log('shortUrl: ', shortUrl[i].textContent);
  }
  // copiedItems();

}


btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(inputField[0].value)
  fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`)
  .then(res => {
    // console.log(res);
    return res.json()})
   .then(data => {
    // console.log(data.result.short_link)
    let reply = JSON.stringify(data.result.short_link)
    console.log(reply);
    const userReply = document.getElementById('user-reply');
    let output = ` <div class="flex flex-col justify-center items-center pb-12">
    <div class="bg-white w-4/5 h-40 rounded-lg flex flex-col justify-evenly overflow-hidden text-ellipsis lg:flex-row lg:items-center lg:justify-between lg:h-20">
      <p class="text-left px-5 text-ellipsis overflow-hidden ">${linkInput.value}</p>
      <hr class="text-gray-500 lg:hidden">
     <div class="lg:flex lg:items-center">
      <p class="text-cyan text-left px-5 shortUrl" id="output-Url">${reply}</p>
      <div class="px-5">
        <button  class="h-11 rounded-md w-full bg-cyan mt-2 font-bold text-white lg:w-40 lg:mt-0 copy" id="copy">Copy</button>
     </div>
      </div>
    </div>
  </div>`;
  userReply.innerHTML += output;
  console.log(userReply);
  handleClick();
})
   
  //  inputField[0].value = '';
});

  //  copyBtn.addEventListener('click', () => {
  //   console.log('clickedd');
  //  })


// function generateUrl () {
//   console.log(linkInput.value)

//   // fetch(`https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`)
// }



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



const copiedItems = () => {

    // let answer = navigator.clipboard.writeText(shortUrl.textContent).then(function() {
    //   console.log('Async: Copying to clipboard was successful!');
    //   console.log(shortUrl.textContent); 
    // }, function(err) {
    //   console.error('Async: Could not copy text: ', err);

    // });
    console.log(shortUrl);
    
    console.log(shortUrl.textContent);
    
  }
  
