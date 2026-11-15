const fs = require('fs');
const path = require('path');

const brandsSourcePath = 'C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt';
const rawContent = fs.readFileSync(brandsSourcePath, 'utf-8');

// Define the 42 brands with precise mapping
const brandRoster = [
  { rank: 1, name: '光速云', slug: 'guangsu', isFlagship: true, accentColor: '#2563eb' },
  { rank: 2, name: '暮光加速', slug: 'muguang', isFlagship: false, accentColor: '#4f46e5' },
  { rank: 3, name: '飞猫云', slug: 'feimao', isFlagship: false, accentColor: '#0891b2' },
  { rank: 4, name: '微风网络', slug: 'weifeng', isFlagship: false, accentColor: '#0d9488' },
  { rank: 5, name: '大佬云', slug: 'dalaoyun', isFlagship: false, accentColor: '#d97706' },
  { rank: 6, name: '星岛梦', slug: 'xingdaomeng', isFlagship: false, accentColor: '#7c3aed' },
  { rank: 7, name: '隐形人', slug: 'yinxingren', isFlagship: false, accentColor: '#475569' },
  { rank: 8, name: '二猫云', slug: 'ermao', isFlagship: false, accentColor: '#ea580c' },
  { rank: 9, name: '无忧链接', slug: 'wuyou', isFlagship: false, accentColor: '#16a34a' },
  { rank: 10, name: '唯兔云', slug: 'weitu', isFlagship: false, accentColor: '#db2777' },
  { rank: 11, name: 'Firefly', slug: 'firefly', isFlagship: false, accentColor: '#e11d48' },
  { rank: 12, name: '宇宙云', slug: 'yuzhou', isFlagship: false, accentColor: '#6366f1' },
  { rank: 13, name: 'U1S1', slug: 'u1s1', isFlagship: false, accentColor: '#0284c7' },
  { rank: 14, name: '灵猫网络', slug: 'lingmao', isFlagship: false, accentColor: '#059669' },
  { rank: 15, name: '极连云', slug: 'jilian', isFlagship: false, accentColor: '#2563eb' },
  { rank: 16, name: '光年梯', slug: 'guangnian', isFlagship: false, accentColor: '#ca8a04' },
  { rank: 17, name: '一翻云', slug: 'yifan', isFlagship: false, accentColor: '#9333ea' },
  { rank: 18, name: 'SOGO云', slug: 'sogo', isFlagship: false, accentColor: '#0284c7' },
  { rank: 19, name: '可信云', slug: 'kexin', isFlagship: false, accentColor: '#16a34a' },
  { rank: 20, name: '速界', slug: 'sujie', isFlagship: false, accentColor: '#0284c7' },
  { rank: 21, name: '闪跃', slug: 'shanyue', isFlagship: false, accentColor: '#f59e0b' },
  { rank: 22, name: '全球云', slug: 'quanqiu', isFlagship: false, accentColor: '#2563eb' },
  { rank: 23, name: '闪电鼠', slug: 'shandianshu', isFlagship: false, accentColor: '#eab308' },
  { rank: 24, name: '云界线', slug: 'yunjiexian', isFlagship: false, accentColor: '#6366f1' },
  { rank: 25, name: '榴莲云', slug: 'liulianyun', isFlagship: false, accentColor: '#84cc16' },
  { rank: 26, name: '神行加速', slug: 'shenxing', isFlagship: false, accentColor: '#06b6d4' },
  { rank: 27, name: '环球梯', slug: 'huanqiuti', isFlagship: false, accentColor: '#3b82f6' },
  { rank: 28, name: '梯子云', slug: 'tiziyun', isFlagship: false, accentColor: '#8b5cf6' },
  { rank: 29, name: 'WgetCloud', slug: 'wgetcloud', isFlagship: false, accentColor: '#1e293b' },
  { rank: 30, name: '白月光', slug: 'baiyueguang', isFlagship: false, accentColor: '#64748b' },
  { rank: 31, name: 'FlyingBird', slug: 'flyingbird', isFlagship: false, accentColor: '#0ea5e9' },
  { rank: 32, name: 'CyberGuard', slug: 'cyberguard', isFlagship: false, accentColor: '#10b981' },
  { rank: 33, name: '龙猫云', slug: 'longmaoyun', isFlagship: false, accentColor: '#f97316' },
  { rank: 34, name: 'FATCAT', slug: 'fatcat', isFlagship: false, accentColor: '#ec4899' },
  { rank: 35, name: 'TNTCloud', slug: 'tntcloud', isFlagship: false, accentColor: '#ef4444' },
  { rank: 36, name: '青云梯', slug: 'qingyunti', isFlagship: false, accentColor: '#14b8a6' },
  { rank: 37, name: '山水云', slug: 'shanshuiyun', isFlagship: false, accentColor: '#22c55e' },
  { rank: 38, name: '灵动云', slug: 'lingdongyun', isFlagship: false, accentColor: '#a855f7' },
  { rank: 39, name: '浪网', slug: 'langwang', isFlagship: false, accentColor: '#06b6d4' },
  { rank: 40, name: 'EdgeNova', slug: 'edgenova', isFlagship: false, accentColor: '#3b82f6' },
  { rank: 41, name: '萤火虫', slug: 'yinghuochong', isFlagship: false, accentColor: '#eab308' },
  { rank: 42, name: 'sslar', slug: 'sslar', isFlagship: false, accentColor: '#6b7280' }
];

console.log('Brand Roster count:', brandRoster.length);
