window.PhysicsSite.initConceptPage();

const heightRange = document.querySelector("#energyHeightRange");
const springRange = document.querySelector("#energySpringRange");
const positionRange = document.querySelector("#energyPositionRange");
const heightValue = document.querySelector("#energyHeightValue");
const springValue = document.querySelector("#energySpringValue");
const positionValue = document.querySelector("#energyPositionValue");
const mainText = document.querySelector("#energyMainText");
const stateText = document.querySelector("#energyStateText");
const tipText = document.querySelector("#energyTip");
const ball = document.querySelector("#energyBall");
const potentialBar = document.querySelector("#potentialBar");
const kineticBar = document.querySelector("#kineticBar");
const elasticBar = document.querySelector("#elasticBar");

function render() {
  const height = Number(heightRange.value);
  const spring = Number(springRange.value);
  const position = Number(positionRange.value) / 100;

  const leftSegment = position < 0.7 ? position / 0.7 : 1;
  const springSegment = position > 0.7 ? (position - 0.7) / 0.3 : 0;
  const potential = Math.max(0, (1 - leftSegment) * height * 10);
  const kinetic = Math.max(0, (1 - springSegment) * leftSegment * 90);
  const elastic = Math.max(0, springSegment * spring * 9);
  const total = Math.max(1, potential + kinetic + elastic);
  const ballX = 80 + position * 500;
  const ballY = position < 0.7 ? 70 + position * 120 : 154;

  heightValue.textContent = String(height);
  springValue.textContent = String(spring);
  positionValue.textContent = `${Math.round(position * 100)}`;
  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
  potentialBar.style.width = `${(potential / total) * 100}%`;
  kineticBar.style.width = `${(kinetic / total) * 100}%`;
  elasticBar.style.width = `${(elastic / total) * 100}%`;

  if (potential >= kinetic && potential >= elastic) {
    mainText.textContent = "位能";
    stateText.textContent = "小球在高處";
    tipText.textContent = "現在主要是位能，因為小球還在比較高的位置。";
  } else if (kinetic >= elastic) {
    mainText.textContent = "動能";
    stateText.textContent = "小球正在快速移動";
    tipText.textContent = "小球往下滑時，位能慢慢轉成動能。";
  } else {
    mainText.textContent = "彈性能";
    stateText.textContent = "小球正在壓縮彈簧";
    tipText.textContent = "碰到彈簧後，一部分能量暫時存在彈簧裡。";
  }
}

[heightRange, springRange, positionRange].forEach((input) => input.addEventListener("input", render));

render();
