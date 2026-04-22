window.PhysicsSite.initConceptPage();

const massRange = document.querySelector("#densityMassRange");
const volumeRange = document.querySelector("#densityVolumeRange");
const massValue = document.querySelector("#densityMassValue");
const volumeValue = document.querySelector("#densityVolumeValue");
const densityValueText = document.querySelector("#densityValueText");
const densityCompareText = document.querySelector("#densityCompareText");
const densityTip = document.querySelector("#densityTip");
const densityBlock = document.querySelector("#densityBlock");

function render() {
  const mass = Number(massRange.value);
  const volume = Number(volumeRange.value);
  const density = mass / volume;
  const size = 56 + volume * 7;
  const hue = Math.max(10, Math.min(210, 220 - density * 80));

  massValue.textContent = String(mass);
  volumeValue.textContent = String(volume);
  densityValueText.textContent = density.toFixed(2);
  densityBlock.style.width = `${size}px`;
  densityBlock.style.height = `${size}px`;
  densityBlock.style.background = `linear-gradient(160deg, hsl(${hue}, 75%, 68%), hsl(${hue}, 65%, 42%))`;
  densityBlock.style.transform = `translate(-50%, ${Math.max(30, 160 - density * 40)}px)`;

  if (density < 0.8) {
    densityCompareText.textContent = "比水小";
    densityTip.textContent = "密度比水小很多，通常比較容易浮起來。";
  } else if (density <= 1.2) {
    densityCompareText.textContent = "和水接近";
    densityTip.textContent = "密度接近水時，常常會浮沉之間很接近。";
  } else {
    densityCompareText.textContent = "比水大";
    densityTip.textContent = "密度比水大時，通常更容易下沉。";
  }
}

[massRange, volumeRange].forEach((input) => input.addEventListener("input", render));

render();
