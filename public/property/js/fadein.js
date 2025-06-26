const propertyArray = [
  {
    el: document.getElementById("property-search-form"),
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

propertyArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
