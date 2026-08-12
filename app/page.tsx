"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  isLocale,
  languageOptions,
  translations as archiveTranslations,
  type Locale,
  type LocaleConfig,
} from "./locales";
import {
  defaultLocale2027,
  translations2027,
} from "./locales/eclipse-2027";

const ClientHashRouter = dynamic(() => import("./hash-router"), {
  ssr: false,
  loading: () => (
    <main
      className="route-loading"
      aria-label={translations2027[defaultLocale2027].loadingLabel}
    />
  ),
});

const TOTALITY_2027 = new Date("2027-08-02T10:45:00+02:00").getTime();
const TOTALITY_2026 = new Date("2026-08-12T20:29:00+02:00").getTime();
const LANGUAGE_STORAGE_KEY = "eclipse-tarragona-language";
const ECLIPSE_2027_URL =
  "https://eclipses.ign.es/eclipse-total-sol-de-2-de-agosto-2027.html";
const ECLIPSE_2026_URL = "https://www.tarragona.cat/eclipsi/eclipsi";

const archiveLabels: Record<Locale, { notice: string; current: string }> = {
  ca: { notice: "Arxiu · Eclipsi Tarragona 2026", current: "Anar a l’eclipsi 2027" },
  es: { notice: "Archivo · Eclipse Tarragona 2026", current: "Ir al eclipse 2027" },
  fr: { notice: "Archives · Éclipse Tarragone 2026", current: "Voir l’éclipse 2027" },
  en: { notice: "Archive · Eclipse Tarragona 2026", current: "Go to the 2027 eclipse" },
};

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

type LocalizedPageProps = {
  locale: Locale;
  copy: LocaleConfig;
  onLocaleChange: (locale: Locale) => void;
  isArchive?: boolean;
};

function getCountdown(target: number): Countdown {
  const distance = Math.max(0, target - Date.now());

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
    finished: distance === 0,
  };
}

function getInitialLocale(search: string): Locale {
  const urlLocale = new URLSearchParams(search).get("lang");
  if (isLocale(urlLocale)) return urlLocale;

  if (typeof window === "undefined") return defaultLocale2027;

  try {
    const storedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLocale(storedLocale)) return storedLocale;
  } catch {
    // Local storage may be unavailable in privacy-restricted browsers.
  }

  const browserLocale = window.navigator.languages
    .map((language) => language.toLowerCase().split("-")[0])
    .find(isLocale);

  return browserLocale ?? defaultLocale2027;
}

function localizedPath(path: string, locale: Locale) {
  return `${path}?lang=${locale}`;
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

function BrandText({ children }: { children: string }) {
  const [firstWord, ...remainingWords] = children.split(" ");

  return (
    <span>
      {firstWord}
      <br />
      {remainingWords.join(" ")}
    </span>
  );
}

function LanguageSwitcher({
  locale,
  label,
  onChange,
}: {
  locale: Locale;
  label: string;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {languageOptions.map((option) => (
        <button
          type="button"
          key={option.code}
          className={option.code === locale ? "active" : undefined}
          onClick={() => onChange(option.code)}
          aria-pressed={option.code === locale}
          aria-label={option.name}
          title={option.name}
          lang={option.code}
        >
          <span
            className={`language-flag flag-${option.code}`}
            aria-hidden="true"
          />
          <span>{option.shortLabel}</span>
        </button>
      ))}
    </div>
  );
}

function LandingPage({ locale, copy, onLocaleChange, isArchive = false }: LocalizedPageProps) {
  const [countdown, setCountdown] = useState<Countdown | null>(null);
  const homePath = isArchive ? "/archive/2026" : "/";
  const aboutPath = isArchive ? "/archive/2026/about" : "/about";
  const officialUrl = isArchive ? ECLIPSE_2026_URL : ECLIPSE_2027_URL;

  useEffect(() => {
    const target = isArchive ? TOTALITY_2026 : TOTALITY_2027;
    const update = () => setCountdown(getCountdown(target));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [isArchive]);

  const units = [
    [copy.countdown.units.days, countdown?.days ?? "—"],
    [copy.countdown.units.hours, countdown?.hours ?? "—"],
    [copy.countdown.units.minutes, countdown?.minutes ?? "—"],
    [copy.countdown.units.seconds, countdown?.seconds ?? "—"],
  ];
  const guideIcons = [HorizonIcon, GlassesIcon, ClockIcon];

  return (
    <main>
      <section className="hero" id="top">
        {isArchive && (
          <div className="archive-notice">
            <span>{archiveLabels[locale].notice}</span>
            <Link to={localizedPath("/", locale)}>
              {archiveLabels[locale].current} <ArrowIcon />
            </Link>
          </div>
        )}
        <nav className="nav wrap" aria-label={copy.nav.mainLabel}>
          <Link
            className="brand"
            to={localizedPath(homePath, locale)}
            aria-label={copy.nav.homeLabel}
          >
            <span className="brand-mark" aria-hidden="true" />
            <BrandText>{copy.brand}</BrandText>
          </Link>
          <div className="nav-links">
            <button type="button" onClick={() => scrollToSection("timeline")}>
              {copy.nav.timeline}
            </button>
            <button type="button" onClick={() => scrollToSection("viewing")}>
              {copy.nav.viewingGuide}
            </button>
            <Link to={localizedPath(aboutPath, locale)}>{copy.nav.about}</Link>
            {!isArchive && copy.nav.archive && (
              <Link to={localizedPath("/archive/2026", locale)}>{copy.nav.archive}</Link>
            )}
          </div>
          <LanguageSwitcher
            locale={locale}
            label={copy.languageSelector.label}
            onChange={onLocaleChange}
          />
          <button
            className="nav-cta"
            type="button"
            onClick={() => scrollToSection("viewing")}
          >
            {copy.nav.planSpot}
          </button>
        </nav>

        <div className="hero-orbit" aria-hidden="true">
          <div className="sun-glow" />
          <div className="moon-disc" />
        </div>

        <div className="hero-content wrap">
          <p className="eyebrow">
            <span /> {copy.hero.eyebrow}
          </p>
          <h1>
            {copy.hero.headlineFirst}
            <br />
            {copy.hero.headlineSecond} <em>{copy.hero.headlineEmphasis}</em>
          </h1>
          <div className="hero-bottom">
            <p className="intro">{copy.hero.intro}</p>
            <div className="date-lockup">
              <span>{copy.hero.weekday}</span>
              <strong>{copy.hero.date}</strong>
              <span>{copy.hero.time}</span>
            </div>
          </div>
        </div>
        <button
          className="scroll-cue"
          type="button"
          onClick={() => scrollToSection("countdown")}
          aria-label={copy.hero.scrollLabel}
        >
          <span>{copy.hero.discover}</span>
          <i aria-hidden="true" />
        </button>
      </section>

      <section className="countdown-section" id="countdown">
        <div className="wrap countdown-grid">
          <div>
            <p className="section-kicker">{copy.countdown.kicker}</p>
            <h2>
              {countdown?.finished
                ? copy.countdown.finished
                : copy.countdown.upcoming}
            </h2>
          </div>
          <div
            className="countdown"
            aria-live="polite"
            aria-label={copy.countdown.ariaLabel}
          >
            {units.map(([label, value]) => (
              <div className="time-unit" key={label}>
                <strong>
                  {typeof value === "number"
                    ? String(value).padStart(2, "0")
                    : value}
                </strong>
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
              <p className="section-kicker">{copy.timeline.kicker}</p>
              <h2>
                {copy.timeline.headline}
                <br />
                <em>{copy.timeline.headlineEmphasis}</em>
              </h2>
            </div>
            <p>{copy.timeline.intro}</p>
          </div>

          <div className="timeline">
            {copy.timeline.events.map((event, index) => (
              <article className={index === 1 ? "highlight" : undefined} key={event.time}>
                {index === 1 && (
                  <span className="timeline-total-badge">{copy.timeline.totalBadge}</span>
                )}
                <span className="step">{String(index + 1).padStart(2, "0")}</span>
                <time>{event.time}</time>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="viewing-section" id="viewing">
        <div className="wrap viewing-layout">
          <div className="viewing-title">
            <p className="section-kicker">{copy.viewing.kicker}</p>
            <h2>
              {copy.viewing.headlineFirst}
              <br />
              {copy.viewing.headlineSecond}
            </h2>
            <p className="muted">{copy.viewing.intro}</p>
          </div>
          <div className="guide-cards">
            {copy.viewing.cards.map((card, index) => {
              const GuideIcon = guideIcons[index];
              return (
                <article key={card.label}>
                  <GuideIcon />
                  <span>
                    {String(index + 1).padStart(2, "0")} / {card.label}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="safety-banner">
        <div className="wrap safety-content">
          <div className="safety-eclipse" aria-hidden="true">
            <span />
          </div>
          <div>
            <p className="section-kicker">{copy.safety.kicker}</p>
            <h2>
              {copy.safety.headlineBefore}
              <em>{copy.safety.headlineEmphasis}</em>
              {copy.safety.headlineAfter}
            </h2>
            <p>{copy.safety.body}</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap final-inner">
          <p className="section-kicker">{copy.finalCta.kicker}</p>
          <h2>
            {copy.finalCta.headlineFirst}
            <br />
            {copy.finalCta.headlineSecond}
            <em>{copy.finalCta.headlineEmphasis}</em>
          </h2>
          <a
            href={officialUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.finalCta.link} <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true" />
            <BrandText>{copy.brand}</BrandText>
          </div>
          <p>{copy.footer.timingNote}</p>
          <div>
            <Link to={localizedPath(aboutPath, locale)}>{copy.footer.about}</Link>
            <a
              href={officialUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.council}
            </a>
            <a href="https://eclipses.ign.es/" target="_blank" rel="noreferrer">
              {copy.footer.ign}
            </a>
            {!isArchive && copy.footer.archive && (
              <Link to={localizedPath("/archive/2026", locale)}>{copy.footer.archive}</Link>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}

function AboutPage({ locale, copy, onLocaleChange, isArchive = false }: LocalizedPageProps) {
  const homePath = isArchive ? "/archive/2026" : "/";
  const officialUrl = isArchive ? ECLIPSE_2026_URL : ECLIPSE_2027_URL;

  return (
    <main className="about-page">
      <section className="about-hero">
        {isArchive && (
          <div className="archive-notice">
            <span>{archiveLabels[locale].notice}</span>
            <Link to={localizedPath("/", locale)}>
              {archiveLabels[locale].current} <ArrowIcon />
            </Link>
          </div>
        )}
        <nav className="nav wrap" aria-label={copy.nav.aboutLabel}>
          <Link
            className="brand"
            to={localizedPath(homePath, locale)}
            aria-label={copy.nav.homeLabel}
          >
            <span className="brand-mark" aria-hidden="true" />
            <BrandText>{copy.brand}</BrandText>
          </Link>
          <div className="nav-links">
            <Link to={localizedPath(homePath, locale)}>{copy.nav.eclipseGuide}</Link>
            <a
              href={officialUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.nav.officialInformation}
            </a>
            {!isArchive && copy.nav.archive && (
              <Link to={localizedPath("/archive/2026", locale)}>{copy.nav.archive}</Link>
            )}
          </div>
          <LanguageSwitcher
            locale={locale}
            label={copy.languageSelector.label}
            onChange={onLocaleChange}
          />
          <Link className="nav-cta" to={localizedPath(homePath, locale)}>
            {copy.nav.backHome}
          </Link>
        </nav>

        <div className="about-orbit" aria-hidden="true">
          <div className="sun-glow" />
          <div className="moon-disc" />
        </div>

        <div className="about-intro wrap">
          <p className="eyebrow">
            <span /> {copy.about.eyebrow}
          </p>
          <h1>
            {copy.about.headlineFirst}
            <br />
            <em>{copy.about.headlineEmphasis}</em>
          </h1>
          <p>{copy.about.intro}</p>
        </div>
      </section>

      <section className="about-body">
        <div className="wrap about-grid">
          <div className="about-heading">
            <p className="section-kicker">{copy.about.kicker}</p>
            <h2>
              {copy.about.bodyHeadline}
              <br />
              <em>{copy.about.bodyHeadlineEmphasis}</em>
            </h2>
          </div>
          <div className="about-copy">
            {copy.about.articles.map((article, index) => (
              <article key={article.label}>
                <span>
                  {String(index + 1).padStart(2, "0")} / {article.label}
                </span>
                <h3>{article.title}</h3>
                <p>
                  {article.bodyBefore}
                  {article.bodyStrong && <strong>{article.bodyStrong}</strong>}
                  {article.bodyAfter}
                </p>
              </article>
            ))}
            <Link className="about-return" to={localizedPath(homePath, locale)}>
              {copy.about.returnLink} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <Link className="brand footer-brand" to={localizedPath(homePath, locale)}>
            <span className="brand-mark" aria-hidden="true" />
            <BrandText>{copy.brand}</BrandText>
          </Link>
          <p>{copy.footer.tagline}</p>
          <Link to={localizedPath(homePath, locale)}>{copy.footer.eclipseGuide}</Link>
        </div>
      </footer>
    </main>
  );
}

function LocalizedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [preferredLocale] = useState<Locale>(() =>
    getInitialLocale(location.search),
  );
  const requestedLocale = new URLSearchParams(location.search).get("lang");
  const locale = isLocale(requestedLocale) ? requestedLocale : preferredLocale;
  const isArchiveRoute = location.pathname.startsWith("/archive/2026");
  const copy = isArchiveRoute
    ? archiveTranslations[locale]
    : translations2027[locale];

  useEffect(() => {
    if (isLocale(requestedLocale)) return;

    const params = new URLSearchParams(location.search);
    params.set("lang", locale);
    navigate(
      { pathname: location.pathname, search: params.toString() },
      { replace: true },
    );
  }, [locale, location.pathname, location.search, navigate, requestedLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.meta.description);

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    } catch {
      // The URL still preserves the selection when storage is unavailable.
    }
  }, [copy.meta.description, copy.meta.title, locale]);

  const changeLocale = (nextLocale: Locale) => {
    const params = new URLSearchParams(location.search);
    params.set("lang", nextLocale);
    navigate(
      { pathname: location.pathname, search: params.toString() },
      { replace: true },
    );
  };

  const pageProps = { locale, copy, onLocaleChange: changeLocale };
  const archivePageProps = {
    locale,
    copy: archiveTranslations[locale],
    onLocaleChange: changeLocale,
    isArchive: true,
  };

  return (
    <>
      <RouteScrollTop />
      <Routes>
        <Route path="/" element={<LandingPage {...pageProps} />} />
        <Route path="/about" element={<AboutPage {...pageProps} />} />
        <Route path="/archive/2026" element={<LandingPage {...archivePageProps} />} />
        <Route path="/archive/2026/about" element={<AboutPage {...archivePageProps} />} />
        <Route
          path="*"
          element={<Navigate to={localizedPath("/", locale)} replace />}
        />
      </Routes>
    </>
  );
}

export default function EclipseSite() {
  return (
    <ClientHashRouter>
      <LocalizedRoutes />
    </ClientHashRouter>
  );
}
