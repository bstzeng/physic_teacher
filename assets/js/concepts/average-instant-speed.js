window.PhysicsSite.initConceptPage();

const timeRange = document.querySelector("#speedMomentRange");
const timeValue = document.querySelector("#speedMomentValue");
const playButton = document.querySelector("#speedPlay");
const pauseButton = document.querySelector("#speedPause");
const resetButton = document.querySelector("#speedReset");
const runner = document.querySelector("#speedRunner");
const trail = document.querySelector("#speedTrail");
const distanceText = document.querySelector("#speedDistanceText");
const averageText = document.querySelector("#averageSpeedText");
const instantText = document.querySelector("#instantSpeedText");

const state = {
  playing: false,
};

function getDistance(time) {
  return Math.min(200, 0.35 * time * time + 3.5 * time);
}

function getInstantSpeed(time) {
  return 0.7 * time + 3.5;
}

function updateScene() {
  const time = Number(timeRange.value);
  const distance = getDistance(time);
  const average = time > 0 ? distance / time : 0;
  const instant = getInstantSpeed(time);
  const progress = distance / 200;
  const x = 34 + progress * 520;

  timeValue.textContent = `${time.toFixed(1)} 秒`;
  distanceText.textContent = `${distance.toFixed(1)} 公尺`;
  averageText.textContent = `${average.toFixed(1)} m/s`;
  instantText.textContent = `${instant.toFixed(1)} m/s`;
  runner.style.transform = `translateX(${x}px)`;
  trail.style.width = `${Math.max(0, x - 34)}px`;
}

function animate() {
  if (state.playing) {
    const next = Math.min(20, Number(timeRange.value) + 0.08);
    timeRange.value = next.toFixed(1);
    updateScene();

    if (next >= 20) {
      state.playing = false;
    }
  }

  requestAnimationFrame(animate);
}

timeRange.addEventListener("input", updateScene);
playButton.addEventListener("click", () => {
  state.playing = true;
});
pauseButton.addEventListener("click", () => {
  state.playing = false;
});
resetButton.addEventListener("click", () => {
  state.playing = false;
  timeRange.value = 10;
  updateScene();
});

updateScene();
requestAnimationFrame(animate);
