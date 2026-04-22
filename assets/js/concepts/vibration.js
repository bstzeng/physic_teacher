window.PhysicsSite.initConceptPage();

const pathEl = document.querySelector("#vibrationPath");
const lengthRange = document.querySelector("#vibrationLengthRange");
const tensionRange = document.querySelector("#vibrationTensionRange");
const lengthValue = document.querySelector("#vibrationLengthValue");
const tensionValue = document.querySelector("#vibrationTensionValue");
const speedText = document.querySelector("#vibrationSpeedText");
const pitchText = document.querySelector("#vibrationPitchText");
const tipText = document.querySelector("#vibrationTip");

const state = {
  phase: 0,
};

function levelLabel(value) {
  if (value <= 3) {
    return "較低";
  }
  if (value <= 7) {
    return "中等";
  }
  return "較高";
}

function buildPath() {
  const length = Number(lengthRange.value);
  const tension = Number(tensionRange.value);
  const density = 13 - length + tension * 0.4;
  const amplitude = Math.max(10, 44 - tension * 2);
  let path = "M 90 170";

  for (let x = 90; x <= 610; x += 8) {
    const ratio = (x - 90) / 520;
    const y = 170 + Math.sin(ratio * Math.PI * density + state.phase) * amplitude * Math.sin(ratio * Math.PI);
    path += ` L ${x} ${y.toFixed(2)}`;
  }

  return path;
}

function renderStatic() {
  const length = Number(lengthRange.value);
  const tension = Number(tensionRange.value);
  const vibrationScore = 12 - length + tension;

  lengthValue.textContent = String(length);
  tensionValue.textContent = String(tension);
  speedText.textContent = levelLabel(vibrationScore / 2);
  pitchText.textContent = levelLabel(vibrationScore / 2);

  if (length <= 4) {
    tipText.textContent = "弦變短後，波峰變得更密，振動也更快。";
  } else if (tension >= 8) {
    tipText.textContent = "拉得更緊時，振動通常也會更快。";
  } else {
    tipText.textContent = "可以先只改長度，再只改拉力，比較兩者效果。";
  }
}

function animate() {
  const length = Number(lengthRange.value);
  const tension = Number(tensionRange.value);
  const speed = (13 - length + tension) * 0.06;
  state.phase += speed;
  pathEl.setAttribute("d", buildPath());
  requestAnimationFrame(animate);
}

[lengthRange, tensionRange].forEach((input) => input.addEventListener("input", renderStatic));

renderStatic();
animate();
