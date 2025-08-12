// Search functionality for Nibras Jordan Website

// Search data structure
const searchData = {
    pages: [
        {
            id: 'home',
            title: { en: 'Home', ar: 'الرئيسية' },
            content: { 
                en: 'Nibras Jordan Independent Power Producer 641 MW electricity generation',
                ar: 'نبراس الأردن منتج مستقل للطاقة 641 ميجاواط توليد كهرباء'
            },
            url: 'home',
            category: { en: 'Main', ar: 'رئيسي' }
        },
        {
            id: 'about',
            title: { en: 'About Us', ar: 'من نحن' },
            content: { 
                en: 'About Nibras Jordan leading independent power producer Jordan electricity',
                ar: 'حول نبراس الأردن منتج مستقل رائد للطاقة كهرباء الأردن'
            },
            url: 'about',
            category: { en: 'Company', ar: 'الشركة' }
        },
        {
            id: 'business',
            title: { en: 'Our Business', ar: 'أعمالنا' },
            content: { 
                en: 'Business portfolio power plants Amman East Levant IPP1 IPP4',
                ar: 'محفظة الأعمال محطات الطاقة عمان الشرقية بلاد الشام'
            },
            url: 'business',
            category: { en: 'Business', ar: 'الأعمال' }
        },
        {
            id: 'business-aes-jordan-ipp1',
            title: { en: 'AES Jordan PSC (IPP1)', ar: 'شركة AES الأردن (IPP1)' },
            content: { 
                en: 'Amman East Power Plant 400 MW combined cycle gas plant first IPP',
                ar: 'محطة عمان الشرقية للطاقة 400 ميجاواط محطة غاز دورة مركبة أول منتج مستقل'
            },
            url: 'business-aes-jordan-ipp1',
            category: { en: 'Business', ar: 'الأعمال' }
        },
        {
            id: 'business-aes-levant-ipp4',
            title: { en: 'AES Levant Holdings BV (IPP4)', ar: 'شركة AES بلاد الشام (IPP4)' },
            content: { 
                en: 'Levant Power Plant 241 MW tri-fuel peaking plant grid stabilization',
                ar: 'محطة بلاد الشام للطاقة 241 ميجاواط محطة ذروة ثلاثية الوقود استقرار الشبكة'
            },
            url: 'business-aes-levant-ipp4',
            category: { en: 'Business', ar: 'الأعمال' }
        },
        {
            id: 'business-am-solar',
            title: { en: 'AM Solar', ar: 'AM الطاقة الشمسية' },
            content: { 
                en: 'AM Solar renewable energy solar power sustainable energy',
                ar: 'AM الطاقة الشمسية طاقة متجددة طاقة شمسية طاقة مستدامة'
            },
            url: 'business-am-solar',
            category: { en: 'Business', ar: 'الأعمال' }
        },
        {
            id: 'sustainability-safety',
            title: { en: 'Safety First', ar: 'السلامة أولاً' },
            content: { 
                en: 'Safety first workplace safety occupational health safety standards',
                ar: 'السلامة أولاً سلامة مكان العمل الصحة المهنية معايير السلامة'
            },
            url: 'sustainability-safety',
            category: { en: 'Sustainability', ar: 'الاستدامة' }
        },
        {
            id: 'sustainability-environment',
            title: { en: 'Environmental Protection', ar: 'حماية البيئة' },
            content: { 
                en: 'Environmental protection sustainability green energy carbon footprint',
                ar: 'حماية البيئة الاستدامة الطاقة الخضراء البصمة الكربونية'
            },
            url: 'sustainability-environment',
            category: { en: 'Sustainability', ar: 'الاستدامة' }
        },
        {
            id: 'sustainability-social',
            title: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
            content: { 
                en: 'Social responsibility community programs education healthcare',
                ar: 'المسؤولية الاجتماعية البرامج المجتمعية التعليم الرعاية الصحية'
            },
            url: 'sustainability-social',
            category: { en: 'Sustainability', ar: 'الاستدامة' }
        },
        {
            id: 'careers',
            title: { en: 'Careers', ar: 'الوظائف' },
            content: { 
                en: 'Careers jobs employment opportunities professional growth',
                ar: 'الوظائف العمل فرص التوظيف النمو المهني'
            },
            url: 'careers',
            category: { en: 'Careers', ar: 'الوظائف' }
        },
        {
            id: 'news',
            title: { en: 'News', ar: 'الأخبار' },
            content: { 
                en: 'News updates announcements press releases media',
                ar: 'الأخبار التحديثات الإعلانات البيانات الصحفية الإعلام'
            },
            url: 'news',
            category: { en: 'News', ar: 'الأخبار' }
        },
        {
            id: 'contact',
            title: { en: 'Contact Us', ar: 'اتصل بنا' },
            content: { 
                en: 'Contact us get in touch phone email address Amman Jordan',
                ar: 'اتصل بنا تواصل معنا هاتف بريد إلكتروني عنوان عمان الأردن'
            },
            url: 'contact',
            category: { en: 'Contact', ar: 'اتصال' }
        }
    ],
    
    news: [
        {
            id: 1,
            title: { 
                en: 'Nibras Jordan Achieves Record Performance in Q3 2024',
                ar: 'نبراس الأردن تحقق أداءً قياسياً في الربع الثالث 2024'
            },
            content: { 
                en: 'Record performance Q3 2024 reliability efficiency energy security',
                ar: 'أداء قياسي الربع الثالث 2024 موثوقية كفاءة أمن الطاقة'
            },
            url: 'news-detail',
            category: { en: 'Operations', ar: 'العمليات' }
        },
        {
            id: 2,
            title: { 
                en: 'New Environmental Initiative Launched',
                ar: 'إطلاق مبادرة بيئية جديدة'
            },
            content: { 
                en: 'Environmental initiative carbon footprint sustainability program',
                ar: 'مبادرة بيئية البصمة الكربونية برنامج الاستدامة'
            },
            url: 'news-detail',
            category: { en: 'Sustainability', ar: 'الاستدامة' }
        }
    ]
};

// Search functionality
class SearchEngine {
    constructor() {
        this.searchInput = null;
        this.searchResults = null;
        this.searchModal = null;
        this.currentQuery = '';
        this.searchHistory = this.loadSearchHistory();
        
        this.init();
    }
    
    init() {
        // Initialize search elements
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        
        // Setup event listeners
        if (this.searchInput) {
            this.searchInput.addEventListener('input', this.handleSearch.bind(this));
            this.searchInput.addEventListener('keydown', this.handleKeydown.bind(this));
        }
        
        // Initialize search modal
        const searchModalElement = document.getElementById('searchModal');
        if (searchModalElement) {
            this.searchModal = new bootstrap.Modal(searchModalElement);
            
            // Focus on input when modal is shown
            searchModalElement.addEventListener('shown.bs.modal', () => {
                if (this.searchInput) {
                    this.searchInput.focus();
                }
            });
            
            // Clear search when modal is hidden
            searchModalElement.addEventListener('hidden.bs.modal', () => {
                this.clearSearch();
            });
        }
    }
    
    handleSearch(event) {
        const query = event.target.value.trim();
        this.currentQuery = query;
        
        if (query.length < 2) {
            this.clearResults();
            return;
        }
        
        // Debounce search
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 300);
    }
    
    handleKeydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const firstResult = this.searchResults?.querySelector('.search-result-item');
            if (firstResult) {
                firstResult.click();
            }
        } else if (event.key === 'Escape') {
            this.closeSearch();
        }
    }
    
    performSearch(query) {
        const results = this.searchInData(query);
        this.displayResults(results, query);
        
        // Save to search history
        this.addToSearchHistory(query);
    }
    
    searchInData(query) {
        const currentLang = getCurrentLanguage();
        const queryLower = query.toLowerCase();
        const results = [];
        
        // Search in pages
        searchData.pages.forEach(page => {
            const title = page.title[currentLang] || page.title.en;
            const content = page.content[currentLang] || page.content.en;
            const category = page.category[currentLang] || page.category.en;
            
            let score = 0;
            
            // Title match (highest priority)
            if (title.toLowerCase().includes(queryLower)) {
                score += 10;
            }
            
            // Content match
            if (content.toLowerCase().includes(queryLower)) {
                score += 5;
            }
            
            // Category match
            if (category.toLowerCase().includes(queryLower)) {
                score += 3;
            }
            
            if (score > 0) {
                results.push({
                    ...page,
                    score,
                    type: 'page',
                    displayTitle: title,
                    displayCategory: category
                });
            }
        });
        
        // Search in news
        searchData.news.forEach(newsItem => {
            const title = newsItem.title[currentLang] || newsItem.title.en;
            const content = newsItem.content[currentLang] || newsItem.content.en;
            const category = newsItem.category[currentLang] || newsItem.category.en;
            
            let score = 0;
            
            if (title.toLowerCase().includes(queryLower)) {
                score += 8;
            }
            
            if (content.toLowerCase().includes(queryLower)) {
                score += 4;
            }
            
            if (score > 0) {
                results.push({
                    ...newsItem,
                    score,
                    type: 'news',
                    displayTitle: title,
                    displayCategory: category
                });
            }
        });
        
        // Sort by score (highest first)
        return results.sort((a, b) => b.score - a.score).slice(0, 10);
    }
    
    displayResults(results, query) {
        if (!this.searchResults) return;
        
        if (results.length === 0) {
            this.displayNoResults(query);
            return;
        }
        
        const currentLang = getCurrentLanguage();
        const resultsHTML = results.map(result => `
            <div class="search-result-item p-3 border-bottom" onclick="searchEngine.selectResult('${result.url}', ${result.id || 'null'})">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <h6 class="mb-1 search-result-title">${this.highlightQuery(result.displayTitle, query)}</h6>
                        <div class="d-flex align-items-center mb-1">
                            <span class="badge bg-light text-dark me-2">${result.displayCategory}</span>
                            <small class="text-muted">${result.type === 'page' ? (currentLang === 'ar' ? 'صفحة' : 'Page') : (currentLang === 'ar' ? 'خبر' : 'News')}</small>
                        </div>
                        <small class="text-muted search-result-content">${this.highlightQuery(this.truncateText(result.content[currentLang] || result.content.en, 100), query)}</small>
                    </div>
                    <i class="bi bi-arrow-right text-primary ms-2"></i>
                </div>
            </div>
        `).join('');
        
        this.searchResults.innerHTML = `
            <div class="search-results">
                <div class="search-results-header p-3 bg-light">
                    <small class="text-muted">
                        ${results.length} ${currentLang === 'ar' ? 'نتيجة لـ' : 'results for'} "${query}"
                    </small>
                </div>
                ${resultsHTML}
            </div>
        `;
    }
    
    displayNoResults(query) {
        const currentLang = getCurrentLanguage();
        this.searchResults.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-search fs-1 text-muted mb-3"></i>
                <h5 class="text-muted mb-2">
                    ${currentLang === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}
                </h5>
                <p class="text-muted">
                    ${currentLang === 'ar' ? `لم يتم العثور على نتائج لـ "${query}"` : `No results found for "${query}"`}
                </p>
                ${this.searchHistory.length > 0 ? this.displaySearchHistory() : ''}
            </div>
        `;
    }
    
    displaySearchHistory() {
        const currentLang = getCurrentLanguage();
        const historyItems = this.searchHistory.slice(0, 5).map(term => `
            <button class="btn btn-outline-secondary btn-sm me-2 mb-2" onclick="searchEngine.searchInput.value='${term}'; searchEngine.performSearch('${term}')">
                ${term}
            </button>
        `).join('');
        
        return `
            <div class="mt-4">
                <h6 class="text-muted mb-3">
                    ${currentLang === 'ar' ? 'عمليات البحث الأخيرة' : 'Recent searches'}
                </h6>
                ${historyItems}
            </div>
        `;
    }
    
    highlightQuery(text, query) {
        if (!query) return text;
        
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
    
    selectResult(url, id = null) {
        // Add to search history
        if (this.currentQuery) {
            this.addToSearchHistory(this.currentQuery);
        }
        
        // Close search modal
        this.closeSearch();
        
        // Navigate to result
        if (id) {
            navigateToPage(url, id);
        } else {
            navigateToPage(url);
        }
    }
    
    clearResults() {
        if (this.searchResults) {
            this.searchResults.innerHTML = '';
        }
    }
    
    clearSearch() {
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        this.clearResults();
        this.currentQuery = '';
    }
    
    closeSearch() {
        if (this.searchModal) {
            this.searchModal.hide();
        }
    }
    
    addToSearchHistory(query) {
        if (!query || query.length < 2) return;
        
        // Remove if already exists
        this.searchHistory = this.searchHistory.filter(term => term !== query);
        
        // Add to beginning
        this.searchHistory.unshift(query);
        
        // Keep only last 10 searches
        this.searchHistory = this.searchHistory.slice(0, 10);
        
        // Save to localStorage
        this.saveSearchHistory();
    }
    
    loadSearchHistory() {
        try {
            const history = localStorage.getItem('nibras-search-history');
            return history ? JSON.parse(history) : [];
        } catch (e) {
            return [];
        }
    }
    
    saveSearchHistory() {
        try {
            localStorage.setItem('nibras-search-history', JSON.stringify(this.searchHistory));
        } catch (e) {
            console.error('Failed to save search history:', e);
        }
    }
}

// Initialize search engine
let searchEngine;

document.addEventListener('DOMContentLoaded', function() {
    searchEngine = new SearchEngine();
});

// Global search functions
function toggleSearch() {
    if (searchEngine && searchEngine.searchModal) {
        searchEngine.searchModal.show();
    }
}

function handleSearch(event) {
    if (searchEngine) {
        searchEngine.handleSearch(event);
    }
}

// Export for global access
window.toggleSearch = toggleSearch;
window.handleSearch = handleSearch;
window.searchEngine = searchEngine;