/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 暖白背景，不是纯白
        canvas: "#FAF8F4",
        "canvas-soft": "#F4F1EB",
        // 深灰正文，不是纯黑
        ink: "#1F1D1A",
        "ink-soft": "#3A362F",
        // 中灰辅助
        muted: "#7A736A",
        "muted-soft": "#A39B91",
        // 低饱和暖棕 / 陶土色强调
        accent: "#A65A3F",
        "accent-soft": "#C4785B",
        // 卡片 & 边框
        card: "#FFFFFF",
        line: "#E5DFD4",
        "line-soft": "#EFE9DD",
      },
      fontFamily: {
        // 预留接入 Playfair / Lora 的位置,先用系统衬线兜底
        serif: [
          "Playfair Display",
          "Lora",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "Inter",
          "DM Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      letterSpacing: {
        tightish: "-0.012em",
        widish: "0.08em",
      },
      maxWidth: {
        prose: "720px",
        content: "1080px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(31, 29, 26, 0.04)",
        "card-hover": "0 6px 16px rgba(31, 29, 26, 0.08)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
