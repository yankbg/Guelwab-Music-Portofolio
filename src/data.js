// ============================================================
//  data.js  —  PUT ALL YOUR REAL CONTENT HERE
//  Replace every placeholder with your actual files / URLs
// ============================================================

// ── HERO IMAGES (right-side grid, 3 slots) ──────────────────
// Tip: use portrait/vertical shots for best results
export const HERO_IMAGES = [
    {
        src: "../src/assets/gwhero1.jpeg",          // ← replace with your image path or URL
        alt: "Guelwab — performance scène",
    },
    {
        src: "../src/assets/gwhero2.jpeg",          // ← replace
        alt: "Guelwab — portrait studio",
    },
    {
        src: "../src/assets/gwhero3.jpeg",          // ← replace
        alt: "Guelwab — backstage",
    },
];

// ── STORY / ABOUT IMAGES (3 slots) ──────────────────────────
export const STORY_IMAGES = [
    {
        src: "../src/assets/gwabout2.jpeg",      // ← wide/landscape photo (spans 2 cols)
        alt: "Guelwab portrait",
    },
    {
        src: "../src/assets/gwabout2.jpeg",         // ← portrait photo
        alt: "Guelwab en concert",
    },
    {
        src: "../src/assets/gwabout1.jpeg",         // ← portrait photo
        alt: "Guelwab studio",
    },
];

// ── GALLERY ITEMS ────────────────────────────────────────────
// cat options: "live" | "studio" | "portrait" | "behind" | "life"
// height: controls the masonry card height in px (vary for visual interest)
export const GALLERY = [
    {
        id: 1,
        src: "/assets/hero.png",       // ← replace
        alt: "Scène Goma",
        label: "Scène · Goma",
        mood: "Performance",
        cat: "live",
        height: 340,
    },
    {
        id: 2,
        src: "/assets/hero.png",       // ← replace
        alt: "Studio Session",
        label: "Studio Session",
        mood: "Création",
        cat: "studio",
        height: 240,
    },
    {
        id: 3,
        src: "/assets/hero.png",       // ← replace
        alt: "Backstage",
        label: "Backstage",
        mood: "Coulisses",
        cat: "behind",
        height: 300,
    },
    {
        id: 4,
        src: "/assets/hero.png",       // ← replace
        alt: "Portrait",
        label: "Portrait",
        mood: "Portrait",
        cat: "portrait",
        height: 400,
    },
    {
        id: 5,
        src: "/assets/hero.png",       // ← replace
        alt: "Goma Sunrise",
        label: "Goma Sunrise",
        mood: "Vie",
        cat: "life",
        height: 260,
    },
    {
        id: 6,
        src: "/assets/hero.png",       // ← replace
        alt: "Concours 2024",
        label: "Concours 2024",
        mood: "Concours",
        cat: "live",
        height: 320,
    },
    {
        id: 7,
        src: "/assets/hero.png",       // ← replace
        alt: "Enregistrement",
        label: "Enregistrement",
        mood: "Studio",
        cat: "studio",
        height: 280,
    },
    {
        id: 8,
        src: "/assets/hero.png",       // ← replace
        alt: "Séance Photo",
        label: "Séance Photo",
        mood: "Portrait",
        cat: "portrait",
        height: 360,
    },
    {
        id: 9,
        src: "/assets/hero.png",       // ← replace
        alt: "Kinshasa Tour",
        label: "Kinshasa Tour",
        mood: "Tournée",
        cat: "life",
        height: 240,
    },
];

// ── VIDEOS ───────────────────────────────────────────────────
// Use either:
//   videoSrc  → a direct .mp4 file path  (autoplay on hover, no controls)
//   thumbSrc  → a poster/thumbnail image shown by default
//   youtubeId → a YouTube video ID (e.g. "dQw4w9WgXcQ") — opens in new tab
// big: true  → makes this card span 2 rows (use for your best video)
export const VIDEOS = [
    {
        id: 1,
        thumbSrc: "/images/video-thumb-1.jpg",  // ← replace
        videoSrc: null,                          // ← or "/videos/festival.mp4"
        youtubeId: null,            // ← replace or set null
        title: "Goma Live — Festival",
        meta: "Performance · 2024",
        dur: "14:32",
        big: true,
    },
    {
        id: 2,
        thumbSrc: "/assets/hero.png",  // ← replace
        videoSrc: null,
        youtubeId: null,           // ← replace or set null
        title: "Papillon d'Or — Clip Officiel",
        meta: "Clip officiel · 2024",
        dur: "3:58",
        big: false,
    },
    {
        id: 3,
        thumbSrc: "/assets/hero.png",  // ← replace
        videoSrc: null,
        youtubeId: null,
        title: "Studio Diary Ep.1",
        meta: "Behind the scenes",
        dur: "8:12",
        big: false,
    },
    {
        id: 4,
        thumbSrc: "../src/assets/gwhero1.jpeg",  // ← replace
        videoSrc: null,
        youtubeId: "1qCvVI0IWNY",
        title: "lâche",
        meta: "Moment · 2023",
        dur: "2:38",
        big: false,
    },
];

// ── TRACKS / MUSIC ───────────────────────────────────────────
// audioSrc: path to .mp3 file — leave null if not hosting audio
// streamUrl: Spotify / YouTube Music / Boomplay link
export const TRACKS = [
    {
        id: 1,
        title: "Kindu",
        tag: "Afro-Soul · 2024",
        dur: "3:42",
        audioSrc: null,                          // ← or "/audio/kindu.mp3"
        streamUrl: "https://www.youtube.com/watch?v=1qCvVI0IWNY",  // ← replace or null
    },
    {
        id: 2,
        title: "Mère Courage",
        tag: "R&B Congolais · 2024",
        dur: "4:15",
        audioSrc: null,
        streamUrl: "https://www.youtube.com/watch?v=1qCvVI0IWNY",
    },
    {
        id: 3,
        title: "Goma Nights",
        tag: "Afrobeats · 2024",
        dur: "3:58",
        audioSrc: null,
        streamUrl: "https://www.youtube.com/watch?v=1qCvVI0IWNY",
    },
    {
        id: 4,
        title: "La Chorale",
        tag: "Gospel Soul · 2023",
        dur: "5:02",
        audioSrc: null,
        streamUrl: null,
    },
    {
        id: 5,
        title: "Papillon d'Or",
        tag: "Pop Urbaine · 2023",
        dur: "4:30",
        audioSrc: null,
        streamUrl: null,
    },
    {
        id: 6,
        title: "Diplôme",
        tag: "Afro-Soul · 2023",
        dur: "3:55",
        audioSrc: null,
        streamUrl: null,
    },
];

// ── VINYL CENTER PHOTO ───────────────────────────────────────
// Small circular photo shown in the center of the spinning vinyl
// Use a close-up portrait of Guelwab
export const VINYL_PHOTO = "/assets/hero.png"; // ← replace or set null

// ── PRESS / QUOTES ───────────────────────────────────────────
export const QUOTES = [
    {
        text: "Une voix qui transcende les frontières. Guelwab apporte quelque chose de rare.",
        src: "Radio Okapi · Goma",
    },
    {
        text: "Sa passion est palpable à chaque note — une artiste née pour les grandes scènes.",
        src: "Congo Music Mag",
    },
    {
        text: "Guelwab prouve que la jeunesse congolaise a des choses profondes à dire.",
        src: "Festival de Goma 2024",
    },
    {
        text: "Entre soul et afrobeats, elle a trouvé sa propre langue musicale.",
        src: "Kivu Cultural Review",
    },
];

// ── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIALS = [
    { icon: "📸", label: "Instagram", href: "https://www.instagram.com/guelwab?igsh=MXVpcXgwdjVsODkwNw%3D%3D&utm_source=qr" },
    { icon: "🎵", label: "TikTok",    href: "https://www.tiktok.com/@guelwab4?_r=1&_t=ZN-91gmhdgFHmg" },
    { icon: "▶",  label: "YouTube",   href: "https://youtube.com/@guelwab-tr4co?si=9zmGqobplG6nPuJ6" },
    { icon: "📘", label: "Facebook",  href: "https://www.facebook.com/share/1ANF4BAMMw/?mibextid=wwXIfr" },
    { icon: "🎧", label: "Spotify",   href: "https://open.spotify.com/user/3147nqfcxy3letw4kqaynvjhoque" },
    { icon: "📱", label: "WhatsApp",  href: "https://wa.me/+256790228489" },
];

// ── FILTER CATEGORIES ────────────────────────────────────────
export const CATS = ["tous", "live", "studio", "portrait", "behind", "life"];

// ── WAVEFORM BAR HEIGHTS (decorative) ────────────────────────
export const WAVE_H = [6, 12, 18, 14, 8, 16, 10, 20, 13, 7, 15, 11];
