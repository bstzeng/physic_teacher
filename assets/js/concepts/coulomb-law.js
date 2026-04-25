window.PhysicsSite.initConceptPage();

const chargeARange = document.querySelector("#chargeARange");
const chargeBRange = document.querySelector("#chargeBRange");
const distanceRange = document.querySelector("#chargeDistanceRange");
const chargeAValue = document.querySelector("#chargeAValue");
const chargeBValue = document.querySelector("#chargeBValue");
const distanceValue = document.querySelector("#chargeDistanceValue");
const typeText = document.querySelector("#coulombTypeText");
const forceText = document.querySelector("#coulombForceText");
const tipText = document.querySelector("#coulombTip");
const chargeA = document.querySelector("#chargeA");
const chargeB = document.querySelector("#chargeB");
const forceArrow = document.querySelector("#forceArrow");
const resetCoulomb = document.querySelector("#coulombReset");

function formatCharge(value) {
  return `${value >= 0 ? "+" : ""}${value}`;
}

function setChargeAppearance(element, value) {
  element.textContent = value >= 0 ? "+" : "-";
  element.classList.toggle("positive", value >= 0);
  element.classList.toggle("negative", value < 0);
}

function updateCoulomb() {
  const q1 = Number(chargeARange.value);
  const q2 = Number(chargeBRange.value);
  const distance = Number(distanceRange.value) / 10;
  const force = Math.abs((q1 * q2) / (distance * distance));
  const attract = q1 * q2 < 0;
  const separation = distance * 10;

  chargeAValue.textContent = `${formatCharge(q1)}`;
  chargeBValue.textContent = `${formatCharge(q2)}`;
  distanceValue.textContent = distance.toFixed(1);
  forceText.textContent = force.toFixed(2);
  typeText.textContent = attract ? "互相吸引" : "互相排斥";
  tipText.textContent = attract ? "異號電荷會彼此靠近" : "同號電荷會互相推開";

  setChargeAppearance(chargeA, q1);
  setChargeAppearance(chargeB, q2);

  chargeA.style.left = `${22 + separation}%`;
  chargeB.style.right = `${22 + separation}%`;
  forceArrow.style.width = `${40 + Math.min(180, force * 16)}px`;
  forceArrow.style.transform = `translate(-50%, -50%) scaleX(${attract ? 1 : -1})`;
}

[chargeARange, chargeBRange, distanceRange].forEach((input) => {
  input.addEventListener("input", updateCoulomb);
});

resetCoulomb.addEventListener("click", () => {
  chargeARange.value = 4;
  chargeBRange.value = -3;
  distanceRange.value = 20;
  updateCoulomb();
});

updateCoulomb();
