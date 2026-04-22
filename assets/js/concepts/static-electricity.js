window.PhysicsSite.initConceptPage();

const rubRange = document.querySelector("#staticRubRange");
const rubValue = document.querySelector("#staticRubValue");
const resetButton = document.querySelector("#staticReset");
const balloon = document.querySelector("#staticBalloon");
const chargeText = document.querySelector("#staticChargeText");
const pullText = document.querySelector("#staticPullText");
const tipText = document.querySelector("#staticTip");
const humidityButtons = [...document.querySelectorAll("[data-humidity]")];
const paperBits = [
  document.querySelector("#paperBit1"),
  document.querySelector("#paperBit2"),
  document.querySelector("#paperBit3"),
  document.querySelector("#paperBit4"),
  document.querySelector("#paperBit5"),
];

const state = {
  humidity: "dry",
};

const humidityMap = {
  dry: 1.15,
  normal: 0.9,
  humid: 0.55,
};

function updateScene() {
  const rubs = Number(rubRange.value);
  const charge = rubs * humidityMap[state.humidity];
  const pull = Math.min(110, charge * 11);

  rubValue.textContent = `${rubs}`;
  balloon.style.transform = `translateX(${pull * 0.35}px)`;
  balloon.style.boxShadow = `0 18px 28px rgba(239, 71, 111, ${0.12 + charge * 0.03})`;

  paperBits.forEach((bit, index) => {
    const baseX = index * 10;
    const offsetY = [0, -12, 8, -18, 14][index];
    bit.style.transform = `translate(${-pull + baseX}px, ${offsetY}px) rotate(${charge * 2 + index * 10}deg)`;
  });

  if (charge < 3) {
    chargeText.textContent = "很弱";
    pullText.textContent = "紙片幾乎不動";
    tipText.textContent = "多摩擦幾次，效果會更容易看見。";
  } else if (charge < 7) {
    chargeText.textContent = "中等";
    pullText.textContent = "紙片開始靠近";
    tipText.textContent = "乾燥空氣時，效果通常會更明顯。";
  } else {
    chargeText.textContent = "很強";
    pullText.textContent = "紙片明顯被吸住";
    tipText.textContent = "現在可以試試看改成潮濕空氣。";
  }
}

humidityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.humidity = button.dataset.humidity;
    humidityButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateScene();
  });
});

rubRange.addEventListener("input", updateScene);
resetButton.addEventListener("click", () => {
  rubRange.value = 6;
  state.humidity = "dry";
  humidityButtons.forEach((button) => button.classList.toggle("active", button.dataset.humidity === "dry"));
  updateScene();
});

updateScene();
