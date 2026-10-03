// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */

// // };

// // export default nextConfig;

// import createNextIntlPlugin from "next-intl/plugin";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   poweredByHeader: false,

//   images: {
//     formats: ["image/avif", "image/webp"],
    
//   },
// };

// const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// export default withNextIntl(nextConfig);


import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  images: {
    formats: [
      "image/avif",
      "image/webp",
    ],

    qualities: [
      75,
      90,
    ],
  },
};

const withNextIntl =
  createNextIntlPlugin(
    "./i18n/request.ts",
  );

export default withNextIntl(
  nextConfig,
);