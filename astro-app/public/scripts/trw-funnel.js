document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------
     SPACES COUNTER
  ------------------------- */

  let spaces = 312;
  const spacesEl = document.getElementById("spacesLeft");

  setInterval(() => {
    if (spaces > 6) {
      spaces--;
      if (spacesEl) {
        spacesEl.innerText = spaces;
      }
    }
  }, 8000);


  /* -------------------------
     DROPDOWN TOGGLE
  ------------------------- */

  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isHidden = menu.classList.contains("opacity-0");

      if (isHidden) {
        menu.classList.remove("opacity-0", "translate-y-6", "pointer-events-none");
        menu.classList.add("opacity-100", "translate-y-0");
      } else {
        menu.classList.add("opacity-0", "translate-y-6", "pointer-events-none");
        menu.classList.remove("opacity-100", "translate-y-0");
      }
    });
  }


  /* -------------------------
     DYNAMIC DATE
  ------------------------- */

  function formatDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });

    function suffix(d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }

    return `${day}${suffix(day)} ${month}`;
  }

  const dateString = formatDate();

  const d1 = document.getElementById("dynamicDate");
  const d2 = document.getElementById("dynamicDate2");

  if (d1) d1.textContent = dateString;
  if (d2) d2.textContent = dateString;

});