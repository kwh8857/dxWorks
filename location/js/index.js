document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".address-copy-box");
  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const infoBox = button.closest(".info-box");

      const addressBox = Array.from(
        infoBox.querySelectorAll(".custom-box")
      ).find((box) => {
        const title = box.querySelector(".custom-title")?.textContent.trim();
        return title === "주소";
      });
      const addressText =
        addressBox?.querySelector(".custom-content")?.textContent;

      if (addressText) {
        navigator.clipboard
          .writeText(addressText)
          .then(() => {
            alert("주소가 복사되었습니다!");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  });
});
