<template>
  <div class="unlock-matrix-container">
    <div class="matrix-header">
      <h4>流媒体与 AI 服务可用性矩阵 (Service Availability Matrix)</h4>
      <span class="region-badge">测试节点: 亚太核心中继 / IEPL 专线</span>
    </div>

    <div class="matrix-grid">
      <div class="service-card" :class="getStatusClass(brand.streamingUnlock.chatgpt)">
        <div class="service-name">
          <span class="service-icon">🤖</span>
          <strong>ChatGPT / OpenAI</strong>
        </div>
        <span class="status-tag">{{ brand.streamingUnlock.chatgpt }}</span>
      </div>

      <div class="service-card" :class="getStatusClass(brand.streamingUnlock.claude)">
        <div class="service-name">
          <span class="service-icon">🧠</span>
          <strong>Claude 3.5 Sonnet</strong>
        </div>
        <span class="status-tag">{{ brand.streamingUnlock.claude }}</span>
      </div>

      <div class="service-card" :class="getStatusClass(brand.streamingUnlock.netflix)">
        <div class="service-name">
          <span class="service-icon">🎬</span>
          <strong>Netflix 4K HDR</strong>
        </div>
        <span class="status-tag">{{ brand.streamingUnlock.netflix }}</span>
      </div>

      <div class="service-card" :class="getStatusClass(brand.streamingUnlock.disney)">
        <div class="service-name">
          <span class="service-icon">🏰</span>
          <strong>Disney+</strong>
        </div>
        <span class="status-tag">{{ brand.streamingUnlock.disney }}</span>
      </div>

      <div class="service-card" :class="getStatusClass(brand.streamingUnlock.youtube)">
        <div class="service-name">
          <span class="service-icon">📺</span>
          <strong>YouTube Premium 4K</strong>
        </div>
        <span class="status-tag">{{ brand.streamingUnlock.youtube }}</span>
      </div>

      <div class="service-card" :class="getStatusClass(brand.streamingUnlock.tiktok)">
        <div class="service-name">
          <span class="service-icon">🎵</span>
          <strong>TikTok 国际版</strong>
        </div>
        <span class="status-tag">{{ brand.streamingUnlock.tiktok }}</span>
      </div>
    </div>

    <div v-if="brand.unlockImages && brand.unlockImages.length > 0" class="unlock-gallery">
      <div class="gallery-title">📸 原生终端流媒体/AI 解锁实测证据截图：</div>
      <div class="gallery-grid">
        <div v-for="(img, idx) in brand.unlockImages" :key="idx" class="gallery-item">
          <img :src="img" :alt="brand.name + '实测解锁截图 ' + (idx + 1)" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BrandInfo } from '../../../data/brands';

defineProps<{
  brand: BrandInfo;
}>();

const getStatusClass = (statusStr: string) => {
  if (statusStr.includes('支持') || statusStr.includes('解锁') || statusStr.includes('完美')) {
    if (statusStr.includes('部分') || statusStr.includes('视节点')) return 'status-partial';
    return 'status-ok';
  }
  return 'status-unknown';
};
</script>

<style scoped>
.unlock-matrix-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin: 24px 0;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
}
.matrix-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 12px;
}
.matrix-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}
.region-badge {
  font-size: 12px;
  color: #64748b;
  background: #f8fafc;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}
.matrix-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.service-card {
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
}
.service-card.status-ok {
  background: #f0fdf4;
  border-color: #bbf7d0;
}
.service-card.status-partial {
  background: #fffbeb;
  border-color: #fde68a;
}
.service-name {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #0f172a;
}
.service-icon {
  font-size: 16px;
}
.status-tag {
  font-size: 12px;
  color: #334155;
  font-weight: 500;
}
.service-card.status-ok .status-tag {
  color: #15803d;
}
.service-card.status-partial .status-tag {
  color: #b45309;
}
.unlock-gallery {
  margin-top: 20px;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
}
.gallery-title {
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 12px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.gallery-item img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  max-height: 220px;
  object-fit: cover;
}
@media (max-width: 768px) {
  .matrix-grid {
    grid-template-columns: 1fr;
  }
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
