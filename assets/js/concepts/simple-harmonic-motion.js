window.PhysicsSite.initConceptPage();

const amplitudeRange = document.querySelector("#shmAmplitudeRange");
const kRange = document.querySelector("#shmKRange");
const amplitudeValue = document.querySelector("#shmAmplitudeValue");
const kValue = document.querySelector("#shmKValue");
const displacementText = document.querySelector("#shmDisplacementText");
const velocityText = document.querySelector("#shmVelocityText");
const periodText = document.querySelector("#shmPeriodText");
const playButton = document.querySelector("#shmPlay");
const pauseButton = document.querySelector("#shmPause");
const resetButton = document.querySelector("#shmReset");
const spring = document.querySelector("#shmSpring");
const mass = document.querySelector("#shmMass");

const state = {
  playing: true,
  t: 0,
};

function updateReadout(x) {
  const amplitude = Number(amplitudeRange.value);
  const k = Number(kRange.value);

  amplitudeValue.textContent = amplitudeRange.value;
  kValue.textContent = kRange.value;
  displacementText.textContent = x.toFixed(1);
  velocityText.textContent = Math.abs(x) < amplitude * 0.3 ? "平衡位置附近最大" : "接近端點時變小";
  periodText.textContent = k >= 7 ? "偏短" : k >= 4 ? "中等" : "偏長";
}

function animate() {
  const amplitude = Number(amplitudeRange.value) * 12;
  const k = Number(kRange.value);
  const omega = 0.015 * (k + 2);

  if (state.playing) {
    state.t += 1;
  }

  const x = Math.cos(state.t * omega) * amplitude;
  mass.style.transform = `translateX(${x}px)`;
  spring.style.width = `${118 + x}px`;
  updateReadout(x / 12);
  requestAnimationFrame(animate);
}

playButton.addEventListener("click", () => {
  state.playing = true;
});
pauseButton.addEventListener("click", () => {
  state.playing = false;
});
resetButton.addEventListener("click", () => {
  amplitudeRange.value = 6;
  kRange.value = 5;
  state.t = 0;
  state.playing = true;
});

requestAnimationFrame(animate);
