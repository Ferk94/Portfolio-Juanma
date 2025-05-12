// app/page.tsx o app/page.jsx
// "use client";

// import ViewToggle from "./components/ViewToggle";
import HomePage from "./components/HomePage";
// import { useState } from "react";

export default function Page() {
  // const [modo, setModo] = useState("clase");

  return (
    <main>
      {/* <ViewToggle modo={modo} setModo={setModo} /> */}
      <HomePage  />
    </main>
  );
}