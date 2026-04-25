window.PhysicsSite.initConceptPage();

const gravityMassRange = document.querySelector("#gravityMassRange");
const gravityDistanceRange = document.querySelector("#gravityDistanceRange");
const gravityProbeMassRange = document.querySelector("#gravityProbeMassRange");
const gravityProbe = document.querySelector("#gravityProbe");
const gravityArrow = document.querySelector("#gravityArrow");

function updateGravityPotential() {
  const planetMass = Number(gravityMassRange.value) / 10;
  const distance = Number(gravityDistanceRange.value);
  const probeMass = Number(gravityProbeMassRange.value) / 10;
  const field = planetMass / (distance * distance);
  const potential = -(planetMass * probeMass) / distance;

  document.querySelector("#gravityMassValue").textContent = planetMass.toFixed(1);
  document.querySelector("#gravityDistanceValue").textContent = distance.toFixed(1);
  document.querySelector("#gravityProbeMassValue").textContent = probeMass.toFixed(1);
  document.querySelector("#gravityFieldText").textContent = field.toFixed(3);
  document.querySelector("#gravityPotentialText").textContent = potential.toFixed(2);
  document.querySelector("#gravityTipText").textContent = field > 0.4 ? "現在非常靠近，引力很強" : field > 0.15 ? "變化開始明顯" : "距離較遠，引力較弱";

  const left = 24 + distance * 5.5;
  gravityProbe.style.left = `${left}%`;
  gravityArrow.style.left = `${left - 12}%`;
  gravityArrow.style.width = `${40 + Math.min(120, field * 240)}px`;
}

[gravityMassRange, gravityDistanceRange, gravityProbeMassRange].forEach((input) => {
  input.addEventListener("input", updateGravityPotential);
});

updateGravityPotential();
