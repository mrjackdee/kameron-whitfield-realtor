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
    initTheme();
    initCustomCursor();
    initScrollEffects();
    renderFeaturedProperty();
    renderListings();
    initMortgageCalculator();
    initBookingForm();
    initGazetteForm();
    initPopupForm();
    initVideoPlayer();
    initReviewsCarousel();
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

// App routing between view tabs (wrapped in View Transitions if supported)
function navigateTo(viewId) {
    const performNavigation = () => {
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
    };

    if (document.startViewTransition) {
        document.startViewTransition(performNavigation);
    } else {
        performNavigation();
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
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <h3 class="section-title" style="margin:0; padding:0; border:none;">Description Brief</h3>
                <button onclick="toggleNarrator('${property.id}')" class="btn-card-secondary" id="narrator-btn" style="display:flex; align-items:center; gap:6px; padding:5px 10px; font-size:0.7rem; border-radius:50px; cursor:pointer;">
                    <svg class="narrator-play-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    <svg class="narrator-stop-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;"><rect x="6" y="6" width="12" height="12"></rect></svg>
                    <span id="narrator-btn-text">Listen</span>
                </button>
            </div>
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
                    <!-- Left: Comparative reports & Chart -->
                    <div style="display:flex; flex-direction:column; gap:20px;">
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

                        <!-- Market Intelligence Chart -->
                        <div class="booking-form-card">
                            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; margin-bottom:12px; border-bottom:1px solid var(--border-color); padding-bottom:8px; color:var(--color-primary);">Market Intelligence (Heights vs River Oaks)</h4>
                            <div style="position:relative; width:100%; height:160px; margin-top:8px;">
                                <canvas id="market-trends-canvas" style="width:100%; height:100%; display:block;"></canvas>
                            </div>
                            <div style="display:flex; justify-content:center; gap:16px; margin-top:10px; font-size:0.68rem; font-weight:700;">
                                <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:8px; height:8px; background-color:#8A1C2E; border-radius:50%;"></span>River Oaks (+12%)</span>
                                <span style="display:flex; align-items:center; gap:4px;"><span style="display:inline-block; width:8px; height:8px; background-color:#D4AF37; border-radius:50%;"></span>Houston Heights (+8%)</span>
                            </div>
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
        setTimeout(renderMarketTrendsChart, 50);
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

        // Draw subtitle band overlay (raised to avoid collision with bottom timeline controls)
        ctx.fillStyle = 'rgba(31, 25, 22, 0.75)';
        ctx.fillRect(0, canvas.height - 165, canvas.width, 100);

        // Find active subtitle text matching current time
        const activeSub = subtitles.find(s => currentT >= s.start && currentT < s.end);
        if (activeSub) {
            ctx.fillStyle = '#FCFAF6';
            ctx.font = '700 32px Outfit, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(activeSub.text, canvas.width / 2, canvas.height - 105);
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

// 15. CLIENT TESTIMONIALS CAROUSEL
function initReviewsCarousel() {
    const track = document.getElementById('reviews-carousel-track');
    const dotsContainer = document.getElementById('reviews-carousel-dots');
    if (!track || !dotsContainer) return;

    const reviews = [
        {
            stars: 5,
            quote: "Kameron helped us navigate a highly competitive bidding war in the Heights. His local market knowledge and strategic counsel were invaluable. We got our dream home under budget!",
            author: "Sarah & Michael T.",
            location: "The Heights, Houston"
        },
        {
            stars: 5,
            quote: "Kameron is the consummate professional. He listed my property and had multiple cash offers within 48 hours. His marketing plan and attention to detail are unmatched.",
            author: "David L.",
            location: "River Oaks, Houston"
        },
        {
            stars: 5,
            quote: "As first-time home buyers, we were nervous about the process. Kameron was incredibly patient, explaining every document and helping us secure a great mortgage rate.",
            author: "Elena R.",
            location: "Sugar Land, TX"
        },
        {
            stars: 5,
            quote: "I have worked with several realtors over the years, and Kameron stands out. His advisory philosophy isn't just about selling houses; it's about building lasting family investments.",
            author: "Dr. Marcus V.",
            location: "Memorial, Houston"
        },
        {
            stars: 5,
            quote: "Relocating from out of state was stressful, but Kameron made it seamless. He did virtual video tours and coordinated everything perfectly. We highly recommend All City Real Estate!",
            author: "The Henderson Family",
            location: "Pearland, TX"
        }
    ];

    // Render review slides
    track.innerHTML = reviews.map(rev => `
        <div class="review-slide">
            <div class="review-stars">${"★".repeat(rev.stars)}</div>
            <p class="review-quote">"${rev.quote}"</p>
            <div class="review-author">${rev.author}</div>
            <div class="review-location">${rev.location}</div>
        </div>
    `).join('');

    // Render dots
    dotsContainer.innerHTML = reviews.map((_, idx) => `
        <button class="carousel-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}" aria-label="Go to slide ${idx + 1}"></button>
    `).join('');

    let currentSlide = 0;
    let autoPlayInterval = null;

    function goToSlide(idx) {
        currentSlide = idx;
        // Shift track by percentage
        track.style.transform = `translateX(-${idx * 100}%)`;

        // Update dot states
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, dIdx) => {
            if (dIdx === idx) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        let nextIdx = currentSlide + 1;
        if (nextIdx >= reviews.length) {
            nextIdx = 0;
        }
        goToSlide(nextIdx);
    }

    // Dot event listeners
    dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.carousel-dot');
        if (!dot) return;
        const idx = parseInt(dot.getAttribute('data-idx'));
        goToSlide(idx);
        resetAutoPlay();
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4500); // 4.5s slide interval
    }

    function resetAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
        startAutoPlay();
    }

    // Initialize auto play
    startAutoPlay();
}

// 16. THEME TOGGLE (DARK MODE) SYSTEM
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (!themeBtn) return;

    const sunIcon = themeBtn.querySelector('.sun-icon');
    const moonIcon = themeBtn.querySelector('.moon-icon');

    // Retrieve active theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Start transitions if supported
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                document.documentElement.setAttribute('data-theme', nextTheme);
                localStorage.setItem('theme', nextTheme);
                updateThemeUI(nextTheme);
                // Re-render market trends chart to pick up dark-mode colors
                renderMarketTrendsChart();
            });
        } else {
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);
            updateThemeUI(nextTheme);
            renderMarketTrendsChart();
        }
    });

    function updateThemeUI(theme) {
        if (theme === 'dark') {
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        } else {
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        }
    }
}

// 17. CUSTOM EDITORIAL CURSOR TRAILING
function initCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const circle = document.getElementById('cursor-circle');
    if (!dot || !circle) return;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    let isHovering = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant position for the dot
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Animate custom circle with smooth LERP trailing interpolation
    function animateCircle() {
        const dx = mouseX - circleX;
        const dy = mouseY - circleY;
        
        circleX += dx * 0.15;
        circleY += dy * 0.15;

        const scale = isHovering ? 'scale(1.8)' : 'scale(1)';
        circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) ${scale}`;

        requestAnimationFrame(animateCircle);
    }
    animateCircle();

    // Hook listeners on interactive hover items to expand cursor scale
    function addHoverListeners() {
        const items = document.querySelectorAll('button, a, .listing-card, .contact-pill, .desktop-nav-item, input, select, textarea');
        items.forEach(el => {
            el.addEventListener('mouseenter', () => isHovering = true);
            el.addEventListener('mouseleave', () => isHovering = false);
        });
    }
    
    // Add hover triggers
    addHoverListeners();
    
    // Observe DOM mutations to bind new elements dynamically (e.g. listings grid shifts)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
}

// 18. SCROLL EFFECTS & REVEALS
function initScrollEffects() {
    const header = document.querySelector('.app-header');
    const scrollContainer = document.querySelector('.app-content');

    if (scrollContainer && header) {
        scrollContainer.addEventListener('scroll', () => {
            if (scrollContainer.scrollTop > 40) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, { threshold: 0.1 });

    // Mark sections to reveal
    const sections = document.querySelectorAll('.info-section, .booking-form-card, .editorial-lead-card');
    sections.forEach(s => {
        s.classList.add('reveal');
        observer.observe(s);
    });
}

// 19. LAYOUT VIEWS LAYOUT TOGGLER (LIST VS GEOMAP)
let activeListingsLayout = 'list';
function switchListingsLayout(layout) {
    activeListingsLayout = layout;

    const listBtn = document.getElementById('btn-list-view');
    const mapBtn = document.getElementById('btn-map-view');
    const listGrid = document.getElementById('listings-container');
    const mapContainer = document.getElementById('listings-map-container');

    if (!listBtn || !mapBtn || !listGrid || !mapContainer) return;

    if (layout === 'map') {
        listBtn.classList.remove('active');
        listBtn.style.background = 'none';
        listBtn.style.color = 'var(--color-text-sub)';

        mapBtn.classList.add('active');
        mapBtn.style.background = 'var(--color-primary)';
        mapBtn.style.color = '#FFFFFF';

        listGrid.style.display = 'none';
        mapContainer.style.display = 'block';
        
        // Draw pins onto the SVG Map
        renderMapPins();
    } else {
        mapBtn.classList.remove('active');
        mapBtn.style.background = 'none';
        mapBtn.style.color = 'var(--color-text-sub)';

        listBtn.classList.add('active');
        listBtn.style.background = 'var(--color-primary)';
        listBtn.style.color = '#FFFFFF';

        mapContainer.style.display = 'none';
        listGrid.style.display = 'grid';
    }
}

// 20. GEOMAP PIN RENDERER
function renderMapPins() {
    const pinsLayer = document.getElementById('map-pins-layer');
    const hoverCard = document.getElementById('map-hover-card');
    const svg = document.getElementById('houston-map-svg');
    if (!pinsLayer || !hoverCard || !svg) return;

    // Filter current properties matches search/tab inputs
    const query = activeFilters.search;
    const cat = activeFilters.category;

    const filtered = listingsData.filter(item => {
        // Search filter
        const matchSearch = !query || 
            item.address.toLowerCase().includes(query) || 
            item.subdivision.toLowerCase().includes(query) ||
            item.marketArea.toLowerCase().includes(query);

        // Category filter
        let matchCat = true;
        if (cat === 'sale') matchCat = item.mode === 'sale';
        else if (cat === 'rent') matchCat = item.mode === 'rent';
        else if (cat === 'sold') matchCat = item.mode === 'sold';

        return matchSearch && matchCat;
    });

    const mapCoords = {
        "90218765": { x: 180, y: 460 },
        "82627271": { x: 450, y: 380 },
        "67593063": { x: 470, y: 390 },
        "35705852": { x: 430, y: 410 },
        "37115870": { x: 490, y: 400 },
        "69685250": { x: 200, y: 470 },
        "66730524": { x: 280, y: 330 },
        "41091184": { x: 120, y: 220 }
    };

    pinsLayer.innerHTML = filtered.map(item => {
        const coords = mapCoords[item.id];
        if (!coords) return '';

        return `
            <g class="map-pin" transform="translate(${coords.x}, ${coords.y})" onclick="openPropertyDetails('${item.id}')" style="cursor:pointer;" data-id="${item.id}">
                <!-- Outer Pulsing Ring -->
                <circle r="12" fill="var(--color-primary)" opacity="0.3" class="map-pulse-ring">
                    <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                <!-- Inner Pin Dot -->
                <circle r="6" fill="var(--color-primary)" stroke="#FFFFFF" stroke-width="1.5"></circle>
            </g>
        `;
    }).join('');

    // Attach hover listeners to group nodes
    const pins = pinsLayer.querySelectorAll('.map-pin');
    pins.forEach(pin => {
        pin.addEventListener('mouseenter', (e) => {
            const id = pin.getAttribute('data-id');
            const item = listingsData.find(p => p.id === id);
            if (!item) return;

            const rect = svg.getBoundingClientRect();
            const coords = mapCoords[id];
            
            // Map coordinates relative to current client container bounding box
            const pctX = coords.x / 800;
            const pctY = coords.y / 600;
            
            const cardX = rect.left + (rect.width * pctX) - (window.pageXOffset || 0);
            const cardY = rect.top + (rect.height * pctY) - (window.pageYOffset || 0) - 95;

            hoverCard.innerHTML = `
                <div style="font-weight:800; font-size:0.72rem; color:var(--color-primary);">$${item.price.toLocaleString()}</div>
                <div style="font-size:0.65rem; font-weight:700; color:var(--color-text-main); margin-top:2px;">${item.address}</div>
                <div style="font-size:0.58rem; color:var(--color-text-sub);">${item.marketArea}</div>
            `;

            // Position and show card preview
            const wrapper = svg.parentElement;
            const wrapperRect = wrapper.getBoundingClientRect();
            hoverCard.style.left = `${(coords.x / 800) * wrapperRect.width - 110}px`;
            hoverCard.style.top = `${(coords.y / 600) * wrapperRect.height - 90}px`;
            hoverCard.style.display = 'block';
        });

        pin.addEventListener('mouseleave', () => {
            hoverCard.style.display = 'none';
        });
    });
}

// 21. CONVERSATIONAL LEAD POPUP QUIZ CONTROLLER
let activeQuizGoal = '';
let activeQuizBudget = '';

function selectQuizGoal(goal) {
    activeQuizGoal = goal;
    const step1 = document.getElementById('quiz-step-1');
    const step2 = document.getElementById('quiz-step-2');
    if (step1 && step2) {
        step1.style.display = 'none';
        step2.style.display = 'block';
    }
}

function selectQuizBudget(budget) {
    activeQuizBudget = budget;
    const step2 = document.getElementById('quiz-step-2');
    const step3 = document.getElementById('quiz-step-3');
    if (step2 && step3) {
        step2.style.display = 'none';
        step3.style.display = 'block';
    }
}

function prevQuizStep(step) {
    const step1 = document.getElementById('quiz-step-1');
    const step2 = document.getElementById('quiz-step-2');
    const step3 = document.getElementById('quiz-step-3');

    if (step === 1) {
        if (step2) step2.style.display = 'none';
        if (step1) step1.style.display = 'block';
    } else if (step === 2) {
        if (step3) step3.style.display = 'none';
        if (step2) step2.style.display = 'block';
    }
}

// 22. DYNAMIC MARKET INTELLIGENCE CANVAS GRAPH
function renderMarketTrendsChart() {
    const canvas = document.getElementById('market-trends-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Scale canvas for high-DPI displays
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 15, right: 15, bottom: 25, left: 45 };

    ctx.clearRect(0, 0, w, h);

    // Read grid/text variables from DOM context dynamically
    const gridStyle = getComputedStyle(document.documentElement);
    const borderColor = gridStyle.getPropertyValue('--border-color').trim() || 'rgba(0,0,0,0.08)';
    const textMuted = gridStyle.getPropertyValue('--color-text-sub').trim() || '#A89C94';
    const primaryColor = gridStyle.getPropertyValue('--color-primary').trim() || '#8A1C2E';

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    // Y-axis grid lines
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (i * (h - padding.top - padding.bottom) / 4);
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        
        // Draw grid labels
        ctx.fillStyle = textMuted;
        ctx.font = '600 9px sans-serif';
        ctx.textAlign = 'right';
        const val = 2000000 - (i * 400000);
        ctx.fillText(`$${(val / 1000).toFixed(0)}k`, padding.left - 8, y + 3);
    }
    ctx.stroke();

    // Data points (Jan, Mar, May, Jul, Sep, Nov)
    const months = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'];
    const riverOaks = [1200000, 1350000, 1480000, 1600000, 1750000, 1850000];
    const heights = [750000, 800000, 830000, 890000, 920000, 980000];

    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // Draw X labels
    ctx.textAlign = 'center';
    months.forEach((m, idx) => {
        const x = padding.left + (idx * chartW / (months.length - 1));
        ctx.fillStyle = textMuted;
        ctx.fillText(m, x, h - 8);
    });

    // Helper to map values to coordinates
    const getX = (idx) => padding.left + (idx * chartW / (months.length - 1));
    const getY = (val) => {
        const minVal = 400000;
        const maxVal = 2000000;
        return padding.top + chartH - ((val - minVal) / (maxVal - minVal) * chartH);
    };

    // Draw River Oaks line (Crimson)
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    riverOaks.forEach((val, idx) => {
        if (idx === 0) ctx.moveTo(getX(idx), getY(val));
        else ctx.lineTo(getX(idx), getY(val));
    });
    ctx.stroke();

    // Draw Heights line (Gold)
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    heights.forEach((val, idx) => {
        if (idx === 0) ctx.moveTo(getX(idx), getY(val));
        else ctx.lineTo(getX(idx), getY(val));
    });
    ctx.stroke();

    // Draw dots
    ctx.lineWidth = 2;
    riverOaks.forEach((val, idx) => {
        ctx.fillStyle = primaryColor;
        ctx.strokeStyle = '#FCFAF6';
        ctx.beginPath();
        ctx.arc(getX(idx), getY(val), 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });

    heights.forEach((val, idx) => {
        ctx.fillStyle = '#D4AF37';
        ctx.strokeStyle = '#FCFAF6';
        ctx.beginPath();
        ctx.arc(getX(idx), getY(val), 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
}

// 23. TEXT-TO-SPEECH NARRATOR CONTROLLER
let narratorUtterance = null;
let isNarrating = false;

function toggleNarrator(listingId) {
    const property = listingsData.find(item => item.id === listingId);
    if (!property) return;

    const btn = document.getElementById('narrator-btn');
    const playIcon = btn.querySelector('.narrator-play-icon');
    const stopIcon = btn.querySelector('.narrator-stop-icon');
    const btnText = document.getElementById('narrator-btn-text');

    if (isNarrating) {
        // Stop current speech
        window.speechSynthesis.cancel();
        isNarrating = false;
        if (playIcon) playIcon.style.display = 'block';
        if (stopIcon) stopIcon.style.display = 'none';
        if (btnText) btnText.textContent = 'Listen';
    } else {
        // Start description speech synthesis
        window.speechSynthesis.cancel(); // safety cancel first
        
        const textToSpeak = `Represented by Kameron Whitfield. Located at ${property.address} in ${property.city}. ${property.description}`;
        narratorUtterance = new SpeechSynthesisUtterance(textToSpeak);
        
        // Find professional voice if possible
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural')));
        if (preferredVoice) {
            narratorUtterance.voice = preferredVoice;
        }

        narratorUtterance.onend = () => {
            isNarrating = false;
            if (playIcon) playIcon.style.display = 'block';
            if (stopIcon) stopIcon.style.display = 'none';
            if (btnText) btnText.textContent = 'Listen';
        };

        narratorUtterance.onerror = () => {
            isNarrating = false;
            if (playIcon) playIcon.style.display = 'block';
            if (stopIcon) stopIcon.style.display = 'none';
            if (btnText) btnText.textContent = 'Listen';
        };

        isNarrating = true;
        if (playIcon) playIcon.style.display = 'none';
        if (stopIcon) stopIcon.style.display = 'block';
        if (btnText) btnText.textContent = 'Stop';
        
        window.speechSynthesis.speak(narratorUtterance);
    }
}

// Make sure speech ends if bottom details modal is closed
const oldCloseDetailsSheet = closeDetailsSheet;
closeDetailsSheet = function() {
    window.speechSynthesis.cancel();
    isNarrating = false;
    oldCloseDetailsSheet();
};

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
window.initReviewsCarousel = initReviewsCarousel;
window.initTheme = initTheme;
window.initCustomCursor = initCustomCursor;
window.initScrollEffects = initScrollEffects;
window.switchListingsLayout = switchListingsLayout;
window.renderMapPins = renderMapPins;
window.selectQuizGoal = selectQuizGoal;
window.selectQuizBudget = selectQuizBudget;
window.prevQuizStep = prevQuizStep;
window.renderMarketTrendsChart = renderMarketTrendsChart;
window.toggleNarrator = toggleNarrator;
