// Fungsi Pencarian Sederhana
function handleSearch() {
    const query = document.getElementById('searchInput').value;
    const category = document.getElementById('categorySelect').value;
    const date = document.getElementById('dateInput').value;

    if (!query && !category) {
        alert("Silakan masukkan kata kunci atau pilih kategori.");
        return;
    }

    alert(`Mencari: ${query} \nKategori: ${category} \nTanggal: ${date || 'Belum dipilih'}\n\nFitur ini akan menghubungkan Anda ke database destinasi kami!`);
}

// Efek Scroll Reveal Sederhana
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Smooth Scroll untuk Navigasi Internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi Tab
function showItin(evt, itinId) {
    const panels = document.querySelectorAll('.itin-panel');
    const btns = document.querySelectorAll('.tab-btn');

    panels.forEach(p => p.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(itinId).classList.add('active');
    evt.currentTarget.classList.add('active');
    
    // Refresh scroll reveal trigger
    handleReveal();
}

// Scroll Reveal Animation
function handleReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

// Initial call for the active tab
handleReveal();

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

// Function for Scroll Reveal Animation
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

// Simple Filter Function
function filterAccommodations() {
    const filterValue = document.getElementById('typeFilter').value;
    const cards = document.querySelectorAll('.stay-card');

    cards.forEach(card => {
        if (filterValue === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-type') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Initialize reveal
reveal();

// Scroll Reveal Animation Function
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Event Listeners
window.addEventListener("scroll", reveal);

// Initial call to check visibility on load
reveal();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});