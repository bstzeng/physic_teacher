window.PhysicsSite.initConceptPage();

const blackbodyTempRange = document.querySelector("#blackbodyTempRange");
const blackbodyObject = document.querySelector("#blackbodyObject");
const blackbodyFill = document.querySelector("#blackbodyFill");

function blackbodyColor(temp) {
  if (temp < 1800) return { color: "#7f5539", label: "暗紅色" };
  if (temp < 3200) return { color: "#f77f00", label: "紅橙色" };
  if (temp < 5500) return { color: "#ffd166", label: "黃白色" };
  return { color: "#dfe7fd", label: "白藍色" };
}

function updateBlackbody() {
  const temp = Number(blackbodyTempRange.value);
  const peak = 2898000 / temp;
  const color = blackbodyColor(temp);
  const intensity = Math.min(1, temp / 9000);

  document.querySelector("#blackbodyTempValue").textContent = String(temp);
  document.querySelector("#blackbodyPeakText").textContent = peak.toFixed(0);
  document.querySelector("#blackbodyColorText").textContent = color.label;
  document.querySelector("#blackbodyPowerText").textContent = intensity < 0.3 ? "偏弱" : intensity < 0.7 ? "中等" : "很強";
  blackbodyObject.style.background = color.color;
  blackbodyObject.style.boxShadow = `0 0 ${26 + intensity * 44}px ${color.color}`;
  blackbodyFill.style.width = `${intensity * 100}%`;
}

blackbodyTempRange.addEventListener("input", updateBlackbody);
updateBlackbody();
