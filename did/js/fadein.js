const didArray = [
  {
    el: document.getElementById("did-ledger-did-tag"),
    delay: 0,
    trans: 40,
  },
  {
    el: document.getElementById("did-ledger-did-title"),
    delay: 0.1,
    trans: 20,
  },
  {
    el: document.getElementById("did-ledger-did-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-ledger-did-bottom-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-ledger-did-bottom-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-ledger-did-bottom-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-ledger-did-bottom-img"),
    delay: 0.1,
    trans: 10,
  },
  {
    el: document.getElementById("did-slogan-section-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-slogan-section-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-slogan-section-img-section"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-product-section-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-product-section-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-product-feature-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-product-feature-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-product-feature-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-product-info-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-product-info-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-product-info-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-product-info-item-4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-slide-tag"),
    delay: 0.1,
    trans: 40,
  },
  {
    el: document.getElementById("did-slide-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-slide-desc"),
    delay: 0.2,
    trans: 40,
  },
  {
    el: document.getElementById("did-slide-list-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-slide-list-item-2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("did-slide-list-item-3"),
    delay: 0.3,
  },
  {
    el: document.getElementById("did-slide-list-item-4"),
    delay: 0.4,
  },
  {
    el: document.getElementById("did-nav-contract-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("did-nav-contract-btn"),
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

didArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
