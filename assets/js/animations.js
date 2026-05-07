document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins if any (not needed for simple fades)
    
    // Fade up animation for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Hero content animation
    gsap.from('.hero-content > *', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Card hover effect enhancement
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
