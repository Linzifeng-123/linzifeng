(function () {
  const content = window.SITE_CONTENT;
  const state = {
    lang: "zh",
    selectedYear: "all",
    expanded: true,
  };

  function $(selector) {
    return document.querySelector(selector);
  }

  function $all(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  function setText(selector, value) {
    const node = $(selector);
    if (node) {
      node.textContent = value;
    }
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    if (text !== undefined) {
      element.textContent = text;
    }
    return element;
  }

  function renderNav(copy) {
    const nav = $("#site-nav");
    nav.innerHTML = "";
    copy.nav.forEach(([id, label]) => {
      const link = createElement("a", "", label);
      link.href = `#${id}`;
      nav.appendChild(link);
    });
  }

  function renderStats(copy) {
    const container = $("[data-stats]");
    container.innerHTML = "";
    copy.stats.forEach(([value, label]) => {
      const item = createElement("div", "stat-item");
      item.appendChild(createElement("strong", "", value));
      item.appendChild(createElement("span", "", label));
      container.appendChild(item);
    });
  }

  function renderParagraphs(copy) {
    const container = $("[data-about-paragraphs]");
    container.innerHTML = "";
    copy.about.paragraphs.forEach((paragraph) => {
      container.appendChild(createElement("p", "", paragraph));
    });
  }

  function renderTimeline(selector, items) {
    const container = $(selector);
    container.innerHTML = "";
    items.forEach(([date, text]) => {
      const row = createElement("div", "timeline-item");
      row.appendChild(createElement("time", "", date));
      row.appendChild(createElement("p", "", text));
      container.appendChild(row);
    });
  }

  function renderResearch(copy) {
    const container = $("[data-research-items]");
    container.innerHTML = "";
    copy.research.items.forEach((item, index) => {
      const card = createElement("article", "research-card");
      card.appendChild(createElement("span", "research-number", String(index + 1).padStart(2, "0")));
      card.appendChild(createElement("h3", "", item.title));
      card.appendChild(createElement("p", "", item.text));
      container.appendChild(card);
    });
  }

  function publicationYears() {
    return Array.from(new Set(content.publications.map((item) => item.year))).sort((a, b) => b - a);
  }

  function filterPublications() {
    const selected = state.selectedYear;
    return content.publications.filter((item) => selected === "all" || String(item.year) === selected);
  }

  function renderYearFilters(copy) {
    const container = $("[data-year-filters]");
    container.innerHTML = "";
    const allButton = createElement("button", "year-button", copy.publications.allYears);
    allButton.type = "button";
    allButton.dataset.year = "all";
    allButton.classList.toggle("active", state.selectedYear === "all");
    container.appendChild(allButton);

    publicationYears().forEach((year) => {
      const button = createElement("button", "year-button", String(year));
      button.type = "button";
      button.dataset.year = String(year);
      button.classList.toggle("active", state.selectedYear === String(year));
      container.appendChild(button);
    });
  }

  function renderPublications(copy) {
    const list = $("[data-publication-list]");
    const filtered = filterPublications();
    const visible = state.expanded ? filtered : filtered.filter((item) => item.featured).slice(0, 10);
    list.innerHTML = "";

    visible.forEach((item) => {
      const article = createElement("article", "publication-item");
      const meta = createElement("div", "publication-meta");
      meta.appendChild(createElement("span", "publication-year", String(item.year)));
      meta.appendChild(createElement("span", "publication-journal", item.journal));
      article.appendChild(meta);
      article.appendChild(createElement("p", "publication-authors", item.authors));
      article.appendChild(createElement("p", "publication-title", item.title));
      article.appendChild(createElement("p", "", item.note));
      list.appendChild(article);
    });

    const toggle = $("[data-publication-toggle]");
    toggle.textContent = state.expanded ? copy.publications.showLess : copy.publications.showMore;
    toggle.hidden = filtered.length <= visible.length && !state.expanded;
  }

  function togglePublications() {
    state.expanded = !state.expanded;
    renderPublications(content[state.lang]);
  }

  function renderList(selector, items) {
    const container = $(selector);
    container.innerHTML = "";
    items.forEach((item) => {
      container.appendChild(createElement("li", "", item));
    });
  }

  function renderProfileLinks() {
    const container = $("[data-profile-links]");
    container.innerHTML = "";
    content.links.forEach((link) => {
      const anchor = createElement("a", "", link.label);
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      container.appendChild(anchor);
    });
  }

  function setLanguage(lang) {
    state.lang = lang;
    const copy = content[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = copy.documentTitle;

    setText("[data-brand-name]", copy.hero.name);
    setText("[data-brand-school]", lang === "zh" ? "四川大学" : "Sichuan University");
    setText("[data-language-toggle]", copy.languageToggle);
    setText("[data-hero-subtitle]", copy.hero.subtitle);
    setText("[data-hero-name]", copy.hero.name);
    setText("[data-hero-title]", copy.hero.title);
    setText("[data-hero-summary]", copy.hero.summary);
    setText("[data-primary-action]", copy.hero.primaryAction);
    setText("[data-secondary-action]", copy.hero.secondaryAction);
    setText("[data-about-eyebrow]", copy.about.eyebrow);
    setText("[data-about-heading]", copy.about.heading);
    setText("[data-education-title]", copy.about.educationTitle);
    setText("[data-appointments-title]", copy.about.appointmentsTitle);
    setText("[data-research-eyebrow]", copy.research.eyebrow);
    setText("[data-research-heading]", copy.research.heading);
    setText("[data-publications-eyebrow]", copy.publications.eyebrow);
    setText("[data-publications-heading]", copy.publications.heading);
    setText("[data-publications-intro]", copy.publications.intro);
    setText("[data-honors-eyebrow]", copy.honors.eyebrow);
    setText("[data-honors-heading]", copy.honors.heading);
    setText("[data-grants-title]", copy.honors.grantsTitle);
    setText("[data-awards-title]", copy.honors.awardsTitle);
    setText("[data-service-eyebrow]", copy.service.eyebrow);
    setText("[data-service-heading]", copy.service.heading);
    setText("[data-contact-eyebrow]", copy.contact.eyebrow);
    setText("[data-contact-heading]", copy.contact.heading);
    setText("[data-email-label]", copy.contact.emailLabel);
    setText("[data-address-label]", copy.contact.addressLabel);
    setText("[data-address]", copy.contact.address);
    setText("[data-link-title]", copy.contact.linkTitle);
    setText("[data-footer]", copy.footer);

    renderNav(copy);
    renderStats(copy);
    renderParagraphs(copy);
    renderTimeline("[data-education]", copy.about.education);
    renderTimeline("[data-appointments]", copy.about.appointments);
    renderResearch(copy);
    renderYearFilters(copy);
    renderPublications(copy);
    renderList("[data-grants]", copy.honors.grants);
    renderList("[data-awards]", copy.honors.awards);
    renderList("[data-service-items]", copy.service.items);
    renderProfileLinks();
  }

  function setupEventHandlers() {
    $("[data-language-toggle]").addEventListener("click", () => {
      setLanguage(state.lang === "zh" ? "en" : "zh");
    });

    $(".menu-button").addEventListener("click", (event) => {
      const button = event.currentTarget;
      const nav = $("#site-nav");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });

    $("#site-nav").addEventListener("click", () => {
      $("#site-nav").classList.remove("open");
      $(".menu-button").setAttribute("aria-expanded", "false");
    });

    $("[data-year-filters]").addEventListener("click", (event) => {
      const button = event.target.closest("[data-year]");
      if (!button) {
        return;
      }
      state.selectedYear = button.dataset.year;
      state.expanded = true;
      renderYearFilters(content[state.lang]);
      renderPublications(content[state.lang]);
    });

    $("[data-publication-toggle]").addEventListener("click", togglePublications);

    $("[data-back-to-top]").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      $("[data-back-to-top]").classList.toggle("visible", window.scrollY > 600);
    });
  }

  setupEventHandlers();
  setLanguage("zh");

  window.homepageApp = {
    setLanguage,
    filterPublications,
    renderPublications,
    togglePublications,
  };
})();
