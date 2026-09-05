const books = JSON.parse(localStorage.books || "null") || [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    cat: "Novel",
    publisher: "Bentang Pustaka",
    year: 2005,
    isbn: "9789793062792",
    stock: 5,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    cat: "Sastra",
    publisher: "Hasta Mitra",
    year: 1980,
    isbn: "9789799731233",
    stock: 3,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Belajar JavaScript Modern",
    author: "Andi Setiawan",
    cat: "Programming",
    publisher: "Informatika",
    year: 2024,
    isbn: "9786237131670",
    stock: 7,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Algoritma Pemrograman",
    author: "Rosa A.S.",
    cat: "Programming",
    publisher: "Modula",
    year: 2022,
    isbn: "9786028758642",
    stock: 4,
    rating: 4.8,
  },
  {
    id: 5,
    title: "Pemrograman Web Dasar",
    author: "Budi Raharjo",
    cat: "Programming",
    publisher: "Informatika",
    year: 2023,
    isbn: "9786237131984",
    stock: 6,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Basis Data untuk Pemula",
    author: "Fathansyah",
    cat: "Database",
    publisher: "Informatika",
    year: 2021,
    isbn: "9786021514580",
    stock: 5,
    rating: 4.7,
  },
  {
    id: 7,
    title: "Dasar-Dasar UI/UX",
    author: "Dian Pratiwi",
    cat: "Design",
    publisher: "Elex Media",
    year: 2024,
    isbn: "9786230012345",
    stock: 4,
    rating: 4.5,
  },
  {
    id: 8,
    title: "Atomic Habits",
    author: "James Clear",
    cat: "Pengembangan Diri",
    publisher: "Gramedia",
    year: 2019,
    isbn: "9786020633176",
    stock: 8,
    rating: 4.9,
  },
  {
    id: 9,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    cat: "Pengembangan Diri",
    publisher: "Kompas",
    year: 2018,
    isbn: "9786024125189",
    stock: 5,
    rating: 4.8,
  },
  {
    id: 10,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    cat: "Novel",
    publisher: "Gramedia",
    year: 2009,
    isbn: "9789792269061",
    stock: 4,
    rating: 4.7,
  },
  {
    id: 11,
    title: "Pulang",
    author: "Tere Liye",
    cat: "Novel",
    publisher: "Republika",
    year: 2015,
    isbn: "9786020822129",
    stock: 6,
    rating: 4.8,
  },
  {
    id: 12,
    title: "Clean Code",
    author: "Robert C. Martin",
    cat: "Programming",
    publisher: "Prentice Hall",
    year: 2008,
    isbn: "9780132350884",
    stock: 2,
    rating: 4.9,
  },
  {
    id: 13,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    cat: "Programming",
    publisher: "Addison-Wesley",
    year: 2019,
    isbn: "9780135957059",
    stock: 3,
    rating: 4.9,
  },
  {
    id: 14,
    title: "Ensiklopedia Sains",
    author: "Tim Edukasi",
    cat: "Sains",
    publisher: "Bintang Pustaka",
    year: 2023,
    isbn: "9786234567890",
    stock: 5,
    rating: 4.6,
  },
  {
    id: 15,
    title: "Sejarah Indonesia",
    author: "M.C. Ricklefs",
    cat: "Sejarah",
    publisher: "Serambi",
    year: 2008,
    isbn: "9789791112345",
    stock: 4,
    rating: 4.5,
  },
];
const members = JSON.parse(localStorage.members || "null") || [
  {
    name: "Amario Muzaki Sobirin",
    kelas: "XI RPL 1",
    email: "amario@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Dwiki Faturrahman",
    kelas: "XI RPL 1",
    email: "dwiki@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Nadia Azalia",
    kelas: "XI RPL 1",
    email: "nadia@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Rafa Ramdani",
    kelas: "XI RPL 1",
    email: "rafa@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Randy Muharram",
    kelas: "XI RPL 1",
    email: "randy@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Alya Putri",
    kelas: "X RPL 2",
    email: "alya@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Fajar Maulana",
    kelas: "X RPL 2",
    email: "fajar@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Siti Aulia",
    kelas: "XI DKV 1",
    email: "siti@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Rizky Pratama",
    kelas: "XI TKJ 1",
    email: "rizky@pustakaku.local",
    status: "Aktif",
  },
  {
    name: "Nabila Zahra",
    kelas: "X PPLG 1",
    email: "nabila@pustakaku.local",
    status: "Aktif",
  },
];
const loans = JSON.parse(localStorage.loans || "null") || [
  {
    id: 101,
    member: "Amario Muzaki Sobirin",
    book: "Clean Code",
    borrow: "2026-08-20",
    due: "2026-09-03",
    status: "Terlambat",
  },
  {
    id: 102,
    member: "Dwiki Faturrahman",
    book: "Belajar JavaScript Modern",
    borrow: "2026-08-27",
    due: "2026-09-10",
    status: "Dipinjam",
  },
  {
    id: 103,
    member: "Nadia Azalia",
    book: "Laskar Pelangi",
    borrow: "2026-08-25",
    due: "2026-09-08",
    status: "Dipinjam",
  },
  {
    id: 104,
    member: "Rafa Ramdani",
    book: "Atomic Habits",
    borrow: "2026-08-18",
    due: "2026-09-01",
    status: "Terlambat",
  },
  {
    id: 105,
    member: "Randy Muharram",
    book: "Algoritma Pemrograman",
    borrow: "2026-08-30",
    due: "2026-09-13",
    status: "Dipinjam",
  },
  {
    id: 106,
    member: "Alya Putri",
    book: "Filosofi Teras",
    borrow: "2026-08-10",
    due: "2026-08-24",
    status: "Dikembalikan",
  },
  {
    id: 107,
    member: "Fajar Maulana",
    book: "Pemrograman Web Dasar",
    borrow: "2026-08-29",
    due: "2026-09-12",
    status: "Menunggu",
  },
  {
    id: 108,
    member: "Siti Aulia",
    book: "Bumi Manusia",
    borrow: "2026-08-28",
    due: "2026-09-11",
    status: "Dipinjam",
  },
];
const fines = JSON.parse(localStorage.fines || "null") || [
  {
    id: 1,
    member: "Amario Muzaki Sobirin",
    book: "Clean Code",
    days: 1,
    total: 1000,
    status: "Belum Dibayar",
  },
  {
    id: 2,
    member: "Rafa Ramdani",
    book: "Atomic Habits",
    days: 3,
    total: 3000,
    status: "Belum Dibayar",
  },
  {
    id: 3,
    member: "Alya Putri",
    book: "Filosofi Teras",
    days: 0,
    total: 0,
    status: "Lunas",
  },
];
const favorites = JSON.parse(localStorage.favorites || "null") || [1, 3, 8, 12];
const notifications = JSON.parse(localStorage.notifications || "null") || [
  {
    id: 1,
    text: "Batas pengembalian Clean Code sudah lewat 1 hari.",
    type: "warning",
    time: "Hari ini",
  },
  {
    id: 2,
    text: "Peminjaman Belajar JavaScript Modern berhasil diproses.",
    type: "success",
    time: "2 hari lalu",
  },
  {
    id: 3,
    text: "Buku Atomic Habits sedang populer minggu ini.",
    type: "info",
    time: "3 hari lalu",
  },
  {
    id: 4,
    text: "Ada 2 buku baru ditambahkan ke koleksi.",
    type: "info",
    time: "5 hari lalu",
  },
];
function save() {
  localStorage.books = JSON.stringify(books);
  localStorage.members = JSON.stringify(members);
  localStorage.loans = JSON.stringify(loans);
  localStorage.fines = JSON.stringify(fines);
  localStorage.favorites = JSON.stringify(favorites);
  localStorage.notifications = JSON.stringify(notifications);
}
function me() {
  return JSON.parse(localStorage.user || "{}");
}
function out() {
  localStorage.removeItem("user");
  location = "index.html";
}
function rupiah(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}
function bookById(id) {
  return books.find((b) => b.id == id);
}
save();
