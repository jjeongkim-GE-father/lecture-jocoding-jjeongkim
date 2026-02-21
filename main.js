const recommendButton = document.getElementById('recommend-button');
const recommendationsContainer = document.getElementById('recommendations-container');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;

const translations = {
    en: {
        pageTitle: 'Dinner Menu Recommendation',
        mainHeading: "What's for Dinner?",
        tagline: 'Curated dinner ideas for every mood.',
        subHeading: 'Pick from a wide global lineup, each with a short description so you can decide fast.',
        instruction: 'Click the button for recommendations!',
        recommendBtn: 'Recommend 3 Menus',
        themeDark: 'Dark Mode',
        themeLight: 'Light Mode',
        langBtn: '한국어',
        thinking: 'Thinking...',
        navMenu: 'Menu',
        navCollections: 'Collections',
        navAbout: 'About',
        menuCount: (count) => `${count} dishes in rotation`,
        features: [
            {
                title: 'Global Variety',
                desc: 'Korean classics, noodles, grills, and comfort food from around the world.'
            },
            {
                title: 'Fast Decisions',
                desc: 'Short, clear descriptions make it easy to pick what fits tonight.'
            },
            {
                title: 'Always Fresh',
                desc: 'Hit the button again for a new trio every time.'
            }
        ],
        menus: [
            { name: 'Kimchi Jjigae', desc: 'Spicy kimchi stew with pork and tofu.', category: 'Korean · Stew' },
            { name: 'Bulgogi', desc: 'Sweet-savory marinated beef grilled thin.', category: 'Korean · Grill' },
            { name: 'Bibimbap', desc: 'Mixed rice bowl with vegetables and egg.', category: 'Korean · Bowl' },
            { name: 'Tteokbokki', desc: 'Chewy rice cakes in a spicy sauce.', category: 'Korean · Street' },
            { name: 'Korean Fried Chicken', desc: 'Crispy chicken glazed with sweet heat.', category: 'Korean · Fried' },
            { name: 'Japchae', desc: 'Glass noodles stir-fried with vegetables.', category: 'Korean · Noodles' },
            { name: 'Samgyeopsal', desc: 'Grilled pork belly with lettuce wraps.', category: 'Korean · BBQ' },
            { name: 'Doenjang Jjigae', desc: 'Savory soybean paste stew with tofu.', category: 'Korean · Stew' },
            { name: 'Jeyuk Bokkeum', desc: 'Spicy stir-fried pork with garlic.', category: 'Korean · Stir-fry' },
            { name: 'Kimbap', desc: 'Seaweed rice rolls with classic fillings.', category: 'Korean · Roll' },
            { name: 'Ramen', desc: 'Rich broth with noodles and toppings.', category: 'Japanese · Noodles' },
            { name: 'Sushi', desc: 'Vinegared rice with fish and vegetables.', category: 'Japanese · Rice' },
            { name: 'Udon', desc: 'Thick wheat noodles in savory broth.', category: 'Japanese · Noodles' },
            { name: 'Tonkatsu', desc: 'Breaded pork cutlet with tangy sauce.', category: 'Japanese · Cutlet' },
            { name: 'Okonomiyaki', desc: 'Savory cabbage pancake with toppings.', category: 'Japanese · Griddle' },
            { name: 'Pad Thai', desc: 'Stir-fried noodles with tamarind and peanuts.', category: 'Thai · Noodles' },
            { name: 'Green Curry', desc: 'Coconut curry with herbs and vegetables.', category: 'Thai · Curry' },
            { name: 'Tom Yum', desc: 'Hot and sour shrimp soup with lemongrass.', category: 'Thai · Soup' },
            { name: 'Pho', desc: 'Beef broth noodle soup with fresh herbs.', category: 'Vietnamese · Soup' },
            { name: 'Banh Mi', desc: 'Baguette sandwich with pickles and meat.', category: 'Vietnamese · Sandwich' },
            { name: 'Bun Cha', desc: 'Grilled pork with noodles and herbs.', category: 'Vietnamese · Grill' },
            { name: 'Mapo Tofu', desc: 'Silky tofu in spicy bean sauce.', category: 'Chinese · Stir-fry' },
            { name: 'Jajangmyeon', desc: 'Noodles with black bean sauce.', category: 'Chinese · Noodles' },
            { name: 'Jjamppong', desc: 'Spicy seafood noodle soup.', category: 'Chinese · Soup' },
            { name: 'Sweet and Sour Pork', desc: 'Crispy pork in a tangy glaze.', category: 'Chinese · Fried' },
            { name: 'Dim Sum', desc: 'Assorted dumplings and small plates.', category: 'Chinese · Small plates' },
            { name: 'Butter Chicken', desc: 'Creamy tomato curry with chicken.', category: 'Indian · Curry' },
            { name: 'Chicken Tikka Masala', desc: 'Charred chicken in spiced sauce.', category: 'Indian · Curry' },
            { name: 'Palak Paneer', desc: 'Spinach curry with soft cheese.', category: 'Indian · Vegetarian' },
            { name: 'Biryani', desc: 'Fragrant rice with meat and spices.', category: 'Indian · Rice' },
            { name: 'Margherita Pizza', desc: 'Tomato, mozzarella, and basil.', category: 'Italian · Pizza' },
            { name: 'Carbonara', desc: 'Creamy pasta with pancetta and pepper.', category: 'Italian · Pasta' },
            { name: 'Lasagna', desc: 'Layered pasta with meat and cheese.', category: 'Italian · Pasta' },
            { name: 'Risotto', desc: 'Slow-cooked creamy rice with parmesan.', category: 'Italian · Rice' },
            { name: 'Tacos', desc: 'Soft tortillas with seasoned fillings.', category: 'Mexican · Street' },
            { name: 'Burrito Bowl', desc: 'Rice, beans, protein, and salsa.', category: 'Mexican · Bowl' },
            { name: 'Fajitas', desc: 'Sizzling peppers with grilled meat.', category: 'Mexican · Grill' },
            { name: 'Greek Salad', desc: 'Feta, olives, tomatoes, and herbs.', category: 'Mediterranean · Salad' },
            { name: 'Shawarma', desc: 'Spiced meat wrap with garlic sauce.', category: 'Middle Eastern · Wrap' },
            { name: 'Falafel Plate', desc: 'Chickpea fritters with tahini.', category: 'Middle Eastern · Vegetarian' },
            { name: 'Steak', desc: 'Grilled steak with herb butter.', category: 'American · Grill' },
            { name: 'Cheeseburger', desc: 'Juicy burger with melted cheese.', category: 'American · Burger' }
        ]
    },
    ko: {
        pageTitle: '저녁 메뉴 추천',
        mainHeading: '오늘 저녁 뭐 먹지?',
        tagline: '오늘 분위기에 딱 맞는 저녁 큐레이션.',
        subHeading: '전 세계 메뉴를 넓게 준비했어요. 설명을 보며 빠르게 결정하세요.',
        instruction: '버튼을 눌러 추천을 받아보세요!',
        recommendBtn: '메뉴 3개 추천받기',
        themeDark: '다크 모드',
        themeLight: '라이트 모드',
        langBtn: 'English',
        thinking: '고민 중...',
        navMenu: '메뉴',
        navCollections: '컬렉션',
        navAbout: '소개',
        menuCount: (count) => `${count}가지 메뉴가 준비되어 있어요`,
        features: [
            {
                title: '글로벌 다양성',
                desc: '한식부터 면요리, 그릴, 전 세계의 든든한 메뉴까지.'
            },
            {
                title: '빠른 결정',
                desc: '짧고 명확한 설명으로 오늘의 선택이 쉬워져요.'
            },
            {
                title: '늘 새로운 조합',
                desc: '버튼을 다시 누르면 언제든 새로운 3가지가 나와요.'
            }
        ],
        menus: [
            { name: '김치찌개', desc: '김치, 돼지고기, 두부가 어우러진 매콤한 찌개.', category: '한식 · 찌개' },
            { name: '불고기', desc: '달콤짭짤하게 양념한 소고기 구이.', category: '한식 · 구이' },
            { name: '비빔밥', desc: '나물과 고기, 계란을 비벼 먹는 한 그릇.', category: '한식 · 덮밥' },
            { name: '떡볶이', desc: '쫄깃한 떡을 매콤달콤하게 볶은 길거리 메뉴.', category: '한식 · 분식' },
            { name: '양념치킨', desc: '바삭하게 튀긴 치킨에 달콤한 소스를 더한 맛.', category: '한식 · 튀김' },
            { name: '잡채', desc: '당면과 채소를 고소하게 볶아낸 면요리.', category: '한식 · 면' },
            { name: '삼겹살', desc: '두툼한 돼지고기를 구워 쌈과 함께.', category: '한식 · 바비큐' },
            { name: '된장찌개', desc: '구수한 된장 베이스의 집밥 찌개.', category: '한식 · 찌개' },
            { name: '제육볶음', desc: '매콤하게 볶아낸 돼지고기 볶음.', category: '한식 · 볶음' },
            { name: '김밥', desc: '다양한 재료를 말아낸 한입 롤.', category: '한식 · 롤' },
            { name: '라면', desc: '깊은 국물과 면이 어우러진 따뜻한 한 그릇.', category: '일식 · 면' },
            { name: '초밥', desc: '식초밥에 생선과 재료를 올린 메뉴.', category: '일식 · 밥' },
            { name: '우동', desc: '쫄깃한 면발의 따뜻한 국물 요리.', category: '일식 · 면' },
            { name: '돈가스', desc: '두툼한 돈육을 바삭하게 튀겨낸 커틀릿.', category: '일식 · 커틀릿' },
            { name: '오코노미야키', desc: '양배추와 재료를 부쳐 만든 일본식 팬케이크.', category: '일식 · 철판' },
            { name: '팟타이', desc: '타마린드 소스로 볶은 태국식 볶음면.', category: '태국 · 면' },
            { name: '그린커리', desc: '코코넛과 허브가 어우러진 태국식 커리.', category: '태국 · 커리' },
            { name: '똠얌꿍', desc: '레몬그라스 향이 강한 매콤새콤 해산물 수프.', category: '태국 · 수프' },
            { name: '쌀국수', desc: '진한 육수와 허브가 어우러진 베트남 국수.', category: '베트남 · 수프' },
            { name: '반미', desc: '바게트에 피클과 고기를 넣은 샌드위치.', category: '베트남 · 샌드위치' },
            { name: '분짜', desc: '구운 돼지고기와 쌀국수를 곁들인 메뉴.', category: '베트남 · 그릴' },
            { name: '마파두부', desc: '부드러운 두부를 매콤한 소스로 볶은 요리.', category: '중식 · 볶음' },
            { name: '짜장면', desc: '춘장 소스를 올린 중식 면요리.', category: '중식 · 면' },
            { name: '짬뽕', desc: '매콤한 해산물 국물의 면요리.', category: '중식 · 수프' },
            { name: '탕수육', desc: '바삭한 돼지고기에 새콤달콤 소스를 곁들임.', category: '중식 · 튀김' },
            { name: '딤섬', desc: '한입 크기의 중국식 만두와 소요리.', category: '중식 · 소요리' },
            { name: '버터치킨', desc: '부드러운 크림 토마토 커리와 치킨.', category: '인도 · 커리' },
            { name: '치킨 티카 마살라', desc: '향신료에 구운 치킨을 소스에 더한 요리.', category: '인도 · 커리' },
            { name: '팔락 파니르', desc: '시금치 커리에 치즈를 넣은 채식 메뉴.', category: '인도 · 채식' },
            { name: '비리야니', desc: '향신료를 넣은 밥과 고기의 조화.', category: '인도 · 밥' },
            { name: '마르게리타 피자', desc: '토마토와 모차렐라의 클래식 조합.', category: '이탈리아 · 피자' },
            { name: '까르보나라', desc: '크리미한 소스와 베이컨의 파스타.', category: '이탈리아 · 파스타' },
            { name: '라자냐', desc: '파스타와 치즈를 겹겹이 쌓은 오븐 요리.', category: '이탈리아 · 파스타' },
            { name: '리소토', desc: '천천히 끓여낸 부드러운 크림 리소토.', category: '이탈리아 · 밥' },
            { name: '타코', desc: '토르티야에 고기와 채소를 넣은 길거리 메뉴.', category: '멕시코 · 스트리트' },
            { name: '부리또 볼', desc: '밥과 콩, 단백질, 살사를 담은 한 그릇.', category: '멕시코 · 볼' },
            { name: '파히타', desc: '구운 고기와 채소를 곁들인 메뉴.', category: '멕시코 · 그릴' },
            { name: '그릭 샐러드', desc: '페타치즈와 올리브, 토마토의 상큼함.', category: '지중해 · 샐러드' },
            { name: '샤와르마', desc: '향신료 고기를 얇게 썰어 만든 랩.', category: '중동 · 랩' },
            { name: '팔라펠 플레이트', desc: '병아리콩으로 만든 바삭한 볼과 타히니.', category: '중동 · 채식' },
            { name: '스테이크', desc: '허브 버터를 올린 풍미 가득한 구이.', category: '아메리칸 · 그릴' },
            { name: '치즈버거', desc: '두툼한 패티와 치즈의 클래식 조합.', category: '아메리칸 · 버거' }
        ]
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function updateLanguage() {
    const t = translations[currentLang];
    document.getElementById('page-title').textContent = t.pageTitle;
    document.getElementById('main-heading').textContent = t.mainHeading;
    document.getElementById('tagline').textContent = t.tagline;
    document.getElementById('sub-heading').textContent = t.subHeading;

    const instruction = document.getElementById('instruction-text');
    if (instruction) instruction.textContent = t.instruction;

    recommendButton.textContent = t.recommendBtn;
    langToggle.textContent = t.langBtn;
    document.getElementById('nav-menu').textContent = t.navMenu;
    document.getElementById('nav-collections').textContent = t.navCollections;
    document.getElementById('nav-about').textContent = t.navAbout;
    document.getElementById('menu-count').textContent = t.menuCount(t.menus.length);

    const featureTitle1 = document.getElementById('feature-title-1');
    const featureTitle2 = document.getElementById('feature-title-2');
    const featureTitle3 = document.getElementById('feature-title-3');
    const featureDesc1 = document.getElementById('feature-desc-1');
    const featureDesc2 = document.getElementById('feature-desc-2');
    const featureDesc3 = document.getElementById('feature-desc-3');

    featureTitle1.textContent = t.features[0].title;
    featureTitle2.textContent = t.features[1].title;
    featureTitle3.textContent = t.features[2].title;
    featureDesc1.textContent = t.features[0].desc;
    featureDesc2.textContent = t.features[1].desc;
    featureDesc3.textContent = t.features[2].desc;

    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? t.themeLight : t.themeDark;
    localStorage.setItem('lang', currentLang);
}

function renderRecommendations(items) {
    recommendationsContainer.innerHTML = '';

    items.forEach((menu) => {
        const itemDiv = document.createElement('article');
        itemDiv.classList.add('recommend-item');

        const title = document.createElement('h3');
        title.classList.add('recommend-title');
        title.textContent = menu.name;

        const meta = document.createElement('div');
        meta.classList.add('recommend-meta');
        meta.textContent = menu.category;

        const desc = document.createElement('p');
        desc.classList.add('recommend-desc');
        desc.textContent = menu.desc;

        itemDiv.appendChild(title);
        itemDiv.appendChild(meta);
        itemDiv.appendChild(desc);
        recommendationsContainer.appendChild(itemDiv);
    });
}

// Initial Language Load
updateLanguage();

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    updateLanguage();
});

// Theme Logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark');
    updateLanguage();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateLanguage();
});

recommendButton.addEventListener('click', () => {
    const t = translations[currentLang];
    recommendationsContainer.innerHTML = `
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
    `;

    setTimeout(() => {
        const selectedMenus = getRandomMenus(t.menus, 3);
        renderRecommendations(selectedMenus);
    }, 500);
});

function getRandomMenus(menuList, count) {
    const shuffled = [...menuList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
