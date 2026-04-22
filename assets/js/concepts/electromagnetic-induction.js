window.PhysicsSite.initConceptPage();

const speedRange = document.querySelector("#inductionSpeedRange");
const speedValue = document.querySelector("#inductionSpeedValue");
const directionText = document.querySelector("#inductionDirectionText");
const peakText = document.querySelector("#inductionPeakText");
const tipText = document.querySelector("#inductionTip");
const startButton = document.querySelector("#inductionStart");
const resetButton = document.querySelector("#inductionReset");
const magnet = document.querySelector("#inductionMagnet");
const needle = document.querySelector("#inductionNeedle");
const poleButtons = [...document.querySelectorAll("[data-pole]")];
const poleLeft = document.querySelector("#inductionMagnetLeft");
const poleRight = document.querySelector("#inductionMagnetRight");

const state = {
  pole: "N",
  running: false,
  x: -160,
  peak: 0,
};

function updateStatic() {
  const speed = Number(speedRange.value);
  speedValue.textContent = `${speed}`;
  tipText.textContent = speed > 6 ? "速度更快時，磁通量改變通常更明顯。" : "先比較同一個磁極在快慢不同時的偏轉。";
  if (state.pole === "N") {
    poleLeft.textContent = "N";
    poleRight.textContent = "S";
  } else {
    poleLeft.textContent = "S";
    poleRight.textContent = "N";
  }
}

function animate() {
  if (state.running) {
    const speed = Number(speedRange.value) * 1.6;
    state.x += speed;
    const center = 220;
    const distance = state.x - center;
    const signal = (state.pole === "N" ? 1 : -1) * (-distance / 70) * Math.exp(-(distance * distance) / 6800);
    const angle = Math.max(-38, Math.min(38, signal * 80));

    state.peak = Math.max(state.peak, Math.abs(signal));
    peakText.textContent = state.peak.toFixed(2);
    directionText.textContent = Math.abs(signal) < 0.03 ? "接近零" : signal > 0 ? "正向偏轉" : "反向偏轉";
    needle.style.transform = `rotate(${angle}deg)`;
    magnet.style.transform = `translateX(${state.x}px)`;

    if (state.x > 520) {
      state.running = false;
    }
  }

  requestAnimationFrame(animate);
}

poleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.pole = button.dataset.pole;
    poleButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateStatic();
  });
});

speedRange.addEventListener("input", updateStatic);
startButton.addEventListener("click", () => {
  state.running = true;
  state.x = -160;
  state.peak = 0;
  magnet.style.transform = `translateX(${state.x}px)`;
});
resetButton.addEventListener("click", () => {
  state.running = false;
  state.x = -160;
  state.peak = 0;
  directionText.textContent = "尚未產生";
  peakText.textContent = "0.00";
  needle.style.transform = "rotate(0deg)";
  magnet.style.transform = `translateX(${state.x}px)`;
  speedRange.value = 5;
  state.pole = "N";
  poleButtons.forEach((button) => button.classList.toggle("active", button.dataset.pole === "N"));
  updateStatic();
});

updateStatic();
requestAnimationFrame(animate);
