window.PhysicsSite.initConceptPage();

const sunRange = document.querySelector("#radiationSunRange");
const sunValue = document.querySelector("#radiationSunValue");
const tempText = document.querySelector("#radiationTempText");
const absorbText = document.querySelector("#radiationAbsorbText");
const tipText = document.querySelector("#radiationTip");
const surfaceButtons = [...document.querySelectorAll("[data-surface]")];
const plate = document.querySelector("#radiationPlate");
const fill = document.querySelector("#radiationFill");
const sun = document.querySelector("#radiationSun");
const resetButton = document.querySelector("#radiationReset");

const surfaceMap = {
  dark: { factor: 1, color: "linear-gradient(180deg, #3d405b, #1f2232)", label: "吸熱明顯" },
  light: { factor: 0.72, color: "linear-gradient(180deg, #f1f5f9, #cbd5e1)", label: "吸熱較慢" },
  silver: { factor: 0.56, color: "linear-gradient(180deg, #e2e8f0, #94a3b8)", label: "反射較多" },
};

const state = {
  surface: "dark",
};

function updateScene() {
  const sunLevel = Number(sunRange.value);
  const factor = surfaceMap[state.surface].factor;
  const temperature = 22 + sunLevel * 0.35 * factor;

  sunValue.textContent = `${sunLevel}`;
  tempText.textContent = `${temperature.toFixed(0)}°C`;
  absorbText.textContent = surfaceMap[state.surface].label;
  tipText.textContent = state.surface === "dark" ? "深色常比較會吸熱。" : "亮色表面常比較會反射部分熱。";
  plate.style.background = surfaceMap[state.surface].color;
  fill.style.height = `${Math.min(100, temperature)}%`;
  sun.style.transform = `scale(${0.8 + sunLevel / 200})`;
  sun.style.opacity = `${0.45 + sunLevel / 160}`;
}

surfaceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.surface = button.dataset.surface;
    surfaceButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateScene();
  });
});

sunRange.addEventListener("input", updateScene);
resetButton.addEventListener("click", () => {
  sunRange.value = 70;
  state.surface = "dark";
  surfaceButtons.forEach((button) => button.classList.toggle("active", button.dataset.surface === "dark"));
  updateScene();
});

updateScene();
