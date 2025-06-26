const certArray = [
  {
    el: document.getElementById("certification-card-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("certification-card-2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("certification-card-3"),
    delay: 0.3,
  },
  {
    el: document.getElementById("certification-card-4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("certification-card-5"),
    delay: 0.2,
  },
  {
    el: document.getElementById("certification-card-6"),
    delay: 0.3,
  },
  {
    el: document.getElementById("certification-card-7"),
    delay: 0.1,
  },
  {
    el: document.getElementById("certification-card-8"),
    delay: 0.2,
  },

  {
    el: document.getElementById("certification-card-9"),
    delay: 0.3,
  },
  {
    el: document.getElementById("certification-card-10"),
    delay: 0.1,
  },
  {
    el: document.getElementById("certification-card-11"),
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

certArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
