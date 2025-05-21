document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".builder-faq-list-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".builder-faq-list-item-title-wrapper");

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // 모든 항목 닫기
      faqItems.forEach((el) => {
        el.classList.remove("active");
      });

      // 클릭한 항목만 토글
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
