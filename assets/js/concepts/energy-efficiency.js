window.PhysicsSite.initConceptPage();

const buttons = [...document.querySelectorAll(".efficiency-button")];
const inputRange = document.querySelector("#efficiencyInputRange");
const inputValue = document.querySelector("#efficiencyInputValue");
const percentText = document.querySelector("#efficiencyPercentText");
const wasteText = document.querySelector("#efficiencyWasteText");
const tipText = document.querySelector("#efficiencyTip");
const deviceEl = document.querySelector("#efficiencyDevice");
const inputBar = document.querySelector("#inputEnergyBar");
const usefulBar = document.querySelector("#usefulEnergyBar");
const wasteBar = document.querySelector("#wasteEnergyBar");

const devices = {
  led: { label: "LED", efficiency: 0.8, color: "linear-gradient(160deg, #00b4d8, #0077b6)" },
  bulb: { label: "燈泡", efficiency: 0.28, color: "linear-gradient(160deg, #f77f00, #d62828)" },
  motor: { label: "馬達", efficiency: 0.62, color: "linear-gradient(160deg, #6d597a, #355070)" },
};

const state = {
  device: "led",
};

function render() {
  const input = Number(inputRange.value) * 10;
  const device = devices[state.device];
  const useful = input * device.efficiency;
  const waste = input - useful;

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.device === state.device);
  });

  inputValue.textContent = String(Number(inputRange.value));
  deviceEl.textContent = device.label;
  deviceEl.style.background = device.color;
  inputBar.style.width = `${input}%`;
  usefulBar.style.width = `${useful}%`;
  wasteBar.style.width = `${waste}%`;
  percentText.textContent = `${Math.round(device.efficiency * 100)}%`;

  if (device.efficiency >= 0.75) {
    wasteText.textContent = "較少";
    tipText.textContent = "這種裝置把大部分輸入能量都轉成了有用能量。";
  } else if (device.efficiency >= 0.5) {
    wasteText.textContent = "中等";
    tipText.textContent = "效率還不錯，但還是有一部分能量被浪費掉。";
  } else {
    wasteText.textContent = "較多";
    tipText.textContent = "這種裝置浪費掉的能量比較多，可以和 LED 再比較一次。";
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    state.device = button.dataset.device;
    render();
  })
);

inputRange.addEventListener("input", render);

render();
