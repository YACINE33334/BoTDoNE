// ============================================================
// LIVE TRAFFIC MONITORING SYSTEM
// ============================================================

let visitorChannel = null;
let visitorCountry = 'Unknown';
let sessionId = null;

// Fetch visitor country from IP geolocation API
async function fetchVisitorCountry() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country_name || 'Unknown';
    } catch (error) {
        console.warn('Could not fetch country:', error);
        return 'Unknown';
    }
}

// Initialize visitor tracking for public site
async function initVisitorTracking() {
    const supabase = window.supabaseClient;

    if (!supabase) {
        console.warn('⚠ Supabase not available - visitor tracking disabled');
        return;
    }

    try {
        // Generate unique session ID
        sessionId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

        // Fetch visitor country
        visitorCountry = await fetchVisitorCountry();

        // Create presence channel
        visitorChannel = supabase.channel('online-visitors', {
            config: {
                presence: {
                    key: sessionId
                }
            }
        });

        // Track presence
        visitorChannel
            .on('presence', { event: 'sync' }, () => {
                console.log('✓ Visitor presence synced');
            })
            .subscribe(async (status) => {
                if (status === 'SUBSCRIBED') {
                    await visitorChannel.track({
                        online_at: new Date().toISOString(),
                        country: visitorCountry,
                        session_id: sessionId
                    });
                    console.log('✓ Visitor tracked:', visitorCountry);
                }
            });

        // Update presence every 30 seconds (heartbeat)
        setInterval(async () => {
            if (visitorChannel) {
                await visitorChannel.track({
                    online_at: new Date().toISOString(),
                    country: visitorCountry,
                    session_id: sessionId
                });
            }
        }, 30000);

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (visitorChannel) {
                visitorChannel.untrack();
            }
        });

    } catch (error) {
        console.error('Error initializing visitor tracking:', error);
    }
}

// ============================================================
// ADMIN MONITORING DASHBOARD
// ============================================================

let monitoringChannel = null;
let monitoringInterval = null;

// Check if user is authenticated admin
function isAdminAuthenticated() {
    const session = localStorage.getItem('admin_session');
    if (!session) return false;

    try {
        const sessionData = JSON.parse(session);
        // Check if session is less than 24 hours old
        const sessionAge = Date.now() - sessionData.timestamp;
        return sessionAge < 24 * 60 * 60 * 1000; // 24 hours
    } catch {
        return false;
    }
}

// Initialize admin monitoring (only for authenticated admins)
async function initAdminMonitoring() {
    if (!isAdminAuthenticated()) {
        console.log('⚠ Admin not authenticated - monitoring disabled');
        return;
    }

    const supabase = window.supabaseClient;

    if (!supabase) {
        console.warn('⚠ Supabase not available - monitoring disabled');
        return;
    }

    try {
        // Subscribe to presence channel
        monitoringChannel = supabase.channel('online-visitors');

        monitoringChannel
            .on('presence', { event: 'sync' }, () => {
                updateVisitorStats();
            })
            .on('presence', { event: 'join' }, () => {
                updateVisitorStats();
            })
            .on('presence', { event: 'leave' }, () => {
                updateVisitorStats();
            })
            .subscribe();

        // Initial stats update
        setTimeout(() => updateVisitorStats(), 1000);

        // Update stats every 10 seconds
        monitoringInterval = setInterval(() => {
            updateVisitorStats();
        }, 10000);

        console.log('✓ Admin monitoring initialized');

    } catch (error) {
        console.error('Error initializing admin monitoring:', error);
    }
}

// Update visitor statistics in admin dashboard
function updateVisitorStats() {
    if (!monitoringChannel) return;

    const presenceState = monitoringChannel.presenceState();
    const visitors = [];

    // Extract all visitors from presence state
    for (const key in presenceState) {
        const states = presenceState[key];
        states.forEach(state => {
            if (state.country) {
                visitors.push({
                    country: state.country,
                    session_id: state.session_id,
                    online_at: state.online_at
                });
            }
        });
    }

    // Update total count
    const countElement = document.getElementById('active-count');
    if (countElement) {
        countElement.textContent = visitors.length;
        countElement.classList.add('pulse-update');
        setTimeout(() => countElement.classList.remove('pulse-update'), 500);
    }

    // Group by country
    const countryMap = {};
    visitors.forEach(v => {
        countryMap[v.country] = (countryMap[v.country] || 0) + 1;
    });

    // Render country list
    renderCountryList(countryMap);
}

// Render country distribution list
function renderCountryList(countryMap) {
    const container = document.getElementById('country-list');
    if (!container) return;

    const countries = Object.entries(countryMap)
        .sort((a, b) => b[1] - a[1]); // Sort by count descending

    if (countries.length === 0) {
        container.innerHTML = `
            <div class="text-center text-dim py-8 mono text-xs">
                <i class="fas fa-satellite-dish text-2xl mb-2 opacity-30"></i>
                <div>NO_ACTIVE_VISITORS</div>
            </div>
        `;
        return;
    }

    container.innerHTML = countries.map(([country, count]) => `
        <div class="country-item">
            <div class="country-info">
                <i class="fas fa-map-marker-alt country-icon"></i>
                <span class="country-name">${country}</span>
            </div>
            <div class="country-count">${count}</div>
        </div>
    `).join('');
}
