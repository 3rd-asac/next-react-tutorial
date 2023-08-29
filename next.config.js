/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  experimental: {
    modularizelmports: {
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
  },
  webpack: (config) => {
    // 기존의 SVG 규칙을 찾습니다.
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test instanceof RegExp && rule.test.test('.svg')
    );

    // 기존의 SVG 규칙을 수정합니다.
    if (fileLoaderRule) {
      fileLoaderRule.test = /\.(ico|svg|jpg|jpeg|png|gif|webp)$/i; // 필요에 따라 확장자를 조정합니다.
      fileLoaderRule.exclude = /\.inline\.svg$/;
    }

    // SVG 컴포넌트를 위한 새로운 규칙을 추가합니다.
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // 수정된 설정을 반환합니다.
    return config;
  },
};
