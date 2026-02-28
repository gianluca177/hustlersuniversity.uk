/* TRW Funnel Enhancement Script */

document.addEventListener("DOMContentLoaded", () => {

  const today = new Date();
  const options = { month: 'long', day: 'numeric' };

  const currentDate = document.getElementById("currentDate");
  const priceDate = document.getElementById("priceDate");

  if (currentDate)
    currentDate.innerText = today.toLocaleDateString('en-US', options);

  if (priceDate)
    priceDate.innerText = today.toLocaleDateString('en-US', options);

  // Countdown to midnight
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  function updateCountdown() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return;

    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Scarcity Logic
  let spaces = 312;
  const spacesEl = document.getElementById("spacesLeft");
  const progressBar = document.getElementById("progressBar");

  setInterval(() => {
    if (spaces > 295) {
      spaces--;
      if (spacesEl) spacesEl.innerText = spaces;

      const percent = (spaces / 312) * 100;
      if (progressBar)
        progressBar.style.width = percent + "%";
    }
  }, 9000);

  // Dropdown
  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

});