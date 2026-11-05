import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.{ts,mts,cts}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side effect imports.
            ["^\\u0000"],
            // Node.js builtins and packages.
            ["^node:", "^@?\\w"],
            // Absolute imports (path alias).
            ["^@/"],
            // Relative imports (should not be used).
            ["^\\."],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^\\.\\.?/",
              message: "Use an absolute import from '@/...' instead of a relative path.",
            },
          ],
        },
      ],
    },
  },
  prettier,
);
