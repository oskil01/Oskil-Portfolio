import "./globals.css";

import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from '@/components/ui/StairTransition';

const Layout = ({ children }) => {
  return (
    <html lang="fr">
      <head>
        {/* favicon personnalisé */}
        <link 
          rel="icon" 
          href="/assests/oskil_favicon.png" 
          type="image/png"
          sizes="64x64"
        />
      </head>
      <body 
        className="antialiased" 
        style={{ 
          fontFamily: 'Bahnschrift, sans-serif' 
        }}
      >
        <Header />
        {/* Stairs animation */}
        <StairTransition />
        {/* Page transition */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
};

export const metadata = {
  title: "Oskil",
  description: "Generated by Oskil",
};

export default Layout;
