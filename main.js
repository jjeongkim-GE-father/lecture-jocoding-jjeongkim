const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;

const stageGroupFilter = document.getElementById('stage-group-filter');
const stageFilter = document.getElementById('stage-filter');
const stageCards = document.getElementById('stage-cards');
const hotClusters = document.getElementById('hot-clusters');

const stageModal = document.getElementById('stage-modal');
const modalTag = document.getElementById('modal-tag');
const modalTitle = document.getElementById('modal-title');
const modalTop5 = document.getElementById('modal-top5');
const modalCards = document.getElementById('modal-cards');
const modalClose = document.getElementById('modal-close');

const themeModal = document.getElementById('theme-modal');
const themeModalTag = document.getElementById('theme-modal-tag');
const themeModalTitle = document.getElementById('theme-modal-title');
const themeModalSummary = document.getElementById('theme-modal-summary');
const themeModalSections = document.getElementById('theme-modal-sections');
const themeModalCards = document.getElementById('theme-modal-cards');
const themeModalClose = document.getElementById('theme-modal-close');

const jumpStages = document.getElementById('jump-stages');

const textEls = {
    pageTitle: document.getElementById('page-title'),
    brand: document.getElementById('brand'),
    tagline: document.getElementById('tagline'),
    mainHeading: document.getElementById('main-heading'),
    subHeading: document.getElementById('sub-heading'),
    heroNote: document.getElementById('hero-note'),
    metaWindow: document.getElementById('meta-window'),
    metaSources: document.getElementById('meta-sources'),
    heroPanelTitle: document.getElementById('hero-panel-title'),
    filterNote: document.getElementById('filter-note'),
    stagesTitle: document.getElementById('stages-title'),
    stagesSubtitle: document.getElementById('stages-subtitle'),
    hotTitle: document.getElementById('hot-title'),
    hotSubtitle: document.getElementById('hot-subtitle'),
    disclaimerTitle: document.getElementById('disclaimer-title'),
    disclaimerText: document.getElementById('disclaimer-text'),
    modalClose: document.getElementById('modal-close'),
    themeModalClose: document.getElementById('theme-modal-close'),
    navStages: document.getElementById('nav-stages'),
    navHot: document.getElementById('nav-hot')
};

const translations = {
    en: {
        pageTitle: 'Mongle Map',
        brand: 'Mongle Map',
        tagline: 'Mom-loved, baby-ready.',
        mainHeading: 'A soft monthly map for tiny milestones.',
        subHeading: 'From pregnancy to 36 months, keep the essentials sweet and simple.',
        heroNote: 'Tap a stage to open detailed cards',
        metaWindow: 'K-care basic guide',
        metaSources: 'Sources: CDC · WHO · KR Public Health',
        heroPanelTitle: 'Quick Filters',
        filterNote: 'Pick a stage to open the full checklist.',
        jumpStages: 'Explore Months',
        stagesTitle: 'Stage Playbook',
        stagesSubtitle: 'Tap a stage to see Top 5 essentials + detailed cards.',
        hotTitle: 'Parenting Themes',
        hotSubtitle: 'Play, learning, outings, and formula picks in one place.',
        disclaimerTitle: 'Important Notes',
        disclaimerText: 'This page offers planning cues only and does not replace medical advice. Always check product safety standards, ingredient labels, and consult professionals for health-related decisions.',
        navStages: 'Care Stages',
        navHot: 'Care Themes',
        themeDark: 'Dark Mode',
        themeLight: 'Light Mode',
        langBtn: '한국어',
        filterAll: 'All',
        stageTop5: 'Top 5 Essentials',
        stageTap: 'Tap to view details',
        modalClose: 'Close',
        themeModalClose: 'Close',
        themeTap: 'Tap to open',
        detailReason: 'Why it matters',
        detailCaution: 'Caution',
        detailTiming: 'Best timing',
        detailChecklist: 'Quick checklist',
        detailHow: 'How to do it',
        detailFocus: 'Guide',
        detailGuide: 'Guide',
        detailFeature: 'Key features'
    },
    ko: {
        pageTitle: '몽글맵',
        brand: '몽글맵',
        tagline: '엄마 마음을 쏙- 아기 성장 한 장.',
        mainHeading: '몽글몽글, 우리 아기 성장 로그',
        subHeading: '임신부터 36개월까지, 필요한 순간만 쏙쏙 모았습니다.',
        heroNote: '구간을 클릭하면 상세 카드가 열려요',
        metaWindow: 'K-육아 기본 가이드',
        metaSources: '출처: CDC · WHO · 보건소 자료',
        heroPanelTitle: '빠른 필터',
        filterNote: '구간을 선택하면 상세 체크리스트가 열립니다.',
        jumpStages: '월령 보기',
        stagesTitle: '구간별 플레이북',
        stagesSubtitle: '구간을 눌러 필수 Top 5와 상세 카드를 확인하세요.',
        hotTitle: '육아 테마',
        hotSubtitle: '놀이, 교육, 외출, 분유까지 한 번에.',
        disclaimerTitle: '안내 사항',
        disclaimerText: '이 페이지는 계획 참고용이며 의학적 조언을 대신하지 않습니다. 제품 안전 기준, 성분표를 확인하고 건강 관련 결정은 전문가와 상의하세요.',
        navStages: '육아구간',
        navHot: '육아테마',
        themeDark: '다크 모드',
        themeLight: '라이트 모드',
        langBtn: 'English',
        filterAll: '전체',
        stageTop5: '필수 Top 5',
        stageTap: '자세히 보기',
        modalClose: '닫기',
        themeModalClose: '닫기',
        themeTap: '자세히 보기',
        detailReason: '이유/근거',
        detailCaution: '주의사항',
        detailTiming: '추천 시기',
        detailChecklist: '체크리스트',
        detailHow: '실행 방법',
        detailFocus: '가이드',
        detailGuide: '가이드',
        detailFeature: '특징'
    }
};

const card = (categoryKo, categoryEn, titleKo, titleEn, summaryKo, summaryEn, details) => ({
    category: { ko: categoryKo, en: categoryEn },
    title: { ko: titleKo, en: titleEn },
    summary: { ko: summaryKo, en: summaryEn },
    details
});

const details = (reasonKo, reasonEn, cautionKo, cautionEn, timingKo, timingEn, checkKo, checkEn) => ({
    reason: { ko: reasonKo, en: reasonEn },
    caution: { ko: cautionKo, en: cautionEn },
    timing: { ko: timingKo, en: timingEn },
    checklist: { ko: checkKo, en: checkEn }
});

const PRODUCT_DETAILS = {
    stroller: details(
        ['사용 환경(도심/장거리)과 보관 공간에 맞춰 선택합니다.'],
        ['Choose based on use environment and storage space.'],
        ['차량 트렁크, 엘리베이터 크기를 먼저 확인하세요.'],
        ['Check trunk and elevator size first.'],
        ['임신 후반~출산 전 준비 추천.'],
        ['Plan before birth, confirm after delivery.'],
        ['접이 크기', '바퀴/서스펜션', '시트 각도'],
        ['Fold size', 'Wheels/suspension', 'Seat recline']
    ),
    carSeat: details(
        ['안전 규격과 체형 범위를 확인하는 것이 핵심입니다.'],
        ['Safety standards and size range are key.'],
        ['설치 방식과 차량 호환성을 확인하세요.'],
        ['Check installation method and vehicle fit.'],
        ['퇴원/첫 외출 전 미리 설치해 봅니다.'],
        ['Install and test before first outing.'],
        ['i-Size/R129', 'ISOFIX/벨트 설치', '회전/리클라인'],
        ['i-Size/R129', 'ISOFIX/belt install', 'Rotation/recline']
    ),
    carrier: details(
        ['체형 분산과 통기성이 편의에 큰 영향을 줍니다.'],
        ['Weight distribution and airflow matter most.'],
        ['아기 기도 확보와 자세를 최우선으로 확인하세요.'],
        ['Prioritize airway clearance and positioning.'],
        ['목 가누기 전에는 신생아 자세 기준을 따릅니다.'],
        ['Follow newborn positioning guidance early on.'],
        ['허리벨트', '메쉬/통기', '착용 포지션'],
        ['Waist belt', 'Mesh/airflow', 'Carry positions']
    )
};

const FORMULA_ITEMS = {
    priceGuide: card('분유', 'Formula', '가격대 가이드', 'Price bands', '가격대별 특징을 비교합니다.', 'Compare price bands.',
        details(['2~3만원대: 보급형 라인', '3~4만원대: 주력 라인', '4만원+: 프리미엄/특수 라인'],
            ['20-30k: entry lines', '30-40k: mainstream', '40k+: premium/special'],
            ['가격은 수시로 변동됩니다.'], ['Prices change frequently.'],
            ['구매 전 최신 가격 확인.'], ['Check latest price before purchase.'],
            ['용량 확인', '배송 주기'], ['Check pack size', 'Delivery cadence'])
    ),
    ingredientStyles: card('분유', 'Formula', '성분 스타일', 'Ingredient styles', '기본/가수분해/유기농 등으로 구분합니다.', 'Sort by ingredient styles.',
        details(['일반, 부분/완전 가수분해, 유기농, 산양 등으로 나뉩니다.'],
            ['Standard, hydrolyzed, organic, goat milk, etc.'],
            ['특수 라인은 의료진과 상담 권장.'], ['Consult clinicians for special formulas.'],
            ['아기 컨디션에 따라 선택.'], ['Choose based on baby needs.'],
            ['성분표 확인', '알레르기 체크'], ['Check ingredients', 'Allergy check'])
    ),
    absoluteMasterpiece: {
        type: 'product',
        title: { ko: '앱솔루트 명작', en: 'Absolute Masterpiece' },
        summary: { ko: '가성비로 비교되는 국내 대표 라인.', en: 'Domestic baseline known for value.' },
        focus: {
            ko: ["덱스트린 포함 · 팜유 없음", "유산균 없음 · 갈락토올리고당 포함", "DHA/ARA 17mg 수준 + 가성비"],
            en: ["Contains dextrin, no palm oil", "No probiotics, includes GOS", "DHA/ARA around 17mg; value price"]
        },
        details: details(
            ['국내에서 많이 비교되는 베이스 라인입니다.'],
            ['Common domestic baseline for comparisons.'],
            ['덱스트린 포함으로 소화 반응을 확인하세요.', '유산균이 없어 장 컨디션 변화에 유의.'],
            ['Contains dextrin; watch digestion response.', 'No probiotics; monitor gut comfort.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['단계 확인', '보관 방법'],
            ['Check stage', 'Storage']
        )
    },
    imperialXO: {
        type: 'product',
        title: { ko: '임페리얼XO', en: 'Imperial XO' },
        summary: { ko: '국내 프리미엄 라인업으로 포지션이 높은 제품.', en: 'Domestic premium-positioned line.' },
        focus: {
            ko: ["프리미엄 라인 비교 기준", "단계별 성분표 확인", "아기 반응 기록"],
            en: ["Premium comparison baseline", "Check stage ingredients", "Log baby response"]
        },
        details: details(
            ['국내 프리미엄 라인 비교군으로 참고.'],
            ['Use as a premium domestic reference.'],
            ['가격대와 성분표를 꼭 확인하세요.'],
            ['Verify price point and ingredient label.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['단계 확인', '유통기한'],
            ['Check stage', 'Expiry date']
        )
    },
    ivenetGoldenJersey: {
        type: 'product',
        title: { ko: '아이배냇 골든저지', en: 'Ivenet Golden Jersey' },
        summary: { ko: '국내 라인 중 비교용으로 많이 보는 제품.', en: 'A domestic line often used for comparison.' },
        focus: {
            ko: ["국내 라인 비교 기준", "성분표·원유 정보 확인", "소화 반응 체크"],
            en: ["Domestic comparison baseline", "Check ingredients and milk source", "Monitor digestion"]
        },
        details: details(
            ['국내 라인업을 비교할 때 참고합니다.'],
            ['Use when comparing domestic lineups.'],
            ['성분표를 확인하고 아기 반응을 관찰하세요.'],
            ['Review labels and observe tolerance.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한 확인', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    aptamilProfutura: {
        type: 'product',
        title: { ko: '압타밀 프로푸트라', en: 'Aptamil Profutura' },
        summary: { ko: '프리미엄 수입 라인으로 시냅틱 구성 강조.', en: 'Premium import emphasizing synbiotics.' },
        focus: {
            ko: ["GOS/FOS + 2'-FL HMO", "프로바이오틱스 B. breve 포함", "DHA/ARA 포함"],
            en: ["GOS/FOS + 2'-FL HMO", "Includes B. breve probiotic", "Includes DHA/ARA"]
        },
        details: details(
            ['시냅틱(프로바이오틱스+프리바이오틱스) 구성을 찾는 경우 참고.'],
            ['Useful if looking for synbiotics.'],
            ['우유/대두/생선 성분이 포함될 수 있어 알레르기 주의.'],
            ['Contains milk/soy/fish ingredients; watch allergies.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한 확인', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    hippCombiotic: {
        type: 'product',
        title: { ko: '힙 콤비오틱', en: 'HiPP Combiotic' },
        summary: { ko: '유기농 + 프로/프리바이오틱스 조합을 내세운 라인.', en: 'Organic line highlighting pro/prebiotics.' },
        focus: {
            ko: ["GOS 프리바이오틱스", "L. fermentum 프로바이오틱스", "유기농 라인 비교용"],
            en: ["GOS prebiotics", "L. fermentum probiotic", "Organic line reference"]
        },
        details: details(
            ['유기농 라인 중 프로/프리바이오틱스 구성을 찾는 경우 참고.'],
            ['Consider if you want pro/prebiotic organic options.'],
            ['면역저하·중심정맥관 등은 프로바이오틱스 주의.'],
            ['Use caution with probiotics in vulnerable infants.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한 확인', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    aptamilNetherlands: {
        type: 'product',
        title: { ko: '압타밀 (네덜란드)', en: 'Aptamil (Netherlands)' },
        summary: { ko: '첨가물 적고 올리고당 구성이 풍부한 수입 대표 라인.', en: 'Imported staple with fewer additives and rich oligos.' },
        focus: {
            ko: ['덱스트린·팜유 없음', 'HMO + GOS + FOS 구성', '유산균 없음'],
            en: ['No dextrin or palm oil', 'HMO + GOS + FOS', 'No probiotics']
        },
        details: details(
            ['첨가물 부담이 적고 올리고당 구성이 다양한 편입니다.'],
            ['Lower additive load with diverse oligos.'],
            ['유산균이 없어 장 컨디션은 별도 관찰이 필요합니다.'],
            ['No probiotics; monitor gut comfort.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['수입 재고', '유통기한 확인'],
            ['Import stock', 'Check expiry']
        )
    },
    aptamilEssensis: {
        type: 'product',
        title: { ko: '압타밀 에센시스', en: 'Aptamil Essensis' },
        summary: { ko: '유기농 A2 라인으로 알려진 프리미엄 수입 제품.', en: 'Premium imported organic A2 line.' },
        focus: {
            ko: ['A2·유기농', '덱스트린·팜유 없음', 'GOS/FOS 구성 · 유산균 없음'],
            en: ['A2 organic', 'No dextrin or palm oil', 'GOS/FOS; no probiotics']
        },
        details: details(
            ['첨가물 부담이 적고 유기농 A2 구성으로 비교됩니다.'],
            ['Noted for organic A2 with fewer additives.'],
            ['가격대가 높고 유산균은 포함되지 않습니다.'],
            ['Higher price point; no probiotics included.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한 확인', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    novolacGold: {
        type: 'product',
        title: { ko: '노발락 골드', en: 'Novolac Gold' },
        summary: { ko: '프랑스산 조제유 라인.', en: 'French formula milk line.' },
        focus: {
            ko: ['덱스트린·팜유 포함', 'DHA/ARA 함량 낮은 편', '유산균 없음'],
            en: ['Contains dextrin and palm oil', 'Lower DHA/ARA', 'No probiotics']
        },
        details: details(
            ['프랑스산 조제유 라인 비교군으로 참고.'],
            ['Use as a French formula comparison.'],
            ['덱스트린·팜유 포함과 낮은 DHA/ARA를 고려하세요.'],
            ['Consider dextrin/palm oil and lower DHA/ARA.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    newOriginA2: {
        type: 'product',
        title: { ko: '뉴오리진 A2 플래티넘', en: 'New Origin A2 Platinum' },
        summary: { ko: '뉴질랜드산 A2 라인으로 알려진 수입 분유.', en: 'Imported New Zealand A2 formula.' },
        focus: {
            ko: ['A2 단백질', '덱스트린·팜유 없음', '유산균/유산균 먹이 부족'],
            en: ['A2 protein', 'No dextrin or palm oil', 'Limited pro/prebiotics']
        },
        details: details(
            ['A2 단백질과 첨가물 부담이 적은 점이 장점입니다.'],
            ['A2 protein with fewer additives is a plus.'],
            ['유산균/올리고당이 부족하므로 장 컨디션을 확인하세요.'],
            ['Limited pro/prebiotics; watch gut comfort.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['수입 재고', '유통기한'],
            ['Import stock', 'Check expiry']
        )
    },
    rubilac: {
        type: 'product',
        title: { ko: '루비락', en: 'Rubilac' },
        summary: { ko: '덴마크산 조제유 프리미엄 라인.', en: 'Premium Danish formula line.' },
        focus: {
            ko: ['식물성 DHA', 'OPO 팜유 구조', '유산균·유산균 먹이 포함'],
            en: ['Plant-based DHA', 'OPO-structured palm oil', 'Probiotics + prebiotics']
        },
        details: details(
            ['OPO 구조 팜유와 유산균/올리고당 구성이 강점입니다.'],
            ['OPO palm structure with pro/prebiotics is a plus.'],
            ['DHA/ARA 함량이 낮은 편이고 가격대가 높습니다.'],
            ['Lower DHA/ARA and higher price point.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    holle: {
        type: 'product',
        title: { ko: '홀레', en: 'Holle' },
        summary: { ko: '독일산 유기농 조제식 라인.', en: 'German organic infant formula.' },
        focus: {
            ko: ['유기농 조제식', '덱스트린·팜유 없음', '유산균 포함'],
            en: ['Organic infant formula', 'No dextrin or palm oil', 'Includes probiotics']
        },
        details: details(
            ['유기농 라인으로 첨가물 부담이 적은 편입니다.'],
            ['Organic line with fewer additives.'],
            ['성분 표기가 충분하지 않을 수 있어 라벨 확인이 필요합니다.'],
            ['Label details may be limited; verify on pack.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    pasteurWithMom: {
        type: 'product',
        title: { ko: '파스퇴르 위드맘', en: 'Pasteur With Mom' },
        summary: { ko: '국내 제조 조제유 라인.', en: 'Korean-made formula line.' },
        focus: {
            ko: ['덱스트린·팜유 없음', 'DHA/ARA 높은 편', '유산균 없음 · 올리고당 충분'],
            en: ['No dextrin or palm oil', 'Higher DHA/ARA', 'No probiotics; prebiotics included']
        },
        details: details(
            ['첨가물 부담이 적고 DHA/ARA가 높은 편입니다.'],
            ['Lower additives with higher DHA/ARA.'],
            ['유산균이 없어 장 컨디션 변화는 관찰이 필요합니다.'],
            ['No probiotics; monitor gut response.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['단계 확인', '보관 방법'],
            ['Check stage', 'Storage method']
        )
    },
    pasteurWithMomC: {
        type: 'product',
        title: { ko: '파스퇴르 위드맘 제왕', en: 'Pasteur With Mom C-section' },
        summary: { ko: '제왕절개 아기용 조제식 라인으로 알려진 제품.', en: 'C-section-focused infant formula line.' },
        focus: {
            ko: ['OPO 구조 팜유', '락토페린 등 흡수 보강', '유산균/유산균 먹이 없음'],
            en: ['OPO-structured palm oil', 'Absorption-support ingredients', 'No pro/prebiotics']
        },
        details: details(
            ['흡수 보강 성분을 강조한 특화 라인입니다.'],
            ['Highlights absorption-support ingredients.'],
            ['유산균/올리고당이 없어 장 컨디션을 관찰하세요.'],
            ['No pro/prebiotics; watch gut response.'],
            ['필요 시기 중심.'],
            ['Use as needed.'],
            ['단계 확인', '성분표 확인'],
            ['Check stage', 'Ingredient label']
        )
    },
    illuma: {
        type: 'product',
        title: { ko: '일루마', en: 'Illuma' },
        summary: { ko: '아일랜드산 조제유 프리미엄 라인.', en: 'Premium Irish formula line.' },
        focus: {
            ko: ['덱스트린 포함 · OPO 팜유', '유산균 다수', 'DHA/ARA 높음'],
            en: ['Contains dextrin + OPO palm oil', 'Multiple probiotics', 'Higher DHA/ARA']
        },
        details: details(
            ['유산균 구성과 DHA/ARA가 높은 편입니다.'],
            ['Strong in probiotics and DHA/ARA.'],
            ['덱스트린·팜유 포함과 높은 가격대를 고려하세요.'],
            ['Contains dextrin/palm oil; higher price.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    absoluteGoat: {
        type: 'product',
        title: { ko: '앱솔루트 산양', en: 'Absolute Goat Milk' },
        summary: { ko: '국내 산양유 기반 A2 라인.', en: 'Korean A2 goat milk line.' },
        focus: {
            ko: ['산양유 A2', '덱스트린 포함 · 팜유 없음', '유산균 2종 + GOS'],
            en: ['Goat milk A2', 'Contains dextrin, no palm oil', 'Two probiotics + GOS']
        },
        details: details(
            ['산양유 A2와 유산균 구성으로 비교됩니다.'],
            ['Noted for A2 goat milk and probiotics.'],
            ['덱스트린 포함과 가격대를 고려하세요.'],
            ['Contains dextrin; higher price point.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['성분표 확인', '보관 방법'],
            ['Check ingredients', 'Storage method']
        )
    },
    foodisGoat: {
        type: 'product',
        title: { ko: '후디스 산양분유', en: 'Foodis Goat Milk Formula' },
        summary: { ko: '뉴질랜드산 산양유 조제유.', en: 'New Zealand goat milk formula.' },
        focus: {
            ko: ['덱스트린·팜유 없음', '유산균 + GOS', 'DHA/ARA 낮은 편'],
            en: ['No dextrin or palm oil', 'Probiotics + GOS', 'Lower DHA/ARA']
        },
        details: details(
            ['첨가물 부담이 적고 유산균이 포함됩니다.'],
            ['Lower additives with probiotics included.'],
            ['DHA/ARA 함량이 낮고 가격대가 높습니다.'],
            ['Lower DHA/ARA and higher price point.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    lowenzahn: {
        type: 'product',
        title: { ko: '뢰벤짠', en: 'Lowenzahn' },
        summary: { ko: '오스트리아산 유기농 조제유.', en: 'Austrian organic formula.' },
        focus: {
            ko: ['유기농 조제유', '덱스트린·팜유 없음', '유산균·올리고당 충분'],
            en: ['Organic formula', 'No dextrin or palm oil', 'Probiotics and prebiotics']
        },
        details: details(
            ['유기농+유산균/올리고당 구성이 강점입니다.'],
            ['Strong in organic + pro/prebiotics.'],
            ['가격 변동과 인증 표기를 확인하세요.'],
            ['Check price changes and certifications.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    kabrita: {
        type: 'product',
        title: { ko: '카브리타', en: 'Kabrita' },
        summary: { ko: '네덜란드산 산양유 A2 수입 라인.', en: 'Dutch A2 goat milk import line.' },
        focus: {
            ko: ['A2 산양유', 'OPO 구조 팜유', '유산균 2종 + HMO 포함'],
            en: ['A2 goat milk', 'OPO-structured palm oil', 'Two probiotics + HMO']
        },
        details: details(
            ['A2 산양유와 유산균/올리고당 구성이 강점입니다.'],
            ['Strong in A2 goat milk and pro/prebiotics.'],
            ['OPO 팜유 포함과 높은 가격대를 고려하세요.'],
            ['Contains OPO palm oil; high price point.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    iAmMother: {
        type: 'product',
        title: { ko: '아이엠마더', en: 'I Am Mother' },
        summary: { ko: '국내 조제유 라인.', en: 'Korean-made formula line.' },
        focus: {
            ko: ['덱스트린 포함', 'OPO 구조 팜유', '유산균 없음 · 올리고당 충분'],
            en: ['Contains dextrin', 'OPO-structured palm oil', 'No probiotics; prebiotics included']
        },
        details: details(
            ['가격대가 낮고 올리고당 구성이 있는 편입니다.'],
            ['Lower price with prebiotics included.'],
            ['덱스트린과 팜유 포함, 유산균 없음에 유의하세요.'],
            ['Contains dextrin/palm oil; no probiotics.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['단계 확인', '보관 방법'],
            ['Check stage', 'Storage method']
        )
    },
    hippOrganic: {
        type: 'product',
        title: { ko: '힙 유기농', en: 'HiPP Organic' },
        summary: { ko: '독일산 유기농 조제유 라인.', en: 'German organic formula line.' },
        focus: {
            ko: ['덱스트린 없음', '유기농 팜유 포함', '유산균 없음 · GOS 포함'],
            en: ['No dextrin', 'Organic palm oil', 'No probiotics; includes GOS']
        },
        details: details(
            ['유기농 라인으로 비교할 때 참고됩니다.'],
            ['Use as an organic comparison line.'],
            ['팜유 포함과 유산균 부재를 고려하세요.'],
            ['Contains palm oil; no probiotics.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    trueMom: {
        type: 'product',
        title: { ko: '트루맘', en: 'True Mom' },
        summary: { ko: '호주산 조제유 라인.', en: 'Australian formula line.' },
        focus: {
            ko: ['덱스트린·팜유 없음', '유산균 없음 · 올리고당 충분', 'DHA/ARA 17mg 수준'],
            en: ['No dextrin or palm oil', 'No probiotics; prebiotics included', 'DHA/ARA around 17mg']
        },
        details: details(
            ['첨가물 부담이 적고 DHA/ARA가 준수한 편입니다.'],
            ['Lower additives with adequate DHA/ARA.'],
            ['유산균이 없어 장 컨디션 변화는 관찰이 필요합니다.'],
            ['No probiotics; monitor gut comfort.'],
            ['신생아~12개월 중심.'],
            ['Newborn to 12 months.'],
            ['유통기한', '보관 방법'],
            ['Check expiry', 'Storage method']
        )
    },
    goatLine: {
        type: 'product',
        title: { ko: '산양유 라인업', en: 'Goat milk line' },
        summary: { ko: '산양유 기반 라인 비교용.', en: 'Category for goat milk options.' },
        focus: {
            ko: ["산양유 라인 후보군 분류", "맛/기호도 확인", "아기 반응 기록"],
            en: ["Group goat-milk candidates", "Check taste acceptance", "Log baby response"]
        },
        details: details(
            ['산양유 기반 제품을 묶어 비교할 때 유용합니다.'],
            ['Useful for comparing goat milk options.'],
            ['우유 단백질 반응이 있으면 전문의 상담이 필요합니다.'],
            ['Consult a clinician if milk protein sensitivity exists.'],
            ['상황에 맞게 선택.'],
            ['Select based on needs.'],
            ['성분 확인', '변화 기록'],
            ['Check ingredients', 'Track changes']
        )
    },
    sensitiveCare: {
        type: 'product',
        title: { ko: '민감 케어 라인', en: 'Sensitive care line' },
        summary: { ko: '민감 케어용 라인업.', en: 'Sensitive care formula line.' },
        focus: {
            ko: ["부분/완전 가수분해·아미노산 기반", "민감/소화 케어용", "의료진 상담 우선"],
            en: ["Partially/extensively hydrolyzed or amino-acid based", "Sensitive digestion use", "Clinician guidance"]
        },
        details: details(
            ['소화/알레르기 관리용 라인업을 비교할 때 참고합니다.'],
            ['Reference for digestion/allergy management lines.'],
            ['의료진 지도하에 선택하는 것이 안전합니다.'],
            ['Choose under clinician guidance.'],
            ['문제가 있을 때 선택.'],
            ['Use if issues arise.'],
            ['성분 확인', '상담 기록'],
            ['Check ingredients', 'Consult notes']
        )
    },
    lowLactose: {
        type: 'product',
        title: { ko: '무유당/저유당 라인', en: 'Low/zero lactose line' },
        summary: { ko: '소화 이슈 대응 라인.', en: 'Line for lactose-related needs.' },
        focus: {
            ko: ["유당불내증/갈락토스혈증 대응", "의료진 상담 필수", "단기간 사용 여부 확인"],
            en: ["For lactose intolerance/galactosemia", "Clinician guidance required", "Check short-term use"]
        },
        details: details(
            ['유당 소화 문제 대응 시 고려합니다.'],
            ['Consider for lactose digestion issues.'],
            ['의료진 상담 후 선택이 필요합니다.'],
            ['Choose with clinician guidance.'],
            ['상황에 따라 사용.'],
            ['Use as needed.'],
            ['성분 확인', '변화 기록'],
            ['Check ingredients', 'Track changes']
        )
    }
};

const getFocusPoints = (cardItem, lang) => {
    if (!cardItem.category) {
        return lang === 'ko'
            ? ['핵심 포인트 2가지를 정해 간단히 실행', '짧고 자주 반복하면서 반응 체크']
            : ['Pick two key actions', 'Short, frequent practice with observation'];
    }
    const categoryKo = cardItem.category.ko;
    const focusMapKo = {
        수유: ['기록 항목: 시작/끝 시간, 수유량, 아기 반응', '간격은 2~3일 단위로 평균 확인'],
        수면: ['취침 20~30분 전부터 같은 순서로 진행', '조도·소음·온도 고정'],
        발달: ['관찰 포인트 1~2개만', '짧게 자주 반복'],
        안전: ['위험물 제거 + 안전 장치 확인', '외출 전 체크리스트로 점검'],
        위생: ['접촉면은 미지근한 물로 세척', '자극/발진 시 중단 및 상담'],
        피부: ['목욕 직후 3분 이내 보습', '향/알코올 성분은 최소화'],
        놀이: ['자극은 약하게 시작', '5~10분 짧게 여러 번'],
        건강: ['증상/체온/식욕 간단 기록', '이상 징후는 바로 상담'],
        정리: ['필수/선택 분리 후 관리', '주 1회 재고/일정 업데이트'],
        준비: ['필수/선택 분리 후 관리', '주 1회 재고/일정 업데이트'],
        계획: ['필수/선택 분리 후 관리', '주 1회 재고/일정 업데이트'],
        소통: ['눈맞춤·미소·반응 따라하기', '과자극 시 바로 쉬기'],
        정서: ['눈맞춤·미소·반응 따라하기', '과자극 시 바로 쉬기'],
        운동: ['하루 여러 번 짧게', '안전한 바닥/보호자 관찰'],
        환경: ['동선 1~2m 이내로 정리', '바닥·가구 위험 요소 제거'],
        공간: ['동선 1~2m 이내로 정리', '바닥·가구 위험 요소 제거'],
        생활: ['휴대 키트를 한 파우치에', '외출은 짧게 시작'],
        식단: ['새 음식은 1~3일 간격', '소량 → 점진 증량'],
        정보: ['신청 기한/예약일 체크', '한 곳에 링크/연락처 모으기'],
        기록: ['한 줄 요약 + 체크리스트', '주기적으로 패턴 확인']
    };
    const focusMapEn = {
        Feeding: ['Log start/end time, amount, and reactions', 'Review averages every 2–3 days'],
        Sleep: ['Start 20–30 minutes before bed in the same order', 'Fix light/noise/temperature'],
        Development: ['Track 1–2 cues only', 'Short and frequent practice'],
        Safety: ['Remove hazards and check safety gear', 'Use a quick outing checklist'],
        Hygiene: ['Clean contact surfaces with lukewarm water', 'Pause and consult if irritation'],
        Skin: ['Moisturize within 3 minutes after bath', 'Minimize fragrance/alcohol'],
        Play: ['Start with gentle stimulation', '5–10 minute short sessions'],
        Health: ['Log symptoms, temp, appetite', 'Consult promptly for warning signs'],
        Planning: ['Separate must-have vs optional', 'Update stock/schedule weekly'],
        Prep: ['Separate must-have vs optional', 'Update stock/schedule weekly'],
        Communication: ['Mirror eye contact and responses', 'Pause if overstimulated'],
        Bonding: ['Mirror eye contact and responses', 'Pause if overstimulated'],
        Movement: ['Short sessions, many times daily', 'Safe floor + supervision'],
        Environment: ['Keep care flow within 1–2 meters', 'Remove floor/furniture hazards'],
        Space: ['Keep care flow within 1–2 meters', 'Remove floor/furniture hazards'],
        Lifestyle: ['Pack a single go-pouch', 'Start with short outings'],
        Food: ['Introduce new foods 1–3 days apart', 'Start small, increase gradually'],
        Info: ['Track deadlines/appointments', 'Centralize links/contacts'],
        Tracking: ['One-line summaries + checklist', 'Review patterns regularly']
    };
    if (lang === 'ko') {
        return focusMapKo[categoryKo] || ['핵심 포인트 2가지를 정해 간단히 실행', '짧고 자주 반복하면서 반응 체크'];
    }
    return focusMapEn[cardItem.category.en] || ['Pick two key actions', 'Short, frequent practice with observation'];
};

const getFocusLabel = (cardItem, lang) => {
    if (cardItem && cardItem.type === 'product') {
        return translations[lang].detailFeature;
    }
    return translations[lang].detailGuide;
};

const DATA = {
    groups: [
        { id: 'all', label: { ko: '전체', en: 'All' } },
        { id: 'pregnancy', label: { ko: '임신', en: 'Pregnancy' } },
        { id: 'postpartum', label: { ko: '산후 0-6주', en: 'Postpartum 0-6w' } },
        { id: 'baby-0-12', label: { ko: '생후 0-12개월', en: '0-12 months' } },
        { id: 'baby-13-36', label: { ko: '생후 13-36개월', en: '13-36 months' } }
    ],
    stages: [
        {
            id: 'preg-1',
            group: 'pregnancy',
            label: { ko: '임신 1기', en: 'Trimester 1' },
            range: { ko: '임신 1~13주', en: 'Weeks 1-13' },
            top5: {
                ko: ['산전 진료 일정 정리', '입덧 완화 루틴', '기초 영양(엽산 등)', '편안한 수면 환경', '지원/보험 체크'],
                en: ['Prenatal schedule setup', 'Nausea relief routine', 'Baseline nutrition (folate)', 'Comfort-first sleep setup', 'Benefits & support review']
            },
            cards: [
                card('영양', 'Nutrition', '엽산 루틴', 'Folate routine', '매일 같은 시간에 복용하도록 고정합니다.', 'Anchor daily intake timing.',
                    details(
                        ['태아 신경관 발달에 필수로 알려져 있습니다.'],
                        ['Folate is widely recommended for neural tube development.'],
                        ['개인 복용량은 의료진과 상의하세요.'],
                        ['Confirm dosage with a clinician.'],
                        ['임신 계획 단계부터 시작하면 좋아요.'],
                        ['Start before or early in pregnancy.'],
                        ['복용 시간 고정', '속불편 시 식후 복용'],
                        ['Set a fixed time', 'Take after meals if sensitive']
                    )
                ),
                card('생활', 'Lifestyle', '입덧 완화 키트', 'Nausea kit', '크래커, 미지근한 음료, 상쾌한 향을 준비해요.', 'Keep crackers, mild drinks, fresh scents.',
                    details(
                        ['공복 시간을 줄여 입덧을 완화하는 데 도움됩니다.'],
                        ['Reducing empty stomach time can help.'],
                        ['강한 향은 오히려 자극될 수 있어요.'],
                        ['Strong scents may worsen nausea.'],
                        ['아침 기상 직후 먼저 준비합니다.'],
                        ['Keep within reach in the morning.'],
                        ['침대 옆 간식', '휴대용 물'],
                        ['Bedside snacks', 'Portable water']
                    )
                ),
                card('수면', 'Sleep', '임산부 베개', 'Maternity pillow', '옆잠 지지로 복부 압박을 줄입니다.', 'Support side-sleep comfort.',
                    details(
                        ['편안한 자세는 수면 질을 돕습니다.'],
                        ['Comfortable posture supports sleep quality.'],
                        ['통증이 있으면 자세를 바꿔보세요.'],
                        ['Switch positions if discomfort persists.'],
                        ['수면이 불편해지는 시점부터 사용해요.'],
                        ['Use when sleep becomes uncomfortable.'],
                        ['허리/골반 지지', '베개 높이 조절'],
                        ['Back/hip support', 'Adjust pillow height']
                    )
                ),
                card('건강', 'Health', '산전 체크리스트', 'Prenatal checklist', '검사 일정과 질문을 한 장에 정리합니다.', 'Keep tests and questions in one place.',
                    details(
                        ['진료 때 놓치는 항목을 줄입니다.'],
                        ['Helps avoid missing questions.'],
                        ['불안한 증상은 즉시 의료진에 상담하세요.'],
                        ['Discuss concerning symptoms promptly.'],
                        ['진료 전날 미리 업데이트합니다.'],
                        ['Update the day before visits.'],
                        ['검사 일정', '궁금한 증상 메모'],
                        ['Test schedule', 'Symptom notes']
                    )
                ),
                card('정보', 'Info', '지원금/보험', 'Benefits map', '거주지 지원 제도를 정리합니다.', 'List local benefits and insurance.',
                    details(
                        ['초기 준비가 비용 부담을 줄입니다.'],
                        ['Early prep can reduce costs.'],
                        ['신청 기한을 확인하세요.'],
                        ['Check application deadlines.'],
                        ['임신 초기부터 조사합니다.'],
                        ['Start research early.'],
                        ['관할 지자체 확인', '신청 서류 정리'],
                        ['Check local office', 'Organize documents']
                    )
                ),
                card('기록', 'Tracking', '증상 로그', 'Symptom log', '컨디션 변화를 짧게 기록합니다.', 'Track changes briefly.',
                    details(
                        ['패턴을 파악해 상담에 도움됩니다.'],
                        ['Patterns help during appointments.'],
                        ['심한 통증/출혈은 즉시 연락하세요.'],
                        ['Seek care for severe pain/bleeding.'],
                        ['하루 1~2줄 정도면 충분합니다.'],
                        ['One or two lines a day is enough.'],
                        ['메모 앱', '간단 체크리스트'],
                        ['Note app', 'Simple checklist']
                    )
                ),
                card('식단', 'Food', '속 편한 식단', 'Gentle meals', '자극적인 음식은 줄이고 균형을 맞춥니다.', 'Keep meals light and balanced.',
                    details(
                        ['속 불편감 완화에 도움됩니다.'],
                        ['May reduce stomach discomfort.'],
                        ['개인 알레르기 확인이 필요합니다.'],
                        ['Check personal allergies.'],
                        ['입덧 심한 시 소량/자주 섭취합니다.'],
                        ['Small, frequent meals during nausea.'],
                        ['수분 섭취', '간식 분배'],
                        ['Hydration', 'Snack spacing']
                    )
                ),
                card('정리', 'Planning', '출산 일정 공유', 'Due date board', '가족과 공유할 일정표를 만들어둡니다.', 'Create a shared calendar.',
                    details(
                        ['지원받을 일정을 조율하기 쉽습니다.'],
                        ['Helps align support schedules.'],
                        ['변동 가능성을 고려해 여유를 둡니다.'],
                        ['Allow buffer for changes.'],
                        ['임신 중기 전에 준비해요.'],
                        ['Prepare before mid-pregnancy.'],
                        ['주요 검사일', '연락 리스트'],
                        ['Key appointments', 'Contact list']
                    )
                )
            ]
        },
        {
            id: 'preg-2',
            group: 'pregnancy',
            label: { ko: '임신 2기', en: 'Trimester 2' },
            range: { ko: '임신 14~27주', en: 'Weeks 14-27' },
            top5: {
                ko: ['임부복/속옷 정비', '가벼운 움직임', '출산 준비 리스트', '아기 공간 구상', '출산 클래스 비교'],
                en: ['Maternity basics', 'Light movement routine', 'Birth-prep checklist', 'Baby space planning', 'Prenatal class review']
            },
            cards: [
                card('의류', 'Wear', '임부복/속옷', 'Maternity basics', '압박이 적은 의류로 교체합니다.', 'Switch to low-pressure wear.',
                    details(
                        ['복부 압박을 줄여 컨디션에 도움됩니다.'],
                        ['Less pressure can improve comfort.'],
                        ['사이즈 변화에 맞춰 유연하게 선택하세요.'],
                        ['Choose flexible sizing.'],
                        ['복부가 불편해지는 시점부터.'],
                        ['When belly feels tight.'],
                        ['허리 밴딩', '통풍 좋은 소재'],
                        ['Soft waistband', 'Breathable fabric']
                    )
                ),
                card('운동', 'Movement', '가벼운 스트레칭', 'Gentle stretching', '짧은 스트레칭으로 순환을 돕습니다.', 'Short stretches support circulation.',
                    details(
                        ['부기 완화와 컨디션 유지에 도움됩니다.'],
                        ['Helps reduce swelling and fatigue.'],
                        ['통증이 느껴지면 중단하세요.'],
                        ['Stop if pain occurs.'],
                        ['매일 짧게, 무리하지 않게.'],
                        ['Short daily sessions.'],
                        ['목/어깨 풀기', '골반 스트레칭'],
                        ['Neck/shoulder relief', 'Pelvic stretch']
                    )
                ),
                card('준비', 'Prep', '출산 준비 체크', 'Birth prep list', '병원/용품 체크리스트를 확정해요.', 'Finalize hospital and supply lists.',
                    details(
                        ['출산 직전 혼란을 줄입니다.'],
                        ['Reduces last-minute stress.'],
                        ['필수와 선택을 구분하세요.'],
                        ['Separate essentials vs. nice-to-haves.'],
                        ['임신 7~8개월 전 정리 추천.'],
                        ['Review by month 7-8.'],
                        ['출산가방 항목', '신생아 필수품'],
                        ['Hospital bag list', 'Newborn basics']
                    )
                ),
                card('공간', 'Space', '수면/수유 동선', 'Flow planning', '침대-수유-기저귀 동선을 정리합니다.', 'Map bed-feeding-diaper flow.',
                    details(
                        ['밤중 이동을 줄이면 피로가 덜합니다.'],
                        ['Less movement reduces fatigue.'],
                        ['안전 동선을 우선하세요.'],
                        ['Prioritize safe pathways.'],
                        ['가구 배치 전 미리 시뮬레이션.'],
                        ['Simulate before furniture changes.'],
                        ['수유등', '보관 바구니'],
                        ['Night light', 'Storage bins']
                    )
                ),
                card('정보', 'Info', '출산 클래스', 'Prenatal classes', '출산/육아 클래스를 비교해둡니다.', 'Compare prenatal class options.',
                    details(
                        ['필요한 정보를 미리 습득할 수 있습니다.'],
                        ['Helps gather practical info early.'],
                        ['개인 상황에 맞는 클래스를 선택하세요.'],
                        ['Choose what fits your situation.'],
                        ['임신 중기부터 문의 추천.'],
                        ['Ask during mid-pregnancy.'],
                        ['온라인/오프라인', '배우자 참여 가능'],
                        ['Online/offline', 'Partner participation']
                    )
                ),
                card('건강', 'Health', '부기 관리', 'Swelling care', '수분 섭취와 다리 휴식을 맞춥니다.', 'Balance hydration and leg rest.',
                    details(
                        ['순환을 돕는 습관이 중요합니다.'],
                        ['Supports circulation comfort.'],
                        ['심한 부종은 의료진과 상의하세요.'],
                        ['Discuss severe swelling with clinician.'],
                        ['오후에 다리 올려 휴식.'],
                        ['Elevate legs later in day.'],
                        ['가벼운 산책', '압박 최소화'],
                        ['Light walks', 'Avoid tight wear']
                    )
                ),
                card('기록', 'Tracking', '사이즈 기록', 'Size notes', '필요한 사이즈 변경 시점을 기록합니다.', 'Track size change timing.',
                    details(
                        ['필요한 구매를 줄일 수 있습니다.'],
                        ['Avoids unnecessary purchases.'],
                        ['미리 과도한 구매는 피하세요.'],
                        ['Avoid overbuying early.'],
                        ['한 달 단위로 체크.'],
                        ['Review monthly.'],
                        ['의류/속옷', '신발 변화'],
                        ['Clothing/underwear', 'Shoe size']
                    )
                ),
                card('커뮤니티', 'Community', '경험 공유', 'Peer notes', '비슷한 시기 경험을 공유합니다.', 'Swap notes with peers.',
                    details(
                        ['정보 불안감을 줄여줍니다.'],
                        ['Can reduce uncertainty.'],
                        ['개인차가 큰 만큼 비교는 주의하세요.'],
                        ['Avoid strict comparisons.'],
                        ['주 1회 정도 가볍게.'],
                        ['Light weekly check-ins.'],
                        ['안전한 커뮤니티', '전문가 정보 확인'],
                        ['Trusted community', 'Verify advice']
                    )
                )
            ]
        },
        {
            id: 'preg-3',
            group: 'pregnancy',
            label: { ko: '임신 3기', en: 'Trimester 3' },
            range: { ko: '임신 28~40주', en: 'Weeks 28-40' },
            top5: {
                ko: ['출산 가방 준비', '신생아 기본 용품', '수유/수면 동선 정리', '이동 동선 점검', '가족 지원 계획'],
                en: ['Hospital bag ready', 'Newborn essentials', 'Sleep/feeding flow', 'Mobility plan', 'Family support plan']
            },
            cards: [
                card('준비', 'Prep', '출산 가방', 'Hospital bag', '엄마/아기 필수품을 카테고리로 포장해요.', 'Pack essentials by category.',
                    details(
                        ['응급 상황에서도 빠르게 이동할 수 있습니다.'],
                        ['Supports quick readiness.'],
                        ['병원 기준을 확인하세요.'],
                        ['Check hospital list.'],
                        ['임신 36주 전 준비 추천.'],
                        ['Prepare before week 36.'],
                        ['서류/충전기', '아기 의류 1-2벌'],
                        ['Documents/chargers', '1-2 baby outfits']
                    )
                ),
                card('공간', 'Space', '신생아 존', 'Newborn zone', '기저귀·수유·수면 동선을 묶어요.', 'Cluster diaper-feeding-sleep flow.',
                    details(
                        ['밤중 돌봄이 쉬워집니다.'],
                        ['Simplifies night care.'],
                        ['질식 위험 물건은 피하세요.'],
                        ['Avoid suffocation hazards.'],
                        ['출산 전 미리 세팅.'],
                        ['Set up before delivery.'],
                        ['수유등', '기저귀 바구니'],
                        ['Night light', 'Diaper basket']
                    )
                ),
                card('안전', 'Safety', '카시트 설치', 'Car seat setup', '카시트 설치/각도 점검을 마칩니다.', 'Install and check seat angle.',
                    details(
                        ['퇴원 시 안전 이동에 필수입니다.'],
                        ['Required for safe discharge travel.'],
                        ['설치 설명서대로 고정하세요.'],
                        ['Follow manual for secure install.'],
                        ['출산 전 미리 테스트.'],
                        ['Test before delivery.'],
                        ['안전벨트 고정', '각도 확인'],
                        ['Belt lock', 'Angle check']
                    )
                ),
                card('육아', 'Care', '스와들/속싸개', 'Swaddle basics', '모로반사 대비용 기본 아이템을 준비해요.', 'Prepare swaddles for startle reflex.',
                    details(
                        ['신생아 수면 안정에 도움됩니다.'],
                        ['Can help newborn sleep stability.'],
                        ['너무 꽉 조이지 않도록 주의하세요.'],
                        ['Avoid overly tight wrapping.'],
                        ['신생아 시기 중심으로 사용.'],
                        ['Use mostly in newborn phase.'],
                        ['통기성 소재', '여벌 2-3장'],
                        ['Breathable fabric', '2-3 spares']
                    )
                ),
                card('기록', 'Tracking', '출산 계획서', 'Birth plan', '의사와 공유할 간단한 계획서를 준비합니다.', 'Prepare a concise plan to discuss.',
                    details(
                        ['의사소통이 명확해집니다.'],
                        ['Clarifies communication.'],
                        ['유연하게 조정할 준비를 합니다.'],
                        ['Stay flexible if changes needed.'],
                        ['산부인과 방문 시 공유.'],
                        ['Share during late visits.'],
                        ['희망 사항', '연락 담당자'],
                        ['Preferences', 'Primary contact']
                    )
                ),
                card('쇼핑', 'Shopping', '신생아 의류', 'Newborn wear', '세탁 주기에 맞춰 수량을 맞춰요.', 'Match quantity to laundry cadence.',
                    details(
                        ['과잉 구매를 줄일 수 있습니다.'],
                        ['Avoid overbuying.'],
                        ['성장 속도가 빨라 너무 많이 사지 마세요.'],
                        ['Growth is fast; avoid excess.'],
                        ['출산 직전 세탁까지 완료.'],
                        ['Wash before birth.'],
                        ['바디수트', '속싸개'],
                        ['Bodysuits', 'Swaddles']
                    )
                ),
                card('지원', 'Support', '가족 역할 분담', 'Role split', '출산 직후 역할을 정리해 둡니다.', 'Align responsibilities before delivery.',
                    details(
                        ['회복 시간 확보에 도움됩니다.'],
                        ['Supports recovery time.'],
                        ['현실적인 범위로 합의하세요.'],
                        ['Agree on realistic tasks.'],
                        ['출산 1~2달 전 논의.'],
                        ['Discuss 1-2 months before.'],
                        ['야간 수유', '집안일 분담'],
                        ['Night feeding', 'House tasks']
                    )
                ),
                card('생활', 'Lifestyle', '휴식 루틴', 'Rest routine', '수면/휴식 시간을 넉넉히 확보합니다.', 'Reserve extra time for rest.',
                    details(
                        ['체력 회복에 중요합니다.'],
                        ['Important for recovery.'],
                        ['불편감이 크면 의료진과 상의하세요.'],
                        ['Discuss discomfort with clinician.'],
                        ['낮잠을 짧게라도 확보.'],
                        ['Schedule short naps.'],
                        ['휴식 시간 공유', '알람 최소화'],
                        ['Share rest time', 'Reduce alerts']
                    )
                )
            ]
        },
        {
            id: 'post-0-6w',
            group: 'postpartum',
            label: { ko: '산후 0-6주', en: 'Postpartum 0-6w' },
            range: { ko: '회복 초기', en: 'Early recovery' },
            top5: {
                ko: ['충분한 휴식', '수유/분유 루틴', '회복 식단', '집안 동선 정리', '도움 요청 리스트'],
                en: ['Rest time secured', 'Feeding routine', 'Recovery meals', 'Home flow setup', 'Help request list']
            },
            cards: [
                card('회복', 'Recovery', '회복 일정표', 'Recovery schedule', '수면/식사/체크업을 단순화합니다.', 'Simplify sleep, meals, and checkups.',
                    details(
                        ['회복 리듬이 안정됩니다.'],
                        ['Stabilizes recovery rhythm.'],
                        ['통증/출혈 증상은 즉시 의료진에 상담하세요.'],
                        ['Discuss concerning symptoms promptly.'],
                        ['주 단위로 가볍게 점검.'],
                        ['Weekly quick review.'],
                        ['체력 체크', '진료 일정'],
                        ['Energy check', 'Appointments']
                    )
                ),
                card('수유', 'Feeding', '수유/분유 루틴', 'Feeding rhythm', '수유 시간을 기록해 패턴을 봅니다.', 'Track feeding times to spot patterns.',
                    details(
                        ['수유 간격 파악에 도움됩니다.'],
                        ['Helps track intervals.'],
                        ['무리한 간격 조정은 피하세요.'],
                        ['Avoid forcing schedules.'],
                        ['2~3일 단위로 패턴 확인.'],
                        ['Review every few days.'],
                        ['수유 횟수', '수유량 기록'],
                        ['Frequency', 'Amount notes']
                    )
                ),
                card('생활', 'Lifestyle', '집안 동선', 'Home flow', '필요한 물건을 한 곳에 모아 둡니다.', 'Cluster essentials within arm reach.',
                    details(
                        ['피로를 줄이고 안전을 높입니다.'],
                        ['Reduces fatigue and improves safety.'],
                        ['바닥 장애물을 정리하세요.'],
                        ['Clear floor hazards.'],
                        ['출산 직후 바로 적용.'],
                        ['Apply immediately postpartum.'],
                        ['기저귀 스테이션', '수유 코너'],
                        ['Diaper station', 'Feeding corner']
                    )
                ),
                card('위생', 'Hygiene', '세탁/소독', 'Laundry & sanitize', '수유용품 세척 루틴을 정합니다.', 'Set a cleaning routine for feeding gear.',
                    details(
                        ['위생 관리가 수유 스트레스를 줄입니다.'],
                        ['Clean routine reduces stress.'],
                        ['소독 방법은 제품 지침을 따르세요.'],
                        ['Follow product instructions.'],
                        ['하루 1~2회 고정.'],
                        ['Once or twice daily.'],
                        ['젖병 브러시', '건조 공간'],
                        ['Bottle brush', 'Drying area']
                    )
                ),
                card('도구', 'Tools', '수유 의자/쿠션', 'Feeding support', '등받이/쿠션으로 자세를 보호합니다.', 'Support posture with cushions.',
                    details(
                        ['어깨/허리 피로를 줄입니다.'],
                        ['Reduces shoulder/back strain.'],
                        ['너무 푹신한 소파는 피하세요.'],
                        ['Avoid overly soft seating.'],
                        ['수유가 잦은 시기부터.'],
                        ['Use during frequent feeds.'],
                        ['등받이 지지', '발받침'],
                        ['Back support', 'Footrest']
                    )
                ),
                card('지원', 'Support', '도움 요청 리스트', 'Help list', '도움 받을 항목을 구체적으로 정리합니다.', 'List specific tasks others can help with.',
                    details(
                        ['실질적인 도움을 받기 쉬워집니다.'],
                        ['Makes support more effective.'],
                        ['무리한 요청은 조정하세요.'],
                        ['Adjust to realistic help.'],
                        ['출산 전 미리 공유.'],
                        ['Share before delivery.'],
                        ['장보기', '식사 준비'],
                        ['Grocery runs', 'Meal prep']
                    )
                ),
                card('정리', 'Planning', '소모품 체크', 'Supply check', '기저귀/물티슈 재고를 확인합니다.', 'Check diaper and wipe stock.',
                    details(
                        ['긴급 구매를 줄입니다.'],
                        ['Avoids emergency shopping.'],
                        ['사이즈 변화 속도에 주의하세요.'],
                        ['Adjust for size changes.'],
                        ['주 1회 확인.'],
                        ['Weekly check.'],
                        ['재고 리스트', '배송 일정'],
                        ['Stock list', 'Delivery schedule']
                    )
                ),
                card('마음', 'Mind', '컨디션 메모', 'Mood notes', '하루 한 줄로 컨디션을 기록합니다.', 'Write one-line daily notes.',
                    details(
                        ['감정 변화 파악에 도움됩니다.'],
                        ['Helps track mood changes.'],
                        ['우울감이 지속되면 상담하세요.'],
                        ['Seek support if low mood persists.'],
                        ['밤마다 간단히 기록.'],
                        ['Brief note each evening.'],
                        ['수면 시간', '기분 한 줄'],
                        ['Sleep hours', 'One-line mood']
                    )
                )
            ]
        }
    ],
    themes: [
        {
            id: 'sleep',
            title: { ko: '수면/수면교육', en: 'Sleep' },
            subtitle: { ko: '밤잠·낮잠 리듬을 부드럽게 만드는 팁', en: 'Gentle sleep rhythm tips' },
            summary: {
                ko: ['안전한 수면 환경', '취침 전 고정 순서', '과도한 자극 줄이기'],
                en: ['Safe sleep setup', 'Same pre-bed order', 'Reduce overstimulation']
            },
            items: [
                card('수면', 'Sleep', '안전한 수면 환경', 'Safe sleep setup', '딱딱한 매트리스와 등을 대고 눕히기.', 'Firm surface, on the back.',
                    details(['돌연사 위험을 낮추는 기본 수칙입니다.'], ['Core safe sleep practice.'], ['이불/베개는 피하세요.'], ['Avoid loose bedding.'], ['매 수면마다 적용.'], ['Every sleep session.'], ['침대 주변 정리', '얇은 겹옷'], ['Clear crib', 'Light layers'])
                ),
                card('수면', 'Sleep', '밤낮 구분', 'Day-night cues', '낮에는 밝게, 밤에는 어둡게 유지.', 'Bright days, dim nights.',
                    details(['생체 리듬 형성에 도움됩니다.'], ['Supports circadian rhythm.'], ['과도한 자극은 피하세요.'], ['Avoid overstimulation.'], ['취침 30분 전부터 조명 낮추기.'], ['Dim lights before sleep.'], ['수면등', '화이트노이즈'], ['Night light', 'White noise'])
                ),
                card('수면', 'Sleep', '수면 루틴', 'Bedtime routine', '짧고 반복 가능한 루틴을 유지합니다.', 'Keep routines short and repeatable.',
                    details(['안정감을 주는 핵심 요소입니다.'], ['Helps build security.'], ['너무 길게 하지 마세요.'], ['Keep it brief.'], ['매일 같은 순서로.'], ['Same order daily.'], ['목욕-수유-수면', '자장가'], ['Bath-feed-sleep', 'Lullaby'])
                ),
                card('수면', 'Sleep', '수면 신호 관찰', 'Sleep cues', '하품/눈비빔 등 졸림 신호를 봅니다.', 'Watch for sleepy cues.',
                    details(['타이밍이 맞으면 잠이 쉬워집니다.'], ['Timing helps smoother sleep.'], ['과피로는 피하세요.'], ['Avoid overtiredness.'], ['신호 보이면 바로 준비.'], ['Start routine when cues appear.'], ['졸림 신호 메모', '낮잠 기록'], ['Cue notes', 'Nap log'])
                ),
                {
                    type: 'product',
                    title: { ko: '러브투드림 스와들업', en: 'Love to Dream Swaddle UP' },
                    summary: { ko: '팔을 위로 올린 자세를 유지하는 스와들업.', en: 'Arms-up swaddle designed for self-soothing.' },
                    focus: {
                        ko: ['팔을 위로 올린 자세', '이중 지퍼로 교체 편의', '힙 건강 설계 인증'],
                        en: ['Arms-up position', 'Two-way zipper for easy changes', 'Hip-healthy design']
                    },
                    details: details(
                        ['모로반사 완화로 수면 안정에 도움됩니다.'],
                        ['May help reduce startle reflex for steadier sleep.'],
                        ['뒤집기 시작 시 즉시 중단하세요.'],
                        ['Stop swaddling once rolling begins.'],
                        ['신생아기~뒤집기 전까지.'],
                        ['Newborn to pre-rolling stage.'],
                        ['사이즈/체중 범위', '통기성 소재'],
                        ['Size/weight range', 'Breathable fabric']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '헤일로 슬립색 스와들', en: 'HALO SleepSack Swaddle' },
                    summary: { ko: '팔을 넣고/빼고 조절 가능한 스와들.', en: 'Adjustable swaddle with arms in or out.' },
                    focus: {
                        ko: ['3가지 착용 방식(팔 넣기/빼기)', '이중 지퍼로 기저귀 교체', '병원 사용으로 알려진 라인'],
                        en: ['3-way adjustable arms in/out', 'Inverted zipper for diaper changes', 'Hospital-recognized swaddle']
                    },
                    details: details(
                        ['포대기처럼 감싸 안정감을 줍니다.'],
                        ['Provides a snug, calming wrap.'],
                        ['등으로 눕혀 재우는 것이 기본입니다.'],
                        ['Always place baby on their back.'],
                        ['신생아기~뒤집기 전까지.'],
                        ['Newborn to pre-rolling stage.'],
                        ['사이즈/토그 확인', '지퍼 상태'],
                        ['Size/TOG rating', 'Zipper check']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '스와들미 오리지널 스와들', en: 'SwaddleMe Original Swaddle' },
                    summary: { ko: '벨크로 윙으로 고정하는 기본형 스와들.', en: 'Classic swaddle with adjustable hook-and-loop wings.' },
                    focus: {
                        ko: ['조절형 윙으로 밀착', '부드러운 면 소재', '단계별 사이즈 선택'],
                        en: ['Adjustable wings for snug fit', 'Soft cotton fabric', 'Stage-based sizing']
                    },
                    details: details(
                        ['모로반사로 깨는 것을 줄이는 데 도움됩니다.'],
                        ['Helps minimize startle wake-ups.'],
                        ['가중치(무게추) 스와들은 피하세요.'],
                        ['Avoid weighted swaddles.'],
                        ['신생아기~뒤집기 전까지.'],
                        ['Newborn to pre-rolling stage.'],
                        ['사이즈/체중 범위', '벨크로 접착 상태'],
                        ['Size/weight range', 'Fastener check']
                    )
                }
            ]
        },
        {
            id: 'outing',
            title: { ko: '외출/이동', en: 'Outing' },
            subtitle: { ko: '외출 필수템과 이동 안전', en: 'Outing essentials and safety' },
            summary: {
                ko: ['유모차', '카시트', '아기띠', '외출가방 구성', '이동 안전 점검'],
                en: ['Stroller', 'Car seat', 'Carrier', 'Outing bag', 'Travel safety']
            },
            sections: [
                {
                    id: 'stroller',
                    title: { ko: '유모차', en: 'Stroller' },
                    items: [
                        {
                            type: 'product',
                            title: { ko: 'Bugaboo Fox 5 Renew (디럭스·최신)', en: 'Bugaboo Fox 5 Renew (deluxe, latest)' },
                            summary: { ko: '친환경 소재와 통기성 강화를 내세운 플래그십.', en: 'Flagship with sustainability and airflow focus.' },
                            focus: {
                                ko: ['PureBreeze 매트리스로 통기성 강화', '재활용·바이오 기반 소재 사용', '확장 캐노피/수납 포켓 구성'],
                                en: ['PureBreeze mattress for airflow', 'Recycled and bio-based materials', 'Extendable canopy and storage pocket']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Bugaboo Fox 3 (디럭스·이전)', en: 'Bugaboo Fox 3 (deluxe, previous)' },
                            summary: { ko: '승차감과 조작성에 강점인 이전 라인.', en: 'Previous line known for ride comfort and handling.' },
                            focus: {
                                ko: ['통기성 배시넷', '고급 서스펜션', '원터치 하네스/부드러운 조작성'],
                                en: ['Breezy bassinet', 'Advanced suspension', 'Quick harness and smooth push']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Bugaboo Dragonfly (절충형)', en: 'Bugaboo Dragonfly (city)' },
                            summary: { ko: '도심형 절충 라인업.', en: 'City-focused midweight line.' },
                            focus: {
                                ko: ['시트/배시넷 그대로 원핸드 폴딩', '풀 서스펜션과 도심 휠', 'XL 언더바스켓+확장 포켓'],
                                en: ['One-hand fold with seat/bassinet', 'Full suspension and city wheels', 'XL basket with expandable pocket']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Bugaboo Butterfly 2 (휴대용·최신)', en: 'Bugaboo Butterfly 2 (travel, latest)' },
                            summary: { ko: '원터치 폴딩 휴대용 최신 라인.', en: 'Latest one-second fold travel stroller.' },
                            focus: {
                                ko: ['1초 폴딩, 기내 반입 규격', '풀 리클라인 좌석', '더 큰 바퀴/수납 강화'],
                                en: ['One-second fold, cabin approved', 'Lay-flat recline', 'Bigger wheels and more storage']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Joolz Geo³ (디럭스·올터레인)', en: 'Joolz Geo³ (all-terrain)' },
                            summary: { ko: '올터레인 주행과 넉넉한 공간을 강조한 라인.', en: 'All-terrain line with spacious design.' },
                            focus: {
                                ko: ['넓은 캐리콧과 통기성 구조', 'UPF50+ 캐노피', '올터레인 휠과 서스펜션'],
                                en: ['Spacious ventilated cot', 'UPF50+ canopy', 'All-terrain wheels and suspension']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Joolz Hub² (절충형)', en: 'Joolz Hub² (city)' },
                            summary: { ko: '컴팩트 도심 이동에 최적화된 라인.', en: 'Compact city stroller line.' },
                            focus: {
                                ko: ['도심형 컴팩트 사이즈', '부드러운 주행과 간편한 조작', '휴대/보관 편의성 강조'],
                                en: ['Compact city size', 'Smooth ride and easy handling', 'Easy carry and storage']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Joolz Aer² (휴대용·최신)', en: 'Joolz Aer² (travel, latest)' },
                            summary: { ko: '초경량+원핸드 폴딩 최신 라인.', en: 'Latest ultra-light one-hand fold line.' },
                            focus: {
                                ko: ['원핸드 폴딩', '경량(약 6.5kg)과 기내 반입', '수납/바퀴/발공간 개선'],
                                en: ['One-hand fold', 'Lightweight (~6.5kg) and cabin compatible', 'Improved basket, wheels, and legroom']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Joolz Aer+ (휴대용·이전)', en: 'Joolz Aer+ (travel, previous)' },
                            summary: { ko: '이전 세대 경량 휴대용 라인.', en: 'Previous generation lightweight travel line.' },
                            focus: {
                                ko: ['원핸드 폴딩', '초경량(약 6.0kg) 설계', 'UPF50+ 캐노피와 리클라인'],
                                en: ['One-hand fold', 'Ultra-light (~6.0kg)', 'UPF50+ canopy and recline']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Oyster4 (절충형·최신)', en: 'Oyster4 (midweight, latest)' },
                            summary: { ko: '자동 폴딩과 통풍 캐노피를 강조한 최신 라인.', en: 'Latest line with auto-fold and ventilated canopy.' },
                            focus: {
                                ko: ['시트 장착 상태로 자동 폴딩', '신생아부터 사용 가능한 풀 리클라인', 'UPF50+ 통풍 캐노피 및 서스펜션'],
                                en: ['Auto-fold with seat attached', 'Lie-flat recline from birth', 'UPF50+ ventilated canopy and suspension']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Oyster3 (절충형·이전)', en: 'Oyster3 (midweight, previous)' },
                            summary: { ko: '이전 세대 Oyster 라인업.', en: 'Previous generation Oyster line.' },
                            focus: {
                                ko: ['Oyster4 이전 세대 라인업', '세부 사양은 판매처 스펙 확인 권장'],
                                en: ['Predecessor to Oyster4', 'Check retailer specs for details']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Oyster Lite (휴대용)', en: 'Oyster Lite (travel)' },
                            summary: { ko: '경량 알루미늄 프레임 휴대용 라인.', en: 'Lightweight aluminum-frame travel line.' },
                            focus: {
                                ko: ['경량 알루미늄 프레임', '풀 리클라인으로 신생아 사용', '확장 캐노피·수납 바스켓'],
                                en: ['Lightweight aluminum frame', 'Full recline from birth', 'Extendable hood and large basket']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: '리안 솔로 2025 (절충형·최신)', en: 'Rian Solo 2025 (midweight, latest)' },
                            summary: { ko: '국내 인기 절충형의 최신 라인업.', en: 'Latest midweight line popular in Korea.' },
                            focus: {
                                ko: ['기존 솔로 라인 대비 사양 업그레이드', '경량화·편의성 개선 강조', '출시 연도 기준 최신 라인'],
                                en: ['Upgraded from prior Solo line', 'Emphasis on lighter, easier handling', 'Latest release in the Solo line']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: '리안 솔로 2021 (절충형·이전)', en: 'Rian Solo 2021 (midweight, previous)' },
                            summary: { ko: '이전 세대 솔로 라인업.', en: 'Previous generation Solo line.' },
                            focus: {
                                ko: ['이전 세대 모델로 라인 기준 비교용', '세부 사양은 구매처 정보 확인 필요'],
                                en: ['Previous generation reference model', 'Check retailer specs for details']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Stokke Xplory X (디럭스)', en: 'Stokke Xplory X (deluxe)' },
                            summary: { ko: '높은 시트로 교감에 집중한 디럭스 라인.', en: 'High-seat deluxe stroller focused on interaction.' },
                            focus: {
                                ko: ['높은 시트 포지션과 각도 조절', '캐리콧/카시트 연동 트래블 시스템', '안전벨트와 리플렉터 등 안전 요소'],
                                en: ['High seat with adjustable angles', 'Travel system with carry cot/car seat', 'Safety harness and reflectors']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Stokke YOYO3 (휴대용·최신)', en: 'Stokke YOYO3 (travel, latest)' },
                            summary: { ko: '트래블 시스템 확장성이 강한 최신 라인.', en: 'Latest travel line with modular system.' },
                            focus: {
                                ko: ['신생아팩/6+ 시트로 단계 확장', '컴팩트 폴딩', '여행용 액세서리 생태계'],
                                en: ['Newborn pack + 6+ seat system', 'Compact fold', 'Travel accessory ecosystem']
                            },
                            details: PRODUCT_DETAILS.stroller
                        },
                        {
                            type: 'product',
                            title: { ko: 'Stokke YOYO2 (휴대용·이전)', en: 'Stokke YOYO2 (travel, previous)' },
                            summary: { ko: 'YOYO3 이전 세대 라인.', en: 'Previous generation YOYO line.' },
                            focus: {
                                ko: ['YOYO2 0+ / 6+ 구성', '유럽 안전 규격(EN1888-1) 승인'],
                                en: ['YOYO2 0+ / 6+ configuration', 'Approved to EN1888-1 standard']
                            },
                            details: PRODUCT_DETAILS.stroller
                        }
                    ]
                },
                {
                    id: 'car-seat',
                    title: { ko: '카시트', en: 'Car seat' },
                    items: [
                        {
                            type: 'product',
                            title: { ko: 'CYBEX Cloud G i-Size (신생아·최신)', en: 'CYBEX Cloud G i-Size (infant, latest)' },
                            summary: { ko: '에르고 리클라인과 통풍을 강조한 최신 인펀트 시트.', en: 'Latest infant seat emphasizing recline and ventilation.' },
                            focus: {
                                ko: ['인체공학 리클라인/라이라울팅', '올라운드 통풍 시스템', '베이스 G와 180° 회전 연동'],
                                en: ['Ergonomic recline', 'All-round air ventilation', '180° rotation with Base G']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'CYBEX Cloud Z2 i-Size (신생아·이전)', en: 'CYBEX Cloud Z2 i-Size (infant, previous)' },
                            summary: { ko: 'Cloud G 이전 세대 라인.', en: 'Previous generation Cloud line.' },
                            focus: {
                                ko: ['베이스 Z2와 180° 회전 연동', '리클라인 확장 사용'],
                                en: ['180° rotation with Base Z2', 'Extended recline support']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'CYBEX Sirona G i-Size (회전형·최신)', en: 'CYBEX Sirona G i-Size (rotating, latest)' },
                            summary: { ko: '360° 회전과 측면 보호를 강조한 최신 라인.', en: 'Latest rotating seat with side-impact focus.' },
                            focus: {
                                ko: ['360° 회전', 'L.S.P. 측면 보호', '올라운드 통풍 시스템'],
                                en: ['360° rotation', 'L.S.P. side impact', 'All-round air ventilation']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'CYBEX Sirona Z2 i-Size (회전형·이전)', en: 'CYBEX Sirona Z2 i-Size (rotating, previous)' },
                            summary: { ko: 'Sirona G 이전 세대 라인.', en: 'Previous generation Sirona line.' },
                            focus: {
                                ko: ['베이스 Z2와 360° 회전', '측면 충돌 보호 구조'],
                                en: ['360° rotation with Base Z2', 'Side impact protection']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Maxi-Cosi Pebble 360 Pro² (신생아·최신)', en: 'Maxi-Cosi Pebble 360 Pro² (infant, latest)' },
                            summary: { ko: '슬라이드테크와 풀 리클라인을 강조한 최신 라인.', en: 'Latest infant seat with SlideTech and full recline.' },
                            focus: {
                                ko: ['SlideTech 베이스 연동', '풀 리클라인 평평 자세', 'ClimaFlow 통풍 설계'],
                                en: ['SlideTech base system', 'Full lie-flat recline', 'ClimaFlow ventilation']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Maxi-Cosi Pebble 360 Pro (신생아·이전)', en: 'Maxi-Cosi Pebble 360 Pro (infant, previous)' },
                            summary: { ko: 'Pro² 이전 세대 라인.', en: 'Previous generation Pro line.' },
                            focus: {
                                ko: ['FamilyFix 360 Pro 베이스 연동', '평평 리클라인 지원'],
                                en: ['FamilyFix 360 Pro base compatible', 'Lie-flat recline support']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Joie i-Pivot 360 (회전형·최신)', en: 'Joie i-Pivot 360 (rotating, latest)' },
                            summary: { ko: 'i-Size 회전형 최신 라인업.', en: 'Latest i-Size rotating line.' },
                            focus: {
                                ko: ['360° 회전', 'i-Size 인증', '다단 리클라인과 헤드레스트 조절'],
                                en: ['360° rotation', 'i-Size certified', 'Multiple reclines and headrest adjust']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Joie i-Spin 360 (회전형·이전)', en: 'Joie i-Spin 360 (rotating, previous)' },
                            summary: { ko: 'i-Pivot 이전 세대 대표 라인.', en: 'Previous generation rotating line.' },
                            focus: {
                                ko: ['360° 회전', 'Tri-Protect 헤드레스트', 'Guard Surround 측면 보호'],
                                en: ['360° rotation', 'Tri-Protect headrest', 'Guard Surround side protection']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Britax DUALFIX 5Z (회전형·최신)', en: 'Britax DUALFIX 5Z (rotating, latest)' },
                            summary: { ko: 'i-Size 회전형 상위 라인.', en: 'Latest i-Size rotating line.' },
                            focus: {
                                ko: ['360° 회전', 'i-Size(R129) 기준', 'VARIO BASE 5Z 연동'],
                                en: ['360° rotation', 'i-Size (R129) compliant', 'Compatible with VARIO BASE 5Z']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Britax DUALFIX Z-LINE (회전형·이전)', en: 'Britax DUALFIX Z-LINE (rotating, previous)' },
                            summary: { ko: '5Z 이전 세대 라인.', en: 'Previous generation Z-line.' },
                            focus: {
                                ko: ['360° 회전', 'Z-LINE 베이스 연동'],
                                en: ['360° rotation', 'Z-LINE base compatible']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Nuna PIPA aire rx (신생아·최신)', en: 'Nuna PIPA aire rx (infant, latest)' },
                            summary: { ko: '초경량 인펀트 시트 라인.', en: 'Ultra-light infant seat line.' },
                            focus: {
                                ko: ['경량 설계', 'i-Size 인증', '메리노 울 등 통기 소재'],
                                en: ['Lightweight build', 'i-Size certified', 'Merino wool for breathability']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        },
                        {
                            type: 'product',
                            title: { ko: 'Nuna PIPA next (신생아·이전)', en: 'Nuna PIPA next (infant, previous)' },
                            summary: { ko: 'PIPA aire rx 이전 세대 라인.', en: 'Previous generation PIPA line.' },
                            focus: {
                                ko: ['가벼운 무게(약 2.8kg)', 'i-Size 인증', '풀커버 캐노피'],
                                en: ['Lightweight (~2.8kg)', 'i-Size certified', 'Full-cover canopy']
                            },
                            details: PRODUCT_DETAILS.carSeat
                        }
                    ]
                },
                {
                    id: 'carrier',
                    title: { ko: '아기띠', en: 'Carrier' },
                    items: [
                        {
                            type: 'product',
                            title: { ko: 'Ergobaby Omni Breeze (올인원)', en: 'Ergobaby Omni Breeze (all-in-one)' },
                            summary: { ko: '메쉬 통기성과 올인원 포지션.', en: 'Breathable mesh with all-in-one positions.' },
                            focus: {
                                ko: ['SoftFlex 메쉬로 통기성 강화', '신생아~유아 올인원 포지션', '요추 지지 벨트'],
                                en: ['SoftFlex mesh for airflow', 'All-in-one carry positions', 'Lumbar support belt']
                            },
                            details: PRODUCT_DETAILS.carrier
                        },
                        {
                            type: 'product',
                            title: { ko: 'BabyBjörn Harmony (프리미엄)', en: 'BabyBjörn Harmony (premium)' },
                            summary: { ko: '부드러운 메쉬와 체형 분산에 강점.', en: 'Soft mesh with strong weight distribution.' },
                            focus: {
                                ko: ['부드러운 메쉬 소재', '신생아~36개월 사용', '허리/등 지지 설계'],
                                en: ['Soft mesh fabric', 'Newborn to toddler use', 'Back and waist support']
                            },
                            details: PRODUCT_DETAILS.carrier
                        },
                        {
                            type: 'product',
                            title: { ko: 'Tula Explore (멀티 포지션)', en: 'Tula Explore (multi-position)' },
                            summary: { ko: '전면 안기/마주보기/등착용 지원.', en: 'Front inward/outward and back carry support.' },
                            focus: {
                                ko: ['전면 안기/마주보기/등착용', '신생아 패널/헤드서포트', '체중 3.6kg 이상 권장'],
                                en: ['Front in/out and back carry', 'Newborn panel and head support', 'Recommended from 3.6 kg']
                            },
                            details: PRODUCT_DETAILS.carrier
                        },
                        {
                            type: 'product',
                            title: { ko: 'LÍLLÉbaby Complete All Seasons', en: 'LÍLLÉbaby Complete All Seasons' },
                            summary: { ko: '온도 조절 패널과 다포지션.', en: 'Temperature control panel and multiple positions.' },
                            focus: {
                                ko: ['6가지 착용 포지션', '통풍/보온 패널 전환', '요추 지지/수납 포켓'],
                                en: ['Six carry positions', 'All-season temp panel', 'Lumbar support and storage']
                            },
                            details: PRODUCT_DETAILS.carrier
                        },
                        {
                            type: 'product',
                            title: { ko: '포그내 맥스 (4-in-1 힙시트)', en: 'Pognae Max (4-in-1 hip seat)' },
                            summary: { ko: '힙시트+캐리 결합형 대표 라인.', en: '4-in-1 hip seat + carrier line.' },
                            focus: {
                                ko: ['4-in-1 구성(힙시트/캐리 결합)', 'IHDI 인증 브랜드', '장시간 착용용 보강 구조'],
                                en: ['4-in-1 hip seat + carrier', 'IHDI-certified brand', 'Reinforced support for longer wear']
                            },
                            details: PRODUCT_DETAILS.carrier
                        }
                    ]
                },
                {
                    id: 'prep',
                    title: { ko: '외출 준비', en: 'Outing prep' },
                    items: [
                        card('외출', 'Outing', '외출가방 구성', 'Outing bag setup', '외출 시 필수 구성품을 미리 정리합니다.', 'Pre-pack essentials for outings.',
                            details(
                                ['외출 중 돌봄 스트레스를 줄입니다.'],
                                ['Reduces stress during outings.'],
                                ['계절/이동 시간에 맞춰 구성하세요.'],
                                ['Adjust for season and trip length.'],
                                ['외출 전날 10분 점검.'],
                                ['Check 10 minutes before leaving.'],
                                ['기저귀/물티슈', '여벌 옷/턱받이', '수유용품'],
                                ['Diapers/wipes', 'Spare clothes/bib', 'Feeding supplies']
                            )
                        ),
                        card('안전', 'Safety', '이동 안전 점검', 'Travel safety check', '이동 전 안전 체크리스트를 확인합니다.', 'Run a pre-travel safety check.',
                            details(
                                ['사고 위험을 줄이는 기본 절차입니다.'],
                                ['Basic step to reduce risks.'],
                                ['설치 상태를 반드시 확인하세요.'],
                                ['Confirm installation before travel.'],
                                ['외출 직전 3분 점검.'],
                                ['3-minute check before leaving.'],
                                ['카시트 각도', '벨트 장력', '고정 상태'],
                                ['Seat angle', 'Belt tension', 'Mounting check']
                            )
                        )
                    ]
                }
            ]
        },
        {
            id: 'weaning',
            title: { ko: '이유식/식단', en: 'Weaning' },
            subtitle: { ko: '보완식 시작과 식사 리듬', en: 'Complementary feeding guidance' },
            summary: {
                ko: ['6개월 무렵 시작', '철분 포함 식단', '질식 위험 주의'],
                en: ['Start around 6 months', 'Include iron-rich foods', 'Watch choking risks']
            },
            items: [
                card('식단', 'Food', '시작 타이밍', 'Start timing', 'WHO는 6개월경 보완식을 권장합니다.', 'WHO recommends complementary foods around 6 months.',
                    details(['모유/분유만으로는 부족해지는 시기입니다.'], ['Needs often exceed milk alone.'], ['준비 신호를 확인하세요.'], ['Check readiness cues.'], ['6개월 무렵 시작.'], ['Around 6 months.'], ['목 가눔', '앉기 지지 가능'], ['Head control', 'Supported sitting'])
                ),
                card('식단', 'Food', '철분 포함', 'Iron-rich foods', '철분이 풍부한 식재료를 포함합니다.', 'Include iron-rich foods.',
                    details(['철분은 이 시기 중요한 영양소입니다.'], ['Iron is important at this stage.'], ['알레르기 반응을 관찰하세요.'], ['Watch for allergies.'], ['초기 이유식부터.'], ['From early solids.'], ['고기/콩류', '철분 강화 시리얼'], ['Meat/legumes', 'Iron-fortified cereal'])
                ),
                card('식단', 'Food', '질감 단계', 'Texture progression', '부드러운 질감에서 천천히 확장합니다.', 'Gradually expand textures.',
                    details(['삼킴/씹기 발달에 도움됩니다.'], ['Supports chewing skills.'], ['질식 위험 식품은 피하세요.'], ['Avoid choking hazards.'], ['6~8개월부터 천천히.'], ['Gradually from 6-8 months.'], ['으깬 음식', '작은 조각'], ['Mashed foods', 'Small pieces'])
                ),
                card('식단', 'Food', '식사 횟수', 'Meal frequency', '월령에 맞게 횟수를 늘립니다.', 'Increase meal frequency by age.',
                    details(['WHO는 6-8개월 하루 2-3회 권장.'], ['WHO suggests 2-3 meals for 6-8 months.'], ['과식은 피하세요.'], ['Avoid overfeeding.'], ['월령에 맞게 확대.'], ['Increase with age.'], ['식사 기록', '간식 관리'], ['Meal log', 'Snack balance'])
                )
            ]
        },
        {
            id: 'skin',
            title: { ko: '피부/위생', en: 'Skin & Hygiene' },
            subtitle: { ko: '민감한 피부와 위생 루틴', en: 'Gentle skin and hygiene routine' },
            summary: {
                ko: ['목욕 후 보습', '자극 최소화', '발진 예방'],
                en: ['Moisturize after bath', 'Minimize irritation', 'Prevent rashes']
            },
            items: [
                card('피부', 'Skin', '보습 루틴', 'Moisture routine', '목욕 직후 보습을 고정합니다.', 'Moisturize right after bath.',
                    details(['피부 건조 예방에 도움됩니다.'], ['Helps prevent dryness.'], ['강한 향은 피하세요.'], ['Avoid strong fragrances.'], ['목욕 후 3분 이내.'], ['Within 3 minutes after bath.'], ['보습 크림', '부드러운 타월'], ['Moisturizer', 'Soft towel'])
                ),
                card('위생', 'Hygiene', '기저귀 발진 예방', 'Diaper rash care', '자주 갈고 통풍을 유지합니다.', 'Change often and air out.',
                    details(['피부 트러블 예방에 중요합니다.'], ['Important for skin protection.'], ['심한 발진은 상담하세요.'], ['Seek help for severe rash.'], ['기저귀 교체 때마다.'], ['At every change.'], ['순한 물티슈', '보호 크림'], ['Gentle wipes', 'Barrier cream'])
                ),
                card('위생', 'Hygiene', '손 위생', 'Hand hygiene', '수유/기저귀 전 손을 씻습니다.', 'Wash hands before care.',
                    details(['감염 예방의 기본입니다.'], ['Basic infection prevention.'], ['손 소독제도 가능.'], ['Sanitizer can help.'], ['매 돌봄 전후.'], ['Before and after care.'], ['손 세정제', '손수건'], ['Hand wash', 'Clean towel'])
                )
            ]
        },
        {
            id: 'play',
            title: { ko: '놀이/장난감', en: 'Play & Toys' },
            subtitle: { ko: '발달 단계별 놀이 선택', en: 'Stage-based play picks' },
            summary: {
                ko: ['감각 자극', '아기체육관/에듀테이블', '대근육/소근육 놀이'],
                en: ['Sensory play', 'Play gyms & activity tables', 'Gross/fine motor']
            },
            sections: [
                {
                    id: 'sensory',
                    title: { ko: '감각/인지 놀이', en: 'Sensory & cognitive' },
                    items: [
                        {
                            type: 'product',
                            title: { ko: '러브에브리 플레이 짐 (아기체육관)', en: 'Lovevery Play Gym' },
                            summary: { ko: '발달 존과 가이드가 있는 프리미엄 아기체육관.', en: 'Premium play gym with developmental zones and guide.' },
                            focus: {
                                ko: ['5개 발달 존으로 단계별 자극', '플레이 가이드 포함', '탈착 토이·카드 구성'],
                                en: ['5 developmental zones for stage-based play', 'Play guide included', 'Detachable toys and card sets']
                            },
                            details: details(
                                ['감각·인지 자극을 단계별로 지원합니다.'],
                                ['Supports stage-based sensory and cognitive play.'],
                                ['장난감 고정 상태를 수시로 확인하세요.'],
                                ['Check toy attachments regularly.'],
                                ['신생아~12개월 중심.'],
                                ['Best for newborn to 12 months.'],
                                ['존 구성', '세탁/관리 편의'],
                                ['Zone layout', 'Washability']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '피셔프라이스 킥앤플레이 피아노 짐', en: 'Fisher-Price Deluxe Kick & Play Piano Gym' },
                            summary: { ko: '피아노+토이아치 구성의 다기능 아기체육관.', en: 'Multi-function play gym with piano and toy arch.' },
                            focus: {
                                ko: ['탈착 피아노와 라이트 키', '3단계 스마트 스테이지', '토이 아치+연결 토이 구성'],
                                en: ['Removable piano with light-up keys', '3 Smart Stages levels', 'Toy arch with linkable toys']
                            },
                            details: details(
                                ['다양한 놀이 자세 전환을 돕습니다.'],
                                ['Supports multiple play positions as baby grows.'],
                                ['음량과 배터리 상태를 확인하세요.'],
                                ['Check volume and batteries.'],
                                ['신생아~36개월.'],
                                ['Birth to 36 months.'],
                                ['피아노 분리 사용', '세탁 가능 여부'],
                                ['Removable piano', 'Washable mat']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '타이니러브 클래식 모빌', en: 'Tiny Love classic mobile' },
                            summary: { ko: '초기 시각 자극용 대표 모빌.', en: 'Classic visual-stimulation mobile.' },
                            focus: {
                                ko: ["고정 상태와 안전 거리 확인", "음량/회전 속도 조절", "짧은 노출로 자극 관리"],
                                en: ["Check secure mounting and safe distance", "Adjust volume and rotation", "Keep sessions short to avoid overstimulation"]
                            },
                            details: details(
                                ['대비 패턴과 음악으로 초기 시각 발달에 도움.'],
                                ['Contrasts and music support early visual focus.'],
                                ['자극 과다 시 사용 시간을 줄이세요.'],
                                ['Reduce time if overstimulated.'],
                                ['생후 초기~4개월 중심.'],
                                ['Best for early months.'],
                                ['고정 상태 확인', '음량 조절'],
                                ['Secure mounting', 'Volume control']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '흑백 대비 카드', en: 'Black-and-white cards' },
                            summary: { ko: '초기 시각 자극용 대비 카드.', en: 'High-contrast visual cards.' },
                            focus: {
                                ko: ["15~20cm 거리에서 짧게", "양방향으로 천천히 이동", "하루 2~3회 소량"],
                                en: ["Show at 15–20 cm distance", "Move slowly side-to-side", "Short sessions 2–3 times daily"]
                            },
                            details: details(
                                ['짧게 보여주며 시각 초점을 돕습니다.'],
                                ['Supports early visual focus.'],
                                ['가까이 들이대지 마세요.'],
                                ['Avoid placing too close.'],
                                ['생후 0~3개월 중심.'],
                                ['Best for 0-3 months.'],
                                ['짧은 노출', '부드러운 말걸기'],
                                ['Short exposure', 'Soft talking']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '촉감 사운드북', en: 'Sensory sound book' },
                            summary: { ko: '촉감과 소리를 함께 자극.', en: 'Combines texture and sound play.' },
                            focus: {
                                ko: ["질감/소리 섹션 다양성", "찢김 방지 재질", "짧고 자주 읽기"],
                                en: ["Varied textures and sounds", "Tear-resistant material", "Short, frequent reading"]
                            },
                            details: details(
                                ['손으로 만지며 탐색합니다.'],
                                ['Encourages tactile exploration.'],
                                ['찢김 위험 확인.'],
                                ['Check for tear resistance.'],
                                ['생후 6~18개월 중심.'],
                                ['Best for 6-18 months.'],
                                ['세탁 가능', '모서리 마감'],
                                ['Washable', 'Safe edges']
                            )
                        }
                    ]
                },
                {
                    id: 'gross-motor',
                    title: { ko: '대근육 놀이', en: 'Gross motor' },
                    items: [
                        {
                            type: 'product',
                            title: { ko: '플레이매트', en: 'Play mat' },
                            summary: { ko: '터미타임과 감각 자극에 도움.', en: 'Supports tummy time and sensory play.' },
                            focus: {
                                ko: ["미끄럼 방지 확인", "터미타임과 누워놀이 겸용", "세탁/관리 편의성 체크"],
                                en: ["Confirm non-slip base", "Use for tummy time and floor play", "Check washability and maintenance"]
                            },
                            details: details(
                                ['바닥 생활의 기본 아이템입니다.'],
                                ['Basic floor-play item.'],
                                ['바닥 미끄럼을 확인하세요.'],
                                ['Check for non-slip base.'],
                                ['생후 1~6개월 중심.'],
                                ['Best for 1-6 months.'],
                                ['세탁 가능 여부', '두께'],
                                ['Washable', 'Thickness']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '피셔프라이스 러닝홈', en: 'Fisher-Price learning home' },
                            summary: { ko: '잡고 서기/놀이 기능이 함께 있는 장난감.', en: 'Activity center for standing and play.' },
                            focus: {
                                ko: ["미끄럼 방지 바닥", "볼륨 조절 필수", "잡고 서기 연습 지원"],
                                en: ["Non-slip base", "Volume control", "Supports pull-to-stand practice"]
                            },
                            details: details(
                                ['붙잡고 서기 연습에 도움됩니다.'],
                                ['Supports pull-to-stand practice.'],
                                ['사용 공간 확보가 필요합니다.'],
                                ['Ensure enough space.'],
                                ['생후 9~15개월 중심.'],
                                ['Best around 9-15 months.'],
                                ['미끄럼 방지', '소리 조절'],
                                ['Non-slip base', 'Sound control']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '소프트 볼', en: 'Soft ball set' },
                            summary: { ko: '대근육·감각 놀이용.', en: 'Gross motor and sensory play.' },
                            focus: {
                                ko: ["큰 사이즈로 삼킴 위험 줄이기", "부드러운 재질", "던지기/굴리기 놀이"],
                                en: ["Large size to reduce choking risk", "Soft material", "Roll and toss play"]
                            },
                            details: details(
                                ['움직임과 촉감 자극에 도움.'],
                                ['Supports movement and sensory input.'],
                                ['공 크기/재질 확인.'],
                                ['Check ball size/material.'],
                                ['생후 12개월 이후 중심.'],
                                ['Best after 12 months.'],
                                ['세척 가능', '안전 매트'],
                                ['Washable', 'Safe mat']
                            )
                        }
                    ]
                },
                {
                    id: 'fine-motor',
                    title: { ko: '소근육 놀이', en: 'Fine motor' },
                    items: [
                        {
                            type: 'product',
                            title: { ko: '오볼 딸랑이', en: 'Oball rattle' },
                            summary: { ko: '잡기 쉬운 소근육 장난감.', en: 'Easy-grip fine-motor toy.' },
                            focus: {
                                ko: ["잡기 쉬운 그립 구멍", "세척 가능한 소재", "짧은 흔들기 놀이"],
                                en: ["Easy-grip holes", "Washable materials", "Short shake-and-play sessions"]
                            },
                            details: details(
                                ['잡기 놀이와 촉감 자극에 도움.'],
                                ['Supports grasping and tactile play.'],
                                ['작은 부품 없는지 확인.'],
                                ['Ensure no small parts.'],
                                ['생후 2~8개월 중심.'],
                                ['Best for 2-8 months.'],
                                ['손에 닿는 크기', '세척 가능 여부'],
                                ['Size check', 'Washable']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '치발기', en: 'Teether' },
                            summary: { ko: '구강 탐색기 감각 놀이.', en: 'Supports gum relief and sensory play.' },
                            focus: {
                                ko: ["무독성 소재/치발 인증 확인", "냉장 보관 가능 여부", "깨끗이 세척 후 사용"],
                                en: ["Non-toxic materials and safety marks", "Chill-friendly design", "Clean thoroughly before use"]
                            },
                            details: details(
                                ['구강 탐색기에 유용합니다.'],
                                ['Useful during mouthing phase.'],
                                ['세척/소독 확인.'],
                                ['Check cleaning guidelines.'],
                                ['생후 4~10개월 중심.'],
                                ['Best for 4-10 months.'],
                                ['무독성 소재', '손잡이 크기'],
                                ['Non-toxic material', 'Grip size']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '실로폰/뮤직 토이', en: 'Xylophone/music toy' },
                            summary: { ko: '리듬 감각과 원인-결과 놀이.', en: 'Rhythm and cause-effect play.' },
                            focus: {
                                ko: ["음량 조절 기능", "모서리 라운딩 확인", "짧은 리듬 놀이"],
                                en: ["Volume control", "Rounded edges", "Short rhythm play"]
                            },
                            details: details(
                                ['소리 반응 놀이에 좋습니다.'],
                                ['Great for sound response play.'],
                                ['소리는 짧게.'],
                                ['Keep sound play brief.'],
                                ['생후 12개월 이후.'],
                                ['After 12 months.'],
                                ['음량 조절', '모서리 마감'],
                                ['Volume control', 'Safe edges']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '레고 듀플로', en: 'LEGO DUPLO' },
                            summary: { ko: '큰 블록으로 안전하게 쌓기 놀이.', en: 'Large blocks for safe stacking.' },
                            focus: {
                                ko: ["큰 블록으로 안전성", "정리함 포함 여부", "역할 놀이 확장"],
                                en: ["Large blocks for safety", "Check storage bin", "Expands pretend play"]
                            },
                            details: details(
                                ['손-눈 협응과 상상 놀이에 도움.'],
                                ['Supports hand-eye and pretend play.'],
                                ['입에 넣지 않도록 관찰.'],
                                ['Supervise to avoid mouthing.'],
                                ['생후 18개월 이후 추천.'],
                                ['Best after 18 months.'],
                                ['블록 크기 확인', '정리 바구니'],
                                ['Block size', 'Storage bin']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '주방놀이 세트', en: 'Pretend kitchen set' },
                            summary: { ko: '상상 놀이 확장에 도움.', en: 'Supports pretend play.' },
                            focus: {
                                ko: ["작은 부품 유무 확인", "내구성/소음 확인", "역할 놀이로 언어 확장"],
                                en: ["Check for small parts", "Check durability and noise", "Language growth through pretend play"]
                            },
                            details: details(
                                ['역할 놀이가 늘어나는 시기에 적합.'],
                                ['Fits role-play stage.'],
                                ['작은 부품 확인.'],
                                ['Check for small parts.'],
                                ['생후 24개월 이후 중심.'],
                                ['Best after 24 months.'],
                                ['수납 박스', '안전 재질'],
                                ['Storage box', 'Safe materials']
                            )
                        }
                    ]
                },
                {
                    id: 'edu-table',
                    title: { ko: '에듀테이블', en: 'Activity tables' },
                    items: [
                        {
                            type: 'product',
                            title: { ko: '피셔프라이스 러닝 테이블', en: 'Fisher-Price Around the Town Learning Table' },
                            summary: { ko: '노래/문구와 버튼 놀이가 많은 학습 테이블.', en: 'Learning table with songs, phrases, and button play.' },
                            focus: {
                                ko: ['120+ 노래·문구', '스마트 스테이지 3단계', '테이블 다리로 성장 단계 확장'],
                                en: ['120+ songs & phrases', 'Smart Stages 3 levels', 'Grows with removable legs']
                            },
                            details: details(
                                ['손 조작과 언어 자극에 도움됩니다.'],
                                ['Supports fine motor and language play.'],
                                ['서서 사용할 때 미끄럼 방지 확인.'],
                                ['Ensure stability for standing play.'],
                                ['6~36개월.'],
                                ['6–36 months.'],
                                ['배터리 포함 여부', '다리 높이 조절'],
                                ['Battery needs', 'Leg height setup']
                            )
                        },
                        {
                            type: 'product',
                            title: { ko: '스킵합 렛츠 롤 액티비티 테이블', en: 'Skip Hop Explore & More Activity Table' },
                            summary: { ko: '20가지 활동 요소가 들어간 액티비티 테이블.', en: 'Activity table packed with 20 play elements.' },
                            focus: {
                                ko: ['2단계 놀이(바닥/테이블)', '20가지 활동 요소', '라이트업 피아노와 볼 놀이'],
                                en: ['2 stages (floor/table)', '20 activity elements', 'Light-up piano and ball play']
                            },
                            details: details(
                                ['탐색 놀이와 원인-결과 자극에 좋습니다.'],
                                ['Great for exploration and cause-effect play.'],
                                ['부품 고정 상태를 확인하세요.'],
                                ['Check parts are secure.'],
                                ['6~36개월.'],
                                ['6–36 months.'],
                                ['배터리 필요', '조립 난이도 확인'],
                                ['Battery required', 'Assembly check']
                            )
                        }
                    ]
                }
            ]
        },
        {
            id: 'education',
            title: { ko: '교육', en: 'Learning' },
            subtitle: { ko: '언어·인지 자극을 자연스럽게', en: 'Gentle language and cognitive learning' },
            summary: {
                ko: ['그림책/소리 책', '카드 놀이', '반복 대화'],
                en: ['Books and sound', 'Card play', 'Repetition talk']
            },
            items: [
                {
                    type: 'product',
                    title: { ko: '아기 그림책 세트', en: 'Picture book set' },
                    summary: { ko: '짧은 문장과 선명한 그림 중심.', en: 'Short sentences with clear visuals.' },
                    focus: {
                        ko: ["짧은 문장/선명한 그림", "코팅 페이지 여부", "매일 반복 읽기"],
                        en: ["Short sentences and clear images", "Check coated pages", "Repeat daily reading"]
                    },
                    details: details(
                        ['매일 짧게 읽어주는 습관이 중요합니다.'],
                        ['Daily short reading helps.'],
                        ['지나치게 긴 책은 피하세요.'],
                        ['Avoid overly long books.'],
                        ['생후 0~24개월 전반.'],
                        ['Across 0-24 months.'],
                        ['반복 읽기', '아기 반응 관찰'],
                        ['Repeat readings', 'Watch responses']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '사운드북', en: 'Sound book' },
                    summary: { ko: '버튼을 누르는 상호작용 책.', en: 'Interactive button sound book.' },
                    focus: {
                        ko: ["버튼 위치가 손에 맞는지", "음량 조절 가능 여부", "짧은 시간 사용"],
                        en: ["Button placement fits small hands", "Volume control", "Short usage time"]
                    },
                    details: details(
                        ['원인-결과 인지에 도움됩니다.'],
                        ['Supports cause-effect learning.'],
                        ['사용 시간은 짧게.'],
                        ['Keep usage time short.'],
                        ['생후 12개월 이후.'],
                        ['After 12 months.'],
                        ['배터리 점검', '음량 조절'],
                        ['Battery check', 'Volume control']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '레인보우 온 세이펜', en: 'RainbowOn SayPen' },
                    summary: { ko: '소리 나는 책과 함께 쓰는 학습 펜.', en: 'Audio pen for interactive books.' },
                    focus: {
                        ko: ["호환 교재 리스트 확인", "배터리 충전/교체 편의", "짧은 듣기 루틴"],
                        en: ["Check compatible books", "Battery/charging convenience", "Short listening routine"]
                    },
                    details: details(
                        ['반복 듣기로 언어 자극을 제공합니다.'],
                        ['Supports repetitive listening.'],
                        ['사용 시간은 짧게 조절하세요.'],
                        ['Keep usage time moderate.'],
                        ['말/그림책 관심 시기부터.'],
                        ['Use when interested in books.'],
                        ['호환 도서 확인', '배터리 확인'],
                        ['Check compatible books', 'Battery check']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '몬테소리 단어 카드', en: 'Montessori word cards' },
                    summary: { ko: '기초 단어 카드를 활용한 놀이.', en: 'Basic word cards for play.' },
                    focus: {
                        ko: ["카드 크기/재질 확인", "카테고리별 정리", "짧은 노출 반복"],
                        en: ["Check card size/material", "Organize by category", "Short repeated exposure"]
                    },
                    details: details(
                        ['단어-이미지 연결을 돕습니다.'],
                        ['Supports word-image matching.'],
                        ['강요하지 말고 짧게.'],
                        ['Keep it short, no pressure.'],
                        ['말이 늘기 시작하는 시기.'],
                        ['Best when vocabulary grows.'],
                        ['카드 정리', '짧은 놀이'],
                        ['Card storage', 'Short play']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '플래시카드', en: 'Flash cards' },
                    summary: { ko: '짧은 단어 자극에 유용.', en: 'Good for quick word exposure.' },
                    focus: {
                        ko: ["카드 수 제한(3~5장)", "선명한 이미지", "반응 기반 교체"],
                        en: ["Limit to 3–5 cards", "Clear images", "Rotate based on response"]
                    },
                    details: details(
                        ['짧게 보여주고 반응을 봅니다.'],
                        ['Show briefly and observe.'],
                        ['강요하지 마세요.'],
                        ['Avoid pressure.'],
                        ['말이 늘기 시작하는 시기.'],
                        ['When vocabulary grows.'],
                        ['3~5장씩', '짧은 세션'],
                        ['3-5 cards', 'Short sessions']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '한글/알파벳 벽보', en: 'Hangul/Alphabet poster' },
                    summary: { ko: '벽에 붙이는 시각 학습 포스터.', en: 'Visual learning wall poster.' },
                    focus: {
                        ko: ["눈높이 부착", "과한 정보 피하기", "자주 사용하는 공간 배치"],
                        en: ["Place at eye level", "Avoid clutter", "Mount in frequent-use area"]
                    },
                    details: details(
                        ['자주 노출로 글자 친숙도를 높입니다.'],
                        ['Repeated exposure builds familiarity.'],
                        ['너무 많은 정보는 피하세요.'],
                        ['Avoid too much visual clutter.'],
                        ['관심 보이는 시기에 붙이기.'],
                        ['Place when interest appears.'],
                        ['높이 조절', '눈높이 배치'],
                        ['Adjust height', 'Eye-level placement']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '사운드 포스터', en: 'Sound poster' },
                    summary: { ko: '누르면 소리 나는 벽보형 학습 도구.', en: 'Press-to-sound learning poster.' },
                    focus: {
                        ko: ["벽면 고정 상태 확인", "음량 조절 여부", "짧게 반복 사용"],
                        en: ["Secure wall mounting", "Volume control", "Short repeated use"]
                    },
                    details: details(
                        ['원인-결과 놀이와 언어 자극에 도움.'],
                        ['Supports cause-effect and language.'],
                        ['소리 자극은 짧게.'],
                        ['Keep sound play brief.'],
                        ['말 흉내 시기부터.'],
                        ['When imitation starts.'],
                        ['배터리 확인', '벽면 고정'],
                        ['Battery check', 'Secure mounting']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '문화 카드(자연/생활)', en: 'Culture cards' },
                    summary: { ko: '생활·자연 주제 카드로 확장 학습.', en: 'Topic cards for broader learning.' },
                    focus: {
                        ko: ["주제별 정리", "사진/그림 명확성", "질문-응답 놀이"],
                        en: ["Organize by topic", "Clear images", "Use Q&A play"]
                    },
                    details: details(
                        ['시야를 넓히는 주제 놀이에 도움.'],
                        ['Helps broaden topic exposure.'],
                        ['연령에 맞게 선택하세요.'],
                        ['Choose age-appropriate sets.'],
                        ['호기심이 늘어나는 시기.'],
                        ['When curiosity grows.'],
                        ['카드 정리', '짧은 놀이'],
                        ['Card storage', 'Short sessions']
                    )
                },
                {
                    type: 'product',
                    title: { ko: '대형 퍼즐', en: 'Large-piece puzzle' },
                    summary: { ko: '손-눈 협응과 집중에 도움.', en: 'Supports hand-eye and focus.' },
                    focus: {
                        ko: ["큰 조각부터 시작", "손잡이 유무 확인", "완성 후 이름 말하기"],
                        en: ["Start with large pieces", "Check for knobs", "Name objects after completion"]
                    },
                    details: details(
                        ['큰 조각부터 시작합니다.'],
                        ['Start with large pieces.'],
                        ['작은 부품 주의.'],
                        ['Avoid small parts.'],
                        ['생후 24개월 이후.'],
                        ['After 24 months.'],
                        ['보관함', '관찰 놀이'],
                        ['Storage box', 'Supervised play']
                    )
                }
            ]
        },
        {
            id: 'formula',
            title: { ko: '분유', en: 'Formula' },
            subtitle: { ko: '국산/수입 + 특성별 라인 정리', en: 'Domestic/imported + specialty lines' },
            summary: {
                ko: ['국산/수입 분류', '산양유/민감케어/무유당 라인', '제품 토글로 비교'],
                en: ['Domestic/imported split', 'Goat/sensitive/low-lactose lines', 'Compare with toggles']
            },
            sections: [
                {
                    id: 'guides',
                    title: { ko: '기준/가이드', en: 'Guides' },
                    items: [FORMULA_ITEMS.priceGuide, FORMULA_ITEMS.ingredientStyles]
                },
                {
                    id: 'domestic',
                    title: { ko: '국산 분유', en: 'Domestic' },
                    items: [
                        FORMULA_ITEMS.absoluteMasterpiece,
                        FORMULA_ITEMS.imperialXO,
                        FORMULA_ITEMS.ivenetGoldenJersey,
                        FORMULA_ITEMS.pasteurWithMom,
                        FORMULA_ITEMS.pasteurWithMomC,
                        FORMULA_ITEMS.absoluteGoat,
                        FORMULA_ITEMS.iAmMother
                    ]
                },
                {
                    id: 'imported',
                    title: { ko: '수입 분유', en: 'Imported' },
                    items: [
                        FORMULA_ITEMS.aptamilProfutura,
                        FORMULA_ITEMS.hippCombiotic,
                        FORMULA_ITEMS.aptamilNetherlands,
                        FORMULA_ITEMS.aptamilEssensis,
                        FORMULA_ITEMS.novolacGold,
                        FORMULA_ITEMS.newOriginA2,
                        FORMULA_ITEMS.rubilac,
                        FORMULA_ITEMS.holle,
                        FORMULA_ITEMS.illuma,
                        FORMULA_ITEMS.foodisGoat,
                        FORMULA_ITEMS.lowenzahn,
                        FORMULA_ITEMS.kabrita,
                        FORMULA_ITEMS.hippOrganic,
                        FORMULA_ITEMS.trueMom
                    ]
                },
                {
                    id: 'goat',
                    title: { ko: '산양유 라인', en: 'Goat milk' },
                    items: [
                        FORMULA_ITEMS.goatLine,
                        FORMULA_ITEMS.absoluteGoat,
                        FORMULA_ITEMS.foodisGoat,
                        FORMULA_ITEMS.kabrita
                    ]
                },
                {
                    id: 'sensitive',
                    title: { ko: '민감 케어', en: 'Sensitive care' },
                    items: [FORMULA_ITEMS.sensitiveCare]
                },
                {
                    id: 'low-lactose',
                    title: { ko: '무유당/저유당', en: 'Low/zero lactose' },
                    items: [FORMULA_ITEMS.lowLactose]
                }
            ]
        }
    ]
};

const monthStages = [
    {
        month: 0,
        top5: ['안전한 수면 환경', '수유 리듬 파악', '기저귀/피부 케어', '탯줄/목욕 관리', '건강 체크업'],
        top5En: ['Safe sleep setup', 'Feeding rhythm check', 'Diaper/skin care', 'Umbilical & bath care', 'Health checkups'],
        cards: [
            card('수면', 'Sleep', '안전한 수면', 'Safe sleep', '딱딱한 매트리스와 등을 대고 눕히기.', 'Firm surface, on the back.',
                details(
                    ['영아 돌연사 위험을 낮추는 기본 수칙입니다.'],
                    ['Back-sleeping is a core safety practice.'],
                    ['이불/베개는 피하세요.'],
                    ['Avoid pillows and loose bedding.'],
                    ['매 수면마다 적용합니다.'],
                    ['Every sleep session.'],
                    ['매트리스 단단함', '침대 주변 정리'],
                    ['Firm mattress', 'Clear sleep space']
                )
            ),
            card('수유', 'Feeding', '수유 신호', 'Feeding cues', '입에 손 가져가기, 입맛 다시기 등을 관찰합니다.', 'Watch early hunger cues.',
                details(
                    ['초기 신호에 대응하면 수유가 편합니다.'],
                    ['Early cues make feeding smoother.'],
                    ['과도한 울음 전 대응을 시도하세요.'],
                    ['Try before intense crying.'],
                    ['하루 내내 자주 관찰합니다.'],
                    ['Observe throughout the day.'],
                    ['신호 기록', '수유 간격 메모'],
                    ['Log cues', 'Note intervals']
                )
            ),
            card('진정', 'Soothing', '속싸개/진정', 'Swaddle & soothe', '부드러운 흔들기와 속싸개로 안정감을 줍니다.', 'Gentle rocking and swaddle.',
                details(
                    ['신생아는 강한 반사로 쉽게 놀랍니다.'],
                    ['Newborns startle easily.'],
                    ['너무 꽉 조이지 마세요.'],
                    ['Avoid tight wrapping.'],
                    ['잠들기 전/깰 때 활용.'],
                    ['Use for sleep transitions.'],
                    ['통기성 소재', '팔 위치 확인'],
                    ['Breathable fabric', 'Check arm position']
                )
            ),
            card('위생', 'Hygiene', '기저귀/피부', 'Diaper & skin', '자주 갈아주고 보습을 유지합니다.', 'Change often and moisturize.',
                details(
                    ['피부 트러블 예방에 중요합니다.'],
                    ['Helps prevent irritation.'],
                    ['발진이 심하면 전문가 상담.'],
                    ['Seek help for severe rash.'],
                    ['기저귀 교체 시마다.'],
                    ['At every diaper change.'],
                    ['순한 물티슈', '보습 크림'],
                    ['Gentle wipes', 'Moisturizer']
                )
            ),
            card('건강', 'Health', '탯줄/목욕', 'Umbilical & bath', '탯줄이 마르기 전까지 청결 유지.', 'Keep area clean until healed.',
                details(
                    ['감염 예방에 중요합니다.'],
                    ['Reduces infection risk.'],
                    ['붉음/분비물이 있으면 상담하세요.'],
                    ['Check if redness or discharge.'],
                    ['목욕은 짧고 미지근하게.'],
                    ['Short, lukewarm baths.'],
                    ['깨끗한 거즈', '부드러운 타월'],
                    ['Clean gauze', 'Soft towel']
                )
            ),
            card('발달', 'Development', '짧은 터미타임', 'Short tummy time', '깨어 있을 때 짧게 엎드리기.', 'Brief tummy time when awake.',
                details(
                    ['목/어깨 힘 발달에 도움됩니다.'],
                    ['Supports neck/shoulder strength.'],
                    ['항상 보호자 관찰이 필요합니다.'],
                    ['Supervise at all times.'],
                    ['하루 여러 번, 짧게.'],
                    ['Several short sessions daily.'],
                    ['바닥 매트', '부드러운 담요'],
                    ['Play mat', 'Soft blanket']
                )
            ),
            card('환경', 'Environment', '실내 온습도', 'Room comfort', '과도한 더위/추위를 피합니다.', 'Avoid overheating or chilling.',
                details(
                    ['쾌적한 환경이 수면에 도움됩니다.'],
                    ['Comfortable room helps sleep.'],
                    ['두꺼운 이불은 피하세요.'],
                    ['Avoid heavy bedding.'],
                    ['낮/밤 온도 체크.'],
                    ['Check day/night.'],
                    ['온습도계', '얇은 겹옷'],
                    ['Thermo-hygrometer', 'Layered clothing']
                )
            ),
            card('안전', 'Safety', '카시트 점검', 'Car seat check', '퇴원/외출 전 설치 상태를 확인합니다.', 'Confirm installation before travel.',
                details(
                    ['안전 이동의 기본입니다.'],
                    ['Foundation of safe travel.'],
                    ['설치가 어려우면 전문가 도움을 받으세요.'],
                    ['Seek professional help if needed.'],
                    ['첫 외출 전 필수 확인.'],
                    ['Check before first outing.'],
                    ['각도 표시', '벨트 고정'],
                    ['Angle indicator', 'Belt lock']
                )
            )
        ]
    }
];

const buildMonthStage = (month, titleKo, titleEn, top5Ko, top5En, cards) => ({
    id: `m-${month}`,
    group: 'baby-0-12',
    label: { ko: `생후 ${month}개월`, en: `Month ${month}` },
    range: { ko: titleKo, en: titleEn },
    top5: { ko: top5Ko, en: top5En },
    cards
});

const monthData = [
    { month: 1, titleKo: '생후 1개월', titleEn: 'Month 1',
        top5: ['수유 리듬 안정', '밤낮 구분 시도', '짧은 터미타임', '피부 보습', '초기 예방접종/진료'],
        top5En: ['Stabilize feeding rhythm', 'Introduce day-night cues', 'Short tummy time', 'Moisturize skin', 'Early checkups/vaccines'],
        cards: [
            card('수유', 'Feeding', '수유 간격 기록', 'Feeding log', '수유 패턴을 짧게 기록합니다.', 'Track feeding patterns briefly.',
                details(['패턴 파악에 도움됩니다.'], ['Helps spot patterns.'], ['무리한 간격 조정은 피하세요.'], ['Avoid forcing intervals.'], ['2~3일 단위로 확인.'], ['Review every few days.'], ['수유 횟수', '수유량 메모'], ['Frequency', 'Amount notes'])
            ),
            card('수면', 'Sleep', '밤낮 구분', 'Day-night cues', '낮에는 밝게, 밤에는 어둡게 유지.', 'Bright days, dim nights.',
                details(['생체 리듬 형성에 도움됩니다.'], ['Supports circadian rhythm.'], ['과도한 자극은 피하세요.'], ['Avoid overstimulation.'], ['잠자기 30분 전부터 어둡게.'], ['Dim lights before sleep.'], ['수면등', '화이트노이즈'], ['Night light', 'White noise'])
            ),
            card('발달', 'Development', '머리 지지 연습', 'Head support', '짧은 터미타임으로 목 힘을 돕습니다.', 'Short tummy time for neck strength.',
                details(['목/어깨 근육 발달을 지원합니다.'], ['Supports neck/shoulder strength.'], ['항상 보호자 관찰이 필요합니다.'], ['Always supervise.'], ['하루 2~3회, 짧게.'], ['2-3 short sessions daily.'], ['바닥 매트', '짧은 시간'], ['Play mat', 'Short duration'])
            ),
            card('피부', 'Skin', '보습 루틴', 'Moisture routine', '목욕 후 보습을 고정합니다.', 'Moisturize after bath.',
                details(['피부 건조 예방에 도움됩니다.'], ['Helps prevent dryness.'], ['자극 강한 향은 피하세요.'], ['Avoid strong fragrances.'], ['목욕 직후 3분 이내.'], ['Within 3 minutes after bath.'], ['보습 크림', '부드러운 타월'], ['Moisturizer', 'Soft towel'])
            ),
            card('정리', 'Planning', '기저귀 재고', 'Diaper stock', '재고를 주 1회 확인합니다.', 'Check stock weekly.',
                details(['긴급 구매를 줄입니다.'], ['Avoids emergency buys.'], ['사이즈 변화에 유의하세요.'], ['Watch size changes.'], ['주 1회 고정.'], ['Once weekly.'], ['재고 리스트', '배송 일정'], ['Stock list', 'Delivery schedule'])
            ),
            card('안전', 'Safety', '흔들림 금지', 'Never shake', '울음이 심해도 흔들지 않습니다.', 'Never shake a baby.',
                details(['아기에게 심각한 손상이 됩니다.'], ['Shaking can cause severe injury.'], ['잠시 아기를 안전한 곳에 두고 쉬세요.'], ['Place baby safely and take a break.'], ['울음이 길어질 때 적용.'], ['Use when crying is intense.'], ['안전한 침대', '보호자 교대'], ['Safe crib', 'Caregiver swap'])
            ),
            card('건강', 'Health', '진료 체크', 'Checkups', '성장/수유 상태를 확인합니다.', 'Monitor growth and feeding.',
                details(['초기 건강 상태 점검에 중요합니다.'], ['Important for early health tracking.'], ['걱정되는 증상은 즉시 상담.'], ['Ask about concerns promptly.'], ['예정된 진료 일정에 맞춰.'], ['Follow scheduled visits.'], ['체중 기록', '질문 리스트'], ['Weight log', 'Question list'])
            ),
            card('건강', 'Health', '영유아 건강검진 일정', 'Infant screening schedule', '국가 영유아 건강검진 일정을 확인합니다.', 'Check the national infant screening schedule.',
                details(
                    ['국가 건강검진으로 성장/발달 점검을 지원합니다.'],
                    ['National screenings support growth and development checks.'],
                    ['해당 기간 내 예약이 필요합니다.'],
                    ['Book within the designated window.'],
                    ['1차: 생후 14~35일', '2차: 생후 4~6개월', '3차: 생후 9~12개월', '4차: 생후 18~24개월', '5차: 생후 30~36개월'],
                    ['1st: 14-35 days', '2nd: 4-6 months', '3rd: 9-12 months', '4th: 18-24 months', '5th: 30-36 months'],
                    ['지정 기관 확인', '검진표 준비'],
                    ['Find a designated clinic', 'Prepare the screening form']
                )
            ),
            card('정서', 'Bonding', '교감 시간', 'Bonding time', '부드럽게 말하고 눈을 맞춥니다.', 'Speak softly, make eye contact.',
                details(['정서 안정에 도움됩니다.'], ['Supports emotional bonding.'], ['피곤할 때는 짧게.'], ['Keep it short if tired.'], ['매일 여러 번 짧게.'], ['Several short times daily.'], ['스킨십', '부드러운 목소리'], ['Skin contact', 'Soft voice'])
            )
        ]
    },
    { month: 2, titleKo: '생후 2개월', titleEn: 'Month 2',
        top5: ['사회적 미소 관찰', '터미타임 늘리기', '소리 반응', '수유 신호 강화', '수면 루틴 준비'],
        top5En: ['Observe social smiles', 'Increase tummy time', 'Sound response', 'Stronger feeding cues', 'Prep sleep routine'],
        cards: [
            card('발달', 'Development', '사회적 미소', 'Social smile', '웃음과 반응을 주고받습니다.', 'Share smiles and responses.',
                details(['2개월 무렵 미소 반응이 늘어납니다.'], ['Smiles often increase around this age.'], ['개인차가 큽니다.'], ['Individual variation is normal.'], ['낮에 교감 시간 활용.'], ['Use daytime bonding.'], ['얼굴 가까이 보기', '부드러운 말'], ['Face-to-face time', 'Soft talk'])
            ),
            card('운동', 'Movement', '터미타임 늘리기', 'More tummy time', '깨어 있을 때 조금 더 늘립니다.', 'Increase tummy time when awake.',
                details(['머리 들기 연습에 도움됩니다.'], ['Helps head control practice.'], ['피곤해하면 중단하세요.'], ['Stop if tired.'], ['하루 여러 번 짧게.'], ['Several short sessions.'], ['매트 준비', '보호자 관찰'], ['Play mat', 'Supervision'])
            ),
            card('소통', 'Communication', '소리 반응', 'Sound response', '큰 소리에 반응하는지 관찰합니다.', 'Observe responses to sound.',
                details(['청각 반응을 확인할 수 있습니다.'], ['Helps monitor hearing response.'], ['과도한 소음은 피하세요.'], ['Avoid loud noise.'], ['일상 소리에서 관찰.'], ['Observe in daily sounds.'], ['딸랑이', '부드러운 음악'], ['Rattle', 'Soft music'])
            ),
            card('수유', 'Feeding', '수유 신호', 'Feeding cues', '입맛 다시기, 손 빨기 신호를 봅니다.', 'Watch early hunger cues.',
                details(['초기 신호에 반응하면 편합니다.'], ['Responding early helps.'], ['울음은 늦은 신호일 수 있어요.'], ['Crying can be late cue.'], ['수유 전 관찰.'], ['Observe before feeding.'], ['신호 메모', '수유 간격'], ['Cue notes', 'Intervals'])
            ),
            card('수면', 'Sleep', '수면 루틴 준비', 'Sleep routine prep', '짧은 잠 의식을 만들어봅니다.', 'Create a short bedtime ritual.',
                details(['반복 루틴이 안정감을 줍니다.'], ['Routine supports security.'], ['지나치게 길게 하지 마세요.'], ['Keep it brief.'], ['매일 같은 순서로.'], ['Same order daily.'], ['수면등', '자장가'], ['Night light', 'Lullaby'])
            ),
            card('건강', 'Health', '진료 체크', 'Checkups', '정기 진료에서 성장 상태를 확인합니다.', 'Review growth at visits.',
                details(['성장 추적에 도움이 됩니다.'], ['Supports growth tracking.'], ['궁금한 점을 메모해두세요.'], ['Write questions ahead.'], ['진료 전날 준비.'], ['Prepare before visits.'], ['체중 기록', '질문 리스트'], ['Weight log', 'Question list'])
            ),
            card('안전', 'Safety', '손 위생', 'Hand hygiene', '수유/기저귀 전 손을 씻습니다.', 'Wash hands before care.',
                details(['감염 예방의 기본입니다.'], ['Basic infection prevention.'], ['손 소독제 사용도 가능.'], ['Sanitizer can help.'], ['매 돌봄 전후.'], ['Before and after care.'], ['핸드워시', '손 소독제'], ['Hand wash', 'Sanitizer'])
            ),
            card('놀이', 'Play', '시각 자극', 'Visual play', '대비가 큰 패턴을 보여줍니다.', 'Show high-contrast patterns.',
                details(['시각 발달을 돕습니다.'], ['Supports visual development.'], ['너무 가까이 들이대지 마세요.'], ['Avoid being too close.'], ['하루 몇 분씩.'], ['A few minutes daily.'], ['대비 카드', '흑백 책'], ['Contrast cards', 'Black-white books'])
            )
        ]
    },
    { month: 3, titleKo: '생후 3개월', titleEn: 'Month 3',
        top5: ['손-입 움직임', '머리 지지 향상', '옹알이 증가', '낮잠 리듬', '놀이 시간 확대'],
        top5En: ['Hand-to-mouth exploration', 'Improved head control', 'More cooing', 'Nap rhythm', 'Longer play time'],
        cards: [
            card('발달', 'Development', '손-입 탐색', 'Hand-to-mouth', '손을 입으로 가져가며 탐색합니다.', 'Hands-to-mouth exploration.',
                details(['감각 발달의 자연스러운 과정입니다.'], ['Normal sensory exploration.'], ['손 위생을 신경 쓰세요.'], ['Keep hands clean.'], ['놀이 중 관찰.'], ['Observe during play.'], ['손 씻기', '손수건'], ['Hand cleaning', 'Soft cloth'])
            ),
            card('운동', 'Movement', '머리 지지 향상', 'Head control', '안고 있을 때 머리 흔들림이 줄어듭니다.', 'Head control improves.',
                details(['목 근육이 강화되는 시기입니다.'], ['Neck muscles strengthen.'], ['무리한 자세는 피하세요.'], ['Avoid strained positions.'], ['터미타임과 함께.'], ['With tummy time.'], ['지지용 베개', '매트'], ['Support pillow', 'Play mat'])
            ),
            card('소통', 'Communication', '옹알이 증가', 'More cooing', '소리와 표정을 주고받습니다.', 'Exchange sounds and faces.',
                details(['의사소통의 시작입니다.'], ['Early communication stage.'], ['반응을 천천히 따라주세요.'], ['Respond gently.'], ['하루 여러 번 교감.'], ['Several interactions daily.'], ['따라 말하기', '노래'], ['Echo sounds', 'Sing'])
            ),
            card('수면', 'Sleep', '낮잠 리듬', 'Nap rhythm', '낮잠 시간이 어느 정도 정리됩니다.', 'Nap times begin to settle.',
                details(['리듬 형성에 도움됩니다.'], ['Supports daily rhythm.'], ['아직 유동적일 수 있습니다.'], ['Still variable at this age.'], ['낮잠 전 루틴 짧게.'], ['Short pre-nap routine.'], ['커튼 조절', '소음 최소화'], ['Dim curtains', 'Reduce noise'])
            ),
            card('놀이', 'Play', '놀이 매트', 'Play mat', '누워서 손을 뻗는 놀이를 합니다.', 'Reach and play on mat.',
                details(['손-눈 협응에 도움됩니다.'], ['Supports hand-eye coordination.'], ['과도한 장난감은 피하세요.'], ['Avoid too many toys.'], ['하루 2~3회.'], ['2-3 sessions daily.'], ['모빌', '부드러운 딸랑이'], ['Mobile', 'Soft rattle'])
            ),
            card('안전', 'Safety', '침대 안전', 'Sleep space safety', '침대 주변 물건을 치웁니다.', 'Clear sleep space.',
                details(['질식 위험을 줄입니다.'], ['Reduces suffocation risk.'], ['쿠션/인형은 피하세요.'], ['Avoid pillows and plush.'], ['매 수면 전 점검.'], ['Check before sleep.'], ['침대 정리', '담요 최소화'], ['Clear crib', 'Minimal blankets'])
            ),
            card('위생', 'Hygiene', '목욕 루틴', 'Bath routine', '목욕 시간을 일정하게 합니다.', 'Set a consistent bath time.',
                details(['수면 루틴에 도움이 됩니다.'], ['Supports sleep routine.'], ['피부가 건조하면 횟수 조절.'], ['Adjust if skin gets dry.'], ['저녁 시간 권장.'], ['Evening recommended.'], ['보습 크림', '부드러운 바디워시'], ['Moisturizer', 'Gentle wash'])
            ),
            card('정서', 'Bonding', '스킨십', 'Skin contact', '부드럽게 안아주고 이야기합니다.', 'Hold and talk gently.',
                details(['정서 안정에 중요합니다.'], ['Important for bonding.'], ['과도한 자극은 피하세요.'], ['Avoid overstimulation.'], ['수유 후 편안한 시간에.'], ['After feeds.'], ['포대기', '가벼운 담요'], ['Carrier', 'Light blanket'])
            )
        ]
    },
    { month: 4, titleKo: '생후 4개월', titleEn: 'Month 4',
        top5: ['머리 고정', '소리 모방', '손 관찰', '뒤집기 준비', '수면 루틴 강화'],
        top5En: ['Steadier head', 'Sound imitation', 'Watching hands', 'Rolling prep', 'Stronger sleep routine'],
        cards: [
            card('발달', 'Development', '머리 고정', 'Steady head', '안고 있을 때 머리가 안정적입니다.', 'Head is steadier when held.',
                details(['CDC 4개월 지표에 포함됩니다.'], ['Included in CDC 4-month milestones.'], ['아직 흔들림이 있어도 정상입니다.'], ['Some wobble is still normal.'], ['일상 활동 중 관찰.'], ['Observe during daily activities.'], ['안아주기', '터미타임'], ['Holding', 'Tummy time'])
            ),
            card('소통', 'Communication', '소리 모방', 'Sound exchange', '말을 걸면 소리로 반응합니다.', 'Responds with cooing.',
                details(['상호작용이 증가합니다.'], ['Interaction increases.'], ['너무 큰 소리는 피하세요.'], ['Avoid loud sounds.'], ['하루 여러 번.'], ['Several times daily.'], ['따라 말하기', '노래'], ['Echo sounds', 'Sing'])
            ),
            card('인지', 'Cognitive', '손 관찰', 'Watching hands', '손을 유심히 바라봅니다.', 'Looks at hands with interest.',
                details(['자기 몸 탐색의 시작입니다.'], ['Beginning of body awareness.'], ['손 위생을 신경 쓰세요.'], ['Keep hands clean.'], ['놀이 중 자연스럽게.'], ['During play.'], ['손 씻기', '간단 장난감'], ['Hand cleaning', 'Simple toys'])
            ),
            card('운동', 'Movement', '뒤집기 준비', 'Rolling prep', '몸을 비틀며 뒤집기 시도합니다.', 'Attempts to roll.',
                details(['근육 발달이 진행 중입니다.'], ['Muscle strength is building.'], ['침대 위는 위험합니다.'], ['Avoid unsafe surfaces.'], ['바닥 매트에서 연습.'], ['Practice on floor mat.'], ['매트', '짧은 연습'], ['Mat', 'Short practice'])
            ),
            card('수면', 'Sleep', '수면 루틴 강화', 'Strengthen routine', '취침 전 일정한 루틴을 유지합니다.', 'Keep a steady bedtime routine.',
                details(['안정감을 주는 요소입니다.'], ['Provides security.'], ['길게 하지 마세요.'], ['Keep it brief.'], ['매일 같은 순서.'], ['Same order daily.'], ['목욕-수유-수면', '수면등'], ['Bath-feed-sleep', 'Night light'])
            ),
            card('놀이', 'Play', '손 잡기 놀이', 'Hand play', '손을 잡고 놀이합니다.', 'Offer hand play.',
                details(['촉감/인지 자극에 도움됩니다.'], ['Supports sensory and cognitive play.'], ['과한 자극은 피하세요.'], ['Avoid overstimulation.'], ['짧게 자주.'], ['Short and frequent.'], ['딸랑이', '부드러운 인형'], ['Rattle', 'Soft toy'])
            ),
            card('안전', 'Safety', '가구 모서리', 'Furniture edges', '뒤집기 대비로 모서리를 정리합니다.', 'Pad sharp edges.',
                details(['활동량 증가 대비입니다.'], ['Prepares for more movement.'], ['일시적이라도 위험요소 제거.'], ['Remove hazards.'], ['뒤집기 시작 전.'], ['Before rolling begins.'], ['모서리 보호대', '바닥 정리'], ['Corner guards', 'Clear floor'])
            ),
            card('생활', 'Lifestyle', '외출 준비', 'Outing prep', '짧은 외출 루틴을 준비합니다.', 'Prepare for short outings.',
                details(['외출 시 스트레스를 줄입니다.'], ['Reduces outing stress.'], ['추가 자극에 주의하세요.'], ['Watch for overstimulation.'], ['짧게 시작.'], ['Start with short trips.'], ['기저귀 세트', '간단 담요'], ['Diaper kit', 'Light blanket'])
            )
        ]
    },
    { month: 5, titleKo: '생후 5개월', titleEn: 'Month 5',
        top5: ['뒤집기 연습', '장난감 잡기', '옹알이 다양화', '수면 리듬 유지', '이유식 준비'],
        top5En: ['Rolling practice', 'Grasping toys', 'More babble sounds', 'Keep sleep rhythm', 'Prepare for solids'],
        cards: [
            card('운동', 'Movement', '뒤집기 연습', 'Rolling practice', '좌우로 몸을 돌리는 움직임이 늘어요.', 'More rolling attempts.',
                details(['코어 근육 발달 시기입니다.'], ['Core strength is developing.'], ['침대 위는 위험합니다.'], ['Avoid elevated surfaces.'], ['바닥에서 연습.'], ['Practice on floor.'], ['매트', '짧은 세션'], ['Mat', 'Short sessions'])
            ),
            card('놀이', 'Play', '잡고 흔들기', 'Grasp & shake', '장난감을 잡고 흔듭니다.', 'Grabs and shakes toys.',
                details(['손-눈 협응 발달에 도움됩니다.'], ['Supports hand-eye coordination.'], ['작은 부품은 피하세요.'], ['Avoid small parts.'], ['짧게 자주.'], ['Short and frequent.'], ['딸랑이', '부드러운 볼'], ['Rattle', 'Soft ball'])
            ),
            card('소통', 'Communication', '옹알이 다양화', 'More babble', '소리 종류가 다양해집니다.', 'Babble variety increases.',
                details(['언어 발달의 기반입니다.'], ['Foundation for language.'], ['반응을 따라주세요.'], ['Mirror responses.'], ['하루 여러 번.'], ['Several times daily.'], ['따라 말하기', '노래'], ['Echo sounds', 'Sing'])
            ),
            card('수면', 'Sleep', '리듬 유지', 'Keep rhythm', '낮잠/밤잠 흐름을 유지합니다.', 'Maintain sleep rhythm.',
                details(['안정적인 수면 습관에 도움됩니다.'], ['Supports sleep habits.'], ['성장 급등 시 흔들릴 수 있어요.'], ['May fluctuate during growth spurts.'], ['루틴 고정.'], ['Keep routine.'], ['수면등', '낮잠 루틴'], ['Night light', 'Nap routine'])
            ),
            card('식단', 'Food', '이유식 준비', 'Weaning prep', '이유식 시작 시기 준비를 합니다.', 'Prepare for solids start.',
                details(['6개월 무렵 시작이 일반적입니다.'], ['Commonly around 6 months.'], ['개별 발달 상태를 확인하세요.'], ['Check readiness.'], ['6개월 직전 준비.'], ['Prepare before 6 months.'], ['스푼', '턱받이'], ['Spoon', 'Bib'])
            ),
            card('안전', 'Safety', '구강 탐색', 'Mouthing safety', '무엇이든 입으로 가져갑니다.', 'More mouthing behavior.',
                details(['인지 발달 과정입니다.'], ['Normal exploration.'], ['작은 물건은 치워주세요.'], ['Remove small items.'], ['바닥 점검을 자주.'], ['Check floors often.'], ['바닥 정리', '무독성 장난감'], ['Clear floor', 'Non-toxic toys'])
            ),
            card('환경', 'Environment', '바닥 생활', 'Floor setup', '매트 공간을 넓힙니다.', 'Expand floor play area.',
                details(['활동량 증가 대비입니다.'], ['Prepares for more movement.'], ['미끄럼 방지 확인.'], ['Ensure non-slip surface.'], ['매트 점검.'], ['Check mat.'], ['큰 매트', '쿠션 보호대'], ['Large mat', 'Soft padding'])
            ),
            card('정서', 'Bonding', '반응 놀이', 'Responsive play', '반응을 주고받는 놀이를 합니다.', 'Play with turn-taking.',
                details(['사회성 발달에 도움됩니다.'], ['Supports social development.'], ['과도한 자극은 피하세요.'], ['Avoid overstimulation.'], ['짧고 자주.'], ['Short and frequent.'], ['까꿍', '손놀이'], ['Peek-a-boo', 'Hand games'])
            )
        ]
    },
    { month: 6, titleKo: '생후 6개월', titleEn: 'Month 6',
        top5: ['뒤집기/앉기 준비', '이유식 시작', '소리 교대', '손으로 탐색', '안전 수칙 강화'],
        top5En: ['Rolling/sitting prep', 'Start solids', 'Sound turn-taking', 'Hand exploration', 'Boost safety'],
        cards: [
            card('식단', 'Food', '이유식 시작', 'Start solids', 'WHO는 6개월경 보완식을 권장합니다.', 'WHO recommends complementary foods around 6 months.',
                details(['모유/분유만으로 부족해지는 시기입니다.'], ['Needs often exceed milk alone.'], ['질식 위험 음식은 피하세요.'], ['Avoid choking hazards.'], ['6개월 무렵, 준비 신호 확인.'], ['Around 6 months when ready.'], ['철분 포함 식품', '부드러운 질감'], ['Iron-rich foods', 'Soft texture'])
            ),
            card('운동', 'Movement', '앉기 준비', 'Sitting prep', '스스로 앉기 준비가 시작됩니다.', 'Begins sitting readiness.',
                details(['균형 잡는 힘이 늘어납니다.'], ['Balance improves.'], ['혼자 앉히지 말고 지지하세요.'], ['Support sitting.'], ['잠깐씩 연습.'], ['Short practice.'], ['쿠션 지지', '바닥 매트'], ['Cushion support', 'Floor mat'])
            ),
            card('소통', 'Communication', '소리 교대', 'Sound turns', '소리를 주고받는 상호작용이 늘어요.', 'More back-and-forth sounds.',
                details(['언어 발달에 도움됩니다.'], ['Supports language development.'], ['반응이 늦어도 괜찮습니다.'], ['Slow responses are okay.'], ['하루 여러 번.'], ['Several times daily.'], ['따라 말하기', '표정 놀이'], ['Echo sounds', 'Facial play'])
            ),
            card('인지', 'Cognitive', '입으로 탐색', 'Mouthing', '물건을 입에 넣어 탐색합니다.', 'Explores by mouthing.',
                details(['인지 발달 과정입니다.'], ['Normal cognitive exploration.'], ['작은 부품 주의.'], ['Avoid small parts.'], ['놀이 중 관찰.'], ['Observe during play.'], ['무독성 장난감', '바닥 정리'], ['Non-toxic toys', 'Clear floor'])
            ),
            card('수면', 'Sleep', '낮잠 정비', 'Nap structure', '낮잠 패턴이 조금 더 안정됩니다.', 'Naps may become more regular.',
                details(['리듬 형성에 도움됩니다.'], ['Supports routine.'], ['성장 급등기엔 흔들릴 수 있어요.'], ['May shift during growth spurts.'], ['비슷한 시간 유지.'], ['Keep similar timing.'], ['낮잠 전 루틴', '차분한 조명'], ['Nap routine', 'Dim light'])
            ),
            card('안전', 'Safety', '이동 대비', 'Mobility safety', '굴러 다니며 이동합니다.', 'Rolling increases mobility.',
                details(['추락/끼임 위험이 늘어납니다.'], ['Fall risks increase.'], ['침대 위는 위험합니다.'], ['Avoid elevated surfaces.'], ['바닥 환경 점검.'], ['Check floor setup.'], ['모서리 보호', '바닥 정리'], ['Corner guards', 'Clear floor'])
            ),
            card('놀이', 'Play', '거울 놀이', 'Mirror play', '거울을 보고 반응을 보입니다.', 'Enjoys mirror play.',
                details(['자기 인식이 시작됩니다.'], ['Early self-awareness.'], ['깨질 위험 없는 거울 사용.'], ['Use safe mirrors.'], ['하루 짧게.'], ['Short daily sessions.'], ['안전 거울', '노래'], ['Safe mirror', 'Songs'])
            ),
            card('도구', 'Tools', '아기 의자', 'Baby seat', '앉는 연습용 의자를 사용합니다.', 'Use a supported seat.',
                details(['손 사용을 돕습니다.'], ['Supports hand use.'], ['장시간은 피하세요.'], ['Avoid long sessions.'], ['식사/놀이 시 잠깐.'], ['Short use during meals/play.'], ['안전벨트', '미끄럼 방지'], ['Safety belt', 'Non-slip base'])
            )
        ]
    },
    { month: 7, titleKo: '생후 7개월', titleEn: 'Month 7',
        top5: ['혼자 앉기 연습', '이유식 확대', '옹알이 확장', '손가락 놀림', '수면 루틴 유지'],
        top5En: ['Practice sitting', 'Expand solids', 'Babble growth', 'Finger play', 'Keep sleep routine'],
        cards: [
            card('운동', 'Movement', '앉기 연습', 'Sitting practice', '지지 없이 앉는 시간이 늘어납니다.', 'Longer unsupported sitting.',
                details(['균형 감각이 자랍니다.'], ['Balance improves.'], ['넘어짐에 대비하세요.'], ['Prepare for falls.'], ['짧게 반복.'], ['Short repeated practice.'], ['주변 쿠션', '매트'], ['Cushions', 'Mat'])
            ),
            card('식단', 'Food', '이유식 확대', 'More textures', '부드러운 질감에서 천천히 확장합니다.', 'Gradually expand textures.',
                details(['WHO는 6-8개월 하루 2-3회 보완식 권장.'], ['WHO suggests 2-3 meals for 6-8 months.'], ['질식 위험 식품은 피하세요.'], ['Avoid choking hazards.'], ['하루 2~3회.'], ['2-3 times daily.'], ['부드러운 으깬 음식', '식사 기록'], ['Mashed foods', 'Meal notes'])
            ),
            card('소통', 'Communication', '옹알이 확장', 'Babble growth', '소리 종류가 더욱 늘어납니다.', 'Babbling expands.',
                details(['언어 기반이 강화됩니다.'], ['Builds language foundation.'], ['반응을 천천히 따라주세요.'], ['Respond gently.'], ['수시로 교감.'], ['Frequent interaction.'], ['따라 말하기', '책 읽기'], ['Echo sounds', 'Read books'])
            ),
            card('인지', 'Cognitive', '손가락 놀이', 'Finger play', '손가락으로 작은 물건을 만집니다.', 'Uses fingers to explore.',
                details(['소근육 발달에 도움됩니다.'], ['Supports fine motor skills.'], ['작은 물건은 안전 확인.'], ['Ensure safe size.'], ['놀이 중 관찰.'], ['Supervise during play.'], ['큰 블록', '안전 장난감'], ['Large blocks', 'Safe toys'])
            ),
            card('수면', 'Sleep', '루틴 유지', 'Keep routine', '일정한 수면 습관을 유지합니다.', 'Maintain sleep routine.',
                details(['수면 안정에 도움됩니다.'], ['Supports sleep stability.'], ['성장 급등기엔 변동 가능.'], ['May vary during growth spurts.'], ['매일 같은 흐름.'], ['Same nightly flow.'], ['목욕-수유-수면', '수면등'], ['Bath-feed-sleep', 'Night light'])
            ),
            card('안전', 'Safety', '낙상 대비', 'Fall prevention', '앉은 자세에서 넘어질 수 있습니다.', 'Can topple while sitting.',
                details(['낙상 위험 대비가 필요합니다.'], ['Prepare for falls.'], ['높은 곳에서 방치 금지.'], ['Never leave on elevated surfaces.'], ['바닥 안전 확보.'], ['Secure floor area.'], ['쿠션 배치', '낮은 공간'], ['Cushions', 'Low area'])
            ),
            card('놀이', 'Play', '감각 놀이', 'Sensory play', '서로 다른 촉감을 경험합니다.', 'Explore different textures.',
                details(['감각 발달에 도움됩니다.'], ['Supports sensory development.'], ['삼킴 위험 물건은 피하세요.'], ['Avoid choking hazards.'], ['짧게 자주.'], ['Short sessions.'], ['헝겊 책', '물놀이 장난감'], ['Cloth books', 'Bath toys'])
            ),
            card('생활', 'Lifestyle', '외출 준비', 'Outing kit', '외출 짐을 간단하게 재정비합니다.', 'Refresh outing essentials.',
                details(['외출 스트레스를 줄입니다.'], ['Reduces outing stress.'], ['과도한 일정은 피하세요.'], ['Avoid overstimulation.'], ['짧은 외출부터.'], ['Start with short outings.'], ['여벌 옷', '간식'], ['Extra clothes', 'Snacks'])
            )
        ]
    },
    { month: 8, titleKo: '생후 8개월', titleEn: 'Month 8',
        top5: ['기어가기 시도', '손가락 음식 준비', '분리불안 시작', '손-눈 협응', '안전 점검 강화'],
        top5En: ['Crawling attempts', 'Finger foods', 'Separation anxiety', 'Hand-eye coordination', 'Stronger safety checks'],
        cards: [
            card('운동', 'Movement', '기어가기 시도', 'Crawling attempts', '배밀이/기어가기 시도가 늘어납니다.', 'More crawling attempts.',
                details(['이동 범위가 빠르게 넓어집니다.'], ['Mobility expands quickly.'], ['바닥 위험 요소 제거.'], ['Remove floor hazards.'], ['매일 바닥 놀이 시간.'], ['Daily floor play.'], ['미끄럼 방지 매트', '모서리 보호'], ['Non-slip mat', 'Corner guards'])
            ),
            card('식단', 'Food', '손가락 음식', 'Finger foods', '작게 잘라 손으로 먹는 연습을 시작합니다.', 'Introduce soft finger foods.',
                details(['WHO는 8개월 무렵 손가락 음식 가능 언급.'], ['WHO notes finger foods by around 8 months.'], ['질식 위험 크기 주의.'], ['Watch size to prevent choking.'], ['하루 2~3회 식사 중.'], ['During 2-3 meals.'], ['부드러운 스틱 채소', '작게 자른 과일'], ['Soft sticks', 'Small fruit pieces'])
            ),
            card('정서', 'Bonding', '분리불안', 'Separation anxiety', '낯가림이 늘 수 있습니다.', 'Stranger anxiety may increase.',
                details(['발달 과정의 자연스러운 현상입니다.'], ['Normal developmental phase.'],
                    ['빠르게 떠나지 말고 설명하세요.'], ['Say goodbye calmly.'],
                    ['짧게 반복 경험.'], ['Practice with brief separations.'],
                    ['안전한 보호자', '반복 인사'], ['Trusted caregiver', 'Consistent goodbye'])
            ),
            card('인지', 'Cognitive', '손-눈 협응', 'Hand-eye coordination', '작은 물건을 정확히 집으려 합니다.', 'Reaches more precisely.',
                details(['소근육 발달이 강화됩니다.'], ['Fine motor development grows.'], ['작은 물건은 위험합니다.'], ['Small items can be dangerous.'], ['놀이 중 관찰.'], ['Supervise during play.'], ['큰 블록', '끼우기 장난감'], ['Large blocks', 'Stacking toys'])
            ),
            card('수면', 'Sleep', '밤중 깨기', 'Night waking', '분리불안으로 밤중 깨기가 늘 수 있습니다.', 'Night waking may increase.',
                details(['발달 변화로 흔한 현상입니다.'], ['Common during development.'], ['강한 의존 습관은 피하세요.'], ['Avoid strong sleep associations.'], ['같은 반응으로 안정감 제공.'], ['Respond consistently.'], ['낮잠 조절', '수면 루틴'], ['Adjust naps', 'Routine'])
            ),
            card('안전', 'Safety', '가정 안전 점검', 'Home safety check', '서랍/콘센트 등 위험 요소를 정리합니다.', 'Secure drawers and outlets.',
                details(['이동 증가로 위험이 커집니다.'], ['Risks increase with mobility.'], ['잠금 장치 점검.'], ['Check locks.'], ['정기적으로 점검.'], ['Regular checks.'], ['콘센트 커버', '서랍 잠금'], ['Outlet covers', 'Drawer locks'])
            ),
            card('놀이', 'Play', '원인-결과 놀이', 'Cause-effect play', '누르면 소리 나는 장난감을 좋아합니다.', 'Enjoys cause-effect toys.',
                details(['인지 발달에 도움됩니다.'], ['Supports cognitive development.'], ['과도한 소음은 피하세요.'], ['Avoid loud toys.'], ['짧게 반복.'], ['Short repetitions.'], ['버튼 장난감', '간단 퍼즐'], ['Button toys', 'Simple puzzles'])
            ),
            card('생활', 'Lifestyle', '외출 루틴', 'Outing routine', '외출 시간을 짧게 유지합니다.', 'Keep outings short.',
                details(['낯가림 시 피로가 커질 수 있습니다.'], ['Stranger anxiety can increase fatigue.'], ['낮잠 시간 고려.'], ['Consider nap times.'], ['짧게, 자주.'], ['Short and frequent.'], ['휴식 공간', '간식 준비'], ['Rest spot', 'Snacks'])
            )
        ]
    },
    { month: 9, titleKo: '생후 9개월', titleEn: 'Month 9',
        top5: ['혼자 앉기 안정', '이름 반응', '물건 찾기', '손으로 먹기', '안전 강화'],
        top5En: ['Sitting steadily', 'Respond to name', 'Object search', 'Finger feeding', 'Safety upgrades'],
        cards: [
            card('발달', 'Development', '혼자 앉기', 'Sitting solo', '지지 없이 앉는 시간이 늘어납니다.', 'Sits without support.',
                details(['CDC 9개월 지표입니다.'], ['CDC 9-month milestone.'], ['넘어짐 대비 필요.'], ['Prepare for falls.'], ['놀이 중 관찰.'], ['Observe during play.'], ['쿠션 배치', '바닥 매트'], ['Cushions', 'Floor mat'])
            ),
            card('소통', 'Communication', '이름 반응', 'Responds to name', '이름을 부르면 돌아봅니다.', 'Looks when name is called.',
                details(['사회적 반응이 늘어납니다.'], ['Social response increases.'], ['개인차가 큽니다.'], ['Individual variation.'], ['일상 대화 중.'], ['During daily talk.'], ['이름 자주 부르기', '칭찬'], ['Call name often', 'Praise'])
            ),
            card('인지', 'Cognitive', '물건 찾기', 'Object search', '숨긴 물건을 찾으려 합니다.', 'Looks for hidden objects.',
                details(['CDC 9개월 지표입니다.'], ['CDC 9-month milestone.'], ['작은 물건은 위험합니다.'], ['Small items can be dangerous.'], ['간단한 숨기기 놀이.'], ['Simple hiding games.'], ['천으로 가리기', '까꿍 놀이'], ['Cover with cloth', 'Peek-a-boo'])
            ),
            card('식단', 'Food', '손으로 먹기', 'Finger feeding', '손으로 집어 먹는 연습을 합니다.', 'Self-feeding with fingers.',
                details(['손 조절 능력을 키웁니다.'], ['Builds finger control.'], ['질식 위험 음식 주의.'], ['Avoid choking foods.'], ['하루 3회 식사로 확대.'], ['Move toward 3 meals.'], ['부드러운 조각', '작은 스틱'], ['Soft pieces', 'Small sticks'])
            ),
            card('수면', 'Sleep', '루틴 유지', 'Keep routine', '낮잠/밤잠 일정 유지가 중요합니다.', 'Keep consistent sleep routine.',
                details(['안정감을 줍니다.'], ['Provides stability.'], ['낮잠 줄이기는 천천히.'], ['Reduce naps gradually.'], ['매일 같은 순서.'], ['Same order daily.'], ['수면등', '자장가'], ['Night light', 'Lullaby'])
            ),
            card('안전', 'Safety', '붙잡고 서기', 'Pulling up', '붙잡고 서기 시작할 수 있습니다.', 'May start pulling to stand.',
                details(['낙상 위험이 증가합니다.'], ['Fall risk increases.'], ['가구 고정 여부 확인.'], ['Secure furniture.'], ['집안 점검.'], ['Check home.'], ['가구 고정', '미끄럼 방지'], ['Furniture anchors', 'Non-slip mats'])
            ),
            card('놀이', 'Play', '소리 놀이', 'Sound play', '소리와 반응을 즐깁니다.', 'Enjoys sound interaction.',
                details(['언어 발달에 도움됩니다.'], ['Supports language development.'], ['과도한 소음은 피하세요.'], ['Avoid excessive noise.'], ['짧게 반복.'], ['Short repeats.'], ['악기 장난감', '노래'], ['Toy instruments', 'Singing'])
            ),
            card('생활', 'Lifestyle', '외출 안전', 'Outing safety', '유모차/아기띠 안전을 점검합니다.', 'Check stroller/carrier safety.',
                details(['활동량 증가 대비입니다.'], ['Prepare for higher activity.'], ['안전벨트를 꼭 사용하세요.'], ['Use safety straps.'], ['외출 전 확인.'], ['Check before outings.'], ['벨트 점검', '그늘 확보'], ['Strap check', 'Shade'])
            )
        ]
    },
    { month: 10, titleKo: '생후 10개월', titleEn: 'Month 10',
        top5: ['붙잡고 서기', '간단한 지시 이해', '집중 놀이', '손가락 집기', '안전 강화'],
        top5En: ['Pull to stand', 'Understand simple cues', 'Focused play', 'Finger grasp', 'Safety upgrades'],
        cards: [
            card('운동', 'Movement', '붙잡고 서기', 'Pulling to stand', '붙잡고 서는 시간이 늘어납니다.', 'Pulls up more often.',
                details(['다리 힘이 강해지는 시기입니다.'], ['Leg strength increases.'], ['넘어짐 대비 필요.'], ['Prepare for falls.'], ['낮은 가구 주변.'], ['Near low furniture.'], ['미끄럼 방지', '쿠션'], ['Non-slip', 'Cushions'])
            ),
            card('인지', 'Cognitive', '간단한 지시', 'Simple directions', '짧은 지시를 이해하기 시작합니다.', 'Begins understanding simple requests.',
                details(['언어 이해가 발달합니다.'], ['Language comprehension grows.'], ['짧고 쉬운 문장 사용.'], ['Use short phrases.'], ['일상에서 반복.'], ['Repeat in daily routines.'], ['"줘" "안녕"', '손짓 함께'], ['"Give" "Bye"', 'Use gestures'])
            ),
            card('놀이', 'Play', '집중 놀이', 'Focused play', '짧게 집중해서 놀이합니다.', 'Focuses briefly on play.',
                details(['주의 집중 시간이 조금 늘어납니다.'], ['Attention span grows.'], ['과한 자극은 피하세요.'], ['Avoid overstimulation.'], ['짧은 놀이 반복.'], ['Short repeated play.'], ['끼우기 장난감', '간단 퍼즐'], ['Shape sorter', 'Simple puzzles'])
            ),
            card('소근육', 'Fine motor', '손가락 집기', 'Finger grasp', '작은 물건을 집으려 합니다.', 'Attempts pincer grasp.',
                details(['손가락 조절이 발달합니다.'], ['Finger control improves.'], ['작은 물건은 위험합니다.'], ['Small items are hazards.'], ['놀이 중 관찰.'], ['Supervise during play.'], ['큰 블록', '안전 장난감'], ['Large blocks', 'Safe toys'])
            ),
            card('식단', 'Food', '식사 횟수', 'Meal rhythm', '보완식 빈도를 늘립니다.', 'Increase complementary meals.',
                details(['WHO는 9-11개월 하루 3-4회 권장.'], ['WHO suggests 3-4 meals for 9-11 months.'], ['질식 위험 음식 주의.'], ['Avoid choking hazards.'], ['하루 3회 이상.'], ['At least 3 meals.'], ['부드러운 조각', '수분 공급'], ['Soft pieces', 'Hydration'])
            ),
            card('수면', 'Sleep', '밤잠 길이', 'Night sleep', '밤잠이 길어질 수 있습니다.', 'Night sleep may lengthen.',
                details(['수면 루틴 유지가 중요합니다.'], ['Routine remains important.'], ['낮잠 감소는 천천히.'], ['Reduce naps gradually.'], ['일정한 취침 시간.'], ['Consistent bedtime.'], ['수면 루틴', '조명 조절'], ['Bedtime routine', 'Dim lights'])
            ),
            card('안전', 'Safety', '가구 고정', 'Anchor furniture', '잡고 일어설 가구를 고정합니다.', 'Anchor furniture for safety.',
                details(['넘어짐 위험을 줄입니다.'], ['Reduces tip-over risk.'], ['고정 장치를 점검하세요.'], ['Check anchors.'], ['이동 전 점검.'], ['Inspect before use.'], ['벽 고정', '모서리 보호'], ['Wall anchors', 'Corner guards'])
            ),
            card('정서', 'Bonding', '반응 대화', 'Responsive talk', '말을 걸고 반응을 기다립니다.', 'Talk and wait for response.',
                details(['의사소통이 늘어납니다.'], ['Communication grows.'], ['반응이 없어도 계속 이야기하세요.'], ['Keep talking even if no response.'], ['일상 속에서.'], ['Throughout the day.'], ['이름 부르기', '간단 질문'], ['Name calling', 'Simple questions'])
            )
        ]
    },
    { month: 11, titleKo: '생후 11개월', titleEn: 'Month 11',
        top5: ['손가락 집기 강화', '서기 안정', '간단한 말 흉내', '가족 식사 적응', '안전 점검'],
        top5En: ['Stronger pincer grasp', 'Steadier standing', 'Word imitation', 'Family meals prep', 'Safety check'],
        cards: [
            card('소근육', 'Fine motor', '집게 잡기', 'Pincer grasp', '엄지와 검지로 집는 동작이 늘어납니다.', 'Pincer grasp improves.',
                details(['스스로 먹기 준비가 됩니다.'], ['Supports self-feeding.'], ['작은 물건은 위험합니다.'], ['Small items are hazards.'], ['놀이 중 관찰.'], ['Supervise during play.'], ['작은 블록 대신 큰 블록', '안전 장난감'], ['Large blocks', 'Safe toys'])
            ),
            card('운동', 'Movement', '서기 안정', 'Steady standing', '붙잡고 서는 시간이 길어집니다.', 'Stands longer with support.',
                details(['다리 근력이 강화됩니다.'], ['Leg strength increases.'], ['넘어짐 대비가 필요합니다.'], ['Prepare for falls.'], ['짧게 반복.'], ['Short repeats.'], ['낮은 가구', '쿠션'], ['Low furniture', 'Cushions'])
            ),
            card('소통', 'Communication', '간단한 말 흉내', 'Word imitation', '간단한 말/소리를 흉내 냅니다.', 'Imitates simple sounds.',
                details(['언어 발달이 활발해집니다.'], ['Language development grows.'], ['조급해하지 마세요.'], ['Avoid pressure.'], ['일상 대화 속에서.'], ['In daily conversations.'], ['반복 말하기', '책 읽기'], ['Repeat words', 'Read books'])
            ),
            card('식단', 'Food', '가족 식사 적응', 'Family food prep', '가족 식사의 질감을 준비합니다.', 'Prep for family foods.',
                details(['WHO는 12개월경 가족 음식 가능 언급.'], ['WHO notes family foods by around 12 months.'], ['자극적인 음식은 피하세요.'], ['Avoid overly salty/spicy foods.'], ['식사 시간 함께하기.'], ['Join family meals.'], ['부드러운 조각', '알레르기 체크'], ['Soft pieces', 'Allergy checks'])
            ),
            card('수면', 'Sleep', '낮잠 조정', 'Nap adjustment', '낮잠 시간이 줄어들 수 있습니다.', 'Naps may reduce.',
                details(['밤잠 안정에 도움됩니다.'], ['Helps consolidate night sleep.'], ['과도한 피로는 피하세요.'], ['Avoid overtiredness.'], ['서서히 조정.'], ['Adjust gradually.'], ['낮잠 기록', '취침 시간 고정'], ['Nap log', 'Consistent bedtime'])
            ),
            card('안전', 'Safety', '걸음마 대비', 'Pre-walking safety', '걸음마 대비로 바닥을 정리합니다.', 'Clear floor for early walking.',
                details(['넘어짐 사고를 줄입니다.'], ['Reduces falls.'], ['미끄러운 러그는 제거.'], ['Remove slippery rugs.'], ['집안 전체 점검.'], ['Whole-home check.'], ['바닥 정리', '모서리 보호'], ['Clear floor', 'Corner guards'])
            ),
            card('놀이', 'Play', '간단한 퍼즐', 'Simple puzzles', '끼우기/빼기 놀이를 즐깁니다.', 'Enjoys simple sorting.',
                details(['인지 발달에 도움됩니다.'], ['Supports cognitive development.'], ['작은 부품은 피하세요.'], ['Avoid small parts.'], ['짧게 자주.'], ['Short sessions.'], ['모양 맞추기', '쌓기 놀이'], ['Shape sorter', 'Stacking'])
            ),
            card('정서', 'Bonding', '까꿍 놀이', 'Peek-a-boo', '숨기기 놀이를 즐깁니다.', 'Enjoys peek-a-boo.',
                details(['사회적 상호작용에 도움됩니다.'], ['Supports social interaction.'], ['반응이 느려도 괜찮습니다.'], ['Slow responses are okay.'], ['짧게 반복.'], ['Short repeats.'], ['손/천 사용', '웃으며 반응'], ['Hands/cloth', 'Smiling response'])
            )
        ]
    },
    { month: 12, titleKo: '생후 12개월', titleEn: 'Month 12',
        top5: ['붙잡고 걷기', '간단한 단어', '컵 사용', '가족 식사', '안전 점검'],
        top5En: ['Cruising', 'Simple words', 'Cup practice', 'Family meals', 'Safety check'],
        cards: [
            card('운동', 'Movement', '붙잡고 걷기', 'Cruising', '가구를 잡고 걷습니다.', 'Walks holding furniture.',
                details(['CDC 1년 지표에 포함됩니다.'], ['CDC 1-year milestone.'], ['넘어짐 대비 필요.'], ['Prepare for falls.'], ['일상 속에서 자연스럽게.'], ['During daily activity.'], ['가구 고정', '미끄럼 방지'], ['Anchor furniture', 'Non-slip mats'])
            ),
            card('소통', 'Communication', '간단한 단어', 'Simple words', '“엄마/아빠” 등 단어를 말합니다.', 'Says simple words.',
                details(['CDC 1년 지표에 포함됩니다.'], ['CDC 1-year milestone.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상에서 반복.'], ['Repeat in daily life.'], ['이름 부르기', '책 읽기'], ['Name calling', 'Books'])
            ),
            card('식단', 'Food', '가족 식사', 'Family foods', '가족 음식에 적응해갑니다.', 'Adapts to family foods.',
                details(['WHO는 12개월경 가족 음식 가능 언급.'], ['WHO notes family foods by around 12 months.'], ['자극적인 음식은 피하세요.'], ['Avoid salty/spicy foods.'], ['식사 시간 함께하기.'], ['Eat together.'], ['작게 자르기', '질감 조절'], ['Small pieces', 'Texture adjustment'])
            ),
            card('자조', 'Self-help', '컵 사용', 'Cup practice', '뚜껑 없는 컵 사용을 연습합니다.', 'Practice open cup use.',
                details(['CDC 1년 지표에 포함됩니다.'], ['CDC 1-year milestone.'], ['넘침은 자연스러운 과정입니다.'], ['Spills are normal.'], ['식사 중 짧게.'], ['Short practice during meals.'], ['흡수 패드', '작은 컵'], ['Absorbent mat', 'Small cup'])
            ),
            card('놀이', 'Play', '간단한 놀이', 'Simple play', '손뼉치기 같은 놀이를 즐깁니다.', 'Enjoys simple games.',
                details(['CDC 1년 지표에 포함됩니다.'], ['CDC 1-year milestone.'], ['반응 속도는 다양합니다.'], ['Responses vary.'], ['짧게 반복.'], ['Short repeats.'], ['손뼉 놀이', '까꿍'], ['Pat-a-cake', 'Peek-a-boo'])
            ),
            card('수면', 'Sleep', '낮잠 조정', 'Nap adjustment', '낮잠 횟수가 줄어들 수 있습니다.', 'Naps may decrease.',
                details(['밤잠 안정에 도움됩니다.'], ['Helps night sleep.'], ['갑작스러운 변화는 피하세요.'], ['Avoid sudden changes.'], ['서서히 조정.'], ['Adjust gradually.'], ['낮잠 기록', '취침 고정'], ['Nap log', 'Stable bedtime'])
            ),
            card('안전', 'Safety', '걸음마 안전', 'Walking safety', '걸음마 대비 집안 안전을 강화합니다.', 'Improve home safety for walking.',
                details(['넘어짐 위험이 큽니다.'], ['Fall risk increases.'], ['계단/문 잠금 확인.'], ['Secure stairs and doors.'], ['집 전체 점검.'], ['Whole-home check.'], ['계단문', '미끄럼 방지'], ['Safety gates', 'Non-slip mats'])
            ),
            card('정서', 'Bonding', '반응 대화', 'Responsive talk', '말을 걸고 반응을 기다립니다.', 'Talk and wait for response.',
                details(['의사소통이 늘어납니다.'], ['Communication grows.'], ['느린 반응도 기다려주세요.'], ['Give time to respond.'], ['일상 속 반복.'], ['Repeat daily.'], ['짧은 질문', '칭찬'], ['Simple questions', 'Praise'])
            )
        ]
    }
];
const toddlerStages = [
    {
        id: 'm-13-15',
        range: { ko: '생후 13~15개월', en: 'Months 13-15' },
        top5: ['걷기 연습', '단어 늘리기', '스스로 먹기', '안전 구역 확대', '수면 루틴 유지'],
        top5En: ['Walking practice', 'More words', 'Self-feeding', 'Expand safe areas', 'Keep sleep routine'],
        cards: [
            card('운동', 'Movement', '몇 걸음 걷기', 'Early steps', '혼자 몇 걸음을 시도합니다.', 'Takes a few steps.',
                details(['CDC 15개월 지표에 포함됩니다.'], ['CDC 15-month milestone.'], ['넘어짐 대비 필요.'], ['Prepare for falls.'], ['짧게 반복.'], ['Short practice.'], ['미끄럼 방지', '쿠션'], ['Non-slip', 'Cushions'])
            ),
            card('소통', 'Communication', '단어 확장', 'Word expansion', '간단한 단어가 늘어납니다.', 'Uses more words.',
                details(['CDC 15개월 지표에 포함됩니다.'], ['CDC 15-month milestone.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상에서 반복.'], ['Repeat daily.'], ['그림책', '사물 이름'], ['Picture books', 'Name objects'])
            ),
            card('자조', 'Self-help', '스스로 먹기', 'Self-feeding', '손으로 먹고 숟가락 연습을 합니다.', 'Uses fingers and spoon.',
                details(['CDC 15개월 지표에 포함됩니다.'], ['CDC 15-month milestone.'], ['질식 위험 음식 주의.'], ['Avoid choking hazards.'], ['식사 때마다.'], ['At each meal.'], ['작은 숟가락', '흡수 패드'], ['Small spoon', 'Absorbent mat'])
            ),
            card('놀이', 'Play', '모방 놀이', 'Imitation play', '어른 행동을 따라 합니다.', 'Imitates adults.',
                details(['인지와 사회성 발달에 도움됩니다.'], ['Supports cognitive and social growth.'], ['안전한 도구로만 놀이하세요.'], ['Use safe items.'], ['짧게 반복.'], ['Short repeats.'], ['장난감 전화', '간단한 역할놀이'], ['Toy phone', 'Simple pretend'])
            ),
            card('안전', 'Safety', '집안 안전', 'Home safety', '높은 곳과 위험 물건을 정리합니다.', 'Secure hazards and heights.',
                details(['이동 범위가 넓어집니다.'], ['Mobility expands.'], ['서랍/문 잠금 필요.'], ['Lock drawers/doors.'], ['정기적으로 점검.'], ['Regular checks.'], ['서랍 잠금', '안전문'], ['Drawer locks', 'Safety gates'])
            ),
            card('수면', 'Sleep', '루틴 유지', 'Routine', '취침 루틴을 유지합니다.', 'Keep bedtime routine.',
                details(['안정감에 도움됩니다.'], ['Supports security.'], ['주말에도 비슷하게.'], ['Keep consistent on weekends.'], ['매일 같은 시간대.'], ['Same timing daily.'], ['목욕-책-수면', '수면등'], ['Bath-book-bed', 'Night light'])
            ),
            card('정서', 'Emotions', '애착 강화', 'Attachment', '안아주고 눈을 맞춥니다.', 'Hugs and eye contact.',
                details(['정서 안정에 중요합니다.'], ['Important for emotional security.'], ['거부할 때는 잠시 쉬세요.'], ['Pause if resisting.'], ['매일 짧게 반복.'], ['Short daily moments.'], ['스킨십', '칭찬'], ['Touch', 'Praise'])
            ),
            card('생활', 'Lifestyle', '외출 루틴', 'Outing routine', '외출 시간을 짧게 유지합니다.', 'Keep outings short.',
                details(['과한 자극을 줄입니다.'], ['Reduces overstimulation.'], ['낮잠 시간을 고려하세요.'], ['Consider naps.'], ['짧게 자주.'], ['Short and frequent.'], ['간식', '여벌 옷'], ['Snacks', 'Extra clothes'])
            )
        ]
    },
    {
        id: 'm-16-18',
        range: { ko: '생후 16~18개월', en: 'Months 16-18' },
        top5: ['걷기 안정', '단어 늘리기', '간단 지시 이해', '자조 연습', '안전 점검'],
        top5En: ['Steady walking', 'More words', 'Follow simple directions', 'Self-help practice', 'Safety check'],
        cards: [
            card('운동', 'Movement', '걷기 안정', 'Steady walking', '혼자 걷는 시간이 늘어납니다.', 'Walks more steadily.',
                details(['CDC 18개월 지표에 포함됩니다.'], ['CDC 18-month milestone.'], ['넘어짐 대비 필요.'], ['Prepare for falls.'], ['짧게 반복.'], ['Short practice.'], ['미끄럼 방지', '쿠션'], ['Non-slip', 'Cushions'])
            ),
            card('소통', 'Communication', '단어 늘리기', 'More words', '단어 수가 증가합니다.', 'Vocabulary grows.',
                details(['CDC 18개월 지표에 포함됩니다.'], ['CDC 18-month milestone.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상 대화에서.'], ['In daily talk.'], ['그림책', '사물 이름'], ['Picture books', 'Name objects'])
            ),
            card('인지', 'Cognitive', '간단 지시', 'Simple directions', '한 단계 지시를 이해합니다.', 'Follows one-step directions.',
                details(['CDC 18개월 지표에 포함됩니다.'], ['CDC 18-month milestone.'], ['짧고 명확하게.'], ['Keep it simple.'], ['일상 속 반복.'], ['Repeat in routine.'], ['"가져와"', '손짓 함께'], ['"Bring it"', 'Gestures'])
            ),
            card('자조', 'Self-help', '스푼 연습', 'Spoon practice', '스푼 사용을 시도합니다.', 'Tries using a spoon.',
                details(['CDC 18개월 지표에 포함됩니다.'], ['CDC 18-month milestone.'], ['넘침은 자연스럽습니다.'], ['Spills are normal.'], ['식사 때마다.'], ['At meals.'], ['작은 스푼', '보호 매트'], ['Small spoon', 'Mat'])
            ),
            card('놀이', 'Play', '모방 놀이', 'Imitative play', '집안일을 흉내냅니다.', 'Copies chores.',
                details(['인지 발달에 도움됩니다.'], ['Supports cognitive growth.'], ['안전한 도구로만.'], ['Use safe items.'], ['짧게 반복.'], ['Short repeats.'], ['작은 빗자루', '장난감 주방'], ['Small broom', 'Toy kitchen'])
            ),
            card('안전', 'Safety', '집안 안전', 'Home safety', '높은 곳, 전선 등을 정리합니다.', 'Secure hazards and cords.',
                details(['활동 범위가 넓어집니다.'], ['Mobility expands.'], ['잠금 장치를 점검하세요.'], ['Check locks.'], ['정기적으로 점검.'], ['Regular checks.'], ['콘센트 커버', '안전문'], ['Outlet covers', 'Safety gates'])
            ),
            card('수면', 'Sleep', '취침 루틴', 'Bedtime routine', '루틴을 일정하게 유지합니다.', 'Keep routine consistent.',
                details(['안정감에 도움됩니다.'], ['Supports security.'], ['주말에도 비슷하게.'], ['Keep consistent on weekends.'], ['매일 같은 시간.'], ['Same time daily.'], ['책 읽기', '수면등'], ['Books', 'Night light'])
            ),
            card('정서', 'Emotions', '감정 표현', 'Emotion expression', '기분 변화를 표현합니다.', 'Expresses emotions more.',
                details(['자기 주장 증가 시기입니다.'], ['Self-assertion increases.'], ['차분하게 반응하세요.'], ['Respond calmly.'], ['일관된 반응 유지.'], ['Be consistent.'], ['짧은 설명', '공감'], ['Short explanations', 'Empathy'])
            )
        ]
    },
    {
        id: 'm-19-21',
        range: { ko: '생후 19~21개월', en: 'Months 19-21' },
        top5: ['달리기 시도', '간단한 말 조합', '자기주도 식사', '화장실 관심', '안전 강화'],
        top5En: ['Running attempts', 'Two-word combos', 'Self-feeding', 'Potty interest', 'Safety upgrades'],
        cards: [
            card('운동', 'Movement', '달리기 시도', 'Running attempts', '빠르게 걷거나 달리기를 시도합니다.', 'Begins to run.',
                details(['대근육 발달이 활발합니다.'], ['Gross motor growth is active.'], ['넘어짐 대비 필요.'], ['Prepare for falls.'], ['짧게 반복.'], ['Short practice.'], ['미끄럼 방지', '안전 공간'], ['Non-slip', 'Safe area'])
            ),
            card('소통', 'Communication', '단어 조합', 'Word pairing', '두 단어를 이어 말하려 합니다.', 'Begins two-word combos.',
                details(['언어 발달이 빠릅니다.'], ['Language growth accelerates.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상 대화 속에서.'], ['In daily talk.'], ['간단 문장', '책 읽기'], ['Simple phrases', 'Books'])
            ),
            card('자조', 'Self-help', '자기 식사', 'Self-feeding', '스스로 먹는 시간이 늘어납니다.', 'More self-feeding.',
                details(['자율성 발달에 도움됩니다.'], ['Supports autonomy.'], ['질식 위험 음식 주의.'], ['Avoid choking foods.'], ['식사 때마다.'], ['At meals.'], ['작은 포크', '방수 매트'], ['Small fork', 'Mat'])
            ),
            card('생활', 'Lifestyle', '화장실 관심', 'Potty interest', '화장실에 관심을 보일 수 있습니다.', 'Shows potty interest.',
                details(['준비 신호를 관찰합니다.'], ['Observe readiness cues.'], ['강제 훈련은 피하세요.'], ['Avoid forced training.'], ['관심 보일 때 가볍게.'], ['Lightly when interested.'], ['변기 커버', '도움 스텝'], ['Potty seat', 'Step stool'])
            ),
            card('놀이', 'Play', '역할 놀이', 'Pretend play', '간단한 역할 놀이를 시작합니다.', 'Begins pretend play.',
                details(['인지/언어 발달에 도움됩니다.'], ['Supports cognitive/language growth.'], ['안전한 소품 사용.'], ['Use safe props.'], ['짧게 반복.'], ['Short repeats.'], ['인형 밥주기', '장난감 전화'], ['Feeding doll', 'Toy phone'])
            ),
            card('안전', 'Safety', '집안 점검', 'Home check', '문, 서랍, 전선 등 위험요소를 점검합니다.', 'Secure doors, drawers, cords.',
                details(['활동 범위가 넓어집니다.'], ['Mobility expands.'], ['잠금 장치 점검.'], ['Check locks.'], ['정기적으로 점검.'], ['Regular checks.'], ['서랍 잠금', '콘센트 커버'], ['Drawer locks', 'Outlet covers'])
            ),
            card('수면', 'Sleep', '낮잠 조정', 'Nap adjustment', '낮잠 횟수가 줄어들 수 있습니다.', 'Naps may reduce.',
                details(['밤잠 안정에 도움됩니다.'], ['Helps night sleep.'], ['갑작스러운 변화는 피하세요.'], ['Avoid sudden changes.'], ['서서히 조정.'], ['Adjust gradually.'], ['낮잠 기록', '취침 고정'], ['Nap log', 'Consistent bedtime'])
            ),
            card('정서', 'Emotions', '감정 표현', 'Emotional expression', '감정 기복이 커질 수 있습니다.', 'Emotional swings may increase.',
                details(['자기 주장 시기입니다.'], ['Self-assertion period.'], ['차분하고 일관되게 반응.'], ['Respond calmly and consistently.'], ['상황별 루틴 유지.'], ['Maintain routines.'], ['짧은 설명', '공감'], ['Short explanations', 'Empathy'])
            )
        ]
    },
    {
        id: 'm-22-24',
        range: { ko: '생후 22~24개월', en: 'Months 22-24' },
        top5: ['달리기/계단', '두 단어 표현', '자기 도움', '간단한 규칙', '안전 강화'],
        top5En: ['Running/stairs', 'Two-word phrases', 'Self-help', 'Simple rules', 'Safety upgrades'],
        cards: [
            card('운동', 'Movement', '달리기/계단', 'Running & stairs', '달리기와 계단 오르기를 시도합니다.', 'Runs and attempts stairs.',
                details(['CDC 2년 지표에 포함됩니다.'], ['CDC 2-year milestone.'], ['계단 안전에 주의하세요.'], ['Watch stair safety.'], ['보호자와 함께.'], ['With caregiver.'], ['계단문', '손잡이'], ['Safety gate', 'Handrail'])
            ),
            card('소통', 'Communication', '두 단어 표현', 'Two-word phrases', '두 단어 조합이 늘어납니다.', 'Uses two-word phrases.',
                details(['CDC 2년 지표에 포함됩니다.'], ['CDC 2-year milestone.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상 대화 속에서.'], ['In daily conversation.'], ['책 읽기', '질문하기'], ['Books', 'Ask questions'])
            ),
            card('자조', 'Self-help', '스스로 입기', 'Self dressing', '옷 입기에 참여합니다.', 'Helps with dressing.',
                details(['CDC 18개월 지표 연장선입니다.'], ['Builds on 18-month skills.'], ['작은 단추는 피하세요.'], ['Avoid small buttons.'], ['아침 준비 시간 활용.'], ['During morning routine.'], ['넓은 소매', '쉬운 신발'], ['Loose sleeves', 'Easy shoes'])
            ),
            card('놀이', 'Play', '역할 놀이', 'Pretend play', '간단한 역할 놀이가 늘어납니다.', 'Pretend play expands.',
                details(['인지 발달에 도움됩니다.'], ['Supports cognitive development.'], ['안전한 소품 사용.'], ['Use safe props.'], ['짧게 반복.'], ['Short repeats.'], ['장난감 주방', '인형 놀이'], ['Toy kitchen', 'Doll play'])
            ),
            card('인지', 'Cognitive', '간단 규칙', 'Simple rules', '간단한 규칙을 이해합니다.', 'Understands simple rules.',
                details(['사회성 발달에 도움됩니다.'], ['Supports social development.'], ['지나치게 엄격하지 않게.'], ['Avoid harshness.'], ['짧게 반복.'], ['Repeat briefly.'], ['정리 놀이', '순서 놀이'], ['Cleanup game', 'Turn-taking'])
            ),
            card('안전', 'Safety', '집안 안전', 'Home safety', '위험한 물건을 잠가둡니다.', 'Lock hazardous items.',
                details(['활동량 증가 대비입니다.'], ['Prepare for high activity.'], ['약품/세제 보관 확인.'], ['Secure meds/cleaners.'], ['정기적으로 점검.'], ['Regular checks.'], ['잠금 장치', '높은 보관'], ['Locks', 'High storage'])
            ),
            card('수면', 'Sleep', '취침 루틴', 'Bedtime routine', '취침 루틴을 유지합니다.', 'Keep bedtime routine.',
                details(['안정감에 도움됩니다.'], ['Supports security.'], ['과도한 낮잠은 줄여요.'], ['Reduce long naps.'], ['일정한 취침 시간.'], ['Consistent bedtime.'], ['책 읽기', '수면등'], ['Books', 'Night light'])
            ),
            card('정서', 'Emotions', '감정 조절', 'Emotion regulation', '감정을 말로 표현하도록 돕습니다.', 'Help name emotions.',
                details(['감정 조절에 도움됩니다.'], ['Supports regulation.'], ['강요하지 마세요.'], ['Avoid forcing.'], ['일상에서 천천히.'], ['Gradually in daily life.'], ['감정 카드', '공감 말하기'], ['Emotion cards', 'Empathy words'])
            )
        ]
    },
    {
        id: 'm-25-27',
        range: { ko: '생후 25~27개월', en: 'Months 25-27' },
        top5: ['말하기 늘기', '사회성 확대', '자조 습관', '낮잠 조정', '안전 강화'],
        top5En: ['More talking', 'Social expansion', 'Self-help habits', 'Nap adjustment', 'Safety upgrades'],
        cards: [
            card('소통', 'Communication', '말하기 늘기', 'More talking', '단어와 문장이 늘어납니다.', 'Vocabulary and phrases grow.',
                details(['2살 언어 발달 시기입니다.'], ['Common language growth stage.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상 대화에서.'], ['Daily conversations.'], ['그림책', '질문하기'], ['Books', 'Ask questions'])
            ),
            card('사회', 'Social', '또래 관찰', 'Peer watching', '또래를 관찰하고 따라합니다.', 'Watches and imitates peers.',
                details(['사회성 발달의 일부입니다.'], ['Part of social development.'], ['강요하지 마세요.'], ['Avoid forcing.'], ['짧은 놀이 모임.'], ['Short playdates.'], ['공원 놀이', '짧은 교류'], ['Park play', 'Brief interactions'])
            ),
            card('자조', 'Self-help', '스스로 하기', 'Do it myself', '스스로 하려는 욕구가 늘어납니다.', 'Wants to do tasks alone.',
                details(['자율성 발달 시기입니다.'], ['Autonomy is growing.'], ['시간 여유를 주세요.'], ['Allow extra time.'], ['일상 루틴 속에서.'], ['Within daily routine.'], ['스스로 옷 입기', '손 씻기'], ['Dressing', 'Hand washing'])
            ),
            card('수면', 'Sleep', '낮잠 조정', 'Nap adjustment', '낮잠 시간이 줄어들 수 있습니다.', 'Naps may decrease.',
                details(['밤잠 안정에 도움됩니다.'], ['Helps night sleep.'], ['과도한 피로는 피하세요.'], ['Avoid overtiredness.'], ['서서히 조정.'], ['Adjust gradually.'], ['낮잠 기록', '취침 고정'], ['Nap log', 'Consistent bedtime'])
            ),
            card('안전', 'Safety', '외출 안전', 'Outing safety', '외출 시 손잡이/안전벨트 사용.', 'Use handholding and straps.',
                details(['활동량 증가 대비입니다.'], ['Prepare for higher activity.'], ['혼잡한 곳은 주의.'], ['Watch crowds.'], ['외출 전 확인.'], ['Check before outing.'], ['안전벨트', '손잡이'], ['Straps', 'Handholding'])
            ),
            card('놀이', 'Play', '정리 놀이', 'Cleanup play', '간단한 정리 놀이를 합니다.', 'Practice cleanup.',
                details(['규칙 이해에 도움됩니다.'], ['Supports rule understanding.'], ['즐거운 분위기로.'], ['Keep it fun.'], ['놀이 후마다.'], ['After play.'], ['정리 노래', '바구니'], ['Cleanup song', 'Basket'])
            ),
            card('인지', 'Cognitive', '색/모양', 'Colors & shapes', '색과 모양에 관심을 보입니다.', 'Shows interest in colors/shapes.',
                details(['인지 발달에 도움됩니다.'], ['Supports cognitive development.'], ['과도한 학습은 피하세요.'], ['Avoid over-teaching.'], ['놀이 중 자연스럽게.'], ['Casual during play.'], ['색깔 장난감', '모양 맞추기'], ['Color toys', 'Shape sorter'])
            ),
            card('정서', 'Emotions', '감정 공감', 'Emotional empathy', '타인의 감정에 관심을 보입니다.', 'Notices others’ feelings.',
                details(['CDC 2년 지표에 포함됩니다.'], ['CDC 2-year milestone.'], ['공감 반응을 격려합니다.'], ['Encourage empathetic responses.'], ['상황마다 설명.'], ['Explain in moments.'], ['"슬퍼" 말해주기', '안아주기'], ['Name feelings', 'Hug'])
            )
        ]
    },
    {
        id: 'm-28-30',
        range: { ko: '생후 28~30개월', en: 'Months 28-30' },
        top5: ['두 문장 말하기', '또래 놀이', '간단한 규칙', '자조 습관', '안전 교육'],
        top5En: ['Short sentences', 'Peer play', 'Simple rules', 'Self-help habits', 'Safety teaching'],
        cards: [
            card('소통', 'Communication', '짧은 문장', 'Short sentences', '두 단어 이상의 문장을 말합니다.', 'Uses short sentences.',
                details(['CDC 30개월 지표에 포함됩니다.'], ['CDC 30-month milestone.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상 대화 속에서.'], ['Daily conversation.'], ['그림책 질문', '반복 말하기'], ['Book questions', 'Repeat phrases'])
            ),
            card('사회', 'Social', '또래 놀이', 'Parallel play', '또래와 나란히 놀기도 합니다.', 'Plays alongside peers.',
                details(['CDC 30개월 지표에 포함됩니다.'], ['CDC 30-month milestone.'], ['함께 놀기 강요는 피하세요.'], ['Avoid forcing.'], ['짧은 놀이 모임.'], ['Short playdates.'], ['공원 놀이', '간단 게임'], ['Park play', 'Simple games'])
            ),
            card('인지', 'Cognitive', '규칙 이해', 'Rule following', '간단한 규칙을 따르려 합니다.', 'Follows simple routines.',
                details(['CDC 30개월 지표에 포함됩니다.'], ['CDC 30-month milestone.'], ['과도한 규칙은 피하세요.'], ['Avoid too many rules.'], ['반복해서 알려주기.'], ['Repeat consistently.'], ['정리 시간', '순서 놀이'], ['Cleanup time', 'Turn-taking'])
            ),
            card('자조', 'Self-help', '스스로 하기', 'Self-help', '옷 입기, 손 씻기 등 자조 습관을 늘립니다.', 'Builds self-help habits.',
                details(['자율성 발달에 도움됩니다.'], ['Supports autonomy.'], ['시간 여유를 주세요.'], ['Allow extra time.'], ['일상 루틴 속에서.'], ['In daily routines.'], ['손 씻기 노래', '옷 정리'], ['Handwash song', 'Clothes routine'])
            ),
            card('안전', 'Safety', '안전 교육', 'Safety teaching', '위험한 것과 안전한 것을 구분합니다.', 'Learn safe vs unsafe.',
                details(['인지 발달에 도움됩니다.'], ['Supports cognitive safety awareness.'], ['겁을 주기보다 설명.'], ['Explain rather than scare.'], ['외출/집안 모두 적용.'], ['At home and outside.'], ['"뜨거워" 알려주기', '도로 주의'], ['Name hazards', 'Road safety'])
            ),
            card('놀이', 'Play', '역할 놀이', 'Pretend play', '역할 놀이가 길어집니다.', 'Longer pretend play.',
                details(['상상력이 발달합니다.'], ['Imagination grows.'], ['안전한 소품 사용.'], ['Use safe props.'], ['짧게 반복.'], ['Short sessions.'], ['장난감 주방', '인형 놀이'], ['Toy kitchen', 'Doll play'])
            ),
            card('수면', 'Sleep', '취침 루틴', 'Bedtime routine', '안정적인 루틴을 유지합니다.', 'Keep stable bedtime routine.',
                details(['감정 안정에 도움됩니다.'], ['Supports emotional stability.'], ['주말에도 비슷하게.'], ['Keep consistent on weekends.'], ['매일 같은 시간대.'], ['Same timing daily.'], ['책 읽기', '조명 낮추기'], ['Books', 'Dim lights'])
            ),
            card('식단', 'Food', '가족 식사', 'Family meals', '가족 식사에 적극 참여합니다.', 'Joins family meals.',
                details(['식사 습관 형성에 도움됩니다.'], ['Supports meal habits.'], ['자극적인 음식은 피하세요.'], ['Avoid overly salty/spicy foods.'], ['하루 3회 + 간식.'], ['3 meals + snacks.'], ['작게 자르기', '물 제공'], ['Small pieces', 'Offer water'])
            )
        ]
    },
    {
        id: 'm-31-33',
        range: { ko: '생후 31~33개월', en: 'Months 31-33' },
        top5: ['말하기 확장', '사회성 강화', '자조 습관', '안전 교육', '수면 루틴'],
        top5En: ['Speech expansion', 'Social growth', 'Self-help habits', 'Safety basics', 'Sleep routine'],
        cards: [
            card('소통', 'Communication', '말하기 확장', 'Speech expansion', '질문을 하거나 대답을 늘립니다.', 'Asks and answers more.',
                details(['언어 발달이 활발합니다.'], ['Active language growth.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상 대화 속에서.'], ['Daily conversations.'], ['질문하기', '그림책'], ['Ask questions', 'Books'])
            ),
            card('사회', 'Social', '또래 놀이', 'Peer play', '또래와 함께 놀 기회가 늘어납니다.', 'More opportunities with peers.',
                details(['사회성 발달에 도움됩니다.'], ['Supports social skills.'], ['강요는 피하세요.'], ['Avoid forcing.'], ['짧은 모임부터.'], ['Start with short playdates.'], ['공원 놀이', '간단 게임'], ['Park play', 'Simple games'])
            ),
            card('자조', 'Self-help', '스스로 하기', 'Independence', '스스로 하려는 욕구가 강해집니다.', 'Wants more independence.',
                details(['자율성 발달 시기입니다.'], ['Autonomy period.'], ['시간 여유를 주세요.'], ['Allow extra time.'], ['일상 루틴 속에서.'], ['In daily routines.'], ['옷 입기', '정리하기'], ['Dressing', 'Tidying'])
            ),
            card('안전', 'Safety', '안전 교육', 'Safety basics', '도로/불/높은 곳의 위험을 알려줍니다.', 'Teach road/fire/height safety.',
                details(['인지적으로 위험을 이해하는 시기입니다.'], ['Begins to understand hazards.'], ['겁을 주기보다 설명.'], ['Explain rather than scare.'], ['외출 전 반복.'], ['Repeat before outings.'], ['손잡이', '규칙 반복'], ['Handholding', 'Rule repetition'])
            ),
            card('수면', 'Sleep', '취침 루틴', 'Bedtime routine', '루틴을 일정하게 유지합니다.', 'Keep routine steady.',
                details(['감정 안정에 도움됩니다.'], ['Supports emotional stability.'], ['주말에도 비슷하게.'], ['Keep consistent on weekends.'], ['매일 같은 시간.'], ['Same time daily.'], ['책 읽기', '조명 낮추기'], ['Books', 'Dim lights'])
            ),
            card('놀이', 'Play', '상상 놀이', 'Imaginative play', '상상 놀이가 활발해집니다.', 'Imaginative play expands.',
                details(['창의성과 언어 발달에 도움됩니다.'], ['Supports creativity and language.'], ['안전한 소품 사용.'], ['Use safe props.'], ['짧게 반복.'], ['Short sessions.'], ['역할 놀이', '인형 놀이'], ['Role play', 'Doll play'])
            ),
            card('식단', 'Food', '간식 규칙', 'Snack rules', '간식 시간과 양을 정합니다.', 'Set snack times and amounts.',
                details(['식사 리듬 형성에 도움됩니다.'], ['Supports meal rhythm.'], ['당류 과다 섭취 주의.'], ['Avoid excess sugar.'], ['하루 1~2회.'], ['1-2 snacks daily.'], ['과일', '요구르트'], ['Fruit', 'Yogurt'])
            ),
            card('정서', 'Emotions', '감정 표현', 'Emotion words', '감정을 말로 표현하도록 돕습니다.', 'Help name emotions.',
                details(['감정 조절에 도움됩니다.'], ['Supports regulation.'], ['강요는 피하세요.'], ['Avoid forcing.'], ['일상 속에서 반복.'], ['Repeat in daily life.'], ['감정 카드', '공감 말하기'], ['Emotion cards', 'Empathy words'])
            )
        ]
    },
    {
        id: 'm-34-36',
        range: { ko: '생후 34~36개월', en: 'Months 34-36' },
        top5: ['대화 주고받기', '또래 놀이 확장', '기본 규칙 이해', '자조 습관 강화', '안전 교육'],
        top5En: ['Back-and-forth talk', 'Expanded peer play', 'Understand simple rules', 'Stronger self-help', 'Safety education'],
        cards: [
            card('소통', 'Communication', '대화 주고받기', 'Back-and-forth talk', '짧은 대화를 주고받습니다.', 'Holds simple conversations.',
                details(['CDC 3년 지표에 포함됩니다.'], ['CDC 3-year milestone.'], ['개인차가 큽니다.'], ['Variation is normal.'], ['일상 대화 속에서.'], ['In daily talk.'], ['질문하기', '응답 기다리기'], ['Ask questions', 'Wait for response'])
            ),
            card('사회', 'Social', '또래 놀이 확장', 'Expanded peer play', '또래와 함께 노는 시간이 늘어납니다.', 'Plays more with peers.',
                details(['CDC 3년 지표에 포함됩니다.'], ['CDC 3-year milestone.'], ['갈등 상황은 설명해 주세요.'], ['Explain conflicts calmly.'], ['짧은 모임부터.'], ['Start with short playdates.'], ['공원 놀이', '간단 게임'], ['Park play', 'Simple games'])
            ),
            card('인지', 'Cognitive', '간단 규칙 이해', 'Simple rules', '규칙을 이해하고 따르려 합니다.', 'Understands simple rules.',
                details(['사회성 발달에 도움됩니다.'], ['Supports social skills.'], ['과도한 규칙은 피하세요.'], ['Avoid too many rules.'], ['일상에서 반복.'], ['Repeat daily.'], ['정리 시간', '순서 놀이'], ['Cleanup time', 'Turn-taking'])
            ),
            card('자조', 'Self-help', '스스로 입기', 'Self dressing', '옷 입기를 스스로 하려 합니다.', 'Tries dressing alone.',
                details(['CDC 3년 지표에 포함됩니다.'], ['CDC 3-year milestone.'], ['시간 여유를 주세요.'], ['Allow extra time.'], ['아침 준비 시간 활용.'], ['Use during morning routine.'], ['간단한 옷', '신발 연습'], ['Simple clothes', 'Shoes practice'])
            ),
            card('안전', 'Safety', '안전 교육', 'Safety education', '뜨거운 것/도로 위험을 설명합니다.', 'Teach hot/road safety.',
                details(['인지 발달에 도움됩니다.'], ['Supports safety awareness.'], ['겁주기보다 설명.'], ['Explain rather than scare.'], ['외출 전 반복.'], ['Repeat before outings.'], ['손잡이', '규칙 반복'], ['Handholding', 'Rule repetition'])
            ),
            card('놀이', 'Play', '창의 놀이', 'Creative play', '그림/점토 놀이를 즐깁니다.', 'Enjoys drawing and playdough.',
                details(['손가락 힘과 창의성에 도움됩니다.'], ['Supports fine motor and creativity.'], ['삼킴 위험 도구는 피하세요.'], ['Avoid small pieces.'], ['짧게 반복.'], ['Short sessions.'], ['크레용', '안전 점토'], ['Crayons', 'Safe dough'])
            ),
            card('수면', 'Sleep', '취침 루틴', 'Bedtime routine', '취침 루틴을 일정하게 유지합니다.', 'Keep bedtime routine.',
                details(['감정 안정에 도움됩니다.'], ['Supports emotional stability.'], ['주말에도 비슷하게.'], ['Keep consistent on weekends.'], ['매일 같은 시간.'], ['Same time daily.'], ['책 읽기', '조명 낮추기'], ['Books', 'Dim lights'])
            ),
            card('식단', 'Food', '식사 습관', 'Meal habits', '가족 식사와 규칙을 유지합니다.', 'Maintain family meal habits.',
                details(['식사 습관 형성에 도움됩니다.'], ['Supports meal habits.'], ['과도한 간식은 피하세요.'], ['Avoid too many snacks.'], ['하루 3회 + 간식.'], ['3 meals + snacks.'], ['물 제공', '균형 식단'], ['Offer water', 'Balanced meals'])
            )
        ]
    }
];

monthStages.forEach(entry => {
    DATA.stages.push(buildMonthStage(entry.month, `생후 ${entry.month}개월`, `Month ${entry.month}`, entry.top5, entry.top5En, entry.cards));
});

monthData.forEach(entry => {
    DATA.stages.push(buildMonthStage(entry.month, entry.titleKo, entry.titleEn, entry.top5, entry.top5En, entry.cards));
});

toddlerStages.forEach(stage => {
    DATA.stages.push({
        id: stage.id,
        group: 'baby-13-36',
        label: { ko: stage.range.ko, en: stage.range.en },
        range: stage.range,
        top5: { ko: stage.top5, en: stage.top5En },
        cards: stage.cards
    });
});

let currentLang = 'ko';
let selectedGroup = 'all';
let selectedStage = 'all';

const setText = () => {
    const t = translations[currentLang];
    Object.entries(textEls).forEach(([key, el]) => {
        if (!el || !t[key]) return;
        el.textContent = t[key];
    });
    if (jumpStages) {
        jumpStages.textContent = t.jumpStages;
    }
    themeToggle.textContent = body.classList.contains('dark') ? t.themeLight : t.themeDark;
    langToggle.textContent = t.langBtn;
};

const buildFilterButton = (label, isActive, onClick) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn${isActive ? ' active' : ''}`;
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    return btn;
};

const renderFilters = () => {
    stageGroupFilter.innerHTML = '';
    stageFilter.innerHTML = '';

    DATA.groups.forEach(group => {
        const label = group.label[currentLang];
        stageGroupFilter.appendChild(
            buildFilterButton(label, selectedGroup === group.id, () => {
                selectedGroup = group.id;
                selectedStage = 'all';
                renderFilters();
                renderStages();
            })
        );
    });

    const stagesForGroup = DATA.stages.filter(stage => selectedGroup === 'all' || stage.group === selectedGroup);
    stageFilter.appendChild(
        buildFilterButton(translations[currentLang].filterAll, selectedStage === 'all', () => {
            selectedStage = 'all';
            renderFilters();
            renderStages();
        })
    );

    stagesForGroup.forEach(stage => {
        stageFilter.appendChild(
            buildFilterButton(stage.label[currentLang], selectedStage === stage.id, () => {
                selectedStage = stage.id;
                renderFilters();
                renderStages();
            })
        );
    });
};

const openModal = (stage) => {
    if (!stageModal) return;
    modalTag.textContent = stage.label[currentLang];
    modalTitle.textContent = stage.range[currentLang];
    modalTop5.innerHTML = '';
    const top5Title = document.createElement('div');
    top5Title.className = 'card-title';
    top5Title.textContent = translations[currentLang].stageTop5;
    modalTop5.appendChild(top5Title);
    stage.top5[currentLang].forEach(item => {
        const line = document.createElement('div');
        line.textContent = `• ${item}`;
        modalTop5.appendChild(line);
    });

    modalCards.innerHTML = '';
    stage.cards.forEach(cardItem => {
        const wrapper = document.createElement('div');
        wrapper.className = 'card-item';

        const button = document.createElement('button');
        button.className = 'accordion-btn';
        button.type = 'button';
        button.innerHTML = `
            <span>${cardItem.title[currentLang]}</span>
            <span>＋</span>
        `;

        const panel = document.createElement('div');
        panel.className = 'accordion-panel';

        const summary = document.createElement('div');
        summary.className = 'card-desc';
        summary.textContent = cardItem.summary[currentLang];

        const reason = document.createElement('div');
        reason.className = 'card-detail';
        reason.textContent = translations[currentLang].detailReason;

        const reasonList = document.createElement('ul');
        reasonList.className = 'accordion-list';
        cardItem.details.reason[currentLang].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            reasonList.appendChild(li);
        });

        const caution = document.createElement('div');
        caution.className = 'card-detail';
        caution.textContent = translations[currentLang].detailCaution;

        const cautionList = document.createElement('ul');
        cautionList.className = 'accordion-list';
        cardItem.details.caution[currentLang].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cautionList.appendChild(li);
        });

        const timing = document.createElement('div');
        timing.className = 'card-detail';
        timing.textContent = translations[currentLang].detailTiming;

        const timingList = document.createElement('ul');
        timingList.className = 'accordion-list';
        cardItem.details.timing[currentLang].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            timingList.appendChild(li);
        });

        const checklist = document.createElement('div');
        checklist.className = 'card-detail';
        checklist.textContent = translations[currentLang].detailChecklist;

        const checklistList = document.createElement('ul');
        checklistList.className = 'accordion-list';
        cardItem.details.checklist[currentLang].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            checklistList.appendChild(li);
        });

        panel.appendChild(summary);

        const focus = document.createElement('div');
        focus.className = 'card-detail';
        focus.textContent = getFocusLabel(cardItem, currentLang);
        const focusList = document.createElement('ul');
        focusList.className = 'accordion-list';
        getFocusPoints(cardItem, currentLang).forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            focusList.appendChild(li);
        });
        panel.appendChild(focus);
        panel.appendChild(focusList);

        const how = document.createElement('div');
        how.className = 'card-detail';
        how.textContent = translations[currentLang].detailHow;
        const howList = document.createElement('ul');
        howList.className = 'accordion-list';
        const timingSummary = cardItem.details.timing[currentLang].join(', ');
        const checklistSummary = cardItem.details.checklist[currentLang].join(', ');
        [timingSummary, checklistSummary].forEach(text => {
            if (!text) return;
            const li = document.createElement('li');
            li.textContent = text;
            howList.appendChild(li);
        });
        panel.appendChild(how);
        panel.appendChild(howList);
        panel.appendChild(reason);
        panel.appendChild(reasonList);
        panel.appendChild(caution);
        panel.appendChild(cautionList);
        panel.appendChild(timing);
        panel.appendChild(timingList);
        panel.appendChild(checklist);
        panel.appendChild(checklistList);

        button.addEventListener('click', () => {
            const isOpen = panel.classList.contains('show');
            panel.classList.toggle('show');
            button.classList.toggle('active');
            button.querySelector('span:last-child').textContent = isOpen ? '＋' : '－';
        });

        wrapper.appendChild(button);
        wrapper.appendChild(panel);
        modalCards.appendChild(wrapper);
    });

    stageModal.classList.add('show');
    stageModal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
    if (!stageModal) return;
    stageModal.classList.remove('show');
    stageModal.setAttribute('aria-hidden', 'true');
};

const renderStages = () => {
    stageCards.innerHTML = '';
    let filtered = DATA.stages;
    if (selectedGroup !== 'all') {
        filtered = filtered.filter(stage => stage.group === selectedGroup);
    }
    if (selectedStage !== 'all') {
        filtered = filtered.filter(stage => stage.id === selectedStage);
    }

    filtered.forEach(stage => {
        const card = document.createElement('div');
        card.className = 'stage-card';

        const header = document.createElement('div');
        header.className = 'stage-header';
        header.innerHTML = `
            <div class="stage-tag">${stage.label[currentLang]}</div>
            <div class="stage-title">${stage.range[currentLang]}</div>
            <div class="stage-sub">${translations[currentLang].stageTap}</div>
        `;

        const list = document.createElement('div');
        list.className = 'card-list';
        stage.cards.slice(0, 3).forEach(cardItem => {
            const item = document.createElement('div');
            item.className = 'card-item';
            item.innerHTML = `
                <div class="card-category">${cardItem.category[currentLang]}</div>
                <div class="card-title">${cardItem.title[currentLang]}</div>
            `;
            list.appendChild(item);
        });

        card.appendChild(header);
        card.appendChild(list);
        card.addEventListener('click', () => openModal(stage));
        stageCards.appendChild(card);
    });
};

const renderThemeItems = (items) => {
    themeModalCards.innerHTML = '';
    items.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'card-item';

        const button = document.createElement('button');
        button.className = 'accordion-btn';
        button.type = 'button';
        button.innerHTML = `
            <span>${item.title[currentLang]}</span>
            <span>＋</span>
        `;

        const panel = document.createElement('div');
        panel.className = 'accordion-panel';

        const summary = document.createElement('div');
        summary.className = 'card-desc';
        summary.textContent = item.summary[currentLang];

        panel.appendChild(summary);

        const focus = document.createElement('div');
        focus.className = 'card-detail';
        focus.textContent = getFocusLabel(item, currentLang);
        const focusList = document.createElement('ul');
        focusList.className = 'accordion-list';
        const focusPoints = item.focus && item.focus[currentLang]
            ? item.focus[currentLang]
            : getFocusPoints(item, currentLang);
        focusPoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            focusList.appendChild(li);
        });
        panel.appendChild(focus);
        panel.appendChild(focusList);

        if (item.price) {
            const price = document.createElement('div');
            price.className = 'card-detail';
            price.textContent = item.price[currentLang];
            panel.appendChild(price);

            if (item.source && item.source.url) {
                const source = document.createElement('a');
                source.className = 'card-detail';
                source.href = item.source.url;
                source.target = '_blank';
                source.rel = 'noopener noreferrer';
                source.textContent = `${item.source.label} 보기`;
                panel.appendChild(source);
            }
        }

        const reason = document.createElement('div');
        reason.className = 'card-detail';
        reason.textContent = translations[currentLang].detailReason;

        const reasonList = document.createElement('ul');
        reasonList.className = 'accordion-list';
        item.details.reason[currentLang].forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            reasonList.appendChild(li);
        });

        const caution = document.createElement('div');
        caution.className = 'card-detail';
        caution.textContent = translations[currentLang].detailCaution;

        const cautionList = document.createElement('ul');
        cautionList.className = 'accordion-list';
        item.details.caution[currentLang].forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            cautionList.appendChild(li);
        });

        const timing = document.createElement('div');
        timing.className = 'card-detail';
        timing.textContent = translations[currentLang].detailTiming;

        const timingList = document.createElement('ul');
        timingList.className = 'accordion-list';
        item.details.timing[currentLang].forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            timingList.appendChild(li);
        });

        const checklist = document.createElement('div');
        checklist.className = 'card-detail';
        checklist.textContent = translations[currentLang].detailChecklist;

        const checklistList = document.createElement('ul');
        checklistList.className = 'accordion-list';
        item.details.checklist[currentLang].forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            checklistList.appendChild(li);
        });

        panel.appendChild(reason);
        panel.appendChild(reasonList);
        panel.appendChild(caution);
        panel.appendChild(cautionList);
        panel.appendChild(timing);
        panel.appendChild(timingList);
        panel.appendChild(checklist);
        panel.appendChild(checklistList);

        button.addEventListener('click', () => {
            const isOpen = panel.classList.contains('show');
            panel.classList.toggle('show');
            button.classList.toggle('active');
            button.querySelector('span:last-child').textContent = isOpen ? '＋' : '－';
        });

        wrapper.appendChild(button);
        wrapper.appendChild(panel);
        themeModalCards.appendChild(wrapper);
    });
};

const openThemeModal = (theme) => {
    if (!themeModal) return;
    themeModalTag.textContent = theme.title[currentLang];
    themeModalTitle.textContent = theme.subtitle[currentLang];
    themeModalSummary.innerHTML = '';
    theme.summary[currentLang].forEach(item => {
        const line = document.createElement('div');
        line.textContent = `• ${item}`;
        themeModalSummary.appendChild(line);
    });

    themeModalSections.innerHTML = '';
    const sections = theme.sections && theme.sections.length ? theme.sections : null;
    if (sections) {
        themeModalSections.style.display = 'flex';
        sections.forEach((section, index) => {
            const pill = document.createElement('button');
            pill.type = 'button';
            pill.className = `section-pill${index === 0 ? ' active' : ''}`;
            pill.textContent = section.title[currentLang];
            pill.addEventListener('click', () => {
                themeModalSections.querySelectorAll('.section-pill').forEach(btn => {
                    btn.classList.remove('active');
                });
                pill.classList.add('active');
                renderThemeItems(section.items);
            });
            themeModalSections.appendChild(pill);
        });
        renderThemeItems(sections[0].items);
    } else {
        themeModalSections.style.display = 'none';
        renderThemeItems(theme.items);
    }

    themeModal.classList.add('show');
    themeModal.setAttribute('aria-hidden', 'false');
};

const closeThemeModal = () => {
    if (!themeModal) return;
    themeModal.classList.remove('show');
    themeModal.setAttribute('aria-hidden', 'true');
};

const renderHotClusters = () => {
    hotClusters.innerHTML = '';
    DATA.themes.forEach(theme => {
        const card = document.createElement('div');
        card.className = 'cluster-card';
        const title = document.createElement('div');
        title.className = 'cluster-title';
        title.textContent = theme.title[currentLang];
        const keywords = document.createElement('div');
        keywords.className = 'cluster-keywords';
        theme.summary[currentLang].forEach(keyword => {
            const pill = document.createElement('span');
            pill.className = 'keyword-pill';
            pill.textContent = keyword;
            keywords.appendChild(pill);
        });
        const note = document.createElement('div');
        note.className = 'card-desc';
        note.textContent = translations[currentLang].themeTap;
        card.appendChild(title);
        card.appendChild(keywords);
        card.appendChild(note);
        card.addEventListener('click', () => openThemeModal(theme));
        hotClusters.appendChild(card);
    });
};


const initNav = () => {
    document.querySelectorAll('.nav-link').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (jumpStages) {
        jumpStages.addEventListener('click', () => {
            const target = document.getElementById('stages');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
};

const renderAll = () => {
    setText();
    renderFilters();
    renderStages();
    renderHotClusters();
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    renderAll();
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    setText();
});

initNav();
renderAll();

if (modalClose && stageModal) {
    modalClose.addEventListener('click', closeModal);
    stageModal.addEventListener('click', (event) => {
        if (event.target === stageModal) {
            closeModal();
        }
    });
}

if (themeModalClose && themeModal) {
    themeModalClose.addEventListener('click', closeThemeModal);
    themeModal.addEventListener('click', (event) => {
        if (event.target === themeModal) {
            closeThemeModal();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (stageModal && stageModal.classList.contains('show')) {
        closeModal();
    }
    if (themeModal && themeModal.classList.contains('show')) {
        closeThemeModal();
    }
});
