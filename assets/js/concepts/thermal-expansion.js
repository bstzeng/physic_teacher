window.PhysicsSite.initConceptPage();

const buttons = [...document.querySelectorAll(".expansion-button")];
const tempRange = document.querySelector("#expansionTempRange");
const tempValue = document.querySelector("#expansionTempValue");
const materialText = document.querySelector("#expansionMaterialText");
const lengthText = document.querySelector("#expansionLengthText");
const tipText = document.querySelector("#expansionTip");
const barEl = document.querySelector("#expansionBar");
const thermoFill = document.querySelector("#expansionThermoFill");

const materials = {
  steel: { label: "鋼", factor: 0.0008, color: "#6c757d" },
  aluminum: { label: "鋁", factor: 0.0014, color: "#94d2bd" },
  copper: { label: "銅", factor: 0.0011, color: "#bc6c25" },
};

const state = {
  material: "steel",
};

function render() {
  const temp = Number(tempRange.value);
  const material = materials[state.material];
  const delta = temp - 20;
  const expansion = delta * material.factor;
  const width = 220 + expansion * 14000;

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.material === state.material);
  });

  tempValue.textContent = String(temp);
  materialText.textContent = material.label;
  barEl.style.width = `${Math.max(170, width)}px`;
  barEl.style.background = `linear-gradient(90deg, ${material.color}, #ffd166)`;
  thermoFill.style.height = `${Math.max(8, ((temp + 20) / 140) * 100)}%`;

  if (temp > 50) {
    lengthText.textContent = "變長";
    tipText.textContent = "現在溫度比較高，長條出現明顯的膨脹。";
  } else if (temp < 5) {
    lengthText.textContent = "縮短";
    tipText.textContent = "溫度降低時，長條會往回縮一些。";
  } else {
    lengthText.textContent = "原本長度";
    tipText.textContent = "溫度接近原本時，長度變化不太明顯。";
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    state.material = button.dataset.material;
    render();
  })
);

tempRange.addEventListener("input", render);

render();
