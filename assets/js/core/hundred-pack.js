(function () {
  const concept = window.PhysicsSite.initConceptPage();
  const conceptId = document.body.dataset.conceptId;

  if (!concept) {
    return;
  }

  const packConfigs = {
    "lorentz-force": {
      controls: [
        { key: "q", label: "電荷量", type: "range", min: -5, max: 5, step: 1, value: 2, unit: " q" },
        { key: "v", label: "速度", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: " m/s" },
        { key: "b", label: "磁場", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: " T" },
      ],
      statLabels: ["磁力大小", "方向", "觀察提示"],
      challenge: "試著把電荷改成負值，看看箭頭方向會不會立刻反過來。",
      compute(state) {
        const force = Math.abs(state.q * state.v * state.b);
        const direction = state.q >= 0 ? "向上偏轉" : "向下偏轉";
        return {
          stats: [`${force.toFixed(1)} N`, direction, force > 20 ? "現在偏轉很明顯" : "偏轉還算溫和"],
          visual: { kind: "field", magnitude: Math.min(1, force / 40), angle: state.q >= 0 ? -90 : 90, color: state.q >= 0 ? "#ef476f" : "#118ab2" },
        };
      },
    },
    "magnetic-particle": {
      controls: [
        { key: "q", label: "電荷量", type: "range", min: 1, max: 5, step: 1, value: 1, unit: " q" },
        { key: "v", label: "速度", type: "range", min: 1, max: 10, step: 0.5, value: 6, unit: " m/s" },
        { key: "b", label: "磁場", type: "range", min: 1, max: 10, step: 0.5, value: 3, unit: " T" },
      ],
      statLabels: ["軌道半徑", "旋轉週期感", "觀察提示"],
      challenge: "把磁場拉大，看看半徑是不是會立刻縮小。",
      compute(state) {
        const radius = (state.v / (state.q * state.b)) * 8;
        const period = (2 * Math.PI) / Math.max(0.5, state.b);
        return {
          stats: [`${radius.toFixed(1)} 單位`, `${period.toFixed(2)} s`, radius < 12 ? "現在軌道比較緊" : "現在軌道比較大"],
          visual: { kind: "circle", radius: Math.min(0.42, Math.max(0.12, radius / 50)), angle: state.v * 0.4, color: "#ffd166" },
        };
      },
    },
    "crossed-fields": {
      controls: [
        { key: "e", label: "電場", type: "range", min: 0, max: 10, step: 0.5, value: 6, unit: " E" },
        { key: "b", label: "磁場", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: " B" },
        { key: "v", label: "速度", type: "range", min: 0, max: 10, step: 0.5, value: 3, unit: " m/s" },
      ],
      statLabels: ["合成偏轉", "目前結果", "觀察提示"],
      challenge: "找到幾乎不偏轉的設定，感受電場力與磁力互相抵消。",
      compute(state) {
        const net = state.e - state.v * state.b * 0.25;
        const direction = Math.abs(net) < 0.4 ? "接近直線通過" : net > 0 ? "電場主導，向上偏" : "磁場主導，向下偏";
        return {
          stats: [net.toFixed(2), direction, Math.abs(net) < 0.4 ? "兩種作用幾乎平衡" : "還有明顯偏轉"],
          visual: { kind: "field", magnitude: Math.min(1, Math.abs(net) / 5), angle: net >= 0 ? -75 : 75, color: "#8338ec" },
        };
      },
    },
    "motor-effect": {
      controls: [
        { key: "i", label: "電流", type: "range", min: 0, max: 10, step: 0.5, value: 5, unit: " A" },
        { key: "b", label: "磁場", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: " T" },
        { key: "l", label: "導線長度", type: "range", min: 1, max: 10, step: 0.5, value: 6, unit: " m" },
      ],
      statLabels: ["受力大小", "轉動感", "觀察提示"],
      challenge: "讓磁場和電流都變大，看看力是不是會一起放大。",
      compute(state) {
        const force = state.i * state.b * state.l * 0.2;
        return {
          stats: [`${force.toFixed(1)} N`, force > 8 ? "很容易轉動" : force > 4 ? "有明顯轉動" : "轉動較弱", "電流、磁場和長度都會影響受力"],
          visual: { kind: "bars", max: 12, bars: [{ label: "電流", value: state.i, color: "#ef476f" }, { label: "磁場", value: state.b, color: "#118ab2" }, { label: "受力", value: force, color: "#ffd166" }] },
        };
      },
    },
    "generator-principle": {
      controls: [
        { key: "speed", label: "轉速", type: "range", min: 0, max: 10, step: 0.5, value: 5, unit: " 圈/s" },
        { key: "b", label: "磁場", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: " T" },
        { key: "turns", label: "線圈圈數", type: "range", min: 10, max: 100, step: 5, value: 40, unit: " 圈" },
      ],
      statLabels: ["感應電壓", "波形振幅", "觀察提示"],
      challenge: "先只增加圈數，再只增加轉速，比較哪一種方式對電壓更有幫助。",
      compute(state) {
        const emf = state.speed * state.b * state.turns * 0.04;
        const points = linePoints((x) => 0.5 + Math.sin(x * 6.28 * (state.speed / 5)) * Math.min(0.38, emf / 35));
        return {
          stats: [`${emf.toFixed(1)} V`, emf < 6 ? "偏小" : emf < 14 ? "中等" : "很大", "轉得越快，波形起伏通常越大"],
          visual: { kind: "curve", points, marker: 0.72, color: "#3a86ff" },
        };
      },
    },
    "damping-oscillation": {
      controls: [
        { key: "a", label: "起始振幅", type: "range", min: 1, max: 10, step: 0.5, value: 8, unit: "" },
        { key: "d", label: "阻尼", type: "range", min: 1, max: 10, step: 0.5, value: 3, unit: "" },
        { key: "t", label: "觀察時間", type: "range", min: 0, max: 10, step: 0.5, value: 4, unit: " s" },
      ],
      statLabels: ["目前位移", "剩餘振幅", "觀察提示"],
      challenge: "把阻尼拉大，看看波峰是不是會更快縮小。",
      compute(state) {
        const position = state.a * Math.exp((-state.d * state.t) / 10) * Math.cos(state.t * 2.4);
        const remain = state.a * Math.exp((-state.d * state.t) / 10);
        const points = linePoints((x) => 0.5 + Math.exp((-state.d * x) / 10) * Math.cos(x * 5.2) * (state.a / 22), 120);
        return {
          stats: [position.toFixed(2), remain.toFixed(2), remain < 2 ? "振動快要停下來了" : "還看得見明顯振動"],
          visual: { kind: "curve", points, marker: state.t / 10, color: "#ef476f" },
        };
      },
    },
    resonance: {
      controls: [
        { key: "drive", label: "外力頻率", type: "range", min: 1, max: 20, step: 0.5, value: 8, unit: " Hz" },
        { key: "natural", label: "固有頻率", type: "range", min: 1, max: 20, step: 0.5, value: 9, unit: " Hz" },
        { key: "damp", label: "阻尼", type: "range", min: 1, max: 10, step: 0.5, value: 3, unit: "" },
      ],
      statLabels: ["振幅", "是否接近共振", "觀察提示"],
      challenge: "把外力頻率慢慢調到接近固有頻率，找出振幅最大的那一刻。",
      compute(state) {
        const diff = state.drive - state.natural;
        const amp = 1 / Math.sqrt(diff * diff + state.damp * 0.5);
        const normalized = Math.min(1, amp / 1.3);
        const points = Array.from({ length: 80 }, (_, index) => {
          const x = (index / 79) * 20;
          const value = 1 / Math.sqrt((x - state.natural) * (x - state.natural) + state.damp * 0.5);
          return 1 - Math.min(0.9, value / 1.5);
        });
        return {
          stats: [amp.toFixed(2), Math.abs(diff) < 0.8 ? "很接近共振" : "還沒到共振峰", normalized > 0.7 ? "現在反應特別強" : "振幅還可以更大"],
          visual: { kind: "curve", points, marker: state.drive / 20, color: "#8338ec" },
        };
      },
    },
    "standing-wave-harmonics": {
      controls: [
        { key: "n", label: "諧波數", type: "range", min: 1, max: 6, step: 1, value: 3, unit: " 次" },
        { key: "l", label: "弦長", type: "range", min: 2, max: 10, step: 0.5, value: 6, unit: " m" },
        { key: "v", label: "波速", type: "range", min: 2, max: 12, step: 0.5, value: 8, unit: " m/s" },
      ],
      statLabels: ["頻率", "波長", "觀察提示"],
      challenge: "把諧波數往上拉，觀察腹和節的數量怎麼改變。",
      compute(state) {
        const wavelength = (2 * state.l) / state.n;
        const frequency = (state.n * state.v) / (2 * state.l);
        return {
          stats: [`${frequency.toFixed(2)} Hz`, `${wavelength.toFixed(2)} m`, state.n > 4 ? "現在節點很多" : "還能清楚分辨每一段"],
          visual: { kind: "wave", mode: "standing", harmonic: state.n, amplitude: 0.32, color: "#118ab2" },
        };
      },
    },
    "spring-energy": {
      controls: [
        { key: "k", label: "彈簧常數", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: "" },
        { key: "a", label: "總振幅", type: "range", min: 2, max: 10, step: 0.5, value: 8, unit: "" },
        { key: "x", label: "目前位移", type: "range", min: 0, max: 10, step: 0.5, value: 4, unit: "" },
      ],
      statLabels: ["彈性位能", "動能", "觀察提示"],
      challenge: "把位移拉到接近總振幅，看看哪一種能量會占大部分。",
      compute(state) {
        const x = Math.min(state.x, state.a);
        const u = 0.5 * state.k * x * x;
        const total = 0.5 * state.k * state.a * state.a;
        const kinetic = Math.max(0, total - u);
        return {
          stats: [`${u.toFixed(1)} J`, `${kinetic.toFixed(1)} J`, x >= state.a ? "現在幾乎都在位能" : x < state.a * 0.3 ? "現在動能比較多" : "兩種能量都明顯"],
          visual: { kind: "bars", max: Math.max(10, total), bars: [{ label: "位能", value: u, color: "#ef476f" }, { label: "動能", value: kinetic, color: "#118ab2" }, { label: "總能", value: total, color: "#ffd166" }] },
        };
      },
    },
    "pendulum-energy": {
      controls: [
        { key: "angle", label: "角度", type: "range", min: 0, max: 60, step: 1, value: 25, unit: "°" },
        { key: "length", label: "擺長", type: "range", min: 2, max: 10, step: 0.5, value: 6, unit: " m" },
        { key: "mass", label: "擺球質量", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: " kg" },
      ],
      statLabels: ["位能差", "到底部最大速率", "觀察提示"],
      challenge: "把角度變大，再看看到底部時的最大速率會不會提高。",
      compute(state) {
        const rad = (state.angle * Math.PI) / 180;
        const height = state.length * (1 - Math.cos(rad));
        const potential = state.mass * 9.8 * height;
        const speed = Math.sqrt(Math.max(0, 2 * 9.8 * height));
        return {
          stats: [`${potential.toFixed(1)} J`, `${speed.toFixed(2)} m/s`, state.angle > 40 ? "高角度時位能變化明顯" : "先從小角度觀察也很清楚"],
          visual: { kind: "pendulum", angle: rad, color: "#ffd166" },
        };
      },
    },
    "angular-momentum": {
      controls: [
        { key: "m", label: "質量", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: " kg" },
        { key: "r", label: "半徑", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: " m" },
        { key: "v", label: "切線速度", type: "range", min: 1, max: 10, step: 0.5, value: 6, unit: " m/s" },
      ],
      statLabels: ["角動量", "轉動能量感", "觀察提示"],
      challenge: "把半徑和速度分別調大，看看哪一個對角動量的影響更直觀。",
      compute(state) {
        const l = state.m * state.r * state.v;
        const ke = 0.5 * state.m * state.v * state.v;
        return {
          stats: [l.toFixed(1), `${ke.toFixed(1)} J`, l > 150 ? "現在角動量很大" : "還能再往上調整"],
          visual: { kind: "bars", max: 200, bars: [{ label: "m", value: state.m * 10, color: "#ef476f" }, { label: "r", value: state.r * 10, color: "#118ab2" }, { label: "L", value: l, color: "#ffd166" }] },
        };
      },
    },
    "moment-of-inertia": {
      controls: [
        { key: "m", label: "總質量", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: " kg" },
        { key: "r", label: "半徑", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: " m" },
        { key: "k", label: "分布係數", type: "range", min: 0.4, max: 1.0, step: 0.05, value: 0.8, unit: "" },
      ],
      statLabels: ["轉動慣量", "是否難轉", "觀察提示"],
      challenge: "把質量往外分散，看看轉動慣量怎麼變大。",
      compute(state) {
        const i = state.k * state.m * state.r * state.r;
        return {
          stats: [i.toFixed(1), i > 120 ? "比較難加速轉動" : "還算容易轉動", state.k > 0.8 ? "質量分布偏外側" : "質量比較靠近中心"],
          visual: { kind: "bars", max: 160, bars: [{ label: "質量", value: state.m * 10, color: "#ef476f" }, { label: "半徑", value: state.r * 10, color: "#118ab2" }, { label: "I", value: i, color: "#ffd166" }] },
        };
      },
    },
    "torque-rotation": {
      controls: [
        { key: "force", label: "力", type: "range", min: 1, max: 10, step: 0.5, value: 6, unit: " N" },
        { key: "arm", label: "力臂", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: " m" },
        { key: "inertia", label: "轉動慣量", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: "" },
      ],
      statLabels: ["力矩", "角加速度", "觀察提示"],
      challenge: "把力臂縮短，再比較同樣的力能不能造成一樣的效果。",
      compute(state) {
        const torque = state.force * state.arm;
        const alpha = torque / state.inertia;
        return {
          stats: [`${torque.toFixed(1)} N·m`, `${alpha.toFixed(2)} rad/s²`, alpha > 8 ? "現在轉動加速很快" : "還有增強空間"],
          visual: { kind: "field", magnitude: Math.min(1, torque / 80), angle: -30, color: "#ff9f1c", secondAngle: 30 },
        };
      },
    },
    "projectile-range": {
      controls: [
        { key: "speed", label: "初速", type: "range", min: 2, max: 20, step: 0.5, value: 12, unit: " m/s" },
        { key: "angle", label: "角度", type: "range", min: 10, max: 80, step: 1, value: 45, unit: "°" },
        { key: "g", label: "重力加速度", type: "range", min: 5, max: 15, step: 0.5, value: 9.8, unit: " m/s²" },
      ],
      statLabels: ["射程", "最高點", "觀察提示"],
      challenge: "在同一個初速下，找出接近最遠射程的角度。",
      compute(state) {
        const angle = (state.angle * Math.PI) / 180;
        const range = (state.speed * state.speed * Math.sin(2 * angle)) / state.g;
        const height = (state.speed * state.speed * Math.sin(angle) * Math.sin(angle)) / (2 * state.g);
        return {
          stats: [`${range.toFixed(2)} m`, `${height.toFixed(2)} m`, Math.abs(state.angle - 45) < 4 ? "這裡通常接近最遠射程" : "還可以再調整角度"],
          visual: { kind: "projectile", rangeNorm: Math.min(1, range / 28), heightNorm: Math.min(0.9, height / 14) },
        };
      },
    },
    "escape-velocity": {
      controls: [
        { key: "mass", label: "行星質量因子", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: "" },
        { key: "radius", label: "行星半徑因子", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: "" },
        { key: "launch", label: "發射速度", type: "range", min: 1, max: 20, step: 0.5, value: 8, unit: " km/s" },
      ],
      statLabels: ["逃逸速度", "目前結果", "觀察提示"],
      challenge: "先固定半徑，再把質量加大，看看需要的逃逸速度如何改變。",
      compute(state) {
        const escape = Math.sqrt((2 * state.mass) / state.radius) * 8;
        const result = state.launch >= escape ? "足以逃離" : "速度還不夠";
        return {
          stats: [`${escape.toFixed(2)} km/s`, result, state.launch >= escape ? "已經超過門檻" : "再增加速度或減小半徑"],
          visual: { kind: "bars", max: 20, bars: [{ label: "發射", value: state.launch, color: "#118ab2" }, { label: "逃逸", value: escape, color: "#ef476f" }] },
        };
      },
    },
    "kepler-third-law": {
      controls: [
        { key: "radius", label: "軌道半徑", type: "range", min: 2, max: 12, step: 0.5, value: 6, unit: " AU" },
        { key: "mass", label: "中心質量", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: "" },
        { key: "phase", label: "位置角", type: "range", min: 0, max: 360, step: 5, value: 40, unit: "°" },
      ],
      statLabels: ["公轉週期", "軌道速率感", "觀察提示"],
      challenge: "把軌道拉遠，再比較週期和速度是怎麼同時改變的。",
      compute(state) {
        const period = Math.sqrt((state.radius * state.radius * state.radius) / state.mass);
        const speed = Math.sqrt(state.mass / state.radius);
        return {
          stats: [`${period.toFixed(2)} 年`, speed > 1 ? "比較快" : "比較慢", state.radius > 8 ? "遠軌道的週期會拉長" : "近軌道通常繞得更快"],
          visual: { kind: "circle", radius: Math.min(0.43, state.radius / 30), angle: (state.phase * Math.PI) / 180, color: "#4cc9f0" },
        };
      },
    },
    "bernoulli-flow": {
      controls: [
        { key: "speed", label: "流速", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: " m/s" },
        { key: "height", label: "高度", type: "range", min: 0, max: 10, step: 0.5, value: 2, unit: " m" },
        { key: "density", label: "密度因子", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: "" },
      ],
      statLabels: ["靜壓", "動壓", "觀察提示"],
      challenge: "把流速拉高，看看動壓增加時靜壓會如何變化。",
      compute(state) {
        const dynamic = 0.5 * state.density * state.speed * state.speed;
        const staticPressure = Math.max(0, 70 - dynamic - state.density * state.height * 0.8);
        return {
          stats: [staticPressure.toFixed(1), dynamic.toFixed(1), state.speed > 7 ? "高速流動時靜壓通常較低" : "先從低速慢慢比較"],
          visual: { kind: "bars", max: 80, bars: [{ label: "靜壓", value: staticPressure, color: "#118ab2" }, { label: "動壓", value: dynamic, color: "#ef476f" }] },
        };
      },
    },
    "venturi-effect": {
      controls: [
        { key: "wide", label: "寬管徑", type: "range", min: 6, max: 12, step: 0.5, value: 10, unit: "" },
        { key: "narrow", label: "窄管徑", type: "range", min: 2, max: 10, step: 0.5, value: 4, unit: "" },
        { key: "flow", label: "流量", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: "" },
      ],
      statLabels: ["寬處流速", "窄處流速", "觀察提示"],
      challenge: "把窄管再縮小，觀察窄處流速會不會更快。",
      compute(state) {
        const area1 = state.wide * state.wide;
        const area2 = Math.max(4, state.narrow * state.narrow);
        const v1 = (state.flow * 40) / area1;
        const v2 = (state.flow * 40) / area2;
        return {
          stats: [v1.toFixed(2), v2.toFixed(2), v2 > v1 * 2 ? "窄處明顯更快，壓力通常更低" : "兩端差異還不算太大"],
          visual: { kind: "bars", max: 6, bars: [{ label: "寬處", value: v1, color: "#118ab2" }, { label: "窄處", value: v2, color: "#ef476f" }] },
        };
      },
    },
    polarization: {
      controls: [
        { key: "i0", label: "入射強度", type: "range", min: 20, max: 100, step: 5, value: 80, unit: "%" },
        { key: "angle", label: "分析器角度", type: "range", min: 0, max: 90, step: 1, value: 30, unit: "°" },
      ],
      statLabels: ["輸出強度", "通過比例", "觀察提示"],
      challenge: "把角度轉到 90 度，看看通過光強度會剩下多少。",
      compute(state) {
        const intensity = state.i0 * Math.cos((state.angle * Math.PI) / 180) ** 2;
        const ratio = intensity / state.i0;
        return {
          stats: [`${intensity.toFixed(1)}%`, `${(ratio * 100).toFixed(1)}%`, state.angle > 80 ? "現在幾乎快被擋住了" : "角度越大，通過越少"],
          visual: { kind: "bars", max: 100, bars: [{ label: "入射", value: state.i0, color: "#ffd166" }, { label: "輸出", value: intensity, color: "#118ab2" }] },
        };
      },
    },
    "diffraction-grating": {
      controls: [
        { key: "wave", label: "波長", type: "range", min: 400, max: 700, step: 10, value: 520, unit: " nm" },
        { key: "spacing", label: "光柵間距", type: "range", min: 2, max: 10, step: 0.5, value: 5, unit: " μm" },
        { key: "order", label: "階數", type: "range", min: 1, max: 3, step: 1, value: 1, unit: "" },
      ],
      statLabels: ["偏轉角", "光色位置", "觀察提示"],
      challenge: "把波長調長，再比較亮線在屏幕上的位置會怎麼移動。",
      compute(state) {
        const ratio = Math.min(0.95, (state.order * state.wave) / (state.spacing * 1000));
        const angle = Math.asin(ratio) * 180 / Math.PI;
        return {
          stats: [`${angle.toFixed(1)}°`, state.wave < 470 ? "偏藍紫" : state.wave < 590 ? "偏綠黃" : "偏紅", angle > 20 ? "亮線被拉得比較開" : "亮線還在中心附近"],
          visual: { kind: "spectrum", lines: [{ x: 0.5 - ratio * 0.35, color: wavelengthColor(state.wave) }, { x: 0.5 + ratio * 0.35, color: wavelengthColor(state.wave) }] },
        };
      },
    },
    "semiconductor-diode": {
      controls: [
        { key: "v", label: "外加電壓", type: "range", min: 0, max: 10, step: 0.2, value: 1.2, unit: " V" },
        { key: "threshold", label: "導通門檻", type: "range", min: 0.4, max: 3.0, step: 0.1, value: 0.7, unit: " V" },
        { key: "temp", label: "溫度因子", type: "range", min: 1, max: 5, step: 0.5, value: 2, unit: "" },
      ],
      statLabels: ["電流", "是否導通", "觀察提示"],
      challenge: "讓外加電壓從門檻下方跨過去，看看電流會不會突然放大。",
      compute(state) {
        const current = state.v > state.threshold ? (Math.exp((state.v - state.threshold) * state.temp) - 1) * 0.4 : 0;
        const points = linePoints((x) => {
          const voltage = x * 10;
          const value = voltage > state.threshold ? (Math.exp((voltage - state.threshold) * state.temp) - 1) * 0.05 : 0;
          return 1 - Math.min(0.92, value);
        });
        return {
          stats: [`${current.toFixed(2)} A`, current > 0 ? "已導通" : "尚未明顯導通", current > 1 ? "現在電流上升很快" : "跨過門檻後會更明顯"],
          visual: { kind: "curve", points, marker: state.v / 10, color: "#ef476f" },
        };
      },
    },
    "transistor-switch": {
      controls: [
        { key: "ib", label: "基極電流", type: "range", min: 0, max: 10, step: 0.5, value: 2, unit: " mA" },
        { key: "beta", label: "電流增益", type: "range", min: 10, max: 100, step: 5, value: 40, unit: "" },
        { key: "load", label: "負載上限", type: "range", min: 2, max: 20, step: 1, value: 10, unit: " mA" },
      ],
      statLabels: ["集極電流", "開關狀態", "觀察提示"],
      challenge: "把基極電流慢慢加大，找出燈泡明顯亮起來的區間。",
      compute(state) {
        const ideal = state.ib * state.beta * 0.1;
        const ic = Math.min(ideal, state.load);
        return {
          stats: [`${ic.toFixed(1)} mA`, ic < 0.5 ? "接近關閉" : ic < state.load ? "放大中" : "接近飽和", ic >= state.load ? "再加基極電流也不會無限增大" : "還有放大空間"],
          visual: { kind: "bars", max: Math.max(12, state.load), bars: [{ label: "基極", value: state.ib, color: "#8338ec" }, { label: "集極", value: ic, color: "#ffd166" }, { label: "上限", value: state.load, color: "#118ab2" }] },
        };
      },
    },
    "quantum-tunneling": {
      controls: [
        { key: "energy", label: "粒子能量", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: "" },
        { key: "height", label: "障壁高度", type: "range", min: 2, max: 12, step: 0.5, value: 8, unit: "" },
        { key: "width", label: "障壁寬度", type: "range", min: 1, max: 10, step: 0.5, value: 4, unit: "" },
      ],
      statLabels: ["穿透機率", "是否容易通過", "觀察提示"],
      challenge: "先固定能量，再增加障壁寬度，看看穿透機率下降有多快。",
      compute(state) {
        const deficit = Math.max(0, state.height - state.energy);
        const transmission = deficit === 0 ? 0.95 : Math.exp(-(state.width * Math.sqrt(deficit)) / 3.6);
        return {
          stats: [`${(transmission * 100).toFixed(1)}%`, transmission > 0.6 ? "很容易通過" : transmission > 0.2 ? "還有部分能穿透" : "大多被擋下", deficit === 0 ? "能量超過障壁時更容易通過" : "量子效果讓少部分粒子仍可穿透"],
          visual: { kind: "barrier", transmission, barrierHeight: Math.min(0.85, state.height / 12) },
        };
      },
    },
    "infinite-potential-well": {
      controls: [
        { key: "n", label: "量子數", type: "range", min: 1, max: 5, step: 1, value: 2, unit: "" },
        { key: "width", label: "盒子寬度", type: "range", min: 2, max: 10, step: 0.5, value: 6, unit: "" },
        { key: "mass", label: "質量因子", type: "range", min: 1, max: 10, step: 0.5, value: 3, unit: "" },
      ],
      statLabels: ["能量階", "節點數", "觀察提示"],
      challenge: "把量子數調高，看看波形節點會怎麼增加。",
      compute(state) {
        const energy = (state.n * state.n * 12) / (state.mass * state.width * state.width * 0.2);
        return {
          stats: [energy.toFixed(2), `${state.n - 1}`, state.n > 3 ? "高能階波形起伏更多" : "低能階比較簡單"],
          visual: { kind: "wave", mode: "box", harmonic: state.n, amplitude: 0.34, color: "#3a86ff" },
        };
      },
    },
    "bohr-spectrum-advanced": {
      controls: [
        { key: "ni", label: "起始能階", type: "range", min: 2, max: 6, step: 1, value: 4, unit: "" },
        { key: "nf", label: "終止能階", type: "range", min: 1, max: 5, step: 1, value: 2, unit: "" },
      ],
      statLabels: ["能量差", "光子波長", "觀察提示"],
      challenge: "把起始能階拉高，再比較不同終止能階會產生什麼顏色。",
      compute(state) {
        const ni = Math.max(state.nf + 1, state.ni);
        const delta = 13.6 * ((1 / (state.nf * state.nf)) - (1 / (ni * ni)));
        const wavelength = 1240 / Math.max(0.1, delta);
        return {
          stats: [`${delta.toFixed(2)} eV`, `${wavelength.toFixed(0)} nm`, wavelength < 470 ? "偏藍紫光" : wavelength < 590 ? "偏綠黃光" : "偏紅光"],
          visual: { kind: "spectrum", lines: [{ x: 0.5, color: wavelengthColor(wavelength) }] },
        };
      },
    },
    "nuclear-binding-energy": {
      controls: [
        { key: "a", label: "核子數 A", type: "range", min: 4, max: 240, step: 4, value: 56, unit: "" },
      ],
      statLabels: ["每核子束縛能", "總束縛能", "觀察提示"],
      challenge: "把核子數從小一路拉到大，找出束縛能接近最高的區域。",
      compute(state) {
        const a = state.a;
        const per = 8.8 - Math.pow((a - 56) / 70, 2) * 4.2;
        const safePer = Math.max(1, per);
        const total = safePer * a;
        return {
          stats: [`${safePer.toFixed(2)} MeV`, `${total.toFixed(0)} MeV`, a > 180 ? "超重核通常不再那麼穩定" : a > 40 && a < 80 ? "這附近通常較穩定" : "往中等大小靠近時會變穩"],
          visual: { kind: "bars", max: 10, bars: [{ label: "每核子", value: safePer, color: "#118ab2" }, { label: "相對穩定", value: Math.max(0, safePer - 1), color: "#ffd166" }] },
        };
      },
    },
    "photoelectric-advanced": {
      controls: [
        { key: "f", label: "頻率因子", type: "range", min: 1, max: 12, step: 0.5, value: 7, unit: "" },
        { key: "work", label: "逸出功", type: "range", min: 2, max: 8, step: 0.5, value: 4, unit: "" },
        { key: "intensity", label: "光強度", type: "range", min: 1, max: 10, step: 0.5, value: 5, unit: "" },
      ],
      statLabels: ["電子最大動能", "光電子流量感", "觀察提示"],
      challenge: "先提高頻率，再提高強度，比較哪個主要改變電子動能、哪個主要改變數量。",
      compute(state) {
        const kinetic = Math.max(0, state.f - state.work);
        const current = kinetic > 0 ? state.intensity * 0.8 : 0;
        return {
          stats: [`${kinetic.toFixed(2)} 單位`, current.toFixed(1), kinetic > 0 ? "頻率決定能不能打出電子，強度常影響數量" : "還沒超過逸出功門檻"],
          visual: { kind: "barrier", transmission: Math.min(1, current / 10), barrierHeight: Math.min(0.85, state.work / 10), color: "#ffd166" },
        };
      },
    },
    "signal-filter": {
      controls: [
        { key: "freq", label: "輸入頻率", type: "range", min: 1, max: 20, step: 0.5, value: 6, unit: " Hz" },
        { key: "cutoff", label: "截止頻率", type: "range", min: 1, max: 20, step: 0.5, value: 8, unit: " Hz" },
        { key: "amp", label: "輸入振幅", type: "range", min: 1, max: 10, step: 0.5, value: 6, unit: " V" },
      ],
      statLabels: ["輸出振幅", "通過比例", "觀察提示"],
      challenge: "把輸入頻率往上拉，找出濾波器開始明顯削弱訊號的區域。",
      compute(state) {
        const ratio = 1 / Math.sqrt(1 + Math.pow(state.freq / Math.max(0.5, state.cutoff), 2));
        const output = state.amp * ratio;
        const points = Array.from({ length: 80 }, (_, index) => {
          const f = 0.2 + (index / 79) * 20;
          const r = 1 / Math.sqrt(1 + Math.pow(f / Math.max(0.5, state.cutoff), 2));
          return 1 - r * 0.85;
        });
        return {
          stats: [`${output.toFixed(2)} V`, `${(ratio * 100).toFixed(1)}%`, state.freq > state.cutoff ? "高於截止頻率後衰減更明顯" : "目前訊號大多還能通過"],
          visual: { kind: "curve", points, marker: state.freq / 20, color: "#118ab2" },
        };
      },
    },
  };

  const config = packConfigs[conceptId];

  if (!config) {
    return;
  }

  const refs = {
    sceneTitle: document.querySelector("#packSceneTitle"),
    sceneDesc: document.querySelector("#packSceneDesc"),
    controlTitle: document.querySelector("#packControlTitle"),
    controlDesc: document.querySelector("#packControlDesc"),
    controls: document.querySelector("#packControls"),
    stats: document.querySelector("#packStats"),
    observe: document.querySelector("#packObserve"),
    challenge: document.querySelector("#packChallenge"),
    canvas: document.querySelector("#packCanvas"),
  };

  const ctx = refs.canvas.getContext("2d");
  const state = {};
  const statValueEls = [];

  refs.sceneTitle.textContent = `${concept.title}互動畫面`;
  refs.sceneDesc.textContent = concept.summary;
  refs.controlTitle.textContent = "操作控制";
  refs.controlDesc.textContent = concept.interaction;

  refs.observe.innerHTML = [
    `先調整「${config.controls[0].label}」，觀察畫面和數值怎麼改變。`,
    config.controls[1] ? `再搭配「${config.controls[1].label}」一起比較，找出最明顯的變化。` : "再試著來回調整控制，觀察趨勢是否一致。",
    "把畫面變化和下方數值一起看，比較容易理解公式代表的意思。",
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
  refs.challenge.textContent = config.challenge || "試著調出一個極端結果，再回頭解釋為什麼會這樣。";

  refs.controls.innerHTML = config.controls
    .map((control) => {
      if (control.type === "select") {
        return `
          <label class="control-group">
            <span>${control.label}</span>
            <select data-control="${control.key}">
              ${control.options.map((option) => `<option value="${option.value}">${option.label}</option>`).join("")}
            </select>
          </label>
        `;
      }

      return `
        <label class="control-group">
          <span>${control.label}：<strong data-value="${control.key}">${control.value}</strong>${control.unit || ""}</span>
          <input
            data-control="${control.key}"
            type="range"
            min="${control.min}"
            max="${control.max}"
            step="${control.step}"
            value="${control.value}"
          />
        </label>
      `;
    })
    .join("");

  refs.stats.innerHTML = config.statLabels
    .map((label) => `<div class="stat-item"><span>${label}</span><strong class="pack-stat-value">-</strong></div>`)
    .join("");
  refs.stats.querySelectorAll(".pack-stat-value").forEach((el) => statValueEls.push(el));

  config.controls.forEach((control) => {
    state[control.key] = control.value;
  });

  refs.controls.querySelectorAll("[data-control]").forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.control;
      state[key] = input.tagName === "SELECT" ? input.value : Number(input.value);
      const valueEl = refs.controls.querySelector(`[data-value="${key}"]`);
      if (valueEl) {
        valueEl.textContent = typeof state[key] === "number" ? Number(state[key]).toString() : String(state[key]);
      }
      refresh();
    });
  });

  function refresh() {
    const result = config.compute(state);
    result.stats.forEach((value, index) => {
      if (statValueEls[index]) {
        statValueEls[index].textContent = value;
      }
    });
    drawVisual(result.visual);
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, refs.canvas.width, refs.canvas.height);
    ctx.fillStyle = "#f8fbff";
    ctx.fillRect(0, 0, refs.canvas.width, refs.canvas.height);
  }

  function drawAxes() {
    ctx.strokeStyle = "rgba(52, 73, 94, 0.18)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(48, 24);
    ctx.lineTo(48, 304);
    ctx.lineTo(612, 304);
    ctx.stroke();
  }

  function drawBars(visual) {
    clearCanvas();
    drawAxes();
    const max = visual.max || 1;
    visual.bars.forEach((bar, index) => {
      const width = 120;
      const x = 84 + index * 170;
      const height = Math.max(6, (bar.value / max) * 200);
      const y = 294 - height;
      ctx.fillStyle = bar.color;
      ctx.fillRect(x, y, width, height);
      ctx.fillStyle = "#233045";
      ctx.font = "16px sans-serif";
      ctx.fillText(bar.label, x + 26, 324);
    });
  }

  function drawCurve(visual) {
    clearCanvas();
    drawAxes();
    ctx.strokeStyle = visual.color || "#118ab2";
    ctx.lineWidth = 4;
    ctx.beginPath();
    visual.points.forEach((point, index) => {
      const x = 48 + (564 * index) / Math.max(1, visual.points.length - 1);
      const y = 28 + point * 270;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    if (typeof visual.marker === "number") {
      const markerX = 48 + visual.marker * 564;
      ctx.strokeStyle = "rgba(239, 71, 111, 0.9)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(markerX, 28);
      ctx.lineTo(markerX, 304);
      ctx.stroke();
    }
  }

  function drawField(visual) {
    clearCanvas();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, refs.canvas.width, refs.canvas.height);
    ctx.strokeStyle = "rgba(52, 73, 94, 0.1)";
    for (let x = 60; x <= 580; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 30);
      ctx.lineTo(x, 310);
      ctx.stroke();
    }
    for (let y = 50; y <= 290; y += 40) {
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(600, y);
      ctx.stroke();
    }

    const cx = 220;
    const cy = 170;
    const length = 40 + visual.magnitude * 120;
    const angle = (visual.angle * Math.PI) / 180;
    const dx = Math.cos(angle) * length;
    const dy = Math.sin(angle) * length;

    ctx.fillStyle = visual.color || "#ef476f";
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = visual.color || "#ef476f";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + dx, cy + dy);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + dx, cy + dy);
    ctx.lineTo(cx + dx - 16 * Math.cos(angle - 0.4), cy + dy - 16 * Math.sin(angle - 0.4));
    ctx.lineTo(cx + dx - 16 * Math.cos(angle + 0.4), cy + dy - 16 * Math.sin(angle + 0.4));
    ctx.closePath();
    ctx.fill();

    if (typeof visual.secondAngle === "number") {
      const second = (visual.secondAngle * Math.PI) / 180;
      ctx.strokeStyle = "rgba(17, 138, 178, 0.8)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(420, 170);
      ctx.lineTo(420 + Math.cos(second) * 100, 170 + Math.sin(second) * 100);
      ctx.stroke();
    }
  }

  function drawCircle(visual) {
    clearCanvas();
    const cx = 320;
    const cy = 170;
    const radius = 40 + visual.radius * 260;
    ctx.fillStyle = "#1d3557";
    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(17, 138, 178, 0.35)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
    const angle = visual.angle || 0;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.fillStyle = visual.color || "#ffd166";
    ctx.beginPath();
    ctx.arc(x, y, 14, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawWave(visual) {
    clearCanvas();
    drawAxes();
    ctx.strokeStyle = visual.color || "#118ab2";
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let step = 0; step <= 120; step += 1) {
      const x = step / 120;
      let y;
      if (visual.mode === "standing" || visual.mode === "box") {
        y = 0.5 - Math.sin(Math.PI * visual.harmonic * x) * Math.sin(Math.PI / 3) * visual.amplitude;
      } else {
        y = 0.5 - Math.sin(Math.PI * 2 * x) * visual.amplitude;
      }
      const px = 48 + x * 564;
      const py = 28 + y * 270;
      if (step === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();
  }

  function drawProjectile(visual) {
    clearCanvas();
    ctx.fillStyle = "#f5fbff";
    ctx.fillRect(0, 0, refs.canvas.width, refs.canvas.height);
    ctx.fillStyle = "#d9f0d8";
    ctx.fillRect(0, 280, refs.canvas.width, 60);
    ctx.strokeStyle = "#ef476f";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(70, 280);
    const endX = 70 + visual.rangeNorm * 500;
    const peakY = 280 - visual.heightNorm * 220;
    ctx.quadraticCurveTo((70 + endX) / 2, peakY, endX, 280);
    ctx.stroke();
  }

  function drawSpectrum(visual) {
    clearCanvas();
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, refs.canvas.width, refs.canvas.height);
    visual.lines.forEach((line) => {
      const x = 80 + line.x * 480;
      ctx.fillStyle = line.color;
      ctx.fillRect(x, 40, 8, 260);
      ctx.shadowColor = line.color;
      ctx.shadowBlur = 18;
      ctx.fillRect(x, 40, 8, 260);
      ctx.shadowBlur = 0;
    });
  }

  function drawBarrier(visual) {
    clearCanvas();
    ctx.fillStyle = "#f8fbff";
    ctx.fillRect(0, 0, refs.canvas.width, refs.canvas.height);
    ctx.fillStyle = "rgba(52, 73, 94, 0.18)";
    ctx.fillRect(290, 70, 56, visual.barrierHeight * 220);
    ctx.fillStyle = visual.color || "#118ab2";
    for (let index = 0; index < 9; index += 1) {
      ctx.beginPath();
      ctx.arc(80 + index * 20, 180 + ((index % 3) - 1) * 24, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    const passCount = Math.round(visual.transmission * 9);
    for (let index = 0; index < passCount; index += 1) {
      ctx.beginPath();
      ctx.arc(400 + index * 20, 180 + ((index % 3) - 1) * 20, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawPendulum(visual) {
    clearCanvas();
    const cx = 320;
    const cy = 60;
    const length = 180;
    const x = cx + Math.sin(visual.angle) * length;
    const y = cy + Math.cos(visual.angle) * length;
    ctx.fillStyle = "#334155";
    ctx.fillRect(cx - 70, cy - 12, 140, 12);
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = visual.color || "#ffd166";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawVisual(visual) {
    switch (visual.kind) {
      case "bars":
        drawBars(visual);
        break;
      case "curve":
        drawCurve(visual);
        break;
      case "field":
        drawField(visual);
        break;
      case "circle":
        drawCircle(visual);
        break;
      case "wave":
        drawWave(visual);
        break;
      case "projectile":
        drawProjectile(visual);
        break;
      case "spectrum":
        drawSpectrum(visual);
        break;
      case "barrier":
        drawBarrier(visual);
        break;
      case "pendulum":
        drawPendulum(visual);
        break;
      default:
        clearCanvas();
    }
  }

  function linePoints(fn, steps = 80) {
    return Array.from({ length: steps }, (_, index) => {
      const x = index / Math.max(1, steps - 1);
      return Math.max(0.02, Math.min(0.98, fn(x)));
    });
  }

  function wavelengthColor(wavelength) {
    if (wavelength < 460) {
      return "#4361ee";
    }
    if (wavelength < 530) {
      return "#4cc9f0";
    }
    if (wavelength < 590) {
      return "#ffd166";
    }
    return "#ef476f";
  }

  refresh();
})();
