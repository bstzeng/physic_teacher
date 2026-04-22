window.PhysicsSite.initConceptPage();

const wireTop = document.querySelector("#wireTop");
const wireRight = document.querySelector("#wireRight");
const switchA = document.querySelector("#switchA");
const switchB = document.querySelector("#switchB");
const switchBridge = document.querySelector("#switchBridge");
const bulbShell = document.querySelector("#bulbShell");
const bulbGlow = document.querySelector("#bulbGlow");
const toggleTopWire = document.querySelector("#toggleTopWire");
const toggleRightWire = document.querySelector("#toggleRightWire");
const toggleSwitch = document.querySelector("#toggleSwitch");
const batteryRange = document.querySelector("#batteryRange");
const batteryValue = document.querySelector("#batteryValue");
const statusText = document.querySelector("#circuitStatus");
const brightnessText = document.querySelector("#brightnessText");
const tipText = document.querySelector("#circuitTip");

const state = {
  topWire: true,
  rightWire: true,
  switchClosed: false,
  batteryCount: 1,
};

function wireColor(active) {
  return active ? "#ff884d" : "#8aa4bf";
}

function updateButtons() {
  toggleTopWire.textContent = `上方導線：${state.topWire ? "已接上" : "未接上"}`;
  toggleRightWire.textContent = `右側導線：${state.rightWire ? "已接上" : "未接上"}`;
  toggleSwitch.textContent = `開關：目前${state.switchClosed ? "關上" : "打開"}`;

  toggleTopWire.className = `toggle-button ${state.topWire ? "on" : "off"}`;
  toggleRightWire.className = `toggle-button ${state.rightWire ? "on" : "off"}`;
  toggleSwitch.className = `toggle-button ${state.switchClosed ? "on" : "off"}`;
}

function render() {
  const isClosed = state.topWire && state.rightWire && state.switchClosed;
  const brightness = isClosed ? state.batteryCount * 33 : 0;

  wireTop.setAttribute("stroke", wireColor(state.topWire));
  wireRight.setAttribute("stroke", wireColor(state.rightWire));
  switchA.setAttribute("stroke", wireColor(state.topWire));
  switchB.setAttribute("stroke", wireColor(state.topWire));
  switchBridge.setAttribute("stroke", wireColor(state.switchClosed));
  switchBridge.setAttribute("transform", state.switchClosed ? "" : "rotate(-24 455 80)");

  bulbGlow.setAttribute("opacity", isClosed ? String(0.18 + state.batteryCount * 0.17) : "0.08");
  bulbShell.setAttribute("fill", isClosed ? "#ffe17a" : "#f8f3d8");

  batteryValue.textContent = String(state.batteryCount);
  statusText.textContent = isClosed ? "燈泡亮起來了" : "還沒有亮";
  brightnessText.textContent = `${brightness}%`;

  if (!state.topWire || !state.rightWire) {
    tipText.textContent = "少了一段導線，電流沒有完整的路可以走。";
  } else if (!state.switchClosed) {
    tipText.textContent = "導線都接好了，現在把開關關上就能完成回路。";
  } else {
    tipText.textContent = "完整回路形成了，電池越多，燈泡越亮。";
  }

  updateButtons();
}

toggleTopWire.addEventListener("click", () => {
  state.topWire = !state.topWire;
  render();
});

toggleRightWire.addEventListener("click", () => {
  state.rightWire = !state.rightWire;
  render();
});

toggleSwitch.addEventListener("click", () => {
  state.switchClosed = !state.switchClosed;
  render();
});

batteryRange.addEventListener("input", () => {
  state.batteryCount = Number(batteryRange.value);
  render();
});

render();
