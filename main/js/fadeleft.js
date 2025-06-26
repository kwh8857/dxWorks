const mainLeftArray = [
  {
    el: document.getElementById("section1-title-img"),
    delay: 0.1,
    trans: 5,
  },
  {
    el: document.getElementById("section1-about-company"),
    delay: 0.1,
  },
  {
    el: document.getElementById("section6-top-text"),
    delay: 0.1,
    trans: 2,
  },
  {
    el: document.getElementById("section6-middle-text"),
    delay: 0.1,
    trans: 2,
  },
  {
    el: document.getElementById("section6-careers"),
    delay: 0.1,
  },
];

const handleScroll = ([entry], current, delay, intersectionObserver) => {
  if (entry.isIntersecting && current) {
    Object.assign(current.style, {
      transitionProperty: "opacity, transform",
      transitionDuration: "0.7s",
      transitionTimingFunction: "ease-in-out",
      transitionDelay: `${delay}s`,
      opacity: "1",
      transform: "translate3d(0, 0, 0)",
    });
    intersectionObserver.unobserve(entry.target);
  }
};

const observer = (current, delay, trans) => {
  Object.assign(current.style, {
    opacity: "0",
    transform: `translate3d(-${trans ? trans : 10}%, 0%, 0)`,
  });

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => handleScroll([entry], current, delay, intersectionObserver),
    {
      threshold: 0.2,
    }
  );
  intersectionObserver.observe(current);
};

mainLeftArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
