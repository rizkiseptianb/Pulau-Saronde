function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("activity-card");
    if (c == "all") c = "";
    
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        // Sembunyikan dengan animasi
        x[i].style.display = "none";
        
        if (x[i].className.indexOf(c) > -1) {
            addClass(x[i], "show");
            x[i].style.display = "block";
        }
    }

    // Ubah status tombol aktif
    var btns = document.getElementsByClassName("filter-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Inisialisasi awal
document.addEventListener("DOMContentLoaded", function() {
    filterSelection("all");
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