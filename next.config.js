/** @type {import('next').NextConfig} */
module.exports = {
  distDir: "build",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};
