import { defineConfig } from 'vitepress';
import { BRANDS } from '../data/brands';
import { getFaqSchema, getBreadcrumbSchema } from './schemaHelper';

export default defineConfig({
  title: '机场cloud',
  description: '2026 高性价比机场推荐与测速排行指南 | 专注稳定专线、便宜机场、VPN加速器对比与 Clash Verge 教程',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://jichangcloud.world'
  },
  markdown: {
    config: (md) => {
      const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const hrefIndex = tokens[idx].attrIndex('href');
        if (hrefIndex >= 0) {
          const href = tokens[idx].attrs[hrefIndex][1];
          // For any external link, enforce SEO risk control: target="_blank" and rel="nofollow sponsored noopener"
          if (/^https?:\/\//i.test(href) && !href.includes('jichangcloud.world')) {
            tokens[idx].attrSet('target', '_blank');
            tokens[idx].attrSet('rel', 'nofollow sponsored noopener');
          }
        }
        return defaultRender(tokens, idx, options, env, self);
      };
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/avatar.webp' }],
    ['meta', { name: 'author', content: '机场cloud 专业评测实验室' }],
    ['meta', { name: 'keywords', content: '机场推荐,机场排行,性价比机场,稳定机场,便宜机场,免费梯子,科学上网,VPN推荐,免费VPN,手机VPN,VPN软件评测,加速器对比,Clash Verge,Clash Meta,免费节点,机场FAQ,跑路预警' }],
    ['meta', { property: 'og:site_name', content: '机场cloud' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }]
  ],
  transformHead({ pageData }) {
    const head = [];

    // 1. Strict Canonical Link Tag (Normalized across cleanUrls)
    let cleanPath = pageData.relativePath.replace(/\.md$/, '');
    if (cleanPath === 'index') {
      cleanPath = '';
    } else if (cleanPath.endsWith('/index')) {
      cleanPath = cleanPath.replace(/\/index$/, '/');
    }
    const url = `https://jichangcloud.world/${cleanPath}`;

    head.push([
      'link',
      { rel: 'canonical', href: url }
    ]);

    // 2. Comprehensive Open Graph & Twitter Card SEO Head System
    const pageTitle = pageData.title ? `${pageData.title} | 机场cloud` : '机场cloud - 2026 高性价比机场推荐与测速排行指南';
    const pageDesc = pageData.description || '2026 高性价比机场推荐与测速排行指南 | 专注稳定专线、便宜机场、VPN加速器对比与 Clash Verge 教程';
    const pageImage = 'https://jichangcloud.world/avatar.webp';

    head.push(['meta', { property: 'og:title', content: pageTitle }]);
    head.push(['meta', { property: 'og:description', content: pageDesc }]);
    head.push(['meta', { property: 'og:url', content: url }]);
    head.push(['meta', { property: 'og:image', content: pageImage }]);
    head.push(['meta', { property: 'og:locale', content: 'zh_CN' }]);

    head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }]);
    head.push(['meta', { name: 'twitter:title', content: pageTitle }]);
    head.push(['meta', { name: 'twitter:description', content: pageDesc }]);
    head.push(['meta', { name: 'twitter:image', content: pageImage }]);

    // Article timestamps
    if (pageData.relativePath !== 'index.md') {
      head.push(['meta', { property: 'article:published_time', content: '2026-01-01T08:00:00+08:00' }]);
      head.push(['meta', { property: 'article:modified_time', content: '2026-11-16T12:00:00+08:00' }]);
      head.push(['meta', { property: 'article:author', content: '机场cloud网络实验室' }]);
    }

    // 3. Search Engine Verification Hooks (Supports process.env or direct replacement)
    const googleVerify = process.env.GOOGLE_SITE_VERIFICATION || '';
    const bingVerify = process.env.BING_SITE_VERIFICATION || '';
    const shenmaVerify = process.env.SHENMA_SITE_VERIFICATION || '';
    const baiduVerify = process.env.BAIDU_SITE_VERIFICATION || '';

    if (googleVerify) head.push(['meta', { name: 'google-site-verification', content: googleVerify }]);
    if (bingVerify) head.push(['meta', { name: 'msvalidate.01', content: bingVerify }]);
    if (shenmaVerify) head.push(['meta', { name: 'shenma-site-verification', content: shenmaVerify }]);
    if (baiduVerify) head.push(['meta', { name: 'baidu-site-verification', content: baiduVerify }]);

    // 4. Schema.org BreadcrumbList microdata
    const breadcrumbSchema = getBreadcrumbSchema(pageData.relativePath, pageData.title);
    if (breadcrumbSchema) {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(breadcrumbSchema)
      ]);
    }

    // Global Schema
    if (pageData.relativePath === 'index.md') {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://jichangcloud.world/#website',
              'url': 'https://jichangcloud.world/',
              'name': '机场cloud',
              'description': '以实测数据为核心的高品质科学上网、机场测速与客户端指南平台',
              'publisher': {
                '@type': 'Organization',
                'name': '机场cloud',
                'url': 'https://jichangcloud.world/'
              }
            }
          ]
        })
      ]);
    } else if (pageData.relativePath.startsWith('brands/') && pageData.relativePath !== 'brands/index.md') {
      const slug = pageData.relativePath.replace('brands/', '').replace(/\.md$/, '');
      const brand = BRANDS.find(b => b.slug === slug);
      if (brand) {
        head.push([
          'script',
          { type: 'application/ld+json' },
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': brand.name,
            'description': brand.highlight,
            'brand': {
              '@type': 'Brand',
              'name': brand.name
            },
            'review': {
              '@type': 'Review',
              'reviewRating': {
                '@type': 'Rating',
                'ratingValue': String(brand.rating),
                'bestRating': '10'
              },
              'author': {
                '@type': 'Organization',
                'name': '机场cloud网络实验室'
              }
            }
          })
        ]);
      }
    } else {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': pageData.title || '机场cloud 深度专栏',
          'description': pageData.description || '高品质科学上网指南与实测数据分析',
          'url': url,
          'image': 'https://jichangcloud.world/avatar.webp',
          'datePublished': '2026-01-01T08:00:00+08:00',
          'dateModified': '2026-11-16T12:00:00+08:00',
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': url
          },
          'publisher': {
            '@type': 'Organization',
            'name': '机场cloud',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://jichangcloud.world/avatar.webp'
            }
          },
          'author': {
            '@type': 'Organization',
            'name': '机场cloud网络实验室'
          }
        })
      ]);
    }

    // Automatically inject Schema.org FAQPage JSON-LD microdata when FAQs are present on the page
    const faqSchema = getFaqSchema(pageData.relativePath);
    if (faqSchema) {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(faqSchema)
      ]);
    }

    return head;
  },
  themeConfig: {
    logo: '/avatar.webp',
    siteTitle: '机场cloud',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索评测 / 节点 / 教程',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关评测或教程',
                resetButtonTitle: '清除搜索条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      {
        text: '机场推荐',
        link: '/recommend/',
        items: [
          { text: '机场推荐总览', link: '/recommend/' },
          { text: '综合机场推荐', link: '/recommend/best' },
          { text: '2026 机场排行榜', link: '/recommend/ranking' },
          { text: '高性价比机场', link: '/recommend/cost-effective' },
          { text: '稳定专线机场', link: '/recommend/stable' },
          { text: '便宜低价机场', link: '/recommend/cheap' },
          { text: '免费梯子与试用', link: '/recommend/free-ladder' },
          { text: '科学上网入门科普', link: '/recommend/overview' }
        ]
      },
      {
        text: 'VPN 与加速器',
        link: '/vpn/',
        items: [
          { text: 'VPN 与加速器总览', link: '/vpn/' },
          { text: 'VPN 推荐指南', link: '/vpn/recommend' },
          { text: '免费 VPN 实测与风险', link: '/vpn/free' },
          { text: '手机 VPN 选型配置', link: '/vpn/mobile' },
          { text: 'VPN 软件深度评测', link: '/vpn/reviews' },
          { text: 'VPN 加速器应用场景', link: '/vpn/accelerator' },
          { text: '加速器 vs 机场深度对比', link: '/vpn/compare' },
          { text: '好用的海外加速网络', link: '/vpn/best' }
        ]
      },
      {
        text: 'Clash 客户端',
        link: '/clash/',
        items: [
          { text: 'Clash 客户端中心', link: '/clash/' },
          { text: 'Clash 推荐选型指南', link: '/clash/recommend' },
          { text: 'Clash Verge Rev 详解', link: '/clash/verge' },
          { text: 'Clash Verge 官方下载', link: '/clash/verge-download' },
          { text: 'Clash Verge 订阅导入', link: '/clash/verge-subscription' },
          { text: 'Clash Meta / Mihomo 内核', link: '/clash/meta' },
          { text: 'Clash 全平台图文教程', link: '/clash/tutorial' },
          { text: 'Clash 常见故障排查', link: '/clash/troubleshooting' }
        ]
      },
      {
        text: '资源与情报',
        link: '/resources/',
        items: [
          { text: '资源与情报中心', link: '/resources/' },
          { text: '免费节点整理与核验', link: '/resources/free-nodes' },
          { text: '机场跑路预警情报', link: '/resources/scam-warning' },
          { text: '机场 FAQ 核心问答', link: '/resources/faq' },
          { text: '机场风险情报体系', link: '/resources/risk-intel' },
          { text: '节点延迟在线检测方法', link: '/resources/node-check' },
          { text: '订阅链接失效问题排除', link: '/resources/subscription-issue' },
          { text: '零基础新手上路帮助', link: '/resources/beginner-guide' }
        ]
      },
      {
        text: '42家品牌库',
        link: '/brands/'
      }
    ],
    sidebar: {
      '/recommend/': [
        {
          text: '机场推荐专题',
          items: [
            { text: '专题首页', link: '/recommend/' },
            { text: '综合机场推荐', link: '/recommend/best' },
            { text: '2026 机场排行榜', link: '/recommend/ranking' },
            { text: '高性价比机场', link: '/recommend/cost-effective' },
            { text: '稳定专线机场', link: '/recommend/stable' },
            { text: '便宜低价机场', link: '/recommend/cheap' },
            { text: '免费梯子与试用', link: '/recommend/free-ladder' },
            { text: '科学上网入门科普', link: '/recommend/overview' }
          ]
        },
        {
          text: '核心主推评测直达',
          items: [
            { text: '⭐ 光速云 (No.1 主推)', link: '/brands/guangsu' },
            { text: '暮光加速', link: '/brands/muguang' },
            { text: '飞猫云', link: '/brands/feimao' },
            { text: '微风网络', link: '/brands/weifeng' },
            { text: '查看全部 42 家品牌 →', link: '/brands/' }
          ]
        }
      ],
      '/vpn/': [
        {
          text: 'VPN 与加速器专题',
          items: [
            { text: '专题首页', link: '/vpn/' },
            { text: 'VPN 推荐指南', link: '/vpn/recommend' },
            { text: '免费 VPN 实测与风险', link: '/vpn/free' },
            { text: '手机 VPN 选型配置', link: '/vpn/mobile' },
            { text: 'VPN 软件深度评测', link: '/vpn/reviews' },
            { text: 'VPN 加速器应用场景', link: '/vpn/accelerator' },
            { text: '加速器 vs 机场深度对比', link: '/vpn/compare' },
            { text: '好用的海外加速网络', link: '/vpn/best' }
          ]
        }
      ],
      '/clash/': [
        {
          text: 'Clash 客户端中心',
          items: [
            { text: '客户端总览', link: '/clash/' },
            { text: 'Clash 推荐选型指南', link: '/clash/recommend' },
            { text: 'Clash Verge Rev 详解', link: '/clash/verge' },
            { text: 'Clash Verge 官方下载', link: '/clash/verge-download' },
            { text: 'Clash Verge 订阅导入', link: '/clash/verge-subscription' },
            { text: 'Clash Meta / Mihomo 内核', link: '/clash/meta' },
            { text: 'Clash 全平台图文教程', link: '/clash/tutorial' },
            { text: 'Clash 常见故障排查', link: '/clash/troubleshooting' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源与情报中心',
          items: [
            { text: '情报总览', link: '/resources/' },
            { text: '免费节点整理与核验', link: '/resources/free-nodes' },
            { text: '机场跑路预警情报', link: '/resources/scam-warning' },
            { text: '机场 FAQ 核心问答', link: '/resources/faq' },
            { text: '机场风险情报体系', link: '/resources/risk-intel' },
            { text: '节点延迟在线检测方法', link: '/resources/node-check' },
            { text: '订阅链接失效问题排除', link: '/resources/subscription-issue' },
            { text: '零基础新手上路帮助', link: '/resources/beginner-guide' }
          ]
        }
      ],
      '/brands/': [
        {
          text: '42 家品牌评测库',
          items: [
            { text: '品牌库总览', link: '/brands/' },
            { text: '1. 光速云 (主推第一)', link: '/brands/guangsu' },
            { text: '2. 暮光加速', link: '/brands/muguang' },
            { text: '3. 飞猫云', link: '/brands/feimao' },
            { text: '4. 微风网络', link: '/brands/weifeng' },
            { text: '5. 大佬云', link: '/brands/dalaoyun' },
            { text: '6. 星岛梦', link: '/brands/xingdaomeng' },
            { text: '7. 隐形人', link: '/brands/yinxingren' },
            { text: '8. 二猫云', link: '/brands/ermao' },
            { text: '9. 无忧链接', link: '/brands/wuyou' },
            { text: '10. 唯兔云', link: '/brands/weitu' },
            { text: '11. Firefly', link: '/brands/firefly' },
            { text: '12. 宇宙云', link: '/brands/yuzhou' },
            { text: '13. U1S1', link: '/brands/u1s1' },
            { text: '14. 灵猫网络', link: '/brands/lingmao' },
            { text: '15. 极连云', link: '/brands/jilian' },
            { text: '16. 光年梯', link: '/brands/guangnian' },
            { text: '17. 一翻云', link: '/brands/yifan' },
            { text: '18. SOGO云', link: '/brands/sogo' },
            { text: '19. 可信云', link: '/brands/kexin' },
            { text: '20. 速界', link: '/brands/sujie' },
            { text: '21. 闪跃', link: '/brands/shanyue' },
            { text: '22. 全球云', link: '/brands/quanqiu' },
            { text: '23. 闪电鼠', link: '/brands/shandianshu' },
            { text: '24. 云界线', link: '/brands/yunjiexian' },
            { text: '25. 榴莲云', link: '/brands/liulianyun' },
            { text: '26. 神行加速', link: '/brands/shenxing' },
            { text: '27. 环球梯', link: '/brands/huanqiuti' },
            { text: '28. 梯子云', link: '/brands/tiziyun' },
            { text: '29. WgetCloud', link: '/brands/wgetcloud' },
            { text: '30. 白月光', link: '/brands/baiyueguang' },
            { text: '31. FlyingBird', link: '/brands/flyingbird' },
            { text: '32. CyberGuard', link: '/brands/cyberguard' },
            { text: '33. 龙猫云', link: '/brands/longmaoyun' },
            { text: '34. FATCAT', link: '/brands/fatcat' },
            { text: '35. TNTCloud', link: '/brands/tntcloud' },
            { text: '36. 青云梯', link: '/brands/qingyunti' },
            { text: '37. 山水云', link: '/brands/shanshuiyun' },
            { text: '38. 灵动云', link: '/brands/lingdongyun' },
            { text: '39. 浪网', link: '/brands/langwang' },
            { text: '40. EdgeNova', link: '/brands/edgenova' },
            { text: '41. 萤火虫', link: '/brands/yinghuochong' },
            { text: '42. sslar', link: '/brands/sslar' }
          ]
        }
      ]
    },
    footer: {
      message: '机场cloud (jichangcloud.world) 专注提供客观可验证的科学上网与网络测速数据评测。',
      copyright: 'Copyright © 2026 机场cloud. 保留所有权利。所有品牌注册链接均严格遵循 nofollow 商业推广规范。'
    }
  }
});
