window.PhysicsSite.initConceptPage();

const matterMassRange = document.querySelector("#matterMassRange");
const matterSpeedRange = document.querySelector("#matterSpeedRange");
const matterWaveBars = document.querySelector("#matterWaveBars");

function renderMatterWave(barCount, tallEvery) {
  matterWaveBars.innerHTML = Array.from({ length: barCount }, (_, index) => {
    const height = index % tallEvery === 0 ? 82 : index % 2 === 0 ? 50 : 28;
    return `<span style="height:${height}px"></span>`;
  }).join("");
}

function updateMatterWave() {
  const mass = Number(matterMassRange.value) / 10;
  const speed = Number(matterSpeedRange.value) / 10;
  const momentum = mass * speed;
  const wavelength = 1 / Math.max(0.1, momentum);
  const barCount = Math.max(8, Math.min(30, Math.round(6 + momentum * 1.8)));

  document.querySelector("#matterMassValue").textContent = mass.toFixed(1);
  document.querySelector("#matterSpeedValue").textContent = speed.toFixed(1);
  document.querySelector("#matterMomentumText").textContent = momentum.toFixed(1);
  document.querySelector("#matterWaveText").textContent = wavelength.toFixed(3);
  document.querySelector("#matterTipText").textContent = wavelength > 0.2 ? "現在波峰間距偏大" : "現在波峰變得很密";
  renderMatterWave(barCount, Math.max(2, Math.round(8 / Math.max(0.5, wavelength * 10))));
}

[matterMassRange, matterSpeedRange].forEach((input) => input.addEventListener("input", updateMatterWave));
updateMatterWave();
