window.PhysicsSite.initConceptPage();

const probeXRange = document.querySelector("#probeXRange");
const probeYRange = document.querySelector("#probeYRange");
const probeXValue = document.querySelector("#probeXValue");
const probeYValue = document.querySelector("#probeYValue");
const potentialText = document.querySelector("#fieldPotentialText");
const strengthText = document.querySelector("#fieldStrengthText");
const directionText = document.querySelector("#fieldDirectionText");
const scene = document.querySelector("#equipotentialScene");
const chargeA = document.querySelector("#fieldChargeA");
const chargeB = document.querySelector("#fieldChargeB");
const probe = document.querySelector("#fieldProbe");
const arrow = document.querySelector("#fieldArrow");
const modeButtons = [...document.querySelectorAll("[data-field-mode]")];
const resetField = document.querySelector("#fieldReset");

const fieldState = {
  mode: "dipole",
};

const chargePositions = {
  a: { x: 30, y: 50 },
  b: { x: 70, y: 50 },
};

function computeField() {
  const probeX = Number(probeXRange.value);
  const probeY = Number(probeYRange.value);
  const charges = fieldState.mode === "dipole" ? [1, -1] : [1, 1];
  const points = [chargePositions.a, chargePositions.b];
  let ex = 0;
  let ey = 0;
  let potential = 0;

  points.forEach((point, index) => {
    const dx = probeX - point.x;
    const dy = probeY - point.y;
    const distance = Math.max(6, Math.hypot(dx, dy));
    const q = charges[index];

    potential += q / distance;
    ex += (q * dx) / Math.pow(distance, 3);
    ey += (q * dy) / Math.pow(distance, 3);
  });

  return {
    probeX,
    probeY,
    potential,
    strength: Math.hypot(ex, ey) * 1200,
    angle: (Math.atan2(ey, ex) * 180) / Math.PI,
  };
}

function updateField() {
  const { probeX, probeY, potential, strength, angle } = computeField();
  const sceneWidth = scene.clientWidth;
  const sceneHeight = scene.clientHeight;
  const gradientColor = fieldState.mode === "dipole" ? "rgba(239, 71, 111, 0.18)" : "rgba(59, 130, 246, 0.18)";

  probeXValue.textContent = String(probeX);
  probeYValue.textContent = String(probeY);
  potentialText.textContent = potential.toFixed(3);
  strengthText.textContent = strength.toFixed(2);
  directionText.textContent =
    angle > -45 && angle <= 45 ? "往右" : angle > 45 && angle <= 135 ? "往下" : angle <= -45 && angle > -135 ? "往上" : "往左";

  chargeA.style.left = `${chargePositions.a.x}%`;
  chargeA.style.top = `${chargePositions.a.y}%`;
  chargeB.style.left = `${chargePositions.b.x}%`;
  chargeB.style.top = `${chargePositions.b.y}%`;
  chargeB.textContent = fieldState.mode === "dipole" ? "-" : "+";
  chargeB.classList.toggle("negative", fieldState.mode === "dipole");
  chargeB.classList.toggle("positive", fieldState.mode !== "dipole");

  probe.style.left = `${probeX}%`;
  probe.style.top = `${probeY}%`;
  arrow.style.left = `${probeX}%`;
  arrow.style.top = `${probeY}%`;
  arrow.style.transform = `translate(0, -50%) rotate(${angle}deg)`;
  arrow.style.width = `${50 + Math.min(60, strength * 6)}px`;

  scene.style.background = `radial-gradient(circle at ${probeX}% ${probeY}%, ${gradientColor}, rgba(230, 240, 255, 0.96) 35%, rgba(243, 248, 255, 0.98) 78%)`;
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    fieldState.mode = button.dataset.fieldMode;
    modeButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateField();
  });
});

[probeXRange, probeYRange].forEach((input) => {
  input.addEventListener("input", updateField);
});

resetField.addEventListener("click", () => {
  fieldState.mode = "dipole";
  probeXRange.value = 70;
  probeYRange.value = 50;
  modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.fieldMode === "dipole"));
  updateField();
});

updateField();
