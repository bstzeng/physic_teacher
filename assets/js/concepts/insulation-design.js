window.PhysicsSite.initConceptPage();

const wrapButtons = [...document.querySelectorAll("[data-wrap]")];
const thicknessRange = document.querySelector("#insulationThicknessRange");
const thicknessValue = document.querySelector("#insulationThicknessValue");
const timeRange = document.querySelector("#insulationTimeRange");
const timeValue = document.querySelector("#insulationTimeValue");
const tempText = document.querySelector("#insulationTempText");
const resultText = document.querySelector("#insulationResultText");
const tipText = document.querySelector("#insulationTip");
const wrap = document.querySelector("#insulationCupWrap");
const thermoFill = document.querySelector("#insulationThermoFill");

const wrapMap = {
  foam: { keep: 1, color: "linear-gradient(180deg, #fde68a, #f59e0b)", label: "保溫最好" },
  fabric: { keep: 0.78, color: "linear-gradient(180deg, #fbcfe8, #ec4899)", label: "保溫中等" },
  foil: { keep: 0.68, color: "linear-gradient(180deg, #e5e7eb, #94a3b8)", label: "反射輻射熱不錯" },
};

const state = {
  wrap: "foam",
};

function updateScene() {
  const layers = Number(thicknessRange.value);
  const minutes = Number(timeRange.value);
  const keepFactor = wrapMap[state.wrap].keep;
  const remaining = Math.max(28, 88 - minutes * (2.4 - keepFactor * 0.9) - (5 - layers) * 2.2);

  thicknessValue.textContent = `${layers}`;
  timeValue.textContent = `${minutes}`;
  tempText.textContent = `${remaining.toFixed(0)}°C`;
  resultText.textContent = remaining >= 68 ? "表現很好" : remaining >= 56 ? "表現不錯" : "熱掉得比較快";
  tipText.textContent = `${wrapMap[state.wrap].label}，厚度增加也會幫上忙。`;
  wrap.style.background = wrapMap[state.wrap].color;
  wrap.style.width = `${112 + layers * 10}px`;
  wrap.style.height = `${170 + layers * 8}px`;
  thermoFill.style.height = `${remaining}%`;
}

wrapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.wrap = button.dataset.wrap;
    wrapButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateScene();
  });
});

thicknessRange.addEventListener("input", updateScene);
timeRange.addEventListener("input", updateScene);

updateScene();
