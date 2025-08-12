// Language functionality for Nibras Jordan Website

// Language data
const languageData = {
    en: {
        direction: 'ltr',
        name: 'English',
        switchTo: 'العربية'
    },
    ar: {
        direction: 'rtl',
        name: 'العربية',
        switchTo: 'English'
    }
};

// Current language state
let currentLanguage = 'en';

// Initialize language functionality
function initializeLanguage() {
    // Set initial language from localStorage or default to English
    const savedLanguage = localStorage.getItem('nibras-language') || 'en';
    setLanguage(savedLanguage, false);
}

// Toggle between languages
function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage, true);
}

// Set language
function setLanguage(language, animate = false) {
    if (!languageData[language]) {
        console.error('Unsupported language:', language);
        return;
    }
    
    currentLanguage = language;
    const langData = languageData[language];
    
    // Update document attributes
    document.documentElement.lang = language;
    document.documentElement.dir = langData.direction;
    
    // Update body class for RTL/LTR styling
    document.body.classList.toggle('rtl', language === 'ar');
    document.body.classList.toggle('ltr', language === 'en');
    
    // Update all translatable elements
    updateTranslatableElements(animate);
    
    // Update language toggle buttons
    updateLanguageButtons();
    
    // Update form placeholders
    updateFormPlaceholders();
    
    // Save language preference
    localStorage.setItem('nibras-language', language);
    
    // Dispatch language change event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language, direction: langData.direction } 
    }));
}

// Update all translatable elements
function updateTranslatableElements(animate = false) {
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            if (animate) {
                // Add fade animation
                element.style.opacity = '0.5';
                setTimeout(() => {
                    element.textContent = text;
                    element.style.opacity = '1';
                }, 150);
            } else {
                element.textContent = text;
            }
        }
    });
}

// Update language toggle buttons
function updateLanguageButtons() {
    const langData = languageData[currentLanguage];
    
    // Update main language toggle
    const languageText = document.getElementById('language-text');
    if (languageText) {
        languageText.textContent = langData.switchTo;
    }
    
    // Update mobile language toggle
    const mobileLanguageText = document.getElementById('mobile-language-text');
    if (mobileLanguageText) {
        mobileLanguageText.textContent = langData.switchTo;
    }
    
    // Update footer language toggle
    const footerLanguageText = document.getElementById('footer-language-text');
    if (footerLanguageText) {
        footerLanguageText.textContent = langData.switchTo;
    }
}

// Update form placeholders
function updateFormPlaceholders() {
    const elements = document.querySelectorAll('[data-en-placeholder], [data-ar-placeholder]');
    
    elements.forEach(element => {
        const placeholder = element.getAttribute(`data-${currentLanguage}-placeholder`);
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
}

// Format numbers for current language
function formatNumber(number) {
    if (currentLanguage === 'ar') {
        // Convert to Arabic-Indic numerals
        return number.toString().replace(/\d/g, function(d) {
            return '٠١٢٣٤٥٦٧٨٩'[d];
        });
    }
    return number.toString();
}

// Format date for current language
function formatDate(dateString, options = {}) {
    const date = new Date(dateString);
    const defaultOptions = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    const formatOptions = { ...defaultOptions, ...options };
    
    if (currentLanguage === 'ar') {
        return date.toLocaleDateString('ar-JO', formatOptions);
    }
    return date.toLocaleDateString('en-US', formatOptions);
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Get current direction
function getCurrentDirection() {
    return languageData[currentLanguage].direction;
}

// Check if current language is RTL
function isRTL() {
    return getCurrentDirection() === 'rtl';
}

// Update language-specific content dynamically
function updateLanguageContent() {
    // Update stats with proper number formatting
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(element => {
        const originalNumber = element.textContent.replace(/[^\d]/g, '');
        if (originalNumber) {
            const formattedNumber = formatNumber(originalNumber);
            element.innerHTML = element.innerHTML.replace(/\d+/g, formattedNumber);
        }
    });
    
    // Update dates
    const dateElements = document.querySelectorAll('.news-date, [data-date]');
    dateElements.forEach(element => {
        const dateValue = element.getAttribute('data-date') || element.textContent;
        if (dateValue && dateValue.match(/\d{4}-\d{2}-\d{2}/)) {
            element.textContent = formatDate(dateValue);
        }
    });
}

// Initialize language functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
    // Listen for language changes to update dynamic content
    window.addEventListener('languageChanged', function() {
        setTimeout(updateLanguageContent, 200);
    });
});

// Export functions for global access
window.toggleLanguage = toggleLanguage;
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.getCurrentDirection = getCurrentDirection;
window.isRTL = isRTL;
window.formatNumber = formatNumber;
window.formatDate = formatDate;