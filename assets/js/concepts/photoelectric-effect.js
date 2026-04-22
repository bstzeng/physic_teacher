window.PhysicsSite.initConceptPage();

const frequencyRange = document.querySelector("#photoFrequencyRange");
const intensityRange = document.querySelector("#photoIntensityRange");
const frequencyValue = document.querySelector("#photoFrequencyValue");
const intensityValue = document.querySelector("#photoIntensityValue");
const emitText = document.querySelector("#photoEmitText");
const energyText = document.querySelector("#photoEnergyText");
const tipText = document.querySelector("#photoTip");
const beam = document.querySelector("#photoBeam");
const electrons = document.querySelector("#photoElectrons");
const metalButtons = [...document.querySelectorAll("[data-metal]")];

const workFunctions = {
  sodium: { threshold: 4.1, label: "門檻較低" },
  zinc: { threshold: 5.4, label: "門檻中等" },
  copper: { threshold: 6.2, label: "門檻較高" },
};

const state = {
  metal: "sodium",
};

function updatePhotoelectric() {
  const frequency = Number(frequencyRange.value);
  const intensity = Number(intensityRange.value);
  const threshold = workFunctions[state.metal].threshold;
  const emit = frequency >= threshold;
  const kinetic = Math.max(0, frequency - threshold);
  const count = emit ? Math.max(1, Math.round(intensity / 20)) : 0;

  frequencyValue.textContent = frequency.toFixed(1);
  intensityValue.textContent = `${intensity}`;
  emitText.textContent = emit ? "會" : "不會";
  energyText.textContent = !emit ? "沒有電子逸出" : kinetic > 2.2 ? "很高" : kinetic > 1 ? "中等" : "偏低";
  tipText.textContent = emit
    ? `${workFunctions[state.metal].label}，現在已經超過門檻頻率。`
    : `還沒超過 ${state.metal === "sodium" ? "鈉" : state.metal === "zinc" ? "鋅" : "銅"} 的門檻頻率。`;

  beam.style.opacity = `${0.25 + intensity / 120}`;
  beam.style.filter = `hue-rotate(${(frequency - 2) * -18}deg)`;

  electrons.innerHTML = Array.from({ length: count })
    .map((_, index) => {
      const top = 110 + index * 24;
      const delay = index * 0.12;
      return `<span class="photo-electron" style="top:${top}px; animation-delay:${delay}s; animation-duration:${1.8 - Math.min(1, kinetic * 0.18)}s;"></span>`;
    })
    .join("");
}

[frequencyRange, intensityRange].forEach((input) => {
  input.addEventListener("input", updatePhotoelectric);
});

metalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.metal = button.dataset.metal;
    metalButtons.forEach((item) => item.classList.toggle("active", item === button));
    updatePhotoelectric();
  });
});

updatePhotoelectric();
