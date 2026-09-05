document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let u = user.value,
    r = role.value;
  if ((u === "admin" || u === "anggota") && pass.value === "12345") {
    localStorage.user = JSON.stringify({ username: u, role: r });
    location = "dashboard.html";
  } else msg.textContent = "Username atau password salah.";
});
