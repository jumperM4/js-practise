const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

css.textContent =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

const button = document.createElement("button");
button.className = "color-generator";
button.textContent = "Click Me!";
body.append(button);

button.addEventListener("click", () => {
  let r1 = Math.round(Math.random() * 255.0);
  let g1 = Math.round(Math.random() * 255.0);
  let b1 = Math.round(Math.random() * 255.0);
  r1.toString(16);
  g1.toString(16);
  b1.toString(16);

  let r2 = Math.round(Math.random() * 255.0);
  let g2 = Math.round(Math.random() * 255.0);
  let b2 = Math.round(Math.random() * 255.0);
  r2.toString(16);
  g2.toString(16);
  b2.toString(16);

  let setColor1 = `#${r1.toString(16)}${g1.toString(16)}${b1.toString(16)}`;
  let setColor2 = `#${r2.toString(16)}${g2.toString(16)}${b2.toString(16)}`;

  color1.value = setColor1;
  color2.value = setColor2;

  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
});
