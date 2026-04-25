window.PhysicsSite.initConceptPage();

const spectroscopySelect = document.querySelector("#spectroscopySelect");
const spectroscopyFlash = document.querySelector("#spectroscopyFlash");
const spectrumScreen = document.querySelector("#spectrumScreen");
const tubeGlow = document.querySelector("#tubeGlow");

const gases = {
  hydrogen: {
    name: "氫",
    hint: "線條較少但清楚",
    glow: "rgba(76, 201, 240, 0.36)",
    lines: [{ x: 22, color: "#6c63ff" }, { x: 48, color: "#4cc9f0" }, { x: 66, color: "#ffd166" }, { x: 78, color: "#ef476f" }],
  },
  neon: {
    name: "氖",
    hint: "橘紅色線條很多",
    glow: "rgba(255, 125, 0, 0.34)",
    lines: [{ x: 20, color: "#f77f00" }, { x: 32, color: "#f77f00" }, { x: 55, color: "#ffd166" }, { x: 70, color: "#ef476f" }, { x: 82, color: "#d62828" }],
  },
  helium: {
    name: "氦",
    hint: "黃藍色線條都明顯",
    glow: "rgba(255, 209, 102, 0.34)",
    lines: [{ x: 18, color: "#4cc9f0" }, { x: 43, color: "#90e0ef" }, { x: 61, color: "#ffd166" }, { x: 74, color: "#f77f00" }],
  },
};

function renderSpectrum() {
  const gas = gases[spectroscopySelect.value];
  spectrumScreen.innerHTML = gas.lines
    .map((line) => `<span class="spectral-line" style="left:${line.x}%; background:${line.color};"></span>`)
    .join("");
  document.querySelector("#spectroscopyNameText").textContent = gas.name;
  document.querySelector("#spectroscopyHintText").textContent = gas.hint;
  tubeGlow.style.boxShadow = `0 0 32px ${gas.glow}`;
  tubeGlow.style.background = gas.glow;
}

spectroscopySelect.addEventListener("change", renderSpectrum);
spectroscopyFlash.addEventListener("click", () => {
  spectrumScreen.style.transform = "scale(1.02)";
  setTimeout(() => { spectrumScreen.style.transform = "scale(1)"; }, 180);
  renderSpectrum();
});

renderSpectrum();
