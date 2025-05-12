// app/layout.tsx
import "./globals.css"; // si usás Tailwind o CSS global
import type { ReactNode } from "react";
import { ViewModeProvider } from "./context/ViewModeContext";
import ViewToggle from "./components/ViewToggle";

export const metadata = {
  title: "Portfolio Baterista",
  description: "Portfolio personal de un baterista profesional.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ViewModeProvider>
          <div className="min-h-screen flex flex-col">
            {/* <header className="w-full flex justify-between items-center p-4 bg-black text-white">
              <h1 className="text-2xl font-bold">Portfolio Baterista</h1>
              <ViewToggle />
            </header> */}

            <main className="flex-1">{children}</main>

            <footer className="w-full p-4 bg-neutral-900 text-white text-center text-sm">
              © {new Date().getFullYear()} Hecho con ❤️ por Fer
            </footer>
          </div>
        </ViewModeProvider>
      </body>
    </html>
  );
}


