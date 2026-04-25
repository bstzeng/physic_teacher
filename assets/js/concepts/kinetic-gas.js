window.PhysicsSite.initConceptPage();

const tempRange = document.querySelector("#gasTempRange");
const volumeRange = document.querySelector("#gasVolumeRange");
const countRange = document.querySelector("#gasCountRange");
const tempValue = document.querySelector("#gasTempValue");
const volumeValue = document.querySelector("#gasVolumeValue");
const countValue = document.querySelector("#gasCountValue");
const pressureText = document.querySelector("#gasPressureText");
const speedText = document.querySelector("#gasSpeedText");
const tipText = document.querySelector("#gasTip");
const gasBox = document.querySelector("#gasBox");
const pressureNeedle = document.querySelector("#pressureNeedle");
const resetGas = document.querySelector("#gasReset");

const gasState = {
  particles: [],
};

function gasBoxMetrics() {
  const volumeScale = Number(volumeRange.value) / 10;
  const width = 250 + volumeScale * 18;
  const height = 280;
  gasBox.style.width = `${width}px`;
  return { width, height, volumeScale };
}

function rebuildParticles() {
  const { width, height } = gasBoxMetrics();
  const count = Number(countRange.value);
  const temp = Number(tempRange.value);
  const speedBase = Math.sqrt(temp / 300) * 1.4;

  gasState.particles = Array.from({ length: count }, (_, index) => ({
    x: 18 + (index * 17) % (width - 30),
    y: 18 + (index * 23) % (height - 30),
    vx: (index % 2 === 0 ? 1 : -1) * speedBase * (0.6 + (index % 5) * 0.12),
    vy: (index % 3 === 0 ? 1 : -1) * speedBase * (0.6 + (index % 4) * 0.14),
  }));

  gasBox.innerHTML = gasState.particles.map(() => '<div class="gas-particle"></div>').join("");
}

function updateGasReadout() {
  const temp = Number(tempRange.value);
  const count = Number(countRange.value);
  const { volumeScale } = gasBoxMetrics();
  const pressure = (count * temp) / (18 * 300 * volumeScale);

  tempValue.textContent = String(temp);
  volumeValue.textContent = volumeScale.toFixed(1);
  countValue.textContent = String(count);
  pressureText.textContent = pressure.toFixed(2);
  speedText.textContent = temp < 280 ? "偏慢" : temp < 450 ? "中等" : "很快";
  tipText.textContent =
    pressure < 0.9 ? "目前壓力偏低" : pressure < 1.4 ? "目前壓力中等" : "目前壓力偏高";
  pressureNeedle.style.transform = `rotate(${Math.min(70, pressure * 38 - 45)}deg)`;
}

function animateGas() {
  const { width, height } = gasBoxMetrics();
  const dots = [...gasBox.querySelectorAll(".gas-particle")];
  const temp = Number(tempRange.value);
  const factor = Math.sqrt(temp / 300);

  gasState.particles.forEach((particle, index) => {
    particle.x += particle.vx * factor;
    particle.y += particle.vy * factor;

    if (particle.x <= 0 || particle.x >= width - 14) {
      particle.vx *= -1;
      particle.x = Math.max(0, Math.min(width - 14, particle.x));
    }

    if (particle.y <= 0 || particle.y >= height - 14) {
      particle.vy *= -1;
      particle.y = Math.max(0, Math.min(height - 14, particle.y));
    }

    const dot = dots[index];
    if (dot) {
      dot.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
    }
  });

  requestAnimationFrame(animateGas);
}

[tempRange, volumeRange, countRange].forEach((input) => {
  input.addEventListener("input", () => {
    rebuildParticles();
    updateGasReadout();
  });
});

resetGas.addEventListener("click", () => {
  tempRange.value = 300;
  volumeRange.value = 10;
  countRange.value = 18;
  rebuildParticles();
  updateGasReadout();
});

rebuildParticles();
updateGasReadout();
requestAnimationFrame(animateGas);
