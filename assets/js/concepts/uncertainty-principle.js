window.PhysicsSite.initConceptPage();

const uncertaintyWidthRange = document.querySelector("#uncertaintyWidthRange");
const positionWindow = document.querySelector("#positionWindow");
const momentumSpread = document.querySelector("#momentumSpread");

function updateUncertainty() {
  const width = Number(uncertaintyWidthRange.value);
  const momentumUncertainty = 100 / width;

  document.querySelector("#uncertaintyWidthValue").textContent = String(width);
  document.querySelector("#uncertaintyPosText").textContent = String(width);
  document.querySelector("#uncertaintyMomText").textContent = momentumUncertainty.toFixed(2);
  document.querySelector("#uncertaintyTipText").textContent = width < 40 ? "位置非常精準，動量散布很大" : width < 80 ? "兩者都在拉扯" : "位置較寬，動量較集中";
  positionWindow.style.width = `${width * 2.2}px`;
  momentumSpread.style.width = `${Math.min(88, momentumUncertainty * 12)}%`;
}

uncertaintyWidthRange.addEventListener("input", updateUncertainty);
updateUncertainty();
