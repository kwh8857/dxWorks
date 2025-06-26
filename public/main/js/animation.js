const elements = [
  document.getElementById("scrollText"),
  ...document.querySelectorAll(".color-span"),
];
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();
    const relativeTop = rect.top - mainRect.top;
    const triggerStart = windowHeight * 1.5; // 스크롤이 더 위부터 시작되도록
    const progress = (triggerStart - relativeTop) / triggerStart;
    const clamped = Math.min(1, Math.max(0, progress));
    const boosted = Math.pow(clamped, 1); // 빠르게 올라감
    const percent = boosted * 100;

    el.style.backgroundPosition = `${100 - percent}% ${100 - percent}%`;
  });
});

elements.forEach((el) => {
  el.style.backgroundPosition = `65% 65%`;
});
