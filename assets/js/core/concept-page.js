(function () {
  const quizBank = {
    "gravity-fall": {
      question: "球放開後最可能怎麼移動？",
      choices: ["往下掉", "往上飄", "停在空中"],
      answer: 0,
      explanation: "因為地球重力會把物體往下拉。",
    },
    "air-resistance": {
      question: "降落傘張得更大時，通常會怎麼樣？",
      choices: ["掉得比較慢", "掉得比較快", "完全沒差"],
      answer: 0,
      explanation: "面積變大，空氣阻力通常也會變大。",
    },
    "static-electricity": {
      question: "摩擦後的氣球為什麼比較容易吸住紙片？",
      choices: ["因為帶電了", "因為變重了", "因為變冷了"],
      answer: 0,
      explanation: "摩擦後產生靜電，會吸引輕小物體。",
    },
    magnetism: {
      question: "兩個相同磁極靠近時，常會怎樣？",
      choices: ["互相排斥", "互相吸引", "沒有反應"],
      answer: 0,
      explanation: "相同磁極會互相排斥，不同磁極才容易吸引。",
    },
    force: {
      question: "施力變大時，箱子通常會怎樣？",
      choices: ["更容易加速", "一定停住", "變得更輕"],
      answer: 0,
      explanation: "較大的力通常會讓物體速度改變得更明顯。",
    },
    "collision-bounce": {
      question: "比較有彈性的球撞到地面後會怎樣？",
      choices: ["彈得比較高", "完全不會彈", "直接穿過地面"],
      answer: 0,
      explanation: "有彈性的材質在碰撞後較容易把能量保留下來。",
    },
    pulley: {
      question: "滑輪常帶來哪一種好處？",
      choices: ["比較省力", "讓重物消失", "讓地心引力消失"],
      answer: 0,
      explanation: "滑輪可以改變施力方向，或讓需要的力變小。",
    },
    friction: {
      question: "哪種地面通常讓物體滑得最遠？",
      choices: ["冰面", "地毯", "粗糙木板"],
      answer: 0,
      explanation: "冰面的摩擦力較小，所以比較容易滑得遠。",
    },
    "light-shadow": {
      question: "光源更靠近物體時，影子常有什麼變化？",
      choices: ["變長或變大", "完全不變", "一定變成圓形"],
      answer: 0,
      explanation: "光線張開得更明顯時，影子通常也會跟著變大。",
    },
    circuit: {
      question: "燈泡什麼時候最容易亮起來？",
      choices: ["電路形成完整迴路時", "只有一條線碰到時", "電池拿遠時"],
      answer: 0,
      explanation: "電流要能完整繞一圈，燈泡才會亮。",
    },
    speed: {
      question: "速度變快時，同樣時間內通常會怎樣？",
      choices: ["跑得更遠", "跑得更近", "完全不動"],
      answer: 0,
      explanation: "速度越快，同樣時間內移動距離通常越長。",
    },
    "inclined-plane": {
      question: "使用斜坡搬東西，常見的好處是什麼？",
      choices: ["比較省力", "讓東西變輕", "讓距離變短"],
      answer: 0,
      explanation: "斜面常用較長的路徑，換到較小的力。",
    },
    convection: {
      question: "較熱的流體通常會往哪裡移動？",
      choices: ["往上", "往下", "完全不動"],
      answer: 0,
      explanation: "較熱流體密度較小，所以常往上移動。",
    },
    "heat-transfer": {
      question: "金屬湯匙放進熱湯後變熱，主要是哪種傳熱？",
      choices: ["熱傳導", "折射", "浮力"],
      answer: 0,
      explanation: "熱沿著物體慢慢傳遞，就是熱傳導。",
    },
    "insulation-design": {
      question: "杯子外面加上保溫材料，通常會怎樣？",
      choices: ["熱散失得比較慢", "水立刻沸騰", "重量完全消失"],
      answer: 0,
      explanation: "保溫材料能降低熱量往外傳的速度。",
    },
    buoyancy: {
      question: "物體比較容易浮起來，通常代表什麼？",
      choices: ["平均密度比水小", "一定很大", "一定很重"],
      answer: 0,
      explanation: "平均密度比水小的物體，比較容易浮在水面。",
    },
    sound: {
      question: "振動得更快，聲音通常會怎麼變？",
      choices: ["音調更高", "音量一定更大", "完全沒聲音"],
      answer: 0,
      explanation: "振動頻率越高，音調通常也越高。",
    },
    vibration: {
      question: "物體能發出聲音，最重要的原因是什麼？",
      choices: ["它在振動", "它很亮", "它很重"],
      answer: 0,
      explanation: "聲音來自振動，振動會把能量傳給空氣。",
    },
    "average-instant-speed": {
      question: "瞬時速度是在看什麼？",
      choices: ["某一個當下有多快", "整段旅程平均多快", "顏色有多快改變"],
      answer: 0,
      explanation: "瞬時速度是在看某一個時間點的速度。",
    },
    "projectile-motion": {
      question: "改變發射角度後，最容易改變什麼？",
      choices: ["飛行路線和落點", "地心引力方向", "球的顏色"],
      answer: 0,
      explanation: "角度不同，拋物線的高度和距離都會改變。",
    },
    "work-power": {
      question: "功率比較大，通常表示什麼？",
      choices: ["做功比較快", "東西一定更重", "距離一定更短"],
      answer: 0,
      explanation: "功率是在描述做功的快慢。",
    },
    pressure: {
      question: "同樣重量下，接觸面積變小時壓力通常會怎樣？",
      choices: ["變大", "變小", "不變"],
      answer: 0,
      explanation: "同樣的力集中在更小面積上，壓力會更明顯。",
    },
    newton: {
      question: "在施力相同時，較輕的小車通常會怎樣？",
      choices: ["加速度較大", "更難動", "往反方向走"],
      answer: 0,
      explanation: "同樣的力作用在較小質量上，速度改變通常更明顯。",
    },
    "newton-third-law": {
      question: "牛頓第三定律最重要的概念是什麼？",
      choices: ["作用力和反作用力同時出現", "只有大的物體才有力", "力只會往一個方向"],
      answer: 0,
      explanation: "甲對乙施力時，乙也會同時對甲施力。",
    },
    lever: {
      question: "想讓槓桿更容易平衡，可以調整什麼？",
      choices: ["砝碼位置或支點", "天氣", "顏色"],
      answer: 0,
      explanation: "重量和離支點的距離都會影響力矩。",
    },
    "pascal-principle": {
      question: "帕斯卡原理常用在哪一類裝置？",
      choices: ["液壓裝置", "望遠鏡", "磁鐵盒"],
      answer: 0,
      explanation: "液壓千斤頂、煞車系統都會用到這個概念。",
    },
    hydraulic: {
      question: "連通器中的液面最後常會怎樣？",
      choices: ["趨向同一高度", "永遠一高一低", "完全消失"],
      answer: 0,
      explanation: "在同一種液體中，靜止時液面通常會趨向平衡。",
    },
    density: {
      question: "密度是在描述什麼？",
      choices: ["同樣體積有多重", "顏色有多深", "形狀有多圓"],
      answer: 0,
      explanation: "密度是在比較同樣體積裡裝了多少質量。",
    },
    reflection: {
      question: "平面鏡反射時，哪個關係常成立？",
      choices: ["入射角等於反射角", "反射角永遠是 0", "光線一定停止"],
      answer: 0,
      explanation: "這是光反射的基本規則。",
    },
    refraction: {
      question: "光從空氣進入水中時，常會怎麼樣？",
      choices: ["方向改變", "完全消失", "顏色全部變黑"],
      answer: 0,
      explanation: "因為光在不同介質中的速度不同，所以會彎折。",
    },
    "lens-imaging": {
      question: "把物體和凸透鏡距離改變時，像會怎樣？",
      choices: ["大小和位置改變", "永遠不變", "一定消失"],
      answer: 0,
      explanation: "成像和物距很有關係，所以像的位置和大小會跟著變。",
    },
    "wave-properties": {
      question: "振幅變大時，波最明顯的改變是什麼？",
      choices: ["上下擺動更明顯", "速度一定變 0", "波峰消失"],
      answer: 0,
      explanation: "振幅代表擺動大小，振幅大時波峰和波谷更明顯。",
    },
    doppler: {
      question: "救護車朝你靠近時，聽到的聲音通常會怎麼變？",
      choices: ["音調變高", "音調變低", "完全不變"],
      answer: 0,
      explanation: "靠近時前方波峰更密，所以聽起來音調較高。",
    },
    "series-parallel": {
      question: "並聯電路常有什麼特點？",
      choices: ["一盞壞掉，其他可能還會亮", "電流只能走一條路", "所有燈一定一樣暗"],
      answer: 0,
      explanation: "並聯有多條路徑，所以其他支路仍可能運作。",
    },
    "ohms-law": {
      question: "在電壓固定時，電阻變大，電流通常會怎樣？",
      choices: ["變小", "變大", "完全不變"],
      answer: 0,
      explanation: "電阻越大，電流通常越小。",
    },
    electromagnet: {
      question: "想讓電磁鐵更強，可以怎麼做？",
      choices: ["增加圈數或電流", "把電池拿掉", "減少鐵芯"],
      answer: 0,
      explanation: "增加線圈圈數或電流，通常能讓磁力更強。",
    },
    "power-generation": {
      question: "發電的共通點最接近哪一個？",
      choices: ["把其他形式能量轉成電能", "把電能變成顏色", "讓重力消失"],
      answer: 0,
      explanation: "風、水、陽光和燃料都能透過裝置轉成電能。",
    },
    "energy-conversion": {
      question: "球從高處滾下來時，最明顯的能量變化是什麼？",
      choices: ["位能變少、動能變多", "位能變多、動能變少", "兩者都消失"],
      answer: 0,
      explanation: "往下移動時，高度降低，位能轉成動能。",
    },
    "energy-efficiency": {
      question: "能源效率比較高，通常代表什麼？",
      choices: ["浪費比較少", "一定更大台", "一定沒有熱"],
      answer: 0,
      explanation: "效率高表示更多能量變成有用的部分。",
    },
    "thermal-expansion": {
      question: "很多材料受熱後，常會怎樣？",
      choices: ["膨脹一些", "一定變成冰", "完全不變"],
      answer: 0,
      explanation: "熱脹冷縮是很多材料常見的現象。",
    },
    "heat-radiation": {
      question: "深色表面在陽光下常有什麼特點？",
      choices: ["比較容易吸熱", "完全不吸熱", "一定比較冷"],
      answer: 0,
      explanation: "深色表面通常比較容易吸收輻射熱。",
    },
    tides: {
      question: "潮汐和哪一個天體的影響最有關？",
      choices: ["月球", "火星", "木星"],
      answer: 0,
      explanation: "月球重力對海水凸起的影響非常明顯。",
    },
    "measurement-error": {
      question: "如果同一個量測做很多次，最常先拿來代表結果的是什麼？",
      choices: ["平均值", "最大值", "最小值"],
      answer: 0,
      explanation: "多次量測時，常會先用平均值來代表比較穩定的結果。",
    },
    "vector-components": {
      question: "一個斜向上的力，可以拆成哪兩個最常見的分量？",
      choices: ["水平分量和垂直分量", "長度和質量", "速度和時間"],
      answer: 0,
      explanation: "向量常會沿著水平與垂直方向分解，方便分析。",
    },
    "circular-motion": {
      question: "物體做等速度圓周運動時，向心力方向會指向哪裡？",
      choices: ["圓心", "切線方向", "遠離圓心"],
      answer: 0,
      explanation: "向心力會一直把物體拉向圓心，才能維持圓周路徑。",
    },
    "simple-harmonic-motion": {
      question: "簡諧運動裡，恢復力最常把物體往哪裡拉？",
      choices: ["平衡位置", "最遠端", "任意方向"],
      answer: 0,
      explanation: "恢復力會把物體拉回平衡位置，所以振動才能來回進行。",
    },
    "electric-field": {
      question: "正的測試電荷放進電場後，受力方向通常和什麼一致？",
      choices: ["電場方向", "重力方向", "速度方向"],
      answer: 0,
      explanation: "電場方向就是正電荷受力的方向。",
    },
    "momentum-conservation": {
      question: "如果系統不受外力影響，碰撞前後哪一個量最應該保持一致？",
      choices: ["總動量", "總速度", "總位移"],
      answer: 0,
      explanation: "動量守恆是在看整個系統的總動量是否維持不變。",
    },
    pendulum: {
      question: "在小角度近似下，單擺的週期最明顯和哪一個量有關？",
      choices: ["擺長", "擺球顏色", "擺球材質名稱"],
      answer: 0,
      explanation: "在簡化模型裡，擺長越長，週期通常越長。",
    },
    "wave-interference": {
      question: "兩個波峰剛好同時到達同一點時，最常看到什麼結果？",
      choices: ["振幅變大", "完全抵消", "波速變零"],
      answer: 0,
      explanation: "這是建設性干涉，兩個波會疊加得更明顯。",
    },
    "electromagnetic-induction": {
      question: "磁鐵穿過線圈時，什麼情況常讓感應效果更明顯？",
      choices: ["移動得更快", "完全不動", "磁鐵拿得更遠"],
      answer: 0,
      explanation: "磁通量改變得越快，感應電流通常越明顯。",
    },
    "photoelectric-effect": {
      question: "光電效應中，想要先讓電子被打出來，最關鍵的是什麼？",
      choices: ["光的頻率夠高", "光更亮", "金屬更大塊"],
      answer: 0,
      explanation: "只要頻率沒達到門檻，再強的光也不一定能打出電子。",
    },
    "gravity-orbit": {
      question: "如果衛星速度比穩定圓形軌道速度小很多，最可能發生什麼事？",
      choices: ["慢慢掉回行星", "一定飛離行星", "完全不受重力影響"],
      answer: 0,
      explanation: "速度太小時，重力會讓衛星往內掉，軌道會縮小甚至落回行星。",
    },
    "capacitor-energy": {
      question: "在電壓固定時，把電容值變大，儲存能量通常會怎樣？",
      choices: ["增加", "減少", "保持一樣"],
      answer: 0,
      explanation: "電容儲能和電容值成正比，所以在相同電壓下，電容越大能量越多。",
    },
    "alternating-current": {
      question: "交流電的頻率變高，代表什麼？",
      choices: ["每秒振動次數變多", "電壓一定變小", "電流一定停止"],
      answer: 0,
      explanation: "頻率表示每秒重複幾次，頻率越高，波形在同一秒內起伏越多次。",
    },
    "heat-engine": {
      question: "想讓熱機效率提高，最有幫助的做法是什麼？",
      choices: ["提高熱源溫度並降低冷源溫度", "讓熱源和冷源一樣熱", "只把輸入熱量減少到零"],
      answer: 0,
      explanation: "熱源和冷源的溫差越大，通常越能轉成有用的功，效率也會提高。",
    },
    "radioactivity-half-life": {
      question: "經過一個半衰期後，原來的放射性原子大約剩多少？",
      choices: ["一半", "全部", "完全沒有"],
      answer: 0,
      explanation: "半衰期的意思就是經過那段時間後，剩下的原子數大約變成原本的一半。",
    },
    "coulomb-law": {
      question: "兩個電荷距離拉成原本的兩倍時，電力大小大約變成多少？",
      choices: ["四分之一", "兩倍", "不變"],
      answer: 0,
      explanation: "庫侖力和距離平方成反比，所以距離變兩倍，力會變成四分之一。",
    },
    "equipotential-field-lines": {
      question: "如果沿著同一條等位線移動，哪一項通常不變？",
      choices: ["電位", "電場方向", "與電荷的距離"],
      answer: 0,
      explanation: "等位線上的每一點電位相同，所以沿線移動時，電位不改變。",
    },
    "double-slit": {
      question: "雙狹縫實驗裡，波長變長時，亮紋間距通常會怎樣？",
      choices: ["變大", "變小", "一定消失"],
      answer: 0,
      explanation: "波長越長，條紋通常會拉得更開，所以亮紋間距會變大。",
    },
    "kinetic-gas": {
      question: "如果容器體積固定，把溫度升高，壓力通常會怎樣？",
      choices: ["升高", "降低", "保持一樣"],
      answer: 0,
      explanation: "溫度升高後，粒子運動更快，撞擊容器更頻繁，壓力通常會上升。",
    },
    "atomic-model": {
      question: "電子從高能階跳回低能階時，常會發生什麼事？",
      choices: ["放出光子", "失去全部質量", "完全停止運動"],
      answer: 0,
      explanation: "電子回到較低能階時，會把能量差以光子的形式放出去。",
    },
    "gravity-potential": {
      question: "如果和行星中心的距離變成兩倍，引力場強度通常會怎樣？",
      choices: ["變成四分之一左右", "變成兩倍", "完全不變"],
      answer: 0,
      explanation: "萬有引力場強度和距離平方成反比，所以距離變兩倍時通常降成四分之一。",
    },
    "electromagnetic-spectrum": {
      question: "可見光在電磁波頻譜中，大約位在哪兩種波之間？",
      choices: ["紅外線和紫外線之間", "微波和無線電波之間", "X 光和伽瑪射線之間"],
      answer: 0,
      explanation: "可見光位在紅外線和紫外線之間，只是我們肉眼能看到這一小段。",
    },
    transformer: {
      question: "如果次級線圈圈數比初級多很多，輸出電壓通常會怎樣？",
      choices: ["升高", "降低到零", "完全不變"],
      answer: 0,
      explanation: "理想變壓器中，次級圈數越多，輸出電壓通常越高。",
    },
    "rc-circuit": {
      question: "RC 電路中，時間常數變大代表什麼？",
      choices: ["充放電變慢", "充放電瞬間完成", "電流方向固定不變"],
      answer: 0,
      explanation: "時間常數越大，電容電壓變化越慢，需要更久才接近充滿或放空。",
    },
    "relativity-intro": {
      question: "當速度越接近光速時，哪個效果會更明顯？",
      choices: ["時間延緩和長度收縮", "重力完全消失", "物體質量變成零"],
      answer: 0,
      explanation: "速度越接近光速，相對論效應會越明顯，包括時間延緩和長度收縮。",
    },
    "blackbody-radiation": {
      question: "黑體溫度升高時，最強輻射波長通常會怎樣？",
      choices: ["變短", "變長", "完全不變"],
      answer: 0,
      explanation: "根據維恩位移定律，溫度越高，最強輻射波長越短。",
    },
    "de-broglie-wave": {
      question: "如果粒子的動量變大，德布羅意波長通常會怎樣？",
      choices: ["變短", "變長", "不一定有關"],
      answer: 0,
      explanation: "物質波波長和動量成反比，所以動量變大時，波長會變短。",
    },
    "uncertainty-principle": {
      question: "把粒子的位置限制得更小時，動量不確定度通常會怎樣？",
      choices: ["變大", "變小", "完全不變"],
      answer: 0,
      explanation: "位置越精確，動量越不容易同時精確知道，這就是不確定性原理的核心。",
    },
    spectroscopy: {
      question: "為什麼不同氣體會有不同的發射光譜線？",
      choices: ["因為能階差不同", "因為顏色是隨機的", "因為所有原子都一樣"],
      answer: 0,
      explanation: "不同原子的能階結構不同，所以電子躍遷放出的光譜線也不同。",
    },
    "nuclear-reactions": {
      question: "核分裂和核融合共同的特點是什麼？",
      choices: ["都可能放出大量能量", "都只會吸收能量", "都完全不涉及質量變化"],
      answer: 0,
      explanation: "兩種核反應都可能把一部分質量差轉成大量能量放出來。",
    },
    "lorentz-force": {
      question: "若帶電粒子速度方向固定，磁場變強時洛倫茲力通常怎麼變？",
      choices: ["變大", "變小", "完全不變"],
      answer: 0,
      explanation: "磁力大小和磁場強度成正比，所以磁場越強，受力通常越大。",
    },    "magnetic-particle": {
      question: "在相同磁場下，粒子速度越快，圓形軌道半徑通常會怎樣？",
      choices: ["變大", "變小", "一定不變"],
      answer: 0,
      explanation: "速度越大時，需要更大的轉彎半徑才能維持圓周運動。",
    },    "crossed-fields": {
      question: "如果電場力和磁力大小相等、方向相反，粒子最可能怎樣？",
      choices: ["接近直線前進", "立刻停止", "一定繞圓"],
      answer: 0,
      explanation: "兩種力互相抵消時，粒子可以接近不偏轉地前進。",
    },    "motor-effect": {
      question: "馬達效應中，導線受力和哪三個量有關？",
      choices: ["電流、磁場、導線長度", "只有導線顏色", "只有溫度"],
      answer: 0,
      explanation: "導線受力和電流、磁場及有效長度都有關。",
    },    "generator-principle": {
      question: "線圈轉得更快時，感應電壓通常會怎樣？",
      choices: ["變大", "變成零", "完全不變"],
      answer: 0,
      explanation: "切割磁力線更快時，感應電壓通常會提高。",
    },    "damping-oscillation": {
      question: "阻尼越大時，振幅通常會怎樣？",
      choices: ["衰減得更快", "變得無限大", "完全不變"],
      answer: 0,
      explanation: "阻尼會消耗振動能量，所以阻尼越大，振幅通常越快縮小。",
    },    "resonance": {
      question: "外力頻率最接近固有頻率時，最容易出現什麼現象？",
      choices: ["共振", "完全靜止", "重力消失"],
      answer: 0,
      explanation: "當外力頻率接近系統固有頻率時，最容易出現共振。",
    },    "standing-wave-harmonics": {
      question: "諧波數增加時，節點數通常會怎樣？",
      choices: ["增加", "減少", "一定歸零"],
      answer: 0,
      explanation: "更高的諧波會出現更多節點與腹點。",
    },    "spring-energy": {
      question: "彈簧被拉得越開時，彈性位能通常會怎樣？",
      choices: ["增加", "減少", "完全不變"],
      answer: 0,
      explanation: "位移越大，彈簧儲存的彈性位能通常越多。",
    },    "pendulum-energy": {
      question: "單擺從更高角度放手時，到底部的速率通常會怎樣？",
      choices: ["變快", "變慢到零", "完全不變"],
      answer: 0,
      explanation: "起始高度越高，轉成動能的位能越多，所以到底部通常更快。",
    },    "angular-momentum": {
      question: "角動量和下列哪一項最有關？",
      choices: ["質量、半徑、速度", "只有顏色", "只有溫度"],
      answer: 0,
      explanation: "角動量和質量、半徑、切線速度都有關。",
    },    "moment-of-inertia": {
      question: "質量分布越靠外側，轉動慣量通常會怎樣？",
      choices: ["變大", "變小", "一定不變"],
      answer: 0,
      explanation: "質量離轉軸越遠，對轉動慣量的貢獻越大。",
    },    "torque-rotation": {
      question: "在其他條件固定下，力臂變長時力矩通常會怎樣？",
      choices: ["變大", "變小", "完全不變"],
      answer: 0,
      explanation: "力矩等於力乘上力臂，所以力臂越長，力矩通常越大。",
    },    "projectile-range": {
      question: "同一初速下，哪個角度常接近最遠射程？",
      choices: ["45 度附近", "0 度", "90 度"],
      answer: 0,
      explanation: "在理想情況下，45 度附近常能得到接近最遠的射程。",
    },    "escape-velocity": {
      question: "行星質量變大時，逃逸速度通常會怎樣？",
      choices: ["增加", "減少到零", "完全不變"],
      answer: 0,
      explanation: "質量越大，引力越強，因此所需逃逸速度通常越高。",
    },    "kepler-third-law": {
      question: "軌道半徑變大時，公轉週期通常會怎樣？",
      choices: ["變長", "變短到零", "完全不變"],
      answer: 0,
      explanation: "軌道越大，繞行一圈通常需要更久時間。",
    },    "bernoulli-flow": {
      question: "在其他條件相近時，流速越大，靜壓常會怎樣？",
      choices: ["降低", "升高很多", "完全不變"],
      answer: 0,
      explanation: "白努力原理說明流速大時，靜壓常較低。",
    },    "venturi-effect": {
      question: "管子變窄時，流速通常會怎樣？",
      choices: ["變快", "變慢到零", "完全不變"],
      answer: 0,
      explanation: "流量相近時，管徑變窄通常會讓流速變快。",
    },    "polarization": {
      question: "分析器轉到 90 度附近時，通過光通常會怎樣？",
      choices: ["變得很弱", "變得最強", "完全不變"],
      answer: 0,
      explanation: "偏振方向互相垂直時，通過的光通常會很少。",
    },    "diffraction-grating": {
      question: "波長變長時，光柵亮線通常會怎樣？",
      choices: ["更容易分開", "全部重疊", "完全不變"],
      answer: 0,
      explanation: "波長變長時，亮線常會往外拉開。",
    },    "semiconductor-diode": {
      question: "二極體跨過導通門檻後，電流常會怎樣？",
      choices: ["快速增加", "變成零", "固定不變"],
      answer: 0,
      explanation: "當電壓超過門檻後，電流常會明顯上升。",
    },    "transistor-switch": {
      question: "基極電流增加時，集極電流通常會怎樣？",
      choices: ["跟著增加", "一定減少", "完全不變"],
      answer: 0,
      explanation: "在放大區內，基極電流增加常會讓集極電流增加。",
    },    "quantum-tunneling": {
      question: "障壁越寬時，穿透機率通常會怎樣？",
      choices: ["降低", "升高到一百", "完全不變"],
      answer: 0,
      explanation: "障壁越寬，粒子穿隧出去的機率通常越低。",
    },    "infinite-potential-well": {
      question: "量子數變大時，能階通常會怎樣？",
      choices: ["升高", "下降到零", "完全不變"],
      answer: 0,
      explanation: "量子數越高，對應的能量通常越高。",
    },    "bohr-spectrum-advanced": {
      question: "電子從高能階跳到低能階時，常會怎樣？",
      choices: ["放出光子", "失去全部質量", "完全停止存在"],
      answer: 0,
      explanation: "能階差會以光子的形式放出。",
    },    "nuclear-binding-energy": {
      question: "哪一類大小的原子核通常比較穩定？",
      choices: ["中等大小附近", "最小的一定最穩", "最大的永遠最穩"],
      answer: 0,
      explanation: "每核子束縛能常在中等大小附近接近最大，代表那附近較穩定。",
    },    "photoelectric-advanced": {
      question: "哪一個主要決定光電子最大動能？",
      choices: ["入射光頻率", "光的顏色名稱", "金屬外型"],
      answer: 0,
      explanation: "光電子最大動能主要和入射光頻率及逸出功有關。",
    },    "signal-filter": {
      question: "輸入頻率高於截止頻率很多時，輸出通常會怎樣？",
      choices: ["被明顯削弱", "一定變大", "完全不變"],
      answer: 0,
      explanation: "低通濾波器會讓高頻成分變弱。",
    },  };

  const formulaBank = {
    "gravity-fall": {
      expression: "h = (1/2)gt^2",
      note: "這個公式表示物體從靜止開始下落時，高度和時間的關係。時間越久，落下距離增加得越快。",
      symbols: [{ symbol: "h", meaning: "落下高度，單位 m" }, { symbol: "g", meaning: "重力加速度，地球上約 9.8 m/s^2" }, { symbol: "t", meaning: "下落時間，單位 s" }],
    },
    "air-resistance": {
      expression: "F_drag ~ A v^2",
      note: "這是簡化公式，表示面積越大或速度越快，空氣阻力通常越明顯。",
      symbols: [{ symbol: "F_drag", meaning: "空氣阻力" }, { symbol: "A", meaning: "迎風面積" }, { symbol: "v", meaning: "物體速度" }],
    },
    "static-electricity": {
      expression: "F = kq1q2 / r^2",
      note: "靜電力會隨電荷量變大而變強，距離拉遠時會快速變弱。",
      symbols: [{ symbol: "F", meaning: "靜電力" }, { symbol: "k", meaning: "靜電常數" }, { symbol: "q1、q2", meaning: "兩個電荷量" }, { symbol: "r", meaning: "兩電荷距離" }],
    },
    "magnetism": {
      expression: "F_m ~ 1 / r^2",
      note: "這是簡化比例式，用來幫孩子理解磁鐵距離越遠，磁力通常會越弱。",
      symbols: [{ symbol: "F_m", meaning: "磁力大小" }, { symbol: "r", meaning: "磁鐵間距離" }],
    },
    "force": {
      expression: "F = ma",
      note: "這表示合力會讓物體產生加速度。力越大或質量越小，速度改變通常越明顯。",
      symbols: [{ symbol: "F", meaning: "合力，單位 N" }, { symbol: "m", meaning: "質量，單位 kg" }, { symbol: "a", meaning: "加速度，單位 m/s^2" }],
    },
    "collision-bounce": {
      expression: "e = v_after / v_before",
      note: "反彈係數用來描述碰撞後保留了多少彈跳效果。越接近 1，通常越會彈。",
      symbols: [{ symbol: "e", meaning: "反彈係數" }, { symbol: "v_after", meaning: "反彈後速度" }, { symbol: "v_before", meaning: "碰撞前速度" }],
    },
    "pulley": {
      expression: "F_in = W / n",
      note: "理想滑輪組中，滑輪數增加時，拉起重物所需的力可以變小。",
      symbols: [{ symbol: "F_in", meaning: "輸入拉力" }, { symbol: "W", meaning: "重物重量" }, { symbol: "n", meaning: "分擔重量的繩段數" }],
    },
    "friction": {
      expression: "F_f = mu N",
      note: "摩擦力和材質特性以及正向支持力有關，所以不同地面滑起來感覺不同。",
      symbols: [{ symbol: "F_f", meaning: "摩擦力" }, { symbol: "mu", meaning: "摩擦係數" }, { symbol: "N", meaning: "正向力" }],
    },
    "light-shadow": {
      expression: "h_shadow / d_shadow = h_object / d_object",
      note: "這是相似三角形的想法，幫我們理解光源位置改變時影子長短也會改變。",
      symbols: [{ symbol: "h_shadow", meaning: "影子高度或長度" }, { symbol: "d_shadow", meaning: "影子到光源距離" }, { symbol: "h_object", meaning: "物體高度" }, { symbol: "d_object", meaning: "物體到光源距離" }],
    },
    "circuit": {
      expression: "V = IR",
      note: "在很多簡單電路裡，電壓、電流和電阻彼此有固定關係。",
      symbols: [{ symbol: "V", meaning: "電壓，單位 V" }, { symbol: "I", meaning: "電流，單位 A" }, { symbol: "R", meaning: "電阻，單位 Ω" }],
    },
    "speed": {
      expression: "v = d / t",
      note: "速度就是距離除以時間，代表每一秒平均走了多遠。",
      symbols: [{ symbol: "v", meaning: "速度" }, { symbol: "d", meaning: "距離" }, { symbol: "t", meaning: "時間" }],
    },
    "inclined-plane": {
      expression: "F = mg sin(theta)",
      note: "斜面角度越大，沿著斜面把物體拉下去的力通常也越大。",
      symbols: [{ symbol: "F", meaning: "沿斜面的力" }, { symbol: "m", meaning: "質量" }, { symbol: "g", meaning: "重力加速度" }, { symbol: "theta", meaning: "斜面角度" }],
    },
    "convection": {
      expression: "q = hAΔT",
      note: "這是簡化的對流傳熱公式，表示溫差越大、接觸面越大，熱交換通常越明顯。",
      symbols: [{ symbol: "q", meaning: "對流傳熱量" }, { symbol: "h", meaning: "對流係數" }, { symbol: "A", meaning: "面積" }, { symbol: "ΔT", meaning: "溫差" }],
    },
    "heat-transfer": {
      expression: "Q = kAΔTt / L",
      note: "熱傳導量和材質、面積、時間、溫差有關，和厚度成反比。",
      symbols: [{ symbol: "Q", meaning: "傳熱量" }, { symbol: "k", meaning: "導熱係數" }, { symbol: "A", meaning: "面積" }, { symbol: "ΔT", meaning: "溫差" }, { symbol: "t", meaning: "時間" }, { symbol: "L", meaning: "厚度" }],
    },
    "insulation-design": {
      expression: "Q = kAΔTt / L",
      note: "隔熱就是想辦法讓這個 Q 變小，像是用較低導熱係數或較厚的材料。",
      symbols: [{ symbol: "Q", meaning: "漏掉的熱量" }, { symbol: "k", meaning: "導熱係數" }, { symbol: "A", meaning: "面積" }, { symbol: "ΔT", meaning: "溫差" }, { symbol: "t", meaning: "時間" }, { symbol: "L", meaning: "厚度" }],
    },
    "buoyancy": {
      expression: "F_b = rho g V",
      note: "浮力來自排開液體的重量，所以排開越多水，浮力通常越大。",
      symbols: [{ symbol: "F_b", meaning: "浮力" }, { symbol: "rho", meaning: "液體密度" }, { symbol: "g", meaning: "重力加速度" }, { symbol: "V", meaning: "排開液體體積" }],
    },
    "sound": {
      expression: "v = f lambda",
      note: "聲音的波速、頻率和波長彼此有關，音調高通常代表頻率大。",
      symbols: [{ symbol: "v", meaning: "波速" }, { symbol: "f", meaning: "頻率" }, { symbol: "lambda", meaning: "波長" }],
    },
    "vibration": {
      expression: "f = 1 / T",
      note: "頻率代表一秒振動幾次，週期代表一次完整振動要多久。",
      symbols: [{ symbol: "f", meaning: "頻率" }, { symbol: "T", meaning: "週期" }],
    },
    "average-instant-speed": {
      expression: "v_avg = Δd / Δt",
      note: "平均速度是在看整段時間總共走多遠，不是看某一瞬間。",
      symbols: [{ symbol: "v_avg", meaning: "平均速度" }, { symbol: "Δd", meaning: "距離變化" }, { symbol: "Δt", meaning: "時間變化" }],
    },
    "projectile-motion": {
      expression: "R = v0^2 sin(2theta) / g",
      note: "在理想拋體裡，射程和初速、角度、重力有關。",
      symbols: [{ symbol: "R", meaning: "水平射程" }, { symbol: "v0", meaning: "初速度" }, { symbol: "theta", meaning: "發射角" }, { symbol: "g", meaning: "重力加速度" }],
    },
    "work-power": {
      expression: "P = W / t",
      note: "功率是做功的快慢，同樣的功如果用更短時間完成，功率就更大。",
      symbols: [{ symbol: "P", meaning: "功率" }, { symbol: "W", meaning: "功" }, { symbol: "t", meaning: "時間" }],
    },
    "pressure": {
      expression: "P = F / A",
      note: "同樣的力作用在更小的面積上，壓力就會更大。",
      symbols: [{ symbol: "P", meaning: "壓力" }, { symbol: "F", meaning: "力" }, { symbol: "A", meaning: "面積" }],
    },
    "newton": {
      expression: "F = ma",
      note: "牛頓第二定律說明施力、質量和加速度之間的關係。",
      symbols: [{ symbol: "F", meaning: "合力" }, { symbol: "m", meaning: "質量" }, { symbol: "a", meaning: "加速度" }],
    },
    "newton-third-law": {
      expression: "F_AB = -F_BA",
      note: "甲對乙施力時，乙也會同時對甲施一個大小相等、方向相反的力。",
      symbols: [{ symbol: "F_AB", meaning: "甲對乙的力" }, { symbol: "F_BA", meaning: "乙對甲的力" }],
    },
    "lever": {
      expression: "tau = Fr",
      note: "槓桿平衡看的是力矩，不只是看力有多大，也要看離支點多遠。",
      symbols: [{ symbol: "tau", meaning: "力矩" }, { symbol: "F", meaning: "施力大小" }, { symbol: "r", meaning: "力臂距離" }],
    },
    "pascal-principle": {
      expression: "P = F / A",
      note: "在封閉液體裡，壓力可以傳到各處，所以小力也能放大成大推力。",
      symbols: [{ symbol: "P", meaning: "壓力" }, { symbol: "F", meaning: "作用力" }, { symbol: "A", meaning: "受力面積" }],
    },
    "hydraulic": {
      expression: "P = rho g h",
      note: "液體越深，受到的壓力通常越大。",
      symbols: [{ symbol: "P", meaning: "液體壓力" }, { symbol: "rho", meaning: "液體密度" }, { symbol: "g", meaning: "重力加速度" }, { symbol: "h", meaning: "深度" }],
    },
    "density": {
      expression: "rho = m / V",
      note: "密度是在看同樣體積裡裝了多少質量。",
      symbols: [{ symbol: "rho", meaning: "密度" }, { symbol: "m", meaning: "質量" }, { symbol: "V", meaning: "體積" }],
    },
    "reflection": {
      expression: "theta_i = theta_r",
      note: "反射時，入射角和反射角相等，這是鏡面反射的基本規則。",
      symbols: [{ symbol: "theta_i", meaning: "入射角" }, { symbol: "theta_r", meaning: "反射角" }],
    },
    "refraction": {
      expression: "n1 sin(theta1) = n2 sin(theta2)",
      note: "光進入不同介質時會改變方向，這和折射率有關。",
      symbols: [{ symbol: "n1、n2", meaning: "兩種介質的折射率" }, { symbol: "theta1", meaning: "入射角" }, { symbol: "theta2", meaning: "折射角" }],
    },
    "lens-imaging": {
      expression: "1 / f = 1 / do + 1 / di",
      note: "透鏡成像和焦距、物距、像距彼此相關。",
      symbols: [{ symbol: "f", meaning: "焦距" }, { symbol: "do", meaning: "物距" }, { symbol: "di", meaning: "像距" }],
    },
    "wave-properties": {
      expression: "v = f lambda",
      note: "同一種波在同一介質中，波速通常固定，頻率和波長會互相配合。",
      symbols: [{ symbol: "v", meaning: "波速" }, { symbol: "f", meaning: "頻率" }, { symbol: "lambda", meaning: "波長" }],
    },
    "doppler": {
      expression: "f_prime = f (v ± vo) / (v ∓ vs)",
      note: "當聲源或觀察者移動時，聽到的頻率會改變。",
      symbols: [{ symbol: "f_prime", meaning: "聽到的頻率" }, { symbol: "f", meaning: "原頻率" }, { symbol: "v", meaning: "波速" }, { symbol: "vo", meaning: "觀察者速度" }, { symbol: "vs", meaning: "聲源速度" }],
    },
    "series-parallel": {
      expression: "R_series = R1 + R2",
      note: "串聯時電阻直接相加；並聯時總電阻會比單一支路更小。",
      symbols: [{ symbol: "R_series", meaning: "串聯總電阻" }, { symbol: "R1、R2", meaning: "各支路電阻" }],
    },
    "ohms-law": {
      expression: "V = IR",
      note: "歐姆定律幫我們連結電壓、電流和電阻。",
      symbols: [{ symbol: "V", meaning: "電壓" }, { symbol: "I", meaning: "電流" }, { symbol: "R", meaning: "電阻" }],
    },
    "electromagnet": {
      expression: "B ~ mu n I",
      note: "電流越大、圈數越多，電磁鐵通常越強。",
      symbols: [{ symbol: "B", meaning: "磁場強度" }, { symbol: "mu", meaning: "介質相關常數" }, { symbol: "n", meaning: "線圈密度" }, { symbol: "I", meaning: "電流" }],
    },
    "power-generation": {
      expression: "P = E / t",
      note: "發電其實是在把其他形式能量，在一段時間內轉成電能。",
      symbols: [{ symbol: "P", meaning: "功率" }, { symbol: "E", meaning: "能量" }, { symbol: "t", meaning: "時間" }],
    },
    "energy-conversion": {
      expression: "E_in = E_useful + E_loss",
      note: "輸入能量通常會分成有用的部分和損失掉的部分。",
      symbols: [{ symbol: "E_in", meaning: "輸入能量" }, { symbol: "E_useful", meaning: "有用能量" }, { symbol: "E_loss", meaning: "損失能量" }],
    },
    "energy-efficiency": {
      expression: "eta = E_useful / E_in x 100%",
      note: "效率越高，代表更多輸入能量真的變成有用輸出。",
      symbols: [{ symbol: "eta", meaning: "效率" }, { symbol: "E_useful", meaning: "有用能量" }, { symbol: "E_in", meaning: "輸入能量" }],
    },
    "thermal-expansion": {
      expression: "ΔL = alpha L0 ΔT",
      note: "物體加熱後長度改變，和原長、材質、溫度變化有關。",
      symbols: [{ symbol: "ΔL", meaning: "長度改變量" }, { symbol: "alpha", meaning: "線膨脹係數" }, { symbol: "L0", meaning: "原長" }, { symbol: "ΔT", meaning: "溫度變化" }],
    },
    "heat-radiation": {
      expression: "P = epsilon sigma A T^4",
      note: "熱輻射和表面性質、面積以及溫度有很大關係，溫度影響特別強。",
      symbols: [{ symbol: "P", meaning: "輻射功率" }, { symbol: "epsilon", meaning: "放射率" }, { symbol: "sigma", meaning: "常數" }, { symbol: "A", meaning: "面積" }, { symbol: "T", meaning: "絕對溫度" }],
    },
    "tides": {
      expression: "F_tidal ~ 1 / r^3",
      note: "潮汐力和距離非常敏感，所以月球雖然不大，影響仍很明顯。",
      symbols: [{ symbol: "F_tidal", meaning: "潮汐力" }, { symbol: "r", meaning: "和天體的距離" }],
    },
    "measurement-error": {
      expression: "error% = ",
      note: "measured - true",
      symbols: [],
    },
    "vector-components": {
      expression: "Ax = A cos(theta), Ay = A sin(theta)",
      note: "一個向量可以拆成水平和垂直兩部分來分析。",
      symbols: [{ symbol: "Ax", meaning: "水平分量" }, { symbol: "Ay", meaning: "垂直分量" }, { symbol: "A", meaning: "原向量大小" }, { symbol: "theta", meaning: "夾角" }],
    },
    "circular-motion": {
      expression: "F_c = mv^2 / r",
      note: "要讓物體繞圈，就需要指向圓心的向心力。",
      symbols: [{ symbol: "F_c", meaning: "向心力" }, { symbol: "m", meaning: "質量" }, { symbol: "v", meaning: "速度" }, { symbol: "r", meaning: "半徑" }],
    },
    "simple-harmonic-motion": {
      expression: "x = A cos(omega t)",
      note: "簡諧運動的位移會週期性重複。",
      symbols: [{ symbol: "x", meaning: "位移" }, { symbol: "A", meaning: "振幅" }, { symbol: "omega", meaning: "角頻率" }, { symbol: "t", meaning: "時間" }],
    },
    "electric-field": {
      expression: "E = F / q",
      note: "電場表示每單位電荷會受到多少力。",
      symbols: [{ symbol: "E", meaning: "電場強度" }, { symbol: "F", meaning: "電力" }, { symbol: "q", meaning: "試驗電荷" }],
    },
    "momentum-conservation": {
      expression: "m1u1 + m2u2 = m1v1 + m2v2",
      note: "如果外力影響很小，碰撞前後總動量通常守恆。",
      symbols: [{ symbol: "m1、m2", meaning: "兩物體質量" }, { symbol: "u1、u2", meaning: "碰撞前速度" }, { symbol: "v1、v2", meaning: "碰撞後速度" }],
    },
    "pendulum": {
      expression: "T = 2pi sqrt(L / g)",
      note: "單擺的週期和擺長有關，和擺球質量無關。",
      symbols: [{ symbol: "T", meaning: "週期" }, { symbol: "L", meaning: "擺長" }, { symbol: "g", meaning: "重力加速度" }],
    },
    "wave-interference": {
      expression: "ΔL = n lambda",
      note: "兩列波到達某點的路程差如果剛好是整數倍波長，容易形成加強。",
      symbols: [{ symbol: "ΔL", meaning: "路程差" }, { symbol: "n", meaning: "整數" }, { symbol: "lambda", meaning: "波長" }],
    },
    "electromagnetic-induction": {
      expression: "epsilon = -N ΔPhi / Δt",
      note: "磁通量改變得越快，感應電壓通常越明顯。",
      symbols: [{ symbol: "epsilon", meaning: "感應電動勢" }, { symbol: "N", meaning: "線圈圈數" }, { symbol: "ΔPhi", meaning: "磁通量改變" }, { symbol: "Δt", meaning: "時間改變" }],
    },
    "photoelectric-effect": {
      expression: "K_max = hf - phi",
      note: "光子的能量要先超過逸出功，剩下的部分才會變成電子動能。",
      symbols: [{ symbol: "K_max", meaning: "光電子最大動能" }, { symbol: "h", meaning: "普朗克常數" }, { symbol: "f", meaning: "頻率" }, { symbol: "phi", meaning: "逸出功" }],
    },
    "gravity-orbit": {
      expression: "v = sqrt(GM / r)",
      note: "圓形軌道速度和中心天體質量、軌道半徑有關。",
      symbols: [{ symbol: "v", meaning: "軌道速度" }, { symbol: "G", meaning: "萬有引力常數" }, { symbol: "M", meaning: "中心天體質量" }, { symbol: "r", meaning: "軌道半徑" }],
    },
    "capacitor-energy": {
      expression: "U = (1/2)CV^2",
      note: "電容儲存的能量和電容值、電壓都有關，而且對電壓特別敏感。",
      symbols: [{ symbol: "U", meaning: "儲存能量" }, { symbol: "C", meaning: "電容" }, { symbol: "V", meaning: "電壓" }],
    },
    "alternating-current": {
      expression: "v(t) = V_max sin(omega t)",
      note: "交流電的電壓會隨時間上下變化，不是固定不變。",
      symbols: [{ symbol: "v(t)", meaning: "某一時刻電壓" }, { symbol: "V_max", meaning: "最大電壓" }, { symbol: "omega", meaning: "角頻率" }, { symbol: "t", meaning: "時間" }],
    },
    "heat-engine": {
      expression: "eta = W / Q_h",
      note: "熱機效率是在看吸收的熱量中，有多少能真的變成有用功。",
      symbols: [{ symbol: "eta", meaning: "效率" }, { symbol: "W", meaning: "有用功" }, { symbol: "Q_h", meaning: "從高溫熱源吸收的熱量" }],
    },
    "radioactivity-half-life": {
      expression: "N = N0 (1/2)^(t / T_half)",
      note: "放射性原子會按半衰期規律慢慢減少。",
      symbols: [{ symbol: "N", meaning: "剩餘原子數" }, { symbol: "N0", meaning: "初始原子數" }, { symbol: "t", meaning: "時間" }, { symbol: "T_half", meaning: "半衰期" }],
    },
    "coulomb-law": {
      expression: "F = kq1q2 / r^2",
      note: "兩個電荷的作用力和電荷量成正比，和距離平方成反比。",
      symbols: [{ symbol: "F", meaning: "電力" }, { symbol: "k", meaning: "靜電常數" }, { symbol: "q1、q2", meaning: "電荷量" }, { symbol: "r", meaning: "距離" }],
    },
    "equipotential-field-lines": {
      expression: "E = -ΔV / Δd",
      note: "電位變化越快的地方，電場通常越強。",
      symbols: [{ symbol: "E", meaning: "電場強度" }, { symbol: "ΔV", meaning: "電位差" }, { symbol: "Δd", meaning: "位置變化" }],
    },
    "double-slit": {
      expression: "y = lambda L / d",
      note: "雙狹縫條紋間距和波長、屏幕距離成正比，和狹縫距離成反比。",
      symbols: [{ symbol: "y", meaning: "條紋間距" }, { symbol: "lambda", meaning: "波長" }, { symbol: "L", meaning: "狹縫到屏幕距離" }, { symbol: "d", meaning: "狹縫間距" }],
    },
    "kinetic-gas": {
      expression: "PV = nRT",
      note: "氣體的壓力、體積、溫度和莫耳數彼此相關。",
      symbols: [{ symbol: "P", meaning: "壓力" }, { symbol: "V", meaning: "體積" }, { symbol: "n", meaning: "莫耳數" }, { symbol: "R", meaning: "氣體常數" }, { symbol: "T", meaning: "絕對溫度" }],
    },
    "atomic-model": {
      expression: "ΔE = hf",
      note: "電子躍遷時，能量差可以對應成一個光子的能量。",
      symbols: [{ symbol: "ΔE", meaning: "能量差" }, { symbol: "h", meaning: "普朗克常數" }, { symbol: "f", meaning: "光頻率" }],
    },
    "gravity-potential": {
      expression: "U = -GMm / r",
      note: "引力位能通常是負值，距離越近，位能數值會更低。",
      symbols: [{ symbol: "U", meaning: "引力位能" }, { symbol: "G", meaning: "萬有引力常數" }, { symbol: "M、m", meaning: "兩個質量" }, { symbol: "r", meaning: "距離" }],
    },
    "electromagnetic-spectrum": {
      expression: "c = f lambda",
      note: "所有電磁波在真空中的波速都一樣，所以頻率和波長會互相配合。",
      symbols: [{ symbol: "c", meaning: "光速" }, { symbol: "f", meaning: "頻率" }, { symbol: "lambda", meaning: "波長" }],
    },
    "transformer": {
      expression: "Vs / Vp = Ns / Np",
      note: "變壓器的輸出電壓和輸入電壓，會跟線圈圈數比一起改變。",
      symbols: [{ symbol: "Vs", meaning: "次級電壓" }, { symbol: "Vp", meaning: "初級電壓" }, { symbol: "Ns", meaning: "次級圈數" }, { symbol: "Np", meaning: "初級圈數" }],
    },
    "rc-circuit": {
      expression: "Vc(t) = V(1 - e^(-t / RC))",
      note: "RC 充電不是瞬間完成，而是慢慢接近最終電壓。",
      symbols: [{ symbol: "Vc(t)", meaning: "某時刻電容電壓" }, { symbol: "V", meaning: "電源電壓" }, { symbol: "t", meaning: "時間" }, { symbol: "R", meaning: "電阻" }, { symbol: "C", meaning: "電容" }],
    },
    "relativity-intro": {
      expression: "gamma = 1 / sqrt(1 - v^2 / c^2)",
      note: "速度越接近光速，相對論效應會越明顯。",
      symbols: [{ symbol: "gamma", meaning: "相對論因子" }, { symbol: "v", meaning: "物體速度" }, { symbol: "c", meaning: "光速" }],
    },
    "blackbody-radiation": {
      expression: "lambda_max T = b",
      note: "溫度越高，最強輻射波長越短。",
      symbols: [{ symbol: "lambda_max", meaning: "峰值波長" }, { symbol: "T", meaning: "絕對溫度" }, { symbol: "b", meaning: "維恩常數" }],
    },
    "de-broglie-wave": {
      expression: "lambda = h / p",
      note: "粒子的動量越大，對應的物質波波長越短。",
      symbols: [{ symbol: "lambda", meaning: "德布羅意波長" }, { symbol: "h", meaning: "普朗克常數" }, { symbol: "p", meaning: "動量" }],
    },
    "uncertainty-principle": {
      expression: "Δx Δp >= h / 4pi",
      note: "位置越精確，動量通常越不容易同時精確知道。",
      symbols: [{ symbol: "Δx", meaning: "位置不確定度" }, { symbol: "Δp", meaning: "動量不確定度" }, { symbol: "h", meaning: "普朗克常數" }],
    },
    "spectroscopy": {
      expression: "ΔE = hf = hc / lambda",
      note: "光譜線來自能階差，所以不同元素會有不同顏色和位置的光譜線。",
      symbols: [{ symbol: "ΔE", meaning: "能量差" }, { symbol: "h", meaning: "普朗克常數" }, { symbol: "f", meaning: "頻率" }, { symbol: "c", meaning: "光速" }, { symbol: "lambda", meaning: "波長" }],
    },
    "nuclear-reactions": {
      expression: "E = Δmc^2",
      note: "核反應能量來自質量差，哪怕少量質量也能對應很大能量。",
      symbols: [{ symbol: "E", meaning: "放出能量" }, { symbol: "Δm", meaning: "質量差" }, { symbol: "c", meaning: "光速" }],
    },
    "lorentz-force": {
      expression: "F = qvB sin(theta)",
      note: "帶電粒子在磁場中移動時，若速度不和磁場平行，就會受到磁力。",
      symbols: [{ symbol: "F", meaning: "洛倫茲力" }, { symbol: "q", meaning: "電荷量" }, { symbol: "v", meaning: "速度" }, { symbol: "B", meaning: "磁場強度" }, { symbol: "theta", meaning: "速度和磁場夾角" }],
    },
    "magnetic-particle": {
      expression: "r = mv / qB",
      note: "在磁場中繞圓時，速度越快或磁場越小，半徑通常越大。",
      symbols: [{ symbol: "r", meaning: "軌道半徑" }, { symbol: "m", meaning: "質量" }, { symbol: "v", meaning: "速度" }, { symbol: "q", meaning: "電荷量" }, { symbol: "B", meaning: "磁場強度" }],
    },
    "crossed-fields": {
      expression: "qE = qvB",
      note: "當電場力和磁力剛好一樣大時，粒子可以接近直線前進。",
      symbols: [{ symbol: "q", meaning: "電荷量" }, { symbol: "E", meaning: "電場強度" }, { symbol: "v", meaning: "速度" }, { symbol: "B", meaning: "磁場強度" }],
    },
    "motor-effect": {
      expression: "F = BIL sin(theta)",
      note: "馬達效應中的導線受力，和磁場、電流、長度都有關。",
      symbols: [{ symbol: "F", meaning: "磁力" }, { symbol: "B", meaning: "磁場強度" }, { symbol: "I", meaning: "電流" }, { symbol: "L", meaning: "導線長度" }, { symbol: "theta", meaning: "夾角" }],
    },
    "generator-principle": {
      expression: "epsilon = NBAomega sin(omega t)",
      note: "發電機中的感應電壓和磁場、面積、圈數、轉動速度都有關。",
      symbols: [{ symbol: "epsilon", meaning: "感應電壓" }, { symbol: "N", meaning: "圈數" }, { symbol: "B", meaning: "磁場" }, { symbol: "A", meaning: "線圈面積" }, { symbol: "omega", meaning: "角速度" }],
    },
    "damping-oscillation": {
      expression: "x = A e^(-bt) cos(omega t)",
      note: "阻尼存在時，振幅會隨時間乘上一個慢慢變小的因子。",
      symbols: [{ symbol: "x", meaning: "位移" }, { symbol: "A", meaning: "初始振幅" }, { symbol: "b", meaning: "阻尼常數" }, { symbol: "t", meaning: "時間" }, { symbol: "omega", meaning: "角頻率" }],
    },
    "resonance": {
      expression: "f_drive ≈ f0",
      note: "外力頻率接近系統固有頻率時，最容易出現很大的振幅。",
      symbols: [{ symbol: "f_drive", meaning: "外力頻率" }, { symbol: "f0", meaning: "固有頻率" }],
    },
    "standing-wave-harmonics": {
      expression: "f_n = nv / 2L",
      note: "固定兩端的弦只允許某些特定頻率形成穩定駐波。",
      symbols: [{ symbol: "f_n", meaning: "第 n 諧波頻率" }, { symbol: "n", meaning: "諧波次數" }, { symbol: "v", meaning: "波速" }, { symbol: "L", meaning: "弦長" }],
    },
    "spring-energy": {
      expression: "U = (1/2)kx^2",
      note: "彈簧拉得越開，儲存的彈性位能通常增加得很快。",
      symbols: [{ symbol: "U", meaning: "彈性位能" }, { symbol: "k", meaning: "彈簧常數" }, { symbol: "x", meaning: "位移" }],
    },
    "pendulum-energy": {
      expression: "mgh = (1/2)mv^2",
      note: "單擺從高處擺下來時，位能會轉成動能。",
      symbols: [{ symbol: "m", meaning: "質量" }, { symbol: "g", meaning: "重力加速度" }, { symbol: "h", meaning: "高度差" }, { symbol: "v", meaning: "速度" }],
    },
    "angular-momentum": {
      expression: "L = mvr",
      note: "角動量和質量、半徑、切線速度都有關。",
      symbols: [{ symbol: "L", meaning: "角動量" }, { symbol: "m", meaning: "質量" }, { symbol: "v", meaning: "切線速度" }, { symbol: "r", meaning: "半徑" }],
    },
    "moment-of-inertia": {
      expression: "I = Sigma mr^2",
      note: "轉動慣量在看質量離轉軸有多遠，越遠影響越大。",
      symbols: [{ symbol: "I", meaning: "轉動慣量" }, { symbol: "m", meaning: "質量" }, { symbol: "r", meaning: "到轉軸距離" }],
    },
    "torque-rotation": {
      expression: "tau = Ialpha",
      note: "力矩會造成角加速度，轉動版的牛頓第二定律就是這個想法。",
      symbols: [{ symbol: "tau", meaning: "力矩" }, { symbol: "I", meaning: "轉動慣量" }, { symbol: "alpha", meaning: "角加速度" }],
    },
    "projectile-range": {
      expression: "R = v0^2 sin(2theta) / g",
      note: "同一初速下，拋射角會決定射程大小。",
      symbols: [{ symbol: "R", meaning: "射程" }, { symbol: "v0", meaning: "初速度" }, { symbol: "theta", meaning: "角度" }, { symbol: "g", meaning: "重力加速度" }],
    },
    "escape-velocity": {
      expression: "v_e = sqrt(2GM / r)",
      note: "要逃離行星引力，發射速度至少要超過這個門檻。",
      symbols: [{ symbol: "v_e", meaning: "逃逸速度" }, { symbol: "G", meaning: "萬有引力常數" }, { symbol: "M", meaning: "行星質量" }, { symbol: "r", meaning: "距離行星中心半徑" }],
    },
    "kepler-third-law": {
      expression: "T^2 ∝ r^3",
      note: "繞得越遠的行星，公轉週期通常會長很多。",
      symbols: [{ symbol: "T", meaning: "公轉週期" }, { symbol: "r", meaning: "軌道半徑" }],
    },
    "bernoulli-flow": {
      expression: "P + (1/2)rho v^2 + rho gh = constant",
      note: "流體速度、壓力和高度之間可以互相交換。",
      symbols: [{ symbol: "P", meaning: "壓力" }, { symbol: "rho", meaning: "密度" }, { symbol: "v", meaning: "流速" }, { symbol: "g", meaning: "重力加速度" }, { symbol: "h", meaning: "高度" }],
    },
    "venturi-effect": {
      expression: "A1v1 = A2v2",
      note: "管道變窄時，為了讓流量接續，流速通常會變快。",
      symbols: [{ symbol: "A1、A2", meaning: "兩處截面積" }, { symbol: "v1、v2", meaning: "兩處流速" }],
    },
    "polarization": {
      expression: "I = I0 cos^2(theta)",
      note: "偏振片轉動角度改變時，通過光強度也會跟著改變。",
      symbols: [{ symbol: "I", meaning: "通過後強度" }, { symbol: "I0", meaning: "原始強度" }, { symbol: "theta", meaning: "兩偏振方向夾角" }],
    },
    "diffraction-grating": {
      expression: "d sin(theta) = n lambda",
      note: "光柵會把不同波長的光分到不同角度。",
      symbols: [{ symbol: "d", meaning: "光柵間距" }, { symbol: "theta", meaning: "偏轉角" }, { symbol: "n", meaning: "階數" }, { symbol: "lambda", meaning: "波長" }],
    },
    "semiconductor-diode": {
      expression: "I ≈ I_s (e^(V / V_T) - 1)",
      note: "二極體跨過導通門檻後，電流常會快速上升。",
      symbols: [{ symbol: "I", meaning: "電流" }, { symbol: "I_s", meaning: "飽和電流" }, { symbol: "V", meaning: "外加電壓" }, { symbol: "V_T", meaning: "熱電壓" }],
    },
    "transistor-switch": {
      expression: "I_C ≈ beta I_B",
      note: "小小的基極電流可以控制較大的集極電流。",
      symbols: [{ symbol: "I_C", meaning: "集極電流" }, { symbol: "beta", meaning: "電流增益" }, { symbol: "I_B", meaning: "基極電流" }],
    },
    "quantum-tunneling": {
      expression: "T ~ e^(-2kappa L)",
      note: "障壁越高或越寬，穿隧機率通常越小。",
      symbols: [{ symbol: "T", meaning: "穿透機率" }, { symbol: "kappa", meaning: "和障壁有關的量" }, { symbol: "L", meaning: "障壁寬度" }],
    },
    "infinite-potential-well": {
      expression: "E_n = n^2 h^2 / (8mL^2)",
      note: "粒子被關在盒子裡時，只能擁有某些特定能量。",
      symbols: [{ symbol: "E_n", meaning: "第 n 個能階能量" }, { symbol: "n", meaning: "量子數" }, { symbol: "h", meaning: "普朗克常數" }, { symbol: "m", meaning: "質量" }, { symbol: "L", meaning: "盒子寬度" }],
    },
    "bohr-spectrum-advanced": {
      expression: "1 / lambda = R(1 / n_f^2 - 1 / n_i^2)",
      note: "波耳模型可以用能階差計算氫原子的光譜線。",
      symbols: [{ symbol: "lambda", meaning: "光譜波長" }, { symbol: "R", meaning: "里德伯常數" }, { symbol: "n_i", meaning: "起始能階" }, { symbol: "n_f", meaning: "終止能階" }],
    },
    "nuclear-binding-energy": {
      expression: "E = Delta m c^2",
      note: "束縛能本質上也是質量差對應的能量。",
      symbols: [{ symbol: "E", meaning: "束縛能" }, { symbol: "Delta m", meaning: "質量差" }, { symbol: "c", meaning: "光速" }],
    },
    "photoelectric-advanced": {
      expression: "eV_s = hf - phi",
      note: "截止電壓可以幫我們量出光電子的最大動能。",
      symbols: [{ symbol: "e", meaning: "基本電荷" }, { symbol: "V_s", meaning: "截止電壓" }, { symbol: "h", meaning: "普朗克常數" }, { symbol: "f", meaning: "頻率" }, { symbol: "phi", meaning: "逸出功" }],
    },
    "signal-filter": {
      expression: "A_out = A_in / sqrt(1 + (f / f_c)^2)",
      note: "低通濾波器會讓高頻訊號的振幅變小。",
      symbols: [{ symbol: "A_out", meaning: "輸出振幅" }, { symbol: "A_in", meaning: "輸入振幅" }, { symbol: "f", meaning: "輸入頻率" }, { symbol: "f_c", meaning: "截止頻率" }],
    },
  };

  function renderFormula(conceptId) {
    const formula = formulaBank[conceptId];
    const lessonGrid = document.querySelector(".lesson-grid");

    if (!formula || !lessonGrid || document.querySelector(".formula-section")) {
      return null;
    }

    const section = document.createElement("section");
    section.className = "formula-section";
    section.innerHTML = `
      <article class="formula-card">
        <div class="formula-head">
          <p class="eyebrow">數學公式</p>
          <h2>這一頁的核心公式</h2>
        </div>
        <div class="formula-expression">${formula.expression}</div>
        <p class="formula-note">${formula.note}</p>
        <div class="formula-symbols">
          ${formula.symbols
            .map(
              (item) => `
                <div class="formula-symbol-item">
                  <strong>${item.symbol}</strong>
                  <span>${item.meaning}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    `;

    lessonGrid.insertAdjacentElement("afterend", section);
    return section;
  }

  function renderQuiz(conceptId) {
    const quiz = quizBank[conceptId];
    const lessonGrid = document.querySelector(".lesson-grid");

    if (!quiz || !lessonGrid || document.querySelector(".quiz-section")) {
      return null;
    }

    const section = document.createElement("section");
    section.className = "quiz-section";
    section.innerHTML = `
      <article class="quiz-card">
        <div class="quiz-head">
          <p class="eyebrow">小測驗</p>
          <h2>想一想，你會怎麼選？</h2>
        </div>
        <p class="quiz-question">${quiz.question}</p>
        <div class="quiz-choices">
          ${quiz.choices
            .map(
              (choice, index) => `
                <button class="quiz-choice" type="button" data-index="${index}">
                  ${choice}
                </button>
              `
            )
            .join("")}
        </div>
        <p class="quiz-feedback" aria-live="polite">先選一個答案，看看你猜得對不對。</p>
      </article>
    `;

    lessonGrid.insertAdjacentElement("afterend", section);

    const feedback = section.querySelector(".quiz-feedback");
    const buttons = [...section.querySelectorAll(".quiz-choice")];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        const correct = index === quiz.answer;

        buttons.forEach((choiceButton, choiceIndex) => {
          choiceButton.classList.remove("correct", "wrong");

          if (choiceIndex === quiz.answer) {
            choiceButton.classList.add("correct");
          } else if (choiceIndex === index && !correct) {
            choiceButton.classList.add("wrong");
          }
        });

        feedback.textContent = correct
          ? `答對了。${quiz.explanation}`
          : `再想想看。${quiz.explanation}`;
      });
    });

    return section;
  }

  function getPageHref(concept) {
    return `./${concept.path.split("/").pop()}`;
  }

  function createTopicLink(concept, label, fallbackHref) {
    if (!concept) {
      return `
        <a class="topic-nav-link is-disabled" href="${fallbackHref}" aria-disabled="true">
          <span class="topic-nav-label">${label}</span>
          <strong>目前沒有了</strong>
        </a>
      `;
    }

    return `
      <a class="topic-nav-link" href="${getPageHref(concept)}">
        <span class="topic-nav-label">${label}</span>
        <strong>${concept.title}</strong>
      </a>
    `;
  }

  function createTopicNavMarkup(prevConcept, nextConcept) {
    return `
      <nav class="topic-nav" aria-label="主題導覽">
        ${createTopicLink(prevConcept, "上一個主題", "../index.html")}
        <a class="topic-nav-link topic-nav-home" href="../index.html">
          <span class="topic-nav-label">回首頁</span>
          <strong>回到全部主題</strong>
        </a>
        ${createTopicLink(nextConcept, "下一個主題", "../index.html")}
      </nav>
    `;
  }

  function renderTopicNavigation(conceptId) {
    const readyConcepts = (window.PhysicsSiteData?.concepts || []).filter((concept) => concept.status === "ready");
    const currentIndex = readyConcepts.findIndex((concept) => concept.id === conceptId);

    if (currentIndex === -1) {
      return;
    }

    const prevConcept = currentIndex > 0 ? readyConcepts[currentIndex - 1] : null;
    const nextConcept = currentIndex < readyConcepts.length - 1 ? readyConcepts[currentIndex + 1] : null;
    const hero = document.querySelector(".concept-hero");
    const bottomAnchor = document.querySelector(".quiz-section") || document.querySelector(".lesson-grid");

    if (hero && !document.querySelector(".topic-nav-shell-top")) {
      const topShell = document.createElement("div");
      topShell.className = "topic-nav-shell topic-nav-shell-top";
      topShell.innerHTML = createTopicNavMarkup(prevConcept, nextConcept);
      hero.insertAdjacentElement("afterend", topShell);
    }

    if (bottomAnchor && !document.querySelector(".topic-nav-shell-bottom")) {
      const bottomShell = document.createElement("div");
      bottomShell.className = "topic-nav-shell topic-nav-shell-bottom";
      bottomShell.innerHTML = createTopicNavMarkup(prevConcept, nextConcept);
      bottomAnchor.insertAdjacentElement("afterend", bottomShell);
    }
  }

  window.PhysicsSite = window.PhysicsSite || {};

  window.PhysicsSite.initConceptPage = function initConceptPage() {
    const conceptId = document.body.dataset.conceptId;
    const concept = window.PhysicsSiteData?.getConceptById(conceptId);

    if (!concept) {
      return null;
    }

    const titleEl = document.querySelector('[data-role="title"]');
    const levelEl = document.querySelector('[data-role="level"]');
    const summaryEl = document.querySelector('[data-role="summary"]');

    if (titleEl) {
      titleEl.textContent = concept.title;
    }

    if (levelEl) {
      levelEl.textContent = `${concept.level}主題`;
    }

    if (summaryEl) {
      summaryEl.textContent = concept.summary;
    }

    document.title = `${concept.title} | 物理小老師`;
    renderFormula(conceptId);
    renderQuiz(conceptId);
    renderTopicNavigation(conceptId);
    return concept;
  };
})();


