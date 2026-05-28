"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "hi" | "kn";

type Dict = Record<string, { en: string; hi: string; kn: string }>;

export const dict: Dict = {
  // Nav
  "nav.about": { en: "About", hi: "परिचय", kn: "ಪರಿಚಯ" },
  "nav.peethadhipati": { en: "Peethadhipati", hi: "पीठाधिपति", kn: "ಪೀಠಾಧಿಪತಿ" },
  "nav.guruparampara": { en: "Guruparampara", hi: "गुरुपरम्परा", kn: "ಗುರುಪರಂಪರೆ" },
  "nav.partagaliMath": { en: "Partagali Math", hi: "पार्तगाली मठ", kn: "ಪಾರ್ತಗಾಲಿ ಮಠ" },
  "nav.shakaMathas": { en: "Shaka Mathas", hi: "शाखा मठ", kn: "ಶಾಖಾ ಮಠಗಳು" },
  "nav.seva": { en: "Social Initiatives", hi: "सेवा कार्य", kn: "ಸೇವಾ ಕಾರ್ಯಗಳು" },
  "nav.media": { en: "Gallery", hi: "गैलरी", kn: "ಗ್ಯಾಲರಿ" },
  "nav.contact": { en: "Contact", hi: "संपर्क", kn: "ಸಂಪರ್ಕ" },
  "nav.home": { en: "Home", hi: "मुख्य पृष्ठ", kn: "ಮುಖಪುಟ" },

  // Hero
  "hero.invocation": { en: "॥ Shri Gurubhyo Namaha ॥", hi: "॥ श्री गुरुभ्यो नमः ॥", kn: "॥ ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ ॥" },
  "hero.titleA": { en: "Shree Samsthan", hi: "श्री संस्थान", kn: "ಶ್ರೀ ಸಂಸ್ಥಾನ" },
  "hero.titleB": { en: "Gokarn Partagali", hi: "गोकर्ण पार्तगाली", kn: "ಗೋಕರ್ಣ ಪಾರ್ತಗಾಲಿ" },
  "hero.titleC": { en: "Jeevottam Math", hi: "जीवोत्तम मठ", kn: "ಜೀವೋತ್ತಮ ಮಠ" },
  "hero.subtitle": {
    en: "The first Gowd Saraswat Brahmin Vaishnava Math — following the Dvaita order established by Jagadguru Madhvacharya in the 13th century AD.",
    hi: "गौड़ सारस्वत ब्राह्मण वैष्णवों का प्रथम मठ — जगद्गुरु मध्वाचार्य द्वारा १३वीं शताब्दी में स्थापित द्वैत परम्परा का अनुसरण।",
    kn: "ಗೌಡ ಸಾರಸ್ವತ ಬ್ರಾಹ್ಮಣ ವೈಷ್ಣವರ ಪ್ರಥಮ ಮಠ — ಜಗದ್ಗುರು ಮಧ್ವಾಚಾರ್ಯರಿಂದ ೧೩ನೇ ಶತಮಾನದಲ್ಲಿ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ದ್ವೈತ ಪರಂಪರೆಯ ಅನುಸರಣೆ."
  },
  "hero.tagline": {
    en: "On the banks of the Kushavati · Partagali · Goa",
    hi: "कुशावती नदी के तट पर · पार्तगाली · गोवा",
    kn: "ಕುಶಾವತಿ ನದಿಯ ತೀರದಲ್ಲಿ · ಪಾರ್ತಗಾಲಿ · ಗೋವಾ"
  },
  "hero.cta1": { en: "Discover the Math", hi: "मठ के बारे में जानें", kn: "ಮಠವನ್ನು ಅರಿಯಿರಿ" },
  "hero.cta2": { en: "Guru Lineage", hi: "गुरु परम्परा", kn: "ಗುರು ಪರಂಪರೆ" },
  "hero.cta3": { en: "Book Seva", hi: "सेवा बुक करें", kn: "ಸೇವೆ ಬುಕ್ ಮಾಡಿ" },

  // About
  "about.eyebrow": { en: "Heritage", hi: "विरासत", kn: "ಪರಂಪರೆ" },
  "about.title": { en: "The Sacred Heritage", hi: "पवित्र विरासत", kn: "ಪವಿತ್ರ ಪರಂಪರೆ" },
  "about.devanagari": { en: "परिचय", hi: "परिचय", kn: "ಪರಿಚಯ" },
  "about.p1": {
    en: "Shree Samsthan Gokarn Partagali Jeevottam Math is named after its headquarters at Partagali, Goa, and after its third revered Guru, Shreemad Jeevottam Teerth. It stands as the first Gowd Saraswat Brahmin Vaishnava Math, upholding the timeless Dvaita order established by Jagadguru Madhvacharya in the 13th century AD.",
    hi: "श्री संस्थान गोकर्ण पार्तगाली जीवोत्तम मठ का नाम इसके मुख्यालय पार्तगाली, गोवा और इसके तीसरे पूज्य गुरु श्रीमद जीवोत्तम तीर्थ के नाम पर है। यह गौड़ सारस्वत ब्राह्मण वैष्णवों का प्रथम मठ है, जो १३वीं शताब्दी में जगद्गुरु मध्वाचार्य द्वारा स्थापित द्वैत परम्परा का पालन करता है।",
    kn: "ಶ್ರೀ ಸಂಸ್ಥಾನ ಗೋಕರ್ಣ ಪಾರ್ತಗಾಲಿ ಜೀವೋತ್ತಮ ಮಠವು ತನ್ನ ಪ್ರಧಾನ ಕಚೇರಿ ಪಾರ್ತಗಾಲಿ, ಗೋವಾ ಮತ್ತು ತನ್ನ ಮೂರನೇ ಪೂಜ್ಯ ಗುರು ಶ್ರೀಮದ್ ಜೀವೋತ್ತಮ ತೀರ್ಥರ ಹೆಸರನ್ನು ಹೊಂದಿದೆ. ಇದು ಗೌಡ ಸಾರಸ್ವತ ಬ್ರಾಹ್ಮಣ ವೈಷ್ಣವರ ಪ್ರಥಮ ಮಠವಾಗಿದ್ದು, ೧೩ನೇ ಶತಮಾನದಲ್ಲಿ ಜಗದ್ಗುರು ಮಧ್ವಾಚಾರ್ಯರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ದ್ವೈತ ಪರಂಪರೆಯನ್ನು ಅನುಸರಿಸುತ್ತದೆ."
  },
  "about.p2": {
    en: "The Math came into being when Shree Ramchandra Teerth, the tenth Acharya of Phalimaru Muth, fell gravely ill during pilgrimage in the Himalayas. To preserve the unbroken spiritual tradition, a new lineage was instituted — one that has flourished for over five centuries on the banks of the sacred Kushavati river in South Goa.",
    hi: "मठ की स्थापना तब हुई जब फलिमारु मठ के दसवें आचार्य श्री रामचन्द्र तीर्थ हिमालय की तीर्थयात्रा के दौरान गंभीर रूप से अस्वस्थ हो गए। अखंड आध्यात्मिक परम्परा को सुरक्षित रखने के लिए एक नई परम्परा स्थापित की गई — जो पांच शताब्दियों से दक्षिण गोवा की पवित्र कुशावती नदी के तट पर समृद्ध है।",
    kn: "ಫಲಿಮಾರು ಮಠದ ಹತ್ತನೇ ಆಚಾರ್ಯ ಶ್ರೀ ರಾಮಚಂದ್ರ ತೀರ್ಥರು ಹಿಮಾಲಯದ ತೀರ್ಥಯಾತ್ರೆಯ ಸಮಯದಲ್ಲಿ ತೀವ್ರವಾಗಿ ಅಸ್ವಸ್ಥರಾದಾಗ ಈ ಮಠ ಸ್ಥಾಪಿಸಲಾಯಿತು. ಅಖಂಡ ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸಲು ಹೊಸ ಪರಂಪರೆಯನ್ನು ಸ್ಥಾಪಿಸಲಾಯಿತು — ಅದು ಐದು ಶತಮಾನಗಳಿಂದಲೂ ದಕ್ಷಿಣ ಗೋವಾದ ಪವಿತ್ರ ಕುಶಾವತಿ ನದಿಯ ತೀರದಲ್ಲಿ ಸಮೃದ್ಧವಾಗಿದೆ."
  },
  "about.stat1": { en: "Dvaita Order Established (Century AD)", hi: "द्वैत परम्परा स्थापित (शताब्दी ई.)", kn: "ದ್ವೈತ ಪರಂಪರೆ ಸ್ಥಾಪನೆ (ಶತಮಾನ)" },
  "about.stat2": { en: "Acharyas in Unbroken Lineage", hi: "अखंड परम्परा में आचार्य", kn: "ಅಖಂಡ ಪರಂಪರೆಯ ಆಚಾರ್ಯರು" },
  "about.stat3": { en: "Years of Spiritual Service", hi: "वर्षों की आध्यात्मिक सेवा", kn: "ವರ್ಷಗಳ ಆಧ್ಯಾತ್ಮಿಕ ಸೇವೆ" },
  "about.stat4": { en: "Sacred River — Kushavati", hi: "पवित्र नदी — कुशावती", kn: "ಪವಿತ್ರ ನದಿ — ಕುಶಾವತಿ" },

  // Peethadhipati
  "peeth.eyebrow": { en: "Present Peethadhipati", hi: "वर्तमान पीठाधिपति", kn: "ಪ್ರಸ್ತುತ ಪೀಠಾಧಿಪತಿ" },
  "peeth.title": { en: "The Present Peethadhipati", hi: "वर्तमान पीठाधिपति", kn: "ಪ್ರಸ್ತುತ ಪೀಠಾಧಿಪತಿ" },
  "peeth.lineageOrder": { en: "24th in the lineage", hi: "परम्परा में २४वें", kn: "ಪರಂಪರೆಯ ೨೪ನೇ" },
  "peeth.name": { en: "Shri Vidyadheesh Teerth", hi: "श्री विद्याधीश तीर्थ", kn: "ಶ್ರೀ ವಿದ್ಯಾಧೀಶ ತೀರ್ಥ" },
  "peeth.suffix": { en: "Swamiji", hi: "स्वामीजी", kn: "ಸ್ವಾಮೀಜಿ" },
  "peeth.bio": {
    en: "His Holiness assumed the seat of the Peethadhipati in 2021, following the Maha Nirvan of Shri Vidyadhiraja Teerth. He continues the sacred custodianship of the Math, guiding devotees through the principles of Dvaita Vedanta and the eternal teachings of Jagadguru Madhvacharya.",
    hi: "श्री विद्याधिराज तीर्थ के महानिर्वाण के पश्चात् २०२१ में श्रीमज्जगद्गुरु ने पीठाधिपति का पद ग्रहण किया। वे द्वैत वेदान्त के सिद्धान्तों एवं जगद्गुरु मध्वाचार्य की शाश्वत शिक्षाओं के द्वारा भक्तों का मार्गदर्शन करते हुए मठ की पवित्र अभिरक्षा को निरन्तर निभा रहे हैं।",
    kn: "ಶ್ರೀ ವಿದ್ಯಾಧಿರಾಜ ತೀರ್ಥರ ಮಹಾನಿರ್ವಾಣದ ನಂತರ ೨೦೨೧ರಲ್ಲಿ ಶ್ರೀಗಳವರು ಪೀಠಾಧಿಪತಿ ಪದವನ್ನು ಸ್ವೀಕರಿಸಿದರು. ದ್ವೈತ ವೇದಾಂತದ ಸಿದ್ಧಾಂತಗಳು ಮತ್ತು ಜಗದ್ಗುರು ಮಧ್ವಾಚಾರ್ಯರ ಶಾಶ್ವತ ಬೋಧನೆಗಳ ಮೂಲಕ ಭಕ್ತರಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾ ಮಠದ ಪವಿತ್ರ ಸಂರಕ್ಷಣೆಯನ್ನು ಮುಂದುವರಿಸಿದ್ದಾರೆ."
  },
  "peeth.sanyasa": { en: "Sanyasa Deeksha", hi: "संन्यास दीक्षा", kn: "ಸನ್ಯಾಸ ದೀಕ್ಷೆ" },
  "peeth.pattabhi": { en: "Pattabhisheka", hi: "पट्टाभिषेक", kn: "ಪಟ್ಟಾಭಿಷೇಕ" },

  // Guruparampara
  "guru.eyebrow": { en: "Guruparampara", hi: "गुरुपरम्परा", kn: "ಗುರುಪರಂಪರೆ" },
  "guru.title": { en: "The Guru Lineage", hi: "गुरु परम्परा", kn: "ಗುರು ಪರಂಪರೆ" },
  "guru.subtitle": {
    en: "An unbroken chain of twenty-four Acharyas, each a luminary preserving the Dvaita tradition through the centuries.",
    hi: "चौबीस आचार्यों की अखंड श्रृंखला — प्रत्येक ने सदियों से द्वैत परम्परा को संरक्षित रखा।",
    kn: "ಇಪ್ಪತ್ತನಾಲ್ಕು ಆಚಾರ್ಯರ ಅಖಂಡ ಸರಣಿ — ಪ್ರತಿಯೊಬ್ಬರೂ ಶತಮಾನಗಳಿಂದ ದ್ವೈತ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸಿದ ಮಹಾನುಭಾವರು."
  },
  "guru.mahaNirvan": { en: "Maha Nirvan", hi: "महानिर्वाण", kn: "ಮಹಾನಿರ್ವಾಣ" },
  "guru.brindavan": { en: "Brindavan", hi: "बृंदावन", kn: "ಬೃಂದಾವನ" },
  "guru.present": { en: "Present", hi: "वर्तमान", kn: "ಪ್ರಸ್ತುತ" },

  // Math sections
  "math.eyebrow": { en: "Partagali Math", hi: "पार्तगाली मठ", kn: "ಪಾರ್ತಗಾಲಿ ಮಠ" },
  "math.title": { en: "Partagali Math", hi: "पार्तगाली मठ", kn: "ಪಾರ್ತಗಾಲಿ ಮಠ" },
  "math.subtitle": {
    en: "Sacred precincts, awards, and treasures of the Math.",
    hi: "मठ के पवित्र क्षेत्र, पुरस्कार एवं धरोहर।",
    kn: "ಮಠದ ಪವಿತ್ರ ಪ್ರದೇಶಗಳು, ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಪರಂಪರೆಗಳು."
  },
  "math.explore": { en: "Explore", hi: "अन्वेषण करें", kn: "ಅನ್ವೇಷಿಸಿ" },

  // Video
  "video.eyebrow": { en: "Gallery", hi: "गैलरी", kn: "ಗ್ಯಾಲರಿ" },
  "video.title": { en: "Sacred Moments", hi: "पवित्र क्षण", kn: "ಪವಿತ್ರ ಕ್ಷಣಗಳು" },
  "video.subtitle": {
    en: "Glimpses of festivals, rituals, and the daily life of the Math.",
    hi: "उत्सव, अनुष्ठान एवं मठ के दैनिक जीवन की झलकियाँ।",
    kn: "ಉತ್ಸವಗಳು, ಆಚರಣೆಗಳು ಮತ್ತು ಮಠದ ದೈನಂದಿನ ಜೀವನದ ನೋಟಗಳು."
  },
  "video.scrollHint": { en: "Scroll horizontally →", hi: "क्षैतिज स्क्रॉल करें →", kn: "ಅಡ್ಡಲಾಗಿ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ →" },

  // Seva
  "seva.eyebrow": { en: "Seva", hi: "सेवा कार्य", kn: "ಸೇವಾ ಕಾರ್ಯ" },
  "seva.title": { en: "Social Initiatives", hi: "सामाजिक सेवाएँ", kn: "ಸಾಮಾಜಿಕ ಸೇವೆಗಳು" },
  "seva.subtitle": {
    en: "Seva as sadhana — service to humanity is service to the Divine.",
    hi: "सेवा ही साधना — मानव सेवा ही ईश्वर सेवा है।",
    kn: "ಸೇವೆಯೇ ಸಾಧನೆ — ಮಾನವ ಸೇವೆಯೇ ದೈವ ಸೇವೆ."
  },

  // Contact
  "contact.eyebrow": { en: "Contact", hi: "संपर्क", kn: "ಸಂಪರ್ಕ" },
  "contact.title": { en: "Visit · Connect", hi: "दर्शन · संपर्क", kn: "ಭೇಟಿ · ಸಂಪರ್ಕ" },
  "contact.address": { en: "Address", hi: "पता", kn: "ವಿಳಾಸ" },
  "contact.phone": { en: "Telephone", hi: "दूरभाष", kn: "ದೂರವಾಣಿ" },
  "contact.hours": { en: "Darshan Hours", hi: "दर्शन समय", kn: "ದರ್ಶನದ ಸಮಯ" },
  "contact.weekdays": { en: "Sunday – Friday", hi: "रविवार – शुक्रवार", kn: "ಭಾನುವಾರ – ಶುಕ್ರವಾರ" },
  "contact.saturday": { en: "Saturday", hi: "शनिवार", kn: "ಶನಿವಾರ" },
  "contact.river": { en: "On the banks of the Kushavati river, South Goa.", hi: "कुशावती नदी के तट पर, दक्षिण गोवा।", kn: "ಕುಶಾವತಿ ನದಿಯ ತೀರದಲ್ಲಿ, ದಕ್ಷಿಣ ಗೋವಾ." },

  // Shaka Mathas page
  "shaka.title": { en: "Shaka Mathas", hi: "शाखा मठ", kn: "ಶಾಖಾ ಮಠಗಳು" },
  "shaka.subtitle": {
    en: "Thirty-three branch institutions extending the spiritual reach of the Math across India — from Varanasi to Kerala, from 1475 to 2003.",
    hi: "तैंतीस शाखा संस्थान जो वाराणसी से केरल तक, १४७५ से २००३ तक मठ की आध्यात्मिक पहुँच का विस्तार करते हैं।",
    kn: "ಮೂವತ್ತಮೂರು ಶಾಖಾ ಸಂಸ್ಥೆಗಳು — ವಾರಾಣಸಿಯಿಂದ ಕೇರಳದವರೆಗೆ, ೧೪೭೫ರಿಂದ ೨೦೦೩ರವರೆಗೆ ಮಠದ ಆಧ್ಯಾತ್ಮಿಕ ವ್ಯಾಪ್ತಿಯನ್ನು ವಿಸ್ತರಿಸಿವೆ."
  },
  "shaka.founded": { en: "Founded", hi: "स्थापित", kn: "ಸ್ಥಾಪಿತ" },
  "shaka.founder": { en: "Founder", hi: "संस्थापक", kn: "ಸಂಸ್ಥಾಪಕ" },
  "shaka.deity": { en: "Presiding Deity", hi: "मुख्य देवता", kn: "ಮುಖ್ಯ ದೇವತೆ" },
  "shaka.location": { en: "Location", hi: "स्थान", kn: "ಸ್ಥಳ" },
  "shaka.phone": { en: "Contact", hi: "संपर्क", kn: "ಸಂಪರ್ಕ" },

  // Common
  "common.back": { en: "Back", hi: "वापस", kn: "ಹಿಂದೆ" },
  "common.knowMore": { en: "Know More", hi: "और जानें", kn: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ" },
  "common.readMore": { en: "Read More", hi: "विस्तार से पढ़ें", kn: "ಇನ್ನಷ್ಟು ಓದಿ" },
  "footer.invocation": { en: "॥ Shri Krishnarpanamastu ॥", hi: "॥ श्री कृष्णार्पणमस्तु ॥", kn: "॥ ಶ್ರೀ ಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು ॥" },
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।", kn: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ." }
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => dict[k]?.en ?? String(k) });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "en";
    setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof dict): string => dict[key]?.[lang] ?? dict[key]?.en ?? String(key);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useT = () => useContext(LangContext);
