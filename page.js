const eventHead = document.querySelector("#headerId");
const eventButton = document.querySelector("#buttonId");
const eventPage = document.querySelector("html");

const rgbValues = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

eventButton.addEventListener("click", () => {
  const valuesColor = rgbValues();
  eventHead.innerText = valuesColor;
  eventPage.style.backgroundColor = valuesColor;
});
