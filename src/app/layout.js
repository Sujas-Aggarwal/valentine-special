import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export const metadata = {
  title: "Forever Together",
  description: "Love Cupid",
  type: "website",
  siteName: "Forever Together",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={font.className} suppressHydrationWarning={true}>
        
        {children}
        <Analytics/>
      {/* <Footer/> */}
      <SpeedInsights/>
      </body>
      </ClerkProvider>

    </html>
  );
}
