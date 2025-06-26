const fadeinElements = [
  {
    el: document.getElementById("box-1"),
    delay: 0,
  },
  {
    el: document.getElementById("box-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("box-3"),
    delay: 0.2,
  },
  {
    el: document.querySelector(".section5-img-1"),
    delay: 0,
  },
  {
    el: document.querySelector(".section5-img-2"),
    delay: 0.1,
  },
  {
    el: document.querySelector(".section5-img-3"),
    delay: 0.2,
  },
  {
    el: document.querySelector(".section5-img-4"),
    delay: 0.3,
  },
  // document.querySelector(".overlay"),
];

const handleScroll = ([entry], current, delay) => {
  if (entry.isIntersecting && current) {
    Object.assign(current.style, {
      transitionProperty: "opacity, transform",
      transitionDuration: "0.7s",
      transitionTimingFunction: "ease-in-out",
      transitionDelay: `${delay}s`,
      opacity: "1",
      transform: "translate3d(0, 0, 0)",
    });
    observer.unobserve(entry.target);
  }
};

const observer = (current, delay) => {
  Object.assign(current.style, {
    opacity: "0",
    transform: "translate3d(0, 30%, 0)",
  });

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => handleScroll([entry], current, delay),
    {
      threshold: 0.2,
    }
  );
  intersectionObserver.observe(current);
};

fadeinElements.forEach(({ el, delay }) => {
  observer(el, delay);
});
