const workArray = [
  {
    el: document.getElementById("work-card1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("work-card2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("work-card3"),
    delay: 0.3,
  },
  {
    el: document.getElementById("work-card4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("work-card5"),
    delay: 0.2,
  },
  {
    el: document.getElementById("work-card6"),
    delay: 0.3,
  },
  {
    el: document.getElementById("work-card7"),
    delay: 0.1,
  },
  {
    el: document.getElementById("work-card8"),
    delay: 0.2,
  },
  {
    el: document.getElementById("work-card9"),
    delay: 0.3,
  },
  {
    el: document.getElementById("work-section2-img"),
    delay: 0.1,
    trans: 10,
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
    transform: `translate3d(0%, ${trans ? trans : 30}%, 0)`,
  });

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => handleScroll([entry], current, delay, intersectionObserver),
    {
      threshold: 0.2,
    }
  );
  intersectionObserver.observe(current);
};

workArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
