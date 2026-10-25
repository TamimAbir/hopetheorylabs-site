import type { SiteContent } from "./types";
import { whatsappLink, whatsappOrderLink } from "./types";

export const bn: SiteContent = {
  header: {
    wordmark: "hope theory labs",
    nav: [
      { label: "কীভাবে কাজ করে", href: "#how" },
      { label: "কাজ", href: "#work" },
      { label: "মূল্য", href: "#pricing" },
      { label: "যোগাযোগ", href: "#contact" },
    ],
    whatsapp: "WhatsApp",
    menu: "মেনু",
    skip: "সরাসরি কন্টেন্টে যান",
    language: "সাইটের ভাষা",
  },
  hero: {
    heading: "বাংলাদেশি ব্যবসার জন্য দ্রুত ওয়েবসাইট।",
    subheading: "মোবাইল-ফার্স্ট সাইট, WhatsApp অর্ডারিংসহ। আগে আমরা আপনার ফ্রি কনসেপ্ট বানিয়ে দিই।",
    primaryCta: "WhatsApp-এ মেসেজ করুন",
    whatsappLink: whatsappOrderLink,
    secondaryCta: "মূল্য দেখুন",
    pricingHref: "#pricing",
    mockupDescription: "WhatsApp অর্ডারিং ফ্লোর অ্যানিমেটেড প্রিভিউ।",
  },
  howItWorks: {
    heading: "কীভাবে কাজ করে",
    steps: [
      "আপনার পণ্য দিয়ে আমরা একটি ফ্রি ওয়ার্কিং কনসেপ্ট বানাই।",
      "আপনি মোবাইলে টেস্ট করেন।",
      "পছন্দ হলে আমরা আপনার ডোমেইনে সেটআপ করে দিই।",
    ],
  },
  whatYouGet: {
    heading: "যা পাবেন",
    items: ["মোবাইলে দ্রুত", "অর্ডার সরাসরি আপনার WhatsApp-এ", "ক্যাশ অন ডেলিভারি", "সহজে আপডেট করা যায়"],
  },
  speedSlider: {
    label: "শুধু উদাহরণ",
    before: "আগে",
    after: "পরে",
    aria: "পেজ লোড স্পিড তুলনা — আগে ও পরে",
  },
  work: {
    heading: "কাজ",
    title: "Rollers Republic",
    tag: "কনসেপ্ট",
    description: "দোকানের আসল ক্যাটালগ দিয়ে বানানো একটি ফ্রি কনসেপ্ট।",
    link: "https://rollers-republic-pitch.vercel.app",
  },
  pricing: {
    heading: "মূল্য",
    base: "ওয়েবসাইট শুরু ৳২৫,০০০ থেকে।",
    founding: "প্রতিষ্ঠাতা ক্লায়েন্ট: ৳১৫,০০০ — সংক্ষিপ্ত রিভিউ ও সাইট দেখানোর অনুমতির বিনিময়ে।",
    cta: "ফ্রি কনসেপ্ট জানতে জিজ্ঞাসা করুন",
  },
  earlyAccess: {
    heading: "শীঘ্রই আসছে",
    tag: "আর্লি অ্যাক্সেস",
    items: ["AI অডিট", "ফরোয়ার্ড-ডিপ্লয়েড AI ইঞ্জিনিয়ারিং"],
    text: "আগ্রহ থাকলে জিজ্ঞাসা করুন।",
  },
  about: {
    heading: "আমাদের সম্পর্কে",
    text: "আমরা ঢাকার একটি ছোট টিম: ফাহাদ ইব্রাহিম ও তামিম আবির। সহজ ও সৎ রাখি।",
  },
  contact: {
    heading: "যোগাযোগ",
    phone: "WhatsApp ০১৭১৮৪৬৩৪৭১",
    phoneHref: whatsappLink,
    email: "hopetheorybd@gmail.com",
    note: "যখন সুবিধা হয় জবাব দেবেন।",
  },
  footer: {
    text: "© ২০২৬ Hope Theory Labs · ঢাকা, বাংলাদেশ · Hope Theory পরিবার থেকে।",
  },
};

export default bn;
