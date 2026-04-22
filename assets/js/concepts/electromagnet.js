window.PhysicsSite.initConceptPage();

const currentRange = document.querySelector("#currentRange");
const turnsRange = document.querySelector("#turnsRange");
const coreSelect = document.querySelector("#coreSelect");
const currentValue = document.querySelector("#currentValue");
const turnsValue = document.querySelector("#turnsValue");
const strengthText = document.querySelector("#electroStrengthText");
const clipCountText = document.querySelector("#clipCountText");
const tipText = document.querySelector("#electroTip");
const electroCore = document.querySelector("#electroCore");
const electroCoil = document.querySelector("#electroCoil");
const clips = [...document.querySelectorAll(".paper-clip")];

function strengthLabel(value) {
  if (value > 60) {
    return "很強";
  }
  if (value > 30) {
    return "中等";
  }
  return "較弱";
}

function render() {
  const current = Number(currentRange.value);
  const turns = Number(turnsRange.value);
  const hasCore = coreSelect.value === "on";
  const strength = current * turns * (hasCore ? 1.8 : 1);
  const clipCount = Math.min(6, Math.floor(strength / 12) + (hasCore ? 1 : 0));

  currentValue.textContent = String(current);
  turnsValue.textContent = String(turns);
  strengthText.textContent = strengthLabel(strength);
  clipCountText.textContent = `${clipCount} 個`;
  electroCore.style.opacity = hasCore ? "1" : "0.35";
  electroCore.style.background = hasCore
    ? "linear-gradient(180deg, #7d8597, #495057)"
    : "linear-gradient(180deg, #cfd4da, #adb5bd)";
  electroCoil.style.backgroundSize = `${20 - Math.min(14, turns)}px 100%`;

  clips.forEach((clip, index) => {
    clip.style.opacity = index < clipCount ? "1" : "0.2";
    clip.style.transform = `translateY(${index < clipCount ? -index * 10 : 0}px)`;
  });

  if (hasCore && clipCount >= 5) {
    tipText.textContent = "有鐵芯又有較大的電流與圈數，所以磁力很明顯。";
  } else if (!hasCore) {
    tipText.textContent = "沒有鐵芯時，電磁鐵還是有磁力，但通常比較弱。";
  } else {
    tipText.textContent = "你可以再增加電流或圈數，看看會不會吸住更多迴紋針。";
  }
}

[currentRange, turnsRange, coreSelect].forEach((input) => input.addEventListener("input", render));

render();
