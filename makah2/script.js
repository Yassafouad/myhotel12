// ============================================
// Language Switching Functionality
// ============================================

let currentLanguage = 'ar';

// Language translations object
const translations = {
    ar: {
        // Navigation
        'landmarks': 'المعالم',
        'map': 'الخريطة',
        'contact': 'التواصل',
        
        // Hero
        'discover-makkah': 'اكتشف مكة',
        'heart-of-islam': 'قبلة المسلمين',
        'hero-description': 'رحلة عبر التاريخ والحضارة في أقدس بقاع الأرض.',
        'explore-landmarks': 'استكشف المعالم',
        
        // Sections
        'religious-landmarks': 'المعالم الدينية',
        'cultural-sites': 'المعالم الثقافية والتاريخية',
        'museums': 'المعارض والمتاحف',
        'pilgrimage': 'جبل الرحمة والحج والعمرة',
        'landmarks-map': 'خريطة المعالم',
        'contact-us': 'تواصل معنا',
        
        // Cultural Subtitle
        'cultural-subtitle': 'مواقع تاريخية ذات أهمية دينية وثقافية',
        'religious-subtitle': 'اكتشف الأماكن المقدسة والعريقة',
        'museums-subtitle': 'استكشف التراث الإسلامي والحضارة',
        'map-subtitle': 'استكشف مواقع المعالم الرئيسية في مكة',
        'contact-subtitle': 'نحن هنا للإجابة على استفساراتك',
        
        // Form
        'name': 'الاسم',
        'email': 'البريد الإلكتروني',
        'message': 'الرسالة',
        'send': 'إرسال',
        
        // Footer
        'copyright': '© 2025 جميع الحقوق محفوظة.'
    },
    en: {
        // Navigation
        'landmarks': 'Landmarks',
        'map': 'Map',
        'contact': 'Contact',
        
        // Hero
        'discover-makkah': 'Discover Makkah',
        'heart-of-islam': 'The Heart of Islam',
        'hero-description': 'A journey through history and faith in the holiest place on Earth.',
        'explore-landmarks': 'Explore Landmarks',
        
        // Sections
        'religious-landmarks': 'Religious Landmarks',
        'cultural-sites': 'Cultural & Historical Sites',
        'museums': 'Museums & Exhibitions',
        'pilgrimage': 'Mount of Mercy & Pilgrimage',
        'landmarks-map': 'Landmarks Map',
        'contact-us': 'Contact Us',
        
        // Cultural Subtitle
        'cultural-subtitle': 'Historical sites of religious and cultural importance',
        'religious-subtitle': 'Discover sacred and historic places',
        'museums-subtitle': 'Explore Islamic heritage and civilization',
        'map-subtitle': 'Explore the locations of major landmarks in Makkah',
        'contact-subtitle': 'We\'re here to answer your inquiries',
        
        // Form
        'name': 'Name',
        'email': 'Email',
        'message': 'Message',
        'send': 'Send',
        
        // Footer
        'copyright': '© 2025 All Rights Reserved.'
    }
};

// Get text content from data attributes
function getTextFromElement(element) {
    if (element.hasAttribute('data-ar') && element.hasAttribute('data-en')) {
        return {
            ar: element.getAttribute('data-ar'),
            en: element.getAttribute('data-en')
        };
    }
    return null;
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Toggle document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Toggle body classes
    document.body.classList.remove('rtl', 'ltr');
    document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with data-ar and data-en attributes
    const elementsWithTranslations = document.querySelectorAll('[data-ar][data-en]');
    elementsWithTranslations.forEach(element => {
        const text = getTextFromElement(element);
        if (text) {
            element.textContent = lang === 'ar' ? text.ar : text.en;
        }
    });
    
    // Update language toggle buttons
    const langArs = document.querySelectorAll('.lang-ar');
    const langEns = document.querySelectorAll('.lang-en');
    langArs.forEach(langAr => langAr.classList.toggle('active', lang === 'ar'));
    langEns.forEach(langEn => langEn.classList.toggle('active', lang === 'en'));
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on load
function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
    changeLanguage(savedLang);
}

// Language toggle button event - initialized in DOMContentLoaded
let langToggle, menuToggle, navMenu;

// ============================================
// Smooth Scrolling
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#' || targetId === '') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Header Scroll Effect
// ============================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe landmark cards
const landmarkCards = document.querySelectorAll('.landmark-card');
landmarkCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert(currentLanguage === 'ar' 
                ? 'الرجاء填写 جميع الحقول' 
                : 'Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert(currentLanguage === 'ar' 
                ? 'الرجاء إدخال بريد إلكتروني صحيح' 
                : 'Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert(currentLanguage === 'ar' 
            ? 'شكراً لك! تم إرسال رسالتك بنجاح.' 
            : 'Thank you! Your message has been sent successfully.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// Map Interaction (Optional Enhancement)
// ============================================

// This section can be enhanced to add custom map markers
// For now, the Google Maps embed is already in the HTML

// ============================================
// Initialize on Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    initializeLanguage();
    
    // Initialize language toggle
    langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
            changeLanguage(newLang);
        });
    }
    
    // Initialize desktop language toggle
    const langToggleDesktop = document.getElementById('langToggleDesktop');
    if (langToggleDesktop) {
        langToggleDesktop.addEventListener('click', () => {
            const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
            changeLanguage(newLang);
        });
    }
    
    // Initialize mobile menu
    menuToggle = document.getElementById('menuToggle');
    navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    console.log('Makkah Landmarks Website loaded successfully!');
});

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// Hero Statistics Counter
// ============================================

// Animate statistics numbers
function animateStatistics() {
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const endValue = parseFloat(stat.getAttribute('data-end'));
                const duration = 2000; // 2 seconds
                const stepTime = 50;
                const steps = duration / stepTime;
                const stepValue = endValue / steps;
                let currentValue = 0;
                
                const timer = setInterval(() => {
                    currentValue += stepValue;
                    if (currentValue >= endValue) {
                        currentValue = endValue;
                        clearInterval(timer);
                    }
                    
                    // Format the number
                    if (endValue % 1 !== 0) { // If decimal number
                        stat.textContent = currentValue.toFixed(1) + 'M';
                    } else {
                        stat.textContent = Math.floor(currentValue).toLocaleString();
                    }
                }, stepTime);
                
                observer.unobserve(stat);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

// ============================================
// Additional Features
// ============================================

// Add floating action button for back to top
function createBackToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'back-to-top';
    btn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
        color: #1E3A8A;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        border: none;
    `;
    
    document.body.appendChild(btn);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 300) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    }, 200));
    
    // Scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px)';
        btn.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
}

// Initialize additional features
createBackToTopButton();
animateStatistics();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Set initial opacity
document.body.style.opacity = '0';

