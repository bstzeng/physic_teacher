window.PhysicsSite.initConceptPage();

const leverBeam = document.querySelector("#leverBeam");
const leftWeight = document.querySelector("#leftWeight");
const rightWeight = document.querySelector("#rightWeight");
const leftMassRange = document.querySelector("#leftMassRange");
const leftDistanceRange = document.querySelector("#leftDistanceRange");
const rightMassRange = document.querySelector("#rightMassRange");
const rightDistanceRange = document.querySelector("#rightDistanceRange");
const leftMassValue = document.querySelector("#leftMassValue");
const leftDistanceValue = document.querySelector("#leftDistanceValue");
const rightMassValue = document.querySelector("#rightMassValue");
const rightDistanceValue = document.querySelector("#rightDistanceValue");
const leftTorqueText = document.querySelector("#leftTorqueText");
const rightTorqueText = document.querySelector("#rightTorqueText");
const leverResult = document.querySelector("#leverResult");

function placeWeight(element, distance, side) {
  const center = 50;
  const offset = distance * 16;
  const position = side === "left" ? center - offset : center + offset;
  element.style.left = `${position}%`;
}

function blockHeight(mass) {
  return 46 + mass * 10;
}

function render() {
  const leftMass = Number(leftMassRange.value);
  const leftDistance = Number(leftDistanceRange.value);
  const rightMass = Number(rightMassRange.value);
  const rightDistance = Number(rightDistanceRange.value);

  const leftTorque = leftMass * leftDistance;
  const rightTorque = rightMass * rightDistance;
  const difference = leftTorque - rightTorque;
  const angle = Math.max(-15, Math.min(15, difference * -1.8));

  leftMassValue.textContent = String(leftMass);
  leftDistanceValue.textContent = String(leftDistance);
  rightMassValue.textContent = String(rightMass);
  rightDistanceValue.textContent = String(rightDistance);
  leftTorqueText.textContent = String(leftTorque);
  rightTorqueText.textContent = String(rightTorque);

  placeWeight(leftWeight, leftDistance, "left");
  placeWeight(rightWeight, rightDistance, "right");
  leftWeight.style.height = `${blockHeight(leftMass)}px`;
  rightWeight.style.height = `${blockHeight(rightMass)}px`;
  leverBeam.style.transform = `rotate(${angle}deg)`;

  if (Math.abs(difference) < 0.2) {
    leverResult.textContent = "目前平衡";
  } else if (difference > 0) {
    leverResult.textContent = "左邊下降";
  } else {
    leverResult.textContent = "右邊下降";
  }
}

[
  leftMassRange,
  leftDistanceRange,
  rightMassRange,
  rightDistanceRange,
].forEach((input) => input.addEventListener("input", render));

render();
