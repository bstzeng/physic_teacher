window.PhysicsSite.initConceptPage();

const nuclearConditionRange = document.querySelector("#nuclearConditionRange");
const nuclearParticles = document.querySelector("#nuclearParticles");
const nuclearEnergyFill = document.querySelector("#nuclearEnergyFill");
const nuclearModeButtons = [...document.querySelectorAll("[data-nuclear-mode]")];

const nuclearState = { mode: "fission" };

function renderNuclearParticles(condition) {
  const count = nuclearState.mode === "fission" ? 6 : 4;
  const radius = nuclearState.mode === "fission" ? 86 : 54;
  nuclearParticles.innerHTML = Array.from({ length: count }, (_, index) => {
    const angle = (Math.PI * 2 * index) / count;
    const offset = nuclearState.mode === "fission" ? 22 + condition / 5 : 46 - condition / 6;
    const x = Math.cos(angle) * radius + (nuclearState.mode === "fission" ? (index < count / 2 ? -offset : offset) : 0);
    const y = Math.sin(angle) * radius;
    return `<span class="nuclear-particle" style="left:calc(50% + ${x}px); top:calc(48% + ${y}px);"></span>`;
  }).join("");
}

function updateNuclear() {
  const condition = Number(nuclearConditionRange.value);
  const energy = nuclearState.mode === "fission" ? condition : Math.min(100, condition + 12);

  document.querySelector("#nuclearConditionValue").textContent = String(condition);
  document.querySelector("#nuclearResultText").textContent = nuclearState.mode === "fission" ? "大核裂成兩塊" : "小核合成較大核";
  document.querySelector("#nuclearEnergyText").textContent = String(energy);
  document.querySelector("#nuclearTipText").textContent = nuclearState.mode === "fission" ? "中子撞擊可引發分裂" : "融合通常需要很高溫";
  nuclearEnergyFill.style.width = `${energy}%`;
  renderNuclearParticles(condition);
}

nuclearModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    nuclearState.mode = button.dataset.nuclearMode;
    nuclearModeButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateNuclear();
  });
});

nuclearConditionRange.addEventListener("input", updateNuclear);
updateNuclear();
