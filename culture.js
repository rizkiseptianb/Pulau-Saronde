// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger on load
reveal();

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