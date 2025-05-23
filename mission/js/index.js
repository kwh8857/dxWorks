document.addEventListener("DOMContentLoaded", initMenuToggle);

function initMenuToggle() {
  const arrow = document.querySelector(".arrow");
  const menuLists = document.querySelector(".mb-menu");

  if (!arrow || !menuLists) return;

  setupArrowToggle(arrow, menuLists);
}

function setupArrowToggle(arrow, menuLists) {
  arrow.addEventListener("click", () => toggleMenu(arrow, menuLists));
}

function toggleMenu(arrow, menuLists) {
  arrow.classList.toggle("rotate");
  menuLists.classList.toggle("closed");
}
