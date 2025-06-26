const walletArray = [
  {
    el: document.getElementById("wallet-ledger-wallet-tag"),
    delay: 0,
    trans: 40,
  },
  {
    el: document.getElementById("wallet-ledger-wallet-title"),
    delay: 0.1,
    trans: 20,
  },
  {
    el: document.getElementById("wallet-ledger-wallet-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("wallet-ledger-wallet-bottom-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-ledger-wallet-bottom-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("wallet-ledger-wallet-bottom-desc"),
    delay: 0.2,
  },
  {
    el: document.getElementById("wallet-ledger-wallet-bottom-img"),
    delay: 0.1,
    trans: 10,
  },
  {
    el: document.getElementById("wallet-product-section-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-product-section-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("wallet-product-feature-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-product-feature-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-product-feature-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-product-info-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-product-info-item-2"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-product-info-item-3"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-product-info-item-4"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-slide-tag"),
    delay: 0.1,
    trans: 40,
  },
  {
    el: document.getElementById("wallet-slide-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("wallet-slide-desc"),
    delay: 0.2,
    trans: 40,
  },
  {
    el: document.getElementById("wallet-slide-list-item-1"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-slide-list-item-2"),
    delay: 0.2,
  },
  {
    el: document.getElementById("wallet-slide-list-item-3"),
    delay: 0.3,
  },
  {
    el: document.getElementById("wallet-slide-list-item-4"),
    delay: 0.4,
  },
  {
    el: document.getElementById("wallet-nav-contract-title"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-nav-contract-btn"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-faq-tag"),
    delay: 0.1,
  },
  {
    el: document.getElementById("wallet-faq-title"),
    delay: 0.2,
  },
  {
    el: document.getElementById("wallet-faq-search"),
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

walletArray.forEach(({ el, delay, trans }) => {
  observer(el, delay, trans);
});
