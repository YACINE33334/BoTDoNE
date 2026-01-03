// Supabase Configuration - Isolated Module
// IMPORTANT: Credentials are hardcoded here because browsers cannot read .env files

const SUPABASE_URL = 'https://hgkwxmgyxbjdxiwlyhjb.supabase.co';
// Correct anon key from Supabase dashboard
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhna3d4bWd5eGJqZHhpd2x5aGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0MzcyNDIsImV4cCI6MjA4MzAxMzI0Mn0.3wYp-Kxfawza5GXZa6EqNA7LlCQrzW261-vE2TIlor4';

console.log('🔧 Supabase Config Loading...');
console.log('📍 URL:', SUPABASE_URL);
console.log('🔑 Key:', SUPABASE_ANON_KEY);

// Initialize Supabase client - wait for library to load
function initializeSupabase() {
    console.log('🚀 Attempting to initialize Supabase client...');

    // Check if Supabase library is loaded
    if (typeof window.supabase === 'undefined') {
        console.error('❌ CRITICAL: Supabase library not loaded!');
        console.error('   Make sure <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> is in your HTML');
        return null;
    }

    if (typeof window.supabase.createClient !== 'function') {
        console.error('❌ CRITICAL: window.supabase.createClient is not a function!');
        console.error('   window.supabase =', window.supabase);
        return null;
    }

    try {
        // Create client
        const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        if (!client) {
            console.error('❌ CRITICAL: createClient returned null/undefined');
            return null;
        }

        console.log('✅ SUCCESS: Supabase client initialized!');
        console.log('📦 Client object:', client);
        return client;

    } catch (error) {
        console.error('❌ FATAL ERROR during Supabase initialization:');
        console.error('   Error:', error);
        console.error('   Message:', error.message);
        console.error('   Stack:', error.stack);
        return null;
    }
}

// Try to initialize immediately
let supabaseClient = initializeSupabase();

// If failed, try again after a short delay (library might still be loading)
if (!supabaseClient) {
    console.log('⏳ Retrying Supabase initialization in 500ms...');
    setTimeout(() => {
        supabaseClient = initializeSupabase();
        window.supabaseClient = supabaseClient;

        if (supabaseClient) {
            console.log('✅ Retry successful! Supabase is now ready.');
        } else {
            console.error('❌ Retry failed. Supabase will not be available.');
        }
    }, 500);
}

// Export for use in other scripts
window.supabaseClient = supabaseClient;

if (supabaseClient) {
    console.log('✅ window.supabaseClient is now available globally');
} else {
    console.error('❌ window.supabaseClient is NULL - will retry in 500ms');
}
