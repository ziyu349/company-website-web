import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://julusheng.com/sitemap.xml', // 假设未来域名是 julusheng.com，可随时修改
  };
}
