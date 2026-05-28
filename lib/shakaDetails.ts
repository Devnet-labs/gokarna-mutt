export type Amenity =
  | "parking"
  | "wifi"
  | "kitchen"
  | "dining"
  | "ac-rooms"
  | "non-ac-rooms"
  | "library"
  | "puja-hall"
  | "garden"
  | "wheelchair"
  | "wash"
  | "first-aid";

export type ShakaDetail = {
  /** Hero / banner image for the math complex */
  heroImage: string;
  /** Image of the presiding deity */
  deityImage: string;
  /** Long-form description */
  about: string[];
  /** Google Maps embed URL (use the share → embed URL from Maps) */
  mapEmbedUrl: string;
  /** Day-to-day amenities available */
  amenities: Amenity[];
  /** Rooms info */
  rooms: {
    available: boolean;
    totalRooms: number;
    types: { type: string; count: number; tariff: string }[];
  };
  /** Daily darshan / aarti timings */
  timings: { label: string; time: string }[];
  /** Email + Phone — phone overrides the dummyPhone() from shakaMathas.ts */
  contact: { phone: string; email?: string };
};

/**
 * Detail records for individual Shaka Math entries.
 * Keyed by the `n` field from the `shakaMathas` array.
 * Dummy/placeholder for the two requested (1 and 7); extend as more are filled in.
 */
export const shakaDetails: Record<number, ShakaDetail> = {
  // ── 1. Shri Laksmi Narayan Mandir, Varanasi ────────────────────────────────
  1: {
    heroImage: "/images/scene.png",
    deityImage: "/images/seal.png",
    about: [
      "Established in 1475 by H.H. Shree Narayan Teerth, the first of our revered Acharya lineage, the Shri Laksmi Narayan Mandir at Varanasi stands as one of the oldest surviving shaka mathas of the Partagali Jeevottam Math.",
      "Situated along the holy banks of the Ganga in Kashi — the eternal city of Lord Vishwanath — this shrine houses a sacred metal idol of Shri Lakshmi Narayan, installed and consecrated during the original visit of Shree Narayan Teerth Swamiji over five centuries ago.",
      "The math serves as a place of stay, contemplation, and worship for pilgrims of the Goud Saraswat Samaj visiting Kashi for darshan, shraddha karya, and spiritual study."
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231110.42017839976!2d82.85910776744546!3d25.32062576793384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e2a5b9d7c5d%3A0x1c4e6f6e5d5b7c4d!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000",
    amenities: ["parking", "kitchen", "dining", "ac-rooms", "non-ac-rooms", "puja-hall", "wash", "first-aid"],
    rooms: {
      available: true,
      totalRooms: 18,
      types: [
        { type: "AC Deluxe", count: 4, tariff: "₹1,800 / night" },
        { type: "AC Standard", count: 6, tariff: "₹1,200 / night" },
        { type: "Non-AC Standard", count: 8, tariff: "₹650 / night" }
      ]
    },
    timings: [
      { label: "Suprabhata & Mangala Aarti", time: "5:30 AM" },
      { label: "Morning Darshan", time: "6:00 AM – 12:30 PM" },
      { label: "Madhyahna Pooja", time: "11:30 AM" },
      { label: "Evening Darshan", time: "4:30 PM – 8:30 PM" },
      { label: "Shejaarati", time: "8:15 PM" }
    ],
    contact: { phone: "+91 90234 12001", email: "kashi@partagalimath.org" }
  },

  // ── 7. Shri Samsthana Gokarna Partagali Jeevottam Math, Partagali, Goa ────
  7: {
    heroImage: "/images/scene.png",
    deityImage: "/images/seal.png",
    about: [
      "The mool peetha — the headquarters of Shree Samsthan Gokarna Partagali Jeevottam Math — was established in 1656 by H.H. Shree Ramachandra Teerth Swamiji on the sacred banks of the Kushavati river in Partagali, South Goa.",
      "The sanctum houses the swayambhu stone idols of Shri Ramachandra, Sita Mata and Shri Lakshmana, discovered and installed by guidance of Kamadhenu. The complex spans the original prayer hall, the thousand-year-old Vatavraksha kshetra, the Narayan Bhoot shrine, and modern facilities for devotees and students.",
      "Daily nitya pooja, vedic studies, and the great festivals — Ram Navami, Chaturmasya, Adhika Masa Mahotsava, and the annual Pattabhisheka commemoration — anchor the spiritual life here under the guidance of the present Peethadhipati, H.H. Shrimad Vidyadheesh Teerth Shripad Vader Swamiji."
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.5!2d74.0900!3d14.9930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPartagali%2C%20Canacona%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000",
    amenities: [
      "parking",
      "wifi",
      "kitchen",
      "dining",
      "ac-rooms",
      "non-ac-rooms",
      "library",
      "puja-hall",
      "garden",
      "wheelchair",
      "wash",
      "first-aid"
    ],
    rooms: {
      available: true,
      totalRooms: 42,
      types: [
        { type: "AC Suite (Family)", count: 6, tariff: "₹2,500 / night" },
        { type: "AC Deluxe", count: 12, tariff: "₹1,500 / night" },
        { type: "AC Standard", count: 14, tariff: "₹1,000 / night" },
        { type: "Non-AC Standard", count: 10, tariff: "₹500 / night" }
      ]
    },
    timings: [
      { label: "Suprabhata", time: "5:00 AM" },
      { label: "Mangala Aarti", time: "5:30 AM" },
      { label: "Morning Darshan", time: "6:00 AM – 1:00 PM" },
      { label: "Madhyahna Pooja", time: "12:00 PM" },
      { label: "Mahapooja", time: "12:30 PM" },
      { label: "Evening Darshan", time: "4:30 PM – 9:00 PM" },
      { label: "Sandhya Aarti", time: "7:00 PM" },
      { label: "Shejaarati", time: "8:30 PM" }
    ],
    contact: { phone: "+91 8277 197 777", email: "office@partagalimath.org" }
  }
};
