import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { urlPathBase } from "./src/utils/constants";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  // TODO: add back if github pages url
  // base: urlPathBase,
});
