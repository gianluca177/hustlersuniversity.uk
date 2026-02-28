document.addEventListener("DOMContentLoaded", () => {

  let spaces = 312;
  const el = document.getElementById("spacesLeft");

  setInterval(() => {
    if (spaces > 6) {
      spaces--;
      if (el) el.innerText = spaces;
    }
  }, 8000);

  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");

  btn.addEventListener("click", () => {
    if (menu.classList.contains("opacity-0")) {
      menu.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      menu.classList.add("opacity-100", "translate-y-0");
    } else {
      menu.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      menu.classList.remove("opacity-100", "translate-y-0");
    }
  });

});