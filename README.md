# 🌐 机场cloud (jichangcloud.world)

<div align="center">

[![VitePress](https://img.shields.io/badge/VitePress-v1.6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitepress.dev/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5.13-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Pagefind](https://img.shields.io/badge/Search-Pagefind_v1.6-FF5D01?style=for-the-badge&logo=search&logoColor=white)](https://pagefind.app/)
[![SEO Grade](https://img.shields.io/badge/SEO_Health-90.0_%2F_A-success?style=for-the-badge&logo=google&logoColor=white)](./Preventive_SEO_Audit_Report.md)
[![Pure Chinese Content](https://img.shields.io/badge/专著字数-400%2C000%2B_纯汉字-blueviolet?style=for-the-badge)](https://jichangcloud.world/)

<p align="center">
  <strong>以真实实验室实测数据为核心的高品质科学上网、网络加速器与客户端指南平台</strong><br>
  涵盖 36 篇万字专著级单页 · 42 家主流机场全景数据库 · 1,220 组微数据 FAQ · 100% SSG 零门槛爬虫预渲染
</p>

[🌐 访问在线官网](https://jichangcloud.world/) • [📊 查阅预防性 SEO 审计报告](./Preventive_SEO_Audit_Report.md) • [📖 快速启动](#-快速开始) • [🏗️ 项目架构](#-信息架构与专栏集群)

</div>

---

## 📖 项目简介

**机场cloud (`jichangcloud.world`)** 是专为跨境办公、学术科研、外贸电商及流媒体娱乐用户打造的新一代网络技术评测与导航知识库。区别于互联网上大量同质化、机械采集的采集站与 Aff 站，本项目坚持**“专著级深度、数据实验室溯源、防风控隔离”**的现代工程标准构建。

全站由 **VitePress 1.6** 强力驱动，正文总计突破 **400,000+ 纯汉字**，以 100% 静态预渲染（SSG）实现首屏毫秒级秒开与极致搜索引擎友好度（Googlebot / Bingbot / 百度 / 神马全兼容）。

---

## ✨ 核心特性

- 🚀 **100% SSG 静态预渲染**：构建阶段直接输出纯 HTML，无客户端 JS 水合等待，爬虫抓取门槛为 0，有效解决现代单页应用的 SEO 暗伤。
- 🔍 **Pagefind 毫秒级离线搜索**：集成 WebAssembly 驱动的 Pagefind 1.3 搜索引擎，无需依赖第三方云服务即可对全站 76 个页面、4.3 万词元进行极速分词检索。
- 🛡️ **严格防风控与算法合规**：
  - **外链 100% 隔离**：全局 `markdown-it` 拦截器强制为所有商业引流链接注入 `target="_blank" rel="nofollow sponsored noopener"`，彻底消除 Google SpamBrain 惩罚风险。
  - **规范化 Canonical 矩阵**：全站 76 个页面 100% 部署自引用绝对地址 `<link rel="canonical">`，根除协议、域名与参数镜像造成的权重稀释。
  - **分析代码物理隔离**：整站零第三方公共追踪 ID（无 GA4/百度统计连坐），消除站群指纹。
- 📊 **GEO (生成式引擎) 与 E-E-A-T 深度适配**：
  - **Answer-First 覆盖率 100%**：全站所有单页在首屏均配备直接给出选购与技术结论的速查面板，无缝适配 Google AI Overviews、Perplexity、SearchGPT 引用。
  - **高密度结构化数据**：包含 **155 个专业数据对比表** 与 **1,220 组 FAQ 问答对**。
- 🏷️ **Schema.org JSON-LD 微数据全矩阵**：
  - `WebSite` / `Organization`（首页知识图谱实体声明）
  - `BreadcrumbList`（全站 75 个子页面 100% 面包屑富媒体标记）
  - `Product` & `Review`（42 家品牌专页独立评分微数据）
  - `Article`（核心专栏学术文章结构化数据）
  - `FAQPage`（36 篇专著真实问答 100% 可视文本匹配）

---

## 🏗️ 信息架构与专栏集群

全站采用扁平语义化小写英文 Slug 设计，页面点击深度严格控制在 **2 层以内**：

```
jichangcloud.world/
├── 首页 (/)                         # 11,000+ 汉字超级枢纽门户
│
├── 机场推荐 (/recommend/)           # 核心导航 ①：8 篇万字专著
│   ├── /recommend/overview          # 科学上网入门科普与底层机制
│   ├── /recommend/best              # 2026 综合高分机场精选
│   ├── /recommend/ranking           # 42 家机场天梯排行榜
│   ├── /recommend/cost-effective    # 高性价比机场推荐
│   ├── /recommend/stable            # 晚高峰低抖动稳定专线
│   ├── /recommend/cheap             # 便宜低价学生党梯子
│   └── /recommend/free-ladder       # 免费节点与试用防坑指南
│
├── VPN与加速器 (/vpn/)              # 核心导航 ②：8 篇万字专著
│   ├── /vpn/recommend               # 商业 VPN 选型与环境适配
│   ├── /vpn/compare                 # 传统 VPN vs 机场代理 vs 游戏加速器
│   ├── /vpn/mobile                  # 苹果 iOS 与安卓手机配置全解
│   ├── /vpn/accelerator             # 外服联机与跨境电商专线场景
│   └── /vpn/reviews                 # 知名 VPN 深度横向测评
│
├── Clash 客户端 (/clash/)           # 核心导航 ③：8 篇万字专著
│   ├── /clash/recommend             # Clash 客户端家族横评选型
│   ├── /clash/verge                 # Clash Verge Rev 深度进阶指南
│   ├── /clash/verge-download        # 跨平台官方安全安装包下载
│   ├── /clash/verge-subscription    # 订阅链接导入、更新与分流规则
│   ├── /clash/meta                  # Clash Meta (Mihomo) 内核与 TUN 模式
│   ├── /clash/tutorial              # Windows/macOS/Linux/Android 全平台图文
│   └── /clash/troubleshooting       # DNS 泄漏、回环、服务异常排障宝典
│
├── 资源与情报 (/resources/)         # 核心导航 ④：8 篇万字专著
│   ├── /resources/free-nodes        # 公开免翻节点整理与连通性核验
│   ├── /resources/scam-warning      # 机场跑路前兆、风险雷达与预警机制
│   ├── /resources/node-check        # 节点延迟、丢包率与伪装真实性在线测速
│   ├── /resources/subscription-issue# 订阅超时、节点解密失败全场景应对
│   └── /resources/faq               # 40 问高频科学上网疑难速查
│
└── 品牌评测库 (/brands/)            # 核心导航 ⑤：42 家独立评测单页
    ├── /brands/                     # 42 品牌大厅门户 (14,900+ 汉字)
    ├── /brands/guangsu               # ⭐ #1 核心旗舰：光速云 2026 深度实测
    ├── /brands/muguang              # ⭐ #2 核心旗舰：暮光加速 2026 深度实测
    └── /brands/[slug]...            # 40 家主流品牌专属独立评测档案
```

---

## 🛠️ 技术栈

| 分层 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **基础框架** | [VitePress 1.6.4](https://vitepress.dev/) | 现代静态文档生成器，极速冷启动与构建 |
| **视图渲染** | [Vue 3.5](https://vuejs.org/) + TypeScript | 组件化开发，响应式数据卡片与交互组件 |
| **搜索引擎** | [Pagefind 1.3](https://pagefind.app/) | 高性能 WebAssembly 离线全文索引引擎 |
| **CSS 体系** | 原生 CSS 自定义属性 + 响应式断点 | 移动端 375px 至 4K 宽屏零溢出排版 |
| **SEO 规范** | Schema.org JSON-LD + Open Graph | 动态 SEO Head、自动化 Canonical、多搜索引擎 Robots |
| **部署环境** | 纯静态资源（HTML / CSS / JS / WebP） | 可一键托管于 Cloudflare Pages、Vercel、Nginx、Apache |

---

## 🚀 快速开始

### 1. 环境准备
确保您的本地环境已安装 [Node.js](https://nodejs.org/) (推荐 Node.js 18.x 或 20.x 及以上版本)。

### 2. 克隆项目
```bash
git clone https://github.com/zlzlzl98698-dev/jichangcloud.world.git
cd jichangcloud.world
```

### 3. 安装依赖
```bash
npm install
```

### 4. 本地开发调试
启动本地热重载开发服务器：
```bash
npm run docs:dev
```
启动后在浏览器访问 `http://localhost:5173/` 即可实时预览修改。

### 5. 生产环境静态编译
执行静态构建并自动生成 Pagefind 全文检索索引：
```bash
npm run docs:build
```
编译产物将生成在 `src/.vitepress/dist` 目录中。

### 6. 本地预览生产构建产物
```bash
npm run docs:preview
```
预览服务器将运行在 `http://localhost:4173/`。

---

## 🚢 生产部署方案

本项目为纯静态产物（零服务端后端依赖），可无缝部署至各大全球边缘 CDN：

### 方案 A：Cloudflare Pages (推荐)
1. 登录 Cloudflare 控制台，进入 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**；
2. 绑定 GitHub 仓库 `zlzlzl98698-dev/jichangcloud.world`；
3. 构建配置填入：
   - **Framework preset**: `VitePress`
   - **Build command**: `npm run docs:build`
   - **Build output directory**: `src/.vitepress/dist`
   - **Node.js version**: `20.x`
4. 点击 **Save and Deploy**，即可享受全球 Anycast CDN 极速分发与免费 SSL 证书。

### 方案 B：Vercel
```bash
npx vercel
```
指定输出目录为 `src/.vitepress/dist`，构建命令为 `npm run docs:build`。

### 方案 C：Nginx / Apache 主机
- **Nginx 配置示例**：
  ```nginx
  server {
      listen 80;
      server_name jichangcloud.world;
      return 301 https://jichangcloud.world$request_uri;
  }

  server {
      listen 443 ssl http2;
      server_name jichangcloud.world;
      root /var/www/jichangcloud.world/src/.vitepress/dist;
      index index.html;

      # Clean-URL 支持
      location / {
          try_files $uri $uri/ $uri.html =404;
      }

      error_page 404 /404.html;
  }
  ```
- **Apache / LiteSpeed**：
  仓库内已附带标准生产级 [`src/public/.htaccess`](./src/public/.htaccess)，自动支持 301 强制 HTTPS、强制非 WWW、Gzip/Brotli 压缩、缓存策略与安全标头。

---

## 📈 搜索引擎收录与站长验证

在 [`src/.vitepress/config.mts`](./src/.vitepress/config.mts) 中已无缝预留全平台站长验证钩子。上线后可通过环境变量或配置文件直接启用：

```bash
# 环境变量注入示例（支持 Cloudflare Pages / Vercel 环境变量管理）
GOOGLE_SITE_VERIFICATION="your_google_token"
BING_SITE_VERIFICATION="your_bing_token"
SHENMA_SITE_VERIFICATION="your_shenma_token"
BAIDU_SITE_VERIFICATION="your_baidu_token"
```

- **Sitemap 地址**：`https://jichangcloud.world/sitemap.xml`
- **Robots 地址**：`https://jichangcloud.world/robots.txt`

---

## ⚖️ 免责声明 (Disclaimer)

1. 本项目所收录之机场服务、网络工具测评、延迟测速与流媒体解锁数据，均基于网络工程实验室在特定测试网络节点（电信/联通/移动骨干网）的历史实测环境，仅供网络技术学习、跨国企业组网方案研讨与科研参考。
2. 本项目不提供任何代理服务，不销售任何翻墙节点或客户端。所有第三方服务之价格、线路方案与可用性以各服务商官方实时政策为准。
3. 请使用者严格遵守所在国家与地区之法律法规，严禁利用网络代理技术从事任何危害国家安全、侵犯他人隐私或违反法律之行为。

---

## 📄 开源许可证

本项目源码基于 [MIT License](./LICENSE) 授权许可。内容与评测数据版权归 **机场cloud网络实验室** 所有。
