window.PhysicsSite.initConceptPage();

const pulleyCountRange = document.querySelector("#pulleyCountRange");
const pulleyMassRange = document.querySelector("#pulleyMassRange");
const pulleyCountValue = document.querySelector("#pulleyCountValue");
const pulleyMassValue = document.querySelector("#pulleyMassValue");
const pulleyForceText = document.querySelector("#pulleyForceText");
const pulleyDistanceText = document.querySelector("#pulleyDistanceText");
const pulleyTip = document.querySelector("#pulleyTip");
const pulleyWeight = document.querySelector("#pulleyWeight");
const pulleyHandle = document.querySelector("#pulleyHandle");
const pulleyGroup = document.querySelector("#pulleyGroup");
const pulleyRope = document.querySelector("#pulleyRope");

function render() {
  const count = Number(pulleyCountRange.value);
  const mass = Number(pulleyMassRange.value);
  const force = mass / count;

  pulleyCountValue.textContent = String(count);
  pulleyMassValue.textContent = String(mass);
  pulleyForceText.textContent = force.toFixed(1);
  pulleyDistanceText.textContent = `${count} 倍`;

  pulleyWeight.style.height = `${64 + mass * 6}px`;
  pulleyHandle.style.transform = `translateY(${count * 16}px)`;
  pulleyGroup.style.setProperty("--pulley-count", count);
  pulleyRope.style.height = `${148 + count * 14}px`;
  pulleyRope.style.backgroundSize = `${100 / count}% 100%`;

  if (count >= 3) {
    pulleyTip.textContent = "滑輪變多後，真的比較省力，但要拉更長的繩子。";
  } else {
    pulleyTip.textContent = "現在滑輪不多，所以還需要比較大的拉力。";
  }
}

[pulleyCountRange, pulleyMassRange].forEach((input) => input.addEventListener("input", render));

render();
