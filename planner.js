// Fungsi Pindah Tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Fungsi Visa Checker
function checkVisa() {
    const country = document.getElementById('countrySelect').value;
    const resultBox = document.getElementById('visaResult');
    
    let message = "";
    
    switch(country) {
        case 'domestic':
            message = "<strong>✅ Bebas Masuk:</strong> Cukup tunjukkan KTP/E-Ticket. Tidak perlu paspor.";
            break;
        case 'free':
            message = "<strong>✅ Bebas Visa:</strong> Berlaku hingga 30 hari (Wisata). Tunjukkan tiket pulang.";
            break;
        case 'voa':
            message = "<strong>📝 Visa on Arrival (VoA):</strong> Biaya IDR 500.000. Berlaku 30 hari, bisa diperpanjang 1x.";
            break;
        case 'required':
            message = "<strong>📋 Wajib Visa:</strong> Anda harus mengajukan E-Visa sebelum keberangkatan melalui website imigrasi.";
            break;
        default:
            message = "Silakan pilih negara untuk melihat informasi.";
    }
    
    resultBox.innerHTML = message;
    resultBox.style.animation = "fadeIn 0.3s ease";
}// Fungsi Pindah Tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Fungsi Visa Checker
function checkVisa() {
    const country = document.getElementById('countrySelect').value;
    const resultBox = document.getElementById('visaResult');
    
    let message = "";
    
    switch(country) {
        case 'domestic':
            message = "<strong>✅ Bebas Masuk:</strong> Cukup tunjukkan KTP/E-Ticket. Tidak perlu paspor.";
            break;
        case 'free':
            message = "<strong>✅ Bebas Visa:</strong> Berlaku hingga 30 hari (Wisata). Tunjukkan tiket pulang.";
            break;
        case 'voa':
            message = "<strong>📝 Visa on Arrival (VoA):</strong> Biaya IDR 500.000. Berlaku 30 hari, bisa diperpanjang 1x.";
            break;
        case 'required':
            message = "<strong>📋 Wajib Visa:</strong> Anda harus mengajukan E-Visa sebelum keberangkatan melalui website imigrasi.";
            break;
        default:
            message = "Silakan pilih negara untuk melihat informasi.";
    }
    
    resultBox.innerHTML = message;
    resultBox.style.animation = "fadeIn 0.3s ease";
}

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