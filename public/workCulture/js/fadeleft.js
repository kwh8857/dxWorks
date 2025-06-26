const workLeftArray = [
  {
    el: document.getElementById("work-top-text"),
    delay: 0.1,
    trans: 2,
  },
  {
    el: document.getElementById("work-center-text"),
    delay: 0.2,
    trans: 2,
  },
  {
    el: document.getElementById("work-bottom-text"),
    delay: 0.3,
    trans: 2,
  },
  {
    el: document.getElementById("work-section2-title"),
    delay: 0.1,
    trans: 2,
  },
  {
    el: document.getElementById("work-section2-info-card1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("work-section2-info-card2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("work-section2-info-card3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("work-section2-info-card4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("work-employment-top-text"),
    delay: 0.1,
    trans: 2,
  },
  {
    el: document.getElementById("work-employment-center-text"),
    delay: 0.1,
    trans: 2,
  },
  {
    el: document.getElementById("work-employment-link-btn"),
    delay: 0.2,
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

workLeftArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
