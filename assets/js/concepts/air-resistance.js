window.PhysicsSite.initConceptPage();

const areaRange = document.querySelector("#airAreaRange");
const massRange = document.querySelector("#airMassRange");
const parachuteSelect = document.querySelector("#parachuteSelect");
const dropButton = document.querySelector("#airDropButton");
const resetButton = document.querySelector("#airResetButton");
const objectEl = document.querySelector("#airObject");
const parachuteEl = document.querySelector("#airParachute");
const areaValue = document.querySelector("#airAreaValue");
const massValue = document.querySelector("#airMassValue");
const speedText = document.querySelector("#airSpeedText");
const dragText = document.querySelector("#airDragText");
const tipText = document.querySelector("#airTip");

const state = {
  running: false,
  position: 0,
  velocity: 0,
  lastTime: performance.now(),
};

function dragFactor() {
  const area = Number(areaRange.value);
  const mass = Number(massRange.value);
  const openBonus = parachuteSelect.value === "open" ? 1.6 : 0.55;
  return (area * openBonus) / mass;
}

function render() {
  const area = Number(areaRange.value);
  const mass = Number(massRange.value);
  const open = parachuteSelect.value === "open";
  const drag = dragFactor();

  areaValue.textContent = String(area);
  massValue.textContent = String(mass);
  objectEl.style.transform = `translate(-50%, ${state.position}px)`;
  parachuteEl.style.opacity = open ? "1" : "0.15";
  parachuteEl.style.width = `${70 + area * 14}px`;
  parachuteEl.style.height = `${26 + area * 5}px`;
  speedText.textContent = state.velocity.toFixed(1);

  if (drag > 3) {
    dragText.textContent = "很明顯";
    tipText.textContent = "空氣阻力很大，所以落下來變慢了。";
  } else if (drag > 1.6) {
    dragText.textContent = "中等";
    tipText.textContent = "你可以再把面積調大，讓下降更慢。";
  } else {
    dragText.textContent = "較弱";
    tipText.textContent = "阻力比較小，所以物體比較容易快速下落。";
  }
}

function animate(now) {
  const delta = Math.min((now - state.lastTime) / 1000, 0.05);
  state.lastTime = now;

  if (state.running) {
    const gravity = 15;
    const drag = dragFactor() * 2.8;
    state.velocity += (gravity - drag - state.velocity * 0.15) * delta;
    state.position += state.velocity * 18 * delta;

    if (state.position >= 210) {
      state.position = 210;
      state.velocity = 0;
      state.running = false;
    }
  }

  render();
  requestAnimationFrame(animate);
}

dropButton.addEventListener("click", () => {
  state.running = true;
});

resetButton.addEventListener("click", () => {
  state.running = false;
  state.position = 0;
  state.velocity = 0;
  render();
});

[areaRange, massRange, parachuteSelect].forEach((input) =>
  input.addEventListener("input", () => {
    if (!state.running) {
      render();
    }
  })
);

render();
requestAnimationFrame(animate);
