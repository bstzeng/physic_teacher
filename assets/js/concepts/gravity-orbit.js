window.PhysicsSite.initConceptPage();

const radiusRange = document.querySelector("#orbitRadiusRange");
const speedRange = document.querySelector("#orbitSpeedRange");
const massRange = document.querySelector("#orbitMassRange");
const radiusValue = document.querySelector("#orbitRadiusValue");
const speedValue = document.querySelector("#orbitSpeedValue");
const massValue = document.querySelector("#orbitMassValue");
const targetText = document.querySelector("#orbitTargetText");
const escapeText = document.querySelector("#orbitEscapeText");
const stateText = document.querySelector("#orbitStateText");
const satellite = document.querySelector("#orbitSatellite");
const ring = document.querySelector("#orbitRing");
const pauseButton = document.querySelector("#orbitPause");
const resetButton = document.querySelector("#orbitReset");

const orbitState = {
  angle: 0,
  currentRadius: 170,
  paused: false,
};

function orbitValues() {
  const radius = Number(radiusRange.value);
  const speed = Number(speedRange.value) / 10;
  const mass = Number(massRange.value) / 10;
  const circular = Math.sqrt((mass * 18) / radius) * 10;
  const escape = circular * Math.sqrt(2);
  return { radius, speed, mass, circular, escape };
}

function updateOrbitReadout() {
  const { radius, speed, mass, circular, escape } = orbitValues();
  let state = "接近圓形軌道";

  if (speed < circular * 0.9) {
    state = "速度偏小，軌道向內掉";
  } else if (speed > escape) {
    state = "速度很大，可能脫離軌道";
  } else if (speed > circular * 1.08) {
    state = "速度偏快，軌道拉長";
  }

  radiusValue.textContent = String(radius);
  speedValue.textContent = speed.toFixed(1);
  massValue.textContent = mass.toFixed(1);
  targetText.textContent = circular.toFixed(1);
  escapeText.textContent = escape.toFixed(1);
  stateText.textContent = state;
  ring.style.width = `${radius}px`;
  ring.style.height = `${radius}px`;
}

function placeSatellite() {
  const { radius, speed, circular, escape } = orbitValues();
  const ratio = speed / circular;

  if (ratio < 0.9) {
    orbitState.currentRadius = Math.max(62, orbitState.currentRadius - (0.35 + (0.9 - ratio) * 0.8));
  } else if (speed > escape) {
    orbitState.currentRadius = Math.min(245, orbitState.currentRadius + 0.9);
  } else {
    orbitState.currentRadius += (radius - orbitState.currentRadius) * 0.02;
  }

  const angularSpeed = (speed / orbitState.currentRadius) * 0.045;
  orbitState.angle += angularSpeed;

  const x = Math.cos(orbitState.angle) * orbitState.currentRadius * 0.5;
  const y = Math.sin(orbitState.angle) * orbitState.currentRadius * 0.5;
  satellite.style.left = `calc(50% + ${x}px)`;
  satellite.style.top = `calc(50% + ${y}px)`;
}

function animateOrbit() {
  if (!orbitState.paused) {
    placeSatellite();
  }

  requestAnimationFrame(animateOrbit);
}

function resetOrbit() {
  radiusRange.value = 170;
  speedRange.value = 80;
  massRange.value = 60;
  orbitState.angle = 0;
  orbitState.currentRadius = 170;
  orbitState.paused = false;
  updateOrbitReadout();
}

[radiusRange, speedRange, massRange].forEach((input) => {
  input.addEventListener("input", updateOrbitReadout);
});

pauseButton.addEventListener("click", () => {
  orbitState.paused = !orbitState.paused;
});

resetButton.addEventListener("click", resetOrbit);

resetOrbit();
requestAnimationFrame(animateOrbit);
