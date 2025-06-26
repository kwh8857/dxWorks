const locationLeftArray = [
  {
    el: document.getElementById("location-map-color-text"),
    delay: 0.1,
    trans: 3,
  },
  {
    el: document.getElementById("location-map-text"),
    delay: 0.1,
    trans: 3,
  },
  ...Array.from(
    document.querySelectorAll(".root_daum_roughmap.root_daum_roughmap_landing")
  ).map((el) => ({
    el,
    delay: 0.2,
    trans: 6,
  })),
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

locationLeftArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
