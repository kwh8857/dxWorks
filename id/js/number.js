const idnumberArray = [
  {
    el: document.getElementById("id-effect-list-item-title-1"),
    number: 80,
  },
  {
    el: document.getElementById("id-effect-list-item-title-2"),
    number: 90,
  },
  {
    el: document.getElementById("id-effect-list-item-title-3"),
    number: 50,
  },
];
const handleScroll = ([entry], current, number, intersectionObserver) => {
  if (entry.isIntersecting && current) {
    const duration = 2000; // 전체 애니메이션 시간 (ms)
    const frameRate = 60; // 초당 프레임 (일반적인 애니메이션 프레임 수)
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const value = Math.round(number * progress);
      current.textContent = value;

      if (frame >= totalFrames) {
        clearInterval(counter);
        current.textContent = number; // 정확히 맞춰줌
      }
    }, 1000 / frameRate);

    intersectionObserver.unobserve(entry.target);
  }
};

const observer = (current, number) => {
  const intersectionObserver = new IntersectionObserver(
    ([entry]) => handleScroll([entry], current, number, intersectionObserver),
    {
      threshold: 0.2,
    }
  );
  intersectionObserver.observe(current);
};

idnumberArray.forEach(({ el, number }) => {
  observer(el, number);
});
