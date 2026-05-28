export type Seva = {
  id: string;
  name: string;
  amount: number;
  /** Short tagline shown under the name. */
  tagline?: string;
};

export const sevas: Seva[] = [
  { id: "sampoorna", name: "Sampoorna Adhika Masa Utsava Seva", amount: 250000, tagline: "The complete sponsorship for the Adhika Masa festival" },
  { id: "yajamana", name: "Yajamana Seva", amount: 150000, tagline: "Principal ritual sponsor" },
  { id: "saptaha", name: "Ek Saptaha Pravachana & Anna Santarpana Seva", amount: 100000, tagline: "A week of discourses and devotee meals" },
  { id: "adhika-anna", name: "Adhika Masa Maha Anna Santarpana Seva", amount: 50000, tagline: "Grand Anna Santarpana during Adhika Masa" },
  { id: "anna", name: "Anna Santarpana Seva", amount: 25000, tagline: "Offering of food to devotees" },
  { id: "sarva", name: "Sarva Seva", amount: 10000, tagline: "Comprehensive daily seva sponsorship" },
  { id: "saligrama", name: "Swayam Saligrama Pooja", amount: 5550, tagline: "Personal Saligrama worship" },
  { id: "bhiksha", name: "Bhiksha Seva", amount: 3000, tagline: "Alms offering" },
  { id: "hari-guru", name: "Hari Guru Seva", amount: 1500, tagline: "Devotional service to Hari and Guru" },
  { id: "tulasi", name: "Laksha Tulasi Archana", amount: 1008, tagline: "Offering one lakh Tulasi leaves" },
  { id: "kumkum", name: "Kumkumarchane", amount: 550, tagline: "Sacred Kumkum offering" },
  { id: "appupadaan", name: "Appupadaan", amount: 550, tagline: "Traditional grain offering" }
];

export const formatINR = (n: number): string =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
