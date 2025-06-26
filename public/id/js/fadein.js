const idArray = [
  {
    el: document.getElementById("id-digital-id-tag"),
    delay: 0,
  },
  {
    el: document.getElementById("id-digital-id-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-digital-id-top-download-btn"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-digital-id-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-why-tag"),
    delay: 0,
  },
  {
    el: document.getElementById("id-why-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-why-img"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-solution-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-solution-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-solution-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-solution-img"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-product-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-product-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-product-img"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-detail-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("detail-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-detail-btn-list"),
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
    el: document.getElementById("id-point-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-point-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-point-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-point-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-point-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-point-item-4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-point-item-5"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-point-item-6"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-nav-contract-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-nav-contract-btn"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-faq-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-faq-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("id-faq-search"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-effect-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("id-effect-title"),
    delay: 0.2,
  },
  // document.querySelector(".overlay"),
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
    transform: "translate3d(0, 30%, 0)",
  });

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => handleScroll([entry], current, delay, intersectionObserver),
    {
      threshold: 0.2,
    }
  );
  intersectionObserver.observe(current);
};

idArray.forEach(({ el, delay }) => {
  console.log(el);
  observer(el, delay);
});
