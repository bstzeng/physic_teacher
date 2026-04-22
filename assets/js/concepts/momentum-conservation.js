window.PhysicsSite.initConceptPage();

const massARange = document.querySelector("#momentumMassARange");
const massBRange = document.querySelector("#momentumMassBRange");
const speedARange = document.querySelector("#momentumSpeedARange");
const speedBRange = document.querySelector("#momentumSpeedBRange");
const massAValue = document.querySelector("#momentumMassAValue");
const massBValue = document.querySelector("#momentumMassBValue");
const speedAValue = document.querySelector("#momentumSpeedAValue");
const speedBValue = document.querySelector("#momentumSpeedBValue");
const beforeText = document.querySelector("#momentumBeforeText");
const afterText = document.querySelector("#momentumAfterText");
const tipText = document.querySelector("#momentumTip");
const cartA = document.querySelector("#momentumCartA");
const cartB = document.querySelector("#momentumCartB");
const startButton = document.querySelector("#momentumStart");
const resetButton = document.querySelector("#momentumReset");
const modeButtons = [...document.querySelectorAll("[data-collision]")];

const state = {
  mode: "elastic",
  phase: "idle",
  posA: 70,
  posB: 360,
  vA: 0,
  vB: 0,
};

function computeFinalVelocities(m1, m2, u1, u2) {
  if (state.mode === "inelastic") {
    const v = (m1 * u1 + m2 * u2) / (m1 + m2);
    return { v1: v, v2: v };
  }

  return {
    v1: ((m1 - m2) / (m1 + m2)) * u1 + ((2 * m2) / (m1 + m2)) * u2,
    v2: ((2 * m1) / (m1 + m2)) * u1 + ((m2 - m1) / (m1 + m2)) * u2,
  };
}

function updateReadout() {
  const m1 = Number(massARange.value) / 10;
  const m2 = Number(massBRange.value) / 10;
  const u1 = Number(speedARange.value) / 10;
  const u2 = Number(speedBRange.value) / 10;
  const pBefore = m1 * u1 + m2 * u2;
  const { v1, v2 } = computeFinalVelocities(m1, m2, u1, u2);
  const pAfter = m1 * v1 + m2 * v2;

  massAValue.textContent = m1.toFixed(1);
  massBValue.textContent = m2.toFixed(1);
  speedAValue.textContent = u1.toFixed(1);
  speedBValue.textContent = u2.toFixed(1);
  beforeText.textContent = pBefore.toFixed(2);
  afterText.textContent = pAfter.toFixed(2);
  tipText.textContent =
    state.mode === "elastic"
      ? "彈性碰撞下，速度改變通常更明顯。"
      : "完全非彈性碰撞下，兩車會一起走。";
}

function resetScene() {
  state.phase = "idle";
  state.posA = 70;
  state.posB = 360;
  state.vA = 0;
  state.vB = 0;
  cartA.style.transform = `translateX(${state.posA}px)`;
  cartB.style.transform = `translateX(${state.posB}px)`;
  updateReadout();
}

function animate() {
  if (state.phase === "approach") {
    state.posA += state.vA;
    state.posB += state.vB;

    if (state.posA + 70 >= state.posB) {
      const m1 = Number(massARange.value) / 10;
      const m2 = Number(massBRange.value) / 10;
      const u1 = Number(speedARange.value) / 10;
      const u2 = Number(speedBRange.value) / 10;
      const result = computeFinalVelocities(m1, m2, u1, u2);

      state.vA = result.v1 * 0.8;
      state.vB = result.v2 * 0.8;
      state.phase = "after";
    }
  } else if (state.phase === "after") {
    state.posA += state.vA;
    state.posB += state.vB;

    if (state.posA < 20 || state.posA > 420 || state.posB < 80 || state.posB > 500) {
      state.phase = "idle";
    }
  }

  cartA.style.transform = `translateX(${state.posA}px)`;
  cartB.style.transform = `translateX(${state.posB}px)`;
  requestAnimationFrame(animate);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.collision;
    modeButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateReadout();
  });
});

[massARange, massBRange, speedARange, speedBRange].forEach((input) => {
  input.addEventListener("input", updateReadout);
});

startButton.addEventListener("click", () => {
  resetScene();
  state.phase = "approach";
  state.vA = Number(speedARange.value) / 22;
  state.vB = Number(speedBRange.value) / 22;
});

resetButton.addEventListener("click", () => {
  massARange.value = 20;
  massBRange.value = 30;
  speedARange.value = 40;
  speedBRange.value = -10;
  state.mode = "elastic";
  modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.collision === "elastic"));
  resetScene();
});

resetScene();
requestAnimationFrame(animate);
