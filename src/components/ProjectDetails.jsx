import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

// ── Auto-import all images from all folders — no manual imports ever again ──
const allImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp,PNG,JPG}", { eager: true });

const getImages = (folder) =>
    Object.entries(allImages)
        .filter(([path]) => path.includes(`/assets/${folder}/`))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, mod]) => mod.default);

const projects = [
    {
        id: 1,
        title: "Drivo",
        category: "Mobile App",
        image: getImages("drivo")[0],
        images: getImages("drivo"),
        description: "A modern ride-sharing mobile app that allows users to book rides instantly and track drivers in real time.",
        year: "2025",
        role: "UI/UX Designer",
        duration: "3 months",
        figma: "https://www.figma.com/design/8zgoVCLIjfRxADkHApFX7O/cos?node-id=129-265",
        overview: "Drivo is a ride-sharing platform designed to simplify daily commuting. The goal was to create a fast, intuitive ride booking experience with clear navigation and real-time driver tracking.",
        challenge: "Many ride apps overwhelm users with too many ride options and complicated flows. The challenge was designing a simple booking experience that allows users to request rides within seconds.",
        solution: "We designed a minimal map-first interface with simplified ride options and clear pricing. The booking flow was reduced to three simple steps: choose location, select ride, confirm booking.",
        learned: "I learned the importance of reducing friction in task-based apps. When the main user goal is quick action, simplicity and speed matter more than feature quantity.",
        tags: ["Mobile", "Ride Sharing", "UX Flow", "Figma", "Maps"],
    },
    {
        id: 2,
        title: "BiteBite",
        category: "Mobile App",
        image: getImages("bitebite")[0],
        images: getImages("bitebite"),
        description: "A food delivery mobile app that helps users discover restaurants, browse menus, and order food quickly.",
        year: "2024",
        role: "UI/UX Designer",
        duration: "6 weeks",
        figma: "https://www.figma.com/design/8zgoVCLIjfRxADkHApFX7O/cos?node-id=194-749",
        overview: "BiteBite focuses on simplifying the food ordering experience by making restaurant discovery and checkout fast and enjoyable.",
        challenge: "Food delivery apps often feel cluttered with too many menu categories and confusing navigation.",
        solution: "We created a clean card-based restaurant layout, quick filtering options, and a simple three-step checkout process.",
        learned: "This project taught me the importance of content hierarchy. When users are hungry, they want fast decisions — strong visual hierarchy helps them decide quickly.",
        tags: ["Mobile", "Food Delivery", "UI Design", "Figma", "UX"],
    },
    {
        id: 3,
        title: "Profile Manager",
        category: "Web App",
        image: getImages("profile-manager")[0],
        images: getImages("profile-manager"),
        description: "A web application that allows users to manage personal profile data, account settings, and digital identity in one place.",
        year: "2024",
        role: "Product Designer",
        duration: "4 weeks",
        figma: "https://www.figma.com/design/8zgoVCLIjfRxADkHApFX7O/cos?node-id=578-1566",
        overview: "Profile Manager centralizes user profile data in a simple dashboard where users can edit information and manage settings easily.",
        challenge: "Users often struggle to update and manage multiple pieces of profile information across platforms.",
        solution: "We designed a modular dashboard with editable cards and clear sections for profile, security, and account settings.",
        learned: "Dashboard design requires strong information grouping. Breaking data into clear modules dramatically improves usability.",
        tags: ["Web App", "Dashboard", "UX", "Profile System"],
    },
    {
        id: 4,
        title: "COS",
        category: "E-commerce Mobile App",
        image: getImages("cos")[0],
        images: getImages("cos"),
        description: "A modern fashion shopping mobile app focused on browsing clothing collections and discovering products easily.",
        year: "2023",
        role: "UI Designer",
        duration: "5 months",
        figma: "https://www.figma.com/design/8zgoVCLIjfRxADkHApFX7O/cos?node-id=0-1",
        overview: "COS is a fashion shopping experience focused on minimal design and premium product presentation.",
        challenge: "Fashion apps require a balance between strong visual storytelling and smooth product navigation.",
        solution: "We built a large-image product grid with smooth browsing transitions and simplified product details.",
        learned: "Visual storytelling is crucial for fashion products. Large imagery and whitespace create a premium shopping feel.",
        tags: ["E-commerce", "Fashion", "Mobile UI", "Product Design"],
    },
    {
        id: 5,
        title: "Platinum Group",
        category: "Real Estate App",
        image: getImages("platinumgroup")[0],
        images: getImages("platinumgroup"),
        description: "A real estate mobile platform that helps users browse property listings and connect with agents.",
        year: "2023",
        role: "UX Designer",
        duration: "4 months",
        figma: "https://www.figma.com/design/8zgoVCLIjfRxADkHApFX7O/cos?node-id=299-3767",
        overview: "The app helps users discover available properties and explore homes through a clean mobile browsing experience.",
        challenge: "Real estate apps often overwhelm users with large amounts of property information.",
        solution: "We created a card-based browsing experience with powerful search filters and large property images.",
        learned: "Clear search and filtering systems are essential for content-heavy platforms like real estate.",
        tags: ["Real Estate", "Mobile", "UX", "Search Filters"],
    },
    {
        id: 6,
        title: "Exxtra",
        category: "Web Dashboard",
        image: getImages("exxtra")[0],
        images: getImages("exxtra"),
        description: "A cryptocurrency dashboard that visualizes market trends, prices, and portfolio performance.",
        year: "2022",
        role: "UI Designer",
        duration: "3 months",
        figma: "https://www.figma.com/design/Mh8ZIB4F3lLJacfSXmiluA/FINAL-CLOTHING-BRAND?node-id=1-2",
        overview: "This dashboard helps traders track cryptocurrency prices and portfolio performance in real time.",
        challenge: "Crypto dashboards can easily become overwhelming due to large volumes of financial data.",
        solution: "We structured the interface into modular widgets and simplified charts for quick readability.",
        learned: "Data visualization must balance clarity and density. Simplifying charts can dramatically improve comprehension.",
        tags: ["Dashboard", "Crypto", "Charts", "Figma"],
    },
    {
        id: 7,
        title: "Portfolio",
        category: "Website",
        image: getImages("portfolio")[0],
        images: getImages("portfolio"),
        description: "A personal portfolio website designed to showcase projects, case studies, and creative work.",
        year: "2022",
        role: "Product Designer",
        duration: "2 months",
        figma: "https://www.figma.com/design/8zgoVCLIjfRxADkHApFX7O/cos?node-id=358-918",
        overview: "This portfolio highlights projects through storytelling, focusing on process, design decisions, and outcomes.",
        challenge: "Creating a portfolio that feels unique while still remaining minimal and readable.",
        solution: "We used bold typography, strong grid layouts, and smooth interactions to guide visitors through projects.",
        learned: "Storytelling is just as important as design. Showing the process behind work builds credibility.",
        tags: ["Portfolio", "UI/UX", "Design", "React"],
    },
    {
        id: 8,
        title: "UI Components",
        category: "Design System",
        image: getImages("components")[0],
        images: getImages("components"),
        description: "A library of reusable UI components designed for consistent and scalable interface development.",
        year: "2021",
        role: "UI Designer",
        duration: "2 months",
        figma: "https://www.figma.com/design/8zgoVCLIjfRxADkHApFX7O/cos?node-id=578-1566",
        overview: "This project focused on building a reusable design system for faster product development.",
        challenge: "Maintaining visual consistency across multiple projects and teams.",
        solution: "We created a set of reusable components including buttons, cards, navigation bars, and form elements.",
        learned: "Design systems dramatically improve team efficiency and ensure consistent product experiences.",
        tags: ["Design System", "Components", "UI", "Responsive"],
    },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pd-root {
    background: #0D0D0D;
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
    color: #E8E4DE;
  }

  .pd-topbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 48px;
    background: rgba(13, 13, 13, 0.88);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .pd-back-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #E8E4DE;
    letter-spacing: 0.02em;
    transition: gap 0.2s ease;
    padding: 0;
  }
  .pd-back-btn:hover { gap: 14px; }
  .pd-back-btn svg { transition: transform 0.2s ease; }
  .pd-back-btn:hover svg { transform: translateX(-3px); }

  .pd-topbar-title {
    font-family: 'DM Serif Display', serif;
    font-size: 16px;
    color: rgba(232,228,222,0.35);
    font-weight: 400;
  }

  .pd-hire-btn {
    background: #E8E4DE;
    color: #0D0D0D;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 10px 24px;
    border-radius: 100px;
    transition: background 0.2s, transform 0.15s;
  }
  .pd-hire-btn:hover {
    background: #ffffff;
    transform: scale(1.04);
  }

  .pd-hero { padding-top: 88px; }

  .pd-slider {
    position: relative;
    width: 100%;
    background: #111;
  }

  .pd-slider-viewport {
    width: 100%;
    height: 56vh;
    overflow: hidden;
  }

  .pd-slider-track {
    display: flex;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
    will-change: transform;
  }

  .pd-slide {
    flex: 0 0 100%;
    height: 100%;
  }
  .pd-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    background: #111;
  }

  .pd-slide-counter {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.06em;
    z-index: 10;
    background: rgba(0,0,0,0.35);
    backdrop-filter: blur(6px);
    padding: 5px 12px;
    border-radius: 100px;
  }

  .pd-slider-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(13,13,13,0.5);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.12);
    color: #E8E4DE;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.15s;
  }
  .pd-slider-arrow:hover {
    background: rgba(232,228,222,0.15);
    border-color: rgba(255,255,255,0.3);
    transform: translateY(-50%) scale(1.08);
  }
  .pd-slider-arrow.prev { left: 24px; }
  .pd-slider-arrow.next { right: 24px; }

  .pd-slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 7px;
    z-index: 10;
  }
  .pd-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 0.25s, transform 0.25s;
  }
  .pd-dot.active {
    background: #E8E4DE;
    transform: scale(1.4);
  }

  .pd-thumbnails {
    display: flex;
    gap: 8px;
    padding: 12px 48px;
    background: #111;
    overflow-x: auto;
    scrollbar-width: none;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  .pd-thumbnails::-webkit-scrollbar { display: none; }

  .pd-thumb {
    flex: 0 0 96px;
    height: 60px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s, opacity 0.2s;
    opacity: 0.45;
  }
  .pd-thumb.active {
    border-color: #E8E4DE;
    opacity: 1;
  }
  .pd-thumb:hover { opacity: 0.8; }
  .pd-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pd-hero-text {
    padding: 64px 48px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
  }

  .pd-hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(52px, 8vw, 96px);
    line-height: 1;
    letter-spacing: -0.02em;
    max-width: 700px;
    color: #E8E4DE;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .pd-hero-subtitle {
    font-size: 15px;
    color: rgba(232,228,222,0.45);
    line-height: 1.7;
    max-width: 380px;
    flex-shrink: 0;
    animation: fadeUp 0.8s 0.35s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pd-meta-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.07);
    border-bottom: 1px solid rgba(255,255,255,0.07);
    margin: 64px 48px 0;
    animation: fadeUp 0.8s 0.5s ease both;
  }
  .pd-meta-item { padding: 32px 0; }
  .pd-meta-item + .pd-meta-item {
    border-left: 1px solid rgba(255,255,255,0.07);
    padding-left: 32px;
  }
  .pd-meta-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(232,228,222,0.3);
    margin-bottom: 8px;
  }
  .pd-meta-value {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: #E8E4DE;
  }

  .pd-meta-figma {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    color: #E8E4DE;
    text-decoration: none;
    border-bottom: 1px solid rgba(232,228,222,0.2);
    padding-bottom: 2px;
    transition: color 0.2s, border-color 0.2s;
  }
  .pd-meta-figma:hover {
    color: #fff;
    border-color: rgba(232,228,222,0.6);
  }

  .pd-body {
    padding: 96px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    animation: fadeUp 0.8s 0.6s ease both;
  }
  .pd-section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(232,228,222,0.3);
    margin-bottom: 20px;
  }
  .pd-section-text {
    font-size: 17px;
    line-height: 1.8;
    color: rgba(232,228,222,0.65);
  }
  .pd-overview-block {
    grid-column: 1 / -1;
    max-width: 720px;
  }
  .pd-overview-block .pd-section-text {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(22px, 3vw, 30px);
    line-height: 1.5;
    color: #E8E4DE;
    font-style: italic;
  }

  .pd-divider {
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 0 48px;
  }

  .pd-tags-section {
    padding: 64px 48px;
    animation: fadeUp 0.8s 0.7s ease both;
  }
  .pd-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  .pd-tag {
    border: 1px solid rgba(255,255,255,0.13);
    border-radius: 100px;
    padding: 8px 20px;
    font-size: 13px;
    color: rgba(232,228,222,0.6);
    letter-spacing: 0.02em;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    cursor: default;
  }
  .pd-tag:hover {
    background: #E8E4DE;
    color: #0D0D0D;
    border-color: #E8E4DE;
  }

  .pd-outcome {
    margin: 0 48px 96px;
    background: #161616;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 64px;
    animation: fadeUp 0.8s 0.8s ease both;
  }
  .pd-outcome .pd-section-label { color: rgba(232,228,222,0.25); }
  .pd-outcome .pd-section-text {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(20px, 2.5vw, 26px);
    line-height: 1.6;
    color: #E8E4DE;
    font-style: italic;
  }

  .pd-project-nav {
    display: flex;
    justify-content: space-between;
    padding: 48px 48px 96px;
    border-top: 1px solid rgba(255,255,255,0.07);
    animation: fadeUp 0.8s 0.9s ease both;
  }
  .pd-nav-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    text-align: left;
    padding: 0;
    max-width: 260px;
  }
  .pd-nav-btn.next { text-align: right; }
  .pd-nav-direction {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(232,228,222,0.3);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pd-nav-btn.next .pd-nav-direction { justify-content: flex-end; }
  .pd-nav-project-title {
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    color: #E8E4DE;
    transition: color 0.2s;
  }
  .pd-nav-btn:hover .pd-nav-project-title { color: rgba(232,228,222,0.35); }

  .pd-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    gap: 16px;
    font-family: 'DM Serif Display', serif;
    font-size: 32px;
    color: rgba(232,228,222,0.3);
  }

  @media (max-width: 768px) {
    .pd-topbar { padding: 16px 20px; }
    .pd-topbar-title { display: none; }
    .pd-slider-viewport { height: 52vw; min-height: 220px; }
    .pd-slider-arrow { width: 36px; height: 36px; }
    .pd-thumbnails { padding: 10px 16px; }
    .pd-hero-text { padding: 32px 24px 0; flex-direction: column; gap: 16px; }
    .pd-meta-strip { grid-template-columns: repeat(2, 1fr); margin: 40px 24px 0; }
    .pd-body { grid-template-columns: 1fr; padding: 56px 24px; gap: 40px; }
    .pd-divider { margin: 0 24px; }
    .pd-tags-section { padding: 40px 24px; }
    .pd-outcome { margin: 0 24px 56px; padding: 36px 24px; }
    .pd-project-nav { padding: 36px 24px 64px; }
  }
`;

function ImageSlider({ images, title }) {
    const [current, setCurrent] = useState(0);

    const prev = useCallback(() =>
        setCurrent((c) => (c - 1 + images.length) % images.length),
        [images.length]
    );
    const next = useCallback(() =>
        setCurrent((c) => (c + 1) % images.length),
        [images.length]
    );

    useEffect(() => { setCurrent(0); }, [images]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next]);

    let touchStartX = null;
    const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchStartX === null) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        touchStartX = null;
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="pd-slider">
            <div
                className="pd-slider-viewport"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="pd-slider-track"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {images.map((img, i) => (
                        <div className="pd-slide" key={i}>
                            <img src={img} alt={`${title} – view ${i + 1}`} />
                        </div>
                    ))}
                </div>

                {images.length > 1 && (
                    <>
                        <button className="pd-slider-arrow prev" onClick={prev} aria-label="Previous">
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                                <path d="M1 6.5H14M1 6.5L6 1M1 6.5L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="pd-slider-arrow next" onClick={next} aria-label="Next">
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                                <path d="M14 6.5H1M14 6.5L9 1M14 6.5L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <div className="pd-slider-dots">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    className={`pd-dot${i === current ? " active" : ""}`}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>
                        <span className="pd-slide-counter">{current + 1} / {images.length}</span>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="pd-thumbnails">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`pd-thumb${i === current ? " active" : ""}`}
                            onClick={() => setCurrent(i)}
                        >
                            <img src={img} alt={`Thumbnail ${i + 1}`} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const currentIndex = projects.findIndex((p) => p.id === parseInt(id));
    const project = projects[currentIndex];
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    if (!project) {
        return (
            <>
                <style>{styles}</style>
                <div className="pd-root">
                    <div className="pd-not-found">
                        <span>Project not found</span>
                        <button
                            onClick={() => navigate("/")}
                            style={{ fontSize: "16px", fontFamily: "DM Sans, sans-serif", background: "none", border: "none", cursor: "pointer", color: "rgba(232,228,222,0.4)" }}
                        >
                            ← Back to Work
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <style>{styles}</style>
            <div className="pd-root">
                <nav className="pd-topbar">
                    <button className="pd-back-btn" onClick={() => navigate("/")}>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                            <path d="M1 6H17M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Back to Work
                    </button>
                    <span className="pd-topbar-title">{project.title}</span>
                    <button className="pd-hire-btn" onClick={() => {
                        sessionStorage.setItem("scrollToContact", "true");
                        navigate("/");
                    }}>
                        Hire Me
                    </button>
                </nav>

                <div className="pd-hero">
                    <ImageSlider images={project.images} title={project.title} />
                    <div className="pd-hero-text">
                        <h1 className="pd-hero-title">{project.title}</h1>
                        <p className="pd-hero-subtitle">{project.description}</p>
                    </div>
                </div>

                <div className="pd-meta-strip">
                    <div className="pd-meta-item">
                        <p className="pd-meta-label">Role</p>
                        <p className="pd-meta-value">{project.role}</p>
                    </div>
                    <div className="pd-meta-item">
                        <p className="pd-meta-label">Year</p>
                        <p className="pd-meta-value">{project.year}</p>
                    </div>
                    <div className="pd-meta-item">
                        <p className="pd-meta-label">Duration</p>
                        <p className="pd-meta-value">{project.duration}</p>
                    </div>
                    <div className="pd-meta-item">
                        <p className="pd-meta-label">Figma File</p>
                        <a
                            className="pd-meta-figma"
                            href={project.figma}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                                <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                                <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                                <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
                                <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
                            </svg>
                            View in Figma ↗
                        </a>
                    </div>
                </div>

                <div className="pd-body">
                    <div className="pd-overview-block">
                        <p className="pd-section-label">Overview</p>
                        <p className="pd-section-text">{project.overview}</p>
                    </div>
                    <div>
                        <p className="pd-section-label">The Challenge</p>
                        <p className="pd-section-text">{project.challenge}</p>
                    </div>
                    <div>
                        <p className="pd-section-label">The Solution</p>
                        <p className="pd-section-text">{project.solution}</p>
                    </div>
                </div>

                <div className="pd-divider" />

                <div className="pd-tags-section">
                    <p className="pd-section-label">Skills & Tools</p>
                    <div className="pd-tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="pd-tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="pd-outcome">
                    <p className="pd-section-label">What I Learned</p>
                    <p className="pd-section-text">{project.learned}</p>
                </div>

                <div className="pd-project-nav">
                    {prevProject ? (
                        <button className="pd-nav-btn" onClick={() => navigate(`/project/${prevProject.id}`)}>
                            <p className="pd-nav-direction">
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M1 5H15M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                Previous
                            </p>
                            <p className="pd-nav-project-title">{prevProject.title}</p>
                        </button>
                    ) : <div />}

                    {nextProject ? (
                        <button className="pd-nav-btn next" onClick={() => navigate(`/project/${nextProject.id}`)}>
                            <p className="pd-nav-direction">
                                Next
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M15 5H1M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </p>
                            <p className="pd-nav-project-title">{nextProject.title}</p>
                        </button>
                    ) : <div />}
                </div>
            </div>
        </>
    );
}

export default ProjectDetails;