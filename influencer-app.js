const asset = (name) => `./assets/influencer/${name}`;

const commonNav = [
  { label: "Home", target: "home", x: 30, y: 755, w: 38, h: 52 },
  { label: "Map", target: "map", x: 105, y: 755, w: 40, h: 52 },
  { label: "Swipe", target: "swipe", x: 180, y: 755, w: 42, h: 52 },
  { label: "Chat", target: "chat", x: 252, y: 755, w: 42, h: 52 },
  { label: "Profile", target: "profile", x: 323, y: 755, w: 42, h: 52 },
];

const screens = {
  home: {
    title: "Home",
    image: asset("home-page.png"),
    hotspots: [
      { label: "Open filters", target: "filters", x: 20, y: 203, w: 102, h: 41 },
      { label: "Open venue profile", target: "venueProfile", x: 20, y: 272, w: 205, h: 47 },
      { label: "Open event", target: "event", x: 20, y: 327, w: 350, h: 400 },
      ...commonNav,
    ],
  },
  filters: {
    title: "Filters",
    image: asset("filters.png"),
    hotspots: [
      { label: "Apply filters", target: "home", x: 20, y: 733, w: 350, h: 54 },
      { label: "Reset filters", target: "home", x: 282, y: 91, w: 88, h: 40 },
    ],
  },
  swipe: {
    title: "Swipe",
    image: asset("swipe.png"),
    hotspots: [
      { label: "Open filters", target: "filters", x: 20, y: 72, w: 102, h: 40 },
      { label: "Reject event", target: "swipeDenied", x: 56, y: 619, w: 72, h: 72 },
      { label: "Open match", target: "swipeMatch", x: 151, y: 618, w: 86, h: 86 },
      { label: "Approve event", target: "event", x: 266, y: 619, w: 72, h: 72 },
      ...commonNav,
    ],
  },
  swipeDenied: {
    title: "Swipe denied",
    image: asset("swipe-denied.png"),
    hotspots: [
      { label: "Open filters", target: "filters", x: 20, y: 72, w: 102, h: 40 },
      { label: "Open match", target: "swipeMatch", x: 151, y: 618, w: 86, h: 86 },
      { label: "Approve event", target: "event", x: 266, y: 619, w: 72, h: 72 },
      ...commonNav,
    ],
  },
  swipeMatch: {
    title: "Match",
    image: asset("swipe-match.png"),
    hotspots: [
      { label: "Open event details", target: "event", x: 40, y: 594, w: 310, h: 51 },
      { label: "Stay on swipe", target: "swipe", x: 40, y: 656, w: 310, h: 51 },
      ...commonNav,
    ],
  },
  event: {
    title: "Event",
    image: asset("event-page.png"),
    hotspots: [
      { label: "Back to home", target: "home", x: 22, y: 64, w: 44, h: 44 },
      { label: "Request invitation", target: "eventSent", x: 20, y: 744, w: 350, h: 55 },
    ],
  },
  eventSent: {
    title: "Application sent",
    image: asset("event-application-sent.png"),
    hotspots: [{ label: "Back to venues", target: "home", x: 20, y: 744, w: 350, h: 55 }],
  },
  map: {
    title: "Map",
    image: asset("map-page.png"),
    hotspots: [
      { label: "Open filters", target: "filters", x: 20, y: 138, w: 102, h: 40 },
      { label: "Open selected map event", target: "mapEvent", x: 160, y: 418, w: 72, h: 72 },
      { label: "Open selected map event", target: "mapEvent", x: 300, y: 444, w: 72, h: 72 },
      ...commonNav,
    ],
  },
  mapEvent: {
    title: "Map event",
    image: asset("map-page-event.png"),
    hotspots: [
      { label: "Open event", target: "event", x: 20, y: 550, w: 350, h: 158 },
      { label: "Request invitation", target: "mapEventSent", x: 20, y: 775, w: 350, h: 52 },
    ],
  },
  mapEventSent: {
    title: "Map request sent",
    image: asset("map-page-event-send.png"),
    hotspots: [{ label: "Back to venues", target: "home", x: 20, y: 744, w: 350, h: 55 }],
  },
  chat: {
    title: "Chat",
    image: asset("chat-page.png"),
    hotspots: [
      { label: "Open pending application", target: "applicationReview", x: 65, y: 120, w: 305, h: 84 },
      { label: "Open confirmed application", target: "applicationConfirmed", x: 65, y: 210, w: 305, h: 84 },
      { label: "Open refused application", target: "applicationRefusal", x: 65, y: 490, w: 305, h: 84 },
      ...commonNav,
    ],
  },
  applicationReview: {
    title: "Application review",
    image: asset("application-for-acceptance.png"),
    hotspots: [
      { label: "Back to chat", target: "chat", x: 22, y: 63, w: 44, h: 44 },
      { label: "Confirm participation", target: "applicationConfirmed", x: 20, y: 685, w: 350, h: 50 },
      { label: "Cancel application", target: "applicationRefusal", x: 20, y: 745, w: 350, h: 50 },
    ],
  },
  applicationConfirmed: {
    title: "Application confirmed",
    image: asset("application-confirmation.png"),
    hotspots: [
      { label: "Back to chat", target: "chat", x: 22, y: 63, w: 44, h: 44 },
      { label: "Confirm participation", target: "chat", x: 20, y: 685, w: 350, h: 50 },
      { label: "Cancel application", target: "applicationRefusal", x: 20, y: 745, w: 350, h: 50 },
    ],
  },
  applicationRefusal: {
    title: "Application refusal",
    image: asset("application-refusal.png"),
    hotspots: [
      { label: "Cancel application", target: "chat", x: 40, y: 516, w: 310, h: 50 },
      { label: "Back", target: "applicationConfirmed", x: 40, y: 576, w: 310, h: 50 },
    ],
  },
  profile: {
    title: "Profile",
    image: asset("profile-page.png"),
    hotspots: [
      { label: "Open settings", target: "settings", x: 330, y: 64, w: 42, h: 42 },
      { label: "Open swipes", target: "swipe", x: 246, y: 416, w: 124, h: 50 },
      { label: "Open feedback", target: "feedback", x: 20, y: 580, w: 350, h: 66 },
      { label: "Open portfolio", target: "portfolio", x: 20, y: 695, w: 350, h: 50 },
      ...commonNav,
    ],
  },
  feedback: {
    title: "Feedback",
    image: asset("feedback-page.png"),
    hotspots: [{ label: "Back to profile", target: "profile", x: 22, y: 63, w: 44, h: 44 }],
  },
  settings: {
    title: "Settings",
    image: asset("settings.png"),
    hotspots: [{ label: "Back to profile", target: "profile", x: 22, y: 63, w: 44, h: 44 }],
  },
  venueProfile: {
    title: "Venue profile",
    image: asset("profile-venue.png"),
    hotspots: [
      { label: "Back to home", target: "home", x: 22, y: 64, w: 44, h: 44 },
      { label: "View events", target: "profileVenueEvent", x: 247, y: 375, w: 122, h: 48 },
      { label: "Open venue event", target: "event", x: 20, y: 614, w: 350, h: 100 },
      { label: "Open gallery", target: "gallery", x: 20, y: 760, w: 350, h: 82 },
    ],
  },
  profileVenueEvent: {
    title: "Venue event profile",
    image: asset("profile-venue-event.png"),
    hotspots: [
      { label: "Back to venue profile", target: "venueProfile", x: 22, y: 64, w: 44, h: 44 },
      { label: "Open event", target: "event", x: 20, y: 418, w: 350, h: 400 },
    ],
  },
  gallery: {
    title: "Gallery",
    image: asset("gallery.png"),
    hotspots: [{ label: "Back to venue", target: "venueProfile", x: 0, y: 0, w: 390, h: 844 }],
  },
  portfolio: {
    title: "Portfolio",
    image: asset("portfolio-page.png"),
    hotspots: [
      { label: "Back to profile", target: "profile", x: 22, y: 63, w: 44, h: 44 },
      { label: "Open case", target: "casePage", x: 20, y: 122, w: 170, h: 118 },
      { label: "Add case", target: "editCase", x: 20, y: 744, w: 350, h: 50 },
    ],
  },
  casePage: {
    title: "Case page",
    image: asset("case-page.png"),
    hotspots: [
      { label: "Back to portfolio", target: "portfolio", x: 22, y: 64, w: 44, h: 44 },
      { label: "Edit case", target: "editCase", x: 20, y: 744, w: 350, h: 50 },
    ],
  },
  editCase: {
    title: "Edit case",
    image: asset("edited-case-page.png"),
    hotspots: [
      { label: "Back to portfolio", target: "portfolio", x: 22, y: 64, w: 44, h: 44 },
      { label: "Preview case", target: "casePage", x: 316, y: 64, w: 54, h: 44 },
      { label: "Edit media", target: "editMediaSheet", x: 20, y: 168, w: 350, h: 216 },
      { label: "Edit venue name", target: "editBottomSheet", x: 20, y: 450, w: 350, h: 56 },
    ],
  },
  editMediaSheet: {
    title: "Edit media",
    image: asset("edited-case-media-sheet.png"),
    hotspots: [
      { label: "Cancel media action", target: "editCase", x: 20, y: 745, w: 350, h: 50 },
      { label: "Select gallery", target: "editCase", x: 20, y: 685, w: 350, h: 48 },
    ],
  },
  editBottomSheet: {
    title: "Edit venue name",
    image: asset("edited-case-bottom-sheet.png"),
    hotspots: [
      { label: "Save field", target: "editCase", x: 20, y: 762, w: 350, h: 51 },
      { label: "Open keyboard", target: "editKeyboard", x: 20, y: 616, w: 350, h: 116 },
    ],
  },
  editKeyboard: {
    title: "Edit with keyboard",
    image: asset("edited-case-keyboard.png"),
    hotspots: [{ label: "Save field", target: "editCase", x: 20, y: 428, w: 350, h: 50 }],
  },
};

const orderedScreens = [
  "home",
  "filters",
  "swipe",
  "event",
  "map",
  "chat",
  "profile",
  "venueProfile",
  "portfolio",
  "editCase",
];

const image = document.querySelector("#prototype-image");
const layer = document.querySelector("#hotspot-layer");
const screenList = document.querySelector("#screen-list");
const closeDemo = document.querySelector("[data-close-demo]");

function toPercent(value, base) {
  return `${(value / base) * 100}%`;
}

function setScreen(id, updateHash = true) {
  const screen = screens[id] || screens.home;
  image.src = screen.image;
  image.alt = `Influencer app ${screen.title} screen`;
  layer.innerHTML = "";

  screen.hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hotspot";
    button.setAttribute("aria-label", spot.label);
    button.style.left = toPercent(spot.x, 390);
    button.style.top = toPercent(spot.y, 844);
    button.style.width = toPercent(spot.w, 390);
    button.style.height = toPercent(spot.h, 844);
    button.addEventListener("click", () => setScreen(spot.target));
    layer.appendChild(button);
  });

  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.screen === id));
  });

  if (updateHash && location.hash !== `#${id}`) {
    history.replaceState(null, "", `${location.pathname}${location.search}#${id}`);
  }
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
