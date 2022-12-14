const values = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const body = document.querySelector("body");
const div = document.querySelector(".div");
const textValue = document.querySelector(".text-value");

//random Color

function getGradient() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    console.log(values[randomNumber]);

    color += values[randomNumber];
  }
  return color;
}
//Random  deg

function setGradient() {
     const color1 = getGradient();
     const color2 = getGradient();  
     const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
  console.log(bgColor);

  body.style.background = bgColor
  textValue.textContent = bgColor
}
// setGradient()
div.addEventListener("click", ()=>{
     
     setGradient()
})
