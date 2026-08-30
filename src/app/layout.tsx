import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prakash Pathak | Full Stack & .NET Developer Portfolio",
  description:
    "Portfolio of Prakash Pathak, a Junior .NET Developer and Full Stack Web Developer. Discover web applications, API integrations, and database-driven solutions built with Next.js, C#, ASP.NET Core, and Microsoft SQL Server.",
  keywords: [
    "Prakash Pathak",
    "Full Stack Developer",
    ".NET Developer",
    "Next.js Developer",
    "ASP.NET Core",
    "React",
    "Web Developer Nepal",
    "Software Engineer Kathmandu",
    "Kathford BCA",
  ],
  authors: [{ name: "Prakash Pathak" }],
  creator: "Prakash Pathak",
  metadataBase: new URL("https://pathakprakash.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pathakprakash.com.np",
    title: "Prakash Pathak | Full Stack & .NET Developer Portfolio",
    description:
      "Full Stack Developer and Junior .NET Developer with expertise in Next.js, React, C#, and ASP.NET Core MVC/Web API.",
    siteName: "Prakash Pathak Portfolio",
    images: [
      {
        url: "/images/profile.webp",
        width: 800,
        height: 800,
        alt: "Prakash Pathak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash Pathak | Full Stack & .NET Developer Portfolio",
    description:
      "Full Stack Developer and Junior .NET Developer with expertise in Next.js, React, C#, and ASP.NET Core MVC/Web API.",
    images: ["/images/profile.webp"],
    creator: "@scilentknight",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Theme detection — must run before body renders to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var activeTheme = theme || systemTheme;
                  if (activeTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        {/* JSON-LD Structured Data — Person schema for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prakash Pathak",
              url: "https://pathakprakash.com.np",
              image: "https://pathakprakash.com.np/images/profile.webp",
              jobTitle: "Full Stack Developer & Junior .NET Developer",
              worksFor: {
                "@type": "Organization",
                name: "Global Tech Nepal Pvt. Ltd.",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Kathford International College",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              sameAs: [
                "https://github.com/scilentknight",
                "https://linkedin.com/in/scilentknight02",
                "https://facebook.com/scilentknight02",
              ],
              knowsAbout: [
                "C#", "ASP.NET Core", "Next.js", "React.js",
                "SQL Server", "JavaScript", "Tailwind CSS",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

