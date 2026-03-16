
export const metadata = {
  // সার্চ ইঞ্জিনের জন্য টাইটেল (৬০ ক্যারেক্টারের মধ্যে রাখা হয়েছে)
  title: "Luxury Interior Design Services in Dhaka & Riyadh",
  
  // বিস্তারিত ডেসক্রিপশন (এসইও ফ্রেন্ডলি)
  description: "Transform your home or office with JAS Properties' bespoke interior solutions. Specializing in Arabian Majlis, Modern Office, and European Classic designs in Dhaka and Riyadh.",
  
  // এসইও কীওয়ার্ডস
  keywords: [
    "Interior Design Dhaka", 
    "Interior Designer Riyadh", 
    "Luxury Home Decor Bangladesh", 
    "Office Interior Design Riyadh", 
    "Arabian Majlis Design", 
    "European Interior Style", 
    "JAS Properties Interior"
  ],

  // সোশ্যাল মিডিয়া প্রিভিউ (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Bespoke Interior Solutions | JAS Properties",
    description: "Experience luxury and comfort with our premium interior designs. From traditional heritage to modern minimalism.",
    url: "https://jas-properties.vercel.app/projects/interior",
    siteName: "JAS Properties Interior",
    images: [
      {
        url: "https://i.ibb.co/5W3vZbYy/interior.png", // আপনার দেওয়া ইন্টেরিয়র প্রিভিউ লিংক
        width: 1200,
        height: 630,
        alt: "Luxury Interior Design Preview by JAS Properties",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter (X) প্রিভিউ
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Design by JAS Properties",
    description: "Modern and traditional interior solutions tailored to your lifestyle.",
    images: ["https://i.ibb.co/5W3vZbYy/interior.png"],
  },
};

export default function InteriorLayout({ children }) {
  return <section>{children}</section>;
}