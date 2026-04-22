window.PhysicsSite.initConceptPage();
const massRange=document.querySelector("#workMassRange");
const heightRange=document.querySelector("#workHeightRange");
const timeRange=document.querySelector("#workTimeRange");
const massValue=document.querySelector("#workMassValue");
const heightValue=document.querySelector("#workHeightValue");
const timeValue=document.querySelector("#workTimeValue");
const workText=document.querySelector("#workText");
const powerText=document.querySelector("#powerText");
const tipText=document.querySelector("#workTip");
const box=document.querySelector("#workLiftBox");
const meterFill=document.querySelector("#powerMeterFill");
function render(){const mass=Number(massRange.value),height=Number(heightRange.value),time=Number(timeRange.value),work=mass*height,power=work/time;massValue.textContent=String(mass);heightValue.textContent=String(height);timeValue.textContent=String(time);workText.textContent=String(work);powerText.textContent=power.toFixed(1);box.style.transform=`translate(-50%, ${-height*14}px)`;box.style.height=`${62+mass*4}px`;meterFill.style.height=`${Math.min(100,power*10)}%`;tipText.textContent=power>10?"現在功率很高，表示做功做得很快。":time<=3?"時間短時，就算做的功差不多，功率也會比較大。":"可以固定功，再把時間改短，觀察功率變化。";}
[massRange,heightRange,timeRange].forEach((input)=>input.addEventListener("input",render));
render();
