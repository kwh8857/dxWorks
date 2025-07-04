const section1 = document.querySelector(".section1");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");
const currentIndexEl = document.getElementById("currentIndex");
const sectionTitle = document.querySelector(".section1-title");
const titleBox = document.querySelector(".fade-wrapper");
const totalCountEl = document.getElementById("totalCount");
const mainTextEl = document.querySelector(".section1-main-text");
const subTextEl = document.querySelector(".section1-sub-text");
const aboutCompanyEl = document.querySelector(".about-company");
const extraTextEl = document.querySelector(".section1-extra");
const logoEl = document.querySelector(".section1-logo");
const paginationHighlight = document.querySelector(".pagination-highlight");
const fadeWrapper = document.querySelector(".fade-wrapper");
const paginationWrapper = document.querySelector(".pagination-btn-wrapper");
const reproductionBtn = document.getElementById("reproduction-btn");
const btnImage = reproductionBtn.querySelector("img");

// const images = [
//   {
//     video: "./assets/section1/section1-video.mp4",
//     mainText: `Blockchain + X로 여는 <br/>신뢰의 디지털 미래`,
//     subText: `블록체인을 중심으로 다양한 기술을 결합해<br/>디지털 신뢰를 실현하는 플랫폼을 만듭니다`,
//     about: "About Company",
//     link: "/mission",
//     extraContent: null,
//   },
//   {
//     img1x: "./assets/section1/section1-title2",
//     img2x: "./assets/section1/section1-title2",
//     img3x: "./assets/section1/section1-title2",
//     mainText: `2025 디엑스웍스<br/>혁신 프리미어 1000 선정`,
//     subText: `블록체인을 중심으로 다양한 기술을 결합해<br/>디지털 신뢰를 실현하는 플랫폼을 만듭니다`,
//     about: "Detail",
//     link: "/dxHistory",
//     extraContent: `
//       <picture>
//         <source srcset="./assets/section1/section1-extra1-mb.png 1x, ./assets/section1/section1-extra1-mb@2x.png 2x, ./assets/section1/section1-extra1@3x.png 3x" media="(max-width: 768px)">
//         <source srcset="./assets/section1/section1-extra1-tb.png, ./assets/section1/section1-extra1-tb@2x.png 2x, ./assets/section1/section1-extra1-tb@3x.png 3x" media="(max-width: 1440px)">
//         <img src="./assets/section1/section1-extra1.png" srcset="./assets/section1/section1-extra1@2x.png 2x, ./assets/section1/section1-extra1@3x.png 3x" alt="">
//       </picture>
//     `,
//   },
//   {
//     mainText: `벤처인증 · 이노비즈 ·<br/>메인비즈 확인서 획득`,
//     subText: `혁신·경영·성장성 모두 검증된 기업<br/>벤처인증 · 이노비즈 · 메인비즈 인증 보유`,
//     about: "Detail",
//     link: "/certification",
//     extraContent: `
// <picture>
//   <source srcset="./assets/section1/section1-extra2-mb.png 1x, ./assets/section1/section1-extra2-mb@2x.png 2x, ./assets/section1/section1-extra2@3x.png 3x" media="(max-width: 768px)">
//   <source srcset="./assets/section1/section1-extra2-tb.png, ./assets/section1/section1-extra2-tb@2x.png 2x, ./assets/section1/section1-extra2-tb@3x.png 3x" media="(max-width: 1440px)">
//   <img src="./assets/section1/section1-extra2.png" srcset="./assets/section1/section1-extra2@2x.png 2x, ./assets/section1/section1-extra2@3x.png 3x" alt="">
// </picture>
//     `,
//   },
// ];
const images = [
  document.getElementById("section1-title-box-1"),
  document.getElementById("section1-title-box-2"),
  document.getElementById("section1-title-box-3"),
];
let currentIndex = 0;
const total = images.length;
let autoSlideInterval;
let isAutoSliding = true;

function applyFadeEffect(nextIndex) {
  const currentEl = images[currentIndex];

  // 현재 요소에 fade-out 효과 적용
  if (currentEl) {
    currentEl.classList.add("fade-out");
  }

  setTimeout(() => {
    currentIndex = nextIndex;
    updateSectionBackground();

    const nextEl = images[currentIndex];

    // 이전 요소에서 fade-out 제거
    if (currentEl) {
      currentEl.classList.remove("fade-out");
    }

    // 새로운 요소에 fade-in 효과 적용
    if (nextEl) {
      nextEl.classList.remove("fade-out");
      nextEl.classList.add("fade-in");
    }

    setTimeout(() => {
      if (nextEl) {
        nextEl.classList.remove("fade-in");
      }
    }, 200);
  }, 200);
}

function updateSectionBackground() {
  const nowEl = images[currentIndex];

  // 모든 이미지 요소에서 active 클래스 제거
  images.forEach((el, index) => {
    if (el) {
      el.classList.remove("active");
    }
  });

  // 현재 인덱스에 해당하는 요소에만 active 클래스 추가
  if (nowEl) {
    nowEl.classList.add("active");
  }

  currentIndexEl.textContent = String(currentIndex + 1).padStart(2, "0");
  totalCountEl.textContent = String(images.length).padStart(2, "0");

  if (paginationHighlight) {
    const highlightWidth = window.innerWidth < 768 ? 90 : 146;
    const totalLineWidth = window.innerWidth < 768 ? 167 : 286;
    const positions = [
      0,
      (totalLineWidth - highlightWidth) / 2,
      totalLineWidth - highlightWidth,
    ];
    paginationHighlight.style.transform = `translateX(${positions[currentIndex]}px)`;
  }
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
    applyFadeEffect(nextIndex);
  }, 3000);
  isAutoSliding = true;
  btnImage.src = "./assets/section1/reproduction.svg";
  btnImage.alt = "pause";
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  isAutoSliding = false;
  btnImage.src = "./assets/section1/play.svg";
  btnImage.alt = "play";
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  if (isAutoSliding) {
    setTimeout(() => {
      startAutoSlide();
    }, 3000);
  }
}

// 좌우 버튼
prevBtn.addEventListener("click", () => {
  const nextIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
  applyFadeEffect(nextIndex);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
  applyFadeEffect(nextIndex);
  resetAutoSlide();
});

// 재생/일시정지 버튼
reproductionBtn.addEventListener("click", () => {
  if (isAutoSliding) {
    stopAutoSlide();
  } else {
    startAutoSlide();
  }
});

// 최초 실행
updateSectionBackground();
startAutoSlide();
