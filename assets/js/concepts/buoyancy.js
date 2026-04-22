window.PhysicsSite.initConceptPage();

const floatingObject = document.querySelector("#floatingObject");
const sizeRange = document.querySelector("#sizeRange");
const weightRange = document.querySelector("#weightRange");
const sizeValue = document.querySelector("#sizeValue");
const weightValue = document.querySelector("#weightValue");
const materialText = document.querySelector("#materialText");
const buoyancyResult = document.querySelector("#buoyancyResult");
const buoyancyTip = document.querySelector("#buoyancyTip");
const materialButtons = [...document.querySelectorAll(".material-button")];

const materials = {
  wood: { label: "木頭", density: 0.55, color: "linear-gradient(180deg, #c97b63, #8d5524)" },
  plastic: { label: "塑膠", density: 0.92, color: "linear-gradient(180deg, #6dd3ce, #1b9aaa)" },
  iron: { label: "鐵塊", density: 1.35, color: "linear-gradient(180deg, #9099a2, #5c677d)" },
};

const state = {
  material: "wood",
};

function updateButtons() {
  materialButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.material === state.material);
  });
}

function render() {
  const size = Number(sizeRange.value);
  const extraWeight = Number(weightRange.value);
  const material = materials[state.material];
  const effectiveDensity = material.density + extraWeight * 0.12 - size * 0.03;
  const sinkRatio = Math.max(0.08, Math.min(1.12, effectiveDensity));
  const depth = 28 + sinkRatio * 118;
  const width = 70 + size * 14;
  const height = 34 + size * 10;

  sizeValue.textContent = String(size);
  weightValue.textContent = String(extraWeight);
  materialText.textContent = material.label;
  floatingObject.textContent = material.label;
  floatingObject.style.width = `${width}px`;
  floatingObject.style.height = `${height}px`;
  floatingObject.style.background = material.color;
  floatingObject.style.transform = `translate(-50%, ${depth}px)`;

  updateButtons();

  if (sinkRatio < 0.72) {
    buoyancyResult.textContent = "會浮起來";
    buoyancyTip.textContent = "這個物體比水輕一些，所以大部分會留在水面上。";
  } else if (sinkRatio < 1) {
    buoyancyResult.textContent = "半浮半沉";
    buoyancyTip.textContent = "浮力和重量很接近，所以它沉得比較深。";
  } else {
    buoyancyResult.textContent = "會下沉";
    buoyancyTip.textContent = "這個物體太重了，浮力撐不住，所以會往下沉。";
  }
}

materialButtons.forEach((button) =>
  button.addEventListener("click", () => {
    state.material = button.dataset.material;
    render();
  })
);

[sizeRange, weightRange].forEach((input) => input.addEventListener("input", render));

render();
