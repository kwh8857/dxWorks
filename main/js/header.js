// 현재 화면 상태를 저장하는 변수
let isMobile = false;
// 모바일 메뉴 상태를 저장하는 변수
let isMobileMenuOpen = false;

// 화면 크기 감지 함수
const isMobileScreen = () => {
  return window.innerWidth < 768;
};

// 모바일 메뉴 토글 함수
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

// 모바일 헤더 요소 생성 함수
const createMobileHeader = () => {
  const header = document.getElementById("header");

  // 기존 요소들 선택
  const nav = header.querySelector(".header-nav");
  const btnSection = header.querySelector(".header-btn-section");

  // 모바일 메뉴 컨테이너 생성
  const mobileMenuContainer = document.createElement("div");
  mobileMenuContainer.className = "header-mobile-menu";

  // 모바일 메뉴 버튼 생성
  const mbmenu = document.createElement("button");
  mbmenu.className = "header-mb-menu";
  mbmenu.innerHTML = `
    <img src="./assets/header/menu.svg" alt="menu" class="header-mb-menu-icon">
  `;

  // 모바일 메뉴 버튼 클릭 이벤트 추가
  mbmenu.addEventListener("click", toggleMobileMenu);

  // 요소들 재배치
  if (nav) {
    nav.remove();
    mobileMenuContainer.appendChild(nav);
  }
  if (btnSection) {
    btnSection.remove();
    mobileMenuContainer.appendChild(btnSection);
  }

  // 헤더에 요소들 추가
  header.appendChild(mbmenu);
  header.appendChild(mobileMenuContainer);
};

// 데스크톱 헤더 요소 생성 함수
const createDesktopHeader = () => {
  const header = document.getElementById("header");

  // 모바일 메뉴 상태 초기화
  isMobileMenuOpen = false;

  // 모바일 메뉴 관련 요소들 제거
  const mbmenu = header.querySelector(".header-mb-menu");
  const mobileMenuContainer = header.querySelector(".header-mobile-menu");
  if (mbmenu) mbmenu.remove();
  if (mobileMenuContainer) {
    // 모바일 메뉴 컨테이너에서 요소들을 다시 헤더로 이동
    const nav = mobileMenuContainer.querySelector(".header-nav");
    const btnSection = mobileMenuContainer.querySelector(".header-btn-section");

    if (nav) {
      nav.remove();
      header.insertBefore(
        nav,
        header.querySelector(".header-logo").nextSibling
      );
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
    // 모바일 화면일 때 요소 재배치
    createMobileHeader();
  } else {
    // 데스크톱 화면일 때 요소 원위치
    createDesktopHeader();
  }
};

// 화면 상태 업데이트 함수
const updateScreenState = () => {
  const newState = isMobileScreen();

  // 상태가 변경되었을 때만 실행
  if (newState !== isMobile) {
    isMobile = newState;

    if (isMobile) {
      // 모바일로 변경될 때만 실행될 로직
      console.log("모바일 화면으로 변경되었습니다");
      changeMbHeader();
    } else {
      // 데스크톱으로 변경될 때만 실행될 로직
      console.log("데스크톱 화면으로 변경되었습니다");
      changeMbHeader();
    }
  }

  return isMobile;
};

// 화면 크기 변경 이벤트 리스너
const handleResize = () => {
  updateScreenState();
};

// 초기 로드 시 실행
window.addEventListener("load", handleResize);

// 화면 크기 변경 시 실행
window.addEventListener("resize", handleResize);
