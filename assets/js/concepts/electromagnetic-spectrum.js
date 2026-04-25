window.PhysicsSite.initConceptPage();

const spectrumPosRange = document.querySelector("#spectrumPosRange");
const spectrumMarker = document.querySelector("#spectrumMarker");

const spectrumBands = [
  { max: 14, name: "無線電波", desc: "波長最長，常用在通訊與廣播。", wave: "很長", freq: "很低" },
  { max: 28, name: "微波", desc: "可用於雷達、微波爐和衛星通訊。", wave: "很長", freq: "低" },
  { max: 40, name: "紅外線", desc: "常和熱輻射有關，也用在遙控器。", wave: "偏長", freq: "偏低" },
  { max: 62, name: "可見光", desc: "這是人眼能看到的一小段電磁波。", wave: "中等", freq: "中等" },
  { max: 76, name: "紫外線", desc: "能量比可見光高，容易造成化學變化。", wave: "偏短", freq: "偏高" },
  { max: 90, name: "X 光", desc: "穿透力較強，常用在醫學影像。", wave: "很短", freq: "高" },
  { max: 100, name: "伽瑪射線", desc: "頻率最高、波長最短，能量也很大。", wave: "極短", freq: "極高" },
];

function updateSpectrum() {
  const pos = Number(spectrumPosRange.value);
  const band = spectrumBands.find((item) => pos <= item.max) || spectrumBands[spectrumBands.length - 1];

  document.querySelector("#spectrumPosValue").textContent = String(pos);
  document.querySelector("#spectrumBandTitle").textContent = band.name;
  document.querySelector("#spectrumBandDesc").textContent = band.desc;
  document.querySelector("#spectrumNameText").textContent = band.name;
  document.querySelector("#spectrumWaveText").textContent = band.wave;
  document.querySelector("#spectrumFreqText").textContent = band.freq;
  spectrumMarker.style.left = `calc(${pos}% - 3px)`;
}

spectrumPosRange.addEventListener("input", updateSpectrum);
updateSpectrum();
