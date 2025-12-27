const dots = document.getElementById("dots");
let count = 1;

setInterval(() => {
  dots.textContent = ".".repeat(count);
  count = (count % 3) + 1;
}, 400);

setTimeout(() => {
  window.location.href = "home.html"; // ganti dengan tujuanmu
}, 5000);