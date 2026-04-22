window.PhysicsSite.initConceptPage();

const materialButtons = [...document.querySelectorAll(".heat-material-button")];
const timeRange = document.querySelector("#heatTimeRange");
const timeValue = document.querySelector("#heatTimeValue");
const heatBar = document.querySelector("#heatBar");
const heatProgress = document.querySelector("#heatProgress");
const heatTarget = document.querySelector("#heatTarget");
const materialText = document.querySelector("#heatMaterialText");
const levelText = document.querySelector("#heatLevelText");
const tipText = document.querySelector("#heatTip");

const materials = {
  metal: { label: "金屬", factor: 1, color: "#9aa6b2" },
  wood: { label: "木頭", factor: 0.48, color: "#a47148" },
  plastic: { label: "塑膠", factor: 0.34, color: "#4cc9f0" },
};

const state = {
  material: "metal",
};

function render() {
  const time = Number(timeRange.value);
  const material = materials[state.material];
  const progress = Math.min(100, time * material.factor * 11);

  materialButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.material === state.material);
  });

  timeValue.textContent = String(time);
  materialText.textContent = material.label;
  heatBar.style.background = `linear-gradient(90deg, #ff7b00, ${material.color})`;
  heatProgress.style.width = `${progress}%`;
  heatTarget.style.transform = `translateY(-50%) scale(${1 - progress / 250})`;
  heatTarget.style.opacity = `${Math.max(0.35, 1 - progress / 160)}`;

  if (progress > 75) {
    levelText.textContent = "很快";
    tipText.textContent = "這個材料傳熱很快，熱很快就到達另一端。";
  } else if (progress > 40) {
    levelText.textContent = "中等";
    tipText.textContent = "這個材料有在傳熱，但速度沒有那麼快。";
  } else {
    levelText.textContent = "較慢";
    tipText.textContent = "這個材料比較不容易把熱傳出去。";
  }
}

materialButtons.forEach((button) =>
  button.addEventListener("click", () => {
    state.material = button.dataset.material;
    render();
  })
);

timeRange.addEventListener("input", render);

render();
