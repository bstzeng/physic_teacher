window.PhysicsSite.initConceptPage();

const magnitudeRange = document.querySelector("#vectorMagnitudeRange");
const angleRange = document.querySelector("#vectorAngleRange");
const magnitudeValue = document.querySelector("#vectorMagnitudeValue");
const angleValue = document.querySelector("#vectorAngleValue");
const xText = document.querySelector("#vectorXText");
const yText = document.querySelector("#vectorYText");
const tipText = document.querySelector("#vectorTip");
const mainLine = document.querySelector("#vectorMain");
const xLine = document.querySelector("#vectorX");
const yLine = document.querySelector("#vectorY");

function updateVector() {
  const magnitude = Number(magnitudeRange.value);
  const angle = Number(angleRange.value);
  const rad = (angle * Math.PI) / 180;
  const x = magnitude * Math.cos(rad);
  const y = magnitude * Math.sin(rad);
  const endX = 60 + x * 10;
  const endY = 260 - y * 10;

  magnitudeValue.textContent = magnitudeRange.value;
  angleValue.textContent = angleRange.value;
  xText.textContent = x.toFixed(1);
  yText.textContent = y.toFixed(1);
  tipText.textContent =
    angle > 60 ? "角度愈大，垂直分量會愈明顯。" : angle < 25 ? "角度愈小，水平分量會更接近原向量。" : "現在兩個分量都很清楚。";

  mainLine.setAttribute("x2", endX.toFixed(1));
  mainLine.setAttribute("y2", endY.toFixed(1));
  xLine.setAttribute("x2", endX.toFixed(1));
  yLine.setAttribute("x1", endX.toFixed(1));
  yLine.setAttribute("x2", endX.toFixed(1));
  yLine.setAttribute("y2", endY.toFixed(1));
}

magnitudeRange.addEventListener("input", updateVector);
angleRange.addEventListener("input", updateVector);

updateVector();
