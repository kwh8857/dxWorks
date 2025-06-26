const caseArray = [
  {
    el: document.getElementById("case-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("case-sub-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("rdb-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("rdb-sub-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("blockchain-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("blockchain-sub-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("ordertech-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("ordertech-sub-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("rdb-card1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("rdb-card2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("rdb-card3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("rdb-card4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("rdb-card5"),
    delay: 0.1,
  },
  {
    el: document.getElementById("blockchain-card1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("blockchain-card2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("ordertech-card1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("ordertech-card2"),
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

caseArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
