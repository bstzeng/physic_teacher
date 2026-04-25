window.PhysicsSite.initConceptPage();

const rcResistanceRange = document.querySelector("#rcResistanceRange");
const rcCapacitanceRange = document.querySelector("#rcCapacitanceRange");
const rcFill = document.querySelector("#rcFill");
const rcChargeButton = document.querySelector("#rcCharge");
const rcDischargeButton = document.querySelector("#rcDischarge");

const rcState = {
  charge: 0,
  mode: "idle",
};

function rcTau() {
  return (Number(rcResistanceRange.value) / 10) * (Number(rcCapacitanceRange.value) / 10);
}

function updateRcReadout() {
  const resistance = Number(rcResistanceRange.value) / 10;
  const capacitance = Number(rcCapacitanceRange.value) / 10;
  document.querySelector("#rcResistanceValue").textContent = resistance.toFixed(1);
  document.querySelector("#rcCapacitanceValue").textContent = capacitance.toFixed(1);
  document.querySelector("#rcTauText").textContent = rcTau().toFixed(1);
  document.querySelector("#rcVoltageText").textContent = `${Math.round(rcState.charge * 100)}%`;
  document.querySelector("#rcModeText").textContent = rcState.mode === "charge" ? "正在充電" : rcState.mode === "discharge" ? "正在放電" : "等待操作";
  rcFill.style.width = `${rcState.charge * 100}%`;
}

function animateRc() {
  const speed = 0.012 / Math.max(1, rcTau() / 10);
  if (rcState.mode === "charge") {
    rcState.charge += speed;
    if (rcState.charge >= 1) {
      rcState.charge = 1;
      rcState.mode = "idle";
    }
  } else if (rcState.mode === "discharge") {
    rcState.charge -= speed;
    if (rcState.charge <= 0) {
      rcState.charge = 0;
      rcState.mode = "idle";
    }
  }

  updateRcReadout();
  requestAnimationFrame(animateRc);
}

[rcResistanceRange, rcCapacitanceRange].forEach((input) => input.addEventListener("input", updateRcReadout));
rcChargeButton.addEventListener("click", () => { rcState.mode = "charge"; });
rcDischargeButton.addEventListener("click", () => { rcState.mode = "discharge"; });

updateRcReadout();
requestAnimationFrame(animateRc);
