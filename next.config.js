/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_user: "ZefirTheFear",
        mongodb_password: "Nerzul969",
        mongodb_database: "nextJsPrac-dev"
      }
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_user: "ZefirTheFear",
      mongodb_password: "Nerzul969",
      mongodb_database: "nextJsPrac"
    }
  };
};

module.exports = nextConfig;
