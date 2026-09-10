const asset = (name) => `./assets/hype/${name}`;

const baseWidth = 430;

function hs(label, target, x, y, w, h) {
  return { label, target, x, y, w, h };
}

const screens = {
  home: {
    title: "Home",
    image: asset("01-home.png"),
    height: 4790,
    hasTabbar: true,
    fixedImage: asset("tab-bar-home.png"),
    hotspots: [
      hs("Open search", "search", 210, 58, 50, 58),
      hs("Open notifications", "notifications", 268, 58, 48, 58),
      hs("Open messages", "messages", 322, 58, 48, 58),
      hs("Open menu", "sidebar", 376, 58, 48, 58),
      hs("Open upcoming events", "upcoming", 15, 90, 400, 410),
      hs("Open event details", "eventDetails", 8, 1260, 200, 260),
      hs("Open event details", "eventDetails", 220, 1260, 200, 260),
      hs("Open organizer profile", "organizerProfile", 10, 2400, 200, 260),
      hs("Open user profile", "userProfile", 324, 735, 70, 70),
      hs("Open feed", "feed", 8, 4180, 414, 500),
    ],
    fixedHotspots: [
      hs("Open home", "home", 18, 862, 58, 70),
      hs("Open upcoming events", "upcoming", 104, 862, 58, 70),
      hs("Open feed", "feed", 190, 862, 58, 70),
      hs("Open map", "direction", 276, 862, 58, 70),
      hs("Open profile", "userProfile", 362, 862, 58, 70),
    ],
  },
  upcoming: {
    title: "Upcoming Events",
    image: asset("upcoming-events.png"),
    height: 1500,
    hasFixedUi: true,
    fixedImage: asset("tab-bar-events.png"),
    hotspots: [
      hs("Back to home", "home", 16, 70, 78, 42),
      hs("Open search", "search", 322, 70, 42, 42),
      hs("Open filters", "filters", 382, 68, 38, 42),
      hs("Open event details", "eventDetails", 20, 170, 186, 224),
      hs("Open event details", "eventDetails", 224, 170, 186, 224),
      hs("Open event details", "eventDetails", 20, 412, 186, 224),
      hs("Open event details", "eventDetails", 224, 412, 186, 224),
    ],
    fixedHotspots: [
      hs("Open home", "home", 18, 862, 58, 70),
      hs("Open upcoming events", "upcoming", 104, 862, 58, 70),
      hs("Open feed", "feed", 190, 862, 58, 70),
      hs("Open map", "direction", 276, 862, 58, 70),
      hs("Open profile", "userProfile", 362, 862, 58, 70),
    ],
  },
  eventDetails: {
    title: "Event Details",
    image: asset("event-details.png"),
    height: 2332,
    hasFixedUi: true,
    fixedImage: asset("bottom-bar-event.png"),
    hotspots: [
      hs("Back to events", "upcoming", 14, 58, 78, 42),
      hs("Open share", "share", 326, 418, 84, 34),
      hs("Open location map", "direction", 70, 540, 290, 82),
      hs("Open organizer profile", "organizerProfile", 18, 690, 300, 58),
      hs("Open comments", "storyComments", 16, 1220, 390, 250),
    ],
    fixedHotspots: [hs("Buy ticket", "buyTicket", 20, 849, 390, 56)],
  },
  buyTicket: {
    title: "Buy Ticket",
    image: asset("buy-ticket.png"),
    height: 1060,
    hasFixedUi: true,
    fixedImage: asset("bottom-bar-ticket.png"),
    hotspots: [hs("Back to event", "eventDetails", 16, 66, 78, 42)],
    fixedHotspots: [hs("Continue to checkout", "checkout", 20, 849, 390, 56)],
  },
  checkout: {
    title: "Checkout",
    image: asset("checkout.png"),
    height: 932,
    hotspots: [
      hs("Back to seats", "buyTicket", 16, 74, 78, 42),
      hs("Close checkout", "eventDetails", 386, 78, 34, 34),
      hs("Open payment method", "paymentBinance", 20, 320, 390, 74),
      hs("Open billing details", "addBilling", 20, 404, 390, 74),
    ],
  },
  paymentBinance: {
    title: "Payment Method",
    image: asset("payment-binance.png"),
    height: 932,
    hotspots: [
      hs("Back to checkout", "checkout", 16, 74, 78, 42),
      hs("Close payment", "checkout", 386, 78, 34, 34),
      hs("Choose debit card", "debitCard", 20, 586, 390, 50),
      hs("Choose bank account", "bankAccount", 20, 648, 390, 50),
      hs("Continue", "addCreditCard", 20, 854, 390, 40),
    ],
  },
  debitCard: {
    title: "Debit Card",
    image: asset("payment-debit-card.png"),
    height: 932,
    hotspots: [
      hs("Back to payment method", "paymentBinance", 16, 74, 78, 42),
      hs("Close payment", "checkout", 386, 78, 34, 34),
      hs("Continue", "addCreditCard", 20, 854, 390, 40),
    ],
  },
  bankAccount: {
    title: "Bank Account",
    image: asset("payment-bank-account.png"),
    height: 932,
    hotspots: [
      hs("Back to payment method", "paymentBinance", 16, 74, 78, 42),
      hs("Close payment", "checkout", 386, 78, 34, 34),
      hs("Continue", "addCreditCard", 20, 854, 390, 40),
    ],
  },
  addCreditCard: {
    title: "Checkout Card Added",
    image: asset("add-credit-card.png"),
    height: 932,
    hotspots: [
      hs("Back to checkout", "checkout", 16, 74, 78, 42),
      hs("Change payment method", "paymentBinance", 330, 335, 74, 44),
      hs("Open billing details", "addBilling", 20, 404, 390, 74),
    ],
  },
  addBilling: {
    title: "Billing Details",
    image: asset("add-billing-details.png"),
    height: 932,
    hotspots: [
      hs("Back to checkout", "addCreditCard", 16, 74, 78, 42),
      hs("Close checkout", "eventDetails", 386, 78, 34, 34),
      hs("Open country dropdown", "countryDropdown", 40, 718, 350, 42),
      hs("Continue to final checkout", "finalCheckout", 20, 860, 390, 40),
    ],
  },
  countryDropdown: {
    title: "Country Dropdown",
    image: asset("country-dropdown.png"),
    height: 932,
    hotspots: [
      hs("Close country dropdown", "addBilling", 14, 78, 42, 42),
      hs("Select UAE", "addBilling", 20, 290, 390, 60),
    ],
  },
  finalCheckout: {
    title: "Final Checkout",
    image: asset("final-checkout.png"),
    height: 932,
    hotspots: [
      hs("Back to checkout", "addBilling", 16, 74, 78, 42),
      hs("Edit billing details", "addBilling", 350, 424, 58, 48),
      hs("Pay now", "paymentSuccessful", 20, 858, 390, 42),
    ],
  },
  paymentSuccessful: {
    title: "Payment Successful",
    image: asset("payment-successful.png"),
    height: 932,
    hotspots: [
      hs("Close payment success", "home", 386, 78, 34, 34),
      hs("View my ticket", "myTickets", 20, 712, 390, 42),
    ],
  },
  myTickets: {
    title: "My Tickets",
    image: asset("my-tickets.png"),
    height: 932,
    hotspots: [
      hs("Close tickets", "home", 386, 78, 34, 34),
      hs("Open event details", "eventDetails", 20, 132, 390, 180),
    ],
  },
  feed: {
    title: "Feed",
    image: asset("feed.png"),
    height: 932,
    hasFixedUi: true,
    fixedImage: asset("tab-bar-feed.png"),
    hotspots: [
      hs("Open search", "search", 20, 118, 390, 38),
      hs("Open feed details", "feedDetails", 20, 176, 128, 260),
      hs("Open story", "storyCamel", 150, 176, 130, 130),
      hs("Open story", "storyAtlantis", 282, 176, 128, 130),
      hs("Open story", "storyDiveFlamingo", 20, 440, 128, 128),
      hs("Open story", "storyBurjNight", 150, 570, 128, 258),
    ],
    fixedHotspots: [
      hs("Open home", "home", 18, 862, 58, 70),
      hs("Open upcoming events", "upcoming", 104, 862, 58, 70),
      hs("Open feed", "feed", 190, 862, 58, 70),
      hs("Open map", "direction", 276, 862, 58, 70),
      hs("Open profile", "userProfile", 362, 862, 58, 70),
    ],
  },
  feedDetails: {
    title: "Feed Details",
    image: asset("feed-details.png"),
    height: 932,
    hotspots: [
      hs("Back to feed", "feed", 18, 86, 76, 42),
      hs("Open comments", "storyComments", 376, 754, 42, 52),
      hs("Open share", "share", 376, 820, 42, 52),
    ],
  },
  storyDiveFlamingo: {
    title: "Dive Sport Story",
    image: asset("story-dive-flamingo.png"),
    height: 932,
    hotspots: [
      hs("Back to feed", "feed", 18, 86, 76, 42),
      hs("Open comments", "storyComments", 376, 754, 42, 52),
      hs("Open share", "share", 376, 820, 42, 52),
    ],
  },
  storyPalmView: {
    title: "Palm View Story",
    image: asset("story-palm-view.png"),
    height: 932,
    hotspots: [hs("Back to feed", "feed", 18, 86, 76, 42)],
  },
  storyBurjNight: {
    title: "Burj Night Story",
    image: asset("story-burj-night.png"),
    height: 932,
    hotspots: [
      hs("Back to feed", "feed", 18, 86, 76, 42),
      hs("Open comments", "storyComments", 376, 754, 42, 52),
    ],
  },
  storyAtlantis: {
    title: "Atlantis Story",
    image: asset("story-atlantis.png"),
    height: 932,
    hotspots: [hs("Back to feed", "feed", 18, 86, 76, 42)],
  },
  storyCamel: {
    title: "Camel Story",
    image: asset("story-camel.png"),
    height: 932,
    hotspots: [hs("Back to feed", "feed", 18, 86, 76, 42)],
  },
  storyBurjAlArab: {
    title: "Burj Al Arab Story",
    image: asset("story-burj-al-arab.png"),
    height: 932,
    hotspots: [hs("Back to feed", "feed", 18, 86, 76, 42)],
  },
  storyMuseum: {
    title: "Museum Story",
    image: asset("story-museum.png"),
    height: 932,
    hotspots: [hs("Back to feed", "feed", 18, 86, 76, 42)],
  },
  storyComments: {
    title: "Comments",
    image: asset("story-comments.png"),
    height: 932,
    hotspots: [
      hs("Back to story", "feedDetails", 0, 0, 430, 260),
      hs("Send comment", "feed", 20, 856, 390, 42),
    ],
  },
  filters: {
    title: "Filters",
    image: asset("filters.png"),
    height: 932,
    hotspots: [
      hs("Close filters", "upcoming", 14, 78, 42, 42),
      hs("Apply filters", "upcoming", 20, 852, 390, 48),
    ],
  },
  search: {
    title: "Search",
    image: asset("search.png"),
    height: 932,
    hotspots: [
      hs("Close search", "home", 14, 78, 42, 42),
      hs("Cancel search", "home", 350, 122, 66, 40),
      hs("Open filters", "filters", 382, 78, 40, 42),
      hs("Open upcoming events", "upcoming", 20, 210, 220, 34),
    ],
  },
  messages: {
    title: "Messages",
    image: asset("messages.png"),
    height: 932,
    hotspots: [
      hs("Close messages", "home", 14, 78, 42, 42),
      hs("Open search", "search", 336, 78, 34, 36),
      hs("Open chat", "messageDetails", 20, 260, 390, 58),
      hs("Open chat", "messageDetails", 20, 325, 390, 58),
    ],
  },
  messageDetails: {
    title: "Message Details",
    image: asset("messages-details.png"),
    height: 932,
    hotspots: [
      hs("Back to messages", "messages", 16, 96, 42, 42),
      hs("Send message", "messages", 365, 618, 42, 42),
    ],
  },
  notifications: {
    title: "Notifications",
    image: asset("notifications.png"),
    height: 932,
    hotspots: [
      hs("Close notifications", "home", 14, 78, 42, 42),
      hs("Open profile", "userProfile", 20, 144, 390, 64),
      hs("Open messages", "messages", 20, 220, 390, 64),
    ],
  },
  sidebar: {
    title: "Sidebar Menu",
    image: asset("sidebar-menu.png"),
    height: 932,
    hotspots: [
      hs("Close menu", "home", 380, 68, 42, 42),
      hs("Open upcoming events", "upcoming", 118, 190, 290, 44),
      hs("Open my tickets", "myTickets", 118, 390, 290, 48),
      hs("Open messages", "messages", 118, 486, 290, 48),
      hs("Open user profile", "userProfile", 118, 584, 290, 48),
      hs("Open feed", "feed", 118, 332, 290, 48),
    ],
  },
  userProfile: {
    title: "User Profile",
    image: asset("user-profile.png"),
    height: 932,
    hasFixedUi: true,
    fixedImage: asset("tab-bar-profile.png"),
    hotspots: [
      hs("Open search", "search", 224, 74, 42, 42),
      hs("Open notifications", "notifications", 280, 72, 42, 42),
      hs("Open messages", "messages", 332, 72, 42, 42),
      hs("Open menu", "sidebar", 382, 72, 42, 42),
      hs("Open feed", "feed", 20, 584, 390, 260),
    ],
    fixedHotspots: [
      hs("Open home", "home", 18, 862, 58, 70),
      hs("Open upcoming events", "upcoming", 104, 862, 58, 70),
      hs("Open feed", "feed", 190, 862, 58, 70),
      hs("Open map", "direction", 276, 862, 58, 70),
      hs("Open profile", "userProfile", 362, 862, 58, 70),
    ],
  },
  organizerProfile: {
    title: "Organizer Profile",
    image: asset("organizer-profile.png"),
    height: 932,
    hotspots: [
      hs("Back to event", "eventDetails", 16, 74, 78, 42),
      hs("Message organizer", "messageDetails", 220, 394, 190, 40),
      hs("Open events", "upcoming", 200, 474, 92, 40),
    ],
  },
  direction: {
    title: "Direction",
    image: asset("direction.png"),
    height: 932,
    hasFixedUi: true,
    fixedImage: asset("tab-bar-map.png"),
    hotspots: [
      hs("Back to event", "eventDetails", 16, 74, 78, 42),
      hs("Open event details", "eventDetails", 20, 286, 390, 90),
    ],
    fixedHotspots: [
      hs("Open home", "home", 18, 862, 58, 70),
      hs("Open upcoming events", "upcoming", 104, 862, 58, 70),
      hs("Open feed", "feed", 190, 862, 58, 70),
      hs("Open map", "direction", 276, 862, 58, 70),
      hs("Open profile", "userProfile", 362, 862, 58, 70),
    ],
  },
  share: {
    title: "Share",
    image: asset("share.png"),
    height: 932,
    hotspots: [
      hs("Close share", "eventDetails", 380, 594, 34, 34),
      hs("Back to event", "eventDetails", 16, 74, 78, 42),
    ],
  },
};

const orderedScreens = [
  "home",
  "upcoming",
  "eventDetails",
  "buyTicket",
  "checkout",
  "paymentBinance",
  "paymentSuccessful",
  "myTickets",
  "feed",
  "messages",
  "userProfile",
  "sidebar",
];

const image = document.querySelector("#prototype-image");
const layer = document.querySelector("#hotspot-layer");
const fixedLayer = document.querySelector("#fixed-hotspot-layer");
const phoneDevice = document.querySelector(".phone-device");
const fixedImage = document.querySelector("#phone-tabbar");
const screenList = document.querySelector("#screen-list");
const closeDemo = document.querySelector("[data-close-demo]");
const scrollBox = document.querySelector("#phone-scroll");

function toPercent(value, base) {
  return `${(value / base) * 100}%`;
}

function renderHotspots(targetLayer, hotspots, height) {
  targetLayer.innerHTML = "";

  hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hotspot";
    button.setAttribute("aria-label", spot.label);
    button.style.left = toPercent(spot.x, baseWidth);
    button.style.top = toPercent(spot.y, height);
    button.style.width = toPercent(spot.w, baseWidth);
    button.style.height = toPercent(spot.h, height);
    button.addEventListener("click", () => setScreen(spot.target));
    targetLayer.appendChild(button);
  });
}

function setScreen(id, updateHash = true) {
  const screenId = screens[id] ? id : "home";
  const screen = screens[screenId];
  image.src = screen.image;
  image.alt = `HYPE app ${screen.title} screen`;
  fixedImage.src = screen.fixedImage || asset("tab-bar-home.png");
  phoneDevice.classList.toggle("has-tabbar", Boolean(screen.hasTabbar || screen.hasFixedUi));
  renderHotspots(layer, screen.hotspots, screen.height);
  renderHotspots(fixedLayer, screen.fixedHotspots || [], 932);

  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.screen === screenId));
  });

  if (updateHash && location.hash !== `#${screenId}`) {
    history.replaceState(null, "", `${location.pathname}${location.search}#${screenId}`);
  }

  requestAnimationFrame(() => {
    scrollBox.scrollTo({ top: 0, left: 0 });
  });
}

screenList.innerHTML = orderedScreens
  .map((id) => `<button type="button" data-screen="${id}" aria-pressed="false">${screens[id].title}</button>`)
  .join("");

screenList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-screen]");
  if (button) {
    setScreen(button.dataset.screen);
  }
});

closeDemo?.addEventListener("click", (event) => {
  if (document.referrer && history.length > 1) {
    event.preventDefault();
    history.back();
  }
});

window.addEventListener("hashchange", () => {
  setScreen(location.hash.slice(1) || "home", false);
});

setScreen(location.hash.slice(1) || "home", false);
