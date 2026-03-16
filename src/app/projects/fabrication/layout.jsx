export const metadata = {
  title: "Best Aluminum & Steel Fabrication Company in Riyadh | TASHKEEL",
  description:
    "TASHKEEL is a professional aluminum and steel fabrication company based in Riyadh, Saudi Arabia. We provide aluminum doors, windows, curtain walls, steel railings, structural frames, glass installations and custom metal fabrication.",

  keywords: [
    "Aluminum fabrication Riyadh",
    "Steel fabrication Saudi Arabia",
    "Metal fabrication company Riyadh",
    "Aluminum doors and windows KSA",
    "Curtain wall installation Riyadh",
    "Steel railings and handrails Saudi Arabia",
    "Structural steel fabrication Riyadh",
    "Glass staircase fabrication KSA",
    "Sliding doors aluminum Saudi Arabia",
    "Custom metal fabrication Riyadh",
    "Tashkeel KSA"
  ],

  // Social Media Previews (Open Graph)
  openGraph: {
    title: "TASHKEEL | Excellence in Aluminum & Steel Fabrication",
    description: "Providing durable and site-ready fabrication solutions for developers across Saudi Arabia.",
    url: "https://jas-properties.vercel.app/fabrication", // আপনার ফ্যাব্রিকেশন পেজ ইউআরএল
    siteName: "Tashkeel Fabrication",
    images: [
      {
        url: "https://i.ibb.co/rGLx1kT4/projects.png", // আপনার দেওয়া প্রজেক্ট প্রিভিউ ইমেজ
        width: 1200,
        height: 630,
        alt: "Tashkeel Fabrication Projects Riyadh",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Preview
  twitter: {
    card: "summary_large_image",
    title: "Aluminum & Steel Fabrication Riyadh | TASHKEEL",
    description: "High-quality custom metal fabrication and glass installations in KSA.",
    images: ["https://i.ibb.co/rGLx1kT4/projects.png"],
  },
};

export default function FabricationLayout({ children }) {
  return <section>{children}</section>;
}