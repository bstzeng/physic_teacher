window.PhysicsSite.initConceptPage();

const lengthRange = document.querySelector("#pendulumLengthRange");
const angleRange = document.querySelector("#pendulumAngleRange");
const lengthValue = document.querySelector("#pendulumLengthValue");
const angleValue = document.querySelector("#pendulumAngleValue");
const periodText = document.querySelector("#pendulumPeriodText");
const frequencyText = document.querySelector("#pendulumFrequencyText");
const tipText = document.querySelector("#pendulumTip");
const rod = document.querySelector("#pendulumRod");
const bob = document.querySelector("#pendulumBob");
const playButton = document.querySelector("#pendulumPlay");
const pauseButton = document.querySelector("#pendulumPause");
const resetButton = document.querySelector("#pendulumReset");

const state = {
  playing: true,
  t: 0,
};

function updatePendulum() {
  const length = Number(lengthRange.value) / 10;
  const maxAngle = Number(angleRange.value);
  const period = 2 * Math.PI * Math.sqrt(length / 9.8);
  const frequency = 1 / period;
  const theta = Math.cos(state.t / period) * maxAngle;
  const rodLength = 84 + length * 85;

  lengthValue.textContent = length.toFixed(1);
  angleValue.textContent = `${maxAngle}`;
  periodText.textContent = `${period.toFixed(2)} s`;
  frequencyText.textContent = `${frequency.toFixed(2)} Hz`;
  tipText.textContent = length > 1.3 ? "擺長拉長後，來回一次會更慢。" : "試著固定擺長，只改角度再看週期差異。";

  rod.style.height = `${rodLength}px`;
  rod.style.transform = `rotate(${theta}deg)`;
  bob.style.transform = `rotate(${theta}deg) translateY(${rodLength}px)`;
}

function animate() {
  if (state.playing) {
    state.t += 0.03;
  }

  updatePendulum();
  requestAnimationFrame(animate);
}

lengthRange.addEventListener("input", updatePendulum);
angleRange.addEventListener("input", updatePendulum);
playButton.addEventListener("click", () => {
  state.playing = true;
});
pauseButton.addEventListener("click", () => {
  state.playing = false;
});
resetButton.addEventListener("click", () => {
  lengthRange.value = 12;
  angleRange.value = 14;
  state.t = 0;
  state.playing = true;
});

requestAnimationFrame(animate);
