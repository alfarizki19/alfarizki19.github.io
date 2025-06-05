const toggleButton = document.getElementById("buttonMainMenuToggle");
const navMenu = document.getElementById("navcol-2");
const chartButton = document.getElementById("chartButtonMainMenu");

function updateChartButtonVisibility() {
  // Jika lebar layar lebih dari 768px (desktop), tampilkan chart button
  if (window.innerWidth > 768) {
    chartButton.classList.remove("hidden");
  }
}

// Saat tombol toggle ditekan (mobile menu)
toggleButton.addEventListener("click", function () {
  const isActive = navMenu.classList.toggle("active");

  if (isActive) {
    chartButton.classList.add("hidden");
  } else {
    setTimeout(() => {
      chartButton.classList.remove("hidden");
    }, 500);
  }
});

// Jalankan pengecekan saat ukuran layar berubah
window.addEventListener("resize", updateChartButtonVisibility);

// Jalankan juga saat awal halaman dimuat
window.addEventListener("load", updateChartButtonVisibility);