window.PhysicsSite.initConceptPage();

const relativitySpeedRange = document.querySelector("#relativitySpeedRange");
const relativityShip = document.querySelector("#relativityShip");
const relativityHand = document.querySelector("#relativityHand");

const relativityState = { angle: 0 };

function updateRelativity() {
  const beta = Number(relativitySpeedRange.value) / 100;
  const gamma = 1 / Math.sqrt(Math.max(0.01, 1 - beta * beta));
  const contraction = 1 / gamma;

  document.querySelector("#relativitySpeedValue").textContent = beta.toFixed(2);
  document.querySelector("#relativityGammaText").textContent = gamma.toFixed(2);
  document.querySelector("#relativityLengthText").textContent = `${(contraction * 100).toFixed(1)}%`;
  document.querySelector("#relativityClockText").textContent = gamma < 1.2 ? "稍慢" : gamma < 2 ? "明顯變慢" : "非常慢";
  relativityShip.style.width = `${180 * contraction}px`;
}

function animateRelativity() {
  const beta = Number(relativitySpeedRange.value) / 100;
  const gamma = 1 / Math.sqrt(Math.max(0.01, 1 - beta * beta));
  relativityState.angle += 0.06 / gamma;
  relativityHand.style.transform = `rotate(${(relativityState.angle * 180) / Math.PI}deg)`;
  requestAnimationFrame(animateRelativity);
}

relativitySpeedRange.addEventListener("input", updateRelativity);
updateRelativity();
requestAnimationFrame(animateRelativity);
