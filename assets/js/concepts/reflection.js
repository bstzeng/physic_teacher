window.PhysicsSite.initConceptPage();

const incidentRange = document.querySelector("#reflectionIncidentRange");
const incidentValue = document.querySelector("#reflectionIncidentValue");
const incidentAngleText = document.querySelector("#incidentAngleText");
const reflectionAngleText = document.querySelector("#reflectionAngleText");
const tipText = document.querySelector("#reflectionTip");
const incidentRay = document.querySelector("#incidentReflectionRay");
const reflectedRay = document.querySelector("#reflectedRay");

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function render() {
  const angle = Number(incidentRange.value);
  const centerX = 300;
  const centerY = 160;
  const length = 150;
  const offsetX = Math.sin(radians(angle)) * length;
  const offsetY = Math.cos(radians(angle)) * length;

  incidentRay.setAttribute("x1", String(centerX - offsetX));
  incidentRay.setAttribute("y1", String(centerY - offsetY));
  incidentRay.setAttribute("x2", String(centerX));
  incidentRay.setAttribute("y2", String(centerY));

  reflectedRay.setAttribute("x1", String(centerX));
  reflectedRay.setAttribute("y1", String(centerY));
  reflectedRay.setAttribute("x2", String(centerX + offsetX));
  reflectedRay.setAttribute("y2", String(centerY - offsetY));

  incidentValue.textContent = String(angle);
  incidentAngleText.textContent = `${angle} 度`;
  reflectionAngleText.textContent = `${angle} 度`;

  if (angle >= 55) {
    tipText.textContent = "角度變大時，反射光也會以同樣大小往另一邊展開。";
  } else {
    tipText.textContent = "注意左右兩側和中線的夾角，一直保持一樣大。";
  }
}

incidentRange.addEventListener("input", render);

render();
