export default (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    transpilePackages: ["@repo/ui"],
  };

  if (phase === "phase-development-server") {
    return nextConfig;
  }

  return nextConfig;
};
