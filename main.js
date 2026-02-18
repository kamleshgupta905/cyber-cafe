// --- CODE PROTECTION & SECURITY ---
// Prevent common inspection methods (Disable right-click, keyboard shortcuts)
(function protectCode() {
    // Disable Right-Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable Shortcuts
    document.addEventListener('keydown', (e) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (
            e.keyCode === 123 ||
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
            (e.ctrlKey && e.keyCode === 85)
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Console Cheat Prevention
    console.log("%c NeoCyber Hub %c Security Active",
        "background: #d4af37; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px;",
        "background: #111; color: #fff; padding: 4px 8px;");
})();

// --- MOBILE MENU LOGIC ---
const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const burger = document.getElementById('burger-icon');
    const body = document.body;

    if (menu) {
        const isOpen = menu.classList.contains('active');
        if (isOpen) {
            menu.classList.remove('active');
            burger.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            body.style.overflow = ''; // Restore scroll
        } else {
            menu.classList.add('active');
            burger.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            body.style.overflow = 'hidden'; // Lock scroll
        }
    }
};

// --- SCROLL REVEAL & NAVBAR ---
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal-luxe, .reveal-up');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

const handleNavbarScroll = () => {
    const navbar = document.querySelector('.nav-luxe');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.95)";
            navbar.style.height = "70px";
        } else {
            navbar.style.background = "rgba(5, 5, 5, 0.85)";
            navbar.style.height = "80px";
        }
    }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('scroll', handleNavbarScroll);

    // Initial check for elements already in view
    setTimeout(revealOnScroll, 100);

    // Contact form dispatch
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('TRANSMISSION SUCCESSFUL. NODE SYNCED.');
        });
    }

    // Attach Burger Click
    const burgerBtn = document.getElementById('mobile-burger-btn');
    if (burgerBtn) {
        burgerBtn.addEventListener('click', toggleMobileMenu);
    }
});

// Lightbox logic
window.openLightbox = (imgSrc, caption) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightbox.classList.remove('hidden');
        setTimeout(() => lightbox.style.opacity = '1', 10);
    }
};

window.closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.opacity = '0';
        setTimeout(() => lightbox.classList.add('hidden'), 500);
    }
};
