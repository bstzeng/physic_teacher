window.PhysicsSite.initConceptPage();
const heightRange=document.querySelector("#gravityHeightRange");
const heightValue=document.querySelector("#gravityHeightValue");
const dropButton=document.querySelector("#gravityDropButton");
const resetButton=document.querySelector("#gravityResetButton");
const ball=document.querySelector("#gravityBall");
const timeText=document.querySelector("#gravityTimeText");
const speedText=document.querySelector("#gravitySpeedText");
const tipText=document.querySelector("#gravityTip");
const state={running:false,y:0,velocity:0,time:0,lastTime:performance.now()};
function maxDrop(){return Number(heightRange.value)*24;}
function render(){heightValue.textContent=heightRange.value;ball.style.transform=`translate(-50%, ${state.y}px)`;timeText.textContent=`${state.time.toFixed(1)} 秒`;speedText.textContent=state.velocity.toFixed(1);tipText.textContent=state.running?"物體正在掉落，速度會慢慢變快。":state.y>=maxDrop()?"落地了。試著把高度調高，再放手一次。":"高度越高，通常落地時間會更長。";}
function animate(now){const delta=Math.min((now-state.lastTime)/1000,0.05);state.lastTime=now;if(state.running){state.time+=delta;state.velocity+=18*delta;state.y+=state.velocity*18*delta;if(state.y>=maxDrop()){state.y=maxDrop();state.running=false;state.velocity=0;}}render();requestAnimationFrame(animate);}
dropButton.addEventListener("click",()=>{state.running=true;});
resetButton.addEventListener("click",()=>{state.running=false;state.y=0;state.velocity=0;state.time=0;render();});
heightRange.addEventListener("input",()=>{if(!state.running){state.y=0;state.velocity=0;state.time=0;render();}});
render();requestAnimationFrame(animate);
