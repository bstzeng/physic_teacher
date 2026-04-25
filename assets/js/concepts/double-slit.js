window.PhysicsSite.initConceptPage();

const waveRange = document.querySelector("#slitWaveRange");
const gapRange = document.querySelector("#slitGapRange");
const screenRange = document.querySelector("#slitScreenRange");
const waveValue = document.querySelector("#slitWaveValue");
const gapValue = document.querySelector("#slitGapValue");
const screenValue = document.querySelector("#slitScreenValue");
const spacingText = document.querySelector("#slitSpacingText");
const colorText = document.querySelector("#slitColorText");
const tipText = document.querySelector("#slitTip");
const gapA = document.querySelector("#slitGapA");
const gapB = document.querySelector("#slitGapB");
const fringePattern = document.querySelector("#fringePattern");
const resetSlit = document.querySelector("#slitReset");

function colorFromWaveLength(wavelength) {
  if (wavelength < 460) {
    return { hue: 230, label: "藍紫光附近" };
  }
  if (wavelength < 530) {
    return { hue: 190, label: "藍綠光附近" };
  }
  if (wavelength < 590) {
    return { hue: 120, label: "綠黃光附近" };
  }
  return { hue: 10, label: "紅光附近" };
}

function updateDoubleSlit() {
  const wavelength = Number(waveRange.value);
  const gap = Number(gapRange.value) / 100;
  const screen = Number(screenRange.value) / 10;
  const spacing = (wavelength / 1000) * (screen / gap);
  const color = colorFromWaveLength(wavelength);
  const centerGap = 140;
  const gapOffset = Number(gapRange.value) * 1.4;

  waveValue.textContent = String(wavelength);
  gapValue.textContent = gap.toFixed(2);
  screenValue.textContent = screen.toFixed(1);
  spacingText.textContent = spacing.toFixed(2);
  colorText.textContent = color.label;
  tipText.textContent = spacing > 3.8 ? "條紋很開，容易分辨" : "條紋較密，需要仔細看";

  gapA.style.top = `${centerGap - gapOffset / 2}px`;
  gapB.style.top = `${centerGap + gapOffset / 2}px`;
  fringePattern.style.background = `repeating-linear-gradient(
    180deg,
    hsla(${color.hue}, 90%, 70%, 0.95) 0 ${Math.max(4, spacing * 2.5)}px,
    rgba(255, 255, 255, 0.96) ${Math.max(4, spacing * 2.5)}px ${Math.max(8, spacing * 5)}px
  )`;
}

[waveRange, gapRange, screenRange].forEach((input) => {
  input.addEventListener("input", updateDoubleSlit);
});

resetSlit.addEventListener("click", () => {
  waveRange.value = 520;
  gapRange.value = 30;
  screenRange.value = 20;
  updateDoubleSlit();
});

updateDoubleSlit();
