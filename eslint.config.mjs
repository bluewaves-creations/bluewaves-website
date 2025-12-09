import nextConfig from "eslint-config-next";

// Use the flat config shipped with eslint-config-next (v16). We only layer
// an extra ignore for node_modules since the base config already ignores
// build artifacts and generated files.
const config = [
  ...nextConfig,
  {
    ignores: ["node_modules/**"],
  },
];

export default config;
