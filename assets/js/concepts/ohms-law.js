window.PhysicsSite.initConceptPage();
const voltageRange=document.querySelector("#ohmVoltageRange");
const resistanceRange=document.querySelector("#ohmResistanceRange");
const voltageValue=document.querySelector("#ohmVoltageValue");
const resistanceValue=document.querySelector("#ohmResistanceValue");
const currentText=document.querySelector("#ohmCurrentText");
const formulaText=document.querySelector("#ohmFormulaText");
const tipText=document.querySelector("#ohmTip");
const resistor=document.querySelector("#ohmResistor");
const needle=document.querySelector("#ohmNeedle");
function render(){const voltage=Number(voltageRange.value),resistance=Number(resistanceRange.value),current=voltage/resistance;voltageValue.textContent=String(voltage);resistanceValue.textContent=String(resistance);currentText.textContent=current.toFixed(2);formulaText.textContent=`I = ${voltage} / ${resistance}`;resistor.style.width=`${110+resistance*10}px`;needle.style.transform=`rotate(${Math.min(65,current*10)}deg)`;tipText.textContent=current>3?"電流很大，因為電壓高或電阻小。":resistance>=7?"電阻變大後，電流變得比較小。":"試著固定其中一個量，只改另一個量來比較。";}
[voltageRange,resistanceRange].forEach((input)=>input.addEventListener("input",render));
render();
