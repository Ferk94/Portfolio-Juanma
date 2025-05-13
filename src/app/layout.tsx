// app/layout.tsx
import "./globals.css"; // si usás Tailwind o CSS global
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
          <div className="flex flex-col min-h-screen">
            {/* <header className="w-full flex justify-between items-center p-4 bg-black text-white">
              <h1 className="text-2xl font-bold">Portfolio Baterista</h1>
              <ViewToggle />
            </header> */}

            <main className="flex-grow">{children}</main>

            {/* <footer className="w-full p-4 bg-neutral-900 text-white text-center text-sm">
              © {new Date().getFullYear()} Hecho con ❤️ por Fer
            </footer> */}
            <FooterProfessor />
            <FooterFerk />
          </div>
        </ViewModeProvider>
            
      </body>
            
    </html>
  );
}


