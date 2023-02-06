const hamburger = document.getElementById("hamburg");
const menu = document.getElementById("menu");
const copy = document.querySelectorAll(".copy");
const shortUrl = document.querySelectorAll(".shortUrl");
const linkInput = document.getElementById("linkInput");
const btn = document.getElementById("btn");
const outputUrl = document.getElementById("output-Url");
const inputField = document.getElementsByTagName("input");
const copyBtn = document.getElementById("copy-button");
const userReply = document.getElementById("user-reply");

function print() {
  Array.from(document.getElementsByClassName("copy")).forEach(copyy => {
    copyy.addEventListener('click', (e) => {
      const targetElement = e.target;
      if (targetElement.matches(".copy")){
    copyy.setAttribute("style", "background-color: hsl(257, 27%, 26%);");
    copyy.textContent = "Copied!";

    document.querySelectorAll(".shortUrl").forEach((short) => {
      navigator.clipboard.writeText(short.textContent);
    });

    localStorage.setItem("key", JSON.stringify(`${userReply.innerHTML}`));

    console.log(localStorage.getItem("key"));

  }})
})
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if(linkInput.value) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`)
    .then((res) => {
      if (!res.ok) throw new Error("invalid url");

      return res.json();
    })
    .then((data) => {
      let reply = JSON.stringify(data.result.short_link);

      let output = ` <div class="flex flex-col justify-center items-center pb-12">
    <div class="bg-white w-4/5 h-40 rounded-lg flex flex-col justify-evenly overflow-hidden text-ellipsis lg:flex-row lg:items-center lg:justify-between lg:h-20">
    <p class="text-left px-5 text-ellipsis overflow-hidden ">${
      linkInput.value
    }</p>
    <hr class="text-gray-500 lg:hidden">
    <div class="lg:flex lg:items-center">
    <p class="text-cyan text-left px-5 shortUrl" id="output-Url">${reply.slice(
      1,
      -1
    )}</p>
    <div class="px-5">
    <button class="h-11 rounded-md w-full bg-cyan mt-2 font-bold text-white lg:w-40 lg:mt-0 copy" onclick="print()">Copy</button>
    </div>
    </div>
    </div>
  </div>`;

      linkInput.value = "";
      userReply.insertAdjacentHTML('afterbegin', output)
    })
    .catch((err) => {
      userReply.innerHTML += ` <div class="flex flex-col justify-center items-center pb-12">
  <div class="bg-white w-4/5 h-40 rounded-lg flex flex-col justify-evenly overflow-hidden text-ellipsis lg:flex-row lg:items-center lg:justify-between lg:h-20">
  <p class="text-left px-5 text-ellipsis overflow-hidden ">${linkInput.value}</p>
  <hr class="text-gray-500 lg:hidden">
  <div class="lg:flex lg:items-center">
  <p class="text-cyan text-left px-5 shortUrl" id="output-Url">${err}</p>
    </div>
    </div>
    </div>`;
      linkInput.value = "";
    });

  }else null
    

 
});

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }

  if (hamburger.getAttribute("src") == "images/icon-hamburger.svg") {
    hamburger.src = "images/icon-close.svg";
  } else {
    hamburger.src = "images/icon-hamburger.svg";
  }
});


