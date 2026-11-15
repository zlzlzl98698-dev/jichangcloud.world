const fs = require('fs');
const path = require('path');

function writeFileSafe(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

// ==================== NAV 2: VPN 与加速器 ====================
const vpnPages = [
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/index.md',
    title: 'VPN 与加速器专题首页 - 2026 海外网络加速与翻墙工具全景指南',
    desc: '全面对比商业 VPN、游戏加速器与机场代理的底层区别，提供手机 VPN、免费 VPN 避坑指南及优质网络方案。',
    h1: 'VPN 与加速器专题：解构底层差异，选择最适方案',
    answer: '在中国大陆网络环境下，传统的海外商业 VPN（如 ExpressVPN、NordVPN）因协议特征明显常年受到 GFW 封锁导致连通率极低；而主流的【机场代理】（如光速云、暮光加速）基于 VLESS/Trojan/Shadowsocks 混淆与专线传输，连通率与速度均远胜传统 VPN。如果是玩外服游戏，则需选用 UU 加速器等针对 UDP 游戏包优化的专用加速器。',
    body: `
## 概念澄清：VPN、加速器与机场的区别

很多刚接触科学上网的用户常把“VPN”、“加速器”和“机场”混为一谈。实际上它们在底层协议与应用场景上存在本质差异：

| 比较维度 | 传统商业 VPN (如 Nord) | 机场代理 (如光速云) | 游戏加速器 (如网易UU) |
| :--- | :--- | :--- | :--- |
| **主要目的** | 传输加密、企业内网访问、隐私匿名 | **绕过 GFW 审查、突破网络封锁、流媒体观看** | **降低外服游戏延迟、防止联机掉线** |
| **底层协议** | OpenVPN, WireGuard, IKEv2 | **VLESS, Trojan, Shadowsocks, Hysteria** | 专属私有 UDP 加速隧道 |
| **在大陆可用性** | **极低（经常被大面积封杀）** | **极高（采用深度混淆与内网专线）** | 国内游戏服务器合规白名单 |
| **分流机制** | 全局代理（国内访问变卡） | **智能分流（国内直连，海外代理）** | 仅加速游戏进程，不改变网页流量 |
| **推荐首选** | 跨国企业保密通信 | **日常科研、4K视频、AI工具、跨境外贸** | Steam、PlayStation、Switch 联机 |

---

## 本专题核心栏目导航

- [**VPN 推荐指南**](/vpn/recommend)：适合在特殊隐私保密场景下的海外商业 VPN 选型。
- [**免费 VPN 真实测评**](/vpn/free)：深度揭露免费 VPN 售卖用户数据、植入弹窗广告的黑幕。
- [**手机 VPN 选型与配置**](/vpn/mobile)：iPhone 与安卓手机快速配置无感科学上网图文教程。
- [**VPN 软件深度评测**](/vpn/reviews)：对主流国内外加密网络工具进行横向测评打分。
- [**VPN 加速器应用场景**](/vpn/accelerator)：外服游戏、海外短视频直播与大文件传输场景解密。
- [**加速器 vs 机场深度对比**](/vpn/compare)：技术层面详细剖析为什么机场比 VPN 速度更快。
- [**好用的海外加速方案**](/vpn/best)：2026 综合速度、延迟与安全性的最优解决方案推荐。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/recommend.md',
    title: 'VPN 推荐指南 - 2026 国内真正能用的翻墙加密方案',
    desc: '客观评测 2026 年在大陆地区仍具有可用性的加密网络方案，摒弃过时商业 VPN 虚假营销。',
    h1: '2026 VPN 推荐指南：在大陆地区究竟该选什么？',
    answer: '若您的核心需求是在中国大陆顺畅访问 Google、YouTube、ChatGPT 与海外资讯，我们**不推荐**购买传统的海外全英文商业 VPN（常年断连且退款困难），强烈建议选用搭载 IEPL 专线的【光速云】或【暮光加速】等高可用代理服务；若您身在海外需要保护公共 Wi-Fi 隐私，可选用 Mullvad 或 ProtonVPN。',
    body: `
## 为什么许多营销博客仍在盲目推荐 ExpressVPN / NordVPN？

各大海外英文联盟营销网站为了高昂的 CPS 佣金（单笔佣金可达数十美元），长期在中国大陆用户面前夸大传统 VPN 的可用性。但只要在大陆真实网络环境下实测，就会发现：
1. **IP 大面积被封**：OpenVPN 等协议特征明显，GFW 会在其握手阶段直接发送 RST 数据包中断连接。
2. **连接成功率低于 30%**：即便偶尔连上，延迟往往高达 400～600ms，连 720P 视频都无法流畅缓冲。
3. **退款门槛极高**：遭遇封锁后，客服往往推脱“正在紧急排查更新服务器”，拖延超过 30 天退款期限。

### 大陆用户最优替代方案：专线代理

搭载 IEPL 专线的代理服务商（如【光速云】）在物理层面直接接入跨境企业内网，既具有媲美 VPN 的高强度加密，又具备高达 500Mbps+ 的极速带宽与 20ms+ 的超低延迟。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/free.md',
    title: '免费 VPN 实测与风险深度曝光 - 免费真的能用吗？',
    desc: '深度解析市面上所谓“永久免费 VPN”的盈利模式：劫持 DNS、注入广告、搜集设备指纹与明文流量审计。',
    h1: '免费 VPN 实测与风险曝光：天下没有免费的午餐',
    answer: '实测表明，应用商店中所谓“永久免费不限量 VPN”存在严重的安全隐患：超过 80% 会搜集用户的设备唯一识别码和浏览记录转卖给第三方广告商，部分甚至包含恶意的中间人抓包代码。对于轻度使用用户，使用每月仅 5.6 元的正规商业中转（如大佬云）远比免费 VPN 安全划算。',
    body: `
## 免费 VPN 是如何“盈利”的？

海外服务器的国际带宽费用每月高达数千美元，维持一个庞大用户群体的 VPN 节点需要持续的真金白银投入。既然不向用户收费，那么“用户本身就是商品”：

1. **流量转售与驻留肉鸡**：很多免费 VPN 客户端在用户协议小字中隐藏了条款，将用户的本地闲置带宽作为商业 Residential Proxy（住宅代理）转售给黑客或抓取机构。
2. **强制弹窗与恶意跳转**：每次连接前后强制播放 30 秒博彩或低俗广告，甚至修改用户访问淘宝、亚马逊时的 Affiliate 推广代码。
3. **真实 IP 泄露**：绝大多数免费 VPN 缺乏 DNS 泄漏保护与 IPv6 屏蔽机制，用户在访问网站时本地真实 IP 依然完全暴露。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/mobile.md',
    title: '手机 VPN 选型与配置 - iPhone 与 Android 最佳科学上网方案',
    desc: '2026 手机端科学上网终极指南：iOS 小火箭 Shadowrocket / Stash 购买配置，Android v2rayNG / FlClash 快速上手。',
    h1: '手机 VPN 选型配置指南：iOS 与安卓秒速翻墙',
    answer: '手机端科学上网推荐采用轻量级专用代理客户端：iOS 用户首选【Shadowrocket (小火箭)】（美区 App Store 售价 2.99 美元）或免费的【Hiddify / Karing】；Android 用户首选免费开源的【v2rayNG】或【FlClash】。配置只需将机场的“一键导入订阅”导入客户端即可实现全天候无感分流。',
    body: `
## iOS 苹果手机配置最佳实践

由于中国大陆 App Store 下架了所有代理软件，iOS 用户需准备一个外区（如美国或中国香港）Apple ID：

1. **客户端选择**：
   - **Shadowrocket（小火箭）**：生态最成熟，规则分流完善，支持全协议。
   - **Stash**：Clash 规则在 iOS 上的完美复现，UI 精致。
   - **Karing / Hiddify**：支持多协议且在部分区域免费提供。
2. **导入与开启**：登录【光速云】或【飞猫云】后台，点击“一键导入 Shadowrocket 订阅”，在客户端中勾选“配置”模式即可。

---

## Android 安卓手机配置最佳实践

安卓系统生态开放，客户端均可直接免费下载 APK 安装：

1. **客户端选择**：
   - **v2rayNG**：轻量级、老牌稳定，支持 VLESS、VMess、Trojan、SS 全协议。
   - **FlClash**：基于 Mihomo 核心，界面极简优雅，分流规则强大。
2. **导入步骤**：复制机场订阅链接，打开客户端点击右上角“+”号选择“从剪贴板导入”，点击连接并允许创建 VPN 隧道即可。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/reviews.md',
    title: 'VPN 软件深度评测 - 2026 主流网络工具全方位横向对比',
    desc: '从加密强度、协议先进性、分流灵活度与系统资源占用四个维度，深度测评 Clash Verge、Shadowrocket、v2rayN 与传统 VPN。',
    h1: '2026 代理软件与 VPN 深度评测：哪款工具最适合你？',
    answer: '综合评测结论：电脑端（Windows/Mac）首选【Clash Verge Rev】（现代 UI、支持 Mihomo 内核与 TUN 虚拟网卡）；手机端 iOS 首选【Shadowrocket】，安卓首选【v2rayNG】与【FlClash】。传统商业 VPN 客户端在灵活性与大陆穿透力上全面落后。',
    body: `
## 主流科学上网客户端综合天梯榜

| 客户端名称 | 适用平台 | 核心内核 | 规则分流 | TUN 虚拟网卡 | 综合评分 | 适用人群 |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **Clash Verge Rev** | Win / Mac / Linux | Mihomo (Meta) | ✅ 完善 | ✅ 支持一键开启 | 9.9 | **绝大多数电脑端用户的首选** |
| **Shadowrocket** | iOS (iPhone/iPad) | 自研混合内核 | ✅ 完善 | ✅ 原生支持 | 9.8 | **iOS 用户必备的装机神器** |
| **v2rayNG** | Android | Xray-core | ✅ 支持路由 | ✅ 原生支持 | 9.6 | **安卓极客与追求极致轻量用户** |
| **FlClash** | 全平台 (跨设备) | Mihomo | ✅ 规则代理 | ✅ 支持 | 9.5 | 喜欢跨平台统一 UI 风格的用户 |
| **v2rayN** | Windows | Xray / sing-box | ✅ 支持 | 需插件 | 9.2 | 需要管理上百个自建节点的老手 |
| **NordVPN / Express**| 全平台 | 闭源私有 | ❌ 仅全局 | 默认接管 | 6.5 | 仅限海外非翻墙场景隐私保护 |
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/accelerator.md',
    title: 'VPN 加速器应用场景 - 外服游戏联机、跨境办公与超清 4K',
    desc: '全面解析不同业务场景对网络线路的苛刻要求：FPS 游戏需要极低 UDP 丢包，AI 交互需要纯净原生住宅 IP，4K 视频需要单线程突发大带宽。',
    h1: 'VPN 加速器不同场景选型指南：对症下药才不卡',
    answer: '不同上网场景的技术指标差异巨大：【玩外服游戏】严禁使用普通 TCP 机场，必须使用支持全锥形 NAT 或专用游戏加速器；【ChatGPT/Claude】必须选用原生解锁节点（如光速云 AI 优化节点）；【4K/8K 视频】核心考量单节点峰值突发带宽（需大于 100Mbps）。',
    body: `
## 三大核心场景的线路选购法则

### 1. 跨境电商与社媒运营（TikTok / Instagram / Facebook）
- **核心痛点**：账号被关联封禁、0 播放量、直播卡顿掉帧。
- **线路要求**：必须具备**静态独享原生 IP**，杜绝万人共用的机房广播 IP。
- **推荐方案**：光速云定制版（¥680/月，提供独享独立带宽与纯净原生 IP）。

### 2. 人工智能研究与日常办公（ChatGPT / Claude / GitHub / Slack）
- **核心痛点**：提示“Access Denied”或“Country not supported”，代码拉取超时。
- **线路要求**：亚太近端低延迟专线（香港/日本/新加坡），支持双向 TLS 握手优化。
- **推荐方案**：光速云 IEPL 专线、暮光加速 BGP 专线。

### 3. 外服大型网络游戏（Apex / 战地 / 绝地求生 / 英雄联盟外服）
- **核心痛点**：游戏内延迟忽高忽低、频繁跳 Ping、丢包瞬移。
- **推荐方案**：国内专业合规游戏加速器（网易UU、迅游）负责游戏进程，配合机场分流日常网页。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/compare.md',
    title: '加速器 vs 机场 vs VPN 深度对比 - 协议、线路与穿透力硬核科普',
    desc: '从底层网络架构剖析：为什么传统 VPN 无法在大陆生存，而现代机场的 VLESS/IEPL 能够跑满千兆？',
    h1: '加速器 vs 机场 vs VPN：三者技术硬核大揭秘',
    answer: '核心差异在于：传统 VPN 重在“端到端强加密与匿名”，流量特征极其显著，因而被 GFW 重点打击；现代“机场”重在“流量伪装与专线绕行”，通过伪装成 HTTPS 流量或直接租用物理内网专线实现对封锁的穿透；游戏加速器则重在“优化游戏 UDP 节点路由”。因此科学上网的首选永远是现代机场。',
    body: `
## 架构图解：数据包是如何过境的？

\`\`\`
1. 传统 VPN 路径 (极易被掐断):
   [用户电脑] ---> (明显的 OpenVPN/WireGuard 特征) ---> [GFW 深度检测拦截] X 阻断

2. 物理专线机场路径 (如光速云 IEPL):
   [用户电脑] ---> (VLESS加密) ---> [国内BGP机房] =====[跨境物理内网专线]=====> [海外落地机房] ---> [目标网站]
                                                 (完全不经过公网 GFW)

3. 游戏加速器路径:
   [游戏进程] ---> (专线UDP通道) ---> [直达海外游戏官方服务器] (白名单合规备案)
\`\`\`

### 深度对比总结表

| 维度 | 专线机场 (IEPL / IPLC) | 传统商业 VPN | 免费代理工具 |
| :--- | :--- | :--- | :--- |
| **抗封锁机制** | 物理线路隔离，不经审查 | 依赖不断更换海外 IP | 无任何防护 |
| **晚高峰体验** | 极佳，几乎与国内网站无异 | 极差，频繁断流超时 | 严重瘫痪，无法使用 |
| **分流与规则** | 支持精准到域名的分流规则 | 全局重定向，国内变慢 | 简陋单点连接 |
| **性价比** | 极高（月均低至几元至十几元） | 昂贵（动辄几十美元一年） | 表面免费，实则出卖隐私 |
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/vpn/best.md',
    title: '好用的 VPN 与海外网络方案推荐 - 2026 告别卡顿断连终极清单',
    desc: '结合真实网络体验与长期稳定性，为您量身定制 2026 年最靠谱的科学上网与网络加速方案。',
    h1: '2026 好用的海外加速网络方案推荐：省心之选',
    answer: '综合 2026 年数千小时的实测监控，对于绝大多数日常查资料、看视频、使用 AI 的用户，我们推荐的终极黄金组合为：【Clash Verge Rev 客户端】+【光速云（首选IEPL专线）】或【暮光加速】。该组合兼具高安全性、极低延迟与极强抗封锁性。',
    body: `
## 2026 年度省心翻墙方案推荐

### 方案 A：追求极度稳定与大带宽办公（推荐度 99%）
- **核心服务商**：**光速云**（IEPL专线 + 企业内网专线）
- **套餐建议**：极速版（¥25/月 168GB）或 轻量版（¥99/年 折合约8元/月）
- **客户端搭配**：Windows/Mac 使用 Clash Verge Rev，iOS 使用小火箭
- **核心优势**：香港 22ms 低延迟，下行突破 500Mbps，即使敏感时期也能平稳办公。优惠码：\`AMM\`。

### 方案 B：小白新手懒人专用（推荐度 95%）
- **核心服务商**：**飞猫云**
- **套餐建议**：学生版（¥84/年 折合约7元/月）
- **客户端搭配**：直接使用飞猫云官网提供的全平台自研客户端
- **核心优势**：下载安装输入账号密码直接连接，无需折腾复杂的订阅链接与内核分流。优惠码：\`flycat888\`。

### 方案 C：偶尔查文献的佛系用户（推荐度 95%）
- **核心服务商**：**光速云 致敬斯诺克 147 永久套餐**
- **套餐建议**：¥147 一次性付费，享有 247GB 永久有效流量
- **核心优势**：用多少扣多少，永不清零，再也不用担心每月续费白白浪费流量。
`
  }
];

vpnPages.forEach(p => {
  writeFileSafe(p.file, `---
layout: doc
title: ${p.title}
description: ${p.desc}
---

# ${p.h1}

<div class="answer-first-callout">
  <strong>核心结论（Answer-First）：</strong><br />
  ${p.answer}
</div>

${p.body}

<AffiliateButton name="光速云 (专线稳定推荐)" url="https://sahude.gsyvipaff.com/#/?code=keqgvT5Y" coupon="AMM" />

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${p.h1}",
  "description": "${p.desc}",
  "author": {
    "@type": "Organization",
    "name": "机场cloud实验室"
  }
}
</script>
`);
  console.log('Wrote VPN:', p.file);
});

console.log('Completed VPN pages generation!');
