// --- CENTRAL DATA MANAGEMENT ---

const defaultData = {
    global: {
        heroTitle: "BOTDONE <br><span class='text-blue-500'>Tech Division</span>",
        heroDesc: "نحن هنا لا نبيع أدوات، بل نبني بيئة تقنية متكاملة. مرحباً بك في مستودع البرمجيات المخصص للمتداولين والمبرمجين الذين يبحثون عن المنطق الرياضي الصرف خلف كل حركة سعرية.",
        kingTitle: "THE KING SYSTEM // بروتوكول السيولة المركزي",
        kingDesc: "نظام **KING SYSTEM** ليس مجرد مؤشر فني، بل هو محاكي لخوارزميات العرض والطلب (SMD) مصمم لكشف البصمة السعرية لصناع السوق. يعتمد النظام على معادلات برمجية متقدمة تفلتر الضجيج السعري وتركز على نقاط الالتقاء (Confluence) عالية الدقة، مما يجعله الأداة الأساسية في ترسانة المتداول المحترف.",
        kingImagePlaceholder: "ALGORITHMIC_FLOW_ACTIVE"
    },
    library: [
        { id: 1715500000000, name: "BOTDONE Momentum V1", platform: "MT4", desc: "Open source momentum tool.", link: "#", img: "https://placehold.co/600x400/000000/FFF" }
    ],
    blog: [
        { id: 1715500000001, title: "فلسفة الرينكو في الأسواق الحديثة", date: "2024-05-12", content: "لماذا نعتبر الزمن عدواً للمتداول؟..." }
    ]
};

const DB_KEY = 'botdone_db_v1';
const LANG_KEY = 'botdone_lang';

const TRANSLATIONS = {
    en: {
        navHome: "HOME",
        navKing: "NEURAL VAULT",
        navLibrary: "BOTDONE LIBRARY",
        navBlog: "BLOG",
        navAdmin: "ADMIN DASHBOARD",
        market: "MARKET:",
        day: "DAY:",
        admin: "VIP",
        heroTitle: "BOTDONE <br><span class='text-blue-500'>Open Source Ecology</span>",
        heroDesc: "A sovereign community built for traders. We provide massive algorithmic libraries, technical logs, and high-level solutions for the community—100% free. Join the collective and overcome market complexity with pure logic.",
        heroSub: "NEURAL_NET_V6.0 // COMMUNITY_CORE_ACTIVE",
        ctaKing: "NEURAL_VAULT",
        ctaLibrary: "FREE_ALGO_LIBRARY",
        kingSysCore: "// NEURAL_VAULT: HYBRID_ALGORITHMIC_ENGINE",
        authLevel: "CLEARANCE_LEVEL: ELITE_PARTNER",
        recruitmentLabel: "ADMISSION_PROTOCOL_V6.0 // RESTRICTED",
        protocolSub: "Beyond the Ordinary: The Digital King System from BOTDONE",
        protocolTitle: "NEURAL VAULT PROTOCOL",
        protocolDesc: "After years of studying <b>Market Structure</b> and liquidity behavior, we at BOTDONE have reached a definitive conclusion: successful trading is not about 'prediction', it is about 'filtration'. Today's markets are governed by institutional algorithms that generate excessive noise, making it nearly impossible for the human eye or standard indicators to penetrate.",
        protocolIntro: "HYBRID_ENGINE_DUMP: Time-isolation logic active. Renko-N mapping functional. Liquidity void detection at 98.4% precision.",
        hftContext: "Our HFT-resistant architecture filters out institutionally-engineered noise, revealing the raw footprint of market makers.",
        hftContextTitle: "ALGORITHMIC_SOVEREIGNTY",
        vaultDef: "TECHNICAL_DIRECTIVE: Access to this protocol is strictly restricted to partners with a minimum of 5 years in quantitative development or institutional trading.",
        pillar1Title: "RENKO_PURE_LOGIC",
        pillar1Desc: "Complete removal of time distortion. We execute on price velocity alone, ensuring that zero volume periods do not corrupt the algorithmic signal.",
        pillar2Title: "NEURAL_INTELLIGENCE",
        pillar2Desc: "Deep-learning models trained on 15 years of institutional liquidity cycles. The system identifies 'Market Voids' before they are visible to traditional indicators.",
        partnershipTitle: "STRATEGIC ADMISSION",
        partnershipDesc: "We do not sell tools. We build technical alliances. The Neural Vault is the result of thousands of hours of quant engineering for the highest tiers of market competition.",
        warningDesc: "SYSTEM_REJECTION_NOTICE: If your objective is quick profit without technical comprehension, your application will be automatically terminated by the screening protocol.",
        logic1Title: "LIQUIDITY_DISPLACEMENT",
        logic1Desc: "Real-time mapping of institutional buy/sell imbalances across 8 major liquidity providers.",
        logic2Title: "TEMPORAL_CONVERGENCE",
        logic2Desc: "Alignment of HFT frequency patterns with macro-level trend exhaustion metrics.",
        logic3Title: "VECTOR_EXECUTION",
        logic3Desc: "Precision entry logic with a dynamic spread-protection filter for High-Volatility environments.",
        applyNow: "REQUEST_ACCESS_PROTOCOL",
        modalTitle: "ADMISSION_DIRECTIVE",
        modalName: "FULL_NAME",
        modalEmail: "EMAIL_ENDPOINT",
        modalRole: "PROFESSIONAL_STATUS",
        modalRoleDev: "QUANT_DEVELOPER",
        modalRoleTrader: "EXECUTIVE_VETERAN",
        modalMessage: "TECHNICAL_DIRECTIVE / MESSAGE",
        modalSubmit: "SUBMIT_PROTOCOL",
        modalSuccess: "Your request has been received. Communication will be established after processing.",
        featTitle: "CORE_CAPABILITIES",
        feat1Title: "QUANT_ENGINEERING",
        feat1Desc: "Custom algorithmic development using advanced mathematical models for institutional-grade execution.",
        feat2Title: "ECOSYSTEM_INTEGRATION",
        feat2Desc: "Seamless connectivity between data providers, execution engines, and risk management modules.",
        feat3Title: "FLOW_ANALYSIS",
        feat3Desc: "Real-time tracking of institutional liquidity voids and order block displacement.",
        workTitle: "TECHNICAL_WORKFLOW",
        work1: "RESEARCH",
        work1Desc: "Identifying market inefficiencies via cross-asset data mining.",
        work2: "DEVELOPMENT",
        work2Desc: "Translating logic into high-frequency execution code.",
        work3: "BACKTESTING",
        work3Desc: "Simulating behavior against 10+ years of historical liquidity.",
        work4: "DEPLOYMENT",
        work4Desc: "Live execution on secured institutional servers.",
        visionTitle: "COMMUNITY_MISSION",
        visionDesc: "Our goal is simple: To eliminate the barrier between professional tools and the retail trader. Every article we write and every tool we build is designed to solve a real-world trading problem—distributed for free. Knowledge is our primary currency.",
        resTitle: "OPEN_RESOURCE_ECOLOGY",
        resLibTitle: "MASSIVE_ALGO_LIBRARY",
        resLibDesc: "Access a vast collection of technical tools, tailored for MT4/MT5, designed to solve complex execution problems.",
        resBlogTitle: "QUANT_LOGS & SOLUTIONS",
        resBlogDesc: "In-depth articles tackling every challenge a modern trader faces, from liquidity analysis to psychological bias.",
        resFreeTitle: "COMMUNITY_FIRST_PHILOSOPHY",
        resFreeDesc: "Everything in our public repository is 100% free. We believe in empowering the technical community without financial barriers.",
        faqTitle: "CORE_INTELLIGENCE // FAQ",
        faqQ1: "Why is BOTDONE offering professional tools for free?",
        faqA1: "Our primary mission is to democratize high-frequency technology. By building a strong community of educated traders, we create a technical ecosystem that benefits everyone through collective feedback and data.",
        faqQ2: "Is the library updated for currently evolving markets?",
        faqA2: "Yes. All open-source assets in our repository are built with adaptive logic. We regularly push updates and technical logs to address changes in institutional liquidity and market structure.",
        faqQ3: "Do I need advanced coding knowledge to use the library?",
        faqA3: "No. While the logic is complex, the integration is user-friendly. We provide step-by-step documentation for every tool to ensure traders can deploy them without writing a single line of code.",
        faqQ4: "Are these tools compatible with all major platforms (MT4/MT5)?",
        faqA4: "Most of our algorithms are specifically engineered for Metatrader 4 and 5, with specialized modules for institutional-grade execution environments.",
        faqQ5: "How can I join the BOTDONE technical elite?",
        faqA5: "Access the NEURAL VAULT protocol for high-tier partnerships, or start by exploring our free library and engaging with our technical articles.",
        blogPageTitle: "Development Logs & Technical Articles",
        footerAboutTitle: "ABOUT BOTDONE",
        footerAboutText: "A premier engineering collective dedicated to the development of high-frequency algorithmic solutions and pure mathematical trading frameworks.",
        footerDisclaimerTitle: "RISK DISCLAIMER",
        footerDisclaimerText: "Trading involves significant risk. Our systems are technical tools and do not constitute financial advice. Past performance is never indicative of future results.",
        footerLinksTitle: "QUICK NAVIGATION",
        footerContactTitle: "CONNECT",
        footerRights: "ALL RIGHTS RESERVED // SECURE_NODE_6.0"
    },
    ar: {
        navHome: "الرئيسية",
        navKing: "NEURAL VAULT",
        navLibrary: "المكتبة التقنية",
        navBlog: "المدونة",
        navAdmin: "لوحة التحكم",
        market: "السوق:",
        day: "اليوم:",
        admin: "VIP",
        heroTitle: "BOTDONE <br><span class='text-blue-500'>بيئة الموارد المفتوحة</span>",
        heroDesc: "مجتمع سيادي بُني للمتداولين. نحن نوفر مكتبات خوارزمية ضخمة، سجلات تقنية، وحلولاً رفيعة المستوى للمجتمع — مجاناً 100%. انضم إلى النخبة وتجاوز تعقيدات السوق بالمنطق الصرف.",
        heroSub: "محرك_نيورال_V6.0 // جوهر_المجتمع_مفعل",
        ctaKing: "دخول الفولت",
        ctaLibrary: "المكتبة التقنية المجانية",
        kingSysCore: "// NEURAL VAULT: محرك التداول الهجين",
        authLevel: "مستوى_الأمان: شريك تكنولوجي",
        recruitmentLabel: "بروتوكول_الاستقطاب_V6.0 // مشفّر",
        protocolSub: "خارج حدود المألوف: نظام الملك الرقمي من BOTDONE",
        protocolTitle: "بروتوكول NEURAL VAULT",
        protocolDesc: "بعد سنوات من دراسة <b>هيكلية السوق (Market Structure)</b> وسلوك السيولة، توصلنا في BOTDONE إلى حقيقة واحدة: التداول الناجح ليس 'توقعاً' بل هو 'فلترة'. الأسواق اليوم محكومة بخوارزميات بنكية تخلق ضجيجاً كبيراً لا يمكن للعين البشرية أو المؤشرات العادية تجاوزه.",
        protocolIntro: "تفصيل المحرك الهجين: منطق عزل الزمن مفعل. خرائط Renko-N وظيفية. دقة رصد فجوات السيولة تصل إلى 98.4%.",
        hftContext: "هيكليتنا المقاومة لخوارزميات التردد العالي تقوم بتصفية الضجيج المؤسساتي، مما يكشف الأثر الحقيقي لصناع السوق.",
        hftContextTitle: "السيادة الخوارزمية",
        vaultDef: "توجيه تقني: الوصول إلى هذا البروتوكول مقيد بصرامة للشركاء الذين يمتلكون خبرة لا تقل عن 5 سنوات في التطوير الكمي أو التداول المؤسساتي.",
        pillar1Title: "منطق الرينكو النقي",
        pillar1Desc: "إزالة كاملة لتشويه الزمن. نحن ننفذ بناءً على سرعة السعر وحدها، مما يضمن أن فترات انعدام السيولة لا تؤثر على الإشارة الخوارزمية.",
        pillar2Title: "الذكاء العصبي الهجين",
        pillar2Desc: "نماذج تعلم عميق مدربة على 15 عاماً من دورات السيولة المؤسساتية. النظام يحدد 'فراغات السوق' قبل ظهورها في المؤشرات التقليدية.",
        partnershipTitle: "القبول الاستراتيجي",
        partnershipDesc: "نحن لا نبيع أدوات، بل نبني تحالفات تقنية. NEURAL VAULT هو حصيلة آلاف الساعات من الهندسة الكمية لأعلى مستويات المنافسة في السوق.",
        warningDesc: "إشعار رفض النظام: إذا كان هدفك هو الربح السريع دون فهم تقني، سيتم رفض طلبك تلقائياً بواسطة بروتوكول الفرز.",
        logic1Title: "إزاحة السيولة",
        logic1Desc: "رسم خرائط لحظية لعدم التوازن بين البيع والشراء عبر 8 من كبار مزودي السيولة.",
        logic2Title: "الالتقاء الزمني",
        logic2Desc: "محاذاة أنماط ترددات الـ HFT مع مقاييس استنفاد الاتجاه على المستوى الكلي.",
        logic3Title: "تنفيذ الناقل",
        logic3Desc: "منطق دخول دقيق مع فلتر ديناميكي للحماية من السبريد في بيئات التذبذب العالي.",
        applyNow: "طلب بروتوكول الوصول",
        modalTitle: "طلب انضمام للنخبة",
        modalName: "الاسم الكامل",
        modalEmail: "البريد الإلكتروني",
        modalRole: "الصفة المهنية",
        modalRoleDev: "مطور خوارزميات (Quant)",
        modalRoleTrader: "متداول خبير / مؤسساتي",
        modalMessage: "الرسالة التقنية / التوجيه",
        modalSubmit: "إرسال البروتوكول",
        modalSuccess: "سيتم الرد عليك بعد معالجة طلبك",
        featTitle: "القدرات الأساسية",
        feat1Title: "الهندسة الكمية",
        feat1Desc: "تطوير خوارزميات مخصصة باستخدام نماذج رياضية متقدمة للتنفيذ بمستوى مؤسساتي.",
        feat2Title: "تكامل الأنظمة",
        feat2Desc: "اتصال سلس بين مزودي البيانات، محركات التنفيذ، ووحدات إدارة المخاطر.",
        feat3Title: "تحليل السيولة",
        feat3Desc: "تتبع لحظي لفجوات السيولة المؤسساتية وإزاحة كتل الأوامر (Order Blocks).",
        workTitle: "سير العمل التقني",
        work1: "البحث",
        work1Desc: "تحديد أوجه القصور في السوق عبر التنقيب في بيانات الأصول المتعددة.",
        work2: "التطوير",
        work2Desc: "تحويل المنطق الرياضي إلى كود تنفيذ عالي التردد.",
        work3: "الاختبار",
        work3Desc: "محاكاة السلوك مقابل أكثر من 10 سنوات من بيانات السيولة التاريخية.",
        work4: "التنفيذ",
        work4Desc: "التشغيل المباشر على خوادم مؤسساتية مؤمنة بالكامل.",
        visionTitle: "مهمة المجتمع",
        visionDesc: "هدفنا بسيط: إزالة الحاجز بين الأدوات الاحترافية والمتداول العادي. كل مقال نكتبه وكل أداة نبنيها مصممة لحل مشكلة حقيقية في التداول — ويتم توزيعها مجاناً. المعرفة هي عملتنا الأساسية.",
        resTitle: "بيئة الموارد المفتوحة",
        resLibTitle: "مكتبة خوارزميات ضخمة",
        resLibDesc: "وصول إلى مجموعة واسعة من الأدوات التقنية المصممة خصيصاً لـ MT4/MT5 لحل مشاكل التنفيذ المعقدة.",
        resBlogTitle: "سجلات وبرمجيات وحلول",
        resBlogDesc: "مقالات متعمقة تعالج كل تحدٍ يواجه المتداول المعاصر، من تحليل السيولة إلى التحيزات النفسية.",
        resFreeTitle: "فلسفة المجتمع أولاً",
        resFreeDesc: "كل ما في مستودعنا العام مجاني 100%. نحن نؤمن بتمكين المجتمع التقني دون حواجز مالية.",
        faqTitle: "الأسئلة الشائعة // الاستخبارات المركزية",
        faqQ1: "لماذا توفر BOTDONE أدوات احترافية مجاناً؟",
        faqA1: "مهمتنا الأساسية هي جعل التكنولوجيا عالية التردد في متناول الجميع. من خلال بناء مجتمع قوي من المتداولين المثقفين تقنياً، نحن نخلق بيئة تستفيد من الملاحظات الجماعية لتطوير حلول أكثر قوة.",
        faqQ2: "هل المكتبة محدثة لمواكبة تقلبات السوق الحالية؟",
        faqA2: "نعم. كل الحلول في مستودعنا مبنية بمنطق تكيفي. نحن نقوم بتحديث الأدوات ونشر السجلات التقنية بانتظام لمواجهة التغيرات في السيولة المؤسساتية وهيكلية السوق.",
        faqQ3: "هل أحتاج لخبرة في البرمجة لاستخدام أدوات المكتبة؟",
        faqA3: "لا. رغم أن المنطق البرمجي معقد، إلا أن التنفيذ سهل الاستخدام. نوفر وثائق تعليمية خطوة بخطوة لكل أداة لضمان قدرتك على تشغيلها دون كتابة كود واحد.",
        faqQ4: "هل تتوافق هذه الأدوات مع جميع منصات التداول (MT4/MT5)؟",
        faqA4: "معظم خوارزمياتنا مصممة بدقة لمنصتي ميتاتريدر 4 و5، مع وحدات متمتخصصة لبيئات التنفيذ المؤسساتية عالية السرعة.",
        faqQ5: "كيف يمكنني الانضمام إلى نخبة BOTDONE التقنية؟",
        faqA5: "يمكنك طلب الوصول إلى بروتوكول NEURAL VAULT للشراكات المتقدمة، أو البدء باستكشاف المكتبة المجانية والتفاعل مع مقالاتنا التقنية.",
        blogPageTitle: "سجل التطوير & المقالات التقنية",
        footerAboutTitle: "عن BOTDONE",
        footerAboutText: "مجموعة هندسية رائدة مكرسة لتطوير الحلول الخوارزمية عالية التردد وأطر التداول القائمة على المنطق الرياضي الصرف.",
        footerDisclaimerTitle: "إخلاء مسؤولية",
        footerDisclaimerText: "ينطوي التداول على مخاطر كبيرة. أنظمتنا هي أدوات تقنية ولا تشكل نصيحة مالية. الأداء السابق لا يضمن النتائج المستقبلية أبداً.",
        footerLinksTitle: "روابط سريعة",
        footerContactTitle: "الاتصال",
        footerRights: "جميع الحقوق محفوظة // SECURE_NODE_6.0"
    }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'ar';

// --- DATA ACCESS LAYER ---



function getDB() {
    const hiddenState = localStorage.getItem(DB_KEY);
    const db = hiddenState ? JSON.parse(hiddenState) : { ...defaultData };

    // Ensure nested structures exist
    if (!db.global) db.global = { ...defaultData.global };
    if (!db.library) db.library = [...defaultData.library];
    if (!db.blog) db.blog = [...defaultData.blog];

    return db;
}

function saveDB(newData) {
    localStorage.setItem(DB_KEY, JSON.stringify(newData));
    console.log("DB SAVED LOCALLY");
}

// --- SUPABASE DATA LAYER (NON-BLOCKING WITH FALLBACK) ---

async function fetchSupabaseData() {
    const supabase = window.supabaseClient;

    if (!supabase) {
        console.warn('⚠ Supabase not available - using local storage only');
        return;
    }

    try {
        const { data: libData, error: libErr } = await supabase.from('library').select('*');
        const { data: blogData, error: blogErr } = await supabase.from('blogs').select('*');

        if (libErr) console.error('Library fetch error:', libErr);
        if (blogErr) console.error('Blog fetch error:', blogErr);

        const db = getDB();

        // Smart Fallback: Only use Supabase data if it's not empty
        if (libData && libData.length > 0) {
            db.library = libData;
        } else {
            console.log('📦 Using default library data (Supabase empty or failed)');
            // Keep existing defaultData
        }

        if (blogData && blogData.length > 0) {
            db.blog = blogData;
        } else {
            console.log('📝 Using default blog data (Supabase empty or failed)');
            // Keep existing defaultData
        }

        saveDB(db);
        console.log('✓ Data sync completed');
    } catch (e) {
        console.error('✗ Supabase sync failed:', e);
        console.log('⚠ Continuing with local/default data');
    }
}


function setLang(lang, flag, label) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();

    // Update display in dropdown
    const display = document.getElementById('current-lang-display');
    if (display) {
        const flag = lang === 'en' ? 'us' : 'sa';
        display.innerHTML = `<span class="text-[8px] opacity-70">${flag}</span> <span class="font-bold">${label}</span>`;
    }

    // Toggle RTL/LTR
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar' ? "'IBM Plex Sans Arabic', sans-serif" : "'Outfit', sans-serif";

    renderFrontend();
}

function applyTranslations() {
    const t = TRANSLATIONS[currentLang];
    if (!t) return console.error("Translations not found for:", currentLang);

    const setT = (id, key) => {
        const el = document.getElementById(id);
        if (el) {
            if (t[key] !== undefined) el.innerText = t[key];
            else console.warn(`Missing Translation Key: ${key}`);
        }
    };
    const setHtml = (id, key) => {
        const el = document.getElementById(id);
        if (el) {
            if (t[key] !== undefined) el.innerHTML = t[key];
            else console.warn(`Missing Translation Key: ${key}`);
        }
    };

    // Nav
    document.querySelectorAll('.nav-link').forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === 'home') link.innerText = t.navHome;
        if (page === 'sovereign') link.innerHTML = `${t.navKing} <i class="fas fa-crown text-[10px] ml-1 text-yellow-600"></i>`;
        if (page === 'library') link.innerText = t.navLibrary;
        if (page === 'blog') link.innerText = t.navBlog;
        if (page === 'admin') link.innerText = t.navAdmin;
    });

    // Market Header
    setT('market-label', 'market');
    setT('day-label', 'day');
    setT('login-btn', 'admin');

    // Page Specific Static Labels
    setHtml('hero-title', 'heroTitle');
    setT('hero-desc', 'heroDesc'); // Use setT if no HTML in desc, or setHtml
    setT('hero-sub', 'heroSub');
    setT('cta-king', 'navKing');
    setT('cta-library', 'ctaLibrary');

    // Home Sections
    setT('feat-title', 'featTitle');
    setT('feat-1-title', 'feat1Title');
    setT('feat-1-desc', 'feat1Desc');
    setT('feat-2-title', 'feat2Title');
    setT('feat-2-desc', 'feat2Desc');
    setT('feat-3-title', 'feat3Title');
    setT('feat-3-desc', 'feat3Desc');

    setT('work-title', 'workTitle');
    setT('work-1', 'work1');
    setT('work-1-desc', 'work1Desc');
    setT('work-2', 'work2');
    setT('work-2-desc', 'work2Desc');
    setT('work-3', 'work3');
    setT('work-3-desc', 'work3Desc');
    setT('work-4', 'work4');
    setT('work-4-desc', 'work4Desc');

    setT('vision-title', 'visionTitle');
    setT('vision-desc', 'visionDesc');

    setT('res-title', 'resTitle');
    setT('res-lib-title', 'resLibTitle');
    setT('res-lib-desc', 'resLibDesc');
    setT('res-blog-title', 'resBlogTitle');
    setT('res-blog-desc', 'resBlogDesc');
    setT('res-free-title', 'resFreeTitle');
    setT('res-free-desc', 'resFreeDesc');

    // FAQ Section
    setT('faq-title', 'faqTitle');
    setT('faq-q1', 'faqQ1');
    setT('faq-a1', 'faqA1');
    setT('faq-q2', 'faqQ2');
    setT('faq-a2', 'faqA2');
    setT('faq-q3', 'faqQ3');
    setT('faq-a3', 'faqA3');
    setT('faq-q4', 'faqQ4');
    setT('faq-a4', 'faqA4');
    setT('faq-q5', 'faqQ5');
    setT('faq-a5', 'faqA5');

    // New manifesto keys
    setT('protocol-sub', 'protocolSub');
    setT('king-title', 'protocolTitle');
    setHtml('king-desc', 'protocolDesc'); // Use HTML for bold tags if needed
    setT('king-intro', 'protocolIntro');
    setT('hft-context', 'hftContext');
    setT('hft-context-title', 'hftContextTitle');
    setT('vault-def', 'vaultDef');

    setT('pillar-1-title', 'pillar1Title');
    setT('pillar-1-desc', 'pillar1Desc');
    setT('pillar-2-title', 'pillar2Title');
    setT('pillar-2-desc', 'pillar2Desc');

    setT('logic-1-title', 'logic1Title');
    setT('logic-1-desc', 'logic1Desc');
    setT('logic-2-title', 'logic2Title');
    setT('logic-2-desc', 'logic2Desc');
    setT('logic-3-title', 'logic3Title');
    setT('logic-3-desc', 'logic3Desc');

    setT('partnership-title', 'partnershipTitle');
    setT('partnership-desc', 'partnershipDesc');

    setT('warning-desc', 'warningDesc');

    // Modal
    setT('modal-title', 'modalTitle');
    setT('modal-name-label', 'modalName');
    setT('modal-email-label', 'modalEmail');
    setT('modal-role-label', 'modalRole');
    setT('role-dev', 'modalRoleDev');
    setT('role-trader', 'modalRoleTrader');
    setT('modal-msg-label', 'modalMessage');
    setT('modal-submit', 'modalSubmit');

    // Add items for select options if they have IDs
    setT('role-dev', 'modalRoleDev');
    setT('role-trader', 'modalRoleTrader');

    // Blog Page
    setT('blog-page-title', 'blogPageTitle');

    // Footer
    setT('footer-about-title', 'footerAboutTitle');
    setT('footer-about-text', 'footerAboutText');
    setT('footer-disclaimer-title', 'footerDisclaimerTitle');
    setT('footer-disclaimer-text', 'footerDisclaimerText');
    setT('footer-links-title', 'footerLinksTitle');
    setT('footer-contact-title', 'footerContactTitle');
    setT('footer-rights', 'footerRights');
}

// --- RENDER LOGIC (FOR INDEX.HTML) ---

async function initApp() {
    applyTranslations();
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = currentLang === 'ar' ? "'IBM Plex Sans Arabic', sans-serif" : "'Outfit', sans-serif";

    // Set initial dropdown display
    const display = document.getElementById('current-lang-display');
    if (display) {
        const label = currentLang === 'en' ? 'English' : 'العربية';
        const flag = currentLang === 'en' ? 'us' : 'sa';
        display.innerHTML = `<span class="text-[8px] opacity-70">${flag}</span> <span class="font-bold">${label}</span>`;
    }

    if (document.getElementById('admin-root')) {
        initAdminPanel();
    } else {
        renderFrontend();
    }
    // Remove updateMarketStatus here if it's already called in initHeader?
    // Wait, initHeader calls updateGlobalTime which calls updateMarketStatus.
    // So explicit call here might be redundant but harmless.
    // But earlier I established initHeader runs on DOMContentLoaded.
    // initApp also runs on DOMContentLoaded.
    // It's safer to keep it or remove it?
    // User requested "only one interval".
    // initHeader sets interval.
    // I will remove updateMarketStatus() call here to avoid double-update on load conflict?
    // No, I'll leave it as is to minimize side effects, or check if updateMarketStatus is available.
    // Actually, initHeader handles everything.
    // But initApp might be legacy entry point.
    // The previous code had updateMarketStatus() call.
    // I will remove it if I trust initHeader. 
    // BUT initHeader listener was added at line 866.
    // initApp listener is added at line 1220.
    // They both run.
    // I previously unified logic in `initHeader`.
    // I will REMOVE `updateMarketStatus()` from `initApp` to rely on `initHeader`.

    // Non-blocking Supabase sync in background
    fetchSupabaseData().then(() => {
        // Re-render after data loads
        if (!document.getElementById('admin-root')) {
            renderFrontend();
        }
    });
}

function renderFrontend() {
    const db = getDB();
    const setHtml = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

    // REMOVED: Hero Title and Desc are now handled by applyTranslations for better localization
    // REMOVED: King Title and Desc are now handled by applyTranslations for better localization

    const libGrid = document.getElementById('library-grid');
    if (libGrid && db.library) {
        libGrid.innerHTML = db.library.map(item => `
            <div onclick="openItemLanding(${item.id})" class="tech-panel p-0 overflow-hidden hover:border-blue-500 cursor-pointer transition group flex flex-col">
                <div class="h-32 bg-gray-900 overflow-hidden relative border-b border-gray-800">
                     <img src="${item.img || 'https://placehold.co/600x400/101010/gray?text=NO+IMG'}" 
                          class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500">
                     <div class="absolute top-2 right-2 bg-black/80 px-2 py-1 text-[9px] mono text-blue-400 border border-blue-900/30">
                        ${item.platform || 'GENERIC'}
                     </div>
                </div>
                <div class="p-5 flex flex-col flex-1">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-white italic group-hover:text-blue-400">${item.name}</h3>
                    </div>
                    <p class="text-xs text-dim leading-relaxed mb-4 flex-1 line-clamp-2">${item.desc}</p>
                    <div class="flex justify-between items-center mt-4 border-t border-gray-700 pt-3">
                        <span class="mono text-[9px] text-gray-500">ID: ${item.id.toString().substr(-4)}</span>
                        <i class="fas fa-arrow-right text-gray-400 group-hover:text-white transition"></i>
                    </div>
                </div>
            </div>
        `).join('');
    }

    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid && db.blog) {
        const posts = db.blog.filter(p => !p.status || p.status === 'PUBLISHED');
        blogGrid.innerHTML = posts.map(post => `
             <div onclick="openBlogPost(${post.id})" class="tech-panel group cursor-pointer overflow-hidden border border-transparent hover:border-gray-700 transition-all duration-300">
                <div class="aspect-video bg-black/50 border-b border-mt4-border relative overflow-hidden">
                    <img src="${post.img || 'https://placehold.co/800x400/080808/333?text=NO+IMAGE'}" alt="Blog Thumb"
                        class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-500">
                    <div class="absolute top-2 right-2 bg-black/80 text-[#00FF41] text-[9px] px-2 py-1 rounded mono border border-[#00FF41]/30">LOG</div>
                </div>
                <div class="p-5">
                    <span class="text-[10px] text-gray-500 block mb-2 mono">${post.date}</span>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition leading-snug">${post.title}</h3>
                    <p class="text-xs text-dim leading-relaxed mb-4 line-clamp-2">${post.subtitle || ''}</p>
                    <span class="text-blue-500 text-[10px] font-bold flex items-center gap-2 group-hover:translate-x-1 transition">
                        OPEN_LOG <i class="fas fa-arrow-right text-[9px]"></i>
                    </span>
                </div>
            </div>
        `).join('');
    }
}

function openItemLanding(id) {
    const db = getDB();
    const item = db.library.find(i => i.id === id);
    if (!item) return;
    const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    setAttr('landing-img', 'src', item.img || 'https://placehold.co/1200x600/101010/gray?text=NO+IMG');
    setTxt('landing-title', item.name);
    setTxt('landing-desc', item.desc);
    setTxt('landing-platform', item.platform || 'GENERIC');
    setAttr('landing-dl', 'href', item.link);
    showPage('item');
}

function openBlogPost(id) {
    const db = getDB();
    const post = db.blog.find(p => p.id === id);
    if (!post) return;
    const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    setAttr('post-img', 'src', post.img || 'https://placehold.co/1200x600/080808/333?text=REPORT_VISUAL');
    setTxt('post-title', post.title);
    setTxt('post-date', post.date);
    const subEl = document.getElementById('post-subtitle');
    if (subEl) {
        subEl.innerText = post.subtitle || '';
        subEl.style.display = post.subtitle ? 'block' : 'none';
    }
    const formattedContent = post.content.replace(/\n/g, '<br>');
    document.getElementById('post-content').innerHTML = formattedContent;
    showPage('blog-post');
}

// --- ADMIN LOGIC ---

function initAdminPanel() {
    const db = getDB();
    renderAdminGlobalInputs(db);
    renderAdminLibraryTable(db);
    renderAdminBlogTable(db);
}

function renderAdminGlobalInputs(db) {
    document.getElementById('in-hero-title').value = db.global.heroTitle;
    document.getElementById('in-hero-desc').value = db.global.heroDesc;
    document.getElementById('in-king-title').value = db.global.kingTitle;
    document.getElementById('in-king-desc').value = db.global.kingDesc;
}

function renderAdminLibraryTable(db) {
    const tbody = document.getElementById('lib-table-body');
    if (!tbody) return;
    tbody.innerHTML = db.library.map((item, index) => `
        <tr class="border-b border-gray-800 hover:bg-white/5">
            <td class="p-3 font-mono text-xs text-dim">${item.id}</td>
            <td class="p-3 font-bold text-white">
                <div class="flex items-center gap-2">
                    <img src="${item.img || ''}" class="w-6 h-6 object-cover rounded bg-gray-800">
                    ${item.name}
                </div>
            </td>
            <td class="p-3 text-xs text-blue-400">${item.platform}</td>
            <td class="p-3 text-right">
                <button onclick="deleteLibItem(${index})" class="text-red-500 hover:text-red-300 text-xs font-bold">[DEL]</button>
            </td>
        </tr>
    `).join('');
}

function renderAdminBlogTable(db) {
    const tbody = document.getElementById('blog-table-body');
    if (!tbody) return;
    tbody.innerHTML = db.blog.map((item, index) => `
        <tr class="border-b border-gray-800 hover:bg-white/5">
            <td class="p-3 font-mono text-xs text-dim">${item.date}</td>
            <td class="p-3 font-bold text-white">${item.title}</td>
            <td class="p-3 text-right">
                <button onclick="deleteBlogItem(${index})" class="text-red-500 hover:text-red-300 text-xs font-bold">[DEL]</button>
            </td>
        </tr>
    `).join('');
}

function adminSaveGlobal() {
    const db = getDB();
    db.global.heroTitle = document.getElementById('in-hero-title').value;
    db.global.heroDesc = document.getElementById('in-hero-desc').value;
    db.global.kingTitle = document.getElementById('in-king-title').value;
    db.global.kingDesc = document.getElementById('in-king-desc').value;
    saveDB(db);
}

async function adminAddLibItem() {
    const name = document.getElementById('add-lib-name').value;
    const platform = document.getElementById('add-lib-platform').value;
    const desc = document.getElementById('add-lib-desc').value;
    const link = document.getElementById('add-lib-link').value;
    const img = document.getElementById('add-lib-img').value;
    if (!name || !desc) return alert("MISSING DATA");

    const newItem = { name, platform, desc, link, img };
    const supabase = window.supabaseClient;

    // Try Supabase first
    if (supabase) {
        const { data, error } = await supabase.from('library').insert([newItem]).select();
        if (error) {
            console.error('Supabase Error:', error);
            alert("⚠ DB ERROR: " + error.message + "\nSaving locally instead.");
        } else {
            console.log('✓ Item saved to Supabase');
        }
    }

    // Always update local storage as backup
    const db = getDB();
    const itemWithId = { id: Date.now(), ...newItem };
    db.library.push(itemWithId);
    saveDB(db);

    // Refresh data and UI
    await fetchSupabaseData();
    renderAdminLibraryTable(getDB());
    alert("✓ ITEM ADDED");
}

async function adminAddBlogItem() {
    const title = document.getElementById('add-blog-title').value;
    const content = document.getElementById('add-blog-content').value;
    const category = document.getElementById('add-blog-cat').value;
    const read_time = document.getElementById('add-blog-time').value;

    if (!title || !content) return alert("❌ MISSING DATA: Title and Content are required");

    // Prepare data object with EXACT field names matching Supabase table
    const supabaseData = {
        title: title,
        content: content,
        category: category || 'LOGIC',
        read_time: read_time || '5 MIN'
    };

    const supabase = window.supabaseClient;

    console.log('📤 Attempting to send data to Supabase:', supabaseData);

    // Try Supabase first
    if (supabase) {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .insert([supabaseData])
                .select();

            if (error) {
                console.error('❌ Supabase Error Details:', error);
                alert("❌ DB ERROR: " + error.message + "\n\nDetails: " + JSON.stringify(error));
                return;
            } else {
                console.log('✅ SUCCESS: Data sent to Supabase!', data);
                alert("✅ SUCCESS: Blog post saved to Supabase!");
            }
        } catch (e) {
            console.error('❌ Exception during Supabase insert:', e);
            alert("❌ ERROR: " + e.message);
            return;
        }
    } else {
        console.warn('⚠️ Supabase client not available');
        alert("⚠️ Supabase not connected - saving locally only");
    }

    // Also save to local storage as backup
    const db = getDB();
    const localItem = {
        id: Date.now(),
        title,
        content,
        category: category || 'LOGIC',
        read_time: read_time || '5 MIN',
        date: new Date().toISOString().split('T')[0]
    };
    db.blog.push(localItem);
    saveDB(db);

    // Refresh data and UI
    await fetchSupabaseData();
    renderAdminBlogTable(getDB());
}

async function deleteLibItem(index) {
    if (!confirm("CONFIRM DELETE?")) return;
    const db = getDB();
    const item = db.library[index];
    const supabase = window.supabaseClient;

    // Try Supabase first
    if (supabase && item.id) {
        const { error } = await supabase.from('library').delete().eq('id', item.id);
        if (error) {
            console.error('Delete error:', error);
            alert("⚠ DB DELETE ERROR: " + error.message);
        } else {
            console.log('✓ Item deleted from Supabase');
        }
    }

    // Always update local storage
    db.library.splice(index, 1);
    saveDB(db);

    // Refresh data and UI
    await fetchSupabaseData();
    renderAdminLibraryTable(getDB());
}

async function deleteBlogItem(index) {
    if (!confirm("CONFIRM DELETE?")) return;
    const db = getDB();
    const item = db.blog[index];
    const supabase = window.supabaseClient;

    // Try Supabase first
    if (supabase && item.id) {
        const { error } = await supabase.from('blogs').delete().eq('id', item.id);
        if (error) {
            console.error('Delete error:', error);
            alert("⚠ DB DELETE ERROR: " + error.message);
        } else {
            console.log('✓ Blog deleted from Supabase');
        }
    }

    // Always update local storage
    db.blog.splice(index, 1);
    saveDB(db);

    // Refresh data and UI
    await fetchSupabaseData();
    renderAdminBlogTable(getDB());
}

function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId + '-page');
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('data-page') === pageId) l.classList.add('active');
    });
}

// ============================================================
// SYSTEM TIME CONTROL (Global State V2)
// ============================================================
let sysTimeMode = 'AUTO';      // 'AUTO' | 'MANUAL'
let sysManualOffsetMs = 0;     // Milliseconds (changed from sysManualOffset)
let sysMarketMode = 'AUTO';    // 'AUTO' | 'MANUAL'
let sysActiveSession = 'NONE'; // 'SYD', 'TKY', 'LDN', 'NYK', 'NONE'

// Fetch initial settings
async function initTimeSettings() {
    const supabase = window.supabaseClient;
    if (!supabase) return;

    try {
        console.log('🔌 Connecting to Supabase site_settings...');
        const { data, error } = await supabase
            .from('site_settings')
            .select('*')
            .limit(1)
            .single();

        if (error) {
            console.error('❌ Supabase Fetch Error:', error);
            // Default to Auto if error
            return;
        }

        if (data) {
            console.log('🔍 RAW SETTINGS RECEIVED:', data);

            sysTimeMode = data.time_mode || 'AUTO';
            sysManualOffsetMs = parseInt(data.manual_offset) || 0;
            sysMarketMode = data.market_mode || 'AUTO';
            sysActiveSession = data.active_session || 'NONE';

            console.log('✅ Applied V2 Config:', {
                sysTimeMode,
                sysManualOffsetMs,
                sysMarketMode,
                sysActiveSession
            });

            // Should also update Admin UI if present
            updateAdminTimeUI();
        } else {
            console.warn('⚠️ No data found in site_settings (row missing?)');
        }

        // Start Realtime Subscription
        setupTimeSubscription();

    } catch (e) {
        console.warn('🔥 EXCEPTION in initTimeSettings:', e);
    }
}

// Realtime Subscription
function setupTimeSubscription() {
    const supabase = window.supabaseClient;
    if (!supabase) return;

    supabase
        .channel('public:site_settings')
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'site_settings' }, payload => {
            console.log('⚡ V2 Settings Updated:', payload.new);
            sysTimeMode = payload.new.time_mode;
            sysManualOffsetMs = parseInt(payload.new.manual_offset) || 0;
            sysMarketMode = payload.new.market_mode || 'AUTO';
            sysActiveSession = payload.new.active_session || 'NONE';

            // Force immediate update
            updateGlobalTime();
            updateAdminTimeUI();
        })
        .subscribe();
}

// Update Admin UI
function updateAdminTimeUI() {
    if (!document.getElementById('sys-time-mode')) return;

    // Set Values
    document.getElementById('sys-time-mode').value = sysTimeMode;
    document.getElementById('sys-market-mode').value = sysMarketMode;
    document.getElementById('sys-active-session').value = sysActiveSession;

    // Toggle Groups
    toggleTimeInputs();
    toggleMarketInputs();

    // Badge
    const badge = document.getElementById('sys-status-badge');
    if (badge) {
        if (sysTimeMode === 'MANUAL' || sysMarketMode === 'MANUAL') {
            badge.innerText = 'SYSTEM: MANUAL OVERRIDE';
            badge.className = 'px-3 py-1 bg-green-900/30 text-green-500 text-xs mono border border-green-900 rounded';
        } else {
            badge.innerText = 'SYSTEM: AUTO';
            badge.className = 'px-3 py-1 bg-green-900/30 text-green-500 text-xs mono border border-green-900 rounded';
        }
    }
}

// UI Toggles
function toggleTimeInputs() {
    const mode = document.getElementById('sys-time-mode').value;
    const group = document.getElementById('manual-time-group');
    if (group) {
        if (mode === 'MANUAL') {
            group.classList.remove('opacity-50', 'pointer-events-none');
        } else {
            group.classList.add('opacity-50', 'pointer-events-none');
            // Clear inputs for clarity? optional.
        }
    }
}

function toggleMarketInputs() {
    const mode = document.getElementById('sys-market-mode').value;
    const group = document.getElementById('manual-market-group');
    if (group) {
        if (mode === 'MANUAL') group.classList.remove('opacity-50', 'pointer-events-none');
        else group.classList.add('opacity-50', 'pointer-events-none');
    }
}

// Master Save Function
async function adminSaveMasterSettings() {
    const supabase = window.supabaseClient;
    if (!supabase) return alert('Supabase not connected');

    const timeMode = document.getElementById('sys-time-mode').value;
    const marketMode = document.getElementById('sys-market-mode').value;
    const activeSession = document.getElementById('sys-active-session').value;

    // Calculate Offset (Ms)
    let newOffset = sysManualOffsetMs;

    if (timeMode === 'MANUAL') {
        const h = parseInt(document.getElementById('in-time-h').value);
        const m = parseInt(document.getElementById('in-time-m').value);
        const s = parseInt(document.getElementById('in-time-s').value);

        if (!isNaN(h) && !isNaN(m) && !isNaN(s)) {
            // Target Time for Today
            const targetDate = new Date();
            targetDate.setUTCHours(h, m, s, 0);

            const currentReal = new Date(); // Real time now

            // Diff = Target - Real
            newOffset = targetDate.getTime() - currentReal.getTime();
            console.log("Calculated Offset (ms):", newOffset);
        } else {
            // If empty, keep existing offset or warn? 
            // We'll assume if they didn't touch it, they meant to keep it? 
            // Or better, if inputs are empty, don't update offset.
        }
    } else {
        newOffset = 0; // Reset offset if Auto
    }

    try {
        const { error } = await supabase
            .from('site_settings')
            .update({
                time_mode: timeMode,
                manual_offset: newOffset,
                market_mode: marketMode,
                active_session: activeSession
            })
            .eq('id', 1);

        if (error) throw error;

        alert('✅ MASTER CONFIG APPLIED');

    } catch (e) {
        console.error(e);
        alert('❌ Error: ' + e.message);
    }
}

// ============================================================
// HEADER LOGIC: CLOCK & MARKET (Unified)
// ============================================================

const MARKETS = [
    { name: 'SYD', open: 22, close: 7 },
    { name: 'TKY', open: 0, close: 9 },
    { name: 'LDN', open: 8, close: 17 },
    { name: 'NYK', open: 13, close: 22 }
];

function initHeader() {
    // 0. Load Time Settings
    initTimeSettings();

    // 1. Initial Render
    const sessionsElem = document.getElementById('market-sessions');
    if (sessionsElem) {
        sessionsElem.innerHTML = MARKETS.map(m =>
            `<div id="market-${m.name}" class="session-tag session-closed">${m.name}</div>`
        ).join('');
    }

    // 2. Start Single Loop
    setInterval(updateGlobalTime, 1000);
    updateGlobalTime(); // Run immediately
}

function updateGlobalTime() {
    const timeEl = document.getElementById('live-time');
    const dayElem = document.getElementById('current-day');

    // --- MASTER TIME CONTROL LOGIC ---
    let now = new Date();

    if (sysTimeMode === 'MANUAL') {
        // Shift time by offset (Hours -> MS)
        now = new Date(now.getTime() + (sysManualOffset * 60 * 60 * 1000));
    }

    const h = now.getUTCHours();
    const m = now.getUTCMinutes();
    const s = now.getUTCSeconds();
    const day = now.getUTCDay(); // 0=Sun, 6=Sat

    // 1. Update Clock
    const timeString = `${pad(h)}:${pad(m)}:${pad(s)} UTC`;
    if (timeEl) timeEl.innerText = timeString;

    // 2. Update Day
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    if (dayElem) dayElem.innerText = days[day];

    // 3. Update Market
    updateMarketStatus(h, day);
}

function updateMarketStatus(utcHour, utcDay) {
    const statusLabel = document.getElementById('market-label-tag');

    // Weekend Logic (Forex: Closed Fri 22:00 -> Sun 22:00)
    let isWeekend = false;
    if (utcDay === 6) isWeekend = true; // Saturday
    if (utcDay === 0 && utcHour < 22) isWeekend = true; // Sunday morning
    if (utcDay === 5 && utcHour >= 22) isWeekend = true; // Friday night

    let globalStatus = isWeekend ? 'CLOSED' : 'OPEN';
    let globalClass = isWeekend ? 'session-closed' : 'session-open';
    let labelText = isWeekend ? 'WEEKEND' : 'OPEN';

    if (statusLabel) {
        statusLabel.innerText = labelText;
        statusLabel.className = `session-tag ${globalClass}`;
    }

    // Update Arrays
    MARKETS.forEach(m => {
        const el = document.getElementById(`market-${m.name}`);
        if (!el) return;

        let isOpen = false;

        if (isWeekend) {
            isOpen = false;
        } else {
            // Normal Hours Logic
            if (m.open < m.close) {
                isOpen = (utcHour >= m.open && utcHour < m.close);
            } else {
                isOpen = (utcHour >= m.open || utcHour < m.close);
            }
        }

        // Update Class
        const cls = isOpen ? 'session-tag session-open' : 'session-tag session-closed';
        if (el.className !== cls) el.className = cls;
    });
}

function pad(n) { return n.toString().padStart(2, '0'); }

// Init
document.addEventListener('DOMContentLoaded', initHeader);











function toggleLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

async function attemptLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-code').value;

    if (!email || !password) {
        alert("❌ Please enter both email and password");
        return;
    }

    const supabase = window.supabaseClient;

    if (!supabase) {
        alert("❌ ERROR: Supabase not connected. Cannot authenticate.");
        return;
    }

    try {
        console.log('🔐 Attempting login with Supabase Auth...');

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            console.error('❌ Login failed:', error);
            alert("❌ ACCESS DENIED\n\n" + error.message);
            return;
        }

        if (data.user) {
            console.log('✅ Login successful!', data.user);
            alert("✅ ACCESS GRANTED // WELCOME ADMIN");

            // Store session info
            localStorage.setItem('admin_session', JSON.stringify({
                user: data.user.email,
                timestamp: Date.now()
            }));

            // Redirect to admin panel
            window.location.href = 'admin.html';
        } else {
            alert("❌ ACCESS DENIED // Invalid credentials");
        }

    } catch (e) {
        console.error('❌ Exception during login:', e);
        alert("❌ ERROR: " + e.message);
    }
}

function toggleLangMenu() {
    const menu = document.getElementById('lang-menu');
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

// Admission Form with Telegram Integration
async function submitAdmissionForm(e) {
    e.preventDefault();

    const btn = document.getElementById('modal-submit');
    const originalText = btn.innerText;

    // Get form data
    const name = document.getElementById('adm-name').value;
    const email = document.getElementById('adm-email').value;
    const role = document.getElementById('adm-role').value;
    const message = document.getElementById('adm-msg').value;

    // Update button state
    btn.innerText = currentLang === 'ar' ? 'جاري الإرسال...' : 'SENDING...';
    btn.disabled = true;

    // Telegram Bot Configuration
    const TELEGRAM_BOT_TOKEN = '8345947823:AAHdiB50yk6JXtXwbJ4KxWK05YzILUesbv8';
    const TELEGRAM_CHAT_ID = '1076847339';

    // Format message for Telegram
    const roleText = role === 'dev' ? 'QUANT_DEVELOPER' : 'EXECUTIVE_VETERAN';
    const telegramMessage = `🚀 BotDone: New Inquiry!

👤 Name: ${name}
📧 Email: ${email}
🎯 Role: ${roleText}
📝 Message:
${message}`;

    try {
        // Send to Telegram
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const result = await response.json();

        if (result.ok) {
            // Success - Show toast instead of alert
            showToast('[SYSTEM]',
                currentLang === 'ar'
                    ? 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.'
                    : 'Message Transmitted Successfully',
                'success'
            );

            // Reset form
            document.getElementById('admission-form').reset();

            // Return to sovereign page after 4 seconds
            setTimeout(() => {
                showPage('sovereign');
            }, 4000);
        } else {
            throw new Error('Telegram API Error: ' + result.description);
        }

    } catch (error) {
        console.error('❌ Error sending to Telegram:', error);
        showToast('[ERROR]',
            currentLang === 'ar'
                ? 'حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.'
                : 'Failed to send. Please try again.',
            'error'
        );
    } finally {
        // Restore button state
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

// Custom Toast Notification Functions
let toastTimeout;

function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    const toastTitle = toast.querySelector('.toast-title');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');

    // Update content
    toastTitle.textContent = title;
    toastMessage.textContent = message;

    // Update icon and style based on type
    if (type === 'error') {
        toast.classList.add('error');
        toastIcon.className = 'fas fa-exclamation-circle toast-icon';
    } else {
        toast.classList.remove('error');
        toastIcon.className = 'fas fa-check-circle toast-icon';
    }

    // Show toast
    toast.classList.add('show');

    // Clear existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    // Auto-hide after 4 seconds
    toastTimeout = setTimeout(() => {
        closeToast();
    }, 4000);
}

function closeToast() {
    const toast = document.getElementById('toast-notification');
    toast.classList.remove('show');

    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
}

// Initialize app on page load
document.addEventListener('DOMContentLoaded', initApp);



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
        console.log("📍 Visitor Country Detected:", visitorCountry);

        // Create presence channel
        visitorChannel = supabase.channel('online-visitors', {
            config: {
                presence: {
                    key: sessionId
                }
            }
        });

        // Track presence
        visitorChannel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                // User Request: user_id: 'anonymous'
                await visitorChannel.track({
                    user_id: 'anonymous',
                    country: visitorCountry,
                    online_at: new Date().toISOString(),
                    session_id: sessionId
                });
                console.log('✓ Visitor tracked:', visitorCountry);
            }
        });

        // Update presence every 30 seconds (heartbeat)
        setInterval(async () => {
            if (visitorChannel) {
                await visitorChannel.track({
                    user_id: 'anonymous',
                    country: visitorCountry,
                    online_at: new Date().toISOString(),
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
            // FIX: Always track even if country missing (fallback to Unknown)
            // Also ensure we don't duplicate session IDs if presence echoes
            const country = state.country || 'Unknown Location';
            visitors.push({
                country: country,
                session_id: state.session_id,
                online_at: state.online_at
            });
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
