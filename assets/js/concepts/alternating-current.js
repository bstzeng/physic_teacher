window.PhysicsSite.initConceptPage();

const amplitudeRange = document.querySelector("#acAmplitudeRange");
const frequencyRange = document.querySelector("#acFrequencyRange");
const phaseRange = document.querySelector("#acPhaseRange");
const amplitudeValue = document.querySelector("#acAmplitudeValue");
const frequencyValue = document.querySelector("#acFrequencyValue");
const phaseValue = document.querySelector("#acPhaseValue");
const rmsText = document.querySelector("#acRmsText");
const instantText = document.querySelector("#acInstantText");
const brightnessText = document.querySelector("#acBrightnessText");
const acLamp = document.querySelector("#acLamp");
const pauseAc = document.querySelector("#acPause");
const resetAc = document.querySelector("#acReset");
const acCanvas = document.querySelector("#acCanvas");
const acContext = acCanvas.getContext("2d");

const acState = {
  time: 0,
  paused: false,
};

function acValues() {
  const amplitude = Number(amplitudeRange.value);
  const frequency = Number(frequencyRange.value);
  const phase = (Number(phaseRange.value) * Math.PI) / 180;
  return { amplitude, frequency, phase };
}

function updateAcReadout(currentValue) {
  const { amplitude, frequency, phase } = acValues();
  const rms = amplitude / Math.sqrt(2);
  const glow = Math.min(1, Math.abs(currentValue) / Math.max(1, amplitude));

  amplitudeValue.textContent = String(amplitude);
  frequencyValue.textContent = String(frequency);
  phaseValue.textContent = String(Math.round((phase * 180) / Math.PI));
  rmsText.textContent = rms.toFixed(1);
  instantText.textContent = currentValue.toFixed(1);
  brightnessText.textContent = glow < 0.35 ? "偏暗" : glow < 0.7 ? "中等" : "很亮";
  acLamp.style.opacity = `${0.42 + glow * 0.58}`;
  acLamp.style.transform = `scale(${0.9 + glow * 0.18})`;
  acLamp.style.boxShadow = `0 0 ${18 + glow * 32}px rgba(255, 209, 102, ${0.18 + glow * 0.5})`;
}

function drawAcWave() {
  const { amplitude, frequency, phase } = acValues();
  const width = acCanvas.width;
  const height = acCanvas.height;
  const middle = height / 2;

  acContext.clearRect(0, 0, width, height);
  acContext.strokeStyle = "rgba(123, 142, 163, 0.45)";
  acContext.lineWidth = 1;
  acContext.beginPath();
  acContext.moveTo(0, middle);
  acContext.lineTo(width, middle);
  acContext.stroke();

  acContext.strokeStyle = "#1d4ed8";
  acContext.lineWidth = 4;
  acContext.beginPath();

  for (let x = 0; x <= width; x += 4) {
    const angle = x * 0.02 * (frequency / 50) + acState.time + phase;
    const y = middle - Math.sin(angle) * amplitude * 0.55;

    if (x === 0) {
      acContext.moveTo(x, y);
    } else {
      acContext.lineTo(x, y);
    }
  }

  acContext.stroke();

  const currentValue = Math.sin(acState.time + phase) * amplitude;
  updateAcReadout(currentValue);
}

function animateAc() {
  if (!acState.paused) {
    acState.time += Number(frequencyRange.value) / 700;
  }

  drawAcWave();
  requestAnimationFrame(animateAc);
}

pauseAc.addEventListener("click", () => {
  acState.paused = !acState.paused;
});

resetAc.addEventListener("click", () => {
  amplitudeRange.value = 120;
  frequencyRange.value = 50;
  phaseRange.value = 0;
  acState.time = 0;
});

[amplitudeRange, frequencyRange, phaseRange].forEach((input) => {
  input.addEventListener("input", () => drawAcWave());
});

requestAnimationFrame(animateAc);
