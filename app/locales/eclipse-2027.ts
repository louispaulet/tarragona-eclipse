import type { Locale, LocaleConfig } from "./types";

export const defaultLocale2027: Locale = "es";

export const translations2027: Record<Locale, LocaleConfig> = {
  es: {
    meta: {
      title: "Eclipse Andalucía 2027",
      description:
        "Guía para vivir el eclipse total de Sol del 2 de agosto de 2027 en el sur de España.",
      imageAlt: "Cartel del Eclipse Andalucía 2027",
    },
    loadingLabel: "Cargando la guía del eclipse",
    brand: "ECLIPSE ANDALUCÍA",
    languageSelector: { label: "Elige el idioma" },
    nav: {
      mainLabel: "Navegación principal",
      aboutLabel: "Navegación de la página sobre el proyecto",
      homeLabel: "Inicio de Eclipse Andalucía",
      timeline: "La franja",
      viewingGuide: "Guía de observación",
      about: "Sobre el proyecto",
      planSpot: "Prepara tu viaje",
      eclipseGuide: "Guía del eclipse",
      officialInformation: "Información oficial",
      backHome: "Volver al inicio",
      archive: "Archivo 2026",
    },
    hero: {
      eyebrow: "La sombra vuelve a España",
      headlineFirst: "El sur",
      headlineSecond: "entra en",
      headlineEmphasis: "totalidad.",
      intro:
        "El 2 de agosto de 2027, la sombra de la Luna cruzará el Estrecho y convertirá la mañana andaluza en noche: de Cádiz a Málaga y hasta el litoral de Granada y Almería.",
      weekday: "LUN",
      date: "02 · 08 · 27",
      time: "≈ 10:45 CEST",
      discover: "Descubre",
      scrollLabel: "Ir a la cuenta atrás",
    },
    countdown: {
      kicker: "Hasta la totalidad",
      upcoming: "La sombra mira al sur.",
      finished: "La sombra ha llegado.",
      ariaLabel: "Cuenta atrás hasta la totalidad",
      units: { days: "días", hours: "horas", minutes: "minutos", seconds: "segundos" },
    },
    timeline: {
      kicker: "2 de agosto de 2027 · Hora oficial peninsular",
      headline: "Una sombra,",
      headlineEmphasis: "cuatro puntos clave.",
      intro:
        "La totalidad solo se ve dentro de la franja. Los horarios y duraciones siguientes son cálculos oficiales del IGN para cada ciudad.",
      totalBadge: "4 M 48 S",
      events: [
        {
          time: "10:45",
          title: "Cádiz · 2 min 54 s",
          description: "Casi toda la provincia queda dentro de la franja de totalidad.",
        },
        {
          time: "10:45",
          title: "Ceuta · 4 min 48 s",
          description: "La totalidad más larga de España, frente al Estrecho de Gibraltar.",
        },
        {
          time: "10:48",
          title: "Málaga · 1 min 48 s",
          description: "Gran parte de la provincia verá el Sol completamente cubierto.",
        },
        {
          time: "10:48",
          title: "Melilla · 4 min 34 s",
          description: "Más de cuatro minutos de totalidad en la costa norteafricana española.",
        },
      ],
    },
    viewing: {
      kicker: "Tu guía de observación",
      headlineFirst: "Planifica ahora.",
      headlineSecond: "Mira con seguridad.",
      intro:
        "El Sol estará alto y agosto suele ofrecer cielos favorables, pero la ubicación exacta y la protección ocular siguen siendo esenciales.",
      cards: [
        {
          label: "Franja",
          title: "Entra en la totalidad.",
          description:
            "Elige un punto dentro de la franja: casi toda Cádiz, gran parte de Málaga, el sur de Granada y Almería, Ceuta o Melilla. Fuera de ella solo verás un eclipse parcial.",
        },
        {
          label: "Seguridad",
          title: "Protege tus ojos.",
          description:
            "Utiliza gafas de eclipse ISO 12312-2 durante todas las fases parciales. Las gafas de sol normales y los filtros caseros no son seguros.",
        },
        {
          label: "Viaje",
          title: "Llega con mucha antelación.",
          description:
            "Reserva pronto, evita desplazarte a última hora y prepara una alternativa cercana. Consulta la meteorología y las indicaciones oficiales en los días previos.",
        },
      ],
    },
    safety: {
      kicker: "La regla que importa",
      headlineBefore: "Sin gafas solo durante la ",
      headlineEmphasis: "totalidad completa",
      headlineAfter: ".",
      body:
        "En cuanto aparezca cualquier franja de luz solar directa, vuelve a ponerte las gafas de eclipse. No mires nunca con prismáticos, cámara o telescopio sin un filtro solar específico colocado en la parte frontal.",
    },
    finalCta: {
      kicker: "Sur de España · 2 de agosto de 2027",
      headlineFirst: "Busca",
      headlineSecond: "la ",
      headlineEmphasis: "sombra.",
      link: "Consulta el mapa oficial del IGN",
    },
    footer: {
      timingNote:
        "Los horarios son locales y pueden variar ligeramente según la ubicación exacta.",
      about: "Sobre esta web",
      council: "Guía oficial 2027",
      ign: "IGN España",
      tagline: "Una mañana. El sur. Hasta 4 minutos y 48 segundos.",
      eclipseGuide: "Guía del eclipse",
      archive: "Tarragona 2026 · Archivo",
    },
    about: {
      eyebrow: "Sobre este proyecto",
      headlineFirst: "La sombra",
      headlineEmphasis: "continúa.",
      intro:
        "Nacida para Tarragona 2026, esta web sigue ahora la trilogía ibérica hasta el eclipse total de 2027 en el sur de España.",
      kicker: "2 de agosto de 2027 · Sur de España",
      bodyHeadline: "Hecha para",
      bodyHeadlineEmphasis: "estar dentro.",
      articles: [
        {
          label: "Propósito",
          title: "Una guía para un solo día.",
          bodyBefore:
            "Cada dato, consejo y enlace existe para ayudar a entender dónde ver la totalidad del 2 de agosto de 2027 y cómo prepararse con seguridad.",
        },
        {
          label: "Lugar",
          title: "El sur ocupa el centro.",
          bodyBefore:
            "La franja cruza el Estrecho de oeste a este: Cádiz, Málaga, el extremo sur de Granada y Almería, además de Ceuta y Melilla. En Europa, la totalidad solo será visible desde España.",
        },
        {
          label: "Archivo",
          title: "Tarragona 2026 sigue aquí.",
          bodyBefore:
            "La guía original se conserva completa en el archivo, con sus cuatro idiomas, horarios locales y recomendaciones para el eclipse que abrió esta historia.",
        },
      ],
      returnLink: "Volver a la guía del eclipse",
    },
  },
  en: {
    meta: {
      title: "Eclipse Andalusia 2027",
      description:
        "A guide to the total solar eclipse of 2 August 2027 in southern Spain.",
      imageAlt: "Eclipse Andalusia 2027 poster",
    },
    loadingLabel: "Loading eclipse guide",
    brand: "ECLIPSE ANDALUSIA",
    languageSelector: { label: "Choose language" },
    nav: {
      mainLabel: "Main navigation",
      aboutLabel: "About navigation",
      homeLabel: "Eclipse Andalusia home",
      timeline: "The path",
      viewingGuide: "Viewing guide",
      about: "About",
      planSpot: "Plan your trip",
      eclipseGuide: "Eclipse guide",
      officialInformation: "Official information",
      backHome: "Back home",
      archive: "2026 archive",
    },
    hero: {
      eyebrow: "The shadow returns to Spain",
      headlineFirst: "The south",
      headlineSecond: "enters",
      headlineEmphasis: "totality.",
      intro:
        "On 2 August 2027, the Moon’s shadow will cross the Strait and turn an Andalusian morning into night—from Cádiz to Málaga and the southern coasts of Granada and Almería.",
      weekday: "MON",
      date: "02 · 08 · 27",
      time: "≈ 10:45 CEST",
      discover: "Discover",
      scrollLabel: "Scroll to countdown",
    },
    countdown: {
      kicker: "Until totality",
      upcoming: "The shadow looks south.",
      finished: "The shadow has arrived.",
      ariaLabel: "Countdown to totality",
      units: { days: "days", hours: "hours", minutes: "minutes", seconds: "seconds" },
    },
    timeline: {
      kicker: "2 August 2027 · Spanish mainland time",
      headline: "One shadow,",
      headlineEmphasis: "four key places.",
      intro:
        "Totality is visible only inside the path. These times and durations are official IGN calculations for each city.",
      totalBadge: "4 M 48 S",
      events: [
        {
          time: "10:45",
          title: "Cádiz · 2 min 54 sec",
          description: "Almost the entire province lies inside the path of totality.",
        },
        {
          time: "10:45",
          title: "Ceuta · 4 min 48 sec",
          description: "Spain’s longest totality, facing the Strait of Gibraltar.",
        },
        {
          time: "10:48",
          title: "Málaga · 1 min 48 sec",
          description: "A large part of the province will see the Sun completely covered.",
        },
        {
          time: "10:48",
          title: "Melilla · 4 min 34 sec",
          description: "More than four minutes of totality on Spain’s North African coast.",
        },
      ],
    },
    viewing: {
      kicker: "Your viewing guide",
      headlineFirst: "Plan now.",
      headlineSecond: "Watch safely.",
      intro:
        "The Sun will be high and August often brings favourable skies, but exact location and eye protection remain essential.",
      cards: [
        {
          label: "Path",
          title: "Get inside totality.",
          description:
            "Choose a place inside the path: almost all of Cádiz, much of Málaga, southern Granada and Almería, Ceuta or Melilla. Outside it, you will see only a partial eclipse.",
        },
        {
          label: "Safety",
          title: "Protect your eyes.",
          description:
            "Use ISO 12312-2 eclipse glasses throughout every partial phase. Ordinary sunglasses and homemade filters are not safe.",
        },
        {
          label: "Travel",
          title: "Arrive very early.",
          description:
            "Book early, avoid last-minute travel and prepare a nearby backup. Check weather and official guidance in the days before the eclipse.",
        },
      ],
    },
    safety: {
      kicker: "The rule that matters",
      headlineBefore: "Glasses off only during ",
      headlineEmphasis: "complete totality",
      headlineAfter: ".",
      body:
        "The moment any direct sunlight appears, put your eclipse glasses back on. Never look through binoculars, a camera or a telescope without a purpose-built solar filter fitted to the front.",
    },
    finalCta: {
      kicker: "Southern Spain · 2 August 2027",
      headlineFirst: "Find",
      headlineSecond: "the ",
      headlineEmphasis: "shadow.",
      link: "Explore the official IGN map",
    },
    footer: {
      timingNote: "Times are local and may vary slightly by exact location.",
      about: "About this site",
      council: "Official 2027 guide",
      ign: "IGN Spain",
      tagline: "One morning. The south. Up to 4 minutes 48 seconds.",
      eclipseGuide: "Eclipse guide",
      archive: "Tarragona 2026 · Archive",
    },
    about: {
      eyebrow: "About this project",
      headlineFirst: "The shadow",
      headlineEmphasis: "continues.",
      intro:
        "Created for Tarragona 2026, this site now follows the Iberian eclipse trio to the 2027 total eclipse in southern Spain.",
      kicker: "2 August 2027 · Southern Spain",
      bodyHeadline: "Made to get",
      bodyHeadlineEmphasis: "inside.",
      articles: [
        {
          label: "Purpose",
          title: "A guide for one day.",
          bodyBefore:
            "Every fact, tip and link exists to explain where to see totality on 2 August 2027 and how to prepare safely.",
        },
        {
          label: "Place",
          title: "The south takes centre stage.",
          bodyBefore:
            "The path crosses the Strait from west to east: Cádiz, Málaga, the southern edge of Granada and Almería, plus Ceuta and Melilla. In Europe, totality will be visible only from Spain.",
        },
        {
          label: "Archive",
          title: "Tarragona 2026 remains here.",
          bodyBefore:
            "The original guide is preserved in full in the archive, with all four languages, local timings and advice from the eclipse that began this story.",
        },
      ],
      returnLink: "Return to the eclipse guide",
    },
  },
  ca: {
    meta: {
      title: "Eclipsi Andalusia 2027",
      description:
        "Guia per viure l’eclipsi total de Sol del 2 d’agost de 2027 al sud d’Espanya.",
      imageAlt: "Cartell de l’Eclipsi Andalusia 2027",
    },
    loadingLabel: "S’està carregant la guia de l’eclipsi",
    brand: "ECLIPSI ANDALUSIA",
    languageSelector: { label: "Tria l’idioma" },
    nav: {
      mainLabel: "Navegació principal",
      aboutLabel: "Navegació de la pàgina sobre el projecte",
      homeLabel: "Inici d’Eclipsi Andalusia",
      timeline: "La franja",
      viewingGuide: "Guia d’observació",
      about: "Sobre el projecte",
      planSpot: "Prepara el viatge",
      eclipseGuide: "Guia de l’eclipsi",
      officialInformation: "Informació oficial",
      backHome: "Torna a l’inici",
      archive: "Arxiu 2026",
    },
    hero: {
      eyebrow: "L’ombra torna a Espanya",
      headlineFirst: "El sud",
      headlineSecond: "entra en",
      headlineEmphasis: "totalitat.",
      intro:
        "El 2 d’agost de 2027, l’ombra de la Lluna creuarà l’Estret i convertirà el matí andalús en nit: de Cadis a Màlaga i fins al litoral sud de Granada i Almeria.",
      weekday: "DL",
      date: "02 · 08 · 27",
      time: "≈ 10:45 CEST",
      discover: "Descobreix",
      scrollLabel: "Ves al compte enrere",
    },
    countdown: {
      kicker: "Fins a la totalitat",
      upcoming: "L’ombra mira cap al sud.",
      finished: "L’ombra ha arribat.",
      ariaLabel: "Compte enrere fins a la totalitat",
      units: { days: "dies", hours: "hores", minutes: "minuts", seconds: "segons" },
    },
    timeline: {
      kicker: "2 d’agost de 2027 · Hora oficial peninsular",
      headline: "Una ombra,",
      headlineEmphasis: "quatre punts clau.",
      intro:
        "La totalitat només es veu dins la franja. Aquests horaris i durades són càlculs oficials de l’IGN per a cada ciutat.",
      totalBadge: "4 M 48 S",
      events: [
        { time: "10:45", title: "Cadis · 2 min 54 s", description: "Gairebé tota la província queda dins la franja de totalitat." },
        { time: "10:45", title: "Ceuta · 4 min 48 s", description: "La totalitat més llarga d’Espanya, davant de l’Estret de Gibraltar." },
        { time: "10:48", title: "Màlaga · 1 min 48 s", description: "Gran part de la província veurà el Sol completament cobert." },
        { time: "10:48", title: "Melilla · 4 min 34 s", description: "Més de quatre minuts de totalitat a la costa nord-africana espanyola." },
      ],
    },
    viewing: {
      kicker: "La teva guia d’observació",
      headlineFirst: "Planifica ara.",
      headlineSecond: "Mira amb seguretat.",
      intro:
        "El Sol serà alt i l’agost sol oferir cels favorables, però la ubicació exacta i la protecció ocular continuen sent essencials.",
      cards: [
        { label: "Franja", title: "Entra en la totalitat.", description: "Tria un punt dins la franja: gairebé tot Cadis, gran part de Màlaga, el sud de Granada i Almeria, Ceuta o Melilla. Fora només veuràs un eclipsi parcial." },
        { label: "Seguretat", title: "Protegeix-te els ulls.", description: "Utilitza ulleres d’eclipsi ISO 12312-2 durant totes les fases parcials. Les ulleres de sol normals i els filtres casolans no són segurs." },
        { label: "Viatge", title: "Arriba-hi molt d’hora.", description: "Reserva aviat, evita desplaçar-te a última hora i prepara una alternativa propera. Consulta el temps i les indicacions oficials els dies previs." },
      ],
    },
    safety: {
      kicker: "La regla que importa",
      headlineBefore: "Sense ulleres només durant la ",
      headlineEmphasis: "totalitat completa",
      headlineAfter: ".",
      body:
        "Quan aparegui qualsevol franja de llum solar directa, torna’t a posar les ulleres d’eclipsi. No miris mai amb prismàtics, càmera o telescopi sense un filtre solar específic col·locat al davant.",
    },
    finalCta: {
      kicker: "Sud d’Espanya · 2 d’agost de 2027",
      headlineFirst: "Busca",
      headlineSecond: "l’",
      headlineEmphasis: "ombra.",
      link: "Consulta el mapa oficial de l’IGN",
    },
    footer: {
      timingNote: "Els horaris són locals i poden variar lleugerament segons la ubicació exacta.",
      about: "Sobre aquest web",
      council: "Guia oficial 2027",
      ign: "IGN Espanya",
      tagline: "Un matí. El sud. Fins a 4 minuts i 48 segons.",
      eclipseGuide: "Guia de l’eclipsi",
      archive: "Tarragona 2026 · Arxiu",
    },
    about: {
      eyebrow: "Sobre aquest projecte",
      headlineFirst: "L’ombra",
      headlineEmphasis: "continua.",
      intro:
        "Nascut per a Tarragona 2026, aquest web segueix ara la trilogia ibèrica fins a l’eclipsi total de 2027 al sud d’Espanya.",
      kicker: "2 d’agost de 2027 · Sud d’Espanya",
      bodyHeadline: "Fet per",
      bodyHeadlineEmphasis: "ser a dins.",
      articles: [
        { label: "Propòsit", title: "Una guia per a un sol dia.", bodyBefore: "Cada dada, consell i enllaç existeix per explicar on veure la totalitat del 2 d’agost de 2027 i com preparar-se amb seguretat." },
        { label: "Lloc", title: "El sud ocupa el centre.", bodyBefore: "La franja creua l’Estret d’oest a est: Cadis, Màlaga, l’extrem sud de Granada i Almeria, a més de Ceuta i Melilla. A Europa, la totalitat només serà visible des d’Espanya." },
        { label: "Arxiu", title: "Tarragona 2026 continua aquí.", bodyBefore: "La guia original es conserva completa a l’arxiu, amb els quatre idiomes, els horaris locals i els consells de l’eclipsi que va iniciar aquesta història." },
      ],
      returnLink: "Torna a la guia de l’eclipsi",
    },
  },
  fr: {
    meta: {
      title: "Éclipse Andalousie 2027",
      description:
        "Guide de l’éclipse totale de Soleil du 2 août 2027 dans le sud de l’Espagne.",
      imageAlt: "Affiche de l’Éclipse Andalousie 2027",
    },
    loadingLabel: "Chargement du guide de l’éclipse",
    brand: "ÉCLIPSE ANDALOUSIE",
    languageSelector: { label: "Choisir la langue" },
    nav: {
      mainLabel: "Navigation principale",
      aboutLabel: "Navigation de la page À propos",
      homeLabel: "Accueil Éclipse Andalousie",
      timeline: "La bande",
      viewingGuide: "Guide d’observation",
      about: "À propos",
      planSpot: "Préparer le voyage",
      eclipseGuide: "Guide de l’éclipse",
      officialInformation: "Informations officielles",
      backHome: "Retour à l’accueil",
      archive: "Archives 2026",
    },
    hero: {
      eyebrow: "L’ombre revient en Espagne",
      headlineFirst: "Le sud",
      headlineSecond: "entre en",
      headlineEmphasis: "totalité.",
      intro:
        "Le 2 août 2027, l’ombre de la Lune traversera le détroit et transformera un matin andalou en nuit, de Cadix à Málaga jusqu’aux côtes sud de Grenade et d’Almería.",
      weekday: "LUN",
      date: "02 · 08 · 27",
      time: "≈ 10:45 CEST",
      discover: "Découvrir",
      scrollLabel: "Aller au compte à rebours",
    },
    countdown: {
      kicker: "Jusqu’à la totalité",
      upcoming: "L’ombre regarde vers le sud.",
      finished: "L’ombre est arrivée.",
      ariaLabel: "Compte à rebours jusqu’à la totalité",
      units: { days: "jours", hours: "heures", minutes: "minutes", seconds: "secondes" },
    },
    timeline: {
      kicker: "2 août 2027 · Heure espagnole péninsulaire",
      headline: "Une ombre,",
      headlineEmphasis: "quatre lieux clés.",
      intro:
        "La totalité n’est visible que dans la bande. Ces horaires et durées sont les calculs officiels de l’IGN pour chaque ville.",
      totalBadge: "4 M 48 S",
      events: [
        { time: "10:45", title: "Cadix · 2 min 54 s", description: "Presque toute la province se trouve dans la bande de totalité." },
        { time: "10:45", title: "Ceuta · 4 min 48 s", description: "La totalité la plus longue d’Espagne, face au détroit de Gibraltar." },
        { time: "10:48", title: "Málaga · 1 min 48 s", description: "Une grande partie de la province verra le Soleil entièrement couvert." },
        { time: "10:48", title: "Melilla · 4 min 34 s", description: "Plus de quatre minutes de totalité sur la côte nord-africaine espagnole." },
      ],
    },
    viewing: {
      kicker: "Votre guide d’observation",
      headlineFirst: "Planifiez maintenant.",
      headlineSecond: "Observez sans risque.",
      intro:
        "Le Soleil sera haut et août offre souvent un ciel favorable, mais l’emplacement exact et la protection des yeux restent essentiels.",
      cards: [
        { label: "Bande", title: "Entrez dans la totalité.", description: "Choisissez un lieu dans la bande : presque tout Cadix, une grande partie de Málaga, le sud de Grenade et d’Almería, Ceuta ou Melilla. À l’extérieur, l’éclipse ne sera que partielle." },
        { label: "Sécurité", title: "Protégez vos yeux.", description: "Utilisez des lunettes d’éclipse ISO 12312-2 pendant toutes les phases partielles. Les lunettes de soleil ordinaires et les filtres artisanaux ne sont pas sûrs." },
        { label: "Voyage", title: "Arrivez très en avance.", description: "Réservez tôt, évitez les déplacements de dernière minute et prévoyez un lieu proche de repli. Consultez la météo et les consignes officielles les jours précédents." },
      ],
    },
    safety: {
      kicker: "La règle essentielle",
      headlineBefore: "Sans lunettes uniquement pendant la ",
      headlineEmphasis: "totalité complète",
      headlineAfter: ".",
      body:
        "Dès que la lumière directe du Soleil réapparaît, remettez vos lunettes d’éclipse. Ne regardez jamais avec des jumelles, un appareil photo ou un télescope sans filtre solaire adapté placé à l’avant.",
    },
    finalCta: {
      kicker: "Sud de l’Espagne · 2 août 2027",
      headlineFirst: "Trouvez",
      headlineSecond: "l’",
      headlineEmphasis: "ombre.",
      link: "Consulter la carte officielle de l’IGN",
    },
    footer: {
      timingNote: "Les horaires sont locaux et peuvent varier légèrement selon l’emplacement exact.",
      about: "À propos de ce site",
      council: "Guide officiel 2027",
      ign: "IGN Espagne",
      tagline: "Un matin. Le sud. Jusqu’à 4 minutes et 48 secondes.",
      eclipseGuide: "Guide de l’éclipse",
      archive: "Tarragone 2026 · Archives",
    },
    about: {
      eyebrow: "À propos de ce projet",
      headlineFirst: "L’ombre",
      headlineEmphasis: "continue.",
      intro:
        "Créé pour Tarragone 2026, ce site suit désormais le trio d’éclipses ibériques jusqu’à l’éclipse totale de 2027 dans le sud de l’Espagne.",
      kicker: "2 août 2027 · Sud de l’Espagne",
      bodyHeadline: "Conçu pour",
      bodyHeadlineEmphasis: "être dedans.",
      articles: [
        { label: "Objectif", title: "Un guide pour une seule journée.", bodyBefore: "Chaque donnée, conseil et lien explique où voir la totalité le 2 août 2027 et comment s’y préparer en toute sécurité." },
        { label: "Lieu", title: "Le sud au premier plan.", bodyBefore: "La bande traverse le détroit d’ouest en est : Cadix, Málaga, l’extrême sud de Grenade et d’Almería, ainsi que Ceuta et Melilla. En Europe, la totalité ne sera visible que depuis l’Espagne." },
        { label: "Archives", title: "Tarragone 2026 reste ici.", bodyBefore: "Le guide original est conservé dans son intégralité, avec ses quatre langues, ses horaires locaux et les conseils de l’éclipse qui a commencé cette histoire." },
      ],
      returnLink: "Retour au guide de l’éclipse",
    },
  },
};
