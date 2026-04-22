window.PhysicsSite.initConceptPage();

const angleRange = document.querySelector("#inclineAngleRange");
const massRange = document.querySelector("#inclineMassRange");
const angleValue = document.querySelector("#inclineAngleValue");
const massValue = document.querySelector("#inclineMassValue");
const forceText = document.querySelector("#inclineForceText");
const lengthText = document.querySelector("#inclineLengthText");
const tipText = document.querySelector("#inclineTip");
const rampEl = document.querySelector("#inclineRamp");
const boxEl = document.querySelector("#inclineBox");
const arrowEl = document.querySelector("#inclineArrow");

function render() {
  const angle = Number(angleRange.value);
  const mass = Number(massRange.value);
  const radians = (angle * Math.PI) / 180;
  const force = mass * Math.sin(radians);
  const boxY = 168 - angle * 1.8;
  const boxX = 120 + angle * 3.1;

  angleValue.textContent = String(angle);
  massValue.textContent = String(mass);
  forceText.textContent = force.toFixed(1);

  rampEl.style.transform = `rotate(${-angle}deg)`;
  boxEl.style.transform = `translate(${boxX}px, ${boxY}px) rotate(${-angle}deg)`;
  boxEl.style.height = `${60 + mass * 3}px`;
  arrowEl.style.transform = `translate(${boxX - 8}px, ${boxY - 62}px) scaleX(${0.7 + force * 0.08})`;

  if (angle <= 18) {
    lengthText.textContent = "較長";
    tipText.textContent = "斜面比較平，所以比較省力，但路比較長。";
  } else if (angle <= 32) {
    lengthText.textContent = "中等";
    tipText.textContent = "再把角度調高一點，會更接近直接往上抬。";
  } else {
    lengthText.textContent = "較短";
    tipText.textContent = "斜面越陡越短，但需要的推力也會更大。";
  }
}

[angleRange, massRange].forEach((input) => input.addEventListener("input", render));

render();
