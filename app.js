// Realtor App Model and Controller - Kameron Whitfield (Crimson & Cream Editorial Edition)

// 1. DATA MODEL
const realtorInfo = {
    name: "Kameron Whitfield",
    brokerage: "All City Real Estate",
    phone: "281-995-6551",
    email: "kwhitfield.realtor@gmail.com",
    address: "4201 Main St #200-137, Houston, TX 77002",
    designations: ["CPM", "C.P.S.", "CRP", "C.S.S."],
    about: "Kameron Whitfield is a residential specialist with Realinc's Office of Jason T. Hyman. As an agent with years of professional experience in higher education, he effortlessly guides individuals through the many life transitions that lead to the purchase and sale of property. His commitment is to educate and empower clients to achieve their goals in the communities of their choice."
};

const listingsData = [
    {
        id: "90218765",
        address: "1202 Sienna Woods Ct",
        city: "Rosharon",
        state: "TX",
        zip: "77583",
        price: 1150000,
        mode: "sale",
        type: "Single-Family (Luxury)",
        beds: 5,
        baths: 4.5,
        sqft: 5200,
        built: 2024,
        subdivision: "Huntington Place",
        marketArea: "Sienna Area",
        mls: "90218765",
        image: "luxury_houston_house.jpg",
        description: "This stunning, custom-designed contemporary estate features 5 bedrooms, 4.5 bathrooms, and a modern open-plan interior design. Nestled in a quiet cul-de-sac of Huntington Place. Showcases floor-to-ceiling glass windows, a premium private pool, professional outdoor dining terrace, and high-end smart-home amenities throughout. Proudly represented by Kameron Whitfield."
    },
    {
        id: "82627271",
        address: "5206 Willow Glen Dr",
        city: "Houston",
        state: "TX",
        zip: "77033",
        price: 207000,
        mode: "sale",
        type: "Single-Family",
        beds: 3,
        baths: 2,
        sqft: 1181,
        built: 1955,
        subdivision: "Inwood Terrace Sec 01",
        marketArea: "Medical Center South",
        mls: "82627271",
        image: "https://mediahar.harstatic.com/792667523/lr/792667701.jpeg",
        description: "Classic traditional traditional home in the Inwood Terrace subdivision of Medical Center South. Featuring a layout optimized for comfortable living with 3 bedrooms, 2 bathrooms, and a single-car garage. Offers massive backyard space, updated flooring in core rooms, and convenient access to Houston's premier medical hub."
    },
    {
        id: "67593063",
        address: "5206 Willow Glen Dr",
        city: "Houston",
        state: "TX",
        zip: "77033",
        price: 1750,
        mode: "rent",
        type: "Rental",
        beds: 3,
        baths: 2,
        sqft: 1181,
        built: 1955,
        subdivision: "Inwood Terrace Sec 01",
        marketArea: "Medical Center South",
        mls: "67593063",
        image: "https://mediahar.harstatic.com/792668856/lr/792668911.jpeg",
        description: "Beautifully presented lease listing at 5206 Willow Glen Dr. Fully equipped 3-bedroom and 2-bathroom layout. Pet-friendly with a spacious fenced yard. Clean interiors, gas stove, and private parking. Lawn mowing service options available upon request."
    },
    {
        id: "35705852",
        address: "5210 Jezebel St",
        city: "Houston",
        state: "TX",
        zip: "77033",
        price: 62500,
        mode: "sale",
        type: "Lots/Land",
        beds: 0,
        baths: 0,
        sqft: 0,
        built: 0,
        lotSize: "5,500 sq ft",
        subdivision: "Bayou Estates Add",
        marketArea: "Medical Center South",
        mls: "35705852",
        image: "https://mediahar.harstatic.com/753073823/lr/757290044.jpeg",
        description: "Incredible residential lot opportunity in Bayou Estates Add, Houston. A clean, cleared 5,500 square foot footprint waiting for a modern custom-build or long-term land investment. Zero deed restrictions, allowing builders maximum architectural control."
    },
    {
        id: "37115870",
        address: "8524 Scott St",
        city: "Houston",
        state: "TX",
        zip: "77051",
        price: 68000,
        mode: "sold",
        type: "Lots/Land",
        beds: 0,
        baths: 0,
        sqft: 0,
        built: 0,
        lotSize: "5,230 sq ft",
        closedDate: "07/23/2026",
        subdivision: "Sunnyside Courts",
        marketArea: "Medical Center South",
        mls: "37115870",
        image: "https://mediahar.harstatic.com/738181632/lr/739454467.jpeg",
        description: "Successfully represented lot transaction located in Sunnyside Courts. Sold and closed by Kameron Whitfield for full list price on July 23, 2026. Demonstrates high-performance market positioning and negotiating efficiency."
    },
    {
        id: "69685250",
        address: "6910 Lebec Dr",
        city: "Rosharon",
        state: "TX",
        zip: "77583",
        price: 2350,
        mode: "sold",
        type: "Rental (Rented)",
        beds: 3,
        baths: 2,
        sqft: 1770,
        built: 2022,
        closedDate: "02/15/2026",
        subdivision: "Glendale Lakes Sec 13",
        marketArea: "Sienna Area",
        mls: "69685250",
        image: "https://mediahar.harstatic.com/725733149/lr/725736141.jpeg",
        description: "Recently closed rental listing at Glendale Lakes. This modern 2022 construction boasts 3 large bedrooms, a custom open-concept kitchen, and 2 pristine baths. Leased by Kameron Whitfield to qualified corporate tenants within 15 days of listing."
    },
    {
        id: "66730524",
        address: "1535 Potomac Dr B",
        city: "Houston",
        state: "TX",
        zip: "77057",
        price: 3700,
        mode: "sold",
        type: "Rental (Rented)",
        beds: 3,
        baths: 3,
        sqft: 3360,
        built: 1985,
        closedDate: "12/31/2025",
        subdivision: "Tanglewood Place Condo",
        marketArea: "Galleria",
        mls: "66730524",
        image: "https://mediahar.harstatic.com/420492740/lr/420493070.jpeg",
        description: "Stately Galleria condo leased in late 2025. Spanning a massive 3,360 square feet with 3 beds and 3 full baths. A beautiful premium townhouse with an enclosed private atrium patio, formal dining, and two wood-burning fireplaces."
    },
    {
        id: "41091184",
        address: "5719 Pampus Prairie Rd",
        city: "Katy",
        state: "TX",
        zip: "77493",
        price: 2100,
        mode: "sold",
        type: "Rental (Rented)",
        beds: 3,
        baths: 2.5,
        sqft: 1701,
        built: 2019,
        closedDate: "09/30/2025",
        subdivision: "Katy Xing Sec 1",
        marketArea: "Katy - Old Towne",
        mls: "41091184",
        image: "https://mediahar.harstatic.com/716756541/lr/716756719.jpeg",
        description: "Recently closed rental property in Katy - Old Towne market area. Features 3 bedrooms, 2.5 baths, open-plan living, and smart-home wiring. Successfully matched and placed tenants within 10 days on the market."
    }
];

// 2. STATE MANAGEMENT
let favorites = JSON.parse(localStorage.getItem('kameron_favs')) || [];
let bookings = JSON.parse(localStorage.getItem('kameron_bookings')) || [];
let activeFilters = { search: '', category: 'all' };

// 3. INITIALIZATION & ROUTING
document.addEventListener('DOMContentLoaded', () => {
    initViews();
    renderFeaturedProperty();
    renderListings();
    initMortgageCalculator();
    initBookingForm();
    initGazetteForm();
    updateFavoritesBadge();
    
    // Toggle bio event
    const btnToggleBio = document.getElementById('btn-toggle-bio');
    const extendedBio = document.getElementById('extended-bio');
    if (btnToggleBio && extendedBio) {
        btnToggleBio.addEventListener('click', () => {
            const isExpanded = extendedBio.classList.contains('expanded');
            if (isExpanded) {
                extendedBio.classList.remove('expanded');
                btnToggleBio.textContent = 'Read Biography ↓';
            } else {
                extendedBio.classList.add('expanded');
                btnToggleBio.textContent = 'Collapse Biography ↑';
            }
        });
    }

    // Search bar event
    const searchInput = document.getElementById('listing-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeFilters.search = e.target.value.toLowerCase().trim();
            renderListings();
        });
    }

    // Category tabs events
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeFilters.category = e.currentTarget.getAttribute('data-filter');
            renderListings();
        });
    });
});

function initViews() {
    // Make sure initial view scroll configuration is correct
    document.querySelector('.app-content').scrollTop = 0;
}

// App routing between view tabs
function navigateTo(viewId) {
    const views = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('.nav-item');
    const deskNavItems = document.querySelectorAll('.desktop-nav-item');
    
    // Deactivate all views and nav actions
    views.forEach(v => v.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));
    deskNavItems.forEach(d => d.classList.remove('active'));
    
    // Activate target view
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
        // Reset scroll position on view switch
        document.querySelector('.app-content').scrollTop = 0;
    }
    
    // Activate mobile nav button
    const targetNav = document.getElementById(`nav-btn-${viewId}`);
    if (targetNav) {
        targetNav.classList.add('active');
    }

    // Activate desktop nav button
    const targetDeskNav = document.getElementById(`desk-btn-${viewId}`);
    if (targetDeskNav) {
        targetDeskNav.classList.add('active');
    }

    // Specially handle views on navigation
    if (viewId === 'favorites') {
        renderFavorites();
    } else if (viewId === 'book') {
        renderBookedAppointments();
    }
}

// 4. RENDER PROCEDURES
function renderFeaturedProperty() {
    const target = document.getElementById('featured-property-target');
    if (!target) return;
    
    // Grab Sienna Woods Ct as featured luxury property
    const featured = listingsData[0];
    const isSaved = favorites.includes(featured.id);

    target.innerHTML = `
        <div class="featured-badge">Featured Property</div>
        <button onclick="toggleFavorite(event, '${featured.id}')" class="fav-btn ${isSaved ? 'saved' : ''}" aria-label="Bookmark listing">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <div class="listing-img-container" onclick="openPropertyDetails('${featured.id}')">
            <img class="listing-img" src="${featured.image}" alt="${featured.address}">
        </div>
        <div class="listing-details">
            <div class="price-row" onclick="openPropertyDetails('${featured.id}')">
                <span class="listing-price">$${featured.price.toLocaleString()}</span>
                <span class="status-badge sale" style="position:static;">For Sale</span>
            </div>
            <div onclick="openPropertyDetails('${featured.id}')">
                <div class="listing-addr">${featured.address}</div>
                <div class="listing-subdiv">${featured.subdivision} • ${featured.city}</div>
            </div>
            <div class="listing-specs" onclick="openPropertyDetails('${featured.id}')">
                <div class="spec-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    <span>${featured.beds} Beds</span>
                </div>
                <div class="spec-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path></svg>
                    <span>${featured.baths} Baths</span>
                </div>
                <div class="spec-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                    <span>${featured.sqft.toLocaleString()} sqft</span>
                </div>
            </div>
            <div class="listing-cta-row">
                <button onclick="openPropertyDetails('${featured.id}')" class="btn-card-secondary">Review Brief</button>
                <button onclick="bookShowing('${featured.address}')" class="btn-card-primary">Request Showing</button>
            </div>
        </div>
    `;
}

function renderListings() {
    const container = document.getElementById('listings-container');
    if (!container) return;

    // Filter array
    const filtered = listingsData.filter(item => {
        const matchesSearch = item.address.toLowerCase().includes(activeFilters.search) || 
                              item.subdivision.toLowerCase().includes(activeFilters.search) || 
                              item.marketArea.toLowerCase().includes(activeFilters.search) ||
                              item.city.toLowerCase().includes(activeFilters.search);
        
        const matchesCat = activeFilters.category === 'all' || item.mode === activeFilters.category;
        
        return matchesSearch && matchesCat;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 10px; color: var(--color-text-sub); font-family: var(--font-heading); font-style: italic;">
                <p>No selections match the current criteria.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => {
        const isSaved = favorites.includes(item.id);
        const statusText = item.mode === 'sale' ? 'For Sale' : (item.mode === 'rent' ? 'For Lease' : 'Acquired');
        const badgeClass = item.mode;
        
        return `
            <div class="listing-card">
                <button onclick="toggleFavorite(event, '${item.id}')" class="fav-btn ${isSaved ? 'saved' : ''}" aria-label="Bookmark listing">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <div class="listing-img-container" onclick="openPropertyDetails('${item.id}')">
                    <span class="status-badge ${badgeClass}">${statusText}</span>
                    <img class="listing-img" src="${item.image}" alt="${item.address}">
                </div>
                <div class="listing-details">
                    <div class="price-row" onclick="openPropertyDetails('${item.id}')">
                        <span class="listing-price">
                            $${item.price.toLocaleString()}${item.mode === 'rent' || (item.mode === 'sold' && item.type.includes('Rented')) ? '<span class="listing-price-sub">/mo</span>' : ''}
                        </span>
                        <span style="font-size:0.7rem; color:var(--color-text-sub); font-weight:600; font-family: var(--font-heading);">MLS #${item.mls}</span>
                    </div>
                    <div onclick="openPropertyDetails('${item.id}')">
                        <div class="listing-addr">${item.address}</div>
                        <div class="listing-subdiv">${item.subdivision} • ${item.city}</div>
                    </div>
                    
                    ${item.beds > 0 ? `
                        <div class="listing-specs" onclick="openPropertyDetails('${item.id}')">
                            <div class="spec-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span>${item.beds} Beds</span>
                            </div>
                            <div class="spec-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path></svg>
                                <span>${item.baths} Baths</span>
                            </div>
                            <div class="spec-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                                <span>${item.sqft.toLocaleString()} sqft</span>
                            </div>
                        </div>
                    ` : `
                        <div class="listing-specs" onclick="openPropertyDetails('${item.id}')">
                            <div class="spec-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                <span>Lot Size: ${item.lotSize}</span>
                            </div>
                        </div>
                    `}
                    
                    <div class="listing-cta-row">
                        <button onclick="openPropertyDetails('${item.id}')" class="btn-card-secondary">Review Brief</button>
                        ${item.mode !== 'sold' ? `
                            <button onclick="bookShowing('${item.address}')" class="btn-card-primary">Request Showing</button>
                        ` : `
                            <button onclick="calculateMortgageForPrice(${item.price})" class="btn-card-primary" style="background-color:rgba(138, 28, 46, 0.05); border: 1px solid var(--border-color); color:var(--color-primary);">Financials</button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderFavorites() {
    const container = document.getElementById('favorites-container');
    const emptyState = document.getElementById('empty-favorites-view');
    if (!container || !emptyState) return;

    const savedListings = listingsData.filter(item => favorites.includes(item.id));

    if (savedListings.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    container.style.display = 'flex';
    emptyState.style.display = 'none';

    container.innerHTML = savedListings.map(item => {
        const statusText = item.mode === 'sale' ? 'For Sale' : (item.mode === 'rent' ? 'For Lease' : 'Acquired');
        const badgeClass = item.mode;
        
        return `
            <div class="listing-card">
                <button onclick="toggleFavorite(event, '${item.id}')" class="fav-btn saved" aria-label="Remove bookmark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <div class="listing-img-container" onclick="openPropertyDetails('${item.id}')">
                    <span class="status-badge ${badgeClass}">${statusText}</span>
                    <img class="listing-img" src="${item.image}" alt="${item.address}">
                </div>
                <div class="listing-details">
                    <div class="price-row" onclick="openPropertyDetails('${item.id}')">
                        <span class="listing-price">$${item.price.toLocaleString()}${item.mode === 'rent' ? '<span class="listing-price-sub">/mo</span>' : ''}</span>
                        <span style="font-size:0.75rem; color:var(--color-text-sub); font-weight:600; font-family: var(--font-heading);">MLS #${item.mls}</span>
                    </div>
                    <div onclick="openPropertyDetails('${item.id}')">
                        <div class="listing-addr">${item.address}</div>
                        <div class="listing-subdiv">${item.subdivision}</div>
                    </div>
                    <div class="listing-cta-row">
                        <button onclick="openPropertyDetails('${item.id}')" class="btn-card-secondary">Review Brief</button>
                        ${item.mode !== 'sold' ? `
                            <button onclick="bookShowing('${item.address}')" class="btn-card-primary">Request Showing</button>
                        ` : `
                            <button onclick="calculateMortgageForPrice(${item.price})" class="btn-card-primary" style="background-color:rgba(138, 28, 46, 0.05); color:var(--color-primary);">Financials</button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 5. FAVORITES CONTROLLER LOGIC
function toggleFavorite(event, listingId) {
    event.stopPropagation(); // Avoid opening details sheet
    
    const index = favorites.indexOf(listingId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(listingId);
    }
    
    localStorage.setItem('kameron_favs', JSON.stringify(favorites));
    updateFavoritesBadge();
    
    // Update trigger elements
    renderFeaturedProperty();
    renderListings();
    
    // Refresh page state if in favorites tab
    const activeView = document.querySelector('.view.active');
    if (activeView && activeView.id === 'view-favorites') {
        renderFavorites();
    }
}

function updateFavoritesBadge() {
    const badge = document.getElementById('fav-count-badge');
    const deskBadge = document.getElementById('desk-fav-badge');
    
    if (favorites.length > 0) {
        if (badge) {
            badge.style.display = 'flex';
            badge.textContent = favorites.length;
        }
        if (deskBadge) {
            deskBadge.style.display = 'inline-flex';
            deskBadge.textContent = favorites.length;
        }
    } else {
        if (badge) badge.style.display = 'none';
        if (deskBadge) deskBadge.style.display = 'none';
    }
}

// 6. DETAILED BOTTOM SHEET VIEWER
function openPropertyDetails(listingId) {
    const property = listingsData.find(item => item.id === listingId);
    if (!property) return;
    
    const isSaved = favorites.includes(property.id);
    const statusLabel = property.mode === 'sale' ? 'For Sale' : (property.mode === 'rent' ? 'For Lease' : `Acquired (${property.closedDate})`);
    
    const sheetBody = document.getElementById('sheet-body-content');
    if (!sheetBody) return;
    
    sheetBody.innerHTML = `
        <div class="detail-hero">
            <img src="${property.image}" alt="${property.address}">
        </div>
        
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <h2 style="font-family:var(--font-heading); font-weight:800; font-size:1.45rem;">
                $${property.price.toLocaleString()}${property.mode === 'rent' ? '<span style="font-size:0.9rem; font-weight:500;">/mo</span>' : ''}
            </h2>
            <span class="status-badge ${property.mode}" style="position:static;">${statusLabel}</span>
        </div>
        
        <div style="margin-top:6px;">
            <div style="font-size:1.05rem; font-weight:700; color:var(--color-text-main);">${property.address}</div>
            <div style="font-size:0.8rem; color:var(--color-text-sub); margin-top:2px;">
                ${property.subdivision} • ${property.city}, ${property.state} ${property.zip}
            </div>
        </div>

        <div class="detail-specs-bar">
            ${property.beds > 0 ? `
                <div>
                    <div class="detail-spec-val">${property.beds}</div>
                    <div class="detail-spec-label">Beds</div>
                </div>
                <div>
                    <div class="detail-spec-val">${property.baths}</div>
                    <div class="detail-spec-label">Baths</div>
                </div>
                <div>
                    <div class="detail-spec-val">${property.sqft.toLocaleString()}</div>
                    <div class="detail-spec-label">Sq Ft</div>
                </div>
            ` : `
                <div style="grid-column: span 3;">
                    <div class="detail-spec-val">${property.lotSize}</div>
                    <div class="detail-spec-label">Lot Size</div>
                </div>
            `}
        </div>

        <div class="info-section">
            <h3 class="section-title">Property Highlights</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.78rem; background:rgba(0,0,0,0.02); padding:12px; border-radius:8px; border:1px solid var(--border-color);">
                <div><strong>MLS ID:</strong> ${property.mls}</div>
                <div><strong>Property Type:</strong> ${property.type}</div>
                <div><strong>Year Built:</strong> ${property.built > 0 ? property.built : 'N/A'}</div>
                <div><strong>Market Area:</strong> ${property.marketArea}</div>
            </div>
        </div>

        <div class="info-section">
            <h3 class="section-title">Description Brief</h3>
            <p class="detail-desc-para">${property.description}</p>
        </div>

        <div style="display:flex; gap:10px; margin-top:20px; border-top:1px solid var(--border-color); padding-top:16px;">
            <button onclick="toggleFavorite(event, '${property.id}'); updateSheetFavoriteBtn('${property.id}');" id="sheet-fav-btn" class="btn-card-secondary" style="display:flex; align-items:center; gap:8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <span>${isSaved ? 'Saved' : 'Save'}</span>
            </button>
            
            ${property.mode !== 'sold' ? `
                <button onclick="closeDetailsSheet(); bookShowing('${property.address}');" class="btn-card-primary" style="padding:12px;">Request Private Showing</button>
            ` : `
                <button onclick="closeDetailsSheet(); calculateMortgageForPrice(${property.price});" class="btn-card-primary" style="padding:12px;">Estimate Carry Costs</button>
            `}
        </div>
    `;

    // Open sheet
    const sheet = document.getElementById('details-bottom-sheet');
    if (sheet) {
        sheet.classList.add('open');
        sheet.setAttribute('aria-hidden', 'false');
    }
}

function updateSheetFavoriteBtn(id) {
    const btn = document.getElementById('sheet-fav-btn');
    if (!btn) return;
    const isSaved = favorites.includes(id);
    btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <span>${isSaved ? 'Saved' : 'Save'}</span>
    `;
}

function closeDetailsSheet() {
    const sheet = document.getElementById('details-bottom-sheet');
    if (sheet) {
        sheet.classList.remove('open');
        sheet.setAttribute('aria-hidden', 'true');
    }
}

// 7. MORTGAGE CALCULATOR LOGIC
function initMortgageCalculator() {
    const priceInput = document.getElementById('calc-home-price');
    const downInput = document.getElementById('calc-down-payment');
    const rateInput = document.getElementById('calc-interest-rate');
    const termBtns = document.querySelectorAll('.term-btn');
    
    let loanTerm = 30; // default 30 years

    const handleInput = () => {
        calculateMortgage(priceInput.value, downInput.value, rateInput.value, loanTerm);
    };

    if (priceInput) priceInput.addEventListener('input', handleInput);
    if (downInput) downInput.addEventListener('input', handleInput);
    if (rateInput) rateInput.addEventListener('input', handleInput);

    termBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            termBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            loanTerm = parseInt(e.currentTarget.getAttribute('data-term'));
            handleInput();
        });
    });

    // Initial calculation run
    handleInput();
}

function calculateMortgage(priceVal, downPercent, rateVal, termYears) {
    const price = parseFloat(priceVal);
    const downPct = parseFloat(downPercent) / 100;
    const rate = parseFloat(rateVal) / 100 / 12; // monthly rate
    const payments = termYears * 12;

    const downPaymentAmt = price * downPct;
    const principal = price - downPaymentAmt;

    // Monthly principal + interest formula
    let monthlyPI = 0;
    if (rate === 0) {
        monthlyPI = principal / payments;
    } else {
        monthlyPI = principal * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
    }

    // Property taxes estimation (approx 2.1% in Texas, divided by 12)
    const monthlyTaxes = (price * 0.021) / 12;
    // Insurance estimation (approx 0.35% of home value annually, divided by 12)
    const monthlyInsurance = (price * 0.0035) / 12;

    const totalPayment = monthlyPI + monthlyTaxes + monthlyInsurance;

    // Render text output
    document.getElementById('val-home-price').textContent = `$${price.toLocaleString()}`;
    document.getElementById('val-down-payment').textContent = `${downPercent}% ($${Math.round(downPaymentAmt).toLocaleString()})`;
    document.getElementById('val-interest-rate').textContent = `${rateVal}%`;
    document.getElementById('val-loan-term').textContent = `${termYears} Years`;
    
    document.getElementById('payment-output').textContent = `$${Math.round(totalPayment).toLocaleString()}`;
    document.getElementById('legend-val-principal').textContent = `$${Math.round(monthlyPI).toLocaleString()}`;
    document.getElementById('legend-val-taxes').textContent = `$${Math.round(monthlyTaxes).toLocaleString()}`;
    document.getElementById('legend-val-insurance').textContent = `$${Math.round(monthlyInsurance).toLocaleString()}`;

    // Update breakdown bar widths
    const piPct = (monthlyPI / totalPayment) * 100;
    const taxPct = (monthlyTaxes / totalPayment) * 100;
    const insPct = (monthlyInsurance / totalPayment) * 100;

    document.getElementById('chart-bar-principal').style.width = `${piPct}%`;
    document.getElementById('chart-bar-taxes').style.width = `${taxPct}%`;
    document.getElementById('chart-bar-insurance').style.width = `${insPct}%`;
}

function calculateMortgageForPrice(targetPrice) {
    navigateTo('calculator');
    const priceInput = document.getElementById('calc-home-price');
    if (priceInput) {
        priceInput.value = targetPrice;
        // Dispatch input event to refresh
        priceInput.dispatchEvent(new Event('input'));
    }
}

// 8. BOOKING SCHEDULING & LEAD CAPTURE
function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;

    // Set minimum date in date picker to today
    const dateInput = document.getElementById('book-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Handle service change to hide/show fields dynamically
    const serviceSelect = document.getElementById('book-service');
    const propertyGroup = document.getElementById('property-select-group');
    const datetimeRow = document.getElementById('datetime-fields-row');
    
    if (serviceSelect && propertyGroup && datetimeRow) {
        serviceSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            
            // Standard reset
            document.getElementById('book-property-label').textContent = 'Property Address';
            document.getElementById('book-property').placeholder = 'e.g., 5206 Willow Glen Dr';
            
            if (val === 'showing') {
                propertyGroup.style.display = 'block';
                document.getElementById('book-property').required = true;
                datetimeRow.style.display = 'flex';
                document.getElementById('book-date').required = true;
                document.getElementById('book-time').required = true;
            } else if (val === 'valuation') {
                propertyGroup.style.display = 'block';
                document.getElementById('book-property-label').textContent = 'Property Address to Evaluate';
                document.getElementById('book-property').placeholder = 'e.g., 5206 Willow Glen Dr, Houston, TX 77033';
                document.getElementById('book-property').required = true;
                // Valuation is compiled offsite, hide appointment dates
                datetimeRow.style.display = 'none';
                document.getElementById('book-date').required = false;
                document.getElementById('book-time').required = false;
            } else {
                propertyGroup.style.display = 'none';
                document.getElementById('book-property').required = false;
                datetimeRow.style.display = 'flex';
                document.getElementById('book-date').required = true;
                document.getElementById('book-time').required = true;
            }
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('book-name').value;
        const phone = document.getElementById('book-phone').value;
        const email = document.getElementById('book-email').value;
        const service = document.getElementById('book-service').value;
        const property = document.getElementById('book-property').value;
        const date = document.getElementById('book-date').value;
        const time = document.getElementById('book-time').value;
        const notes = document.getElementById('book-message').value;

        const serviceNames = {
            showing: "Private Property Showing",
            buy_consult: "Acquisition Consultation",
            sell_consult: "Exclusive Listing Consultation",
            valuation: "Home Valuation Request",
            general: "Advisory Consultation"
        };

        // Create booking object
        const newBooking = {
            id: Date.now().toString(),
            name,
            phone,
            email,
            service: serviceNames[service] || service,
            property: (service === 'showing' || service === 'valuation') ? property : '',
            date: service !== 'valuation' ? date : '',
            time: service !== 'valuation' ? time : '',
            notes,
            status: "Brief Staged / Pending Review"
        };

        // Save to state & storage
        bookings.push(newBooking);
        localStorage.setItem('kameron_bookings', JSON.stringify(bookings));

        // Format dates nicely
        let formattedDate = "";
        if (newBooking.date) {
            formattedDate = new Date(date).toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
        }

        // Set UI summaries
        document.getElementById('summary-type').textContent = newBooking.service;
        
        const dateLine = document.getElementById('summary-date-line');
        const timeLine = document.getElementById('summary-time-line');
        
        if (service !== 'valuation') {
            dateLine.style.display = 'block';
            timeLine.style.display = 'block';
            document.getElementById('summary-date').textContent = formattedDate;
            document.getElementById('summary-time').textContent = time;
        } else {
            dateLine.style.display = 'none';
            timeLine.style.display = 'none';
        }

        const propRow = document.getElementById('summary-prop-row');
        if (service === 'showing' || service === 'valuation') {
            propRow.style.display = 'block';
            document.getElementById('summary-property').textContent = property;
        } else {
            propRow.style.display = 'none';
        }

        // Switch to success view
        form.style.display = 'none';
        document.getElementById('booking-success-card').style.display = 'block';
        
        // Refresh appointment list representation
        renderBookedAppointments();
    });
}

function bookShowing(propertyAddress) {
    navigateTo('book');
    const serviceSelect = document.getElementById('book-service');
    const propertyInput = document.getElementById('book-property');
    const propertyGroup = document.getElementById('property-select-group');
    const datetimeRow = document.getElementById('datetime-fields-row');
    
    if (serviceSelect && propertyInput && propertyGroup && datetimeRow) {
        serviceSelect.value = 'showing';
        propertyGroup.style.display = 'block';
        document.getElementById('book-property-label').textContent = 'Property Address';
        propertyInput.placeholder = 'e.g., 5206 Willow Glen Dr';
        propertyInput.value = propertyAddress;
        propertyInput.required = true;
        
        datetimeRow.style.display = 'flex';
        document.getElementById('book-date').required = true;
        document.getElementById('book-time').required = true;
    }
}

function requestValuation() {
    navigateTo('book');
    const serviceSelect = document.getElementById('book-service');
    const propertyInput = document.getElementById('book-property');
    const propertyGroup = document.getElementById('property-select-group');
    const datetimeRow = document.getElementById('datetime-fields-row');
    
    if (serviceSelect && propertyInput && propertyGroup && datetimeRow) {
        serviceSelect.value = 'valuation';
        propertyGroup.style.display = 'block';
        document.getElementById('book-property-label').textContent = 'Property Address to Evaluate';
        propertyInput.placeholder = 'e.g., 5206 Willow Glen Dr, Houston, TX 77033';
        propertyInput.value = '';
        propertyInput.required = true;
        
        // Hide date/time fields since valuation is conducted offline
        datetimeRow.style.display = 'none';
        document.getElementById('book-date').required = false;
        document.getElementById('book-time').required = false;
    }
}

function resetBookingForm() {
    const form = document.getElementById('booking-form');
    if (form) {
        form.reset();
        form.style.display = 'block';
        document.getElementById('property-select-group').style.display = 'none';
        document.getElementById('book-property').required = false;
        document.getElementById('datetime-fields-row').style.display = 'flex';
        document.getElementById('book-date').required = true;
        document.getElementById('book-time').required = true;
    }
    document.getElementById('booking-success-card').style.display = 'none';
}

function renderBookedAppointments() {
    const section = document.getElementById('my-appointments-section');
    const listContainer = document.getElementById('appointments-list-container');
    if (!section || !listContainer) return;

    if (bookings.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    
    // Sort appointments: newest booked on top
    const sorted = [...bookings].reverse();

    listContainer.innerHTML = sorted.map(apt => {
        let detailsText = "";
        if (apt.date) {
            const displayDate = new Date(apt.date).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
            });
            detailsText = `📅 ${displayDate} at ${apt.time}`;
        } else {
            detailsText = `📑 Valuation Report Compile`;
        }
        
        return `
            <div class="apt-card">
                <div class="apt-info">
                    <h4>${apt.service}</h4>
                    <p>${detailsText}</p>
                    ${apt.property ? `<p>🏠 Property: ${apt.property}</p>` : ''}
                </div>
                <span class="apt-status">${apt.status}</span>
            </div>
        `;
    }).join('');
}

// 9. OFF-MARKET GAZETTE FORM HANDLER
function initGazetteForm() {
    const form = document.getElementById('gazette-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('gazette-email');
        const email = emailInput.value;
        
        let gazetteSubs = JSON.parse(localStorage.getItem('gazette_subscribers')) || [];
        gazetteSubs.push({ email, timestamp: Date.now() });
        localStorage.setItem('gazette_subscribers', JSON.stringify(gazetteSubs));
        
        form.style.display = 'none';
        const success = document.getElementById('gazette-success');
        if (success) success.style.display = 'block';
    });
}

// Global exposure of navigation helpers for inline HTML button triggers
window.navigateTo = navigateTo;
window.toggleFavorite = toggleFavorite;
window.openPropertyDetails = openPropertyDetails;
window.closeDetailsSheet = closeDetailsSheet;
window.bookShowing = bookShowing;
window.requestValuation = requestValuation;
window.resetBookingForm = resetBookingForm;
window.calculateMortgageForPrice = calculateMortgageForPrice;
window.updateSheetFavoriteBtn = updateSheetFavoriteBtn;
