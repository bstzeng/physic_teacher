window.PhysicsSite.initConceptPage();

const sourceButtons = [...document.querySelectorAll("[data-source]")];
const intensityRange = document.querySelector("#powerIntensityRange");
const intensityValue = document.querySelector("#powerIntensityValue");
const inputText = document.querySelector("#powerInputText");
const outputText = document.querySelector("#powerOutputText");
const tipText = document.querySelector("#powerTip");
const scene = document.querySelector("#powerScene");
const source = document.querySelector("#powerSource");
const rotor = document.querySelector("#powerRotor");
const bulb = document.querySelector("#powerBulb");

const sourceMap = {
  solar: { efficiency: 0.7, label: "太陽", tip: "太陽能需要穩定日照。", className: "solar" },
  wind: { efficiency: 0.64, label: "風", tip: "風越穩定，葉片越容易持續轉動。", className: "wind" },
  water: { efficiency: 0.78, label: "水", tip: "水力常能帶來穩定的轉動。", className: "water" },
  thermal: { efficiency: 0.6, label: "蒸汽", tip: "火力會先把熱能轉成蒸汽動力。", className: "thermal" },
};

const state = {
  source: "solar",
};

function updateScene() {
  const intensity = Number(intensityRange.value);
  const config = sourceMap[state.source];
  const output = intensity * config.efficiency;

  intensityValue.textContent = `${intensity}`;
  inputText.textContent = `${intensity} 單位`;
  outputText.textContent = `${output.toFixed(0)} 單位`;
  tipText.textContent = config.tip;
  source.textContent = config.label;
  scene.className = `scene-shell power-generation-scene ${config.className}`;
  rotor.style.transform = `translate(-50%, -50%) rotate(${intensity * 3.2}deg)`;
  bulb.style.opacity = `${0.25 + output / 120}`;
  bulb.style.boxShadow = `0 0 28px rgba(255, 209, 102, ${0.15 + output / 180})`;
}

sourceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.source = button.dataset.source;
    sourceButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateScene();
  });
});

intensityRange.addEventListener("input", updateScene);

updateScene();
