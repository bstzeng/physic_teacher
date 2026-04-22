window.PhysicsSite.initConceptPage();

const radiusRange = document.querySelector("#circularRadiusRange");
const speedRange = document.querySelector("#circularSpeedRange");
const massRange = document.querySelector("#circularMassRange");
const radiusValue = document.querySelector("#circularRadiusValue");
const speedValue = document.querySelector("#circularSpeedValue");
const massValue = document.querySelector("#circularMassValue");
const forceText = document.querySelector("#circularForceText");
const angularText = document.querySelector("#circularAngularText");
const tipText = document.querySelector("#circularTip");
const orbit = document.querySelector("#circularOrbit");
const ball = document.querySelector("#circularBall");
const forceArrow = document.querySelector("#circularForceArrow");

const state = {
  angle: 0,
};

function updateDisplay() {
  const radius = Number(radiusRange.value) / 10;
  const speed = Number(speedRange.value) / 10;
  const mass = Number(massRange.value) / 10;
  const force = (mass * speed * speed) / radius;
  const orbitSize = radius * 72;

  radiusValue.textContent = radius.toFixed(1);
  speedValue.textContent = speed.toFixed(1);
  massValue.textContent = mass.toFixed(1);
  forceText.textContent = `${force.toFixed(1)} N`;
  angularText.textContent = speed > 5.5 ? "很快" : speed > 3.5 ? "中等" : "偏慢";
  tipText.textContent = force > 25 ? "速度平方的影響開始很明顯了。" : "試著只改速度，看向心力怎麼跳。";

  orbit.style.width = `${orbitSize}px`;
  orbit.style.height = `${orbitSize}px`;
}

function animate() {
  const radius = Number(radiusRange.value) * 2.8;
  const speed = Number(speedRange.value) / 240;
  const x = Math.cos(state.angle) * radius;
  const y = Math.sin(state.angle) * radius;

  state.angle += speed;
  ball.style.transform = `translate(${x}px, ${y}px)`;
  forceArrow.style.transform = `translate(${x * 0.45}px, ${y * 0.45}px) rotate(${Math.atan2(-y, -x) * (180 / Math.PI)}deg)`;
  requestAnimationFrame(animate);
}

radiusRange.addEventListener("input", updateDisplay);
speedRange.addEventListener("input", updateDisplay);
massRange.addEventListener("input", updateDisplay);

updateDisplay();
requestAnimationFrame(animate);
