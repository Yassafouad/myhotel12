// ===== Language Toggle Functionality =====
const langToggle = document.getElementById('langToggle');
const currentLangSpan = langToggle.querySelector('.current-lang');
let currentLang = 'en'; // Default language

// Toggle between English and Arabic
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(currentLang);
    updateLangToggleText(currentLang);
});

// Update all text content based on selected language
function updateLanguage(lang) {
    const html = document.documentElement;
    const body = document.body;
    
    // Change direction
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }
    
    // Update all elements with data-en and data-ar attributes
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const text = lang === 'ar' ? element.getAttribute('data-ar') : element.getAttribute('data-en');
        
        // Handle HTML entities
        if (text.includes('&copy;')) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    });
}

// Update language toggle button text
function updateLangToggleText(lang) {
    currentLangSpan.textContent = lang === 'ar' ? 'العربية' : 'English';
}

// ===== Smooth Scroll for Navigation Links =====
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

// ===== Scroll Animation for Sections =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections and cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.hotel-card, .park-card');
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});

// ===== Contact Form Submission =====
// Form removed - contact links only

// ===== Cube Navigation Controls =====
document.addEventListener('DOMContentLoaded', () => {
    const hotelCards = document.querySelectorAll('.hotel-card');
    
    hotelCards.forEach(card => {
        const cube = card.querySelector('.cube');
        const prevBtn = card.querySelector('.cube-prev');
        const nextBtn = card.querySelector('.cube-next');
        const cubeContainer = card.querySelector('.cube-container');
        
        let currentRotation = 0;
        let isAnimating = false;
        
        // Stop auto-rotation on hover
        cubeContainer.addEventListener('mouseenter', () => {
            cube.style.animation = 'none';
        });
        
        // Resume auto-rotation when mouse leaves
        cubeContainer.addEventListener('mouseleave', () => {
            if (!isAnimating) {
                // Reset to current position and restart animation
                cube.style.transform = `rotateY(${currentRotation}deg)`;
                cube.style.animation = 'rotateCube 12s infinite ease-in-out';
            }
        });
        
        // Previous button (rotate left/backward)
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isAnimating) return;
            
            isAnimating = true;
            cube.style.animation = 'none';
            currentRotation -= 90;
            cube.style.transform = `rotateY(${currentRotation}deg)`;
            
            setTimeout(() => {
                isAnimating = false;
            }, 600);
        });
        
        // Next button (rotate right/forward)
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isAnimating) return;
            
            isAnimating = true;
            cube.style.animation = 'none';
            currentRotation += 90;
            cube.style.transform = `rotateY(${currentRotation}deg)`;
            
            setTimeout(() => {
                isAnimating = false;
            }, 600);
        });
        
        // Initialize rotation state
        cube.style.transition = 'transform 0.6s ease-in-out';
    });
});

// ===== Header Shrink on Scroll with Animation =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');

if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== Add Floating Particles Effect =====
function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: ${currentLang === 'ar' ? 'radial-gradient(circle, #FFC107, transparent)' : 'radial-gradient(circle, #42A5F5, transparent)'};
        border-radius: 50%;
        pointer-events: none;
        z-index: 100;
        opacity: 0;
        top: 100vh;
        left: ${Math.random() * 100}%;
        animation: float ${5 + Math.random() * 5}s ease-out forwards;
    `;
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Add floating particles periodically
setInterval(createFloatingParticle, 3000);

// ===== Add Floating Animation CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        10% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) scale(1);
        }
    }
    
    .loaded {
        animation: pageLoad 0.6s ease-out;
    }
    
    @keyframes pageLoad {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===== Initialize on Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language to English
    updateLanguage('en');
    
    // Add loaded class for transitions
    document.body.classList.add('loaded');
    
    // Create initial floating particles
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createFloatingParticle(), i * 500);
    }
});

// ===== Handle Window Resize =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate cube sizes or other responsive elements if needed
    }, 250);
});

// ===== Add Hover Ripple Effect to Cards =====
document.querySelectorAll('.hotel-card, .park-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(25, 118, 210, 0.1);
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1;
            animation: ripple 0.6s ease-out;
        `;
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            width: 400px;
            height: 400px;
        }
    }
`;
document.head.appendChild(rippleStyle);

