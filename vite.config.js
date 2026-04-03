import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['"DM Sans"', "sans-serif"],
        // poppins: ['"DM Poppins"', "sans-serif"],
      },
    },
  },
});
