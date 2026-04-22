window.PhysicsSite.initConceptPage();

const chargeRange = document.querySelector("#electricChargeRange");
const distanceRange = document.querySelector("#electricDistanceRange");
const chargeValue = document.querySelector("#electricChargeValue");
const distanceValue = document.querySelector("#electricDistanceValue");
const directionText = document.querySelector("#electricDirectionText");
const fieldText = document.querySelector("#electricFieldText");
const potentialText = document.querySelector("#electricPotentialText");
const chargeEl = document.querySelector("#electricCharge");
const probe = document.querySelector("#electricProbe");
const arrow = document.querySelector("#electricArrow");
const angleButtons = [...document.querySelectorAll("[data-probe-angle]")];

const state = {
  angle: 0,
};

function updateElectric() {
  const q = Number(chargeRange.value) || 1;
  const distance = Number(distanceRange.value);
  const sign = q >= 0 ? 1 : -1;
  const field = Math.abs(q) / Math.pow(distance / 50, 2);
  const potential = q / (distance / 50);
  const rad = (state.angle * Math.PI) / 180;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;

  chargeValue.textContent = `${q > 0 ? "+" : ""}${q}`;
  distanceValue.textContent = `${distance}`;
  directionText.textContent = sign > 0 ? "向外" : "向內";
  fieldText.textContent = field.toFixed(2);
  potentialText.textContent = potential > 2 ? "偏高" : potential > 0 ? "中等" : potential < -2 ? "偏低" : "接近零";
  chargeEl.textContent = q >= 0 ? "+" : "-";
  chargeEl.classList.toggle("negative", q < 0);
  probe.style.transform = `translate(${x}px, ${y}px)`;

  const arrowAngle = sign > 0 ? state.angle : state.angle + 180;
  arrow.style.transform = `translate(${x * 0.55}px, ${y * 0.55}px) rotate(${arrowAngle}deg)`;
}

chargeRange.addEventListener("input", updateElectric);
distanceRange.addEventListener("input", updateElectric);
angleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.angle = Number(button.dataset.probeAngle);
    angleButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateElectric();
  });
});

updateElectric();
