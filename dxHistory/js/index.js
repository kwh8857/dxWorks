const arrows = document.querySelectorAll(".history-menu");

function openHistoryCard(infoWrapper, arrow, menu) {
  console.log(arrow);
  arrow.classList.add("active-arrow");
  infoWrapper.classList.add("show");
  menu.classList.add("hide-border");
}

function closeHistoryCard(infoWrapper, arrow, menu) {
  console.log(arrow);
  arrow.classList.remove("active-arrow");
  infoWrapper.classList.remove("show");
  menu.classList.remove("hide-border");
}

function handleArrowClicked(e) {
  const clickedCard = e.currentTarget.closest(".history-card");
  const clickedArrow = clickedCard.querySelector(".arrow"); // ✅ arrow 따로 찾기
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
