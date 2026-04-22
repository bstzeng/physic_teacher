window.PhysicsSite.initConceptPage();

const wavePath = document.querySelector("#wavePath");
const frequencyRange = document.querySelector("#frequencyRange");
const amplitudeRange = document.querySelector("#amplitudeRange");
const frequencyValue = document.querySelector("#frequencyValue");
const amplitudeValue = document.querySelector("#amplitudeValue");
const densityText = document.querySelector("#densityText");
const waveHeightText = document.querySelector("#waveHeightText");
const soundTip = document.querySelector("#soundTip");

function describeLevel(value) {
  if (value <= 3) {
    return "低";
  }

  if (value <= 7) {
    return "中等";
  }

  return "高";
}

function buildWavePath(frequency, amplitude) {
  const startX = 170;
  const endX = 560;
  const centerY = 160;
  const step = 8;
  let path = `M ${startX} ${centerY}`;

  for (let x = startX; x <= endX; x += step) {
    const radians = ((x - startX) / 180) * Math.PI * frequency;
    const y = centerY + Math.sin(radians) * amplitude;
    path += ` L ${x} ${y.toFixed(2)}`;
  }

  return path;
}

function render() {
  const frequency = Number(frequencyRange.value);
  const amplitude = Number(amplitudeRange.value) * 8;

  frequencyValue.textContent = frequencyRange.value;
  amplitudeValue.textContent = amplitudeRange.value;
  wavePath.setAttribute("d", buildWavePath(frequency, amplitude));
  densityText.textContent = `${describeLevel(frequency)}密度`;
  waveHeightText.textContent = `${describeLevel(Number(amplitudeRange.value))}起伏`;

  if (frequency >= 8) {
    soundTip.textContent = "音調變高時，波峰會變得更密。";
  } else if (Number(amplitudeRange.value) >= 8) {
    soundTip.textContent = "聲音變大時，波形上下起伏會更明顯。";
  } else {
    soundTip.textContent = "可以分別改變音調和音量，觀察它們影響的是不同部分。";
  }
}

[frequencyRange, amplitudeRange].forEach((input) => input.addEventListener("input", render));

render();
