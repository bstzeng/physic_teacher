window.PhysicsSite.initConceptPage();

const xRange = document.querySelector("#interferenceXRange");
const yRange = document.querySelector("#interferenceYRange");
const phaseRange = document.querySelector("#interferencePhaseRange");
const xValue = document.querySelector("#interferenceXValue");
const yValue = document.querySelector("#interferenceYValue");
const phaseValue = document.querySelector("#interferencePhaseValue");
const pathText = document.querySelector("#interferencePathText");
const typeText = document.querySelector("#interferenceTypeText");
const tipText = document.querySelector("#interferenceTip");
const point = document.querySelector("#interferencePoint");
const glow = document.querySelector("#interferenceGlow");
const waveA = document.querySelector("#interferenceWaveA");
const waveB = document.querySelector("#interferenceWaveB");

function updateInterference() {
  const px = Number(xRange.value);
  const py = Number(yRange.value);
  const phase = Number(phaseRange.value);
  const sourceA = { x: 26, y: 35 };
  const sourceB = { x: 26, y: 68 };
  const pointPos = { x: px, y: py };
  const d1 = Math.hypot(pointPos.x - sourceA.x, pointPos.y - sourceA.y);
  const d2 = Math.hypot(pointPos.x - sourceB.x, pointPos.y - sourceB.y);
  const pathDifference = Math.abs(d1 - d2) / 18;
  const totalPhase = (pathDifference * 360 + phase) % 360;
  const closeness = Math.min(Math.abs(totalPhase), Math.abs(360 - totalPhase));

  xValue.textContent = `${px}`;
  yValue.textContent = `${py}`;
  phaseValue.textContent = `${phase}`;
  pathText.textContent = `${pathDifference.toFixed(2)} λ`;

  point.style.left = `${px}%`;
  point.style.top = `${py}%`;
  glow.style.left = `${px}%`;
  glow.style.top = `${py}%`;

  if (closeness < 50) {
    typeText.textContent = "建設性干涉";
    tipText.textContent = "現在兩個波在這一點會加強。";
    glow.style.opacity = "0.95";
    glow.style.transform = "translate(-50%, -50%) scale(1.15)";
  } else if (Math.abs(closeness - 180) < 50) {
    typeText.textContent = "破壞性干涉";
    tipText.textContent = "現在兩個波在這一點會互相削弱。";
    glow.style.opacity = "0.25";
    glow.style.transform = "translate(-50%, -50%) scale(0.7)";
  } else {
    typeText.textContent = "部分干涉";
    tipText.textContent = "現在不是最強也不是最弱。";
    glow.style.opacity = "0.55";
    glow.style.transform = "translate(-50%, -50%) scale(0.92)";
  }

  waveA.style.width = `${d1 * 4.6}px`;
  waveA.style.height = `${d1 * 4.6}px`;
  waveB.style.width = `${d2 * 4.6}px`;
  waveB.style.height = `${d2 * 4.6}px`;
}

[xRange, yRange, phaseRange].forEach((input) => {
  input.addEventListener("input", updateInterference);
});

updateInterference();
