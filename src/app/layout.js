import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AppShell from "@/components/global/AppShell";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Kabootar.ai – WhatsApp CRM",
  description: "Manage WhatsApp conversations and leads with Kabootar.ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider waitlistUrl="/">
        {" "}
        <body className={`${poppins.variable} font-poppins antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppShell>{children}</AppShell>
          </ThemeProvider>

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-5HJD7C1GQ4"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5HJD7C1GQ4');
          `}
          </Script>
        </body>
      </ClerkProvider>
    </html>
  );
}
