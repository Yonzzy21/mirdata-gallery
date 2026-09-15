document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("mirdata-dataset-gallery");
    if (!gallery) return;

    const cards = Array.from(gallery.querySelectorAll(":scope > section"));
    if (cards.length === 0) return;

    // Helper to group licenses into clean categories (like your brainstorm mockup)
    function normalizeLicense(raw) {
        if (!raw) return "Not specified";
        const text = raw.toLowerCase();

        if (text.includes("not specified") || text.includes("couldn't find") || text.includes("unavailable")) {
            return "Not specified";
        }
        if (text.includes("mit")) {
            return "MIT";
        }
        if (text.includes("zero") || text.includes("cc0") || text.includes("public domain")) {
            return "CC0 (Public Domain)";
        }
        if (text.includes("no derivatives") || text.includes("by-nc-nd")) {
            return "CC BY-NC-ND 4.0";
        }
        if (text.includes("non-commercial") || text.includes("non commercial") || text.includes("noncommercial")) {
            if (text.includes("share alike") || text.includes("sharealike") || text.includes("sa")) {
                return "CC BY-NC-SA 4.0";
            }
            return "CC BY-NC 4.0";
        }
        if (text.includes("share alike") || text.includes("sharealike") || text.includes("by-sa")) {
            return "CC BY-SA 4.0";
        }
        if (text.includes("creative commons") || text.includes("cc by")) {
            return "CC BY 4.0";
        }
        if (text.includes("free of charge") || text.includes("research purposes") || text.includes("pledge") || text.includes("copyright") || text.includes("custom")) {
            return "Custom / Research only";
        }
        return "Other";
    }

    // 1. Extract metadata specifically from "Annotations:" and "License:"
    const cardData = cards.map((card) => {
        let annotations = [];
        let rawLicense = "Not specified";

        card.querySelectorAll("li").forEach((li) => {
            const strong = li.querySelector("strong");
            const label = strong ? strong.textContent.trim() : "";

            // Only grab real annotations (ignores Downloadable Remotes, README, etc.)
            if (label.startsWith("Annotations")) {
                const annEls = li.querySelectorAll("code");
                annotations = Array.from(annEls).map((el) => el.textContent.trim());
            } else if (label.startsWith("License")) {
                const clone = li.cloneNode(true);
                const st = clone.querySelector("strong");
                if (st) st.remove();
                const licText = clone.textContent.trim();
                if (licText) rawLicense = licText;
            }
        });

        const license = normalizeLicense(rawLicense);
        const title = card.querySelector("h2")?.textContent.trim() || card.id;

        return { card, title, annotations, license };
    });



    // 2. Collect unique annotation types and licenses with counts
    const annCounts = {};
    const licenseCounts = {};
    cardData.forEach((d) => {
        d.annotations.forEach((a) => (annCounts[a] = (annCounts[a] || 0) + 1));
        licenseCounts[d.license] = (licenseCounts[d.license] || 0) + 1;
    });

    // 3. State tracking
    const state = {
        selectedAnnotations: new Set(),
        selectedLicense: null,
        searchQuery: "",
    };

    // 4. Build Layout: Container with Sidebar (Left) and Content Grid (Right)
    const container = document.createElement("div");
    container.className = "gallery-layout";

    const sidebar = document.createElement("aside");
    sidebar.className = "gallery-filter-sidebar";

    const content = document.createElement("div");
    content.className = "gallery-cards-grid";

    // Search Input
    const search = document.createElement("input");
    search.type = "text";
    search.placeholder = "Search annotations...";
    search.className = "filter-search";
    search.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        // add live filter to the annotation menu:

        annContainer.querySelectorAll(".filter-pill").forEach((pill) => {
            const tag = pill.textContent.toLowerCase();
            pill.style.display = !state.searchQuery || tag.includes(state.searchQuery) ? "" : "none";
        });
        applyFilters();
    });
    sidebar.appendChild(search);




    // Results Counter & Reset
    const headerBar = document.createElement("div");
    headerBar.className = "filter-header-bar";
    const counter = document.createElement("span");
    counter.className = "filter-counter";
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Clear filters";
    resetBtn.className = "filter-reset-btn";
    resetBtn.addEventListener("click", () => {
        state.selectedAnnotations.clear();
        state.selectedLicense = null;
        state.searchQuery = "";
        search.value = "";
        sidebar.querySelectorAll(".filter-pill.active").forEach((p) => p.classList.remove("active"));
        applyFilters();
    });
    headerBar.appendChild(counter);
    headerBar.appendChild(resetBtn);
    sidebar.appendChild(headerBar);

    // Annotation Filters Section
    const annTitle = document.createElement("h4");
    annTitle.textContent = "ANNOTATION TYPES";
    sidebar.appendChild(annTitle);

    const annContainer = document.createElement("div");
    annContainer.className = "filter-pills-group";

    Object.keys(annCounts)
        .sort()
        .forEach((ann) => {
            const pill = document.createElement("button");
            pill.className = "filter-pill";
            pill.innerHTML = `${ann} <span class="count">${annCounts[ann]}</span>`;
            pill.addEventListener("click", () => {
                if (state.selectedAnnotations.has(ann)) {
                    state.selectedAnnotations.delete(ann);
                    pill.classList.remove("active");
                } else {
                    state.selectedAnnotations.add(ann);
                    pill.classList.add("active");
                }
                applyFilters();
            });
            annContainer.appendChild(pill);
        });
    sidebar.appendChild(annContainer);

    // License Filters Section
    const licTitle = document.createElement("h4");
    licTitle.textContent = "LICENSES";
    licTitle.style.marginTop = "20px";
    sidebar.appendChild(licTitle);

    const licContainer = document.createElement("div");
    licContainer.className = "filter-pills-group";

    Object.keys(licenseCounts)
        .sort()
        .forEach((lic) => {
            const pill = document.createElement("button");
            pill.className = "filter-pill";
            pill.innerHTML = `${lic} <span class="count">${licenseCounts[lic]}</span>`;
            pill.addEventListener("click", () => {
                if (state.selectedLicense === lic) {
                    state.selectedLicense = null;
                    pill.classList.remove("active");
                } else {
                    licContainer.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
                    state.selectedLicense = lic;
                    pill.classList.add("active");
                }
                applyFilters();
            });
            licContainer.appendChild(pill);
        });
    sidebar.appendChild(licContainer);

    // Move existing cards into content grid
    cards.forEach((c) => content.appendChild(c));

    const wyMenu = document.querySelector(".wy-menu-vertical");
    if (wyMenu) {
        wyMenu.innerHTML = "";
        wyMenu.appendChild(sidebar);
    }

    gallery.appendChild(content);

    // 5. Apply filtering logic
    function applyFilters() {
        let visibleCount = 0;

        cardData.forEach(({ card, title, annotations, license }) => {
            const matchesSearch = !state.searchQuery || annotations.some((a) => a.toLowerCase().includes(state.searchQuery));
            const matchesAnn =
                state.selectedAnnotations.size === 0 ||
                Array.from(state.selectedAnnotations).some((a) => annotations.includes(a));
            const matchesLic = !state.selectedLicense || license === state.selectedLicense;

            const isVisible = matchesSearch && matchesAnn && matchesLic;
            card.style.display = isVisible ? "flex" : "none";
            if (isVisible) visibleCount++;
        });

        counter.textContent = `Showing ${visibleCount} of ${cardData.length}`;
    }

    applyFilters();
});
