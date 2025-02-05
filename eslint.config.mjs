import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint-define-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig({
  // your existing configuration
  rules: {
    "react/jsx-key": "off",
    // other rules...
  },
});

export const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];




