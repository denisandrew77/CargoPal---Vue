import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-alert": "error",
    },
  },

  // Spread in recommended JS rules
  ...pluginJs.configs.recommended,

  // Spread in Vue flat config
  ...pluginVue.configs["flat/recommended"],

  // Prettier config (added as-is)
  prettierConfig
];
