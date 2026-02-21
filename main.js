const recommendButton = document.getElementById('recommend-button');
const recommendationsContainer = document.getElementById('recommendations-container');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;

const translations = {
    en: {
        pageTitle: 'Dinner Menu Recommendation',
        mainHeading: "What's for Dinner?",
        instruction: 'Click the button for recommendations!',
        recommendBtn: 'Recommend 3 Menus',
        themeDark: 'Dark Mode',
        themeLight: 'Light Mode',
        langBtn: '한국어',
        thinking: 'Thinking...',
        menus: [
            'Kimchi Jjigae (Kimchi Stew)', 'Bulgogi (Korean BBQ Beef)', 'Bibimbap',
            'Tteokbokki', 'Fried Chicken', 'Pasta', 'Pizza', 'Sushi',
            'Tacos', 'Steak', 'Ramen', 'Burger'
        ]
    },
    ko: {
        pageTitle: '저녁 메뉴 추천',
        mainHeading: '오늘 저녁 뭐 먹지?',
        instruction: '버튼을 눌러 추천을 받아보세요!',
        recommendBtn: '메뉴 3개 추천받기',
        themeDark: '다크 모드',
        themeLight: '라이트 모드',
        langBtn: 'English',
        thinking: '고민 중...',
        menus: [
            '김치찌개', '불고기', '비빔밥', '떡볶이', '치킨', '파스타', 
            '피자', '초밥', '타코', '스테이크', '라면', '햄버거',
            '제육볶음', '된장찌개', '돈가스', '짬뽕', '짜장면'
        ]
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function updateLanguage() {
    const t = translations[currentLang];
    document.getElementById('page-title').textContent = t.pageTitle;
    document.getElementById('main-heading').textContent = t.mainHeading;
    const instruction = document.getElementById('instruction-text');
    if (instruction) instruction.textContent = t.instruction;
    recommendButton.textContent = t.recommendBtn;
    langToggle.textContent = t.langBtn;
    
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? t.themeLight : t.themeDark;
    localStorage.setItem('lang', currentLang);
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
    recommendationsContainer.innerHTML = `<p id="instruction-text">${t.thinking}</p>`;
    
    setTimeout(() => {
        recommendationsContainer.innerHTML = '';
        const selectedMenus = getRandomMenus(t.menus, 3);
        
        selectedMenus.forEach(menu => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('recommend-item');
            itemDiv.textContent = menu;
            recommendationsContainer.appendChild(itemDiv);
        });
    }, 600);
});

function getRandomMenus(menuList, count) {
    const shuffled = [...menuList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}