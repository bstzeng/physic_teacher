window.PhysicsSite.initConceptPage();

const seriesMode = document.querySelector("#seriesMode");
const parallelMode = document.querySelector("#parallelMode");
const batteryRange = document.querySelector("#seriesBatteryRange");
const batteryValue = document.querySelector("#seriesBatteryValue");
const bulbAText = document.querySelector("#bulbAText");
const bulbBText = document.querySelector("#bulbBText");
const seriesTip = document.querySelector("#seriesTip");
const bulbAGlow = document.querySelector("#bulbAGlow");
const bulbBGlow = document.querySelector("#bulbBGlow");
const bulbAGlass = document.querySelector("#bulbAGlass");
const bulbBGlass = document.querySelector("#bulbBGlass");
const parallelBranchLeft = document.querySelector("#parallelBranchLeft");
const parallelBranchRight = document.querySelector("#parallelBranchRight");
const parallelTopA = document.querySelector("#parallelTopA");
const parallelTopB = document.querySelector("#parallelTopB");

const state = {
  mode: "series",
};

function setButtonState() {
  seriesMode.classList.toggle("active", state.mode === "series");
  parallelMode.classList.toggle("active", state.mode === "parallel");
}

function setBulbBrightness(glowEl, glassEl, brightness) {
  const opacity = 0.08 + brightness / 100 * 0.45;
  glowEl.setAttribute("opacity", brightness > 0 ? opacity.toFixed(2) : "0.08");
  glassEl.setAttribute("fill", brightness > 0 ? "#ffe17a" : "#f8f3d8");
}

function render() {
  const batteryCount = Number(batteryRange.value);
  const seriesBrightness = Math.round(batteryCount * 22);
  const parallelBrightness = Math.round(batteryCount * 32);
  const brightness = state.mode === "series" ? seriesBrightness : parallelBrightness;
  const branchOpacity = state.mode === "parallel" ? "1" : "0";

  batteryValue.textContent = String(batteryCount);
  bulbAText.textContent = `${brightness}%`;
  bulbBText.textContent = `${brightness}%`;
  setButtonState();
  setBulbBrightness(bulbAGlow, bulbAGlass, brightness);
  setBulbBrightness(bulbBGlow, bulbBGlass, brightness);

  parallelBranchLeft.setAttribute("opacity", branchOpacity);
  parallelBranchRight.setAttribute("opacity", branchOpacity);
  parallelTopA.setAttribute("opacity", branchOpacity);
  parallelTopB.setAttribute("opacity", branchOpacity);

  if (state.mode === "parallel") {
    seriesTip.textContent = "並聯時，每顆燈泡都比較容易維持亮度。";
  } else {
    seriesTip.textContent = "串聯時，電流要依序通過兩顆燈泡，所以通常會比較暗。";
  }
}

seriesMode.addEventListener("click", () => {
  state.mode = "series";
  render();
});

parallelMode.addEventListener("click", () => {
  state.mode = "parallel";
  render();
});

batteryRange.addEventListener("input", render);

render();
