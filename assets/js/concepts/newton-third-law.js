window.PhysicsSite.initConceptPage();
const forceRange=document.querySelector("#thirdForceRange");
const leftMassRange=document.querySelector("#thirdLeftMassRange");
const rightMassRange=document.querySelector("#thirdRightMassRange");
const forceValue=document.querySelector("#thirdForceValue");
const leftMassValue=document.querySelector("#thirdLeftMassValue");
const rightMassValue=document.querySelector("#thirdRightMassValue");
const actionText=document.querySelector("#thirdActionText");
const reactionText=document.querySelector("#thirdReactionText");
const tipText=document.querySelector("#thirdTip");
const leftCart=document.querySelector("#thirdLeftCart");
const rightCart=document.querySelector("#thirdRightCart");
const arrowLeft=document.querySelector("#thirdArrowLeft");
const arrowRight=document.querySelector("#thirdArrowRight");
const pushButton=document.querySelector("#thirdPushButton");
function render(){const force=Number(forceRange.value),leftMass=Number(leftMassRange.value),rightMass=Number(rightMassRange.value),leftMove=force/leftMass*18,rightMove=force/rightMass*18;forceValue.textContent=String(force);leftMassValue.textContent=String(leftMass);rightMassValue.textContent=String(rightMass);actionText.textContent=String(force);reactionText.textContent=String(force);leftCart.style.transform=`translateX(${-leftMove}px)`;rightCart.style.transform=`translateX(${rightMove}px)`;arrowLeft.style.transform=`scaleX(${0.7+force*0.05})`;arrowRight.style.transform=`scaleX(${0.7+force*0.05})`;tipText.textContent=leftMass<rightMass?"甲車比較輕，所以它退得比較多。":rightMass<leftMass?"乙車比較輕，所以它退得比較多。":"兩台一樣重時，通常會退得差不多。";}
pushButton.addEventListener("click",render);
[forceRange,leftMassRange,rightMassRange].forEach((input)=>input.addEventListener("input",render));
render();
