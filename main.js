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
    formulaTitle: document.getElementById('formula-title'),
    formulaSubtitle: document.getElementById('formula-subtitle'),
    formulaPriceTitle: document.getElementById('formula-price-title'),
    formulaIngredientTitle: document.getElementById('formula-ingredient-title'),
    formulaHotTitle: document.getElementById('formula-hot-title'),
    disclaimerTitle: document.getElementById('disclaimer-title'),
    disclaimerText: document.getElementById('disclaimer-text'),
    modalClose: document.getElementById('modal-close'),
    navStages: document.getElementById('nav-stages'),
    navHot: document.getElementById('nav-hot'),
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
        formulaTitle: 'Formula Guide (KR)',
        formulaSubtitle: 'Price bands + ingredient styles, organized for comparison.',
        formulaPriceTitle: 'Price Bands (Naver Shopping baseline)',
        formulaIngredientTitle: 'Ingredient Styles',
        formulaHotTitle: 'Top Products / Lines',
        disclaimerTitle: 'Important Notes',
        disclaimerText: 'This page offers planning cues only and does not replace medical advice. Always check product safety standards, ingredient labels, and consult professionals for health-related decisions.',
        navStages: 'Stages',
        navHot: 'Hot Now',
        navFormula: 'Formula',
        stageTop5: 'Top 5 Essentials',
        stageTap: 'Tap to view details',
        modalClose: 'Close',
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
        formulaTitle: '분유 가이드 (KR)',
        formulaSubtitle: '가격대 + 성분 스타일 기준으로 비교하세요.',
        formulaPriceTitle: '가격대 (네이버쇼핑 기준)',
        formulaIngredientTitle: '성분 스타일',
        formulaHotTitle: '주요 제품 / 라인',
        disclaimerTitle: '안내 사항',
        disclaimerText: '이 페이지는 계획 참고용이며 의학적 조언을 대신하지 않습니다. 제품 안전 기준, 성분표를 확인하고 건강 관련 결정은 전문가와 상의하세요.',
        navStages: '구간',
        navHot: '핫 키워드',
        navFormula: '분유',
        stageTop5: '필수 Top 5',
        stageTap: '자세히 보기',
        modalClose: '닫기',
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
                { category: { ko: '영양', en: 'Nutrition' }, title: { ko: '엽산/철분 루틴', en: 'Folate & iron' }, desc: { ko: '필수 영양제 섭취 시간을 고정합니다.', en: 'Anchor daily supplement timing.' } },
                { category: { ko: '생활', en: 'Lifestyle' }, title: { ko: '입덧 완화 키트', en: 'Nausea kit' }, desc: { ko: '크래커, 레몬향, 미지근한 음료를 묶어둡니다.', en: 'Bundle crackers, citrus scent, mild drinks.' } },
                { category: { ko: '수면', en: 'Sleep' }, title: { ko: '임산부 베개', en: 'Maternity pillow' }, desc: { ko: '옆잠 지지용 베개로 압박을 줄여요.', en: 'Use side-sleep support to reduce pressure.' } },
                { category: { ko: '건강', en: 'Health' }, title: { ko: '산전 체크리스트', en: 'Prenatal checklist' }, desc: { ko: '검사 일정/기록을 한 장으로 정리합니다.', en: 'Keep tests and records in a single sheet.' } },
                { category: { ko: '정보', en: 'Info' }, title: { ko: '지원금/보험', en: 'Benefits map' }, desc: { ko: '지역 지원금과 보험 혜택을 확인합니다.', en: 'Review local benefits and insurance.' } },
                { category: { ko: '기록', en: 'Tracking' }, title: { ko: '증상 로그', en: 'Symptom log' }, desc: { ko: '컨디션 변화를 짧게 기록합니다.', en: 'Log small changes for consultations.' } },
                { category: { ko: '식단', en: 'Food' }, title: { ko: '자극 줄인 식단', en: 'Gentle meals' }, desc: { ko: '속 편한 식단으로 리듬을 맞춥니다.', en: 'Keep meals gentle and consistent.' } },
                { category: { ko: '정리', en: 'Planning' }, title: { ko: '출산 일정 공유', en: 'Due date board' }, desc: { ko: '가족과 공유할 일정표를 만들어둡니다.', en: 'Create a shared milestone calendar.' } }
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
                { category: { ko: '의류', en: 'Wear' }, title: { ko: '임부복/속옷', en: 'Maternity basics' }, desc: { ko: '압박이 적은 임부복으로 교체합니다.', en: 'Switch to low-pressure maternity wear.' } },
                { category: { ko: '운동', en: 'Movement' }, title: { ko: '가벼운 스트레칭', en: 'Gentle stretching' }, desc: { ko: '짧은 스트레칭으로 순환을 돕습니다.', en: 'Short stretches help circulation.' } },
                { category: { ko: '준비', en: 'Prep' }, title: { ko: '출산 준비 체크', en: 'Birth prep list' }, desc: { ko: '병원/용품 체크리스트를 확정해요.', en: 'Finalize hospital and supply checklists.' } },
                { category: { ko: '공간', en: 'Space' }, title: { ko: '수면/수유 동선', en: 'Flow planning' }, desc: { ko: '침대-수유-기저귀 동선을 정리합니다.', en: 'Map bed-feeding-diaper flow.' } },
                { category: { ko: '정보', en: 'Info' }, title: { ko: '출산 클래스', en: 'Prenatal classes' }, desc: { ko: '출산/육아 클래스를 비교해둡니다.', en: 'Compare prenatal class options.' } },
                { category: { ko: '건강', en: 'Health' }, title: { ko: '부기 관리', en: 'Swelling care' }, desc: { ko: '수분 섭취와 다리 휴식을 맞춥니다.', en: 'Balance hydration and leg rest.' } },
                { category: { ko: '기록', en: 'Tracking' }, title: { ko: '사이즈 기록', en: 'Size notes' }, desc: { ko: '출산 전후 변화 시점을 기록합니다.', en: 'Track size changes for timing.' } },
                { category: { ko: '커뮤니티', en: 'Community' }, title: { ko: '경험 공유', en: 'Peer notes' }, desc: { ko: '비슷한 시기 경험을 공유합니다.', en: 'Swap notes with peers.' } }
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
                { category: { ko: '준비', en: 'Prep' }, title: { ko: '출산 가방', en: 'Hospital bag' }, desc: { ko: '엄마/아기 필수품을 카테고리로 포장해요.', en: 'Pack essentials by category.' } },
                { category: { ko: '생활', en: 'Lifestyle' }, title: { ko: '휴식 루틴', en: 'Rest routine' }, desc: { ko: '수면/휴식 시간을 넉넉히 확보합니다.', en: 'Reserve extra time for rest.' } },
                { category: { ko: '공간', en: 'Space' }, title: { ko: '신생아 존', en: 'Newborn zone' }, desc: { ko: '기저귀·수유·수면 동선을 묶어요.', en: 'Cluster diaper-feeding-sleep flow.' } },
                { category: { ko: '안전', en: 'Safety' }, title: { ko: '카시트 설치', en: 'Car seat setup' }, desc: { ko: '카시트 설치/각도 점검을 마칩니다.', en: 'Install and check seat angle.' } },
                { category: { ko: '육아', en: 'Care' }, title: { ko: '스와들/속싸개', en: 'Swaddle basics' }, desc: { ko: '모로반사 대비용 기본 아이템을 준비해요.', en: 'Prepare swaddles for startle reflex.' } },
                { category: { ko: '기록', en: 'Tracking' }, title: { ko: '출산 계획서', en: 'Birth plan' }, desc: { ko: '의사와 공유할 간단한 계획서를 준비합니다.', en: 'Prepare a concise plan to discuss.' } },
                { category: { ko: '쇼핑', en: 'Shopping' }, title: { ko: '신생아 의류', en: 'Newborn wear' }, desc: { ko: '세탁 주기에 맞춰 수량을 맞춰요.', en: 'Match quantity to laundry cadence.' } },
                { category: { ko: '지원', en: 'Support' }, title: { ko: '가족 역할 분담', en: 'Role split' }, desc: { ko: '출산 직후 역할을 정리해 둡니다.', en: 'Align responsibilities before delivery.' } }
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
                { category: { ko: '회복', en: 'Recovery' }, title: { ko: '회복 일정표', en: 'Recovery schedule' }, desc: { ko: '수면/식사/체크업을 단순화합니다.', en: 'Simplify sleep, meals, and checkups.' } },
                { category: { ko: '수유', en: 'Feeding' }, title: { ko: '수유/분유 루틴', en: 'Feeding rhythm' }, desc: { ko: '수유 시간을 기록해 패턴을 봅니다.', en: 'Track feeding times to spot patterns.' } },
                { category: { ko: '생활', en: 'Lifestyle' }, title: { ko: '집안 동선', en: 'Home flow' }, desc: { ko: '필요한 물건을 한 곳에 모아 둡니다.', en: 'Cluster essentials within arm reach.' } },
                { category: { ko: '위생', en: 'Hygiene' }, title: { ko: '세탁/소독', en: 'Laundry & sanitize' }, desc: { ko: '수유용품 세척 루틴을 정합니다.', en: 'Set a cleaning routine for feeding gear.' } },
                { category: { ko: '도구', en: 'Tools' }, title: { ko: '수유 의자/등받이', en: 'Feeding support' }, desc: { ko: '등받이/쿠션으로 자세를 보호합니다.', en: 'Support posture with cushions.' } },
                { category: { ko: '지원', en: 'Support' }, title: { ko: '도움 요청 리스트', en: 'Help list' }, desc: { ko: '도움 받을 항목을 구체적으로 정리합니다.', en: 'List specific tasks others can help with.' } },
                { category: { ko: '정리', en: 'Planning' }, title: { ko: '소모품 체크', en: 'Supply check' }, desc: { ko: '기저귀/물티슈 재고를 확인합니다.', en: 'Check diaper and wipe stock.' } },
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
    formula: {
        priceBands: [
            { ko: '2~3만원대 (800g 기준, 보급형 라인)', en: '20-30k KRW band (800g baseline)' },
            { ko: '3~4만원대 (국내 주력 라인)', en: '30-40k KRW band (mainstream lines)' },
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
            { ko: '매일 앱솔루트, 남양 임페리얼', en: 'Maeil Absolute, Namyang Imperial' },
            { ko: '일동후디스(산양), 파스퇴르 위드맘', en: 'Ildong Foodis (Goat), Pasteur Withmom' },
            { ko: '힙/홀레(수입 유기농 라인)', en: 'HiPP/Holle (import organic lines)' },
            { ko: '특수/가수분해 라인', en: 'Specialized hydrolyzed lines' }
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
        { category: { ko: '수면', en: 'Sleep' }, title: { ko: '스와들/백색소음', en: 'Swaddle + white noise' }, desc: { ko: '모로반사 대비와 수면 안정에 도움됩니다.', en: 'Helps with startle reflex and sleep.' } },
        { category: { ko: '수유', en: 'Feeding' }, title: { ko: '젖병/꼭지', en: 'Bottle & nipple' }, desc: { ko: '유속 단계와 세척 루틴을 맞춥니다.', en: 'Match flow rate and cleaning routine.' } },
        { category: { ko: '피부', en: 'Skin' }, title: { ko: '저자극 보습', en: 'Gentle moisturizer' }, desc: { ko: '목욕 후 보습 타이밍을 고정합니다.', en: 'Moisturize after bath consistently.' } },
        { category: { ko: '외출', en: 'Outing' }, title: { ko: '외출 가방', en: 'Outing bag' }, desc: { ko: '기저귀/수유/여벌을 최소 구성으로.', en: 'Keep diaper, feed, spare items only.' } },
        { category: { ko: '놀이', en: 'Play' }, title: { ko: '초기 놀이 매트', en: 'Play mat' }, desc: { ko: '짧은 터미타임으로 근육 발달을 돕습니다.', en: 'Short tummy time helps motor skills.' } },
        { category: { ko: '정리', en: 'Planning' }, title: { ko: '소모품 재고', en: 'Supplies check' }, desc: { ko: '기저귀, 물티슈 재고를 체크합니다.', en: 'Check diaper and wipe stock.' } },
        { category: { ko: '환경', en: 'Environment' }, title: { ko: '온습도 관리', en: 'Temp/humidity' }, desc: { ko: '실내 온습도 범위를 일정하게 유지합니다.', en: 'Maintain stable room conditions.' } },
        { category: { ko: '기록', en: 'Tracking' }, title: { ko: '성장 기록', en: 'Growth log' }, desc: { ko: '수유량/수면시간을 간단히 기록합니다.', en: 'Log feeding and sleep times.' } }
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
        { category: { ko: '외출', en: 'Outing' }, title: { ko: '외출 안전', en: 'Outing safety' }, desc: { ko: '유모차/아기띠 상태를 점검합니다.', en: 'Recheck stroller and carrier safety.' } },
        { category: { ko: '식사', en: 'Meals' }, title: { ko: '유아식 루틴', en: 'Toddler meals' }, desc: { ko: '식사 시간과 간식 규칙을 정합니다.', en: 'Set meal times and snack rules.' } },
        { category: { ko: '언어', en: 'Language' }, title: { ko: '그림책/대화', en: 'Books & talk' }, desc: { ko: '짧은 문장으로 반복 대화를 합니다.', en: 'Use short sentences repeatedly.' } },
        { category: { ko: '수면', en: 'Sleep' }, title: { ko: '수면 환경', en: 'Sleep setup' }, desc: { ko: '낮잠/밤잠 루틴을 유지합니다.', en: 'Keep nap and bedtime routine.' } },
        { category: { ko: '정리', en: 'Planning' }, title: { ko: '장난감 정리', en: 'Toy organization' }, desc: { ko: '사용 빈도 기준으로 정리합니다.', en: 'Organize by usage frequency.' } },
        { category: { ko: '안전', en: 'Safety' }, title: { ko: '가정 안전', en: 'Home safety' }, desc: { ko: '모서리 보호와 잠금 장치를 점검합니다.', en: 'Check corner guards and locks.' } },
        { category: { ko: '습관', en: 'Habits' }, title: { ko: '배변/자조 습관', en: 'Self-help' }, desc: { ko: '간단한 자조 활동을 늘려봅니다.', en: 'Encourage simple self-help steps.' } }
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
        const item = document.createElement('div');
        item.className = 'card-item';
        item.innerHTML = `
            <div class="card-category">${cardItem.category[currentLang]}</div>
            <div class="card-title">${cardItem.title[currentLang]}</div>
            <div class="card-desc">${cardItem.desc[currentLang]}</div>
        `;
        modalCards.appendChild(item);
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

if (modalClose && stageModal) {
    modalClose.addEventListener('click', closeModal);
    stageModal.addEventListener('click', (event) => {
        if (event.target === stageModal) {
            closeModal();
        }
    });
}
