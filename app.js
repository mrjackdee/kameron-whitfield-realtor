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
let isLoggedIn = sessionStorage.getItem('client_logged_in') === 'true';
let loggedInUser = sessionStorage.getItem('client_user') || 'client@donora.com';

// 3. INITIALIZATION & ROUTING
document.addEventListener('DOMContentLoaded', () => {
    initViews();
    renderFeaturedProperty();
    renderListings();
    initMortgageCalculator();
    initBookingForm();
    initGazetteForm();
    initPopupForm();
    initVideoPlayer();
    updateFavoritesBadge();
    
    // Splash screen fadeout timer
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.classList.add('fade-out');
            setTimeout(() => splash.style.display = 'none', 600);
        }
        
        // Open lead popup after splash finishes (e.g. 1.2s delay)
        setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('seen_lead_popup');
            if (!hasSeenPopup) {
                openLeadPopup();
            }
        }, 1200);
    }, 2000);
    
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
    } else if (viewId === 'login') {
        renderPortalView();
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

// 10. DYNAMIC HEADER CONNECT DRIVER
function toggleHeaderConnect() {
    const dropdown = document.getElementById('header-connect-dropdown');
    if (!dropdown) return;
    const isHidden = dropdown.style.display === 'none';
    dropdown.style.display = isHidden ? 'block' : 'none';
}

function copyBusinessCard() {
    const cardData = `Kameron Whitfield\nAll City Real Estate\nPhone: 281-995-6551\nEmail: kwhitfield.realtor@gmail.com`;
    navigator.clipboard.writeText(cardData).then(() => {
        alert("Contact details copied to clipboard!");
        toggleHeaderConnect();
    }).catch(err => {
        console.error("Failed to copy card details", err);
    });
}

// Click outside logic to close dropdown
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('header-connect-dropdown');
    const toggleBtn = document.getElementById('header-connect-toggle');
    if (dropdown && toggleBtn && dropdown.style.display === 'block') {
        if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    }
});

// 11. LEAD GENERATION POPUP MODAL DRIVERS
function initPopupForm() {
    const form = document.getElementById('popup-lead-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('popup-name').value;
        const phone = document.getElementById('popup-phone').value;
        
        let popupLeads = JSON.parse(localStorage.getItem('popup_leads')) || [];
        popupLeads.push({ name, phone, timestamp: Date.now() });
        localStorage.setItem('popup_leads', JSON.stringify(popupLeads));
        
        form.style.display = 'none';
        const successEl = document.getElementById('popup-lead-success');
        if (successEl) successEl.style.display = 'block';
        
        setTimeout(() => {
            closeLeadPopup();
        }, 2200);
    });
}

function openLeadPopup() {
    const popup = document.getElementById('lead-popup');
    if (popup) {
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.classList.add('open');
        }, 10);
    }
}

function closeLeadPopup() {
    const popup = document.getElementById('lead-popup');
    if (popup) {
        popup.classList.remove('open');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
        sessionStorage.setItem('seen_lead_popup', 'true');
    }
}

// 12. CLIENT PORTAL & DUMMY LOGIN CONTROLLER
function renderPortalView() {
    const container = document.getElementById('portal-view-content');
    if (!container) return;

    if (!isLoggedIn) {
        // Render Login Form
        container.innerHTML = `
            <div class="booking-form-card" style="max-width:440px; margin:0 auto;">
                <div style="text-align:center; margin-bottom:20px;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:8px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:800;">Advisory Sign-In</h3>
                    <p style="font-size:0.75rem; color:var(--color-text-sub); margin-top:2px;">Enter your credentials to unlock private valuation assets and show schedules</p>
                </div>
                <form id="client-login-form" onsubmit="handleLoginSubmit(event)">
                    <div class="form-group">
                        <label for="login-email">Client Email Address</label>
                        <input type="email" id="login-email" required placeholder="client@donora.com" value="client@donora.com">
                    </div>
                    <div class="form-group">
                        <label for="login-password">Access Passcode</label>
                        <input type="password" id="login-password" required placeholder="••••••••" value="password123">
                    </div>
                    <div id="login-error-msg" style="display:none; color:var(--color-danger); font-size:0.75rem; font-weight:600; margin-bottom:12px; text-align:center;">
                        Invalid credentials. Use client@donora.com / password123
                    </div>
                    <button type="submit" class="btn-gold-submit">Log In to Portal</button>
                </form>
            </div>
        `;
    } else {
        // Render Client Portal Dashboard
        const userBookings = bookings;
        const totalSaved = favorites.length;

        container.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:20px;">
                <!-- Welcome Banner -->
                <div class="booking-form-card" style="border-left: 4px solid var(--color-primary); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                    <div>
                        <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--color-primary);">Welcome Back, Client Portal</h3>
                        <p style="font-size:0.78rem; color:var(--color-text-sub); margin-top:2px;">Logged in securely as <strong>${loggedInUser}</strong></p>
                    </div>
                    <button onclick="handleLogout()" class="btn-card-secondary" style="border-radius:50px; font-size:0.7rem; padding:6px 14px;">Sign Out</button>
                </div>

                <!-- Main Grid Layout -->
                <div style="display:grid; grid-template-columns: 1fr; gap:20px; align-items:start;" id="portal-dashboard-grid">
                    <!-- Left: Comparative reports -->
                    <div class="booking-form-card">
                        <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; margin-bottom:12px; border-bottom:1px solid var(--border-color); padding-bottom:8px; color:var(--color-primary);">My Document Library</h4>
                        
                        <div style="display:flex; flex-direction:column; gap:12px;">
                            <a href="#" onclick="alert('Downloading Comparative Market Analysis (CMA) - Rosharon Estate.pdf (Simulated)')" class="portal-file-link">
                                <div class="portal-file-info">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--color-primary); flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path><path d="M14 3v5h5"></path></svg>
                                    <div>
                                        <div class="portal-file-name">Comparative Market Assessment (CMA).pdf</div>
                                        <span class="portal-file-meta">Prepared by Kameron Whitfield • August 2026</span>
                                    </div>
                                </div>
                                <span class="portal-file-action">Download</span>
                            </a>

                            <a href="#" onclick="alert('Downloading Houston Q3 Real Estate Indices.pdf (Simulated)')" class="portal-file-link">
                                <div class="portal-file-info">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--color-primary); flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path><path d="M14 3v5h5"></path></svg>
                                    <div>
                                        <div class="portal-file-name">Houston Housing Market Index - Q3.pdf</div>
                                        <span class="portal-file-meta">Regional MLS Analysis Summary</span>
                                    </div>
                                </div>
                                <span class="portal-file-action">Download</span>
                            </a>
                        </div>
                    </div>

                    <!-- Right: Quick Summaries -->
                    <div style="display:flex; flex-direction:column; gap:20px;">
                        <div class="booking-form-card">
                            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; margin-bottom:12px; border-bottom:1px solid var(--border-color); padding-bottom:8px; color:var(--color-primary);">My Activity Profile</h4>
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
                                <div style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--border-radius-sm); padding:12px; text-align:center; cursor:pointer;" onclick="navigateTo('favorites')">
                                    <span style="font-size:1.6rem; font-weight:800; color:var(--color-primary); font-family:var(--font-heading);">${totalSaved}</span>
                                    <div style="font-size:0.68rem; color:var(--color-text-sub); text-transform:uppercase; margin-top:2px; font-weight:700; letter-spacing:0.5px;">Saved Listings</div>
                                </div>
                                <div style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--border-radius-sm); padding:12px; text-align:center; cursor:pointer;" onclick="navigateTo('book')">
                                    <span style="font-size:1.6rem; font-weight:800; color:var(--color-primary); font-family:var(--font-heading);">${userBookings.length}</span>
                                    <div style="font-size:0.68rem; color:var(--color-text-sub); text-transform:uppercase; margin-top:2px; font-weight:700; letter-spacing:0.5px;">Scheduled Tours</div>
                                </div>
                            </div>
                        </div>

                        ${userBookings.length > 0 ? `
                            <div class="booking-form-card">
                                <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; margin-bottom:12px; border-bottom:1px solid var(--border-color); padding-bottom:8px; color:var(--color-primary);">Recent Bookings</h4>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    ${userBookings.slice(0, 3).map(apt => `
                                        <div style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--border-radius-sm); padding:8px 12px; display:flex; justify-content:space-between; align-items:center;">
                                            <div>
                                                <div style="font-size:0.78rem; font-weight:700; color:var(--color-text-main);">${apt.service}</div>
                                                <span style="font-size:0.65rem; color:var(--color-text-sub);">${apt.date ? `${apt.date} at ${apt.time}` : 'Valuation Report'}</span>
                                            </div>
                                            <span style="font-size:0.6rem; font-weight:800; color:var(--color-primary); text-transform:uppercase;">${apt.status.split(' / ')[0]}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        // Apply grid responsive adjust dynamically if viewport allows
        adjustPortalDashboardLayout();
    }
}

function adjustPortalDashboardLayout() {
    const grid = document.getElementById('portal-dashboard-grid');
    if (grid && window.innerWidth >= 768) {
        grid.style.gridTemplateColumns = '1.1fr 0.9fr';
    } else if (grid) {
        grid.style.gridTemplateColumns = '1fr';
    }
}

// Listen to resize to adjust portal layout grid
window.addEventListener('resize', adjustPortalDashboardLayout);

function handleLoginSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const pass = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error-msg');

    // Simple auth validation logic (accepts standard demo login credentials)
    if (email === 'client@donora.com' && pass === 'password123') {
        isLoggedIn = true;
        loggedInUser = email;
        sessionStorage.setItem('client_logged_in', 'true');
        sessionStorage.setItem('client_user', email);
        if (errorEl) errorEl.style.display = 'none';
        renderPortalView();
    } else {
        if (errorEl) errorEl.style.display = 'block';
    }
}

function handleLogout() {
    isLoggedIn = false;
    sessionStorage.removeItem('client_logged_in');
    sessionStorage.removeItem('client_user');
    renderPortalView();
}

// 13. LEGAL MODALS (TERMS & PRIVACY CONTENT)
function openLegalModal(docType) {
    const modal = document.getElementById('legal-modal');
    const body = document.getElementById('legal-modal-body');
    if (!modal || !body) return;

    const termsContent = `
        <h2 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:var(--color-primary); margin-bottom:12px;">Terms of Service</h2>
        <p style="font-size:0.68rem; color:var(--color-text-sub); text-transform:uppercase; font-weight:700; margin-bottom:14px; letter-spacing:1px;">Last Updated: August 2026</p>
        
        <div style="font-size:0.8rem; line-height:1.6; color:var(--color-text-sub); display:flex; flex-direction:column; gap:12px;">
            <p>Welcome to Kameron Whitfield's real estate portal. By accessing this platform, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, you should not access or use this site.</p>
            
            <h4 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:700; color:var(--color-text-main); margin-top:8px;">1. Real Estate Information Accuracy</h4>
            <p>All property listings and financial calculation projections (including principal, taxes, and interest estimations in our Financial Estimate Model) displayed on this platform are for informational purposes only. Information is sourced from the Houston Association of Realtors (HAR) MLS but is not guaranteed. Buyers are advised to independently verify all property statistics, dimensions, and valuations with a licensed professional.</p>
            
            <h4 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:700; color:var(--color-text-main); margin-top:8px;">2. Fair Housing & Equal Opportunity</h4>
            <p>Kameron Whitfield and All City Real Estate are committed to complying with the Fair Housing Act. We support equal housing opportunities and do not discriminate based on race, color, religion, sex, handicap, familial status, or national origin.</p>
            
            <h4 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:700; color:var(--color-text-main); margin-top:8px;">3. Platform Use Restrictions</h4>
            <p>You may use this portal solely for your personal, non-commercial purposes to search for properties and connect with Kameron Whitfield. Scraping listings or duplicating design components is strictly prohibited.</p>
        </div>
    `;

    const privacyContent = `
        <h2 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:var(--color-primary); margin-bottom:12px;">Privacy Policy</h2>
        <p style="font-size:0.68rem; color:var(--color-text-sub); text-transform:uppercase; font-weight:700; margin-bottom:14px; letter-spacing:1px;">Last Updated: August 2026</p>
        
        <div style="font-size:0.8rem; line-height:1.6; color:var(--color-text-sub); display:flex; flex-direction:column; gap:12px;">
            <p>Your privacy is of utmost importance to us. This Privacy Policy details how we collect, store, and utilize your personal information on Kameron Whitfield's real estate portal.</p>
            
            <h4 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:700; color:var(--color-text-main); margin-top:8px;">1. Information Collection</h4>
            <p>We collect personal identifiers (such as names, phone numbers, and email addresses) that you voluntarily submit through our Private Client Request Portal, lead generation popups, and the Off-Market Gazette subscription forms.</p>
            
            <h4 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:700; color:var(--color-text-main); margin-top:8px;">2. Use of Captured Data</h4>
            <p>Captured information is used exclusively to facilitate private tours, organize comparative market analysis briefs, deliver requested newsletter reports, and contact you directly regarding residential advisory services. We do not sell or lease your personal lead data to third parties.</p>
            
            <h4 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:700; color:var(--color-text-main); margin-top:8px;">3. Lead Data Protection & Rights</h4>
            <p>Lead entries are processed securely. You may contact Kameron Whitfield's office at any time to request the removal or correction of your email address and contact record from our advisory databases.</p>
        </div>
    `;

    body.innerHTML = docType === 'terms' ? termsContent : privacyContent;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeLegalModal() {
    const modal = document.getElementById('legal-modal');
    if (modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }
}

// 14. INTERACTIVE CANVAS VIDEO PLAYER
function initVideoPlayer() {
    const canvas = document.getElementById('realtor-video-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const playBtn = document.getElementById('video-play-btn');
    const progressBar = document.getElementById('video-progress');
    const timeDisplay = document.getElementById('video-time');

    // Set high-res internal canvas dimensions (16:9 ratio)
    canvas.width = 1280;
    canvas.height = 720;

    // Load local generated image assets
    const images = [];
    const imageSources = ['luxury_houston_entrance.jpg', 'luxury_houston_house.jpg'];
    let imagesLoaded = 0;

    imageSources.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            images[index] = img;
            imagesLoaded++;
            if (imagesLoaded === imageSources.length) {
                // Pre-draw first frame
                drawFrame(0);
            }
        };
    });

    // Playback state variables
    let isPlaying = false;
    let duration = 5000; // 5-second video teaser loop
    let currentTime = 0;
    let lastTime = 0;
    let animationFrameId = null;

    const subtitles = [
        { start: 0, end: 1600, text: "Hello, I'm Kameron Whitfield with All City Real Estate." },
        { start: 1600, end: 3400, text: "Empowering families to secure residential investments in Houston." },
        { start: 3400, end: 5000, text: "Welcome to The Collection. Let's find your dream home together." }
    ];

    function drawFrame(ms) {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const currentT = ms % duration;
        const index = currentT < duration / 2 ? 0 : 1;
        const img = images[index];

        if (img) {
            // Draw background image with Ken Burns panning & zoom
            let scale = 1.05;
            let dx = 0;
            let dy = 0;

            const tSegment = (currentT % (duration / 2)) / (duration / 2); // 0 to 1 inside current segment
            if (index === 0) {
                // Zoom in and pan right
                scale = 1.0 + tSegment * 0.08;
                dx = -tSegment * 40;
            } else {
                // Zoom out and pan down
                scale = 1.08 - tSegment * 0.08;
                dy = -tSegment * 30;
            }

            // Draw image with calculated cropping bounds to fill canvas
            const w = canvas.width;
            const h = canvas.height;
            const iw = img.width;
            const ih = img.height;

            const targetW = iw / scale;
            const targetH = ih / scale;
            const sx = (iw - targetW) / 2 + dx;
            const sy = (ih - targetH) / 2 + dy;

            ctx.drawImage(img, Math.max(0, sx), Math.max(0, sy), targetW, targetH, 0, 0, w, h);

            // Apply cross-fade transition overlays at segment boundaries
            const transitionWindow = 600; // 0.6s crossfade window
            const firstHalfBound = duration / 2;

            if (currentT > firstHalfBound - transitionWindow && currentT < firstHalfBound) {
                // Crossfade from Image 0 to Image 1
                const alpha = (currentT - (firstHalfBound - transitionWindow)) / transitionWindow;
                const nextImg = images[1];
                if (nextImg) {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.drawImage(nextImg, 0, 0, w, h);
                    ctx.restore();
                }
            } else if (currentT > duration - transitionWindow) {
                // Crossfade from Image 1 back to Image 0
                const alpha = (currentT - (duration - transitionWindow)) / transitionWindow;
                const prevImg = images[0];
                if (prevImg) {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.drawImage(prevImg, 0, 0, w, h);
                    ctx.restore();
                }
            }
        } else {
            // Fallback drawing if images not yet loaded
            ctx.fillStyle = '#1F1916';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Draw subtitle band overlay
        ctx.fillStyle = 'rgba(31, 25, 22, 0.75)';
        ctx.fillRect(0, canvas.height - 110, canvas.width, 110);

        // Find active subtitle text matching current time
        const activeSub = subtitles.find(s => currentT >= s.start && currentT < s.end);
        if (activeSub) {
            ctx.fillStyle = '#FCFAF6';
            ctx.font = '700 32px Outfit, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(activeSub.text, canvas.width / 2, canvas.height - 48);
        }

        // Draw a simulated pulsing "Live Visualizer" audio track animation at bottom left when playing
        if (isPlaying) {
            ctx.fillStyle = '#8A1C2E';
            for (let i = 0; i < 8; i++) {
                const barHeight = 10 + Math.sin((ms / 150) + i) * 15;
                ctx.fillRect(30 + (i * 12), canvas.height - 150, 6, barHeight);
            }
        }
    }

    function tick(timestamp) {
        if (!isPlaying) return;
        if (!lastTime) lastTime = timestamp;

        const delta = timestamp - lastTime;
        lastTime = timestamp;

        currentTime += delta;
        if (currentTime >= duration) {
            currentTime = 0; // Loop around
        }

        // Update progress bar
        const progressPercent = (currentTime / duration) * 100;
        if (progressBar) progressBar.style.width = `${progressPercent}%`;

        // Update timer representation
        const secs = Math.floor(currentTime / 1000);
        const formatSecs = secs < 10 ? `0${secs}` : secs;
        if (timeDisplay) timeDisplay.textContent = `00:${formatSecs}`;

        drawFrame(currentTime);

        animationFrameId = requestAnimationFrame(tick);
    }

    function play() {
        isPlaying = true;
        lastTime = 0;
        if (playBtn) {
            playBtn.querySelector('.play-icon').style.display = 'none';
            playBtn.querySelector('.pause-icon').style.display = 'block';
        }
        animationFrameId = requestAnimationFrame(tick);
    }

    function pause() {
        isPlaying = false;
        if (playBtn) {
            playBtn.querySelector('.play-icon').style.display = 'block';
            playBtn.querySelector('.pause-icon').style.display = 'none';
        }
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                pause();
            } else {
                play();
            }
        });
    }

    // Allow scrubbing progress timeline
    const progressTrack = document.querySelector('.video-progress-container');
    if (progressTrack) {
        progressTrack.addEventListener('click', (e) => {
            const rect = progressTrack.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = clickX / rect.width;
            currentTime = pct * duration;
            if (progressBar) progressBar.style.width = `${pct * 100}%`;
            drawFrame(currentTime);
        });
    }
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
window.toggleHeaderConnect = toggleHeaderConnect;
window.copyBusinessCard = copyBusinessCard;
window.openLeadPopup = openLeadPopup;
window.closeLeadPopup = closeLeadPopup;
window.handleLoginSubmit = handleLoginSubmit;
window.handleLogout = handleLogout;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;
window.initVideoPlayer = initVideoPlayer;
