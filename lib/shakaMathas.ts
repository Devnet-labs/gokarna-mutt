export type Shaka = {
  n: number;
  name: string;
  location: string;
  founder: string;
  year: number;
  deity?: string;
  phone: string;
};

// Deterministic dummy phone number — same input always produces same number, so it's
// stable across renders. Replace with real data when available.
function dummyPhone(n: number): string {
  const seed = (n * 1234567) % 10_000_000_000;
  const s = String(seed).padStart(10, "0").slice(0, 10);
  const prefix = "9" + s.slice(1, 5);
  const suffix = s.slice(5);
  return `+91 ${prefix} ${suffix}`;
}

const base: Omit<Shaka, "phone">[] = [
  { n: 1, name: "Shri Laksmi Narayan Mandir", location: "Varanasi, UP", founder: "H.H. Narayana Teerth - 1", year: 1475, deity: "Shri Lakshmi Narayan (Metal)" },
  { n: 2, name: "Shri Vader Math", location: "Bhatkal", founder: "H.H. Narayana Teerth - 1", year: 1475, deity: "Shri Gopalakrishna Rukmin Satyabhama (Stone)" },
  { n: 3, name: "Shree Jeevottam Math", location: "Gokarna", founder: "H.H. Jeevottam Teerth - 3", year: 1545, deity: "Shri Bhoovijaya Vitthal (Metal)" },
  { n: 4, name: "Shri Gokarn Math", location: "Basrus, Udupi", founder: "H.H. Jeevottam Teerth - 3", year: 1550, deity: "Shri Digvijaya Vitthal (Metal)" },
  { n: 5, name: "Shri Laksmi Narayan Mandir", location: "Bicholim, Goa", founder: "H.H. Anujeevottam Teerth - 4", year: 1637, deity: "Shri Lakshmi Narayan (Chandrakant Shila)" },
  { n: 6, name: "Shri Veera Vital Math", location: "Ankola, UK 581 314", founder: "H.H. Digvijaya Ramachandra Teerth - 6", year: 1649, deity: "Shri Veera Vittal (Metal)" },
  { n: 7, name: "Shri Samsthana Gokarna Partagali Jeevottam Math", location: "Partagali, Goa", founder: "H.H. Ramachandra Teerth", year: 1656, deity: "Shri Ramachandra Seeta Laxman (Stone)" },
  { n: 8, name: "Shri Maruti Mandir (Rivon Math)", location: "Rivona, Goa", founder: "H.H. Ramachandra Teerth - 6", year: 1656, deity: "Shri Maruti (Stone)" },
  { n: 9, name: "Shri Gokarna Math", location: "Mangalore", founder: "H.H. Ramachandra Teerth - 6", year: 1660, deity: "Shri Veera Vitthal (Metal)" },
  { n: 10, name: "Shri Veera Vittal Math", location: "Balli, Goa", founder: "H.H. Ramakanth Teerth - 11", year: 1730, deity: "Shri Veera Vitthal (Stone)" },
  { n: 11, name: "Shri Veera Vittal Math", location: "Mudigeri, Karwar", founder: "H.H. Kamalakanth Teerth - 12", year: 1755, deity: "Shri Veera Vitthal (Metal)" },
  { n: 12, name: "Shri Laxmi Narayan Venkatraman Math", location: "Yellapur", founder: "H.H. Bhoovijayaramachandra Teerth - 14", year: 1790, deity: "Shri Laxminarayan (Metal)" },
  { n: 13, name: "Shri Gopalakrishna Math", location: "Avarsa Ankola (NK)", founder: "H.H. Bhoovijaya Ramachandra Teerth - 14", year: 1801, deity: "Shri Gopal Krishna (Metal)" },
  { n: 14, name: "Shri Laxmi Venkatraman Devasthan", location: "Venkatapur, Bhatkal", founder: "H.H. Laxminath Teerth - 16", year: 1817, deity: "Shri Venkatramana (Stone)" },
  { n: 15, name: "Shri Veera Vittal Math", location: "Kuikoliem, Ponda, Goa", founder: "H.H. Poornaprajna Teerth - 18", year: 1840, deity: "Shri Veera Vitthal (Stone)" },
  { n: 16, name: "Shri Gokarn Math", location: "Rameshwaram, Tamil Nadu", founder: "H.H. Padmanabha Teerth - 19", year: 1865, deity: "Shri Maruti (Stone)" },
  { n: 17, name: "Shri Bete Venkatrama Temple", location: "Honavar (N.K.)", founder: "Shri Indirakant Teerth - 20", year: 1922, deity: "Shri Venkatramana (Stone)" },
  { n: 18, name: "Shri Muralidhara Math", location: "Karwar (N.K.)", founder: "Shri Indirakant Teerth - 20", year: 1923, deity: "Shri Muralidhar Krishna (Stone)" },
  { n: 19, name: "Shri Venkatramana Temple, Shri Malyar Math", location: "Gangolli", founder: "Shri Dwarakanath Teerth - 22", year: 1945, deity: "Shri Venkatramana (Stone)" },
  { n: 20, name: "Shri Rama Mandir", location: "Wadala, Mumbai", founder: "Shri Dwarakanath Teerth - 22", year: 1955, deity: "Shri Rama Laxman Seetha (Stone)" },
  { n: 21, name: "Shri Dwarakanath Bhavan", location: "Basavangudi, Bangalore", founder: "Shri Dwarakanath Teerth - 22", year: 1957 },
  { n: 22, name: "Shri Vidyadhiraj Bhavan", location: "Vasco-Da-Gama, Goa", founder: "Shri Dwarakanath Teerth - 22", year: 1963 },
  { n: 23, name: "Shri Laxmi Venkatesh Math", location: "Banasale, Manki, Honavar", founder: "Shri Vidyadhiraj Teerth - 23", year: 1983, deity: "Shri Laxmi Venkatesh (Stone)" },
  { n: 24, name: "Shrimad Indirakant Guru Mandir", location: "Kayamkulam, Kerala", founder: "Shri Vidyadhiraj Teerth - 23", year: 1983, deity: "Shri Indirakant Teertha Swamiji (Oil Portrait)" },
  { n: 25, name: "Shri Jeevottam Math", location: "Badarinath, Uttaranchal", founder: "Shri Vidyadhiraj Teerth - 23", year: 1989, deity: "Shri Shreedevi Bhoodevi & Venkatesh (Metal)" },
  { n: 26, name: "Shri Laxmi Narayan Venkatraman Temple", location: "Dandeli (N.K.)", founder: "Shri Vidyadhiraj Teerth - 23", year: 1992, deity: "Shri Laxmi Venkatraman, Maruti (Stone)" },
  { n: 27, name: "Shri Vidyadhiraj Sabhagriha", location: "Belgaum", founder: "Shri Vidyadhiraj Teerth - 23", year: 1992 },
  { n: 28, name: "Shri Vidyadhiraj Bhavan", location: "Margo, Goa", founder: "Shri Vidyadhiraj Teerth - 23", year: 1993 },
  { n: 29, name: "Shri Vidyadhiraj Bhavan", location: "Hubli", founder: "Shri Vidyadhiraj Teerth - 23", year: 1996 },
  { n: 30, name: "Shri Jeevottam Math", location: "Porvorim, Goa", founder: "Shri Vidyadhiraj Teerth - 23", year: 2000 },
  { n: 31, name: "Shri Laxmi Narayan Bhavan", location: "Chetan Nagar, Nasik", founder: "Shri Vidyadhiraj Teerth - 23", year: 2002, deity: "Shri Laxmi Narayan (Chandrakant Shila)" },
  { n: 32, name: "Shri Jeevottam Sabhagraha", location: "Kandlur, Kundapur Udupi", founder: "Shri Vidyadhiraj Teerth - 23", year: 2002, deity: "Shri Rukmini Vitthal (Stone)" },
  { n: 33, name: "Shri Vidyadhiraj Sabhagraha", location: "Bhadravati", founder: "Shri Vidyadhiraj Teerth - 23", year: 2003, deity: "Shri Vitthal (Oil Portrait)" }
];

export const shakaMathas: Shaka[] = base.map((m) => ({ ...m, phone: dummyPhone(m.n) }));
