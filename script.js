// Untuk tombol "Beli Sekarang" di halaman produk
document.addEventListener("DOMContentLoaded", function () {
  const beliButtons = document.querySelectorAll(".btn");

  beliButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      // Cek jika tombol ini di form kontak, biarkan saja
      if (button.closest("form")) return;

      e.preventDefault();
      alert("Produk berhasil ditambahkan ke keranjang.");
    });
  });

  // Untuk form kontak
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Terima kasih telah menghubungi kami!");
      form.reset(); // reset isi form
    });
  }
});
