export type Locale = "ca" | "es" | "fr" | "en";

export type LocaleConfig = {
  meta: {
    title: string;
    description: string;
    imageAlt: string;
  };
  loadingLabel: string;
  brand: string;
  languageSelector: {
    label: string;
  };
  nav: {
    mainLabel: string;
    aboutLabel: string;
    homeLabel: string;
    timeline: string;
    viewingGuide: string;
    about: string;
    planSpot: string;
    eclipseGuide: string;
    officialInformation: string;
    backHome: string;
  };
  hero: {
    eyebrow: string;
    headlineFirst: string;
    headlineSecond: string;
    headlineEmphasis: string;
    intro: string;
    weekday: string;
    date: string;
    time: string;
    discover: string;
    scrollLabel: string;
  };
  countdown: {
    kicker: string;
    upcoming: string;
    finished: string;
    ariaLabel: string;
    units: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  timeline: {
    kicker: string;
    headline: string;
    headlineEmphasis: string;
    intro: string;
    totalBadge: string;
    events: Array<{
      time: string;
      title: string;
      description: string;
    }>;
  };
  viewing: {
    kicker: string;
    headlineFirst: string;
    headlineSecond: string;
    intro: string;
    cards: Array<{
      label: string;
      title: string;
      description: string;
    }>;
  };
  safety: {
    kicker: string;
    headlineBefore: string;
    headlineEmphasis: string;
    headlineAfter: string;
    body: string;
  };
  finalCta: {
    kicker: string;
    headlineFirst: string;
    headlineSecond: string;
    headlineEmphasis: string;
    link: string;
  };
  footer: {
    timingNote: string;
    about: string;
    council: string;
    ign: string;
    tagline: string;
    eclipseGuide: string;
  };
  about: {
    eyebrow: string;
    headlineFirst: string;
    headlineEmphasis: string;
    intro: string;
    kicker: string;
    bodyHeadline: string;
    bodyHeadlineEmphasis: string;
    articles: Array<{
      label: string;
      title: string;
      bodyBefore: string;
      bodyStrong?: string;
      bodyAfter?: string;
    }>;
    returnLink: string;
  };
};
