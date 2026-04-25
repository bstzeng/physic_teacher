window.PhysicsSite.initConceptPage();

const halfLifeRange = document.querySelector("#halfLifeRange");
const initialAtomsRange = document.querySelector("#initialAtomsRange");
const halfLifeValue = document.querySelector("#halfLifeValue");
const initialAtomsValue = document.querySelector("#initialAtomsValue");
const timeText = document.querySelector("#radioTimeText");
const remainText = document.querySelector("#radioRemainText");
const ratioText = document.querySelector("#radioRatioText");
const nucleusGrid = document.querySelector("#nucleusGrid");
const decayMarker = document.querySelector("#decayMarker");
const startRadio = document.querySelector("#radioStart");
const resetRadio = document.querySelector("#radioReset");

const radioState = {
  running: false,
  elapsed: 0,
};

function createNuclei(total) {
  nucleusGrid.innerHTML = Array.from({ length: total }, () => '<div class="nucleus-dot"></div>').join("");
}

function updateRadioactivity() {
  const halfLife = Number(halfLifeRange.value);
  const initialAtoms = Number(initialAtomsRange.value);
  const remaining = initialAtoms * Math.pow(0.5, radioState.elapsed / halfLife);
  const remainingRounded = Math.max(0, Math.round(remaining));
  const dots = [...nucleusGrid.querySelectorAll(".nucleus-dot")];

  halfLifeValue.textContent = String(halfLife);
  initialAtomsValue.textContent = String(initialAtoms);
  timeText.textContent = `${radioState.elapsed.toFixed(1)} s`;
  remainText.textContent = String(remainingRounded);
  ratioText.textContent = `${((remaining / initialAtoms) * 100).toFixed(0)}%`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("decayed", index >= remainingRounded);
  });

  decayMarker.style.top = `${Math.min(220, radioState.elapsed * 32)}px`;
}

function resetRadioactivity() {
  radioState.running = false;
  radioState.elapsed = 0;
  halfLifeRange.value = 4;
  initialAtomsRange.value = 32;
  createNuclei(Number(initialAtomsRange.value));
  updateRadioactivity();
}

function animateRadioactivity() {
  if (radioState.running) {
    radioState.elapsed += 0.03;
    updateRadioactivity();
  }

  requestAnimationFrame(animateRadioactivity);
}

halfLifeRange.addEventListener("input", updateRadioactivity);
initialAtomsRange.addEventListener("input", () => {
  createNuclei(Number(initialAtomsRange.value));
  updateRadioactivity();
});

startRadio.addEventListener("click", () => {
  radioState.running = !radioState.running;
  startRadio.textContent = radioState.running ? "暫停" : "開始";
});

resetRadio.addEventListener("click", () => {
  startRadio.textContent = "開始";
  resetRadioactivity();
});

resetRadioactivity();
requestAnimationFrame(animateRadioactivity);
