<template>
  <div class="speedtest-observatory">
    <div class="observatory-header">
      <div class="observatory-title">
        <span class="status-indicator"></span>
        <h4>网络测速实测报告 (Performance Observatory)</h4>
      </div>
      <span class="data-badge">{{ brand.speedtestImage ? 'Measured Data / 实测已核验' : 'Vendor Declared / 官方标称' }}</span>
    </div>

    <div class="speed-grid">
      <div class="speed-stat-box">
        <span class="stat-label">测试目标地区</span>
        <span class="stat-val">{{ brand.speedData.testedRegion }}</span>
      </div>
      <div class="speed-stat-box">
        <span class="stat-label">往返延迟 (TLS RTT)</span>
        <span class="stat-val text-ping">{{ brand.speedData.delay }}</span>
      </div>
      <div class="speed-stat-box">
        <span class="stat-label">下行带宽 (Download)</span>
        <span class="stat-val text-download">{{ brand.speedData.download }}</span>
      </div>
      <div class="speed-stat-box">
        <span class="stat-label">测试日期 / 样本</span>
        <span class="stat-val text-muted">{{ brand.speedData.testDate }}</span>
      </div>
    </div>

    <div v-if="brand.speedtestImage" class="image-preview-wrap">
      <div class="preview-caption">
        <span>📸 测速终端截图核验：{{ brand.name }} 节点压力测速</span>
      </div>
      <img :src="brand.speedtestImage" :alt="brand.name + '节点测速实测报告截图'" class="speedtest-img" loading="lazy" />
    </div>

    <div class="observatory-footer">
      <small>* 测试环境说明：采用 MAI-TEST-BOT / miaosu 内核于中国大陆三网环境下进行单次样本采集；网络实际延迟与下行受本地宽带、运营商 QoS 及晚高峰影响，不作为长期可用性唯一保证。</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BrandInfo } from '../../../data/brands';

defineProps<{
  brand: BrandInfo;
}>();
</script>

<style scoped>
.speedtest-observatory {
  background: #0f172a;
  color: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  margin: 24px 0;
  border: 1px solid #1e293b;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
}
.observatory-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
  padding-bottom: 12px;
  margin-bottom: 16px;
}
.observatory-title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.observatory-title h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
}
.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}
.data-badge {
  font-size: 11px;
  font-family: monospace;
  background: #1e293b;
  color: #38bdf8;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid #334155;
}
.speed-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}
.speed-stat-box {
  background: #1e293b;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #334155;
  display: flex;
  flex-direction: column;
}
.stat-label {
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 4px;
}
.stat-val {
  font-size: 16px;
  font-weight: 700;
  color: #f8fafc;
  font-family: monospace;
}
.text-ping {
  color: #38bdf8;
}
.text-download {
  color: #4ade80;
}
.text-muted {
  font-size: 12px;
  color: #cbd5e1;
}
.image-preview-wrap {
  margin: 16px 0;
  background: #020617;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #334155;
}
.preview-caption {
  padding: 8px 12px;
  background: #1e293b;
  font-size: 12px;
  color: #94a3b8;
  border-bottom: 1px solid #334155;
}
.speedtest-img {
  width: 100%;
  display: block;
  max-height: 480px;
  object-fit: contain;
  background: #020617;
}
.observatory-footer {
  margin-top: 12px;
  font-size: 11px;
  color: #64748b;
  line-height: 1.5;
}
@media (max-width: 768px) {
  .speed-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
