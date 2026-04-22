window.PhysicsSite.initConceptPage();

const angleRange = document.querySelector("#projectileAngleRange");
const speedRange = document.querySelector("#projectileSpeedRange");
const angleValue = document.querySelector("#projectileAngleValue");
const speedValue = document.querySelector("#projectileSpeedValue");
const launchButton = document.querySelector("#projectileLaunch");
const resetButton = document.querySelector("#projectileReset");
const pathEl = document.querySelector("#projectilePath");
const ball = document.querySelector("#projectileBall");
const rangeText = document.querySelector("#projectileRangeText");
const heightText = document.querySelector("#projectileHeightText");
const timeText = document.querySelector("#projectileTimeText");

const state = {
  playing: false,
  t: 0,
  flightTime: 0,
  points: [],
};

function buildPath() {
  const angle = (Number(angleRange.value) * Math.PI) / 180;
  const speed = Number(speedRange.value);
  const vx = speed * Math.cos(angle);
  const vy = speed * Math.sin(angle);
  const flightTime = (2 * vy) / 9.8;
  const range = vx * flightTime;
  const maxHeight = (vy * vy) / (2 * 9.8);
  const points = [];

  for (let t = 0; t <= flightTime; t += flightTime / 26) {
    const x = vx * t;
    const y = vy * t - 4.9 * t * t;
    const px = 80 + (x / Math.max(range, 1)) * 500;
    const py = 280 - (y / Math.max(maxHeight, 1)) * 180;
    points.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  state.flightTime = flightTime;
  state.points = points;
  rangeText.textContent = `${range.toFixed(1)} m`;
  heightText.textContent = `${maxHeight.toFixed(1)} m`;
  timeText.textContent = `${flightTime.toFixed(1)} s`;
  angleValue.textContent = angleRange.value;
  speedValue.textContent = speedRange.value;
  pathEl.setAttribute("points", points.join(" "));
  ball.setAttribute("cx", "80");
  ball.setAttribute("cy", "280");
}

function animate() {
  if (state.playing) {
    state.t += 0.02;
    const progress = Math.min(1, state.t / Math.max(state.flightTime, 0.1));
    const index = Math.min(state.points.length - 1, Math.floor(progress * (state.points.length - 1)));
    const [x, y] = state.points[index].split(",");
    ball.setAttribute("cx", x);
    ball.setAttribute("cy", y);

    if (progress >= 1) {
      state.playing = false;
    }
  }

  requestAnimationFrame(animate);
}

angleRange.addEventListener("input", buildPath);
speedRange.addEventListener("input", buildPath);
launchButton.addEventListener("click", () => {
  state.playing = false;
  state.t = 0;
  buildPath();
  state.playing = true;
});
resetButton.addEventListener("click", () => {
  state.playing = false;
  state.t = 0;
  angleRange.value = 45;
  speedRange.value = 20;
  buildPath();
});

buildPath();
requestAnimationFrame(animate);
