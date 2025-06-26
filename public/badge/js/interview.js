const prevBtn = document.querySelector(".badge-interview-btn-prev");
const nextBtn = document.querySelector(".badge-interview-btn-next");
const slideList = document.querySelector(".badge-interview-list");
const pageItems = document.querySelectorAll(".badge-interview-page-item");
const slideContainer = document.querySelector(
  ".badge-interview-list-container"
);

let originalSlides = [];
let currentIndex = 1;
let isTransitioning = false;
let mode = null;

function updateSlide(index) {
  isTransitioning = true;
  slideList.style.transition = "transform 0.5s ease-in-out";
  slideList.style.transform = `translateX(-${index * 100}%)`;

  const pageIdx = (index - 1 + originalSlides.length) % originalSlides.length;
  pageItems.forEach((dot, i) => {
    dot.classList.toggle("active-page-item", i === pageIdx);
  });
}

export function pcInterview() {
  if (mode === "pc") return;
  mode = "pc";

  const slides = Array.from(
    slideList.querySelectorAll(".badge-interview-item")
  );
  originalSlides = slides;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slideList.innerHTML = "";
  slideList.appendChild(lastClone);
  originalSlides.forEach((s) => slideList.appendChild(s));
  slideList.appendChild(firstClone);

  currentIndex = 1;
  isTransitioning = false;

  slideList.style.transition = "none";
  slideList.style.transform = `translateX(-${currentIndex * 100}%)`;

  pageItems.forEach((dot, i) => {
    dot.classList.toggle("active-page-item", i === 0);
  });

  // transitionend 중복 방지 위해 기존 이벤트 제거 후 재등록
  slideList.removeEventListener("transitionend", onTransitionEnd);
  slideList.addEventListener("transitionend", onTransitionEnd);
}

function onTransitionEnd() {
  isTransitioning = false;

  if (currentIndex === 0) {
    slideList.style.transition = "none";
    currentIndex = originalSlides.length;
    slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else if (currentIndex === originalSlides.length + 1) {
    slideList.style.transition = "none";
    currentIndex = 1;
    slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

export function mbInterview() {
  if (mode === "mb") return;
  mode = "mb";

  const slides = slideList.querySelectorAll(".badge-interview-item");
  if (slides.length > 3) {
    slideList.innerHTML = "";
    const originals = Array.from(slides).slice(1, -1);
    originals.forEach((item) => slideList.appendChild(item));
  }

  slideList.style.transform = "";
  slideList.style.transition = "";

  pageItems.forEach((dot, i) => {
    dot.classList.toggle("active-page-item", i === 0);
  });

  slideContainer.scrollLeft = 0;
}

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

nextBtn.addEventListener("click", () => {
  if (isTransitioning || mode !== "pc") return;
  currentIndex++;
  updateSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  if (isTransitioning || mode !== "pc") return;
  currentIndex--;
  updateSlide(currentIndex);
});

slideContainer.addEventListener("scroll", () => {
  if (mode === "mb") updateIndicatorFromScroll();
});

window.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;
  isMobile ? mbInterview() : pcInterview();
});

window.addEventListener("resize", () => {
  const isMobile = window.innerWidth <= 768;
  isMobile ? mbInterview() : pcInterview();
});
