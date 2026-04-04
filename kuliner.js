// Filter Tempat Makan
function filterPlaces(category) {
    const cards = document.querySelectorAll('.place-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Filter cards with animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            if (category === 'all' || card.classList.contains(category)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        }, 300);
    });
}

// Simple Scroll Animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            sec.style.opacity = '1';
        }
    });
});

const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle Menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Mencegah scroll saat menu terbuka
    document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : 'auto';
});

// Tutup menu jika salah satu link diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});