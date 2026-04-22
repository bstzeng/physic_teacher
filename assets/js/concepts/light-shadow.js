window.PhysicsSite.initConceptPage();

const lightPoint = document.querySelector("#lightPoint");
const lightRay = document.querySelector("#lightRay");
const shadowShape = document.querySelector("#shadowShape");
const lightXRange = document.querySelector("#lightXRange");
const lightYRange = document.querySelector("#lightYRange");
const lightXValue = document.querySelector("#lightXValue");
const lightYValue = document.querySelector("#lightYValue");
const directionText = document.querySelector("#shadowDirection");
const lengthText = document.querySelector("#shadowLength");
const tipText = document.querySelector("#shadowTip");

const object = {
  x: 420,
  y: 155,
  width: 60,
  height: 115,
};

const groundY = 270;
const sceneWidth = 900;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateShadow() {
  const lightX = Number(lightXRange.value);
  const lightY = Number(lightYRange.value);
  const objectCenter = object.x + object.width / 2;

  const shadowGoesRight = lightX < objectCenter;
  const edgeX = shadowGoesRight ? object.x + object.width : object.x;
  const topX = edgeX;
  const topY = object.y;

  const t = (groundY - lightY) / (topY - lightY);
  const rawShadowEndX = lightX + (topX - lightX) * t;
  const shadowEndX = clamp(rawShadowEndX, 0, sceneWidth);

  lightPoint.setAttribute("cx", lightX);
  lightPoint.setAttribute("cy", lightY);
  lightRay.setAttribute("x1", lightX);
  lightRay.setAttribute("y1", lightY);
  lightRay.setAttribute("x2", topX);
  lightRay.setAttribute("y2", topY);
  shadowShape.setAttribute(
    "points",
    `${edgeX},${groundY} ${topX},${topY} ${shadowEndX},${groundY}`
  );

  const shadowLength = Math.round(Math.abs(shadowEndX - edgeX));

  lightXValue.textContent = String(lightX);
  lightYValue.textContent = String(lightY);
  directionText.textContent = shadowGoesRight ? "往右邊" : "往左邊";
  lengthText.textContent = `${shadowLength} 公分`;

  if (lightY > 118) {
    tipText.textContent = "光源比較低，所以影子被拉得比較長。";
  } else if (shadowLength < 90) {
    tipText.textContent = "光源比較高，影子看起來比較短。";
  } else {
    tipText.textContent = "光的位置改變時，影子的方向也會改變。";
  }
}

lightXRange.addEventListener("input", updateShadow);
lightYRange.addEventListener("input", updateShadow);

updateShadow();
