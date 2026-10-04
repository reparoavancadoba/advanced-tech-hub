import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
createRoot(container).render(<App />);

// Remove o loader inicial após a montagem do React
const bootLoader = document.getElementById("app-boot-loader");
if (bootLoader) {
  setTimeout(() => {
    bootLoader.style.opacity = "0";
    bootLoader.style.visibility = "hidden";
    setTimeout(() => bootLoader.remove(), 400);
  }, 150); // leve atraso para garantir o primeiro paint do React
}
