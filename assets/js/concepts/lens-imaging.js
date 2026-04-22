window.PhysicsSite.initConceptPage();

const objectRange = document.querySelector("#lensObjectRange");
const focalRange = document.querySelector("#lensFocalRange");
const objectValue = document.querySelector("#lensObjectValue");
const focalValue = document.querySelector("#lensFocalValue");
const imageDistance = document.querySelector("#lensImageDistance");
const imageType = document.querySelector("#lensImageType");
const tipText = document.querySelector("#lensTip");
const objectArrow = document.querySelector("#objectArrow");
const objectArrowHead = document.querySelector("#objectArrowHead");
const imageArrow = document.querySelector("#imageArrow");
const imageArrowHead = document.querySelector("#imageArrowHead");
const focalLeft = document.querySelector("#focalLeft");
const focalRight = document.querySelector("#focalRight");

const lensX = 350;
const axisY = 170;
const scale = 18;

function arrowHeadPoints(x, y, upright) {
  if (upright) {
    return `${x - 12},${y + 20} ${x + 12},${y + 20} ${x},${y}`;
  }
  return `${x - 12},${y - 20} ${x + 12},${y - 20} ${x},${y}`;
}

function render() {
  const doValue = Number(objectRange.value);
  const fValue = Number(focalRange.value);
  const nearFocus = Math.abs(doValue - fValue) < 0.01;
  const imageDistanceValue = nearFocus ? 999 : 1 / (1 / fValue - 1 / doValue);
  const magnification = nearFocus ? -6 : -imageDistanceValue / doValue;
  const objectX = lensX - doValue * scale;
  const imageXRaw = lensX + imageDistanceValue * scale;
  const imageX = Math.max(70, Math.min(630, imageXRaw));
  const imageHeight = Math.max(34, Math.min(120, Math.abs(magnification) * 70));
  const upright = magnification > 0;

  objectValue.textContent = String(doValue);
  focalValue.textContent = String(fValue);
  imageDistance.textContent = nearFocus ? "很遠" : `${imageDistanceValue.toFixed(1)}`;

  focalLeft.setAttribute("x1", String(lensX - fValue * scale));
  focalLeft.setAttribute("x2", String(lensX - fValue * scale));
  focalRight.setAttribute("x1", String(lensX + fValue * scale));
  focalRight.setAttribute("x2", String(lensX + fValue * scale));

  objectArrow.setAttribute("x1", String(objectX));
  objectArrow.setAttribute("x2", String(objectX));
  objectArrow.setAttribute("y1", String(axisY));
  objectArrow.setAttribute("y2", String(axisY - 70));
  objectArrowHead.setAttribute("points", `${objectX - 12},106 ${objectX + 12},106 ${objectX},86`);

  imageArrow.setAttribute("x1", String(imageX));
  imageArrow.setAttribute("x2", String(imageX));
  imageArrow.setAttribute("y1", String(axisY));
  imageArrow.setAttribute("y2", String(upright ? axisY - imageHeight : axisY + imageHeight));
  imageArrowHead.setAttribute(
    "points",
    arrowHeadPoints(imageX, upright ? axisY - imageHeight - 10 : axisY + imageHeight + 10, upright)
  );

  if (nearFocus) {
    imageType.textContent = "像幾乎跑到很遠";
    tipText.textContent = "物體正好在焦點附近時，像會跑得非常遠。";
  } else if (doValue > fValue) {
    imageType.textContent = "倒立實像";
    tipText.textContent = "物體在焦點外，所以像出現在透鏡另一邊。";
  } else {
    imageType.textContent = "正立虛像";
    tipText.textContent = "物體在焦點內，所以看到的是放大的虛像。";
  }
}

[objectRange, focalRange].forEach((input) => input.addEventListener("input", render));

render();
