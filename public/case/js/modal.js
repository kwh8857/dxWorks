const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const buttons = document.querySelectorAll(".show-link");

buttons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const id = btn.id;
    try {
      const res = await fetch(`${id}.html`);
      const text = await res.text();

      // 임시 DOM 생성 후 특정 콘텐츠만 추출
      const temp = document.createElement("div");
      temp.innerHTML = text;
      const target = temp.querySelector("#popup-content") || temp;

      modalContent.innerHTML = target.innerHTML;
      modal.classList.add("show");

      // 모달 안의 close 버튼에 이벤트 추가 (불러온 후 실행!)
      const closeBtn = modalContent.querySelector(".close-btn");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.classList.remove("show");
        });
      }
    } catch (e) {
      modalContent.innerHTML = `<p style="color:red;">${id}.html을 불러오는 데 실패했습니다.</p>`;
      modal.classList.add("show");
    }
  });
});

// 모달 외부 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
