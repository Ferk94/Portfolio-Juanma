// app/layout.tsx
// import "./globals.css"; // si usás Tailwind o CSS global
import styles from './layout.module.css'
import type { ReactNode } from "react";
import { ViewModeProvider } from "./context/ViewModeContext";
import FooterFerk from "./components/footers/FooterFerk";
import FooterProfessor from './components/footers/FooterProfessor'

export const metadata = {
  title: "Portfolio Baterista",
  description: "Portfolio personal de un baterista profesional.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
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


