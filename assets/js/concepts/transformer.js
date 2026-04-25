window.PhysicsSite.initConceptPage();

const transformerInputRange = document.querySelector("#transformerInputRange");
const transformerPrimaryRange = document.querySelector("#transformerPrimaryRange");
const transformerSecondaryRange = document.querySelector("#transformerSecondaryRange");
const transformerLamp = document.querySelector("#transformerLamp");

function updateTransformer() {
  const vin = Number(transformerInputRange.value);
  const np = Number(transformerPrimaryRange.value);
  const ns = Number(transformerSecondaryRange.value);
  const vout = vin * (ns / np);
  const glow = Math.min(1, vout / 24);

  document.querySelector("#transformerInputValue").textContent = String(vin);
  document.querySelector("#transformerPrimaryValue").textContent = String(np);
  document.querySelector("#transformerSecondaryValue").textContent = String(ns);
  document.querySelector("#transformerOutputText").textContent = `${vout.toFixed(1)} V`;
  document.querySelector("#transformerModeText").textContent = ns > np ? "升壓" : ns < np ? "降壓" : "等壓";
  document.querySelector("#transformerBrightText").textContent = glow < 0.35 ? "偏暗" : glow < 0.7 ? "中等" : "偏亮";
  transformerLamp.style.opacity = `${0.35 + glow * 0.65}`;
  transformerLamp.style.transform = `scale(${0.92 + glow * 0.14})`;
  transformerLamp.style.boxShadow = `0 0 ${18 + glow * 28}px rgba(255, 209, 102, ${0.18 + glow * 0.48})`;
}

[transformerInputRange, transformerPrimaryRange, transformerSecondaryRange].forEach((input) => {
  input.addEventListener("input", updateTransformer);
});

updateTransformer();
