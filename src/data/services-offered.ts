export const services = [
  {
    title: "Threading",
    desc: "Precise hair removal technique for shaping eyebrows and facial hair.",
    items: ["Eyebrow Shaping", "Upper Lip", "Forehead Cleanup"],
    duration: "10 - 20 min",
    gender: "female",
    price: 40,
  },
  {
    title: "Head Massage",
    desc: "Relaxing head massage to relieve stress and improve blood circulation.",
    items: ["Oil Massage", "Stress Relief", "Scalp Relaxation"],
    duration: "20 - 30 min",
    gender: "female",
    price: 199,
  },
  {
    title: "Foot Massage",
    desc: "Soothing foot therapy that relaxes muscles and improves circulation.",
    items: ["Pressure Point Therapy", "Relaxation Massage", "Foot Care"],
    duration: "30 - 45 min",
    gender: "female",
    price: 249,
  },
  {
    title: "Face D-Tan",
    desc: "Removes tan and restores natural skin brightness and glow.",
    items: ["Tan Removal Pack", "Skin Brightening", "Hydration"],
    duration: "30 - 45 min",
    gender: "female",
    price: 399,
  },
  {
    title: "Hair Cut",
    desc: "Professional haircut tailored to your face shape and style.",
    items: ["Consultation", "Hair Styling", "Finishing Touch"],
    duration: "30 - 45 min",
    gender: "female",
    price: 350,
  },
  {
    title: "Pedicure",
    desc: "Deep cleansing and nourishment for soft, healthy feet.",
    items: ["Foot Soak", "Scrub & Exfoliation", "Nail Care"],
    duration: "45 - 60 min",
    gender: "female",
    price: 599,
  },
  {
    title: "Pedicure Manicure",
    desc: "Complete hand and foot care for a polished and refreshed look.",
    items: ["Nail Shaping", "Cuticle Care", "Massage & Polish"],
    duration: "60 - 75 min",
    gender: "female",
    price: 999,
  },
  {
    title: "Hair Spa",
    desc: "Deep conditioning treatment to repair and nourish your hair.",
    items: ["Hair Mask", "Scalp Massage", "Steam Treatment"],
    duration: "45 - 60 min",
    gender: "female",
    price: 599,
  },
  {
    title: "Shaving",
    desc: "Clean and smooth shave with skin-friendly techniques.",
    items: ["Pre-Shave Prep", "Smooth Shave", "Aftercare"],
    duration: "15 - 20 min",
    gender: "male",
    price: 60,
  },
  {
    title: "Beard Set",
    desc: "Stylish beard trimming and shaping for a sharp look.",
    items: ["Beard Trim", "Shape & Style", "Finishing"],
    duration: "20 - 30 min",
    gender: "male",
    price: 110,
  },
  {
    title: "Hair Cut",
    desc: "Modern haircut with styling to suit your personality.",
    items: ["Consultation", "Cut & Style", "Finishing"],
    duration: "25 - 40 min",
    gender: "male",
    price: 249,
  },
  {
    title: "Body Spa",
    desc: "Full-body relaxation therapy to refresh and rejuvenate your body.",
    items: ["Body Massage", "Relaxation Therapy", "Aroma Oils"],
    duration: "60 - 90 min",
    gender: "male",
    price: 999,
  },
] satisfies {
  title: string;
  desc: string;
  items: string[];
  duration: string;
  gender: "male" | "female" | "unisex";
  price: number;
}[];

export const servicesPreview = [
  { title: "Massage Therapy", desc: "Relieve stress & tension" },
  { title: "Facial Care", desc: "Glow & rejuvenate skin" },
  { title: "Body Spa", desc: "Full body relaxation" },
  { title: "Aromatherapy", desc: "Heal with essential oils" },
];
