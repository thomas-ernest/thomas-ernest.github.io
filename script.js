// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or respect system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Language Selector
const languageToggle = document.getElementById('languageToggle');
const languageMenu = document.getElementById('languageMenu');
const langOptions = document.querySelectorAll('.lang-option');

let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setLanguage(currentLanguage);
    updateLanguageToggleDisplay();
});

// Toggle language menu
languageToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    languageMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        languageMenu.classList.remove('active');
    }
});

// Language selection
langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateLanguageToggleDisplay();
        languageMenu.classList.remove('active');
    });
});

function setLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Mark active language option
    langOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
}

function updateLanguageToggleDisplay() {
    const languageCode = currentLanguage.toUpperCase();
    const flagMap = {
        'en': '🇬🇧',
        'fr': '🇫🇷',
        'de': '🇩🇪',
        'es': '🇪🇸',
        'it': '🇮🇹',
        'pl': '🇵🇱',
        'ro': '🇷🇴'
    };
    const flag = flagMap[currentLanguage] || '🌍';
    languageToggle.innerHTML = `<span class="flag">${flag}</span><span class="language-code">${languageCode}</span>`;
}