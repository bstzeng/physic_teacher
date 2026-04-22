window.PhysicsSite.initConceptPage();

const mediumRect = document.querySelector("#mediumRect");
const incidentRay = document.querySelector("#incidentRay");
const refractedRay = document.querySelector("#refractedRay");
const incidentRange = document.querySelector("#incidentRange");
const incidentValue = document.querySelector("#incidentValue");
const refractedValue = document.querySelector("#refractedValue");
const mediumText = document.querySelector("#mediumText");
const refractionTip = document.querySelector("#refractionTip");
const mediumButtons = [...document.querySelectorAll(".medium-button")];

const mediums = {
  water: { label: "水", index: 1.33, color: "#c6ecff" },
  glass: { label: "玻璃", index: 1.52, color: "#d7e3fc" },
  oil: { label: "油", index: 1.47, color: "#ffe8a3" },
};

const state = {
  medium: "water",
};

function updateButtons() {
  mediumButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.medium === state.medium);
  });
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function degrees(radiansValue) {
  return (radiansValue * 180) / Math.PI;
}

function render() {
  const incidentAngle = Number(incidentRange.value);
  const medium = mediums[state.medium];
  const refractedAngle = degrees(Math.asin(Math.sin(radians(incidentAngle)) / medium.index));
  const interfaceX = 300;
  const interfaceY = 160;
  const upperLength = 150;
  const lowerLength = 150;

  const incidentDx = Math.sin(radians(incidentAngle)) * upperLength;
  const incidentDy = Math.cos(radians(incidentAngle)) * upperLength;
  const refractedDx = Math.sin(radians(refractedAngle)) * lowerLength;
  const refractedDy = Math.cos(radians(refractedAngle)) * lowerLength;

  incidentRay.setAttribute("x1", String(interfaceX - incidentDx));
  incidentRay.setAttribute("y1", String(interfaceY - incidentDy));
  incidentRay.setAttribute("x2", String(interfaceX));
  incidentRay.setAttribute("y2", String(interfaceY));
  refractedRay.setAttribute("x1", String(interfaceX));
  refractedRay.setAttribute("y1", String(interfaceY));
  refractedRay.setAttribute("x2", String(interfaceX + refractedDx));
  refractedRay.setAttribute("y2", String(interfaceY + refractedDy));

  mediumRect.setAttribute("fill", medium.color);
  mediumText.textContent = medium.label;
  incidentValue.textContent = String(incidentAngle);
  refractedValue.textContent = `${Math.round(refractedAngle)} 度`;
  updateButtons();

  if (medium.index >= 1.5) {
    refractionTip.textContent = "這種介質會讓光線更靠近中線，所以折得比較明顯。";
  } else {
    refractionTip.textContent = "可以把入射角調大，再比較不同介質的折射角。";
  }
}

incidentRange.addEventListener("input", render);
mediumButtons.forEach((button) =>
  button.addEventListener("click", () => {
    state.medium = button.dataset.medium;
    render();
  })
);

render();
