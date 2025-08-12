// Main JavaScript functionality for Nibras Jordan Website

// Global variables
let currentLanguage = 'en';
let isVideoPlaying = true;
let isVideoMuted = true;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    loadNewsData();
    setupAnimations();
});

// Initialize website functionality
function initializeWebsite() {
    // Set initial language
    updateLanguage();
    
    // Initialize video controls
    initializeVideoControls();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Initialize tooltips and popovers
    initializeBootstrapComponents();
}

// Setup event listeners
function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Resize handler
    window.addEventListener('resize', handleResize);
    
    // Search input handler
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

// Handle header scroll effect
function handleHeaderScroll() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Handle window resize
function handleResize() {
    // Update video dimensions if needed
    const video = document.getElementById('hero-video');
    if (video) {
        // Ensure video maintains aspect ratio
        video.style.height = window.innerHeight + 'px';
    }
}

// Initialize video controls
function initializeVideoControls() {
    const video = document.getElementById('hero-video');
    if (video) {
        video.muted = true;
        video.play().catch(e => console.log('Video autoplay failed:', e));
    }
}

// Toggle video play/pause
function toggleVideoPlay() {
    const video = document.getElementById('hero-video');
    const playIcon = document.getElementById('play-icon');
    
    if (video) {
        if (isVideoPlaying) {
            video.pause();
            playIcon.className = 'bi bi-play';
            isVideoPlaying = false;
        } else {
            video.play();
            playIcon.className = 'bi bi-pause';
            isVideoPlaying = true;
        }
    }
}

// Toggle video mute/unmute
function toggleVideoMute() {
    const video = document.getElementById('hero-video');
    const muteIcon = document.getElementById('mute-icon');
    
    if (video) {
        if (isVideoMuted) {
            video.muted = false;
            muteIcon.className = 'bi bi-volume-up';
            isVideoMuted = false;
        } else {
            video.muted = true;
            muteIcon.className = 'bi bi-volume-mute';
            isVideoMuted = true;
        }
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize Bootstrap components
function initializeBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Setup animations
function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Load news data
function loadNewsData() {
    const newsData = [
        {
            id: 1,
            title: "Nibras Jordan Achieves Record Performance in Q3 2024",
            excerpt: "Our power plants delivered exceptional reliability and efficiency, contributing significantly to Jordan's energy security.",
            date: "2024-10-15",
            image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Operations"
        },
        {
            id: 2,
            title: "New Environmental Initiative Launched",
            excerpt: "Nibras Jordan announces comprehensive environmental protection program to reduce carbon footprint.",
            date: "2024-09-28",
            image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Sustainability"
        },
        {
            id: 3,
            title: "Partnership with Local Communities Strengthened",
            excerpt: "New social responsibility programs launched to support education and healthcare in surrounding communities.",
            date: "2024-09-10",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            category: "Community"
        }
    ];
    
    renderNewsGrid(newsData.slice(0, 3)); // Show only first 3 on homepage
}

// Render news grid
function renderNewsGrid(newsItems) {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = newsItems.map(item => `
        <div class="col-lg-4 col-md-6">
            <div class="news-card fade-in-up">
                <div class="news-image">
                    <img src="${item.image}" alt="${item.title}" class="img-fluid">
                    <div class="news-date">${formatDate(item.date)}</div>
                </div>
                <div class="news-content">
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-excerpt">${item.excerpt}</p>
                    <a href="#" class="btn btn-outline-primary btn-sm" onclick="navigateToPage('news-detail', ${item.id})">
                        <span data-en="Read More" data-ar="اقرأ المزيد">Read More</span>
                        <i class="bi bi-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update language for new content
    updateLanguage();
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    
    if (currentLanguage === 'ar') {
        return date.toLocaleDateString('ar-JO', options);
    }
    return date.toLocaleDateString('en-US', options);
}

// Toggle search modal
function toggleSearch() {
    const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
    searchModal.show();
    
    // Focus on search input
    setTimeout(() => {
        document.getElementById('searchInput').focus();
    }, 300);
}

// Handle search
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    // Mock search results
    const mockResults = [
        { title: "About Nibras Jordan", url: "about", type: "Page" },
        { title: "Amman East Power Plant", url: "business-aes-jordan-ipp1", type: "Business" },
        { title: "Levant Power Plant", url: "business-aes-levant-ipp4", type: "Business" },
        { title: "Environmental Protection", url: "sustainability-environment", type: "Sustainability" },
        { title: "Safety First", url: "sustainability-safety", type: "Sustainability" },
        { title: "Careers", url: "careers", type: "Page" }
    ];
    
    const filteredResults = mockResults.filter(result => 
        result.title.toLowerCase().includes(query)
    );
    
    if (filteredResults.length === 0) {
        searchResults.innerHTML = `
            <div class="text-center py-4">
                <i class="bi bi-search fs-1 text-muted mb-3"></i>
                <p class="text-muted" data-en="No results found for '${query}'" data-ar="لم يتم العثور على نتائج لـ '${query}'">No results found for '${query}'</p>
            </div>
        `;
    } else {
        searchResults.innerHTML = `
            <div class="search-results">
                ${filteredResults.map(result => `
                    <div class="search-result-item p-3 border-bottom" onclick="navigateToPage('${result.url}')">
                        <div class="d-flex justify-content-between align-items-start">
                            <div>
                                <h6 class="mb-1">${result.title}</h6>
                                <small class="text-muted">${result.type}</small>
                            </div>
                            <i class="bi bi-arrow-right text-primary"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Update language for search results
    updateLanguage();
}

// Utility function to show loading state
function showLoading(element) {
    if (element) {
        element.classList.add('loading');
        element.innerHTML += '<div class="spinner-border spinner-border-sm ms-2" role="status"></div>';
    }
}

// Utility function to hide loading state
function hideLoading(element) {
    if (element) {
        element.classList.remove('loading');
        const spinner = element.querySelector('.spinner-border');
        if (spinner) {
            spinner.remove();
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You could implement user-friendly error reporting here
});

// Performance monitoring
window.addEventListener('load', function() {
    // Log page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});

// Export functions for global access
window.toggleVideoPlay = toggleVideoPlay;
window.toggleVideoMute = toggleVideoMute;
window.toggleSearch = toggleSearch;