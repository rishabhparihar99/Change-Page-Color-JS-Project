const eventHead = document.querySelector("#headerId");
const eventButton = document.querySelector("#buttonId");
const eventPage = document.querySelector("html");

function changeFunc() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  eventHead.innerText = `rgb(${r},${g},${b})`;
  eventPage.style.backgroundColor = `rgb(${r},${g},${b})`;
}

eventButton.addEventListener("click", changeFunc);
