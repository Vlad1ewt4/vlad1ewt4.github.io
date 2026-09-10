const cases = {
  manager: {
    accent: "#ff7a2f",
    en: {
      title: "Manager CRM",
      eyebrow: "Product UX/UI / CRM prototype",
      lead:
        "A manager workspace for controlling lead intake, assignment, deal status, agent workload, and team performance from one operational flow.",
      tags: ["CRM", "Lead assignment", "Dashboard", "Agents", "Teams"],
      primary: "Contact Vladislav",
      visualLabel: "Manager CRM flow",
      visualRange: "01-09",
      info: [
        ["01", "Task", "Turn a broad manager account into a clear CRM flow: receive leads, distribute them between agents, update statuses, and keep team performance visible."],
        ["02", "Logic", "I structured the prototype as one working scenario: overview, lead intake, lead details, agent assignment, status change, deals, agents, and team performance."],
        ["03", "Result", "The case now reads as a product prototype rather than a folder of separate screens, showing how a manager moves from incoming leads to daily control."],
      ],
      screensTitle: "Prototype flow",
      screens: [
        ["Dashboard", "The manager starts with the current pipeline, lead status, revenue, transactions, and communication counters."],
        ["Lead Intake", "New leads enter through quick add or bulk upload, then appear in an unassigned queue for manager review."],
        ["Lead Details", "The lead card keeps contact data, source, assignment, status, notes, and communication in one place."],
        ["Assignment", "The manager selects one or several leads and assigns the right agent without leaving the lead queue."],
        ["Status Control", "Lead status changes are handled as a clear operational action, not hidden inside the table."],
        ["Deals", "The deals screen supports follow-up work and keeps status changes tied to the sales pipeline."],
        ["Agents", "Agent statistics show workload, deal outcomes, and conversion signals for performance review."],
        ["Teams", "Team screens connect team lead, agents, status, revenue, and won/lost results."],
      ],
      heroImage: "./assets/manager/dashboard.webp",
      heroDetail: "./assets/manager/lead-details.webp",
      shots: [
        ["Dashboard", "Operational overview for leads, revenue, transactions, and communication activity.", "./assets/manager/dashboard.webp"],
        ["Lead Intake", "Entry point for quick add, bulk upload, filters, unassigned leads, and assignment action.", "./assets/manager/lead-intake.webp"],
        ["Quick Add", "Fast manual lead creation for cases where a manager receives a lead outside the bulk upload flow.", "./assets/manager/quick-add-lead.webp"],
        ["Lead Details", "One lead record with contact data, source, current owner, status, notes, and communication actions.", "./assets/manager/lead-details.webp"],
        ["Assign Agent", "Agent selection modal for transferring lead ownership to the right person.", "./assets/manager/select-agent.webp"],
        ["Status Update", "Focused status-change action that keeps pipeline movement explicit.", "./assets/manager/status-change.webp"],
        ["Deals", "Assigned leads and deal statuses for follow-up and sales control.", "./assets/manager/deals-status.webp"],
        ["Agent Statistics", "Performance view for workload, revenue, win/loss data, and activity review.", "./assets/manager/agent-statistics.webp"],
        ["Team Performance", "Team-level performance with lead distribution, status totals, revenue, and agents.", "./assets/manager/team-performance.webp"],
      ],
    },
    ru: {
      title: "Manager CRM",
      eyebrow: "Product UX/UI / CRM-прототип",
      lead:
        "Кабинет менеджера для контроля входящих лидов, назначений, статусов сделок, загрузки агентов и эффективности команды в одном рабочем сценарии.",
      tags: ["CRM", "Лиды", "Dashboard", "Агенты", "Команды"],
      primary: "Связаться",
      visualLabel: "Логика CRM менеджера",
      visualRange: "01-09",
      info: [
        ["01", "Задача", "Собрать широкий кабинет менеджера в понятный CRM-сценарий: принять лиды, распределить их между агентами, обновлять статусы и видеть эффективность команды."],
        ["02", "Логика", "Я выстроил прототип как один рабочий путь: обзор, приём лидов, карточка лида, назначение агента, смена статуса, сделки, агенты и команды."],
        ["03", "Результат", "Кейс теперь читается как продуктовый прототип, а не как папка отдельных экранов: видно, как менеджер проходит путь от входящих лидов до ежедневного контроля."],
      ],
      screensTitle: "Сценарий прототипа",
      screens: [
        ["Dashboard", "Менеджер начинает с воронки, статусов лидов, выручки, транзакций и активности коммуникаций."],
        ["Приём лидов", "Новые лиды попадают через быстрый ввод или массовую загрузку, затем идут в очередь без назначения."],
        ["Карточка лида", "В одной карточке собраны контакты, источник, ответственный агент, статус, заметки и коммуникация."],
        ["Назначение", "Менеджер выбирает одного или несколько лидов и назначает подходящего агента прямо из очереди."],
        ["Статус", "Смена статуса вынесена в отдельное действие, чтобы движение по воронке было очевидным."],
        ["Сделки", "Экран сделок поддерживает follow-up и связывает статусы с продажным процессом."],
        ["Агенты", "Статистика агента показывает загрузку, выручку, выигранные/потерянные сделки и активность."],
        ["Команды", "Командные экраны связывают лида команды, агентов, статус, выручку и результаты."],
      ],
      heroImage: "./assets/manager/dashboard.webp",
      heroDetail: "./assets/manager/lead-details.webp",
      shots: [
        ["Dashboard", "Операционный обзор по лидам, выручке, транзакциям и активности коммуникаций.", "./assets/manager/dashboard.webp"],
        ["Приём лидов", "Точка входа для quick add, bulk upload, фильтров, очереди без назначения и назначения агента.", "./assets/manager/lead-intake.webp"],
        ["Quick Add", "Быстрое ручное создание лида, когда заявка пришла вне массовой загрузки.", "./assets/manager/quick-add-lead.webp"],
        ["Карточка лида", "Запись лида с контактами, источником, владельцем, статусом, заметками и действиями связи.", "./assets/manager/lead-details.webp"],
        ["Назначение агента", "Модальное окно выбора агента для передачи лида нужному человеку.", "./assets/manager/select-agent.webp"],
        ["Смена статуса", "Отдельное действие для понятного движения лида по воронке.", "./assets/manager/status-change.webp"],
        ["Сделки", "Назначенные лиды и статусы сделок для follow-up и контроля продаж.", "./assets/manager/deals-status.webp"],
        ["Статистика агента", "Экран эффективности: загрузка, выручка, win/loss и активность.", "./assets/manager/agent-statistics.webp"],
        ["Эффективность команды", "Командный обзор: распределение лидов, статусы, выручка и агенты.", "./assets/manager/team-performance.webp"],
      ],
    },
  },
  marketplace: {
    accent: "#9fb5c9",
    en: {
      title: "Marketplace Visual Content",
      eyebrow: "Commercial visuals / marketplace cards",
      lead:
        "A selected set of main product cards for marketplaces: each visual quickly presents the product, key benefit, specification, and reason to open the listing.",
      tags: ["Product cards", "Hero covers", "Ozon / WB", "Commercial design", "E-commerce"],
      primary: "Contact Vladislav",
      secondary: "Open Figma",
      external: "https://clck.su/Portfolio-bimgoam-figma",
      visualLabel: "Main marketplace cards",
      visualRange: "01-15",
      info: [
        ["01", "Task", "Show commercial marketplace design without overloading the portfolio with every export from the folder."],
        ["02", "Selection", "I kept one strong main card per product position: product at the center, short value message, readable specs, and a style matched to the category."],
        ["03", "Result", "The case reads as a compact prototype of marketplace visuals across home tech, electronics, beauty, kids, auto, outdoor, and cookware categories."],
      ],
      screensTitle: "Selected main product cards",
      screens: [
        ["Hero Covers", "First-slide compositions made for marketplace search results and product pages."],
        ["Category Style", "Every card uses a visual tone that fits the product instead of forcing one template on all goods."],
        ["Readable Specs", "Key numbers and benefits are kept large enough to scan quickly."],
        ["Figma Source", "The case keeps a separate button to the Figma file for deeper review."],
      ],
      heroImage: "./assets/marketplace/cover.webp",
      heroDetail: "./assets/marketplace/air-duster-cover.webp",
      shots: [
        ["Cordless Air Duster", "A technical product card with a dramatic product angle, speed, battery, modes, and warranty callouts.", "./assets/marketplace/air-duster-cover.webp"],
        ["Water Filter Pitcher", "A softer natural composition for a household product, with volume and sensor benefits kept clear.", "./assets/marketplace/water-pitcher-cover.webp"],
        ["LED Garland", "Seasonal visual with a warm emotional hook, length, bulb count, and usage details.", "./assets/marketplace/garland-cover.webp"],
        ["Spark Plugs", "Automotive card with strong contrast, compatibility, set quantity, and reliability message.", "./assets/marketplace/spark-plugs-cover.webp"],
        ["Hair Growth Lotion", "Bright beauty card with benefit blocks, percentage claim, and a large product render.", "./assets/marketplace/hair-lotion-cover.webp"],
        ["Blue Mountain Bike", "Outdoor product card with size, speed, rider height, wheel diameter, and a clean light style.", "./assets/marketplace/blue-bicycle-cover.webp"],
        ["Air Fryer", "Home appliance cover built around power, volume, programs, guarantee, and appetizing usage context.", "./assets/marketplace/air-fryer-cover.webp"],
        ["Titan Pan", "Cookware hero card with brand, size, warranty, and realistic kitchen context.", "./assets/marketplace/titan-pan-cover.webp"],
        ["Ferra Pan", "High-impact orange product card for induction cookware with size and warranty visible immediately.", "./assets/marketplace/ferra-pan-cover.webp"],
        ["Cordless Vacuum", "Premium dark card showing the main product, attachments, suction, power, runtime, and cleaning modes.", "./assets/marketplace/vacuum-cover.webp"],
        ["Motorcycle Mirrors", "Auto/moto product card with kit quantity, thread size, compatibility, and trust markers.", "./assets/marketplace/motorcycle-mirrors-cover.webp"],
        ["Toy Tent", "Kids product card with playful color, age range, use scenarios, windows, and included case.", "./assets/marketplace/toy-tent-cover.webp"],
        ["Smart TV Stick", "Electronics cover with app ecosystem, HDMI, memory, storage, CPU, warranty, and Android version.", "./assets/marketplace/tv-stick-cover.webp"],
        ["Black Mountain Bike", "Darker outdoor card with technical callouts, wheel size, suspension, and speed details.", "./assets/marketplace/black-bicycle-cover.webp"],
        ["Cookware Set", "Kitchen set card with brand, two pan sizes, detachable handle, stove compatibility, and warranty.", "./assets/marketplace/pan-set-cover.webp"],
      ],
    },
    ru: {
      title: "Marketplace Visual Content",
      eyebrow: "Коммерческий визуал / карточки маркетплейсов",
      lead:
        "Подборка главных карточек товаров для маркетплейсов: каждый визуал быстро показывает товар, ключевую выгоду, характеристику и повод открыть карточку.",
      tags: ["Карточки товаров", "Главные обложки", "Ozon / WB", "Коммерческий дизайн", "E-commerce"],
      primary: "Связаться",
      secondary: "Открыть Figma",
      external: "https://clck.su/Portfolio-bimgoam-figma",
      visualLabel: "Главные карточки",
      visualRange: "01-15",
      info: [
        ["01", "Задача", "Показать коммерческий дизайн для маркетплейсов без перегруза всеми экспортами из папки."],
        ["02", "Отбор", "Я оставил по одной сильной главной карточке на товарную позицию: товар в центре, короткая выгода, читаемые характеристики и стиль под категорию."],
        ["03", "Результат", "Кейс читается как компактный прототип маркетплейс-визуала для техники, электроники, beauty, детских, auto, outdoor и kitchen-товаров."],
      ],
      screensTitle: "Выбранные главные карточки",
      screens: [
        ["Обложки", "Первые слайды для выдачи и карточки товара."],
        ["Категории", "У каждой карточки свой визуальный тон под товар, а не один общий шаблон."],
        ["Характеристики", "Главные числа и преимущества вынесены крупно, чтобы их можно было быстро считать."],
        ["Figma", "В кейсе оставлена отдельная кнопка на исходник для подробного просмотра."],
      ],
      heroImage: "./assets/marketplace/cover.webp",
      heroDetail: "./assets/marketplace/air-duster-cover.webp",
      shots: [
        ["Воздуходувка", "Техническая карточка с эффектным ракурсом товара, скоростью, аккумулятором, режимами и гарантией.", "./assets/marketplace/air-duster-cover.webp"],
        ["Кувшин-фильтр", "Более мягкая natural-композиция для бытового товара: объем и датчик очистки видны сразу.", "./assets/marketplace/water-pitcher-cover.webp"],
        ["Гирлянда", "Сезонный визуал с теплым эмоциональным образом, длиной, количеством лампочек и деталями товара.", "./assets/marketplace/garland-cover.webp"],
        ["Свечи зажигания", "Auto-карточка с контрастом, совместимостью, количеством в комплекте и сообщением про надежность.", "./assets/marketplace/spark-plugs-cover.webp"],
        ["Лосьон для роста волос", "Яркая beauty-карточка с блоками преимуществ, процентом и крупным изображением продукта.", "./assets/marketplace/hair-lotion-cover.webp"],
        ["Велосипед Dinos", "Outdoor-карточка с размером, скоростью, ростом, диаметром колес и чистой светлой подачей.", "./assets/marketplace/blue-bicycle-cover.webp"],
        ["Аэрогриль", "Карточка бытовой техники: мощность, объем, программы, гарантия и аппетитный сценарий использования.", "./assets/marketplace/air-fryer-cover.webp"],
        ["Сковорода Titan", "Кухонная hero-карточка с брендом, размером, гарантией и реалистичным контекстом.", "./assets/marketplace/titan-pan-cover.webp"],
        ["Сковорода Ferra", "Контрастная оранжевая карточка для индукционной сковороды с размером и гарантией на первом экране.", "./assets/marketplace/ferra-pan-cover.webp"],
        ["Пылесос", "Темная премиальная карточка с товаром, насадками, мощностью, временем работы и режимами уборки.", "./assets/marketplace/vacuum-cover.webp"],
        ["Зеркала для мотоцикла", "Moto-карточка с количеством, резьбой, совместимостью и маркерами доверия.", "./assets/marketplace/motorcycle-mirrors-cover.webp"],
        ["Игровая палатка", "Детская карточка с яркой подачей, возрастом, сценариями игры, окнами и чехлом в комплекте.", "./assets/marketplace/toy-tent-cover.webp"],
        ["Smart TV Stick", "Обложка электроники: приложения, HDMI, память, накопитель, ядра, гарантия и версия Android.", "./assets/marketplace/tv-stick-cover.webp"],
        ["Горный велосипед", "Темная outdoor-карточка с техническими выносками, колесами, амортизатором и скоростями.", "./assets/marketplace/black-bicycle-cover.webp"],
        ["Набор сковород", "Карточка набора: бренд, два размера, съемная ручка, совместимость с плитами и гарантия.", "./assets/marketplace/pan-set-cover.webp"],
      ],
    },
  },
  mirem: {
    accent: "#45d2b3",
    en: {
      title: "Mirem Shop",
      eyebrow: "E-commerce / UX/UI",
      lead:
        "A live online store with a complex assortment, where the user needs to quickly understand categories, compare products, check details, and move to ordering.",
      tags: ["Product UX", "Catalog", "Product cards", "Cart", "Adaptive"],
      primary: "Contact Vladislav",
      secondary: "Open live store",
      external: "https://mirem.shop/",
      visualLabel: "E-commerce case",
      visualRange: "01-05",
      info: [
        ["01", "Task", "Make the shopping path clear for a specialized assortment: the user should find the right category, evaluate a product, avoid getting lost in service pages, and move to order."],
        ["02", "Solution", "I structured the flow around the main decision points: homepage recommendations, catalog, product card, comparison, cart, and account entry. On mobile, the focus is quick search and bottom navigation."],
        ["03", "Result", "The project is published as a live online store. The case shows the core e-commerce logic: discovery, selection, product verification, and the transition to ordering."],
      ],
      screensTitle: "Shopping flow",
      screens: [
        ["Homepage", "Main entry points into purchase: search, categories, recommendations, cart, comparison, and account access."],
        ["Catalog", "Category structure helps narrow a large assortment and move toward the right product group."],
        ["Product Card", "The page focuses on image, price, details, and the primary action to add the product to the cart."],
        ["Cart", "The final point before order: selected items are collected in one place before checkout or contact."],
      ],
      heroImage: "./assets/mirem-shop.png",
      heroMobile: "./assets/mirem-shop-mobile.png",
      shots: [
        ["Homepage", "The first screen combines catalog access, recommendations, cart, comparison, and account entry without forcing an extra step.", "./assets/mirem-shop.png"],
        ["Mobile Homepage", "The mobile version keeps search, product cards, and bottom navigation close to the user's thumb.", "./assets/mirem-shop-mobile.png"],
        ["Catalog", "The category page helps users move from a broad assortment to a specific product group.", "./assets/mirem-shop-catalog.png"],
        ["Product Card", "The product page keeps attention on the item image, price, details, and add-to-cart action.", "./assets/mirem-shop-product.png"],
        ["Cart", "The cart gathers selected items and prepares the user for the next purchase step.", "./assets/mirem-shop-cart.png"],
      ],
    },
    ru: {
      title: "Mirem Shop",
      eyebrow: "E-commerce / UX/UI",
      lead:
        "Живой интернет-магазин со сложным ассортиментом, где пользователю нужно быстро понять категории, сравнить товары, проверить детали и перейти к заказу.",
      tags: ["Product UX", "Каталог", "Карточки товаров", "Корзина", "Адаптив"],
      primary: "Связаться",
      secondary: "Открыть сайт",
      external: "https://mirem.shop/",
      visualLabel: "E-commerce кейс",
      visualRange: "01-05",
      info: [
        ["01", "Задача", "Сделать покупательский путь понятным для специфичного ассортимента: пользователь должен быстро найти категорию, оценить товар, не потеряться в служебных страницах и перейти к заказу."],
        ["02", "Решение", "Я выстроил сценарий вокруг главных точек принятия решения: рекомендации на главной, каталог, карточка товара, сравнение, корзина и вход в аккаунт. На мобильной версии акцент сделан на быстрый поиск и нижнюю навигацию."],
        ["03", "Результат", "Проект опубликован как рабочий интернет-магазин. В кейсе показана основная e-commerce логика: поиск, выбор, проверка деталей товара и переход к заказу."],
      ],
      screensTitle: "Путь покупки",
      screens: [
        ["Главная", "Основные входы в покупку: поиск, категории, рекомендации, корзина, сравнение и аккаунт."],
        ["Каталог", "Категории помогают сузить большой ассортимент и перейти к нужной группе товаров."],
        ["Карточка товара", "Фокус на изображении, цене, деталях и главном действии — добавить товар в корзину."],
        ["Корзина", "Финальная точка перед заказом: выбранные позиции собраны в одном месте."],
      ],
      heroImage: "./assets/mirem-shop.png",
      heroMobile: "./assets/mirem-shop-mobile.png",
      shots: [
        ["Главная", "Первый экран объединяет вход в каталог, рекомендации, корзину, сравнение и аккаунт без лишнего шага.", "./assets/mirem-shop.png"],
        ["Главная Mobile", "На мобильной версии поиск, карточки товаров и нижняя навигация остаются близко к пользователю.", "./assets/mirem-shop-mobile.png"],
        ["Каталог", "Страница категорий помогает перейти от широкого ассортимента к конкретной товарной группе.", "./assets/mirem-shop-catalog.png"],
        ["Карточка товара", "Страница удерживает внимание на изображении, цене, деталях и добавлении товара в корзину.", "./assets/mirem-shop-product.png"],
        ["Корзина", "Корзина собирает выбранные позиции и готовит пользователя к следующему шагу покупки.", "./assets/mirem-shop-cart.png"],
      ],
    },
  },
  hype: {
    accent: "#ff4aa3",
    en: {
      title: "HYPE Mobile App",
      eyebrow: "Product case / clickable demo",
      lead:
        "A mobile product for discovering events in Dubai, browsing content and organizer profiles, buying tickets, paying, and returning to purchased tickets without leaving the app.",
      tags: ["Product UX", "Events", "Ticketing", "Checkout", "Feed"],
      primary: "Contact Vladislav",
      secondary: "Open interactive demo",
      external: "./hype-app.html#home",
      visualLabel: "Clickable prototype",
      visualRange: "01-12",
      info: [
        ["01", "Task", "Unify a broad event ecosystem in one mobile scenario: editorial home, upcoming events, organizer profiles, location context, social feed, messages, and ticket purchase."],
        ["02", "Flow", "I structured the core path from discovery to purchase: home, event catalog, event details, seat selection, payment method, billing, payment success, and ticket."],
        ["03", "Status", "Unpublished Figma prototype packaged as a public clickable demo. The portfolio version keeps the original visual screens and adds fixed iPhone UI, scroll, and transitions."],
      ],
      screensTitle: "Key screens",
      screens: [
        ["Home", "Entry point for weekly highlights, articles, upcoming events, venues, attractions, and feed."],
        ["Events", "Filtering and browsing of upcoming events with categories, favorites, and a card grid."],
        ["Purchase Flow", "Seat selection, checkout, payment method, billing details, success state, and ticket."],
        ["Profile & Feed", "User profile, organizer context, social content gallery, messages, notifications, and saved tickets."],
      ],
      heroImage: "./assets/hype/01-home-demo.png",
      shots: [
        ["Home", "Discovery hub with weekly events, editorial blocks, articles, venues, attractions, and feed entry.", "./assets/hype/01-home-demo.png"],
        ["Events", "Category tabs, event cards, favorites, filters, and search entry for browsing the catalog.", "./assets/hype/upcoming-events.png"],
        ["Event Details", "Event content, organizer, map, attendees, comments, price, and buy-ticket entry.", "./assets/hype/event-details.png"],
        ["Seat Selection", "Business, VIP, and economy seats with selected seats, section choice, and total price.", "./assets/hype/buy-ticket.png"],
        ["Checkout", "Summary before payment: selected seats, payment method, billing details, note, and total.", "./assets/hype/checkout.png"],
        ["Payment Method", "Choice between Binance, card, and bank account with clear continuation logic.", "./assets/hype/payment-binance.png"],
        ["Billing Details", "Personal data form with country selection and the next step in checkout.", "./assets/hype/add-billing-details.png"],
        ["Payment Success", "Confirmation screen with order details and a direct path to the purchased ticket.", "./assets/hype/payment-successful.png"],
        ["Ticket", "Purchased ticket with event details, barcode, seat, gate, and PDF action.", "./assets/hype/my-tickets.png"],
        ["Feed", "Visual content gallery that supports event discovery and social browsing.", "./assets/hype/feed.png"],
        ["Messages", "Communication layer for chats, organizers, and user activity.", "./assets/hype/messages.png"],
        ["Profile", "User profile with stats, discovery recommendations, and saved content.", "./assets/hype/user-profile.png"],
      ],
    },
    ru: {
      title: "HYPE Mobile App",
      eyebrow: "Продуктовый кейс / кликабельное demo",
      lead:
        "Мобильный продукт для поиска событий в Дубае: пользователь смотрит подборки и ленту, выбирает событие, покупает билет, оплачивает и возвращается к купленному билету внутри приложения.",
      tags: ["Product UX", "События", "Билеты", "Checkout", "Feed"],
      primary: "Связаться",
      secondary: "Открыть демо",
      external: "./hype-app.html#home",
      visualLabel: "Кликабельный прототип",
      visualRange: "01-12",
      info: [
        ["01", "Задача", "Собрать широкий event-сервис в понятный мобильный сценарий: главная с контентом, каталог событий, профили организаторов, карта, лента, сообщения и покупка билета."],
        ["02", "Сценарий", "Я выстроил путь от интереса до покупки: главная, афиша, детали события, выбор мест, способ оплаты, данные покупателя, успешная оплата и билет."],
        ["03", "Статус", "Неопубликованный Figma-прототип, упакованный в публичное кликабельное demo. В портфолио сохранены исходные экраны, добавлены фиксированные iPhone UI, скролл и переходы."],
      ],
      screensTitle: "Ключевые экраны",
      screens: [
        ["Главная", "Точка входа: события недели, статьи, upcoming events, лучшие площадки, attractions и feed."],
        ["Афиша", "Фильтрация и просмотр событий по категориям, избранное, поиск и карточки мероприятий."],
        ["Покупка билета", "Выбор мест, checkout, способ оплаты, данные покупателя, успешный статус и билет."],
        ["Профиль и лента", "Профиль пользователя, организатор, галерея контента, сообщения, уведомления и купленные билеты."],
      ],
      heroImage: "./assets/hype/01-home-demo.png",
      shots: [
        ["Главная", "Discovery hub: события недели, промо-блоки, статьи, площадки, attractions и вход в feed.", "./assets/hype/01-home-demo.png"],
        ["Афиша", "Категории, карточки событий, избранное, фильтры и поиск по каталогу.", "./assets/hype/upcoming-events.png"],
        ["Детали события", "Описание, организатор, карта, участники, комментарии, цена и вход в покупку.", "./assets/hype/event-details.png"],
        ["Выбор мест", "Business, VIP и economy места, выбранные секции и итоговая стоимость.", "./assets/hype/buy-ticket.png"],
        ["Checkout", "Сводка перед оплатой: места, способ оплаты, данные покупателя, заметка и total.", "./assets/hype/checkout.png"],
        ["Способ оплаты", "Выбор между Binance, картой и банковским счётом с понятной логикой продолжения.", "./assets/hype/payment-binance.png"],
        ["Данные покупателя", "Форма billing details, выбор страны и переход к финальному checkout.", "./assets/hype/add-billing-details.png"],
        ["Успешная оплата", "Подтверждение заказа, данные платежа и быстрый переход к билету.", "./assets/hype/payment-successful.png"],
        ["Билет", "Купленный билет: событие, barcode, место, вход, дата и скачивание PDF.", "./assets/hype/my-tickets.png"],
        ["Feed", "Визуальная галерея контента, которая поддерживает discovery и social browsing.", "./assets/hype/feed.png"],
        ["Messages", "Коммуникационный слой для чатов, организаторов и активности пользователя.", "./assets/hype/messages.png"],
        ["Profile", "Профиль пользователя со статистикой, рекомендациями и сохранённым контентом.", "./assets/hype/user-profile.png"],
      ],
    },
  },
  influencer: {
    accent: "#ff4f9d",
    en: {
      title: "Influencer Event App",
      eyebrow: "Clickable app demo",
      lead:
        "A creator-event marketplace flow shown as a clickable visual demo inside the phone. The screens use Figma exports, so the interface stays visually identical to the original mockups.",
      tags: ["Home screen", "Marketplace", "Events", "Chat"],
      primary: "Contact Vladislav",
      secondary: "Open full demo",
      external: "./influencer-app.html#home",
      visualLabel: "Clickable visual demo",
      visualRange: "01-18",
      info: [
        ["01", "Task", "Help venues find relevant creators for events faster, and help influencers discover collaborations with clear conditions, location, requirements, and application status."],
        ["02", "Flow", "The creator opens the event feed, filters offers, checks the venue profile or map, sends a request, gets status updates in chat, and adds completed collaborations to the portfolio."],
        ["03", "Status", "Product concept / MVP prototype. Core roles, navigation, event discovery, application states, chat, venue profile, and creator portfolio flows are designed for product validation."],
      ],
      screensTitle: "Figma screens",
      screens: [
        ["Home", "Recommended events, search, filters, and quick application entry."],
        ["Event", "Event details, application state, requirements, and CTA."],
        ["Map", "Nearby events, venue context, and location browsing."],
        ["Chat", "Communication after match, organizer details, and next steps."],
      ],
      heroImage: "./assets/influencer/home-page.png",
      shots: [
        ["Home", "Main discovery feed", "./assets/influencer/home-page.png"],
        ["Filters", "Event filtering", "./assets/influencer/filters.png"],
        ["Swipe", "Event matching", "./assets/influencer/swipe.png"],
        ["Match", "Approved match state", "./assets/influencer/swipe-match.png"],
        ["Event", "Venue event page", "./assets/influencer/event-page.png"],
        ["Application Sent", "Request confirmation", "./assets/influencer/event-application-sent.png"],
        ["Application Review", "Acceptance flow", "./assets/influencer/application-for-acceptance.png"],
        ["Confirmed", "Final participation state", "./assets/influencer/application-confirmation.png"],
        ["Map", "Venue discovery map", "./assets/influencer/map-page.png"],
        ["Map Event", "Selected venue sheet", "./assets/influencer/map-page-event.png"],
        ["Chat", "Application conversations", "./assets/influencer/chat-page.png"],
        ["Profile", "Influencer profile", "./assets/influencer/profile-page.png"],
        ["Venue Profile", "Restaurant profile", "./assets/influencer/profile-venue.png"],
        ["Portfolio", "Creator case grid", "./assets/influencer/portfolio-page.png"],
        ["Case Page", "Portfolio case details", "./assets/influencer/case-page.png"],
        ["Editing", "Case editing", "./assets/influencer/edited-case-page.png"],
        ["Feedback", "Venue ratings", "./assets/influencer/feedback-page.png"],
        ["Settings", "Profile settings", "./assets/influencer/settings.png"],
      ],
      app: {
        city: "Moscow",
        greeting: "Hi, Alina",
        title: "Events for your profile",
        search: "Search event or venue",
        chips: ["All", "Paid", "Today", "Fashion"],
        match: "92% match",
        category: "Fashion show",
        event: "Aurora Fashion Night",
        venue: "Royal Hall",
        date: "Today, 20:00",
        payout: "25,000 RUB",
        cta: "Apply",
        secondary: "View details",
        queueTitle: "New requests",
        requests: [
          ["Brand opening", "Approved", "18:30"],
          ["Beauty pop-up", "Pending", "Tomorrow"],
        ],
        nav: ["Home", "Map", "Chat", "Me"],
      },
    },
    ru: {
      title: "Influencer Event App",
      eyebrow: "Кликабельное демо приложения",
      lead:
        "Marketplace-сценарий для creator/event продукта в виде кликабельного visual demo внутри телефона. Экраны взяты из Figma-экспорта, поэтому интерфейс визуально остается как в исходном макете.",
      tags: ["Главная", "Marketplace", "Events", "Chat"],
      primary: "Связаться",
      secondary: "Открыть full demo",
      external: "./influencer-app.html#home",
      visualLabel: "Clickable visual demo",
      visualRange: "01-18",
      info: [
        ["01", "Задача", "Помочь площадкам быстрее находить подходящих креаторов для событий, а инфлюенсерам — видеть релевантные коллаборации с понятными условиями, локацией, требованиями и статусом заявки."],
        ["02", "Сценарий", "Автор открывает ленту событий, фильтрует предложения, изучает карточку или карту, отправляет заявку, получает статус в чате и добавляет завершенную коллаборацию в портфолио."],
        ["03", "Статус", "Продуктовая концепция / MVP-прототип. Продуманы роли, навигация, поиск событий, состояния заявок, чат, профиль площадки и сценарий портфолио автора для проверки логики продукта."],
      ],
      screensTitle: "Экраны из Figma",
      screens: [
        ["Главная", "Рекомендации событий, поиск, фильтры и быстрый вход в заявку."],
        ["Event", "Детали события, статус заявки, требования и CTA."],
        ["Map", "События рядом, контекст площадок и просмотр на карте."],
        ["Chat", "Коммуникация после match, детали организатора и следующие шаги."],
      ],
      heroImage: "./assets/influencer/home-page.png",
      shots: [
        ["Главная", "Лента подбора событий", "./assets/influencer/home-page.png"],
        ["Фильтры", "Настройка выдачи событий", "./assets/influencer/filters.png"],
        ["Swipe", "Подбор события", "./assets/influencer/swipe.png"],
        ["Match", "Состояние совпадения", "./assets/influencer/swipe-match.png"],
        ["Event", "Страница события", "./assets/influencer/event-page.png"],
        ["Application Sent", "Заявка отправлена", "./assets/influencer/event-application-sent.png"],
        ["Application Review", "Рассмотрение заявки", "./assets/influencer/application-for-acceptance.png"],
        ["Confirmed", "Подтверждение участия", "./assets/influencer/application-confirmation.png"],
        ["Map", "Карта площадок", "./assets/influencer/map-page.png"],
        ["Map Event", "Карточка события на карте", "./assets/influencer/map-page-event.png"],
        ["Chat", "Диалоги по заявкам", "./assets/influencer/chat-page.png"],
        ["Profile", "Профиль инфлюенсера", "./assets/influencer/profile-page.png"],
        ["Venue Profile", "Профиль ресторана", "./assets/influencer/profile-venue.png"],
        ["Portfolio", "Сетка кейсов автора", "./assets/influencer/portfolio-page.png"],
        ["Case Page", "Детали кейса", "./assets/influencer/case-page.png"],
        ["Editing", "Редактирование кейса", "./assets/influencer/edited-case-page.png"],
        ["Feedback", "Отзывы площадок", "./assets/influencer/feedback-page.png"],
        ["Settings", "Настройки профиля", "./assets/influencer/settings.png"],
      ],
      app: {
        city: "Москва",
        greeting: "Привет, Алина",
        title: "События под твой профиль",
        search: "Поиск события или площадки",
        chips: ["Все", "Платные", "Сегодня", "Fashion"],
        match: "92% match",
        category: "Fashion show",
        event: "Aurora Fashion Night",
        venue: "Royal Hall",
        date: "Сегодня, 20:00",
        payout: "25 000 ₽",
        cta: "Откликнуться",
        secondary: "Детали",
        queueTitle: "Новые заявки",
        requests: [
          ["Brand opening", "Одобрено", "18:30"],
          ["Beauty pop-up", "На проверке", "Завтра"],
        ],
        nav: ["Home", "Map", "Chat", "Me"],
      },
    },
  },
};

const staticCopy = {
  en: {
    nav: { back: "Back to portfolio", contact: "Contact" },
    footer: "Portfolio demo by Vladislav Kurmanaev",
  },
  ru: {
    nav: { back: "Назад в портфолио", contact: "Контакты" },
    footer: "Demo-страница портфолио Владислава Курманаева",
  },
};

const html = document.documentElement;
const root = document.querySelector("#case-root");

function getCaseId() {
  const params = new URLSearchParams(window.location.search);
  return cases[params.get("id")] ? params.get("id") : "hype";
}

function translateStatic(lang) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const path = node.dataset.i18n.split(".");
    const value = path.reduce((acc, key) => acc?.[key], staticCopy[lang]);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });
}

function phone(screen, index, caseId) {
  const dark = index % 2 === 0;
  return `
    <article class="phone">
      <div class="screen ${dark ? "dark" : ""}">
        <div class="screen-top">
          <b>${screen[0]}</b>
          <span class="screen-dot"></span>
        </div>
        <div class="screen-title">${screen[0]}</div>
        <div class="screen-card">
          <strong>${screen[1]}</strong>
          <i></i>
        </div>
        <div class="screen-list">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="screen-nav" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
        </nav>
      </div>
    </article>
  `;
}

function appDemo(data, caseId) {
  return `
    <div class="figma-app-showcase">
      <article class="figma-phone" aria-label="${data.visualLabel}">
        <iframe
          title="${data.title} live demo"
          src="./${caseId}-app.html?embed=1#home"
          loading="eager"
        ></iframe>
      </article>
    </div>
  `;
}

function websitePreview(data) {
  return `
    <div class="website-preview">
      <article class="browser-preview">
        <span></span>
        <img src="${data.heroImage}" alt="${data.title} desktop preview" loading="eager" />
      </article>
      <article class="mobile-preview">
        <img src="${data.heroMobile}" alt="${data.title} mobile preview" loading="eager" />
      </article>
    </div>
  `;
}

function managerPreview(data) {
  return `
    <div class="manager-preview">
      <article class="manager-browser-preview">
        <span></span>
        <img src="${data.heroImage}" alt="${data.title} dashboard preview" loading="eager" />
      </article>
      <article class="manager-detail-preview">
        <img src="${data.heroDetail}" alt="${data.title} lead details preview" loading="eager" />
      </article>
    </div>
  `;
}

function marketplacePreview(data) {
  return `
    <div class="marketplace-preview">
      <article class="marketplace-cover-preview">
        <img src="${data.heroImage}" alt="${data.title} selected marketplace cards" loading="eager" />
      </article>
      <article class="marketplace-float-card">
        <img src="${data.heroDetail}" alt="${data.title} product-card example" loading="eager" />
      </article>
    </div>
  `;
}

function caseVisual(data, caseId) {
  if (caseId === "influencer" || caseId === "hype") {
    return appDemo(data, caseId);
  }

  if (caseId === "marketplace") {
    return marketplacePreview(data);
  }

  if (caseId === "manager") {
    return managerPreview(data);
  }

  if (caseId === "mirem") {
    return websitePreview(data);
  }

  return `
    <div class="phone-row">
      ${data.screens.slice(0, 3).map((item, index) => phone(item, index, caseId)).join("")}
    </div>
  `;
}

function externalButton(data) {
  if (!data.external) {
    return "";
  }

  return `<a class="case-button secondary" href="${data.external}" target="_blank" rel="noreferrer">${data.secondary}</a>`;
}

function screenShowcase(data, caseId) {
  if (data.shots) {
    return `
      <div class="figma-screen-grid figma-screen-grid-${caseId}">
        ${data.shots
          .map(
            ([title, body, src], index) => `
              <article class="figma-screen-card">
                <div class="figma-screen-media">
                  <img src="${src}" alt="${data.title}: ${title}" loading="eager" />
                </div>
                <div class="figma-screen-copy">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${title}</h3>
                  <p>${body}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    `;
  }

  return `
    <div class="screen-grid">
      ${data.screens
        .map(
          ([title, body], index) => `
            <article class="screen-tile">
              <header>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <span class="case-pill">${data.tags[index % data.tags.length]}</span>
              </header>
              <h3>${title}</h3>
              <p>${body}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function render(lang) {
  const caseId = getCaseId();

  const selected = cases[caseId];
  const data = selected[lang];

  html.lang = lang;
  html.dataset.lang = lang;
  document.body.dataset.case = caseId;
  document.body.style.setProperty("--accent", selected.accent);
  document.title = `${data.title} - Vladislav Kurmanaev`;
  translateStatic(lang);

  root.innerHTML = `
    <section class="case-hero case-shell">
      <div>
        <p class="eyebrow">${data.eyebrow}</p>
        <h1>${data.title}</h1>
        <p class="case-lead">${data.lead}</p>
        <div class="case-tags">
          ${data.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="case-actions">
          <a class="case-button primary" href="./index.html#contact">${data.primary}</a>
          ${externalButton(data)}
        </div>
      </div>
      <aside class="case-visual case-visual-${caseId}" aria-label="${data.visualLabel}">
        <div class="case-visual-head">
          <span>${data.visualLabel}</span>
          <strong>${data.visualRange || "01-03"}</strong>
        </div>
        ${caseVisual(data, caseId)}
      </aside>
    </section>

    <section class="case-info case-shell">
      ${data.info
        .map(
          ([number, title, body]) => `
            <article>
              <span>${number}</span>
              <h2>${title}</h2>
              <p>${body}</p>
            </article>
          `,
        )
        .join("")}
    </section>

    <section class="screen-section case-shell">
      <p class="eyebrow">${data.visualLabel}</p>
      <h2>${data.screensTitle}</h2>
      ${screenShowcase(data, caseId)}
    </section>

    <footer class="case-footer">
      <span>${staticCopy[lang].footer}</span>
      <a href="./index.html#work">${staticCopy[lang].nav.back}</a>
    </footer>
  `;
}

function setLanguage(lang) {
  const safeLang = staticCopy[lang] ? lang : "en";
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
