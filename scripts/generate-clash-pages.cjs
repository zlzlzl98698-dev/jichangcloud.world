const fs = require('fs');
const path = require('path');

function writeFileSafe(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

// ==================== NAV 3: Clash 客户端 ====================
const clashPages = [
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/index.md',
    title: 'Clash 客户端中心 - 2026 全平台 Clash 软件下载、配置与教程大全',
    desc: '系统化汇集 2026 年最流行的 Clash 客户端家族：Clash Verge Rev、Clash Meta / Mihomo、FlClash、OpenClash，从安装下载到规则配置全覆盖。',
    h1: 'Clash 客户端专题：现代分流代理控制中心',
    answer: '在原版 Clash for Windows（CFW）停更后，目前全平台公认的最佳继任者为【Clash Verge Rev】。它基于 Rust/Tauri 框架重构，搭载功能最强、维护最活跃的【Mihomo (Clash.Meta)】内核，原生支持 VLESS、Hysteria2、TUIC、WireGuard 协议，并提供完备的 TUN 虚拟网卡接管能力。',
    body: `
## 为什么说 Clash 是目前最强大的科学上网代理体系？

Clash 的核心价值在于其**强大的基于规则的分流引擎（Rule-based Proxy Engine）**。它能够智能识别用户发起的每一笔网络请求：
- 访问国内网站（百度、知乎、腾讯视频、淘宝等）→ 自动通过本地物理网卡直连，不消耗机场流量且零延迟。
- 访问海外被阻断网站（Google、YouTube、Twitter、维基百科等）→ 自动交由机场专线节点加密转发。
- 访问 AI 与流媒体（OpenAI、Claude、Netflix、Disney+）→ 自动分流到指定支持解锁的特定节点。

---

## 本专题核心栏目导航

- [**Clash 推荐选型指南**](/clash/recommend)：不同操作系统下 Clash 家族客户端优劣对比与选型建议。
- [**Clash Verge Rev 详解**](/clash/verge)：全面解析 Clash Verge Rev 的架构设计、内存优化与独特亮点。
- [**Clash Verge 官方安全下载**](/clash/verge-download)：提供 GitHub 官方正版 Release 镜像下载指南与 Windows/macOS 架构区分。
- [**Clash Verge 订阅导入教程**](/clash/verge-subscription)：一键导入机场订阅、自动更新与自定义规则链配置图文实操。
- [**Clash Meta / Mihomo 技术详解**](/clash/meta)：深入剖析新一代 Mihomo 核心对 VLESS、SNI 嗅探与 GEO 规则的硬核支持。
- [**Clash 全平台图文教程**](/clash/tutorial)：零基础从下载、安装、汉化、导入到开启代理的保姆级完整图文。
- [**Clash 常见故障排查**](/clash/troubleshooting)：秒解“连上后网页打不开”、“节点全部超时 0ms”、“DNS 污染”等高频痛点。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/recommend.md',
    title: 'Clash 推荐选型指南 - 2026 电脑手机 Clash 客户端横向横评',
    desc: '横向对比 Clash Verge Rev、Clash Nyanpasu、FlClash、OpenClash，帮您挑选最契合当前系统与使用习惯的客户端。',
    h1: '2026 Clash 推荐选型：哪款客户端最好用？',
    answer: '桌面电脑端（Windows / macOS / Linux）首推【Clash Verge Rev】（内存占用仅几十兆，UI 现代美观，内置 TUN 模式）；软路由或家庭 NAS 首推【OpenClash】或【Nikki】；安卓手机推荐【FlClash】或【Clash Meta for Android】。原版 CFW 因停更存在已知安全漏洞，强烈建议尽快迁移。',
    body: `
## 2026 主流 Clash 客户端深度横向对比

| 客户端名称 | 适用操作系统 | 开发框架 | 搭载核心 | 核心亮点 | 推荐评级 |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **Clash Verge Rev** | Windows / macOS / Linux | Tauri (Rust + Web) | Mihomo (Meta) | **内存占用极小，现代中文界面，TUN一键接管系统流量** | ⭐⭐⭐⭐⭐ |
| **FlClash** | 全平台 (Win/Mac/Android/iOS) | Flutter | Mihomo | 跨设备统一极简 UI，多端体验高度一致 | ⭐⭐⭐⭐☆ |
| **Clash Nyanpasu** | Windows / macOS / Linux | Tauri | Mihomo / Alpha | 动漫萌系界面，支持多内核热切换 | ⭐⭐⭐⭐ |
| **OpenClash** | OpenWrt 路由器 | Shell / Lua | Mihomo / Premium | 全屋智能设备免安装客户端无感透明代理 | ⭐⭐⭐⭐⭐ |
| **Clash for Windows (旧)** | Windows / macOS | Electron (臃肿) | 已停更 Premium | **项目已彻底删库停更，存在未修补漏洞，禁止使用** | ❌ 淘汰 |
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/verge.md',
    title: 'Clash Verge Rev 核心详解 - 为什么它是 2026 最受推崇的桌面代理神器？',
    desc: '深度解析 Clash Verge Rev 的底层优势：轻量 Tauri 架构告别 Electron 内存杀手，原生 Mihomo 内核赋能下一代代理体验。',
    h1: 'Clash Verge Rev 核心功能与技术架构深度剖析',
    answer: 'Clash Verge Rev 相比上一代 CFW 有三大划时代升级：1. 采用 Rust 开发的 Tauri 架构，内存占用从以往动辄 300MB+ 骤降至 30MB 左右；2. 原生深度集成 Mihomo 内核，完美支持 VLESS、Vision、gRPC 等先进协议；3. 内置了极其便捷的 TUN 模式驱动，解决游戏与命令行无法走代理的顽疾。',
    body: `
## Clash Verge Rev 的核心杀手级特性

### 1. 极致轻量与高响应速度
传统的 Electron 应用（如老版 CFW）本质上内置了一个完整的 Chrome 浏览器引擎，长期挂在后台占用数百兆内存甚至导致风扇狂转。Clash Verge Rev 借助操作系统原生的 Webview2 组件与 Rust 编写的高性能守护进程，内存控制极佳，启动秒开。

### 2. 完美的 TUN 虚拟网卡模式（系统流量全接管）
很多新手发现：即便开启了代理，某些桌面软件（如 Epic Games 客户端、部分外服游戏、CMD 终端命令如 git clone）依然打不开或超时。这是因为这些程序不读取 Windows 系统 HTTP 代理设置。Clash Verge Rev 只需要点击开启“TUN 模式”，即可在系统中虚拟出一张物理网卡，强制将所有 TCP/UDP 流量无死角送入分流引擎。

### 3. 便捷的可扩展配置覆写（Merge / Script）
支持通过图形化界面添加自定义规则片段，无需每次机场更新订阅后重新手动修改配置文件。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/verge-download.md',
    title: 'Clash Verge 官方下载 - 正版安装包安全下载与架构版本区分指南',
    desc: '提供 Clash Verge Rev 官方 GitHub 最新发布地址，详细区分 x64 / ARM64、Setup 安装版与 Portable 便携版。',
    h1: 'Clash Verge Rev 官方正版下载：防钓鱼与版本选型',
    answer: '下载 Clash Verge Rev 必须认准官方唯一 GitHub 仓库（clash-verge-rev/clash-verge-rev），切勿在搜索引擎点击假冒的“官网推广链接”（经常带有后门挖矿木马）。Windows 普通电脑请下载 \`x64-setup.exe\`；M系列芯片苹果电脑请下载 \`aarch64.dmg\`。',
    body: `
## 安全警示：警惕假冒 Clash 官网木马！

在百度或搜狗搜索“Clash 下载”时，排在前列的往往是黑客搭建的“山寨仿冒官网”。这些假安装包被植入了针对加密货币钱包的木马或键盘记录器。

### 官方正规下载规范对照表

| 您的操作系统及硬件 | 官方安装包推荐格式 | 对应文件名特征 |
| :--- | :--- | :--- |
| **Windows 64位 (Intel / AMD 常见电脑)** | Setup 标准安装版 | \`Clash.Verge_x.x.x_x64-setup.exe\` |
| **Windows 便携版 (免安装解压即用)** | Portable ZIP | \`Clash.Verge_x.x.x_x64_portable.zip\` |
| **Windows 触控平板 (骁龙 ARM 芯片)** | ARM64 安装版 | \`Clash.Verge_x.x.x_arm64-setup.exe\` |
| **macOS 苹果芯片 (M1 / M2 / M3 / M4)** | Apple Silicon DMG | \`Clash.Verge_x.x.x_aarch64.dmg\` |
| **macOS 老款电脑 (Intel 处理器)** | Intel x64 DMG | \`Clash.Verge_x.x.x_x64.dmg\` |
| **Linux (Ubuntu / Debian 系统)** | DEB 安装包 | \`clash-verge_x.x.x_amd64.deb\` |

---

## 官方正版开源地址

- 官方 GitHub Release 页面：[https://github.com/clash-verge-rev/clash-verge-rev/releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)
- 备用国内高速镜像源：可使用 FastGit 或通过正规机场（如【光速云】后台）直接下载官方同步镜像。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/verge-subscription.md',
    title: 'Clash Verge 订阅导入教程 - 一键同步节点、配置更新与自动分流',
    desc: '保姆级演示如何将机场提供的订阅链接导入 Clash Verge Rev，设置定时自动更新，切换节点与开启系统代理。',
    h1: 'Clash Verge Rev 订阅导入实操教程：3步开启极速上网',
    answer: 'Clash Verge 导入订阅只需三步：1. 在服务商后台复制“Clash 订阅链接”；2. 打开 Clash Verge Rev，在左侧导航点击“订阅（Profiles）”，粘贴链接并点击“导入”；3. 在“代理（Proxies）”中选择测速最优节点，返回左下角开启“系统代理”即可。',
    body: `
## 详细图文操作步骤分解

### 第一步：获取属于您的专属订阅链接
登录您购买的机场后台（以【光速云】为例）：
1. 在仪表盘找到“快捷导入”或“一键订阅”按钮。
2. 点击“复制 Clash 订阅链接”（注意：切勿将此链接泄露给他人，否则会导致您的流量被盗用）。

### 第二步：导入至 Clash Verge Rev
1. 启动 Clash Verge Rev 软件。
2. 点击左侧菜单栏的 **“订阅 (Profiles)”** 图标。
3. 在顶部的输入框中粘贴刚才复制的订阅链接。
4. 点击右侧的 **“导入 (Import)”** 按钮，等待 2～5 秒即可看到机场名称与节点总数。
5. 右键点击刚刚导入的配置卡片，选择“编辑”，可将“自动更新”设置为 24 小时或 12 小时。

### 第三步：节点选择与开启系统代理
1. 点击左侧菜单栏的 **“代理 (Proxies)”** 图标。
2. 在规则策略组（如 PROXY 或 节点选择）中，点击右上角的测速小图标（小闪电），软件会自动并发 Ping 所有节点。
3. 选择一个延迟最低的节点（如绿色低延迟的香港或日本节点）。
4. 点击左下角切换开关，将 **“系统代理 (System Proxy)”** 拨至开启状态。
5. 打开浏览器访问 google.com 即可验证是否连接成功！
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/meta.md',
    title: 'Clash Meta / Mihomo 内核深度解析 - 下一代科学上网核心引擎',
    desc: '从技术原理深度解剖 Mihomo（原 Clash.Meta）内核为何成为现代代理事实标准：支持全新协议、更聪明的 DNS 嗅探与硬件卸载。',
    h1: 'Mihomo (Clash.Meta) 内核：新一代科学上网动力核心',
    answer: 'Mihomo（最初命名为 Clash.Meta）是由开源社区主导维护的下一代 Clash 内核。相较于停止维护的官方开源版与闭源 Premium 版，Mihomo 补齐了对现代先进协议（VLESS、Hysteria、Hysteria2、TUIC v5、ShadowTLS）的全面支持，并内置了先进的基于 Smart DNS 与 eBPF 的防污染引擎。',
    body: `
## 为什么说官方内核停滞后，Mihomo 拯救了整个生态？

在原作者停更前，旧版 Clash 内核长达数年不支持 VLESS 协议，也无法支持针对 UDP 恶劣网络优化的 Hysteria 等 QUIC 系协议，导致很多采用前沿专线架构的机场无法被 Clash 用户使用。

### Mihomo 内核的五大核心突破

1. **全面拥抱新一代无状态协议**：原生解析 VLESS + Reality、Trojan + gRPC，使得专线机场（如光速云）的高性能物理内网优势得以 100% 释放。
2. **内建强力域名嗅探 (Sniffer)**：即使用户的 DNS 解析结果被本地运营商污染成假 IP，Mihomo 能在建立 TLS 握手时通过 SNI 字段智能反查真实目标域名，重新纠偏分流路由。
3. **先进的 Geodata 格式支持**：兼容 GeoIP.dat 与 GeoSite.dat 高速规则库，内存匹配速度提升 400% 以上。
4. **全平台 TUN 设备优化**：在 Windows、macOS 以及安卓与 Linux 嵌入式设备上提供一致的虚拟网卡直通表现。
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/tutorial.md',
    title: 'Clash 从新手到精通全流程图文教程 - 2026 最新进阶用法',
    desc: '涵盖配置备份、规则覆写、分流规则定制、TUN 模式网卡托管与局域网共享的完整 Clash 进阶操作指南。',
    h1: 'Clash 全平台新手到精通指南：玩转智能分流与局域网共享',
    answer: '进阶掌握 Clash 的三项核心技能为：1. 善用【规则模式（Rule）】保持日常国内访问零干扰；2. 遇到游戏或开发工具超时时，开启【TUN 模式】全量接管；3. 开启【允许局域网连接（Allow LAN）】，让同 Wi-Fi 下的电视、Switch、手机共享电脑的翻墙网络。',
    body: `
## 三种代理模式的准确用法

打开 Clash Verge 的“代理”页面，您会看到三种全局工作模式：
- **规则模式 (Rule - 强烈推荐)**：根据内置规则库自动分流。国内网站直连，国外受限网站走代理。日常 99% 的时间均应保持在此模式。
- **全局模式 (Global)**：所有网络请求（包括访问百度、淘宝）一律通过代理服务器中转。一般仅用于临时排查节点问题。
- **直连模式 (Direct)**：所有流量均直接连接互联网，相当于关闭了代理。

---

## 实用进阶技巧：如何让 PS5 / Switch / 智能电视共享电脑翻墙？

很多用户的电视盒子或游戏主机无法安装翻墙客户端，此时可以使用 Clash Verge 的局域网中继功能：

1. 在 Clash Verge Rev 设置中，打开 **“允许局域网连接 (Allow LAN)”** 开关。
2. 记下电脑界面的混合端口号（默认通常为 \`7897\` 或 \`7890\`）。
3. 按 \`Win + R\` 输入 \`cmd\`，执行 \`ipconfig\`，查看您电脑的局域网 IPv4 地址（如 \`192.168.1.100\`）。
4. 在 Switch 或电视的网络设置中，选择当前 Wi-Fi，进入“高级设置”：
   - 代理服务器：选择“开启 (HTTP 代理)”
   - 服务器 IP：填入电脑的 IP 地址（如 \`192.168.1.100\`）
   - 端口号：填入刚才的端口号（如 \`7897\`）
5. 保存连接后，您的 Switch 商店或电视上的 YouTube 即可直接免流翻墙！
`
  },
  {
    file: 'c:/Users/Pro User/Desktop/jichangcloud.world/src/clash/troubleshooting.md',
    title: 'Clash 常见故障排查 - 节点超时、打不开网页与无法联网深度自救',
    desc: '汇总排查 99% 的 Clash 疑难杂症：开启代理后微信打不开、所有节点超时报 Timeout、DNS 污染重置与端口冲突。',
    h1: 'Clash 故障排查手册：遇到连不上怎么办？',
    answer: '遇到 Clash 无法联网时，请按顺序进行“三步自检”：1. 检查电脑系统时间是否准确（时间偏差超过 90 秒会导致 TLS 握手彻底失败）；2. 检查是否与其他代理软件（如微信客户端代理、其他加速器）产生端口冲突；3. 若节点全红超时，在“订阅”页面右键点击“更新”，通常是由于机场服务端更新了后端节点 IP。',
    body: `
## 十大高频故障与速查解决方案

### 1. 节点全部显示 Timeout (超时) 或 0ms
- **原因分析**：机场后端节点解析 IP 发生轮换，或本地宽带运营商拦截了旧 IP。
- **解决方法**：前往“订阅”面板，手动点击“更新订阅”。若仍无法更新，检查机场官网公告是否发布了备用订阅域名。

### 2. 节点测速正常，但浏览器完全打不开任何网页
- **原因分析**：系统网络代理设置残留或浏览器插件冲突。
- **解决方法**：
  1. 关闭 Clash Verge Rev，打开 Windows “设置” → “网络和 Internet” → “代理”，检查手动代理设置是否已被正确清空。
  2. 重新启动 Clash Verge，并尝试开启“TUN 模式”绕过系统设置。

### 3. 本地时间不同步导致 SSL 证书错误
- **原因分析**：现代 VMess / VLESS / Trojan 协议均依赖高精度时间戳进行重放攻击防御。如果您的电脑时钟慢了或快了 2 分钟以上，服务器会直接丢弃所有握手请求。
- **解决方法**：进入 Windows “日期和时间”设置，点击“立即同步”。

### 4. 出现“端口占用 (Port In Use: 7890)”报错
- **原因分析**：前一个 Clash 进程在后台异常挂起，或者与其他 VPN 抢占了同一监听端口。
- **解决方法**：打开任务管理器，强制结束所有名为 \`clash\` 或 \`verge\` 的后台进程；或者在设置中将端口改为 \`7899\`。
`
  }
];

clashPages.forEach(p => {
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

<AffiliateButton name="光速云 (Clash Verge完美适配)" url="https://sahude.gsyvipaff.com/#/?code=keqgvT5Y" coupon="AMM" />

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
  console.log('Wrote Clash:', p.file);
});

console.log('Completed Clash pages generation!');
