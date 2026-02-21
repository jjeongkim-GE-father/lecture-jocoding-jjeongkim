const recommendButton = document.getElementById('recommend-button');
const recommendationText = document.getElementById('recommendation');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const dinnerMenus = [
    'Kimchi Jjigae (Kimchi Stew)',
    'Bulgogi (Korean BBQ Beef)',
    'Bibimbap',
    'Tteokbokki',
    'Fried Chicken',
    'Pasta',
    'Pizza',
    'Sushi',
    'Tacos',
    'Steak',
    'Ramen',
    'Burger'
];

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

recommendButton.addEventListener('click', () => {
    recommendationText.textContent = 'Thinking...';
    recommendationText.style.opacity = '0.5';
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const selectedMenu = dinnerMenus[randomIndex];
        recommendationText.textContent = selectedMenu;
        recommendationText.style.opacity = '1';
    }, 500);
});