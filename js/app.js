const u = me();
if (!u.username) location = "login.html";
const menu = document.querySelector(".side nav");
let admin = u.role === "admin";
let links = admin
  ? [
      ["dashboard.html", "🏠 Dashboard"],
      ["buku.html", "📚 Buku"],
      ["anggota.html", "👥 Anggota"],
      ["peminjaman.html", "📖 Peminjaman"],
      ["pengembalian.html", "🔄 Pengembalian"],
      ["denda.html", "💰 Denda"],
      ["laporan.html", "📊 Laporan"],
      ["notifikasi.html", "🔔 Notifikasi"],
      ["pengaturan.html", "⚙️ Pengaturan"],
    ]
  : [
      ["dashboard.html", "🏠 Dashboard"],
      ["buku.html", "📚 Koleksi"],
      ["peminjaman.html", "📖 Peminjaman"],
      ["favorit.html", "❤️ Favorit"],
      ["notifikasi.html", "🔔 Notifikasi"],
      ["profil.html", "👤 Profil"],
      ["pengaturan.html", "⚙️ Pengaturan"],
    ];
menu.innerHTML = links.map((x) => `<a href="${x[0]}">${x[1]}</a>`).join("");
document.querySelector(".avatar").textContent = u.username[0].toUpperCase();
