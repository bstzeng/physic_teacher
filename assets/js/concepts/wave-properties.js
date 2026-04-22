window.PhysicsSite.initConceptPage();

const pathEl = document.querySelector("#wavePropertiesPath");
const amplitudeRange = document.querySelector("#waveAmplitudeRange");
const frequencyRange = document.querySelector("#waveFrequencyRange");
const speedRange = document.querySelector("#waveSpeedRange");
const amplitudeValue = document.querySelector("#waveAmplitudeValue");
const frequencyValue = document.querySelector("#waveFrequencyValue");
const speedValue = document.querySelector("#waveSpeedValue");
const heightLabel = document.querySelector("#waveHeightLabel");
const densityLabel = document.querySelector("#waveDensityLabel");
const tipText = document.querySelector("#waveTip");

const state = {
  phase: 0,
};

function levelText(value) {
  if (value <= 3) {
    return "較低";
  }
  if (value <= 7) {
    return "中等";
  }
  return "較高";
}

function buildPath() {
  const amplitude = Number(amplitudeRange.value) * 8;
  const frequency = Number(frequencyRange.value);
  const startX = 50;
  const endX = 650;
  const centerY = 170;
  let path = `M ${startX} ${centerY}`;

  for (let x = startX; x <= endX; x += 8) {
    const waveX = (x - startX) / 180;
    const y = centerY + Math.sin(waveX * Math.PI * frequency + state.phase) * amplitude;
    path += ` L ${x} ${y.toFixed(2)}`;
  }

  return path;
}

function renderStatic() {
  amplitudeValue.textContent = amplitudeRange.value;
  frequencyValue.textContent = frequencyRange.value;
  speedValue.textContent = speedRange.value;
  heightLabel.textContent = levelText(Number(amplitudeRange.value));
  densityLabel.textContent = levelText(Number(frequencyRange.value));

  if (Number(speedRange.value) >= 8) {
    tipText.textContent = "現在波往前跑得很快，但波峰的疏密沒有因此改變。";
  } else if (Number(frequencyRange.value) >= 8) {
    tipText.textContent = "頻率高時，波峰會看起來更密。";
  } else {
    tipText.textContent = "可以一次只改一個參數，比較它到底影響哪一部分。";
  }
}

function animate() {
  state.phase += Number(speedRange.value) * 0.05;
  pathEl.setAttribute("d", buildPath());
  requestAnimationFrame(animate);
}

[amplitudeRange, frequencyRange, speedRange].forEach((input) =>
  input.addEventListener("input", renderStatic)
);

renderStatic();
animate();
