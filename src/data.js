// ============================================================
//  data.js  —  PUT ALL YOUR REAL CONTENT HERE
//  Replace every placeholder with your actual files / URLs
// ============================================================

// ── HERO IMAGES (right-side grid, 3 slots) ──────────────────
// Tip: use portrait/vertical shots for best results
export const HERO_IMAGES = [
    {
        src: "../src/assets/gwhero1.jpeg",          
        alt: "Guelwab — performance scène",
    },
    {
        src: "../src/assets/gwhero2.jpeg",          
        alt: "Guelwab — portrait studio",
    },
    {
        src: "../src/assets/gwhero3.jpeg",          
        alt: "Guelwab — backstage",
    },
];

// ── STORY / ABOUT IMAGES (3 slots) ──────────────────────────
export const STORY_IMAGES = [
    {
        src: "../src/assets/guelwab2.jpeg",      // ← wide/landscape photo (spans 2 cols)
        alt: "Guelwab portrait",
    },
    {
        src: "../src/assets/guelwab3.jpeg",         // ← portrait photo
        alt: "Guelwab en concert",
    },
    {
        src: "../src/assets/guelwab2.jpeg",         // ← portrait photo
        alt: "Guelwab studio",
    },
];

// ── GALLERY ITEMS ────────────────────────────────────────────
// cat options: "live" | "studio" | "portrait" | "behind" | "life"
// height: controls the masonry card height in px (vary for visual interest)
export const GALLERY = [
    {
        id: 1,
        src: "../src/assets/guelwab7.jpg",       
        alt: "Mood chill",
        label: "Mood · chill",
        mood: "Visiting",
        cat: "live",
        height: 340,
    },
    {
        id: 2,
        src: "../src/assets/guelwab4.jpeg",       
        alt: "Studio Session",
        label: "Studio Session",
        mood: "Création",
        cat: "studio",
        height: 240,
    },
    {
        id: 3,
        src: "../src/assets/guelwab8.jpg",       
        alt: "Backstage",
        label: "Backstage",
        mood: "Coulisses",
        cat: "behind",
        height: 300,
    },
    {
        id: 4,
        src: "../src/assets/guelpotrait.jpg",       
        alt: "Portrait",
        label: "Portrait",
        mood: "Portrait",
        cat: "portrait",
        height: 400,
    },
    {
        id: 5,
        src: "../src/assets/guelafri.jpg",       
        alt: "African Woman",
        label: "African Woman",
        mood: "Vie",
        cat: "life",
        height: 260,
    },
    {
        id: 6,
        src: "../src/assets/guelinter.jpg",       
        alt: "Interview 2026",
        label: "Interview 2026",
        mood: "Interview",
        cat: "live",
        height: 320,
    },
    {
        id: 7,
        src: "../src/assets/guelwaben.jpg",       
        alt: "Enregistrement",
        label: "Enregistrement",
        mood: "Studio",
        cat: "studio",
        height: 280,
    },
    {
        id: 8,
        src: "../src/assets/gwabout2.jpeg",       
        alt: "Séance Photo",
        label: "Séance Photo",
        mood: "Portrait",
        cat: "portrait",
        height: 360,
    },
    {
        id: 9,
        src: "../src/assets/guelwab5.jpeg",       
        alt: "Boss Lady",
        label: "Boss Lady",
        mood: "Travail",
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
        thumbSrc: "../src/assets/guelamanda.jpg",  
        videoSrc: null,                          
        youtubeId: "DPCRpkav3Bw",            
        title: "Amanda - Version Congolaise",
        meta: "Cover by guelwab· 2025",
        dur: "1:06",
        big: true,
    },
    {
        id: 2,
        thumbSrc: "../src/assets/guelwab6.jpeg",
        videoSrc: null,
        youtubeId: "fZvEnowSa-g",
        title: "bad influence — omah lay",
        meta: "cover by guelwab · 2025",
        dur: "2:11",
        big: false,
    },
    {
        id: 3,
        thumbSrc: "../src/assets/flag.jpeg",
        videoSrc: null,
        youtubeId: "dp9ng7BR_MQ",
        title: "Le congo est à nous",
        meta: "guelwab ",
        dur: "1:12",
        big: false,
    },
    {
        id: 4,
        thumbSrc: "../src/assets/gwhero1.jpeg",  
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
        audioSrc: null,
        streamUrl: "https://www.youtube.com/watch?v=1qCvVI0IWNY",
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
export const VINYL_PHOTO = "/assets/hero.png";

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
