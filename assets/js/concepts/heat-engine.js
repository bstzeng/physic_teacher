window.PhysicsSite.initConceptPage();

const hotRange = document.querySelector("#engineHotRange");
const coldRange = document.querySelector("#engineColdRange");
const heatRange = document.querySelector("#engineHeatRange");
const hotValue = document.querySelector("#engineHotValue");
const coldValue = document.querySelector("#engineColdValue");
const heatValue = document.querySelector("#engineHeatValue");
const efficiencyText = document.querySelector("#engineEfficiencyText");
const workText = document.querySelector("#engineWorkText");
const wasteText = document.querySelector("#engineWasteText");
const workFill = document.querySelector("#engineWorkFill");
const wasteFill = document.querySelector("#engineWasteFill");
const resetEngine = document.querySelector("#engineReset");

function updateEngine() {
  const hot = Number(hotRange.value);
  const cold = Math.min(Number(coldRange.value), hot - 10);
  const heat = Number(heatRange.value);
  const efficiency = Math.max(0, 1 - cold / hot);
  const work = heat * efficiency;
  const waste = heat - work;

  if (Number(coldRange.value) !== cold) {
    coldRange.value = cold;
  }

  hotValue.textContent = String(hot);
  coldValue.textContent = String(cold);
  heatValue.textContent = String(heat);
  efficiencyText.textContent = `${(efficiency * 100).toFixed(1)}%`;
  workText.textContent = `${work.toFixed(1)} J`;
  wasteText.textContent = `${waste.toFixed(1)} J`;
  workFill.style.width = `${efficiency * 100}%`;
  wasteFill.style.width = `${(1 - efficiency) * 100}%`;
}

[hotRange, coldRange, heatRange].forEach((input) => {
  input.addEventListener("input", updateEngine);
});

resetEngine.addEventListener("click", () => {
  hotRange.value = 500;
  coldRange.value = 300;
  heatRange.value = 120;
  updateEngine();
});

updateEngine();
