const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;

const stageGroupFilter = document.getElementById('stage-group-filter');
const stageFilter = document.getElementById('stage-filter');
const stageCards = document.getElementById('stage-cards');
const hotClusters = document.getElementById('hot-clusters');
const regionGrid = document.getElementById('region-grid');
const formulaPrice = document.getElementById('formula-price');
const formulaIngredients = document.getElementById('formula-ingredients');
const formulaHot = document.getElementById('formula-hot');

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
    hotNote: document.getElementById('hot-note'),
    regionsTitle: document.getElementById('regions-title'),
    regionsSubtitle: document.getElementById('regions-subtitle'),
    regionNote: document.getElementById('region-note'),
    formulaTitle: document.getElementById('formula-title'),
    formulaSubtitle: document.getElementById('formula-subtitle'),
    formulaPriceTitle: document.getElementById('formula-price-title'),
    formulaIngredientTitle: document.getElementById('formula-ingredient-title'),
    formulaHotTitle: document.getElementById('formula-hot-title'),
    disclaimerTitle: document.getElementById('disclaimer-title'),
    disclaimerText: document.getElementById('disclaimer-text'),
    navStages: document.getElementById('nav-stages'),
    navHot: document.getElementById('nav-hot'),
    navRegions: document.getElementById('nav-regions'),
    navFormula: document.getElementById('nav-formula')
};

const translations = {
    en: {
        pageTitle: 'Care Map 0-36',
        brand: 'Care Map 0-36',
        tagline: 'Pregnancy to 36 months, mapped clearly.',
        mainHeading: 'Korea-first parenting guide, clean & data-led.',
        subHeading: 'Stage-based essentials, category cards, and hot keyword clusters—built for quick decisions.',
        heroNote: 'Korean & English versions included',
        metaWindow: 'Last 1 year trend window',
        metaSources: 'Sources: Naver DataLab + Google Trends',
        heroPanelTitle: 'Quick Filters',
        filterNote: 'Pick a stage to see Top 5 essentials + 8-12 category cards.',
        stagesTitle: 'Stage Playbook',
        stagesSubtitle: 'Pregnancy, postpartum, and baby months with concise, actionable cards.',
        hotTitle: 'Hot Keyword Clusters (KR)',
        hotSubtitle: 'Combined view of Naver DataLab and Google Trends over the past year.',
        hotNote: 'Actual search volumes require DataLab export + Trends capture. Current entries are placeholders.',
        regionsTitle: 'Postpartum Massage by Region',
        regionsSubtitle: 'Special city + province grouping with suggested providers.',
        regionNote: 'Provider lists should be verified with local directories before publishing.',
        formulaTitle: 'Formula Guide (KR)',
        formulaSubtitle: 'Price bands + ingredient styles, organized for comparison.',
        formulaPriceTitle: 'Price Bands (Naver Shopping baseline)',
        formulaIngredientTitle: 'Ingredient Styles',
        formulaHotTitle: 'Top Products / Lines',
        disclaimerTitle: 'Important Notes',
        disclaimerText: 'This page offers planning cues only and does not replace medical advice. Always check product safety standards, ingredient labels, and consult professionals for health-related decisions.',
        navStages: 'Stages',
        navHot: 'Hot Now',
        navRegions: 'Regions',
        navFormula: 'Formula',
        stageTop5: 'Top 5 Essentials',
        themeDark: 'Dark Mode',
        themeLight: 'Light Mode',
        langBtn: '한국어',
        filterAll: 'All',
        filterGroupLabel: 'Groups'
    },
    ko: {
        pageTitle: '케어 맵 0-36',
        brand: '케어 맵 0-36',
        tagline: '임신부터 36개월까지 한눈에 정리.',
        mainHeading: '한국 시장 중심의 간결한 육아 가이드.',
        subHeading: '구간별 필수 Top 5와 카테고리 카드, 그리고 핫 키워드까지 빠르게 확인하세요.',
        heroNote: '한국어 / 영어 버전 제공',
        metaWindow: '최근 1년 트렌드 구간',
        metaSources: '출처: 네이버 데이터랩 + 구글 트렌드',
        heroPanelTitle: '빠른 필터',
        filterNote: '구간을 선택하면 필수 Top 5 + 카테고리 카드 8~12개를 볼 수 있어요.',
        stagesTitle: '구간별 플레이북',
        stagesSubtitle: '임신, 산후, 생후 월령별로 핵심만 정리했어요.',
        hotTitle: '핫 키워드 클러스터 (KR)',
        hotSubtitle: '네이버 데이터랩과 구글 트렌드의 최근 1년을 합산해 정리합니다.',
        hotNote: '실제 검색량은 데이터랩/트렌드 추출이 필요합니다. 현재는 템플릿 상태입니다.',
        regionsTitle: '지역별 산후마사지',
        regionsSubtitle: '특별시 + 도 단위로 정리한 추천 업체 카드입니다.',
        regionNote: '게시 전 지역 디렉터리에서 업체 정보를 반드시 확인하세요.',
        formulaTitle: '분유 가이드 (KR)',
        formulaSubtitle: '가격대 + 성분 스타일 기준으로 비교하세요.',
        formulaPriceTitle: '가격대 (네이버쇼핑 기준)',
        formulaIngredientTitle: '성분 스타일',
        formulaHotTitle: '주요 제품 / 라인',
        disclaimerTitle: '안내 사항',
        disclaimerText: '이 페이지는 계획 참고용이며 의학적 조언을 대신하지 않습니다. 제품 안전 기준, 성분표를 확인하고 건강 관련 결정은 전문가와 상의하세요.',
        navStages: '구간',
        navHot: '핫 키워드',
        navRegions: '지역별',
        navFormula: '분유',
        stageTop5: '필수 Top 5',
        themeDark: '다크 모드',
        themeLight: '라이트 모드',
        langBtn: 'English',
        filterAll: '전체',
        filterGroupLabel: '그룹'
    }
};

const DATA = {
    groups: [
        {
            id: 'all',
            label: { ko: '전체', en: 'All' }
        },
        {
            id: 'pregnancy',
            label: { ko: '임신', en: 'Pregnancy' }
        },
        {
            id: 'postpartum',
            label: { ko: '산후 0-6주', en: 'Postpartum 0-6w' }
        },
        {
            id: 'baby-0-12',
            label: { ko: '생후 0-12개월', en: '0-12 months' }
        },
        {
            id: 'baby-13-36',
            label: { ko: '생후 13-36개월', en: '13-36 months' }
        }
    ],
    stages: [
        {
            id: 'preg-1',
            group: 'pregnancy',
            label: { ko: '임신 1기', en: 'Trimester 1' },
            range: { ko: '임신 1~13주', en: 'Weeks 1-13' },
            top5: {
                ko: ['산전 진료 일정 정리', '입덧 관리용 간식/음료', '기초 영양 체크(엽산 등)', '편안한 수면 환경', '일상 동선 단순화'],
                en: ['Prenatal schedule setup', 'Light snacks for nausea', 'Baseline nutrition check (folate, etc.)', 'Comfort-first sleep setup', 'Simplified daily routines']
            },
            cards: [
                { category: { ko: '건강', en: 'Health' }, title: { ko: '산전 체크리스트', en: 'Prenatal checklist' }, desc: { ko: '병원 일정, 검사 항목, 필요한 기록을 한 장에 정리해요.', en: 'Keep visits, tests, and records in a one-page list.' } },
                { category: { ko: '생활', en: 'Lifestyle' }, title: { ko: '입덧 대비 키트', en: 'Nausea kit' }, desc: { ko: '미지근한 음료, 크래커, 향 완화용 아이템을 묶어요.', en: 'Bundle mild drinks, crackers, and scent reducers.' } },
                { category: { ko: '수면', en: 'Sleep' }, title: { ko: '자세 변화', en: 'Posture tweaks' }, desc: { ko: '옆잠/베개 높이 조절로 편안한 수면감을 찾습니다.', en: 'Adjust pillows and side-sleep support for comfort.' } },
                { category: { ko: '정보', en: 'Info' }, title: { ko: '보험/지원금', en: 'Benefits map' }, desc: { ko: '지역별 지원금과 보험 혜택을 정리해둡니다.', en: 'List local benefits and insurance options early.' } },
                { category: { ko: '이동', en: 'Mobility' }, title: { ko: '동선 단순화', en: 'Route simplification' }, desc: { ko: '피로를 줄이기 위해 동선을 간단히 세팅해요.', en: 'Reduce fatigue by simplifying daily routes.' } },
                { category: { ko: '기록', en: 'Tracking' }, title: { ko: '증상 로그', en: 'Symptom log' }, desc: { ko: '컨디션 변화를 짧게 기록해 상담에 활용합니다.', en: 'Track small changes for easier consultations.' } },
                { category: { ko: '식단', en: 'Food' }, title: { ko: '균형 식단', en: 'Balanced meals' }, desc: { ko: '자극적인 음식은 줄이고 가볍게 구성합니다.', en: 'Keep meals light and balanced for stability.' } },
                { category: { ko: '정리', en: 'Planning' }, title: { ko: '출산 일정 표', en: 'Due date board' }, desc: { ko: '가족과 공유할 일정표를 미리 만들어둡니다.', en: 'Create a shared calendar for key milestones.' } }
            ]
        },
        {
            id: 'preg-2',
            group: 'pregnancy',
            label: { ko: '임신 2기', en: 'Trimester 2' },
            range: { ko: '임신 14~27주', en: 'Weeks 14-27' },
            top5: {
                ko: ['편안한 의류/속옷', '중기 운동 루틴', '태교/생활 리듬', '출산 준비 리스트', '가정 내 안전 점검'],
                en: ['Comfort clothing basics', 'Light movement routine', 'Daily rhythm planning', 'Birth-prep checklist', 'Home safety sweep']
            },
            cards: [
                { category: { ko: '의류', en: 'Wear' }, title: { ko: '복부 압박 최소화', en: 'Low-pressure wear' }, desc: { ko: '허리 압박이 적은 의류로 교체합니다.', en: 'Switch to low-pressure waist options.' } },
                { category: { ko: '생활', en: 'Lifestyle' }, title: { ko: '가벼운 스트레칭', en: 'Gentle stretching' }, desc: { ko: '짧은 스트레칭으로 순환을 돕습니다.', en: 'Short stretches can support circulation.' } },
                { category: { ko: '준비', en: 'Prep' }, title: { ko: '출산 준비 체크', en: 'Birth prep list' }, desc: { ko: '병원/출산용품 체크리스트를 확정해요.', en: 'Finalize hospital and supply checklists.' } },
                { category: { ko: '공간', en: 'Space' }, title: { ko: '아기 공간 구상', en: 'Baby corner plan' }, desc: { ko: '수면/수유 동선을 고려해 배치합니다.', en: 'Plan layout with sleep and feeding flow.' } },
                { category: { ko: '정보', en: 'Info' }, title: { ko: '교육 클래스', en: 'Prenatal classes' }, desc: { ko: '출산/육아 클래스 일정을 확인해둡니다.', en: 'Check local class schedules early.' } },
                { category: { ko: '건강', en: 'Health' }, title: { ko: '부기 관리', en: 'Swelling care' }, desc: { ko: '물 섭취와 다리 휴식 시간을 관리합니다.', en: 'Balance hydration with leg rest time.' } },
                { category: { ko: '기록', en: 'Tracking' }, title: { ko: '체형 변화 기록', en: 'Body change notes' }, desc: { ko: '필요한 사이즈 변경 시점 파악에 도움돼요.', en: 'Track size changes for future adjustments.' } },
                { category: { ko: '커뮤니티', en: 'Community' }, title: { ko: '정보 공유', en: 'Peer notes' }, desc: { ko: '비슷한 시기의 경험을 공유해 참고합니다.', en: 'Swap notes with peers at similar stages.' } }
            ]
        },
        {
            id: 'preg-3',
            group: 'pregnancy',
            label: { ko: '임신 3기', en: 'Trimester 3' },
            range: { ko: '임신 28~40주', en: 'Weeks 28-40' },
            top5: {
                ko: ['출산 가방 준비', '산후 도우미/마사지 후보 조사', '신생아 기본 용품', '이동 동선 점검', '출산 후 회복 계획'],
                en: ['Hospital bag ready', 'Postpartum care shortlist', 'Newborn essentials', 'Mobility plan', 'Recovery planning']
            },
            cards: [
                { category: { ko: '준비', en: 'Prep' }, title: { ko: '출산 가방', en: 'Hospital bag' }, desc: { ko: '엄마/아기 필수품을 카테고리별로 포장해요.', en: 'Pack mom and baby essentials by category.' } },
                { category: { ko: '생활', en: 'Lifestyle' }, title: { ko: '휴식 루틴', en: 'Rest routine' }, desc: { ko: '수면/휴식 시간을 넉넉히 확보합니다.', en: 'Reserve extra time for rest and sleep.' } },
                { category: { ko: '공간', en: 'Space' }, title: { ko: '신생아 존', en: 'Newborn zone' }, desc: { ko: '기저귀, 수유, 수면 동선을 한 곳에 모아요.', en: 'Cluster diaper, feeding, and sleep flow.' } },
                { category: { ko: '안전', en: 'Safety' }, title: { ko: '차량 이동 준비', en: 'Car readiness' }, desc: { ko: '카시트 설치 점검을 미리 마칩니다.', en: 'Install and check the car seat early.' } },
                { category: { ko: '서비스', en: 'Services' }, title: { ko: '산후 케어 옵션', en: 'Postpartum options' }, desc: { ko: '산후마사지/도우미 업체 후보군을 만듭니다.', en: 'Draft a shortlist of care providers.' } },
                { category: { ko: '기록', en: 'Tracking' }, title: { ko: '출산 계획서', en: 'Birth plan' }, desc: { ko: '의사와 공유할 간단한 계획서를 준비합니다.', en: 'Prepare a concise plan to discuss.' } },
                { category: { ko: '쇼핑', en: 'Shopping' }, title: { ko: '신생아 의류', en: 'Newborn wear' }, desc: { ko: '세탁/교체 주기를 고려해 수량을 맞춰요.', en: 'Match quantity to laundry frequency.' } },
                { category: { ko: '지원', en: 'Support' }, title: { ko: '가족 역할 분담', en: 'Role split' }, desc: { ko: '출산 직후 역할을 미리 정리해 둡니다.', en: 'Align responsibilities before delivery.' } }
            ]
        },
        {
            id: 'post-0-6w',
            group: 'postpartum',
            label: { ko: '산후 0-6주', en: 'Postpartum 0-6w' },
            range: { ko: '회복 초기', en: 'Early recovery' },
            top5: {
                ko: ['충분한 휴식', '회복 식단', '산후마사지 후보', '수유/분유 루틴', '가족 지원 체계'],
                en: ['Rest time secured', 'Recovery-focused meals', 'Massage shortlist', 'Feeding routine', 'Family support plan']
            },
            cards: [
                { category: { ko: '회복', en: 'Recovery' }, title: { ko: '회복 일정표', en: 'Recovery schedule' }, desc: { ko: '수면, 식사, 체크업 시간을 단순화합니다.', en: 'Simplify sleep, meals, and checkups.' } },
                { category: { ko: '케어', en: 'Care' }, title: { ko: '산후마사지 옵션', en: 'Massage options' }, desc: { ko: '출장/센터형 장단점을 비교해요.', en: 'Compare home-visit vs. center care.' } },
                { category: { ko: '수유', en: 'Feeding' }, title: { ko: '수유 루틴', en: 'Feeding rhythm' }, desc: { ko: '수유/분유 시간을 기록해 패턴을 봅니다.', en: 'Track feeding times to spot patterns.' } },
                { category: { ko: '생활', en: 'Lifestyle' }, title: { ko: '집안 동선', en: 'Home flow' }, desc: { ko: '필요한 물건을 한 곳에 모아 둡니다.', en: 'Cluster essentials within arm reach.' } },
                { category: { ko: '위생', en: 'Hygiene' }, title: { ko: '세탁 루틴', en: 'Laundry rhythm' }, desc: { ko: '아기/엄마 세탁 동선을 분리합니다.', en: 'Separate baby and mom laundry flow.' } },
                { category: { ko: '지원', en: 'Support' }, title: { ko: '도움 요청 리스트', en: 'Help list' }, desc: { ko: '도움 받을 항목을 구체적으로 정리합니다.', en: 'List specific tasks others can help with.' } },
                { category: { ko: '정리', en: 'Planning' }, title: { ko: '산후 체크리스트', en: 'Postpartum list' }, desc: { ko: '재고/소모품 확인일을 지정합니다.', en: 'Set dates to check supplies.' } },
                { category: { ko: '마음', en: 'Mind' }, title: { ko: '컨디션 메모', en: 'Mood notes' }, desc: { ko: '하루 한 줄로 컨디션을 기록합니다.', en: 'Write one-line daily notes.' } }
            ]
        }
    ],
    hotClusters: [
        {
            title: { ko: '수면/수면교육', en: 'Sleep' },
            keywords: ['수면교육', '수면패턴', '수면등', '백색소음', '스와들'],
            note: { ko: 'Naver+Trends 합산 템플릿', en: 'Template from Naver+Trends' }
        },
        {
            title: { ko: '외출/이동', en: 'Outing' },
            keywords: ['유모차', '카시트', '아기띠', '외출가방', '휴대용 보온'],
            note: { ko: 'Naver+Trends 합산 템플릿', en: 'Template from Naver+Trends' }
        },
        {
            title: { ko: '이유식/식단', en: 'Weaning' },
            keywords: ['이유식레시피', '베이비쿡', '스푼', '스팀', '자기주도'],
            note: { ko: 'Naver+Trends 합산 템플릿', en: 'Template from Naver+Trends' }
        },
        {
            title: { ko: '피부/위생', en: 'Skin' },
            keywords: ['보습크림', '아토', '로션', '온습도계', '욕조'],
            note: { ko: 'Naver+Trends 합산 템플릿', en: 'Template from Naver+Trends' }
        }
    ],
    regions: [
        { name: { ko: '서울', en: 'Seoul' }, providers: ['업체 리스트 추가', '출장/센터형 구분'] },
        { name: { ko: '인천', en: 'Incheon' }, providers: ['업체 리스트 추가', '출장/센터형 구분'] },
        { name: { ko: '경기남부', en: 'Gyeonggi South' }, providers: ['수원/용인/성남 중심', '업체 리스트 추가'] },
        { name: { ko: '경기북부', en: 'Gyeonggi North' }, providers: ['고양/의정부 중심', '업체 리스트 추가'] },
        { name: { ko: '충청남도', en: 'Chungnam' }, providers: ['천안/아산 중심', '업체 리스트 추가'] },
        { name: { ko: '충청북도', en: 'Chungbuk' }, providers: ['청주 중심', '업체 리스트 추가'] },
        { name: { ko: '전라남도', en: 'Jeonnam' }, providers: ['여수/순천 중심', '업체 리스트 추가'] },
        { name: { ko: '전라북도', en: 'Jeonbuk' }, providers: ['전주 중심', '업체 리스트 추가'] },
        { name: { ko: '경상남도', en: 'Gyeongnam' }, providers: ['창원/김해 중심', '업체 리스트 추가'] },
        { name: { ko: '경상북도', en: 'Gyeongbuk' }, providers: ['포항/구미 중심', '업체 리스트 추가'] },
        { name: { ko: '강원도', en: 'Gangwon' }, providers: ['춘천/원주 중심', '업체 리스트 추가'] },
        { name: { ko: '제주도', en: 'Jeju' }, providers: ['제주시 중심', '업체 리스트 추가'] }
    ],
    formula: {
        priceBands: [
            { ko: '2~3만원대 (800g 기준, 예시 입력)', en: '20-30k KRW band (800g baseline)' },
            { ko: '3~4만원대 (800g 기준, 예시 입력)', en: '30-40k KRW band (800g baseline)' },
            { ko: '4만원 이상 (프리미엄/특수 라인)', en: '40k+ KRW (premium/special lines)' }
        ],
        ingredients: [
            { ko: '일반 분유: 기본 영양 설계', en: 'Standard: baseline nutrition design' },
            { ko: '부분 가수분해: 소화 배려형', en: 'Partially hydrolyzed: gentler digestion' },
            { ko: '완전 가수분해/특수: 알레르기 관리용', en: 'Extensively hydrolyzed: allergy management' },
            { ko: '유기농/산양: 원료 선호도 기반', en: 'Organic/Goat: ingredient preference' },
            { ko: '무유당/저유당: 필요 시 의사 상담', en: 'Lactose-reduced: consult professionals' }
        ],
        hot: [
            { ko: '제품/라인 추가 예정', en: 'Add products/lines here' },
            { ko: '네이버쇼핑 기준 업데이트 필요', en: 'Needs Naver Shopping update' }
        ]
    }
};

const MONTH_TEMPLATE = (monthNumber) => ({
    id: `m-${monthNumber}`,
    group: 'baby-0-12',
    label: { ko: `생후 ${monthNumber}개월`, en: `Month ${monthNumber}` },
    range: { ko: `생후 ${monthNumber}개월`, en: `Month ${monthNumber}` },
    top5: {
        ko: ['수면/수유 리듬 확인', '기저귀/의류 사이즈 점검', '피부 보습 루틴', '외출 준비 체크', '아기 기록 앱 업데이트'],
        en: ['Check sleep/feeding rhythm', 'Review diaper/clothing sizes', 'Skin moisture routine', 'Outing readiness', 'Update baby log']
    },
    cards: [
        { category: { ko: '수면', en: 'Sleep' }, title: { ko: '수면 루틴', en: 'Sleep routine' }, desc: { ko: '잠드는 루틴을 2~3단계로 단순화해요.', en: 'Simplify bedtime into 2-3 steps.' } },
        { category: { ko: '수유', en: 'Feeding' }, title: { ko: '수유 기록', en: 'Feeding log' }, desc: { ko: '수유/분유 시간을 짧게 기록합니다.', en: 'Track feeding times briefly.' } },
        { category: { ko: '피부', en: 'Skin' }, title: { ko: '보습 체크', en: 'Moisture check' }, desc: { ko: '목욕 후 보습 타이밍을 맞춥니다.', en: 'Moisturize after bath consistently.' } },
        { category: { ko: '외출', en: 'Outing' }, title: { ko: '외출 가방', en: 'Outing bag' }, desc: { ko: '기저귀/수유/여벌 구성만 남깁니다.', en: 'Keep only diaper, feed, spare items.' } },
        { category: { ko: '놀이', en: 'Play' }, title: { ko: '시각 자극', en: 'Visual play' }, desc: { ko: '대비 강한 패턴으로 시각 자극을 줍니다.', en: 'Use high-contrast visuals for play.' } },
        { category: { ko: '정리', en: 'Planning' }, title: { ko: '소모품 재고', en: 'Supplies check' }, desc: { ko: '기저귀, 물티슈 재고를 체크합니다.', en: 'Check diaper and wipe stock.' } },
        { category: { ko: '환경', en: 'Environment' }, title: { ko: '온습도 관리', en: 'Temp/humidity' }, desc: { ko: '실내 온습도 범위를 일정하게 유지합니다.', en: 'Maintain stable room conditions.' } },
        { category: { ko: '기록', en: 'Tracking' }, title: { ko: '사진 기록', en: 'Photo log' }, desc: { ko: '월령별 변화 기록용 사진을 남깁니다.', en: 'Capture monthly milestones.' } }
    ]
});

const TODDLER_TEMPLATE = (start, end) => ({
    id: `m-${start}-${end}`,
    group: 'baby-13-36',
    label: { ko: `생후 ${start}-${end}개월`, en: `Months ${start}-${end}` },
    range: { ko: `생후 ${start}~${end}개월`, en: `Months ${start}-${end}` },
    top5: {
        ko: ['활동량 증가 대비', '간식/식사 루틴', '외출 안전 체크', '언어/놀이 자극', '수면 리듬 유지'],
        en: ['Prepare for higher activity', 'Snack/meal routine', 'Outdoor safety check', 'Language/play stimulation', 'Keep sleep rhythm']
    },
    cards: [
        { category: { ko: '놀이', en: 'Play' }, title: { ko: '대근육 놀이', en: 'Gross motor' }, desc: { ko: '걷기/뛰기 놀이 공간을 확보합니다.', en: 'Create safe space for moving play.' } },
        { category: { ko: '외출', en: 'Outing' }, title: { ko: '외출 안전', en: 'Outing safety' }, desc: { ko: '손잡이/유모차 안전을 재확인합니다.', en: 'Recheck stroller and grip safety.' } },
        { category: { ko: '식사', en: 'Meals' }, title: { ko: '식사 루틴', en: 'Meal routine' }, desc: { ko: '식사 시간과 간식 규칙을 정합니다.', en: 'Set meal times and snack rules.' } },
        { category: { ko: '언어', en: 'Language' }, title: { ko: '말 자극', en: 'Speech cues' }, desc: { ko: '짧은 문장으로 반복 대화를 합니다.', en: 'Use short sentences repeatedly.' } },
        { category: { ko: '수면', en: 'Sleep' }, title: { ko: '수면 환경', en: 'Sleep setup' }, desc: { ko: '낮잠/밤잠 루틴을 유지합니다.', en: 'Keep nap and bedtime routine.' } },
        { category: { ko: '정리', en: 'Planning' }, title: { ko: '장난감 정리', en: 'Toy organization' }, desc: { ko: '사용 빈도 기준으로 정리합니다.', en: 'Organize by usage frequency.' } },
        { category: { ko: '안전', en: 'Safety' }, title: { ko: '가정 안전', en: 'Home safety' }, desc: { ko: '모서리 보호와 잠금 장치를 점검합니다.', en: 'Check corner guards and locks.' } },
        { category: { ko: '습관', en: 'Habits' }, title: { ko: '자조 습관', en: 'Self-help' }, desc: { ko: '간단한 자조 활동을 늘려봅니다.', en: 'Encourage simple self-help steps.' } }
    ]
});

for (let i = 0; i <= 12; i += 1) {
    DATA.stages.push(MONTH_TEMPLATE(i));
}

[[13,15],[16,18],[19,21],[22,24],[25,27],[28,30],[31,33],[34,36]].forEach(([start, end]) => {
    DATA.stages.push(TODDLER_TEMPLATE(start, end));
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
            <div class="stage-sub">${translations[currentLang].stageTop5}</div>
        `;

        const top5 = document.createElement('div');
        top5.className = 'stage-top5';
        stage.top5[currentLang].forEach(item => {
            const line = document.createElement('div');
            line.textContent = `• ${item}`;
            top5.appendChild(line);
        });

        const list = document.createElement('div');
        list.className = 'card-list';
        stage.cards.forEach(cardItem => {
            const item = document.createElement('div');
            item.className = 'card-item';
            item.innerHTML = `
                <div class="card-category">${cardItem.category[currentLang]}</div>
                <div class="card-title">${cardItem.title[currentLang]}</div>
                <div class="card-desc">${cardItem.desc[currentLang]}</div>
            `;
            list.appendChild(item);
        });

        card.appendChild(header);
        card.appendChild(top5);
        card.appendChild(list);
        stageCards.appendChild(card);
    });
};

const renderHotClusters = () => {
    hotClusters.innerHTML = '';
    DATA.hotClusters.forEach(cluster => {
        const card = document.createElement('div');
        card.className = 'cluster-card';
        const title = document.createElement('div');
        title.className = 'cluster-title';
        title.textContent = cluster.title[currentLang];
        const keywords = document.createElement('div');
        keywords.className = 'cluster-keywords';
        cluster.keywords.forEach(keyword => {
            const pill = document.createElement('span');
            pill.className = 'keyword-pill';
            pill.textContent = keyword;
            keywords.appendChild(pill);
        });
        const note = document.createElement('div');
        note.className = 'card-desc';
        note.textContent = cluster.note[currentLang];
        card.appendChild(title);
        card.appendChild(keywords);
        card.appendChild(note);
        hotClusters.appendChild(card);
    });
};

const renderRegions = () => {
    regionGrid.innerHTML = '';
    DATA.regions.forEach(region => {
        const card = document.createElement('div');
        card.className = 'region-card';
        const title = document.createElement('div');
        title.className = 'region-title';
        title.textContent = region.name[currentLang];
        const list = document.createElement('div');
        list.className = 'region-list';
        region.providers.forEach(item => {
            const line = document.createElement('div');
            line.textContent = `• ${item}`;
            list.appendChild(line);
        });
        card.appendChild(title);
        card.appendChild(list);
        regionGrid.appendChild(card);
    });
};

const renderFormula = () => {
    formulaPrice.innerHTML = '';
    formulaIngredients.innerHTML = '';
    formulaHot.innerHTML = '';

    DATA.formula.priceBands.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item[currentLang];
        formulaPrice.appendChild(li);
    });

    DATA.formula.ingredients.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item[currentLang];
        formulaIngredients.appendChild(li);
    });

    DATA.formula.hot.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item[currentLang];
        formulaHot.appendChild(li);
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
    renderRegions();
    renderFormula();
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
