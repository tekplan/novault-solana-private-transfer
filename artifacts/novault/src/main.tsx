import React from "react";
import { createRoot } from "react-dom/client";

import { DocsPage } from "@/routes/docs";
import { Index } from "@/routes/index";
import "./styles.css";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/docs") {
    return <DocsPage />;
  }

  return <Index />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
