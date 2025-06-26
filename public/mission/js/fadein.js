const misstionArray = [
  {
    el: document.getElementById("section1-img-1"),
    delay: 0,
  },
  {
    el: document.getElementById("section1-img-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("section1-img-3"),
    delay: 0.2,
  },
  {
    el: document.getElementById("section1-img-4"),
    delay: 0.2,
  },
  {
    el: document.getElementById("card1"), 
    delay: 0.1,
  },
  {
    el: document.getElementById("card2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("card3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("card4"),
    delay: 0.2,
  },
];
const handleScroll = ([entry], current, delay,intersectionObserver) => {
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
    transform: "translate3d(0, 30%, 0)",
  });

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => handleScroll([entry], current, delay,intersectionObserver),
    {
      threshold: 0.2,
    }
  );
  intersectionObserver.observe(current);
};

misstionArray.forEach(({ el, delay }) => {
  observer(el, delay);
});
