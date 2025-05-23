const arrows = document.querySelectorAll(".arrow");

function openHistoryCard(infoWrapper, arrow, menu) {
  arrow.classList.add("active-arrow");
  infoWrapper.classList.add("show");
  menu.classList.add("hide-border");
}

function closeHistoryCard(infoWrapper, arrow, menu) {
  arrow.classList.remove("active-arrow");
  infoWrapper.classList.remove("show");
  menu.classList.remove("hide-border");
}

function handleArrowClicked(e) {
  const clickedArrow = e.currentTarget;
  const clickedCard = clickedArrow.closest(".history-card");
  const clickedInfoWrapper = clickedCard.querySelector(".history-info-wrapper");
  const clickedMenu = clickedCard.querySelector(".history-menu");

  const isOpen = clickedInfoWrapper.classList.contains("show");

  document.querySelectorAll(".history-card").forEach((card) => {
    const arrow = card.querySelector(".arrow");
    const infoWrapper = card.querySelector(".history-info-wrapper");
    const menu = card.querySelector(".history-menu");
    closeHistoryCard(infoWrapper, arrow, menu);
  });

  if (!isOpen) {
    openHistoryCard(clickedInfoWrapper, clickedArrow, clickedMenu);
  }
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", handleArrowClicked);
});


document.addEventListener("DOMContentLoaded", initMenuToggle);

function initMenuToggle() {
  const arrow = document.querySelector(".arrow");
  const menuLists = document.querySelector(".menu-lists");

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
