const readyElementary = document.querySelector("#elementary-ready");
const readyJunior = document.querySelector("#junior-ready");
const plannedContainer = document.querySelector("#planned-concepts");
const searchInput = document.querySelector("#concept-search");
const levelFilters = document.querySelector("#level-filters");
const categoryFilter = document.querySelector("#category-filter");
const clearFiltersButton = document.querySelector("#clear-filters");
const resultsSummary = document.querySelector("#results-summary");
const emptyState = document.querySelector("#filter-empty-state");
const dataApi = window.PhysicsSiteData;
const concepts = dataApi ? dataApi.concepts : [];

function createReadyCard(concept) {
  return `
    <article class="concept-card" data-level="${concept.level}" data-category="${concept.category}" data-id="${concept.id}">
      <div class="card-meta">
        <span class="meta-pill">${concept.level}</span>
        <span class="meta-pill category-pill" data-role="category">${concept.category}</span>
        <span class="meta-pill">${concept.interaction}</span>
      </div>
      <h3>${concept.title}</h3>
      <p>${concept.summary}</p>
      <a class="primary-button" href="${concept.path}">開始操作</a>
    </article>
  `;
}

function createPlannedCard(concept) {
  return `
    <article class="planned-card">
      <div class="card-meta">
        <span class="meta-pill">${concept.level}</span>
        <span class="meta-pill">${concept.category}</span>
      </div>
      <h3>${concept.title}</h3>
      <p>${concept.summary}</p>
      <span class="meta-pill">準備中</span>
    </article>
  `;
}

const readyConcepts = concepts.filter((concept) => concept.status === "ready");
const plannedConcepts = concepts.filter((concept) => concept.status !== "ready");

if (readyElementary) {
  readyElementary.innerHTML = readyConcepts
    .filter((concept) => concept.level === "國小")
    .map(createReadyCard)
    .join("");
}

if (readyJunior) {
  readyJunior.innerHTML = readyConcepts
    .filter((concept) => concept.level === "國中")
    .map(createReadyCard)
    .join("");
}

if (plannedContainer) {
  plannedContainer.innerHTML = plannedConcepts.length
    ? plannedConcepts.map(createPlannedCard).join("")
    : `
      <article class="planned-card complete-card">
        <div class="card-meta">
          <span class="meta-pill">目前進度</span>
        </div>
        <h3>這一輪規劃的主題都完成了</h3>
        <p>目前首頁上的主題都已經可以直接操作。之後如果你還想擴充，我們可以再往更進階的物理概念繼續加。</p>
        <span class="meta-pill">持續更新中</span>
      </article>
    `;
}

const allCards = [...document.querySelectorAll(".concept-card")];

allCards.forEach((card) => {
  const concept = concepts.find((item) => item.id === card.dataset.id);
  if (!concept) {
    return;
  }

  card.dataset.search = `${concept.title} ${concept.summary} ${concept.interaction} ${concept.category}`.toLowerCase();
});

const sectionGroups = [...document.querySelectorAll(".concept-section[data-group]")];
const categoryOptions = ["全部", ...new Set(readyConcepts.map((concept) => concept.category))];

if (categoryFilter) {
  categoryFilter.innerHTML = categoryOptions
    .map((category) => `<option value="${category}">${category === "全部" ? "全部分類" : category}</option>`)
    .join("");
}

function updateResults() {
  const total = allCards.length;
  const visible = allCards.filter((card) => !card.hidden).length;

  if (resultsSummary) {
    resultsSummary.textContent = `目前顯示 ${visible} / ${total} 個主題`;
  }

  sectionGroups.forEach((section) => {
    const visibleInSection = [...section.querySelectorAll(".concept-card")].some((card) => !card.hidden);
    section.hidden = !visibleInSection;
  });

  if (emptyState) {
    emptyState.hidden = visible !== 0;
  }
}

function applyFilters() {
  const searchValue = (searchInput?.value || "").trim().toLowerCase();
  const activeLevel = levelFilters?.querySelector(".filter-chip.active")?.dataset.level || "全部";
  const activeCategory = categoryFilter?.value || "全部";

  allCards.forEach((card) => {
    const matchesSearch = !searchValue || card.dataset.search.includes(searchValue);
    const matchesLevel = activeLevel === "全部" || card.dataset.level === activeLevel;
    const matchesCategory = activeCategory === "全部" || card.dataset.category === activeCategory;
    card.hidden = !(matchesSearch && matchesLevel && matchesCategory);
  });

  updateResults();
}

levelFilters?.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-chip");
  if (!button) {
    return;
  }

  [...levelFilters.querySelectorAll(".filter-chip")].forEach((chip) => chip.classList.remove("active"));
  button.classList.add("active");
  applyFilters();
});

searchInput?.addEventListener("input", applyFilters);
categoryFilter?.addEventListener("change", applyFilters);
clearFiltersButton?.addEventListener("click", () => {
  if (searchInput) {
    searchInput.value = "";
  }

  if (categoryFilter) {
    categoryFilter.value = "全部";
  }

  [...(levelFilters?.querySelectorAll(".filter-chip") || [])].forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.level === "全部");
  });

  applyFilters();
});

applyFilters();
