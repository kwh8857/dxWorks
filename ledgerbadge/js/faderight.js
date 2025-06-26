const ledgerBadgeRightArray = [
  {
    el: document.getElementById("badge-ledger-badge-top-right"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-type-list-item-hr"),
    delay: 0.3,
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

const observer = (current, delay) => {
  Object.assign(current.style, {
    opacity: "0",
    transform: "translate3d(10%, 0, 0)",
  });

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => handleScroll([entry], current, delay, intersectionObserver),
    {
      threshold: 0.2,
    }
  );
  intersectionObserver.observe(current);
};

ledgerBadgeRightArray.forEach(({ el, delay }) => {
  observer(el, delay);
});
