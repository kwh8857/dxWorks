const elements = [
  // document.getElementById("scrollText"),
  ...document.querySelectorAll(".color-span"),
];
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const mainRect = main.getBoundingClientRect();

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const relativeTop = rect.top - mainRect.top;

    const triggerStart = windowHeight * 0.8;
    const progress = (triggerStart - relativeTop) / triggerStart;
    const clamped = Math.min(1, Math.max(0, progress));

    const line = Number(el.dataset.line || 1); // 줄 번호
    const index = Number(el.dataset.index || 0); // 줄 내 위치

    // 줄 번호별 딜레이 (줄마다 0.3씩 추가)
    const baseDelay = (line - 1) * 0.15;
    const letterDelay = index * 0.02; // 줄 안에서 왼쪽부터 오른쪽 순차 딜레이

    const totalDelay = baseDelay + letterDelay;

    const adjusted = Math.max(0, clamped - totalDelay);
    const fadeProgress = Math.min(1, adjusted * 5); // fade-in 속도 조절

    el.style.opacity = 0.3 + fadeProgress * 0.7;
  });
});
