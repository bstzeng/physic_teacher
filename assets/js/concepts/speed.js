window.PhysicsSite.initConceptPage();

const runner = document.querySelector("#runner");
const speedRange = document.querySelector("#speedRange");
const timeRange = document.querySelector("#timeRange");
const speedRangeValue = document.querySelector("#speedRangeValue");
const timeRangeValue = document.querySelector("#timeRangeValue");
const elapsedText = document.querySelector("#elapsedText");
const travelText = document.querySelector("#travelText");
const speedTip = document.querySelector("#speedTip");
const runButton = document.querySelector("#runButton");
const resetButton = document.querySelector("#resetSpeed");

const state = {
  running: false,
  elapsed: 0,
  position: 24,
  startTime: 0,
};

function getTrackLimit() {
  const stageWidth = runner.parentElement.clientWidth;
  return Math.max(24, stageWidth - runner.offsetWidth - 32);
}

function render() {
  const duration = Number(timeRange.value);
  const distanceMeters = Math.round((state.position - 24) * 0.32);

  runner.style.transform = `translateX(${state.position}px)`;
  speedRangeValue.textContent = speedRange.value;
  timeRangeValue.textContent = timeRange.value;
  elapsedText.textContent = `${state.elapsed.toFixed(1)} 秒`;
  travelText.textContent = `${Math.max(0, distanceMeters)} 公尺`;

  if (state.running) {
    speedTip.textContent = "正在觀察中，注意速度快時距離增加得比較快。";
  } else if (state.elapsed >= duration) {
    speedTip.textContent = "時間到。試著只改速度，再跑一次比較。";
  } else {
    speedTip.textContent = "同樣的時間裡，速度越大，跑得越遠。";
  }
}

function animate(now) {
  if (state.running) {
    if (!state.startTime) {
      state.startTime = now;
    }

    const duration = Number(timeRange.value);
    const speed = Number(speedRange.value);
    state.elapsed = Math.min(duration, (now - state.startTime) / 1000);

    const progress = state.elapsed / duration;
    const travelDistance = speed * duration * 12;
    const trackLimit = getTrackLimit();
    state.position = Math.min(trackLimit, 24 + travelDistance * progress);

    if (state.elapsed >= duration) {
      state.running = false;
    }

    render();
  }

  requestAnimationFrame(animate);
}

runButton.addEventListener("click", () => {
  state.running = true;
  state.elapsed = 0;
  state.position = 24;
  state.startTime = 0;
  render();
});

resetButton.addEventListener("click", () => {
  state.running = false;
  state.elapsed = 0;
  state.position = 24;
  state.startTime = 0;
  render();
});

[speedRange, timeRange].forEach((input) =>
  input.addEventListener("input", () => {
    if (!state.running) {
      render();
    }
  })
);

window.addEventListener("resize", render);

render();
requestAnimationFrame(animate);
