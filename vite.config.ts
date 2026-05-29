import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Base path is set so the site works when served from
// https://<user>.github.io/portfolio/ as well as a custom root domain.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.GITHUB_PAGES === "true" ? "/portfolio/" : "/";

  return {
    base,
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
    },
  };
});

