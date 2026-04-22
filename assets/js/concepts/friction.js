window.PhysicsSite.initConceptPage();

const stage = document.querySelector("#frictionStage");
const cart = document.querySelector("#frictionCart");
const launchRange = document.querySelector("#launchRange");
const launchValue = document.querySelector("#launchValue");
const launchButton = document.querySelector("#launchButton");
const resetButton = document.querySelector("#resetFriction");
const speedText = document.querySelector("#frictionSpeedText");
const distanceText = document.querySelector("#distanceText");
const tipText = document.querySelector("#frictionTip");
const surfaceName = document.querySelector("#surfaceName");
const surfaceButtons = [...document.querySelectorAll(".surface-button")];

const surfaces = {
  ice: { label: "冰面", drag: 0.988 },
  wood: { label: "木板", drag: 0.954 },
  carpet: { label: "地毯", drag: 0.9 },
};

const state = {
  surface: "ice",
  position: 24,
  velocity: 0,
  lastTime: performance.now(),
};

function getMaxPosition() {
  const stageWidth = cart.parentElement.clientWidth;
  return Math.max(0, stageWidth - cart.offsetWidth - 40);
}

function updateSurface() {
  const { label } = surfaces[state.surface];
  surfaceName.textContent = label;
  stage.classList.remove("ice", "wood", "carpet");
  stage.classList.add(state.surface);

  surfaceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.surface === state.surface);
  });
}

function render() {
  cart.style.transform = `translateX(${state.position}px)`;
  speedText.textContent = Math.abs(state.velocity).toFixed(1);
  distanceText.textContent = `${Math.max(0, Math.round((state.position - 24) * 1.8))} 公分`;

  if (state.velocity === 0) {
    tipText.textContent = "摩擦力會讓小車慢慢停下來。";
  } else if (state.surface === "ice") {
    tipText.textContent = "冰面摩擦力小，小車比較不容易停。";
  } else if (state.surface === "carpet") {
    tipText.textContent = "地毯摩擦力大，小車很快就慢下來。";
  } else {
    tipText.textContent = "木板介於中間，小車會滑一段距離再停。";
  }
}

function launchCart() {
  state.velocity = Number(launchRange.value) * 1.6;
  render();
}

function animate(now) {
  const delta = Math.min((now - state.lastTime) / 16.67, 2);
  state.lastTime = now;
  const maxPosition = getMaxPosition();

  state.position += state.velocity * delta;
  state.velocity *= surfaces[state.surface].drag ** delta;

  if (state.position > maxPosition) {
    state.position = maxPosition;
    state.velocity = 0;
  }

  if (Math.abs(state.velocity) < 0.05) {
    state.velocity = 0;
  }

  render();
  requestAnimationFrame(animate);
}

launchRange.addEventListener("input", () => {
  launchValue.textContent = launchRange.value;
});

surfaceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.surface = button.dataset.surface;
    updateSurface();
    render();
  });
});

launchButton.addEventListener("click", launchCart);
resetButton.addEventListener("click", () => {
  state.position = 24;
  state.velocity = 0;
  render();
});

window.addEventListener("resize", () => {
  state.position = Math.min(state.position, getMaxPosition());
  render();
});

launchValue.textContent = launchRange.value;
updateSurface();
render();
requestAnimationFrame(animate);
