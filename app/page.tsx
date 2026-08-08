"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

const ClientHashRouter = dynamic(() => import("./hash-router"), {
  ssr: false,
  loading: () => <main className="route-loading" aria-label="Loading eclipse guide" />,
});

const TOTALITY = new Date("2026-08-12T20:29:00+02:00").getTime();

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

function getCountdown(): Countdown {
  const distance = Math.max(0, TOTALITY - Date.now());

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
    finished: distance === 0,
  };
}

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function RouteScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function HorizonIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M4 36h40M8 30l8-7 6 5 8-11 10 13" />
      <path d="M7 10h7M10.5 6.5v7" />
    </svg>
  );
}

function GlassesIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m4 23 4-9m36 9-4-9M19 25h10" />
      <path d="M5 23c0-3 2-5 5-5h7c3 0 5 2 5 5v2c0 5-3 8-8 8h-1c-5 0-8-3-8-8v-2Zm38 0c0-3-2-5-5-5h-7c-3 0-5 2-5 5v2c0 5 3 8 8 8h1c5 0 8-3 8-8v-2Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 13v12l8 5" />
    </svg>
  );
}

function LandingPage() {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    const update = () => setCountdown(getCountdown());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = countdown
    ? [
        ["days", countdown.days],
        ["hours", countdown.hours],
        ["minutes", countdown.minutes],
        ["seconds", countdown.seconds],
      ]
    : [
        ["days", "—"],
        ["hours", "—"],
        ["minutes", "—"],
        ["seconds", "—"],
      ];

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav wrap" aria-label="Main navigation">
          <Link className="brand" to="/" aria-label="Eclipse Tarragona home">
            <span className="brand-mark" aria-hidden="true" />
            <span>ECLIPSE<br />TARRAGONA</span>
          </Link>
          <div className="nav-links">
            <button type="button" onClick={() => scrollToSection("timeline")}>Timeline</button>
            <button type="button" onClick={() => scrollToSection("viewing")}>Viewing guide</button>
            <Link to="/about">About</Link>
          </div>
          <button className="nav-cta" type="button" onClick={() => scrollToSection("viewing")}>Plan your spot</button>
        </nav>

        <div className="hero-orbit" aria-hidden="true">
          <div className="sun-glow" />
          <div className="moon-disc" />
        </div>

        <div className="hero-content wrap">
          <p className="eyebrow"><span /> One minute. A century in the making.</p>
          <h1>The day<br />turns to <em>night.</em></h1>
          <div className="hero-bottom">
            <p className="intro">
              On the Mediterranean coast, the Moon will completely cover the Sun
              and Tarragona will fall into darkness for 61 unforgettable seconds.
            </p>
            <div className="date-lockup">
              <span>WED</span>
              <strong>12 · 08 · 26</strong>
              <span>20:29 CEST</span>
            </div>
          </div>
        </div>
        <button className="scroll-cue" type="button" onClick={() => scrollToSection("countdown")} aria-label="Scroll to countdown">
          <span>Discover</span><i aria-hidden="true" />
        </button>
      </section>

      <section className="countdown-section" id="countdown">
        <div className="wrap countdown-grid">
          <div>
            <p className="section-kicker">Until totality</p>
            <h2>{countdown?.finished ? "Look west." : "The shadow is coming."}</h2>
          </div>
          <div className="countdown" aria-live="polite" aria-label="Countdown to totality">
            {units.map(([label, value]) => (
              <div className="time-unit" key={label}>
                <strong>{typeof value === "number" ? String(value).padStart(2, "0") : value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="section-kicker">12 August 2026 · Tarragona local time</p>
              <h2>One evening,<br /><em>four moments.</em></h2>
            </div>
            <p>
              Arrive early. The partial phase builds for almost an hour before the
              brief moment when the solar corona appears.
            </p>
          </div>

          <div className="timeline">
            <article>
              <span className="step">01</span>
              <time>19:35</time>
              <h3>First contact</h3>
              <p>The Moon begins to cross the Sun. Eclipse glasses on.</p>
            </article>
            <article className="highlight">
              <span className="step">02</span>
              <time>20:29</time>
              <h3>Totality begins</h3>
              <p>Daylight disappears. The corona becomes visible for 61 seconds.</p>
            </article>
            <article>
              <span className="step">03</span>
              <time>20:30</time>
              <h3>Sunlight returns</h3>
              <p>The first bright ray reappears. Glasses go straight back on.</p>
            </article>
            <article>
              <span className="step">04</span>
              <time>20:58</time>
              <h3>Sunset</h3>
              <p>The eclipsed Sun slips below Tarragona&apos;s western horizon.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="viewing-section" id="viewing">
        <div className="wrap viewing-layout">
          <div className="viewing-title">
            <p className="section-kicker">Your viewing guide</p>
            <h2>Three things<br />matter most.</h2>
            <p className="muted">Simple preparation makes the difference between seeing the eclipse and missing it.</p>
          </div>
          <div className="guide-cards">
            <article>
              <HorizonIcon />
              <span>01 / Horizon</span>
              <h3>Look west. Keep it clear.</h3>
              <p>The Sun will be only about 4° high. Choose a spot with no hills, buildings or trees blocking the western horizon.</p>
            </article>
            <article>
              <GlassesIcon />
              <span>02 / Safety</span>
              <h3>Protect your eyes.</h3>
              <p>Use ISO 12312-2 eclipse glasses before and after totality. Ordinary sunglasses and homemade filters are not safe.</p>
            </article>
            <article>
              <ClockIcon />
              <span>03 / Timing</span>
              <h3>Arrive very early.</h3>
              <p>Expect crowds and traffic. Get settled well before 19:35, check the weather, and keep a backup viewing location ready.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="safety-banner">
        <div className="wrap safety-content">
          <div className="safety-eclipse" aria-hidden="true"><span /></div>
          <div>
            <p className="section-kicker">The 61-second rule</p>
            <h2>Glasses off only during <em>complete</em> totality.</h2>
            <p>
              The moment even a sliver of direct sunlight appears, put your eclipse
              glasses back on immediately. Never look through binoculars, a camera,
              or a telescope without a purpose-built solar filter on the front.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap final-inner">
          <p className="section-kicker">Tarragona · 12 August 2026</p>
          <h2>Meet you<br />in the <em>shadow.</em></h2>
          <a href="https://www.tarragona.cat/eclipsi/eclipsi" target="_blank" rel="noreferrer">
            Official event information <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true" />
            <span>ECLIPSE<br />TARRAGONA</span>
          </div>
          <p>Times are local and may vary slightly by exact location.</p>
          <div>
            <Link to="/about">About this site</Link>
            <a href="https://www.tarragona.cat/eclipsi/eclipsi" target="_blank" rel="noreferrer">Ajuntament de Tarragona</a>
            <a href="https://eclipses.ign.es/" target="_blank" rel="noreferrer">IGN España</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <nav className="nav wrap" aria-label="About navigation">
          <Link className="brand" to="/" aria-label="Eclipse Tarragona home">
            <span className="brand-mark" aria-hidden="true" />
            <span>ECLIPSE<br />TARRAGONA</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Eclipse guide</Link>
            <a href="https://www.tarragona.cat/eclipsi/eclipsi" target="_blank" rel="noreferrer">Official information</a>
          </div>
          <Link className="nav-cta" to="/">Back home</Link>
        </nav>

        <div className="about-orbit" aria-hidden="true">
          <div className="sun-glow" />
          <div className="moon-disc" />
        </div>

        <div className="about-intro wrap">
          <p className="eyebrow"><span /> About this project</p>
          <h1>One site.<br /><em>One shadow.</em></h1>
          <p>
            This is a single-purpose website for a singular event: the 2026 total
            solar eclipse in Tarragona.
          </p>
        </div>
      </section>

      <section className="about-body">
        <div className="wrap about-grid">
          <div className="about-heading">
            <p className="section-kicker">12 August 2026 · Tarragona</p>
            <h2>Made for<br /><em>one minute.</em></h2>
          </div>
          <div className="about-copy">
            <article>
              <span>01 / Purpose</span>
              <h3>Deliberately single-purpose.</h3>
              <p>
                This is not a general astronomy portal or an evergreen events
                platform. Every page, time, and instruction exists to help people
                prepare for Tarragona&apos;s eclipse on 12 August 2026.
              </p>
            </article>
            <article>
              <span>02 / Moment</span>
              <h3>A singular event on the Mediterranean.</h3>
              <p>
                The Sun will sit low over the western horizon when totality arrives.
                For roughly 61 seconds, daylight gives way to the Moon&apos;s shadow and
                the solar corona becomes visible above Tarragona.
              </p>
            </article>
            <article>
              <span>03 / Making</span>
              <h3>Generated with focused intelligence.</h3>
              <p>
                The site was generated using <strong>Sol 5.6 Extra High</strong> and
                shaped around one clear brief: make the eclipse feel immediate while
                keeping timing, preparation, and eye safety easy to understand.
              </p>
            </article>
            <Link className="about-return" to="/">
              Return to the eclipse guide <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark" aria-hidden="true" />
            <span>ECLIPSE<br />TARRAGONA</span>
          </Link>
          <p>One purpose. One place. One unforgettable minute.</p>
          <Link to="/">Eclipse guide</Link>
        </div>
      </footer>
    </main>
  );
}

export default function EclipseSite() {
  return (
    <ClientHashRouter>
      <RouteScrollTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ClientHashRouter>
  );
}
