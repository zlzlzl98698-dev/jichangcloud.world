<template>
  <div class="brand-card" :class="{ 'is-flagship': brand.isFlagship }">
    <div class="card-header">
      <div class="header-left">
        <span class="rank-badge" :class="'rank-' + (brand.rank <= 3 ? brand.rank : 'normal')">
          #{{ brand.rank }}
        </span>
        <div class="title-wrap">
          <h3 class="brand-name">{{ brand.name }}</h3>
          <span v-if="brand.isFlagship" class="flagship-pill">⭐ 2026 主推第一</span>
          <span v-else class="founded-year">{{ brand.foundedYear }}</span>
        </div>
      </div>
      <div class="header-right">
        <span class="rating-badge">★ {{ brand.rating }}</span>
      </div>
    </div>

    <p class="brand-highlight">{{ brand.highlight }}</p>

    <div class="metrics-row">
      <div class="metric-item">
        <span class="metric-label">线路架构</span>
        <span class="metric-value">{{ brand.lineType.split(' ')[0] }}</span>
      </div>
      <div class="metric-item">
        <span class="metric-label">入门价格</span>
        <span class="metric-value price-text">{{ brand.startingPrice }}</span>
      </div>
      <div class="metric-item">
        <span class="metric-label">香港延迟/下行</span>
        <span class="metric-value text-speed">{{ brand.speedData.delay }} / {{ brand.speedData.download }}</span>
      </div>
    </div>

    <div class="tags-wrap">
      <span v-for="tag in brand.tags" :key="tag" class="tag-pill">{{ tag }}</span>
      <span v-if="brand.speedtestImage" class="tag-pill tag-verified">✓ 附实测测速图</span>
    </div>

    <div class="coupon-box" v-if="brand.coupon && brand.coupon !== '无公开优惠码'">
      <span class="coupon-label">专属优惠码:</span>
      <code class="coupon-code">{{ brand.coupon }}</code>
      <button class="copy-btn" @click="copyCoupon(brand.coupon)">{{ copied ? '已复制' : '复制' }}</button>
    </div>

    <div class="action-footer">
      <a :href="'/brands/' + brand.slug" class="btn-review">
        查看完整评测 →
      </a>
      <a :href="brand.affiliateUrl" target="_blank" rel="nofollow sponsored noopener" class="btn-direct">
        直达官网注册 ↗
      </a>
    </div>
    <div class="disclaimer-text">
      * 含推广链接，注册可能为本站带来维护佣金，不影响实付价格
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { BrandInfo } from '../../../data/brands';

const props = defineProps<{
  brand: BrandInfo;
}>();

const copied = ref(false);

const copyCoupon = (code: string) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(code);
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  }
};
</script>

<style scoped>
.brand-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
  transition: all 0.2s ease-in-out;
  position: relative;
}
.brand-card:hover {
  border-color: #93c5fd;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
}
.brand-card.is-flagship {
  border: 2px solid #2563eb;
  background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.rank-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  background: #f1f5f9;
  color: #475569;
}
.rank-1 {
  background: #fef3c7;
  color: #b45309;
  border: 1px solid #fde68a;
}
.rank-2 {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #cbd5e1;
}
.rank-3 {
  background: #ffedd5;
  color: #c2410c;
  border: 1px solid #fed7aa;
}
.title-wrap {
  display: flex;
  flex-direction: column;
}
.brand-name {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}
.flagship-pill {
  font-size: 12px;
  color: #1d4ed8;
  font-weight: 600;
}
.founded-year {
  font-size: 12px;
  color: #64748b;
}
.rating-badge {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 700;
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid #bfdbfe;
}
.brand-highlight {
  font-size: 14px;
  color: #334155;
  line-height: 1.5;
  margin: 0 0 16px 0;
}
.metrics-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background: #f8fafc;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 14px;
}
.metric-item {
  display: flex;
  flex-direction: column;
}
.metric-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 2px;
}
.metric-value {
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
}
.price-text {
  color: #b45309;
}
.text-speed {
  color: #059669;
}
.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}
.tag-pill {
  font-size: 12px;
  padding: 2px 8px;
  background: #f1f5f9;
  color: #475569;
  border-radius: 4px;
}
.tag-verified {
  background: #ecfdf5;
  color: #047857;
  font-weight: 600;
  border: 1px solid #a7f3d0;
}
.coupon-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fffbeb;
  border: 1px dashed #fcd34d;
  padding: 6px 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 13px;
}
.coupon-label {
  color: #92400e;
  font-weight: 500;
}
.coupon-code {
  font-family: monospace;
  font-weight: 700;
  background: #ffffff;
  padding: 2px 6px;
  border-radius: 4px;
  color: #b45309;
}
.copy-btn {
  margin-left: auto;
  font-size: 12px;
  background: #d97706;
  color: #ffffff;
  border: none;
  padding: 3px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.copy-btn:hover {
  background: #b45309;
}
.action-footer {
  display: flex;
  gap: 12px;
}
.btn-review {
  flex: 1;
  text-align: center;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  background: #f8fafc;
  color: #334155;
  border: 1px solid #cbd5e1;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-review:hover {
  background: #f1f5f9;
  color: #0f172a;
}
.btn-direct {
  flex: 1;
  text-align: center;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  background: #2563eb;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-direct:hover {
  background: #1d4ed8;
}
.disclaimer-text {
  font-size: 11px;
  color: #94a3b8;
  text-align: center;
  margin-top: 8px;
}
@media (max-width: 640px) {
  .metrics-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .action-footer {
    flex-direction: column;
  }
}
</style>
