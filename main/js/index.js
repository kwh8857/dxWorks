const section1 = document.querySelector(".section1");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");
const currentIndexEl = document.getElementById("currentIndex");
const titleBox = document.querySelector('.section1-title-box');
const totalCountEl = document.getElementById("totalCount");
const mainTextEl = document.querySelector(".section1-main-text");
const subTextEl = document.querySelector(".section1-sub-text");
const aboutCompanyEl = document.querySelector(".about-company");
const extraTextEl = document.querySelector(".section1-extra");
const logoEl = document.querySelector(".section1-logo");
const paginationHighlight = document.querySelector(".pagination-highlight");

const images = [
  {
    img1x: "./assets/section1/section1-title.png",
    img2x: "./assets/section1/section1-title@2x.png",
    img3x: "./assets/section1/section1-title@3x.png",
    mainText: `Blockchain + X로 여는 <br/>신뢰의 디지털 미래`,
    subText: `블록체인을 중심으로 다양한 기술을 결합해<br/>디지털 신뢰를 실현하는 플랫폼을 만듭니다`,
    about: "About Company",
  },
  {
    img1x: "./assets/section1/section1-title2.png",
    img2x: "./assets/section1/section1-title2@2x.png",
    img3x: "./assets/section1/section1-title2@3x.png",
    mainText: `2025 디엑스웍스<br/>
혁신 프리미어 1000 선정`,
    subText: `블록체인을 중심으로 다양한 기술을 결합해<br/>
디지털 신뢰를 실현하는 플랫폼을 만듭니다`,
    about: "Detail",
    extraContent: `<img 
        src="./assets/section1/section1-extra1.png" 
        srcSet="./assets/section1/section1-extra1@2x.png 2x,
            ./assets/section1/section1-extra1@3x.png 3x,
        " 
        alt="info image" />`,
  },
  {
    mainText: `벤처인증 · 이노비즈 ·<br/>
메인비즈 확인서 획득`,
    subText: `혁신·경영·성장성 모두 검증된 기업<br/>
벤처인증 · 이노비즈 · 메인비즈 인증 보유`,
    about: "Detail",
    extraContent: `<img 
        src="./assets/section1/section1-extra2.png" 
        src="
            ./assets/section1/section1-extra2@2x.png 2x.
            ./assets/section1/section1-extra2@3x.png 3x,
        " 
        style="transform:translateY(-197px)"
        alt="info image" />`,
  },
];

let currentIndex = 0;
const total = images.length;

function updateSectionBackground() {
  const { img1x, img2x, img3x, mainText, subText, about, extraContent } =
    images[currentIndex];

  // 이미지 변경
  section1.style.backgroundImage = `
      image-set(
        url(${img1x}) 1x,
        url(${img2x}) 2x,
        url(${img3x}) 3x
      )
    `;

  mainTextEl.innerHTML = mainText;
  subTextEl.innerHTML = subText;
  aboutCompanyEl.innerHTML = about;
  if (extraContent) {
    extraTextEl.innerHTML = extraContent;
    extraTextEl.classList.remove("hidden");
    logoEl.classList.add("hidden"); 
    titleBox.removeAttribute("style");
  } else {
    extraTextEl.classList.add("hidden");
    extraTextEl.innerHTML = ""; 
    logoEl.classList.remove("hidden"); 
    titleBox.style="justify-content:unset; width:1200px; margin:0 auto;"
  }

  currentIndexEl.textContent = String(currentIndex + 1).padStart(2, "0");
  totalCountEl.textContent = String(images.length).padStart(2, "0");

  // 버튼 활성/비활성
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;

  if (paginationHighlight) {
    const highlightWidth = 146;
    const totalLineWidth = 286;
    const positions = [
      0, // 1번째 - 왼쪽
      (totalLineWidth - highlightWidth) / 2, // 2번째 - 가운데
      totalLineWidth - highlightWidth, // 3번째 - 오른쪽
    ];

    paginationHighlight.style.transform = `translateX(${positions[currentIndex]}px)`;
  }
}
  

updateSectionBackground();

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSectionBackground();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < total - 1) {
    currentIndex++;
    updateSectionBackground();
  }
});