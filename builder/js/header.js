let isMobile = false;
let isMobileMenuOpen = false;

const isMobileScreen = () => window.innerWidth < 768;

const toggleMobileMenu = () => {
  const mobileMenuContainer = document.querySelector(".header-mobile-menu");
  const menuIcon = document.querySelector(".header-mb-menu-icon");
  isMobileMenuOpen = !isMobileMenuOpen;

  if (isMobileMenuOpen) {
    mobileMenuContainer.classList.add("active-mobile-menu");
    menuIcon.src = "./assets/header/cancel.svg";
  } else {
    mobileMenuContainer.classList.remove("active-mobile-menu");
    menuIcon.src = "./assets/header/menu.svg";
  }
};

const enableMobileNavDropdowns = () => {
  const navItems = document.querySelectorAll(".header-nav-item");

  navItems.forEach((item) => {
    const link = item.querySelector(".header-nav-link");
    const submenu = item.querySelector(".sub-nav-list");

    // 이벤트 중복 방지
    link.onclick = null;

if (isMobile && submenu) {
  if (!link.dataset.bound) {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const isExpanded = item.classList.contains("expanded");

      document.querySelectorAll(".header-nav-item.expanded").forEach((el) => {
        el.classList.remove("expanded");
        el.style.height = "";
      });

      if (!isExpanded) {
        const itemHeight = 60;
        const subLinkHeight = 50;
        const subLinkCount = submenu.querySelectorAll("a").length;

        const totalHeight = itemHeight + subLinkCount * subLinkHeight;
        item.classList.add("expanded");
        item.style.height = `${totalHeight}px`;
      }
    });

    link.dataset.bound = "true"; // 플래그 설정
  }
}

  });
};

const disableMobileNavDropdowns = () => {
  const navItems = document.querySelectorAll(".header-nav-item");

  navItems.forEach((item) => {
    const link = item.querySelector(".header-nav-link");

    // 기존 이벤트 제거
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);

    // 스타일도 초기화 (중복 방지)
    item.classList.remove("expanded");
    item.style.height = "";
  });
};


const createMobileHeader = () => {
  const header = document.getElementById("header");

  // 이미 모바일 메뉴가 있다면 초기화 방지
  if (header.querySelector(".header-mobile-menu")) return;

  const nav = header.querySelector(".header-nav");
  const btnSection = header.querySelector(".header-btn-section");

  const mobileMenuContainer = document.createElement("div");
  mobileMenuContainer.className = "header-mobile-menu";

  const mbmenu = document.createElement("button");
  mbmenu.className = "header-mb-menu";
  mbmenu.innerHTML = `
    <img src="./assets/header/menu.svg" alt="menu" class="header-mb-menu-icon">
  `;
  mbmenu.addEventListener("click", toggleMobileMenu);

  // 기존 요소 분리해서 모바일 메뉴 안으로 이동
  if (nav) {
    nav.remove();
    mobileMenuContainer.appendChild(nav);
  }

  if (btnSection) {
    btnSection.remove();
    mobileMenuContainer.appendChild(btnSection);
  }

  header.appendChild(mbmenu);
  header.appendChild(mobileMenuContainer);
};

const createDesktopHeader = () => {
  const header = document.getElementById("header");
  isMobileMenuOpen = false;

  const mbmenu = header.querySelector(".header-mb-menu");
  const mobileMenuContainer = header.querySelector(".header-mobile-menu");

  if (mbmenu) mbmenu.remove();

  if (mobileMenuContainer) {
    const nav = mobileMenuContainer.querySelector(".header-nav");
    const btnSection = mobileMenuContainer.querySelector(".header-btn-section");
    const logo = header.querySelector(".header-logo");

    // 💡 이 부분 추가: height 초기화 및 expanded 클래스 제거
    if (nav) {
      nav.querySelectorAll(".header-nav-item").forEach((item) => {
        item.classList.remove("expanded");
        item.style.height = "";
      });
    }

    if (nav) {
      nav.remove();
      header.insertBefore(nav, logo.nextSibling);
    }

    if (btnSection) {
      btnSection.remove();
      header.appendChild(btnSection);
    }

    mobileMenuContainer.remove();
  }
};


const changeMbHeader = () => {
  if (isMobile) {
    createMobileHeader();
    enableMobileNavDropdowns();
  } else {
    createDesktopHeader();
    disableMobileNavDropdowns();
  }
};

const updateScreenState = () => {
  const newState = isMobileScreen();

  if (newState !== isMobile) {
    isMobile = newState;
    console.log(
      isMobile ? "모바일 화면으로 변경됨" : "데스크톱 화면으로 변경됨"
    );
    changeMbHeader();
  }

  return isMobile;
};

window.addEventListener("load", updateScreenState);
window.addEventListener("resize", updateScreenState);
