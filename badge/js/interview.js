const prevBtn = document.querySelector(".badge-interview-btn-prev");
const nextBtn = document.querySelector(".badge-interview-btn-next");
const slideList = document.querySelector(".badge-interview-list");
const pageItems = document.querySelectorAll(".badge-interview-page-item");
const slides = document.querySelectorAll(".badge-interview-item");

// 🔁 복제 슬라이드 만들기
export const pcInterview = () => {
  console.log("여기돌아요");

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slideList.appendChild(firstClone);
  slideList.insertBefore(lastClone, slides[0]);

  const totalSlides = slides.length;
  let currentIndex = 1;
  let isTransitioning = false;

  slideList.style.transform = `translateX(-${currentIndex * 100}%)`;

  function updateSlide(index) {
    isTransitioning = true;
    slideList.style.transition = "transform 0.5s ease-in-out";
    slideList.style.transform = `translateX(-${index * 100}%)`;

    pageItems.forEach((dot, i) => {
      dot.classList.toggle(
        "active-page-item",
        i === (index - 1 + totalSlides) % totalSlides
      );
    });
  }

  slideList.addEventListener("transitionend", () => {
    isTransitioning = false;

    if (currentIndex === 0) {
      slideList.style.transition = "none";
      currentIndex = totalSlides;
      slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (currentIndex === totalSlides + 1) {
      slideList.style.transition = "none";
      currentIndex = 1;
      slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  // ✅ 버튼 클릭
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
};

export const mbInterview = () => {
  const slideContainer = document.querySelector(
    ".badge-interview-list-container"
  );

  const items = document.querySelectorAll(".badge-interview-item");

  const slides = slideList.querySelectorAll(".badge-interview-item");
  if (slides.length > 3) {
    slideList.innerHTML = "";
    const originals = Array.from(slides).slice(1, -1);
    originals.forEach((item) => slideList.appendChild(item));
  }

  slideList.style.transform = "";
  slideList.style.transition = "";

  function updateIndicatorFromScroll() {
    const scrollLeft = slideContainer.scrollLeft;
    const slideWidth = items[0].clientWidth;

    const index = Math.round(scrollLeft / slideWidth);
    console.log(index);
    pageItems.forEach((dot, i) => {
      dot.classList.toggle("active-page-item", i === index);
    });
  }

  slideContainer.addEventListener("scroll", () => {
    if (window.innerWidth <= 768) {
      updateIndicatorFromScroll();
    }
  });
};
