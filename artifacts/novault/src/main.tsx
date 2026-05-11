import React from "react";
import { createRoot } from "react-dom/client";

import { DocsPage } from "@/routes/docs";
import { Index } from "@/routes/index";
import NotFound from "@/pages/not-found";
import "./styles.css";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/docs") {
    return <DocsPage />;
  }

  if (path === "/") {
    return <Index />;
  }

  return <NotFound />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
