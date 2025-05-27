window.addEventListener("DOMContentLoaded", () => {
  const includeElements = document.querySelectorAll("[data-include-path]");
  includeElements.forEach(async (el) => {
    const path = el.getAttribute("data-include-path");
    const html = await fetch(path).then((res) => res.text());

    // ❗ div 자체를 교체하는 로직
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const content = temp.firstElementChild;

    const replace = el.hasAttribute("data-include-replace");

    if (replace && content) {
      el.replaceWith(content); // ✅ div를 완전히 대체
    } else {
      el.innerHTML = html; // 기본 방식: div 안에 삽입
    }
  });
});
