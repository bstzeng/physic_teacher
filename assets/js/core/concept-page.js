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
    renderQuiz(conceptId);
    renderTopicNavigation(conceptId);
    return concept;
  };
})();

