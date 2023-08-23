/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    images: {
        // next/iamge 사용 원격 url 허용을 나타냄
        domains: ["thx.sfo2.cdn.digitaloceanspaces.com"],
        loader: "default",
    },
    // },
    // webpack(config) {
    //     // svg 파일을 react 컴포넌트로 만들어준다.
    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         issuer: /\.(js|ts|jsx|tsx)$/,
    //         use: ["@svgr/webpack"],
    //     });
    //     return config;
    // },
};

// https://thx.sfo2.cdn.digitaloceanspaces.com/wr/coverimages/i_11/%E3%85%87%E3%84%B9%E3%84%B4_11.jpg
