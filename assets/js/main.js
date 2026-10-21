/**
 * main.js - Logika Interaksi Portofolio
 * Fokus: Modular, bebas library berat, dan performa tinggi.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
});

/**
 * Mengelola interaksi buka-tutup menu mobile (Hamburger Menu)
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  // Toggle buka/tutup menu saat tombol hamburger diklik
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Otomatis tutup menu mobile jika salah satu link navigasi diklik
  const navLinks = mobileMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}