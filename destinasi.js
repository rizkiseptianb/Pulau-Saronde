// Inisialisasi Peta (Koordinat Pulau Saronde)
const map = L.map('map').setView([0.9416, 122.8667], 11);

// Menambahkan Layer Peta (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Data Lokasi Destinasi
const locations = [
    {
        name: "Pulau Saronde",
        coords: [0.9416, 122.8667],
        desc: "Pusat resort mewah dan pasir putih kristal.",
        link: "#"
    },
    {
        name: "Pulau Lampu",
        coords: [0.9460, 122.8750],
        desc: "Terkenal dengan mercusuar bersejarah dan spot snorkeling.",
        link: "#"
    },
    {
        name: "Pantai Dunu",
        coords: [0.9133, 122.7500],
        desc: "Pantai dengan tebing indah, gerbang menuju laut utara.",
        link: "#"
    },
    {
        name: "Pelabuhan Kwandang",
        coords: [0.8447, 122.9150],
        desc: "Titik keberangkatan utama menuju pulau-pulau.",
        link: "#"
    }
];

// Menambahkan Marker secara dinamis
locations.forEach(loc => {
    const marker = L.marker(loc.coords).addTo(map);
    
    const popupContent = `
        <div style="font-family: 'Poppins', sans-serif; padding: 5px;">
            <h4 style="margin: 0 0 5px 0; color: #0077b6;">${loc.name}</h4>
            <p style="font-size: 12px; margin-bottom: 10px;">${loc.desc}</p>
            <a href="${loc.link}" style="background: #00b4d8; color: white; padding: 5px 10px; border-radius: 5px; text-decoration: none; font-size: 11px;">Lihat Detail</a>
        </div>
    `;
    
    marker.bindPopup(popupContent);
});

// Efek sederhana saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("Destinasi page loaded - Map ready.");
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