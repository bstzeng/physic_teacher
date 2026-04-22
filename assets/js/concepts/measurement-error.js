window.PhysicsSite.initConceptPage();

const countRange = document.querySelector("#measurementCountRange");
const resolutionRange = document.querySelector("#measurementResolutionRange");
const countValue = document.querySelector("#measurementCountValue");
const resolutionValue = document.querySelector("#measurementResolutionValue");
const meanText = document.querySelector("#measurementMeanText");
const spreadText = document.querySelector("#measurementSpreadText");
const tipText = document.querySelector("#measurementTip");
const pointsWrap = document.querySelector("#measurementPoints");
const meanLine = document.querySelector("#measurementMeanLine");
const rerollButton = document.querySelector("#measurementReroll");
const resetButton = document.querySelector("#measurementReset");

let seed = 1;

function random() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

function renderMeasurements() {
  const count = Number(countRange.value);
  const resolution = Number(resolutionRange.value) / 6;
  const actual = 12.6;
  const values = [];

  countValue.textContent = `${count}`;
  resolutionValue.textContent = `${resolution.toFixed(1)}`;

  for (let i = 0; i < count; i += 1) {
    const noise = (random() - 0.5) * 1.2;
    const measured = Math.round((actual + noise) / resolution) * resolution;
    values.push(Number(measured.toFixed(2)));
  }

  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const spread = Math.max(...values) - Math.min(...values);

  meanText.textContent = `${mean.toFixed(2)} cm`;
  spreadText.textContent = `${spread.toFixed(2)} cm`;
  tipText.textContent =
    resolution <= 0.3
      ? "刻度變細時，量到的數值通常比較集中。"
      : "刻度比較粗時，讀值常會跳得比較大。";

  pointsWrap.innerHTML = values
    .map((value, index) => {
      const left = ((value - 10) / 5) * 100;
      const top = 28 + (index % 4) * 34;
      return `<span class="measurement-point" style="left:${left}%; top:${top}px;"></span>`;
    })
    .join("");

  meanLine.style.left = `${((mean - 10) / 5) * 100}%`;
}

countRange.addEventListener("input", renderMeasurements);
resolutionRange.addEventListener("input", renderMeasurements);
rerollButton.addEventListener("click", () => {
  seed += 17;
  renderMeasurements();
});
resetButton.addEventListener("click", () => {
  countRange.value = 8;
  resolutionRange.value = 3;
  seed = 1;
  renderMeasurements();
});

renderMeasurements();
