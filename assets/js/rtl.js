document.addEventListener('DOMContentLoaded', () => {
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    const html = document.documentElement;

    // Check for saved preference
    const isRTL = localStorage.getItem('rtl') === 'true';
    if (isRTL) {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    }

    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir');
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            
            html.setAttribute('dir', newDir);
            
            if (newDir === 'rtl') {
                html.setAttribute('lang', 'ar');
                localStorage.setItem('rtl', 'true');
            } else {
                html.setAttribute('lang', 'en');
                localStorage.setItem('rtl', 'false');
            }
        });
    });
});
