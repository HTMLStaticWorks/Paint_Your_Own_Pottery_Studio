document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        return;
    }

    // --- Hero Animation (Immediate) ---
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelectorAll('.hero-content > *');
    
    if (heroSection) {
        gsap.fromTo(heroSection, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, ease: 'power2.out' }
        );
    }

    if (heroContent.length > 0) {
        gsap.fromTo(heroContent,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
        );
    }

    // --- Section Animations (Scroll-based) ---
    const sections = gsap.utils.toArray('.section:not(.hero)');
    sections.forEach(section => {
        // We use a to tween with ScrollTrigger to animate FROM a state we set only when needed
        ScrollTrigger.create({
            trigger: section,
            start: 'top 95%',
            once: true,
            onEnter: () => {
                gsap.fromTo(section, 
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
                );
            }
        });
    });

    // --- Card Hover Effects ---
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // --- Accordion Logic ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            if (!isActive) item.classList.add('active');
        });
    });

    // Refresh ScrollTrigger after loading
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
});
