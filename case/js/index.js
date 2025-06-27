window.addEventListener("DOMContentLoaded", initSectionNavigation);

function initSectionNavigation() {
  const menuItems = document.querySelectorAll(".menu-wrapper p");
  const menuWrapper = document.querySelector(".menu-wrapper");
  if (!menuItems.length) return;

  bindMenuClickEvents(menuItems);
  setInitialActive(menuItems);
  initSectionObserver(menuItems); //  scrollspy 기능 추가
  observeSticky(menuWrapper);
}

function bindMenuClickEvents(menuItems) {
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => handleMenuClick(e, menuItems));
  });
}

function handleMenuClick(e, menuItems) {
  e.preventDefault();

  const parentP = e.currentTarget;
  const href = parentP.querySelector("a")?.getAttribute("href");
  if (!href) return;

  const targetId = href.replace("#", "");

  removeAllActive(menuItems);
  setActive(parentP);
  scrollToTarget(targetId);
}

function removeAllActive(menuItems) {
  menuItems.forEach((el) => el.classList.remove("active"));
}

function setActive(item) {
  item.classList.add("active");
}

function scrollToTarget(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setInitialActive(menuItems) {
  setActive(menuItems[0]);
}

function initSectionObserver(menuItems) {
  const sectionIds = Array.from(menuItems).map((item) =>
    item.querySelector("a").getAttribute("href").replace("#", "")
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // 섹션이 40% 보이면 active 처리
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const matchingMenu = Array.from(menuItems).find(
        (item) => item.querySelector("a").getAttribute("href") === `#${id}`
      );

      if (entry.isIntersecting && matchingMenu) {
        removeAllActive(menuItems);
        setActive(matchingMenu);
      }
    });
  }, observerOptions);

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function observeSticky(menuWrapper) {
  const sentinel = document.querySelector(".sticky-sentinel");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.boundingClientRect.top < 0) {
        menuWrapper.classList.add("is-stuck");
      } else {
        menuWrapper.classList.remove("is-stuck");
      }
    },
    { threshold: [0] }
  );

  if (sentinel) observer.observe(sentinel);
}
