import { Poppins } from "next/font/google";
import "./globals.css"; 
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800", "900"],
  subsets: ["latin"],
});

// Production Level Metadata
export const metadata = {
  metadataBase: new URL('https://jas-properties.vercel.app'),
  title: {
    default: "JAS Properties | Luxury Real Estate & Fabrication",
    template: "%s | JAS Properties"
  },
  description: "JAS Properties Ltd. offers premium apartments in Uttara, Dhaka, and Tashkeel provides elite aluminum & steel fabrication in Riyadh. Discover luxury living and architectural excellence.",
  keywords: [
    "JAS Properties", "Real Estate Uttara", "Apartments in Uttara Dhaka", 
    "Uttara Diabari Apartments", "Premium Flats Uttara", "Aluminum Fabrication Riyadh", 
    "Steel Solutions Saudi Arabia", "Luxury Interior Dhaka"
  ],
  authors: [{ name: "JAS Properties Ltd" }],
  creator: "JAS Properties",
  publisher: "JAS Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // --- Google Search Console Verification ---
  verification: {
    google: "MqvESlGuOFtGV22s9T_JZ7clnjwDmbhj6T1w4Qgb7Uo",
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "JAS Properties & Tashkeel | Crafting Dream Spaces",
    description: "Premium Real Estate in Dhaka & Industrial Fabrication Excellence in Riyadh.",
    url: "https://jas-properties.vercel.app",
    siteName: "JAS Properties",
    images: [
      {
        url: "https://i.ibb.co/NnYM6Vw4/home.png", 
        width: 1200,
        height: 630,
        alt: "JAS Properties Home Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "JAS Properties | Luxury Living Solutions",
    description: "Premium apartments in Uttara and Elite Steel Fabrication in Riyadh.",
    images: ["https://i.ibb.co/NnYM6Vw4/home.png"],
  },

  // Icons (Favicon & Logo)
  icons: {
    icon: "https://i.ibb.co/nNR6tMr3/jas.png",
    apple: "https://i.ibb.co/nNR6tMr3/jas.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>
        
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100svh-317px)]">
          {children}
        </main>
        
        <footer className="py-2 md:w-11/12 mx-auto">
          <Footer />
        </footer> 
      </body>
    </html>
  );
}