const buttons = document.querySelectorAll(".id-detail-btn-item");
const titleEl = document.getElementById("detail-title");
const descTitleEl = document.querySelector(".id-detail-desc-title");
const descTextEl = document.querySelector(".id-detail-desc-text");
const imgList = document.querySelectorAll(".id-detail-img");

const data = [
  {
    title: `하나의ID로 다양한
서비스에 연결되는 <br/>
유연한 디지털 신원인증`,
    descTitle: "안전한 신원 인증과 위변조 방지",
    descText:
      "개인 정보를 보호하고, 위·변조 없이<br /> 신원을 인증할 수 있습니다.",
    btn: "신뢰 기반 인증",
  },
  {
    title: `하나의ID로 다양한
서비스에 연결되는 <br/>
유연한 디지털 신원인증`,
    descTitle: "간편한 모바일 <br class='mb-br' /> 기반 인증",
    descText:
      "앱이나 지갑을 통해 <br /> 언제 어디서나 본인 인증이 <br class='mb-br' /> 가능합니다.",
    btn: "모바일 중심 사용성",
  },
  {
    title: `하나의ID로 다양한
서비스에 연결되는 <br/>
유연한 디지털 신원인증`,
    descTitle: "다양한 서비스와의 연동성",
    descText:
      "출입 시스템, 전자서명, 공공 포털 등 <br /> 다양한 환경에서 활용 가능합니다.",
    btn: "유연한 시스템 연동",
  },
];

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // 버튼 active 클래스 처리
    buttons.forEach((b) => b.classList.remove("detail-active-btn"));
    btn.classList.add("detail-active-btn");

    // 텍스트 변경
    titleEl.innerText = data[index].title;
    descTitleEl.innerHTML = data[index].descTitle;
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
