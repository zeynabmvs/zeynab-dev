import nextConfig from "eslint-config-next";
import tseslint from "typescript-eslint";

const eslintConfig = [
  ...nextConfig,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "warn",
      // "@next/no-unused-imports": "warn",
      // "@typescript-eslint/no-explicit-any": "warn",
      // "@typescript-eslint/explicit-function-return-type": [
      //   "warn",
      //   {
      //     allowExpressions: true,
      //     allowTypedFunctionExpressions: true,
      //   },
      // ],
    },
  },
];

export default eslintConfig;
