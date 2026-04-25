window.PhysicsSite.initConceptPage();

const atomLevelRange = document.querySelector("#atomLevelRange");
const atomLevelValue = document.querySelector("#atomLevelValue");
const energyGapText = document.querySelector("#atomEnergyGapText");
const photonText = document.querySelector("#atomPhotonText");
const atomTip = document.querySelector("#atomTip");
const atomElectron = document.querySelector("#atomElectron");
const photonFlash = document.querySelector("#photonFlash");
const exciteButton = document.querySelector("#atomExcite");
const dropButton = document.querySelector("#atomDrop");

const orbitRadius = {
  1: 55,
  2: 90,
  3: 125,
};

const atomState = {
  level: 3,
  angle: 0,
  flashTimer: 0,
};

function energyOf(level) {
  return -13.6 / (level * level);
}

function photonInfo(gap) {
  if (gap > 10) {
    return { color: "#c77dff", label: "紫色附近" };
  }
  if (gap > 3) {
    return { color: "#4cc9f0", label: "藍色附近" };
  }
  return { color: "#ffd166", label: "紅色附近" };
}

function updateAtomReadout(previousLevel) {
  const level = Number(atomLevelRange.value);
  const referenceLevel = previousLevel || Math.min(3, level + 1);
  const gap = Math.abs(energyOf(level) - energyOf(referenceLevel));
  const info = photonInfo(gap);

  atomState.level = level;
  atomLevelValue.textContent = String(level);
  energyGapText.textContent = `${gap.toFixed(2)} eV`;
  photonText.textContent = info.label;
  atomTip.textContent = level === 1 ? "已在最低能階，只能吸收能量往上跳" : "可以往下躍遷並放出光子";
  photonFlash.style.background = info.color;
  photonFlash.style.boxShadow = `0 0 30px ${info.color}`;
}

function placeElectron() {
  const radius = orbitRadius[atomState.level];
  atomState.angle += 0.03;
  const x = Math.cos(atomState.angle) * radius;
  const y = Math.sin(atomState.angle) * radius;

  atomElectron.style.left = `calc(50% + ${x}px)`;
  atomElectron.style.top = `calc(50% + ${y}px)`;

  if (atomState.flashTimer > 0) {
    atomState.flashTimer -= 1;
    photonFlash.style.opacity = "1";
    photonFlash.style.transform = `translate(-50%, -50%) scale(${1 + atomState.flashTimer * 0.03})`;
  } else {
    photonFlash.style.opacity = "0";
    photonFlash.style.transform = "translate(-50%, -50%) scale(1)";
  }

  requestAnimationFrame(placeElectron);
}

atomLevelRange.addEventListener("input", () => {
  updateAtomReadout();
});

exciteButton.addEventListener("click", () => {
  const nextLevel = Math.min(3, Number(atomLevelRange.value) + 1);
  atomLevelRange.value = nextLevel;
  updateAtomReadout();
});

dropButton.addEventListener("click", () => {
  const currentLevel = Number(atomLevelRange.value);
  if (currentLevel > 1) {
    atomLevelRange.value = currentLevel - 1;
    atomState.flashTimer = 18;
    updateAtomReadout(currentLevel);
  }
});

updateAtomReadout();
requestAnimationFrame(placeElectron);
