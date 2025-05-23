// 모달 관련 요소 선택
const modal = document.querySelector(".property-modal");
const registerBtns = document.querySelectorAll(".register-btn");
const closeBtn = document.querySelector(".close-btn");

// 모달 열기 함수
const openModal = () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // 모달 열릴 때 배경 스크롤 방지
};

// 모달 닫기 함수
const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // 모달 닫힐 때 배경 스크롤 허용
};

// 등록증보기 버튼 클릭 이벤트
registerBtns.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

// 닫기 버튼 클릭 이벤트
closeBtn.addEventListener("click", closeModal);

// 모달 외부 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
