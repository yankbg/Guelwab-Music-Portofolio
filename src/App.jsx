import { useState, useEffect, useRef, useCallback } from "react";
import "./index.css";
import {
  HERO_IMAGES,
  STORY_IMAGES,
  GALLERY,
  VIDEOS,
  TRACKS,
  QUOTES,
  SOCIALS,
  CATS,
  WAVE_H,
  VINYL_PHOTO,
} from "./data.js";
import ContactForm from "./ContactForm";

// ── CURSOR HOOK ───────────────────────────────────────────────
function useCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ring,  setRing]  = useState({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const rafRef  = useRef();

  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      ringRef.current.x = lerp(ringRef.current.x, mouse.x, 0.1);
      ringRef.current.y = lerp(ringRef.current.y, mouse.y, 0.1);
      setRing({ ...ringRef.current });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mouse]);

  return { mouse, ring };
}

// ── AUDIO HOOK ────────────────────────────────────────────────
function useAudio() {
  const [playing,  setPlaying]  = useState(null);
  const [spinning, setSpinning] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = useCallback((track) => {
    if (playing === track.id) {
      audioRef.current?.pause();
      setPlaying(null);
      setSpinning(false);
    } else {
      audioRef.current?.pause();
      if (track.audioSrc) {
        const audio = new Audio(track.audioSrc);
        audio.play().catch(() => {});
        audioRef.current = audio;
        audio.onended = () => { setPlaying(null); setSpinning(false); };
      } else if (track.streamUrl) {
        window.open(track.streamUrl, "_blank");
      }
      setPlaying(track.id);
      setSpinning(true);
    }
  }, [playing]);

  useEffect(() => () => audioRef.current?.pause(), []);
  return { playing, spinning, handlePlay };
}

// ── VIDEO ITEM ────────────────────────────────────────────────
function VideoItem({ video }) {
  const handleClick = () => {
    if (video.youtubeId) {
      window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, "_blank");
    }
  };

  return (
      <div className={video.big ? "video-main" : ""}>
        <div className="v-item" onClick={handleClick}>
          {video.thumbSrc && (
              <img className="v-thumb" src={video.thumbSrc} alt={video.title} />
          )}
          <div className="v-overlay">
            <div className="v-play">▶</div>
            <div className="v-lbl">{video.meta}</div>
          </div>
          <div className="v-dur">{video.dur}</div>
          <div className="v-info">
            <div className="v-title">{video.title}</div>
            <div className="v-meta">{video.meta}</div>
          </div>
        </div>
      </div>
  );
}

// ── GALLERY ITEM ──────────────────────────────────────────────
function GalleryItem({ item, index, onExpand }) {
  return (
      <div className="m-item">
        <div className="m-wrap">
          <img
              className="m-img"
              src={item.src}
              alt={item.alt}
              style={{ height: item.height + "px" }}
              loading="lazy"
          />
        </div>
        <div className="m-ov">
          <div className="m-label">{item.label}</div>
          <div className="m-meta">{item.mood}</div>
        </div>
        <button className="m-expand" onClick={() => onExpand(index)}>⤢</button>
      </div>
  );
}

// ── LIGHTBOX ──────────────────────────────────────────────────
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null;
  const item   = isOpen ? items[index] : null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
      <div className={`lightbox ${isOpen ? "open" : ""}`} onClick={onClose}>
        {isOpen && (
            <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
              <button className="lb-close" onClick={onClose}>✕</button>
              <button className="lb-nav lb-prev" onClick={onPrev}>‹</button>
              <button className="lb-nav lb-next" onClick={onNext}>›</button>
              <img className="lb-img" src={item.src} alt={item.alt} />
              <div className="lb-info">
                <div>
                  <div className="lb-title">{item.label}</div>
                  <div className="lb-sub">{item.mood}</div>
                </div>
                <div className="lb-count">{index + 1} / {items.length}</div>
              </div>
            </div>
        )}
      </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function GuelwabPortfolio() {
  const { mouse, ring }                   = useCursor();
  const { playing, spinning, handlePlay } = useAudio();
  const [cat,      setCat]                = useState("tous");
  const [lbIndex,  setLbIndex]            = useState(null);
  const [menuOpen, setMenuOpen]           = useState(false);  // ← hamburger state

  const filtered = cat === "tous" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  const lbOpen  = useCallback((i) => setLbIndex(i), []);
  const lbClose = useCallback(() => setLbIndex(null), []);
  const lbPrev  = useCallback(() => setLbIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const lbNext  = useCallback(() => setLbIndex((i) => (i + 1) % filtered.length), [filtered.length]);

  // Close menu on scroll
  useEffect(() => {
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
      <>
        {/* ── CURSOR ── */}
        <div id="cur"  style={{ left: mouse.x, top: mouse.y }} />
        <div id="curl" style={{ left: ring.x,  top: ring.y  }} />

        {/* ── NAV ── */}
        <nav>
          <div className="n-logo">GUEL<span>WAB</span> 🦋</div>

          {/* Desktop links */}
          <ul className="n-links">
            <li><a href="#story"   onClick={(e) => { e.preventDefault(); scrollTo("story");   }}>Histoire</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo("gallery"); }}>Galerie</a></li>
            <li><a href="#videos"  onClick={(e) => { e.preventDefault(); scrollTo("videos");  }}>Vidéos</a></li>
            <li><a href="#music"   onClick={(e) => { e.preventDefault(); scrollTo("music");   }}>Musique</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a></li>
          </ul>

          {/* Hamburger button — visible on mobile */}
          <button
              className={`nav-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* ── MOBILE DRAWER ── */}
        <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
          {["story","gallery","videos","music","contact"].map((id) => (
              <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
          ))}
        </div>

        {/* ── HERO ── */}
        <div className="hero">
          <div className="hero-overlay" />
          <div className="hero-noise" />

          <div className="hero-left">
            <div className="h-eyebrow">Artiste Musicienne · Goma, DRC</div>
            <h1 className="h-title">
              <div>Stories</div>
              <div>in <span className="italic">Light</span></div>
              <div className="outline">&amp; Shadow</div>
            </h1>
            <p className="h-desc">
              Je capture les émotions dans leur forme la plus cinématique. Chaque note porte une histoire silencieuse — des instants qui passent, mais ne s'effacent jamais.
            </p>
            <div className="h-btns">
              <button className="btn-g" onClick={() => scrollTo("gallery")}>Voir la Galerie →</button>
              <button className="btn-o" onClick={() => scrollTo("music")}>Écouter</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-right-inner">
              {HERO_IMAGES.map((img, i) => (
                  <div className="hero-img-block" key={i}>
                    <img src={img.src} alt={img.alt} />
                  </div>
              ))}
            </div>
          </div>

          <div className="h-scroll">
            <div className="h-scroll-line" />
            <span className="h-scroll-txt">Défiler</span>
          </div>
        </div>

        {/* ── MARQUEE ── */}
        <div className="marquee-strip">
          {[0, 1].map((r) => (
              <div className="marquee-inner" key={r}>
                {["Artiste Musicienne","Goma · DRC","Compositions Originales","Afro-Soul","R&B Congolais","Née à Kindu","Guelwab 🦋","2024"].map((t, i) => (
                    <span className="marquee-item" key={i}>
                {t}<span className="marquee-dot" />
              </span>
                ))}
              </div>
          ))}
        </div>

        {/* ── STORY / ABOUT ── */}
        <section id="story" className="sec">
          <div className="sec-label">Histoire</div>
          <div className="story-grid">
            <div className="story-imgs">
              {STORY_IMAGES.map((img, i) => (
                  <div className="s-img" key={i}>
                    <img src={img.src} alt={img.alt} />
                  </div>
              ))}
              <div className="s-badge">
                <span className="s-badge-year">2005</span>
                <span className="s-badge-txt">Depuis</span>
              </div>
            </div>
            <div>
              <div className="st-tag">Biographie</div>
              <h2 className="st-title">
                Une Passion que rien ne peut <em>faire taire</em>
              </h2>
              <p className="st-body">
                Née le 8 août 2005 à Kindu, originaire du Kaïsa, <strong>Safi Lwaba Guelard</strong> — connue sous le nom de scène <strong>Guelwab 🦋</strong> — a grandi dans une famille de trois enfants avant de s'installer à Goma, où tout a changé.
              </p>
              <p className="st-body">
                C'est dans les rues vibrantes de Goma qu'elle découvre sa passion pour la musique. Malgré l'opposition initiale de sa mère, elle fréquente une chorale, puis commence des reprises d'artistes confirmés. Ses excellentes performances académiques finissent par convaincre sa famille.
              </p>
              <p className="st-body">
                Aujourd'hui, Guelwab poursuit ses études universitaires en Gestion à Goma tout en bâtissant une carrière musicale prometteuse — prouvant que passion et ambition n'ont pas de limites.
              </p>
              <div className="st-facts">
                <div><div className="sf-val">6+</div><div className="sf-lbl">Titres</div></div>
                <div><div className="sf-val">Goma</div><div className="sf-lbl">Basée à</div></div>
                <div><div className="sf-val">2023</div><div className="sf-lbl">Premiers concours</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section id="gallery" className="sec sec-alt">
          <div className="sec-label">Galerie</div>
          <div className="gallery-header">
            <h2 className="gallery-title">Moments<br />en <em>Images</em></h2>
            <div className="gallery-filter">
              {CATS.map((c) => (
                  <button
                      key={c}
                      className={`filter-btn ${cat === c ? "active" : ""}`}
                      onClick={() => { setCat(c); setLbIndex(null); }}
                  >
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </button>
              ))}
            </div>
          </div>
          <div className="masonry">
            {filtered.map((item, i) => (
                <GalleryItem key={item.id} item={item} index={i} onExpand={lbOpen} />
            ))}
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        <Lightbox items={filtered} index={lbIndex} onClose={lbClose} onPrev={lbPrev} onNext={lbNext} />

        {/* ── VIDEOS ── */}
        <section id="videos" className="sec">
          <div className="sec-label">Vidéos &amp; Performances</div>
          <div className="video-grid">
            {VIDEOS.map((v) => <VideoItem key={v.id} video={v} />)}
          </div>
        </section>

        {/* ── MUSIC / TRACKS ── */}
        <section id="music" className="sec sec-alt">
          <div className="sec-label">Discographie</div>
          <div className="tracks-layout">
            <div className="tracks-aside">
              <h2 className="ta-big">Ma<br /><em>Musique</em></h2>
              <p className="ta-desc">
                Chaque composition est une fenêtre ouverte sur mon âme. Des mélodies nées de l'Afrique, portées par les émotions de Goma.
              </p>
              <div className={`vinyl ${spinning ? "spin" : ""}`}>
                <div className="vinyl-center">
                  {VINYL_PHOTO ? <img src={VINYL_PHOTO} alt="Guelwab" /> : <span>🦋</span>}
                </div>
              </div>
              {playing && (
                  <div className="now-playing-label">
                    ♪ {TRACKS.find((t) => t.id === playing)?.title}
                  </div>
              )}
            </div>
            <div className="track-list">
              {TRACKS.map((t, i) => (
                  <div
                      key={t.id}
                      className={`t-item ${playing === t.id ? "active" : ""}`}
                      onClick={() => handlePlay(t)}
                  >
                    <span className="t-num">0{i + 1}</span>
                    <button className="t-play">{playing === t.id ? "❚❚" : "▶"}</button>
                    <div className="t-info">
                      <div className="t-title">{t.title}</div>
                      <div className="t-tag">{t.tag}</div>
                    </div>
                    {playing === t.id ? (
                        <div className="wave-wrap">
                          {WAVE_H.map((h, j) => (
                              <div key={j} className="w-bar" style={{ height: h + "px", animationDelay: j * 0.1 + "s" }} />
                          ))}
                        </div>
                    ) : (
                        <span className="t-dur">{t.dur}</span>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRESS ── */}
        <section className="sec">
          <div className="sec-label">Presse &amp; Avis</div>
          <div className="press-row">
            {QUOTES.map((q, i) => (
                <div key={i} className="p-card">
                  <div className="pq">"</div>
                  <p className="p-text">{q.text}</p>
                  <div className="p-src">— {q.src}</div>
                </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="sec sec-alt">
          <div className="sec-label">Contact</div>
          <div className="contact-wrap">
            <div>
              <h2 className="cw-title">Travaillons<br /><em>Ensemble</em></h2>
              <p className="cw-sub">
                Bookings, collaborations, presse, featuring — chaque opportunité est la bienvenue. Guelwab est basée à Goma, DRC, et disponible pour des projets à travers l'Afrique.
              </p>
              <div className="social-row">
                {SOCIALS.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noreferrer" className="soc-btn">
                      <span>{s.icon}</span>{s.label}
                    </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer>
          <div className="f-logo">GUELWAB 🦋</div>
          <div className="f-tagline">"On ne fait jamais taire une passion."</div>
          <div className="f-copy">
            © 2026 Guelwab · Goma, DRC<br />
            Tous droits réservés
            <span className="f-dev">Développé par <a href="https://github.com/yankbg" target="_blank" rel="noreferrer">Yaan kbg</a></span>
          </div>
        </footer>
      </>
  );
}