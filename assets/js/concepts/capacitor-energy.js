window.PhysicsSite.initConceptPage();

const capacitanceRange = document.querySelector("#capacitanceRange");
const voltageRange = document.querySelector("#capacitorVoltageRange");
const capacitanceValue = document.querySelector("#capacitanceValue");
const voltageValue = document.querySelector("#capacitorVoltageValue");
const chargeText = document.querySelector("#capacitorChargeText");
const energyText = document.querySelector("#capacitorEnergyText");
const tipText = document.querySelector("#capacitorTip");
const energyFill = document.querySelector("#capacitorEnergyFill");
const chargesWrap = document.querySelector("#capacitorCharges");
const resetCapacitor = document.querySelector("#capacitorReset");

function renderCharges(count) {
  const dots = [];

  for (let index = 0; index < count; index += 1) {
    const y = 96 + index * 18;
    dots.push(
      `<span class="charge-dot charge-plus" style="left: 31%; top: ${y}px;">+</span>`,
      `<span class="charge-dot charge-minus" style="right: 31%; top: ${y}px;">-</span>`
    );
  }

  chargesWrap.innerHTML = dots.join("");
}

function updateCapacitor() {
  const capacitance = Number(capacitanceRange.value) / 10;
  const voltage = Number(voltageRange.value) / 10;
  const charge = capacitance * voltage;
  const energy = 0.5 * capacitance * voltage * voltage / 100;
  const chargeCount = Math.max(2, Math.min(10, Math.round(charge / 6)));

  capacitanceValue.textContent = capacitance.toFixed(1);
  voltageValue.textContent = voltage.toFixed(1);
  chargeText.textContent = charge.toFixed(1);
  energyText.textContent = energy.toFixed(2);
  energyFill.style.width = `${Math.min(100, energy * 3.2)}%`;
  tipText.textContent =
    energy < 6 ? "目前儲能偏低" : energy < 16 ? "目前儲能中等" : "目前儲能很高";

  renderCharges(chargeCount);
}

resetCapacitor.addEventListener("click", () => {
  capacitanceRange.value = 40;
  voltageRange.value = 90;
  updateCapacitor();
});

[capacitanceRange, voltageRange].forEach((input) => {
  input.addEventListener("input", updateCapacitor);
});

updateCapacitor();
