window.PhysicsSite.initConceptPage();

const angleRange = document.querySelector("#tideAngleRange");
const distanceRange = document.querySelector("#tideDistanceRange");
const angleValue = document.querySelector("#tideAngleValue");
const distanceValue = document.querySelector("#tideDistanceValue");
const playButton = document.querySelector("#tidePlay");
const resetButton = document.querySelector("#tideReset");
const moon = document.querySelector("#tideMoon");
const bulge = document.querySelector("#tideBulge");
const directionText = document.querySelector("#tideDirectionText");
const strengthText = document.querySelector("#tideStrengthText");
const tipText = document.querySelector("#tideTip");

const state = {
  playing: false,
};

function updateScene() {
  const angle = Number(angleRange.value);
  const distance = Number(distanceRange.value);
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;
  const scale = 1 + (240 - distance) / 260;

  angleValue.textContent = `${angle}`;
  distanceValue.textContent = `${distance}`;
  moon.style.transform = `translate(${x}px, ${y}px)`;
  bulge.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scaleX(${scale})`;
  strengthText.textContent = distance < 170 ? "偏強" : distance < 210 ? "中等" : "偏弱";
  tipText.textContent = distance < 170 ? "月球比較近，潮汐影響更明顯。" : "月球比較遠時，潮汐影響會弱一些。";

  if (angle < 45 || angle > 315 || (angle > 135 && angle < 225)) {
    directionText.textContent = "左右兩側";
  } else {
    directionText.textContent = "上下兩側";
  }
}

function animate() {
  if (state.playing) {
    const next = (Number(angleRange.value) + 0.8) % 360;
    angleRange.value = next.toFixed(0);
    updateScene();
  }

  requestAnimationFrame(animate);
}

angleRange.addEventListener("input", updateScene);
distanceRange.addEventListener("input", updateScene);
playButton.addEventListener("click", () => {
  state.playing = !state.playing;
  playButton.textContent = state.playing ? "轉動中" : "轉動月球";
});
resetButton.addEventListener("click", () => {
  state.playing = false;
  playButton.textContent = "轉動月球";
  angleRange.value = 0;
  distanceRange.value = 180;
  updateScene();
});

updateScene();
requestAnimationFrame(animate);
