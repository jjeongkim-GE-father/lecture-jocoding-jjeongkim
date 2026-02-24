const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;

const stageGroupFilter = document.getElementById('stage-group-filter');
const stageFilter = document.getElementById('stage-filter');
const stageCards = document.getElementById('stage-cards');
const hotClusters = document.getElementById('hot-clusters');
const formulaPrice = document.getElementById('formula-price');
const formulaIngredients = document.getElementById('formula-ingredients');
const formulaHot = document.getElementById('formula-hot');

const stageModal = document.getElementById('stage-modal');
const modalTag = document.getElementById('modal-tag');
const modalTitle = document.getElementById('modal-title');
const modalTop5 = document.getElementById('modal-top5');
const modalCards = document.getElementById('modal-cards');
const modalClose = document.getElementById('modal-close');

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
        pageTitle: 'Bloom Care Map',
        brand: 'Bloom Care Map',
        tagline: 'A gentle guide for pregnancy and baby days.',
        mainHeading: 'Warm, clear, and calm — one month at a time.',
        subHeading: 'From pregnancy to 36 months, find essentials and care notes in a soft, simple flow.',
        heroNote: 'Click a stage to open detailed cards',
        metaWindow: 'Basic care guide · Korea-first',
        metaSources: 'Sources: CDC · WHO · KR Public Health',
        heroPanelTitle: 'Quick Filters',
        filterNote: 'Pick a stage to open the full checklist.',
        stagesTitle: 'Stage Playbook',
        stagesSubtitle: 'Tap a stage to see Top 5 essentials + detailed cards.',
        hotTitle: 'Parenting Themes',
        hotSubtitle: 'Organized by the moments parents care most about.',
        formulaTitle: 'Formula Guide (KR)',
        formulaSubtitle: 'Price bands + ingredient styles, organized for comparison.',
        formulaPriceTitle: 'Price Bands (Naver Shopping baseline)',
        formulaIngredientTitle: 'Ingredient Styles',
        formulaHotTitle: 'Top Products / Lines',
        disclaimerTitle: 'Important Notes',
        disclaimerText: 'This page offers planning cues only and does not replace medical advice. Always check product safety standards, ingredient labels, and consult professionals for health-related decisions.',
        navStages: 'Stages',
        navHot: 'Themes',
        navFormula: 'Formula',
        themeDark: 'Dark Mode',
        themeLight: 'Light Mode',
        langBtn: '한국어',
        filterAll: 'All',
        stageTop5: 'Top 5 Essentials',
        stageTap: 'Tap to view details',
        modalClose: 'Close',
        detailReason: 'Why it matters',
        detailCaution: 'Caution',
        detailTiming: 'Best timing',
        detailChecklist: 'Quick checklist'
    },
    ko: {
        pageTitle: '블룸 케어 맵',
        brand: '블룸 케어 맵',
        tagline: '임신과 육아의 시간을 부드럽게 안내합니다.',
        mainHeading: '따뜻하고 간결하게, 한 달씩 정리해요.',
        subHeading: '임신부터 36개월까지, 필수 포인트를 차분하게 정리했습니다.',
        heroNote: '구간을 클릭하면 상세 카드가 열려요',
        metaWindow: '기본 육아 가이드 · 한국 중심',
        metaSources: '출처: CDC · WHO · 보건소 자료',
        heroPanelTitle: '빠른 필터',
        filterNote: '구간을 선택하면 상세 체크리스트가 열립니다.',
        stagesTitle: '구간별 플레이북',
        stagesSubtitle: '구간을 눌러 필수 Top 5와 상세 카드를 확인하세요.',
        hotTitle: '육아 테마',
        hotSubtitle: '부모들이 가장 신경 쓰는 순간들을 묶었습니다.',
        formulaTitle: '분유 가이드 (KR)',
        formulaSubtitle: '가격대 + 성분 스타일 기준으로 비교하세요.',
        formulaPriceTitle: '가격대 (네이버쇼핑 기준)',
        formulaIngredientTitle: '성분 스타일',
        formulaHotTitle: '주요 제품 / 라인',
        disclaimerTitle: '안내 사항',
        disclaimerText: '이 페이지는 계획 참고용이며 의학적 조언을 대신하지 않습니다. 제품 안전 기준, 성분표를 확인하고 건강 관련 결정은 전문가와 상의하세요.',
        navStages: '구간',
        navHot: '테마',
        navFormula: '분유',
        themeDark: '다크 모드',
        themeLight: '라이트 모드',
        langBtn: 'English',
        filterAll: '전체',
        stageTop5: '필수 Top 5',
        stageTap: '자세히 보기',
        modalClose: '닫기',
        detailReason: '이유/근거',
        detailCaution: '주의사항',
        detailTiming: '추천 시기',
        detailChecklist: '체크리스트'
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
    hotClusters: [
        {
            title: { ko: '수면/수면교육', en: 'Sleep' },
            keywords: ['수면루틴', '낮잠', '백색소음', '수면등', '스와들']
        },
        {
            title: { ko: '외출/이동', en: 'Outing' },
            keywords: ['유모차', '카시트', '아기띠', '외출가방', '보온병']
        },
        {
            title: { ko: '이유식/식단', en: 'Weaning' },
            keywords: ['이유식레시피', '자가급식', '알레르기', '식기', '스팀']
        },
        {
            title: { ko: '피부/위생', en: 'Skin' },
            keywords: ['보습크림', '로션', '목욕', '온습도', '피부진정']
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

const monthStages = [
    {
        month: 0,
        top5: ['안전한 수면 환경', '수유 리듬 파악', '기저귀/피부 케어', '탯줄/목욕 관리', '건강 체크업'],
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

const buildMonthStage = (month, titleKo, titleEn, top5, cards) => ({
    id: `m-${month}`,
    group: 'baby-0-12',
    label: { ko: `생후 ${month}개월`, en: `Month ${month}` },
    range: { ko: titleKo, en: titleEn },
    top5: { ko: top5, en: top5.map(item => item) },
    cards
});

const monthData = [
    { month: 1, titleKo: '생후 1개월', titleEn: 'Month 1', top5: ['수유 리듬 안정', '밤낮 구분 시도', '짧은 터미타임', '피부 보습', '초기 예방접종/진료'],
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
    { month: 2, titleKo: '생후 2개월', titleEn: 'Month 2', top5: ['사회적 미소 관찰', '터미타임 늘리기', '소리 반응', '수유 신호 강화', '수면 루틴 준비'],
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
    { month: 3, titleKo: '생후 3개월', titleEn: 'Month 3', top5: ['손-입 움직임', '머리 지지 향상', '옹알이 증가', '낮잠 리듬', '놀이 시간 확대'],
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
    { month: 4, titleKo: '생후 4개월', titleEn: 'Month 4', top5: ['머리 고정', '소리 모방', '손 관찰', '뒤집기 준비', '수면 루틴 강화'],
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
    { month: 5, titleKo: '생후 5개월', titleEn: 'Month 5', top5: ['뒤집기 연습', '장난감 잡기', '옹알이 다양화', '수면 리듬 유지', '이유식 준비'],
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
    { month: 6, titleKo: '생후 6개월', titleEn: 'Month 6', top5: ['뒤집기/앉기 준비', '이유식 시작', '소리 교대', '손으로 탐색', '안전 수칙 강화'],
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
    { month: 7, titleKo: '생후 7개월', titleEn: 'Month 7', top5: ['혼자 앉기 연습', '이유식 확대', '옹알이 확장', '손가락 놀림', '수면 루틴 유지'],
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
    { month: 8, titleKo: '생후 8개월', titleEn: 'Month 8', top5: ['기어가기 시도', '손가락 음식 준비', '분리불안 시작', '손-눈 협응', '안전 점검 강화'],
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
    { month: 9, titleKo: '생후 9개월', titleEn: 'Month 9', top5: ['혼자 앉기 안정', '이름 반응', '물건 찾기', '손으로 먹기', '안전 강화'],
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
    { month: 10, titleKo: '생후 10개월', titleEn: 'Month 10', top5: ['붙잡고 서기', '간단한 지시 이해', '집중 놀이', '손가락 집기', '안전 강화'],
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
    { month: 11, titleKo: '생후 11개월', titleEn: 'Month 11', top5: ['손가락 집기 강화', '서기 안정', '간단한 말 흉내', '가족 식사 적응', '안전 점검'],
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
    { month: 12, titleKo: '생후 12개월', titleEn: 'Month 12', top5: ['붙잡고 걷기', '간단한 단어', '컵 사용', '가족 식사', '안전 점검'],
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

monthData.forEach(entry => {
    DATA.stages.push(buildMonthStage(entry.month, entry.titleKo, entry.titleEn, entry.top5, entry.cards));
});

monthStages.forEach(entry => {
    DATA.stages.push(buildMonthStage(entry.month, `생후 ${entry.month}개월`, `Month ${entry.month}`, entry.top5, entry.cards));
});

toddlerStages.forEach(stage => {
    DATA.stages.push({
        id: stage.id,
        group: 'baby-13-36',
        label: { ko: stage.range.ko, en: stage.range.en },
        range: stage.range,
        top5: { ko: stage.top5, en: stage.top5 },
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
        card.appendChild(title);
        card.appendChild(keywords);
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
