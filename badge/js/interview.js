const prevBtn = document.querySelector(".badge-interview-btn-prev");
const nextBtn = document.querySelector(".badge-interview-btn-next");
const slideList = document.querySelector(".badge-interview-list");
const pageItems = document.querySelectorAll(".badge-interview-page-item");
const slides = document.querySelectorAll(".badge-interview-item");
const slideContainer = document.querySelector(
  ".badge-interview-list-container"
);
let originalSlides = Array.from(slideList.children).filter((el) =>
  el.classList.contains("badge-interview-item")
);

let isTransitioning = false;
let currentIndex = 1;
// 🔁 복제 슬라이드 만들기

export const pcInterview = () => {
  originalSlides = Array.from(slideList.children).filter((el) =>
    el.classList.contains("badge-interview-item")
  );
  currentIndex = 0;
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  slideList.innerHTML = "";
  slideList.appendChild(lastClone);
  originalSlides.forEach((slide) => slideList.appendChild(slide));
  slideList.appendChild(firstClone);

  pageItems.forEach((dot, i) => {
    dot.classList.toggle("active-page-item", i === 0);
  });

  const totalSlides = slides.length;

  slideList.style.transition = "none";
  slideList.style.transform = `translateX(-${currentIndex * 100}%)`;

  slideList.addEventListener("transitionend", () => {
    isTransitioning = false;

    if (currentIndex === 0) {
      slideList.style.transition = "none";
      currentIndex = originalSlides.length;
      requestAnimationFrame(() => {
        slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    }

    if (currentIndex === totalSlides + 1) {
      slideList.style.transition = "none";
      currentIndex = 1;
      requestAnimationFrame(() => {
        slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    }
  });
};
function updateSlide(index) {
  isTransitioning = true;
  slideList.style.transition = "transform 0.5s ease-in-out";
  slideList.style.transform = `translateX(-${index * 100}%)`;

  pageItems.forEach((dot, i) => {
    dot.classList.toggle(
      "active-page-item",
      i === (index - 1 + originalSlides.length) % originalSlides.length
    );
  });
}

nextBtn.addEventListener("click", () => {
  if (isTransitioning) return;
  currentIndex++;
  updateSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  if (isTransitioning) return;
  currentIndex--;
  updateSlide(currentIndex);
});
export const mbInterview = () => {
  const slideList = document.querySelector(".badge-interview-list");
  const pageItems = document.querySelectorAll(".badge-interview-page-item");

  // 초기화: 슬라이드 복제 제거
  const slides = slideList.querySelectorAll(".badge-interview-item");
  if (slides.length > 3) {
    slideList.innerHTML = "";
    const originals = Array.from(slides).slice(1, -1); // 클론 제외
    originals.forEach((item) => slideList.appendChild(item));
  }

  // transform 제거
  slideList.style.transform = "";
  slideList.style.transition = "";

  // ✅ 페이지 0번 인디케이터 초기화
  pageItems.forEach((dot, i) => {
    dot.classList.toggle("active-page-item", i === 0);
  });

  // ✅ 스크롤도 맨 앞으로 이동
  slideContainer.scrollLeft = 0;

  // ✅ 이벤트 등록
};

function updateIndicatorFromScroll() {
  const items = document.querySelectorAll(".badge-interview-item");
  const scrollLeft = slideContainer.scrollLeft * 1.8;
  const slideWidth = items[0].clientWidth + 16;

  let index = Math.round(scrollLeft / slideWidth);
  index = Math.min(index, pageItems.length - 1);

  pageItems.forEach((dot, i) => {
    dot.classList.toggle("active-page-item", i === index);
  });
}
slideContainer.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) {
    updateIndicatorFromScroll();
  }
});
