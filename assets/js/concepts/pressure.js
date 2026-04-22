window.PhysicsSite.initConceptPage();

const forceRange = document.querySelector("#pressureForceRange");
const areaRange = document.querySelector("#pressureAreaRange");
const forceValue = document.querySelector("#pressureForceValue");
const areaValue = document.querySelector("#pressureAreaValue");
const pressureValueText = document.querySelector("#pressureValueText");
const pressureLevelText = document.querySelector("#pressureLevelText");
const pressureTip = document.querySelector("#pressureTip");
const pressureBlock = document.querySelector("#pressureBlock");
const pressureFootprint = document.querySelector("#pressureFootprint");
const pressureFill = document.querySelector("#pressureFill");

function render() {
  const force = Number(forceRange.value);
  const area = Number(areaRange.value);
  const pressure = force / area;
  const width = 44 + area * 10;
  const blockWidth = 74 + area * 7;
  const sink = Math.min(84, pressure * 22);

  forceValue.textContent = String(force);
  areaValue.textContent = String(area);
  pressureValueText.textContent = pressure.toFixed(2);
  pressureBlock.style.width = `${blockWidth}px`;
  pressureBlock.style.transform = `translate(-50%, ${sink}px)`;
  pressureFootprint.style.width = `${width}px`;
  pressureFill.style.height = `${Math.min(100, pressure * 28)}%`;

  if (pressure > 2.8) {
    pressureLevelText.textContent = "很大";
    pressureTip.textContent = "現在壓力很大，因為力大而且面積不大。";
  } else if (pressure > 1.3) {
    pressureLevelText.textContent = "中等";
    pressureTip.textContent = "如果再把面積縮小一點，壓力會更明顯。";
  } else {
    pressureLevelText.textContent = "較小";
    pressureTip.textContent = "面積夠大時，同樣的力會被分散開。";
  }
}

[forceRange, areaRange].forEach((input) => input.addEventListener("input", render));

render();
