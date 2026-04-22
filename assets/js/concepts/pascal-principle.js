window.PhysicsSite.initConceptPage();

const forceRange = document.querySelector("#pascalForceRange");
const areaRange = document.querySelector("#pascalAreaRange");
const forceValue = document.querySelector("#pascalForceValue");
const areaValue = document.querySelector("#pascalAreaValue");
const pressureText = document.querySelector("#pascalPressureText");
const outputText = document.querySelector("#pascalOutputText");
const tipText = document.querySelector("#pascalTip");
const leftPiston = document.querySelector("#pascalLeftPiston");
const rightPiston = document.querySelector("#pascalRightPiston");
const load = document.querySelector("#pascalLoad");
const resetButton = document.querySelector("#pascalReset");

function updateScene() {
  const force = Number(forceRange.value);
  const area = Number(areaRange.value);
  const pressure = force;
  const outputForce = pressure * area;
  const leftDrop = Math.min(62, force * 0.5);
  const rightLift = Math.min(72, outputForce * 0.08);

  forceValue.textContent = `${force}`;
  areaValue.textContent = `${area}`;
  pressureText.textContent = `${pressure.toFixed(0)} Pa`;
  outputText.textContent = `${outputForce.toFixed(0)} N`;
  tipText.textContent = outputForce > 200 ? "右邊放大的力很明顯。" : "面積差越大，放大效果越明顯。";

  leftPiston.style.transform = `translateX(-50%) translateY(${leftDrop}px)`;
  rightPiston.style.transform = `translateX(-50%) translateY(${-rightLift}px)`;
  load.style.transform = `translateY(${-rightLift}px)`;
  rightPiston.style.width = `${78 + area * 18}px`;
}

forceRange.addEventListener("input", updateScene);
areaRange.addEventListener("input", updateScene);
resetButton.addEventListener("click", () => {
  forceRange.value = 30;
  areaRange.value = 4;
  updateScene();
});

updateScene();
