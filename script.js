// ============================================
// TandPay Landing Page — JavaScript
// ============================================

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(other => other.classList.remove('active'));

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation to key elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.problem-card, .step-card, .benefit-col, .trust-feature, .partner-card, .testimonial-card, .pricing-card'
    );

    // Group elements by their parent row to stagger them correctly
    const rows = new Map();
    animateElements.forEach(el => {
        const parent = el.parentElement;
        if (!rows.has(parent)) {
            rows.set(parent, []);
        }
        rows.get(parent).push(el);
    });

    rows.forEach(children => {
        children.forEach((el, index) => {
            el.classList.add('reveal-up');
            // Stagger delay within the same row: 0s, 0.15s, 0.3s
            el.style.transitionDelay = `${index * 0.15}s`;
            observer.observe(el);
        });
    });

    // Add hover-lift to interactive cards
    document.querySelectorAll('.problem-card, .trust-feature, .benefit-col, .partner-card, .testimonial-card').forEach(el => {
        el.classList.add('hover-lift');
    });
});

// ============================================
// Language Switcher (EN / Kinyarwanda)
// ============================================

function setLanguage(lang) {
    if (!translations || !translations[lang]) return;

    const t = translations[lang];

    // Update all elements with data-i18n (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update all elements with data-i18n-html (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'rw' ? 'rw' : 'en';

    // Update active state on all language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Save preference
    localStorage.setItem('tandpay-lang', lang);
}

// Language switcher click handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Load saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('tandpay-lang');
    if (saved && saved !== 'en') {
        setLanguage(saved);
    }
});
