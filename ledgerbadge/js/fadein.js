const ledgetBadgeArray = [
  {
    el: document.getElementById("badge-ledger-badge-tag"),
    delay: 0,
    trans: 40,
  },
  {
    el: document.getElementById("badge-ledger-badge-title"),
    delay: 0.1,
    trans: 20,
  },
  {
    el: document.getElementById("badge-ledger-badge-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-ledger-badge-bottom-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-ledger-badge-bottom-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-ledger-badge-bottom-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-ledger-badge-bottom-img"),
    delay: 0.1,
    trans: 10,
  },
  {
    el: document.getElementById("badge-slogan-section-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-slogan-section-desc"),
    delay: 0.2,
  },

  {
    el: document.getElementById("badge-slogan-section-img-section"),
    delay: 0.2,
    trans: 10,
  },
  {
    el: document.getElementById("badge-type-section-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-type-etech-img"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-type-list-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-type-list-item-2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-type-list-item-3"),
    delay: 0.3,
  },

  {
    el: document.getElementById("badge-product-section-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-section-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-product-feature-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-feature-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-feature-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-info-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-info-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-info-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-product-info-item-4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-slide-tag"),
    delay: 0.1,
    trans: 40,
  },
  {
    el: document.getElementById("badge-slide-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-slide-desc"),
    delay: 0.2,
    trans: 40,
  },
  {
    el: document.getElementById("badge-slide-list-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-slide-list-item-2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("badge-slide-list-item-3"),
    delay: 0.3,
  },
  {
    el: document.getElementById("badge-slide-list-item-4"),
    delay: 0.4,
  },
  {
    el: document.getElementById("badge-nav-contract-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("badge-nav-contract-btn"),
    delay: 0.1,
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

ledgetBadgeArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
