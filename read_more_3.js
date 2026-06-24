document.addEventListener("DOMContentLoaded", () => {
  // Target sidebar card element
  const yellowCard = document.getElementById("sidebarCard");

  // Page initialization ke 250ms ke baad dynamic right fade animation trigger class link hogi
  setTimeout(() => {
    if (yellowCard) {
      yellowCard.classList.add("fade-in-right");
    }
  }, 250);
});