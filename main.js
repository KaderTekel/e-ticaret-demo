// KaderTekel Demo JS

// Ürün sepete ekle butonları için örnek işlev (demo amaçlı çalışmaz)
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            alert('Bu sadece bir demo. Gerçek sepete ekleme işlemi yapılmaz.');
        });
    });
});

// Mobil menü aç/kapat (eğer bootstrap dışında ek animasyon gerekiyorsa)
const toggle = document.querySelector('.navbar-toggler');
if (toggle) {
    toggle.addEventListener('click', function () {
        const nav = document.getElementById('navbarNav');
        nav.classList.toggle('show');
    });
}

// Scroll ile yukarı butonu eklenebilir (opsiyonel)
// window.addEventListener('scroll', function () {
//     const scrollBtn = document.getElementById('scrollTop');
//     if (window.scrollY > 200) {
//         scrollBtn.style.display = 'block';
//     } else {
//         scrollBtn.style.display = 'none';
//     }
// });
