window.PhysicsSite.initConceptPage();

const leftPoleSelect = document.querySelector("#leftPoleSelect");
const rightPoleSelect = document.querySelector("#rightPoleSelect");
const distanceRange = document.querySelector("#magnetDistanceRange");
const distanceValue = document.querySelector("#magnetDistanceValue");
const leftPoleLabel = document.querySelector("#leftPoleLabel");
const rightPoleLabel = document.querySelector("#rightPoleLabel");
const rightMagnet = document.querySelector("#rightMagnet");
const arrow = document.querySelector("#magnetArrow");
const resultText = document.querySelector("#magnetResult");
const strengthText = document.querySelector("#magnetStrength");
const tipText = document.querySelector("#magnetTip");

function strengthLabel(force) {
  if (force > 7) {
    return "很強";
  }
  if (force > 4) {
    return "中等";
  }
  return "較弱";
}

function render() {
  const leftPole = leftPoleSelect.value;
  const rightPole = rightPoleSelect.value;
  const distance = Number(distanceRange.value);
  const opposite = leftPole !== rightPole;
  const force = Math.max(1, 11 - distance);
  const offset = opposite ? -force * 6 : force * 6;
  const baseX = 310 + distance * 18;

  leftPoleLabel.textContent = leftPole;
  rightPoleLabel.textContent = rightPole;
  distanceValue.textContent = String(distance);
  rightMagnet.style.transform = `translateX(${baseX + offset}px)`;
  arrow.style.transform = `scaleX(${0.7 + force * 0.06})`;
  arrow.textContent = opposite ? "吸引" : "排斥";
  arrow.style.background = opposite
    ? "linear-gradient(135deg, #00a6a6, #007f7b)"
    : "linear-gradient(135deg, #f18f01, #d97706)";

  resultText.textContent = opposite ? "互相吸引" : "互相排斥";
  strengthText.textContent = strengthLabel(force);

  if (opposite) {
    tipText.textContent = "不同磁極靠近時，會互相吸過去。";
  } else {
    tipText.textContent = "相同磁極靠近時，會想把對方推開。";
  }
}

[leftPoleSelect, rightPoleSelect, distanceRange].forEach((input) =>
  input.addEventListener("input", render)
);

render();
