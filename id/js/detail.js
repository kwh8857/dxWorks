const buttons = document.querySelectorAll(".id-detail-btn-item");
const titleEl = document.getElementById("detail-title");
const descTitleEl = document.querySelector(".id-detail-desc-title");
const descTextEl = document.querySelector(".id-detail-desc-text");
const imgList = document.querySelectorAll(".id-detail-img");

const data = [
  {
    title: `이력 관리에서부터
    다양한 동기부여까지,
    유연한 디지털 이력증명`,
    descTitle: "블록체인 기반의 \n 분산화 디지털 증빙",
    descText:
      "블록체인에 디지털배지 기초정보 및 발행정보를 기록하여 <br />유통되는 디지털배지의 신뢰성 확보",
    btn: "신뢰할 수 있는 이력 관리",
  },
  {
    title: "손쉬운 배지 등록, \n 손쉬운 관리를 통해 \n   편안한 이력공유",
    descTitle: "직관적인 인터페이스로 편리한 추가",
    descText:
      "배지 직접추가, 임포트를 통한 배지 등록 및 <br /> 타기관 배지 등록 가능 (URL,SNS,HTML 카드)",
    btn: "손쉬운 이력 공유",
  },
  {
    title: `단순 문자가 아닌 뱃지로
시각적인 성취감높여
학습 동기부여 확대`,
    descTitle: "시각화되는 요소로 성취감 확대",
    descText:
      "시각적이고 검증이 가능하며 <br /> 휴대가 가능한 성과로 학습자의 동기를 부여합니다.",
    btn: "학습 동기부여 확대",
  },
];

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // 버튼 active 클래스 처리
    buttons.forEach((b) => b.classList.remove("detail-active-btn"));
    btn.classList.add("detail-active-btn");

    // 텍스트 변경
    titleEl.innerText = data[index].title;
    descTitleEl.textContent = data[index].descTitle;
    descTextEl.innerHTML = data[index].descText;

    // 이미지 변경
    imgList.forEach((img, i) => {
      img.classList.remove("now-detail-img");
      if (i === index) img.classList.add("now-detail-img");
    });
  });
});

export const detailChange = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const container = document.getElementById("id-section").parentElement;
    container.innerHTML = ""; // 기존 section 제거

    data.forEach((item, index) => {
      const section = document.createElement("section");
      section.className = "id-detail-section";

      section.innerHTML = `
      <div class="id-detail-content">
        <div class="id-detail-tag">Detail</div>
        <div class="id-detail-title" style="white-space: pre-line;">
          ${item.title}
        </div>
        <div class="id-detail-desc">
          <b class="id-detail-desc-title">${item.descTitle}</b>
          <span class="id-detail-desc-text">${item.descText}</span>
        </div>
      </div>
      <div class="detail-img-wrapper">
        <img src="./assets/id/detail-img${
          index === 0 ? "" : `-${index + 1}`
        }.png"
             srcset="./assets/id/detail-img${
               index === 0 ? "" : `-${index + 1}`
             }@2x.png 2x, ./assets/id/detail-img${
        index === 0 ? "" : `-${index + 1}`
      }@3x.png 3x"
             alt="detail-img"
             class="id-detail-img now-detail-img">
      </div>
    `;

      container.appendChild(section);
    });
  }
};

const container = document.getElementById("id-container");
const template = document.getElementById("id-section-template");

// 모바일용 렌더링
export function renderMobileView() {
  container.innerHTML = "";
  console.log("모바일뷰");
  console.log(container);
  data.forEach((item, index) => {
    const section = document.createElement("section");
    section.className = "id-detail-section";
    section.innerHTML = `
      <div class="id-detail-content">
        <div class="id-detail-tag" style="white-space: pre-line;">${
          data[index].btn
        }</div>
        <div class="id-detail-desc">
          <b class="id-detail-desc-title">${item.descTitle}</b>
          <span class="id-detail-desc-text">${item.descText}</span>
        </div>
      </div>
      <div class="detail-img-wrapper">
        <img src="./assets/id/detail-img${
          index === 0 ? "" : `-${index + 1}`
        }.png"
             srcset="./assets/id/detail-img${
               index === 0 ? "" : `-${index + 1}`
             }@2x.png 2x, ./assets/id/detail-img${
      index === 0 ? "" : `-${index + 1}`
    }@3x.png 3x"
             alt="detail-img"
             class="id-detail-img now-detail-img">
      </div>
    `;
    container.appendChild(section);
  });
}

// 데스크탑용 렌더링
export function renderDesktopView() {
  container.innerHTML = "";
  const clone = template.cloneNode(true);
  clone.style.display = "";
  clone.removeAttribute("id");
  container.appendChild(clone);
}
