const popup = document.getElementById("popup");
const startBtn = document.getElementById("startBtn");

window.addEventListener("load", () => {
  // muncul "pop up" setelah page tampil
  setTimeout(() => {
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");
  }, 120);
});

startBtn.addEventListener("click", () => {
  // pindah ke halaman lain, misalnya questions.html
  window.location.href = "quiz1.html";
});
