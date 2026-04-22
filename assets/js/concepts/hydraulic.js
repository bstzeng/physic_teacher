window.PhysicsSite.initConceptPage();

const depthRange = document.querySelector("#hydraulicDepthRange");
const shapeSelect = document.querySelector("#hydraulicShapeSelect");
const depthValue = document.querySelector("#hydraulicDepthValue");
const pressureText = document.querySelector("#hydraulicPressureText");
const levelText = document.querySelector("#hydraulicLevelText");
const tipText = document.querySelector("#hydraulicTip");
const leftWater = document.querySelector("#hydraulicLeftWater");
const rightWater = document.querySelector("#hydraulicRightWater");
const leftTube = document.querySelector("#hydraulicLeft");
const rightTube = document.querySelector("#hydraulicRight");
const gaugeFill = document.querySelector("#hydraulicGaugeFill");

function render() {
  const depth = Number(depthRange.value);
  const shape = shapeSelect.value;
  const waterHeight = 40 + depth * 18;

  depthValue.textContent = String(depth);
  leftWater.style.height = `${waterHeight}px`;
  rightWater.style.height = `${waterHeight}px`;
  gaugeFill.style.height = `${depth * 9}%`;

  leftTube.style.width = shape === "left-wide" ? "140px" : shape === "right-wide" ? "90px" : "110px";
  rightTube.style.width = shape === "right-wide" ? "140px" : shape === "left-wide" ? "90px" : "110px";

  if (depth >= 8) {
    pressureText.textContent = "很大";
    tipText.textContent = "水很深時，底部壓力會變得更明顯。";
  } else if (depth >= 4) {
    pressureText.textContent = "中等";
    tipText.textContent = "你可以再把水加深，看看壓力條會不會繼續上升。";
  } else {
    pressureText.textContent = "較小";
    tipText.textContent = "水比較淺時，底部壓力也比較小。";
  }

  if (shape === "same") {
    levelText.textContent = "兩邊水面接近";
  } else {
    levelText.textContent = "寬窄不同，但水面仍趨於相近";
  }
}

[depthRange, shapeSelect].forEach((input) => input.addEventListener("input", render));

render();
