window.PhysicsSite.initConceptPage();

const box = document.querySelector("#forceBox");
const arrow = document.querySelector("#forceArrow");
const forceRange = document.querySelector("#forceRange");
const massRange = document.querySelector("#massRange");
const forceValue = document.querySelector("#forceValue");
const massValue = document.querySelector("#massValue");
const speedText = document.querySelector("#speedText");
const directionText = document.querySelector("#directionText");
const forceTip = document.querySelector("#forceTip");
const pushButton = document.querySelector("#pushButton");
const pullButton = document.querySelector("#pullButton");
const resetButton = document.querySelector("#resetForce");

const state = {
  position: 36,
  velocity: 0,
  lastTime: performance.now(),
};

const minPosition = 0;

function getMaxPosition() {
  const stageWidth = box.parentElement.clientWidth;
  return Math.max(0, stageWidth - box.offsetWidth - 48);
}

function updateLabels() {
  forceValue.textContent = forceRange.value;
  massValue.textContent = massRange.value;
}

function setTip() {
  if (Math.abs(state.velocity) < 0.08) {
    directionText.textContent = "暫停中";
    forceTip.textContent = "箱子現在幾乎停下來了。";
    return;
  }

  const movingRight = state.velocity > 0;
  directionText.textContent = movingRight ? "往右" : "往左";
  forceTip.textContent = movingRight
    ? "箱子被往右推，正在前進。"
    : "箱子被往左拉，正在前進。";
}

function render() {
  box.style.transform = `translateX(${state.position}px)`;
  speedText.textContent = Math.abs(state.velocity).toFixed(1);
  const arrowDirection = state.velocity >= 0 ? "推" : "拉";
  arrow.textContent = arrowDirection;
  arrow.style.transform = `translateX(${state.position}px)`;
  arrow.style.background =
    state.velocity >= 0
      ? "linear-gradient(135deg, #00a6a6, #007f7b)"
      : "linear-gradient(135deg, #f18f01, #d97706)";
  setTip();
}

function applyForce(direction) {
  const force = Number(forceRange.value);
  const mass = Number(massRange.value);
  const impulse = (force / mass) * 2.8 * direction;
  state.velocity += impulse;
  render();
}

function animate(now) {
  const delta = Math.min((now - state.lastTime) / 16.67, 2);
  state.lastTime = now;
  const maxPosition = getMaxPosition();

  state.position += state.velocity * delta;
  state.velocity *= 0.96 ** delta;

  if (state.position < minPosition) {
    state.position = minPosition;
    state.velocity = Math.abs(state.velocity) * 0.3;
  }

  if (state.position > maxPosition) {
    state.position = maxPosition;
    state.velocity = -Math.abs(state.velocity) * 0.3;
  }

  if (Math.abs(state.velocity) < 0.03) {
    state.velocity = 0;
  }

  render();
  requestAnimationFrame(animate);
}

forceRange.addEventListener("input", updateLabels);
massRange.addEventListener("input", updateLabels);
pushButton.addEventListener("click", () => applyForce(1));
pullButton.addEventListener("click", () => applyForce(-1));
resetButton.addEventListener("click", () => {
  state.position = 36;
  state.velocity = 0;
  render();
});

window.addEventListener("resize", () => {
  state.position = Math.min(state.position, getMaxPosition());
  render();
});

updateLabels();
render();
requestAnimationFrame(animate);
