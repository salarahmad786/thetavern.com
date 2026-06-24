document.addEventListener("DOMContentLoaded", () => {
  // Target target image inside the yellow card
  const animatedImage = document.getElementById("animateImage");

  // Jab page load hoga, tab 300ms ke delay ke baad image slide hokar right se fade-in hogi
  setTimeout(() => {
    if (animatedImage) {
      animatedImage.classList.add("fade-in-right");
    }
  }, 300);
});