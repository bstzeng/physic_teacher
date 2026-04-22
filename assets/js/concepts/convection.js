window.PhysicsSite.initConceptPage();
const heatRange=document.querySelector("#convectionHeatRange");
const sizeRange=document.querySelector("#convectionSizeRange");
const heatValue=document.querySelector("#convectionHeatValue");
const sizeValue=document.querySelector("#convectionSizeValue");
const speedText=document.querySelector("#convectionSpeedText");
const riseText=document.querySelector("#convectionRiseText");
const tipText=document.querySelector("#convectionTip");
const hotFlow=document.querySelector("#convectionHotFlow");
const coldFlow=document.querySelector("#convectionColdFlow");
function levelText(value){return value<=3?"較弱":value<=7?"中等":"很明顯";}
function render(){const heat=Number(heatRange.value),size=Number(sizeRange.value),speed=heat/size*8;heatValue.textContent=String(heat);sizeValue.textContent=String(size);speedText.textContent=levelText(speed);riseText.textContent=heat>=7?"很快上升":heat>=4?"明顯上升":"慢慢上升";hotFlow.style.animationDuration=`${Math.max(1.6,6-heat*0.35)}s`;coldFlow.style.animationDuration=`${Math.max(1.8,6.6-heat*0.3)}s`;hotFlow.style.width=`${30+heat*8}px`;coldFlow.style.width=`${30+size*5}px`;tipText.textContent=heat>=8?"火力很大時，熱流會更快往上升。":size>=8?"容器比較大時，對流路徑也會看起來比較長。":"可以先固定容器大小，再只調整加熱強度。";}
[heatRange,sizeRange].forEach((input)=>input.addEventListener("input",render));
render();
