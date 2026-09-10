const content = {
  en: {
    nav: {
      profile: "Profile",
      work: "Portfolio",
      process: "Workflow",
      contact: "Contact",
    },
    hero: {
      eyebrow: "UX/UI & Product Designer",
      title: "Portfolio",
      name: "Vladislav Kurmanaev",
      lead: "Websites, product interfaces, mobile apps, and commercial visuals.",
      primary: "View work",
      secondary: "Contact me",
    },
    introTags: ["Websites", "UX/UI", "CRM", "E-commerce", "Mobile Apps", "Design Systems"],
    metrics: [
      ["5+ years", "UX/UI and product design experience"],
      ["Agency", "Experience in client projects and fast delivery"],
      ["Websites", "Tilda builds and custom development with a developer team"],
      ["RU / EN", "Bilingual portfolio for local and international roles"],
    ],
    profile: {
      eyebrow: "Profile",
      title: "UX/UI for websites and products.",
    },
    profileCards: [
      ["Role", "UX/UI Designer, Product Designer"],
      ["Focus", "Websites, CRM, e-commerce, mobile apps"],
      ["Experience", "Agency work, redesigns, UI kits, prototypes"],
      ["Location", "Saint Petersburg / Remote"],
    ],
    work: {
      eyebrow: "Portfolio",
      title: "Portfolio by project type.",
      body: "Websites, product interfaces, mobile apps, and commercial visuals.",
    },
    categories: [
      {
        number: "01",
        title: "Websites",
        description: "Tilda, custom builds, adaptive layouts, forms, and launch.",
        projects: [
          {
            title: "Andres Clinic",
            type: "Tilda website",
            image: "./assets/andres-clinic.png",
            link: "http://andres-clinic.ru/",
            action: "Open live site",
            accent: "mint",
            bullets: ["Clinic website", "Landing structure", "Forms and adaptive layout"],
            note: "Live Tilda site. Cover captured from the current page.",
          },
          {
            title: "Advocate Yulia Obodovskaya",
            type: "Tilda website",
            image: "./assets/msk-adv.png",
            link: "http://msk-adv.ru/",
            action: "Open live site",
            accent: "blue",
            bullets: ["Legal services", "Business disputes", "Lead form and adaptive layout"],
            note: "Live Tilda site. Cover captured from the first screen.",
          },
          {
            title: "Glamour Restaurant",
            type: "Restaurant website",
            image: "./assets/glamour-restaurant.png",
            link: "https://le-glamoure.ru/page188618309.html",
            action: "Open live site",
            accent: "rose",
            bullets: ["Menu and atmosphere", "Booking/contact flow", "Mobile-friendly layout"],
            note: "Live restaurant website. Cover captured from the current page.",
          },
          {
            title: "Detailing Studio",
            type: "Website build",
            image: "./assets/detailing-studio.png",
            link: "https://katarawy.com/demo/detailing/",
            action: "Open site",
            accent: "cyan",
            bullets: ["Premium service", "Landing structure", "Lead generation"],
            note: "Website example prepared with developer support and used with permission.",
          },
          {
            title: "Bed Store",
            type: "E-commerce website build",
            image: "./assets/bed-store.webp",
            link: "https://katarawy.com/demo/beds/",
            action: "Open site",
            accent: "cream",
            bullets: ["Product catalog", "Product presentation", "Buying scenario"],
            note: "E-commerce website example used with permission.",
          },
        ],
      },
      {
        number: "02",
        title: "Product UX/UI",
        description: "CRM, e-commerce, data, roles, filters, and core flows.",
        projects: [
          {
            title: "Manager CRM",
            type: "Lead management / CRM",
            image: "./assets/manager/dashboard.webp",
            link: "./case.html?id=manager",
            action: "Open case",
            accent: "orange",
            bullets: ["Lead intake and assignment", "Agent and team performance", "Manager dashboard and statuses"],
            note: "Prototype case for a manager workspace: lead control, reassignment, status updates, agents, teams, and performance.",
          },
          {
            title: "Mirem Shop",
            type: "E-commerce / UX/UI",
            image: "./assets/mirem-shop.png",
            link: "./case.html?id=mirem",
            action: "Open case",
            accent: "green",
            bullets: ["Catalog structure", "Product decision path", "Cart and mobile UX"],
            note: "Live online store shown as a product case: from discovery and product choice to cart and order entry.",
          },
        ],
      },
      {
        number: "03",
        title: "Mobile Apps",
        description: "Onboarding, profiles, maps, chat, applications, and states.",
        projects: [
          {
            title: "HYPE Mobile App",
            type: "Product mobile app",
            image: "./assets/hype-cover.png",
            link: "./case.html?id=hype",
            action: "Open case",
            accent: "pink",
            bullets: ["Event discovery", "Ticket checkout", "Feed, profiles, messages"],
            note: "Clickable product demo for an unpublished prototype: home, catalog, event details, checkout, tickets and profile.",
          },
          {
            title: "Influencer Event App",
            type: "Mobile marketplace",
            image: "./assets/influencer-cover.png",
            link: "./case.html?id=influencer",
            action: "Open case",
            accent: "purple",
            bullets: ["Swipe discovery", "Event pages", "Map and chat"],
            note: "Unpublished Figma prototype. The case includes a clickable public demo without sign-in.",
          },
        ],
      },
      {
        number: "04",
        title: "Commercial Visuals",
        description: "Product cards, infographics, banners, and marketplace content.",
        projects: [
          {
            title: "Marketplace Visual Content",
            type: "Product cards for marketplaces",
            image: "./assets/marketplace/cover.webp",
            link: "./case.html?id=marketplace",
            action: "Open case",
            secondaryLink: "https://clck.su/Portfolio-bimgoam-figma",
            secondaryAction: "Open Figma",
            accent: "steel",
            bullets: ["One main card per product", "Different product categories", "Figma source button"],
            note: "Commercial visual case with selected hero product cards for marketplaces: tech, electronics, beauty, kids, auto, outdoor, and cookware.",
          },
        ],
      },
    ],
    process: {
      eyebrow: "Workflow",
      title: "From brief to handoff.",
      steps: [
        ["01", "Briefing", "Clarify goals, audience, constraints, and business context."],
        ["02", "Structure", "Map user scenarios, navigation, content, and key screens."],
        ["03", "Design", "Create UI, adaptive layouts, components, and prototypes."],
        ["04", "Handoff", "Prepare states, notes, assets, and implementation details."],
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools and skills.",
      list: [
        "Figma",
        "Tilda",
        "UX/UI Design",
        "Product Design",
        "Design Systems",
        "CRM",
        "E-commerce",
        "Mobile Apps",
        "Landing Pages",
        "Prototyping",
        "CJM",
        "JTBD",
        "Usability Audit",
        "Adaptive Layouts",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to UX/UI and Product Design roles.",
      body: "Remote roles, agency projects, websites, SaaS, e-commerce, and mobile apps.",
      figma: "Figma portfolio source",
    },
  },
  ru: {
    nav: {
      profile: "Профиль",
      work: "Портфолио",
      process: "Подход",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "UX/UI и Product Designer",
      title: "Портфолио",
      name: "Владислав Курманаев",
      lead: "Сайты, продуктовые интерфейсы, мобильные приложения и коммерческий визуал.",
      primary: "Смотреть работы",
      secondary: "Связаться",
    },
    introTags: ["Сайты", "UX/UI", "CRM", "E-commerce", "Mobile Apps", "Design Systems"],
    metrics: [
      ["5+ лет", "опыта в UX/UI и продуктовом дизайне"],
      ["Агентства", "клиентские проекты и быстрая работа с задачами"],
      ["Сайты", "уверенная сборка на Tilda и кастомная разработка с командой"],
      ["RU / EN", "портфолио для российского и зарубежного рынка"],
    ],
    profile: {
      eyebrow: "Профиль",
      title: "UX/UI для сайтов и продуктов.",
    },
    profileCards: [
      ["Роль", "UX/UI дизайнер, Product Designer"],
      ["Фокус", "сайты, CRM, интернет-магазины, мобильные приложения"],
      ["Опыт", "Агентства, редизайны, UI-kit, прототипы"],
      ["Локация", "Санкт-Петербург / удалённо"],
    ],
    work: {
      eyebrow: "Портфолио",
      title: "Портфолио по направлениям.",
      body: "Сайты, продуктовые интерфейсы, мобильные приложения и коммерческий визуал.",
    },
    categories: [
      {
        number: "01",
        title: "Сайты",
        description: "Tilda, кастомная разработка, адаптивы, формы и запуск.",
        projects: [
          {
            title: "Andres Clinic",
            type: "Сайт на Tilda",
            image: "./assets/andres-clinic.png",
            link: "http://andres-clinic.ru/",
            action: "Открыть сайт",
            accent: "mint",
            bullets: ["Сайт клиники", "Структура лендинга", "Формы и адаптивы"],
            note: "Живой сайт на Tilda. Обложка снята с актуальной страницы.",
          },
          {
            title: "Адвокат Юлия Ободовская",
            type: "Сайт на Tilda",
            image: "./assets/msk-adv.png",
            link: "http://msk-adv.ru/",
            action: "Открыть сайт",
            accent: "blue",
            bullets: ["Юридические услуги", "Споры для бизнеса", "Форма заявки и адаптивы"],
            note: "Живой сайт на Tilda. Обложка снята с первого экрана.",
          },
          {
            title: "Glamour Restaurant",
            type: "Сайт ресторана",
            image: "./assets/glamour-restaurant.png",
            link: "https://le-glamoure.ru/page188618309.html",
            action: "Открыть сайт",
            accent: "rose",
            bullets: ["Меню и атмосфера", "Бронирование/контакты", "Мобильная версия"],
            note: "Живой сайт ресторана. Обложка снята с актуальной страницы.",
          },
          {
            title: "Detailing Studio",
            type: "Сборка сайта",
            image: "./assets/detailing-studio.png",
            link: "https://katarawy.com/demo/detailing/",
            action: "Открыть сайт",
            accent: "cyan",
            bullets: ["Премиальный сервис", "Структура лендинга", "Сбор заявок"],
            note: "Пример сайта, подготовленный с поддержкой разработки и использованный с разрешения.",
          },
          {
            title: "Bed Store",
            type: "Сборка интернет-магазина",
            image: "./assets/bed-store.webp",
            link: "https://katarawy.com/demo/beds/",
            action: "Открыть сайт",
            accent: "cream",
            bullets: ["Каталог товаров", "Подача продукта", "Сценарий покупки"],
            note: "Пример e-commerce сайта, использованный с разрешения.",
          },
        ],
      },
      {
        number: "02",
        title: "Product UX/UI",
        description: "CRM, e-commerce, данные, роли, фильтры и ключевые сценарии.",
        projects: [
          {
            title: "Manager CRM",
            type: "CRM для менеджера",
            image: "./assets/manager/dashboard.webp",
            link: "./case.html?id=manager",
            action: "Открыть кейс",
            accent: "orange",
            bullets: ["Приём и распределение лидов", "Агенты, команды и эффективность", "Dashboard, статусы и контроль"],
            note: "Прототип кабинета менеджера: контроль лидов, переназначения, статусы, агенты, команды и эффективность.",
          },
          {
            title: "Mirem Shop",
            type: "E-commerce / UX/UI",
            image: "./assets/mirem-shop.png",
            link: "./case.html?id=mirem",
            action: "Открыть кейс",
            accent: "green",
            bullets: ["Структура каталога", "Путь выбора товара", "Корзина и mobile UX"],
            note: "Живой интернет-магазин, показанный как продуктовый кейс: от поиска и выбора товара до корзины и входа в заказ.",
          },
        ],
      },
      {
        number: "03",
        title: "Мобильные приложения",
        description: "Онбординг, профили, карты, чат, заявки и состояния.",
        projects: [
          {
            title: "HYPE Mobile App",
            type: "Продуктовое приложение",
            image: "./assets/hype-cover.png",
            link: "./case.html?id=hype",
            action: "Открыть кейс",
            accent: "pink",
            bullets: ["Поиск событий", "Покупка билета", "Лента, профиль, чат"],
            note: "Кликабельное product demo для неопубликованного прототипа: главная, каталог, событие, checkout, билет и профиль.",
          },
          {
            title: "Influencer Event App",
            type: "Mobile marketplace",
            image: "./assets/influencer-cover.png",
            link: "./case.html?id=influencer",
            action: "Открыть кейс",
            accent: "purple",
            bullets: ["Swipe discovery", "Страницы событий", "Карта и чат"],
            note: "Неопубликованный Figma-прототип. В кейсе есть кликабельное публичное demo без логина.",
          },
        ],
      },
      {
        number: "04",
        title: "Коммерческий визуал",
        description: "Карточки, инфографика, баннеры и контент для маркетплейсов.",
        projects: [
          {
            title: "Marketplace Visual Content",
            type: "Карточки товаров для маркетплейсов",
            image: "./assets/marketplace/cover.webp",
            link: "./case.html?id=marketplace",
            action: "Открыть кейс",
            secondaryLink: "https://clck.su/Portfolio-bimgoam-figma",
            secondaryAction: "Figma",
            accent: "steel",
            bullets: ["По одной главной карточке", "Разные категории товаров", "Кнопка на Figma"],
            note: "Коммерческий кейс с выбранными обложками товаров для маркетплейсов: техника, электроника, beauty, детские, auto, outdoor и cookware.",
          },
        ],
      },
    ],
    process: {
      eyebrow: "Подход",
      title: "От брифа до передачи.",
      steps: [
        ["01", "Брифинг", "Уточняю цель, аудиторию, ограничения и бизнес-контекст."],
        ["02", "Структура", "Собираю сценарии, навигацию, контент и ключевые экраны."],
        ["03", "Дизайн", "Делаю UI, адаптивы, компоненты и прототипы."],
        ["04", "Передача", "Готовлю состояния, комментарии, ассеты и детали для разработки."],
      ],
    },
    skills: {
      eyebrow: "Навыки",
      title: "Инструменты и навыки.",
      list: [
        "Figma",
        "Tilda",
        "UX/UI Design",
        "Product Design",
        "Design Systems",
        "CRM",
        "E-commerce",
        "Mobile Apps",
        "Landing Pages",
        "Prototyping",
        "CJM",
        "JTBD",
        "Usability Audit",
        "Adaptive Layouts",
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Открыт к UX/UI и Product Design.",
      body: "Удалённые роли, агентские проекты, сайты, SaaS, e-commerce и мобильные приложения.",
      figma: "Исходное портфолио в Figma",
    },
  },
};

const accentLabels = {
  mint: "Website",
  rose: "Restaurant",
  blue: "CRM",
  green: "Store",
  amber: "Platform",
  violet: "App",
  pink: "Mobile",
  purple: "Events",
  steel: "Market",
  cyan: "Detailing",
  cream: "Beds",
  orange: "CRM",
};

const html = document.documentElement;
const elements = {
  heroTags: document.querySelector("#hero-tags"),
  metrics: document.querySelector("#metrics"),
  profileGrid: document.querySelector("#profile-grid"),
  categoryList: document.querySelector("#category-list"),
  stepGrid: document.querySelector("#step-grid"),
  skillCloud: document.querySelector("#skill-cloud"),
};

function translateStatic(lang) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const path = node.dataset.i18n.split(".");
    const value = path.reduce((acc, key) => acc?.[key], content[lang]);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });
}

function preview(project) {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.title} preview" loading="eager" />`;
  }

  return `
    <div class="placeholder-preview placeholder-${project.accent}" aria-hidden="true">
      <span>${accentLabels[project.accent] ?? "Case"}</span>
      <i></i><i></i><i></i>
    </div>
  `;
}

function projectAction(project) {
  const links = [
    project.link && { href: project.link, label: project.action },
    project.secondaryLink && { href: project.secondaryLink, label: project.secondaryAction },
  ].filter(Boolean);

  if (!links.length) {
    return "";
  }

  return `
    <div class="project-actions">
      ${links
        .map(({ href, label }) => {
          const isExternal = /^https?:\/\//.test(href);
          const target = isExternal ? ` target="_blank" rel="noreferrer"` : "";
          return `<a class="project-link" href="${href}"${target}>${label}</a>`;
        })
        .join("")}
    </div>
  `;
}

function render(lang) {
  const data = content[lang];
  translateStatic(lang);

  elements.heroTags.innerHTML = data.introTags.map((tag) => `<span>${tag}</span>`).join("");

  elements.metrics.innerHTML = data.metrics
    .map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`)
    .join("");

  elements.profileGrid.innerHTML = data.profileCards
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join("");

  elements.categoryList.innerHTML = data.categories
    .map(
      (category) => `
        <section class="work-category">
          <div class="category-head">
            <span>${category.number}</span>
            <div>
              <h3>${category.title}</h3>
              <p>${category.description}</p>
            </div>
          </div>
          <div class="project-grid">
            ${category.projects
              .map(
                (project) => `
                  <article class="project-card accent-${project.accent}">
                    <div class="project-media">${preview(project)}</div>
                    <div class="project-copy">
                      <p>${project.type}</p>
                      <h4>${project.title}</h4>
                      <ul>
                        ${project.bullets.map((item) => `<li>${item}</li>`).join("")}
                      </ul>
                      <small>${project.note}</small>
                      ${projectAction(project)}
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  elements.stepGrid.innerHTML = data.process.steps
    .map(
      ([number, title, body]) => `
        <article>
          <span>${number}</span>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");

  elements.skillCloud.innerHTML = data.skills.list.map((skill) => `<span>${skill}</span>`).join("");
}

function setLanguage(lang) {
  const safeLang = content[lang] ? lang : "en";
  html.lang = safeLang;
  html.dataset.lang = safeLang;
  localStorage.setItem("portfolio-language", safeLang);
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langButton === safeLang));
  });
  render(safeLang);
}

document.querySelectorAll("[data-lang-button]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langButton));
});

setLanguage(localStorage.getItem("portfolio-language") || "en");
