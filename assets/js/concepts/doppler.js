window.PhysicsSite.initConceptPage();

const speedRange = document.querySelector("#dopplerSpeedRange");
const speedValue = document.querySelector("#dopplerSpeedValue");
const baseText = document.querySelector("#dopplerBaseText");
const heardText = document.querySelector("#dopplerHeardText");
const tipText = document.querySelector("#dopplerTip");
const directionButtons = [...document.querySelectorAll("[data-direction]")];
const playButton = document.querySelector("#dopplerPlay");
const resetButton = document.querySelector("#dopplerReset");
const car = document.querySelector("#dopplerCar");
const waves = [
  document.querySelector("#dopplerWave1"),
  document.querySelector("#dopplerWave2"),
  document.querySelector("#dopplerWave3"),
  document.querySelector("#dopplerWave4"),
  document.querySelector("#dopplerWave5"),
];

const state = {
  direction: "approach",
  playing: false,
  tick: 0,
  baseX: 0,
};

function updateScene() {
  const speed = Number(speedRange.value);
  const heard =
    state.direction === "approach"
      ? 700 * (343 / (343 - speed * 0.4))
      : 700 * (343 / (343 + speed * 0.4));
  const carX = state.direction === "approach" ? 360 - speed * 1.2 : 220 + speed * 1.1;
  const tightness = state.direction === "approach" ? 0.7 : 1.3;

  speedValue.textContent = `${speed}`;
  baseText.textContent = "700 Hz";
  heardText.textContent = `${heard.toFixed(0)} Hz`;
  tipText.textContent = state.direction === "approach" ? "靠近時音調會升高。" : "遠離時音調會降低。";
  state.baseX = carX;
  car.style.transform = `translateX(${carX}px)`;

  waves.forEach((wave, index) => {
    const scale = 0.6 + index * 0.26 * tightness;
    wave.style.transform = `translateX(${carX - 10}px) scale(${scale})`;
    wave.style.opacity = `${0.65 - index * 0.1}`;
  });
}

function animate() {
  if (state.playing) {
    state.tick += 0.06;
    const shift = Math.sin(state.tick) * 18;
    car.style.transform = `translateX(${state.baseX + shift}px)`;
  } else {
    car.style.transform = `translateX(${state.baseX}px)`;
  }

  requestAnimationFrame(animate);
}

directionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.direction = button.dataset.direction;
    directionButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateScene();
  });
});

speedRange.addEventListener("input", updateScene);
playButton.addEventListener("click", () => {
  state.playing = !state.playing;
  playButton.textContent = state.playing ? "播放中" : "播放";
});
resetButton.addEventListener("click", () => {
  state.playing = false;
  playButton.textContent = "播放";
  speedRange.value = 40;
  state.direction = "approach";
  directionButtons.forEach((button) => button.classList.toggle("active", button.dataset.direction === "approach"));
  updateScene();
});

updateScene();
requestAnimationFrame(animate);
