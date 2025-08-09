// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const backToTopBtn = document.getElementById('backToTop');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

// Navigation functionality
function showSection(targetId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Add active class to corresponding nav link
    const activeLink = document.querySelector(`[data-section="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top of main content
    document.querySelector('.main-content').scrollTop = 0;
    window.scrollTo(0, 0);
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active section
    showSection('about');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Back to top functionality
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Mobile menu functionality
    createMobileMenuToggle();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Smooth animations on scroll
    observeElements();
});

// Mobile menu functions
function createMobileMenuToggle() {
    // Create mobile menu toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
    `;
    mobileToggle.setAttribute('aria-label', 'Toggle menu');
    document.body.appendChild(mobileToggle);
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    // Add event listeners
    mobileToggle.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    sidebar.classList.toggle('open');
    document.querySelector('.sidebar-overlay').classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
    sidebar.classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Intersection Observer for animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.stat-card, .skill-category, .timeline-item, .project-card, .education-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Navigate with arrow keys
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const currentActive = document.querySelector('.nav-link.active');
        const allNavLinks = Array.from(navLinks);
        const currentIndex = allNavLinks.indexOf(currentActive);
        
        let nextIndex;
        if (e.key === 'ArrowUp') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : allNavLinks.length - 1;
        } else {
            nextIndex = currentIndex < allNavLinks.length - 1 ? currentIndex + 1 : 0;
        }
        
        const nextLink = allNavLinks[nextIndex];
        if (nextLink) {
            const targetSection = nextLink.getAttribute('data-section');
            showSection(targetSection);
        }
        
        e.preventDefault();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Performance optimization
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

// Debounced scroll handler
const debouncedScrollHandler = debounce(function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        // Add any critical images here
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadCriticalResources();

// Error handling for missing elements
function handleMissingElements() {
    if (!backToTopBtn) {
        console.warn('Back to top button not found');
    }
    
    if (navLinks.length === 0) {
        console.warn('Navigation links not found');
    }
    
    if (sections.length === 0) {
        console.warn('Sections not found');
    }
}

// Initialize error handling
handleMissingElements();

// Analytics tracking (placeholder for future implementation)
function trackPageView(sectionName) {
    // Placeholder for analytics tracking
    console.log(`Page view: ${sectionName}`);
}

// Track initial page load
trackPageView('about');

// Track section changes
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const sectionName = this.getAttribute('data-section');
        trackPageView(sectionName);
    });
});

