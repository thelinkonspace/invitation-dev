const popup = document.getElementById("popup");
const nextBtn = document.getElementById("nextBtn");

window.addEventListener("load", () => {
  // muncul “pop up” setelah page tampil
  setTimeout(() => {
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");
  }, 120);
});

nextBtn.addEventListener("click", () => {
  // pindah ke halaman lain, misalnya questions.html
  window.location.href = "result.html";
});