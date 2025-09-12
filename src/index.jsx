import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

// Global reveal-on-scroll observer
const setupRevealObserver = () => {
  if (typeof window === "undefined") return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const register = () => {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  };

  window.addEventListener("load", register);
  const mo = new MutationObserver(register);
  mo.observe(document.documentElement, { childList: true, subtree: true });
};

setupRevealObserver();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
