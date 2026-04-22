window.PhysicsSite.initConceptPage();

const ball = document.querySelector("#bounceBall");
const speedRange = document.querySelector("#bounceSpeedRange");
const speedValue = document.querySelector("#bounceSpeedValue");
const startButton = document.querySelector("#bounceStart");
const resetButton = document.querySelector("#bounceReset");
const materialButtons = [...document.querySelectorAll("[data-material]")];
const heightText = document.querySelector("#bounceHeightText");
const countText = document.querySelector("#bounceCountText");
const tipText = document.querySelector("#bounceTip");

const materialMap = {
  rubber: { restitution: 0.78, color: "linear-gradient(180deg, #ef476f, #d62839)", label: "橡膠球彈得比較高。" },
  steel: { restitution: 0.52, color: "linear-gradient(180deg, #90a4ae, #607d8b)", label: "金屬球會彈，但不如橡膠球。" },
  clay: { restitution: 0.16, color: "linear-gradient(180deg, #c08552, #8d5524)", label: "黏土球很快就停下來。" },
};

const state = {
  material: "rubber",
  y: 24,
  vy: 0,
  bounces: 0,
  highestBounce: 0,
  running: false,
  lastTime: performance.now(),
};

function render() {
  ball.style.transform = `translateY(${state.y}px)`;
  ball.style.background = materialMap[state.material].color;
  countText.textContent = `${state.bounces} 次`;
  heightText.textContent = `${Math.round(state.highestBounce)} 公分`;
  tipText.textContent = materialMap[state.material].label;
  speedValue.textContent = speedRange.value;
}

function resetMotion() {
  state.y = 24;
  state.vy = 0;
  state.bounces = 0;
  state.highestBounce = 0;
  state.running = false;
  render();
}

function animate(now) {
  const dt = Math.min((now - state.lastTime) / 16.67, 2);
  state.lastTime = now;

  if (state.running) {
    state.vy += 0.65 * dt;
    state.y += state.vy * dt;

    if (state.y >= 222) {
      state.y = 222;
      state.vy = -Math.abs(state.vy) * materialMap[state.material].restitution;
      state.bounces += 1;
      state.highestBounce = Math.max(state.highestBounce, Math.abs(state.vy) * 7.5);

      if (Math.abs(state.vy) < 1.6) {
        state.vy = 0;
        state.running = false;
      }
    }
  }

  render();
  requestAnimationFrame(animate);
}

materialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.material = button.dataset.material;
    materialButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

speedRange.addEventListener("input", render);
startButton.addEventListener("click", () => {
  resetMotion();
  state.running = true;
  state.vy = Number(speedRange.value) * 0.6;
});
resetButton.addEventListener("click", resetMotion);

render();
requestAnimationFrame(animate);
