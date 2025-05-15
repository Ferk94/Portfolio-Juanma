// app/layout.tsx
import "./globals.css"; // si usás Tailwind o CSS global
import styles from './layout.module.css'
import type { ReactNode } from "react";
import { ViewModeProvider } from "./context/ViewModeContext";
import FooterFerk from "./components/footers/FooterFerk";
import FooterProfessor from './components/footers/FooterProfessor'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // normal, semi-bold, bold
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Clases de Batería',
  description: 'Aprendé batería con Juan Manuel Belluschi',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <ViewModeProvider>
          <div className={styles.containerLayout}>
            <main className={styles.mainContent}>
              {/* <div style={{ border: "2px solid blue", minHeight: "200px" }}>
                [DEBUG] Dentro de main
              </div> */}
              {children}
              </main>
            <FooterProfessor />
            <FooterFerk />
          </div>
        </ViewModeProvider>
      </body>      
    </html>
  );
}


