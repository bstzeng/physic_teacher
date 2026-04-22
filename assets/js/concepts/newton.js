window.PhysicsSite.initConceptPage();

const cart = document.querySelector("#newtonCart");
const arrow = document.querySelector("#newtonArrow");
const forceRange = document.querySelector("#newtonForceRange");
const massRange = document.querySelector("#newtonMassRange");
const forceValue = document.querySelector("#newtonForceValue");
const massValue = document.querySelector("#newtonMassValue");
const accelerationText = document.querySelector("#accelerationText");
const speedText = document.querySelector("#newtonSpeedText");
const tipText = document.querySelector("#newtonTip");
const startButton = document.querySelector("#newtonStart");
const resetButton = document.querySelector("#newtonReset");

const state = {
  running: false,
  position: 30,
  velocity: 0,
  lastTime: performance.now(),
};

function getAcceleration() {
  return Number(forceRange.value) / Number(massRange.value);
}

function getTrackLimit() {
  const stageWidth = cart.parentElement.clientWidth;
  return Math.max(30, stageWidth - cart.offsetWidth - 40);
}

function render() {
  const acceleration = getAcceleration();
  cart.style.transform = `translateX(${state.position}px)`;
  cart.style.width = `${92 + Number(massRange.value) * 6}px`;
  arrow.style.transform = `translateX(${Math.max(10, state.position - 10)}px) scaleX(${0.8 + Number(forceRange.value) * 0.08})`;
  forceValue.textContent = forceRange.value;
  massValue.textContent = massRange.value;
  accelerationText.textContent = acceleration.toFixed(2);
  speedText.textContent = state.velocity.toFixed(1);

  if (state.running) {
    tipText.textContent = "正在持續施力，小車速度會越來越快。";
  } else if (state.velocity > 0.1) {
    tipText.textContent = "停止施力後，小車不再加速，但還保有原本的速度。";
  } else {
    tipText.textContent = "可以先固定一個量，只改另一個量來比較加速度。";
  }
}

function animate(now) {
  const delta = Math.min((now - state.lastTime) / 1000, 0.05);
  state.lastTime = now;

  if (state.running) {
    state.velocity += getAcceleration() * 1.6 * delta;
  }

  state.position += state.velocity * 22 * delta;

  if (state.position >= getTrackLimit()) {
    state.position = getTrackLimit();
    state.running = false;
    state.velocity *= 0.15;
  }

  if (!state.running && state.velocity > 0) {
    state.velocity *= 0.992;
    if (state.velocity < 0.05) {
      state.velocity = 0;
    }
  }

  render();
  requestAnimationFrame(animate);
}

startButton.addEventListener("click", () => {
  state.running = !state.running;
  startButton.textContent = state.running ? "停止推進" : "開始推進";
  render();
});

resetButton.addEventListener("click", () => {
  state.running = false;
  state.position = 30;
  state.velocity = 0;
  startButton.textContent = "開始推進";
  render();
});

[forceRange, massRange].forEach((input) =>
  input.addEventListener("input", () => {
    render();
  })
);

window.addEventListener("resize", () => {
  state.position = Math.min(state.position, getTrackLimit());
  render();
});

render();
requestAnimationFrame(animate);
