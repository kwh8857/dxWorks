const builderArray = [
  {
    el: document.getElementById("builder-ledger-builder-tag"),
    delay: 0,
    trans: 40,
  },
  {
    el: document.getElementById("builder-ledger-builder-title"),
    delay: 0.1,
    trans: 20,
  },
  {
    el: document.getElementById("builder-ledger-builder-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-ledger-builder-bottom-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-ledger-builder-bottom-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-ledger-builder-bottom-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-ledger-builder-bottom-img"),
    delay: 0.1,
    trans: 10,
  },
  {
    el: document.getElementById("builder-slogan-section-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-slogan-section-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-tech-section-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-tech-section-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-tech-section-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-tech-section-content-item"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-tech-list-item-ai"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-tech-list-item-bigdata"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-tech-list-item-cloud"),
    delay: 0.3,
  },
  {
    el: document.getElementById("builder-tech-section-content-plus"),
    delay: 0.2,
    trans: 40,
  },
  {
    el: document.getElementById("builder-product-section-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-product-section-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-product-feature-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-product-feature-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-product-feature-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-product-info-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-product-info-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-product-info-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-product-info-item-4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-slide-tag"),
    delay: 0.1,
    trans: 40,
  },
  {
    el: document.getElementById("builder-slide-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-slide-desc"),
    delay: 0.2,
    trans: 40,
  },
  {
    el: document.getElementById("builder-slide-list-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-slide-list-item-2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-slide-list-item-3"),
    delay: 0.3,
  },
  {
    el: document.getElementById("builder-slide-list-item-4"),
    delay: 0.4,
  },
  {
    el: document.getElementById("builder-nav-contract-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-nav-contract-btn"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-faq-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("builder-faq-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("builder-faq-search"),
    delay: 0.1,
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

builderArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
