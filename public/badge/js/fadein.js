const fadeinElements = [
  {
    el: document.getElementById("badge-digital-badge-tag"),
    delay: 0,
  },
  {
    el: document.getElementById("badge-digital-badge-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-digital-badge-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-why-content"),
    delay: 0,
  },
  {
    el: document.getElementById("badge-why-img"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-solution-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-solution-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-solution-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-solution-img"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-product-img"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-detail-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("detail-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-detail-btn-list"),
    delay: 0.2,
  },
  {
    el: document.getElementById("detail-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("detail-img-wrapper"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-point-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-point-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-point-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-point-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-point-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-point-item-4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-point-item-5"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-point-item-6"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-interview-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-interview-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-interview-wrapper"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-effect-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-effect-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-nav-contract-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-nav-contract-btn"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-faq-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-faq-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-faq-search"),
    delay: 0.1,
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
