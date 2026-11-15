<template>
  <div class="affiliate-cta-box">
    <div class="cta-inner">
      <div class="cta-text">
        <h4 class="cta-title">准备好开始使用 {{ name }} 了吗？</h4>
        <p class="cta-desc">点击下方按钮直达服务商官网，注册即享高速稳定节点网络。</p>
      </div>

      <div class="cta-actions">
        <div v-if="coupon && coupon !== '无公开优惠码'" class="coupon-pill">
          <span class="label">优惠码:</span>
          <code>{{ coupon }}</code>
          <button @click="copyCode(coupon)">{{ copied ? '已复制' : '复制' }}</button>
        </div>

        <a :href="url" target="_blank" rel="nofollow sponsored noopener" class="cta-btn">
          直达官网注册 ↗
        </a>
      </div>
    </div>
    <div class="affiliate-note">
      * 商业利益声明：通过本链接注册可能为本站带来少量维护资金，本站评测始终保持客观中立，不影响您的最终付款金额。
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  name: string;
  url: string;
  coupon?: string;
}>();

const copied = ref(false);

const copyCode = (code: string) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(code);
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  }
};
</script>

<style scoped>
.affiliate-cta-box {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  margin: 32px 0;
  box-shadow: 0 4px 14px rgba(30, 58, 138, 0.25);
}
.cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.cta-title {
  margin: 0 0 6px 0;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}
.cta-desc {
  margin: 0;
  font-size: 13px;
  color: #bfdbfe;
}
.cta-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.coupon-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px dashed #93c5fd;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
}
.coupon-pill code {
  color: #fde047;
  font-weight: 700;
  background: transparent;
}
.coupon-pill button {
  background: #f59e0b;
  border: none;
  color: #ffffff;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.cta-btn {
  display: inline-block;
  white-space: nowrap;
  background: #ffffff;
  color: #1e40af;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.cta-btn:hover {
  background: #f8fafc;
  transform: translateY(-1px);
}
.affiliate-note {
  margin-top: 14px;
  font-size: 11px;
  color: #93c5fd;
  text-align: center;
  line-height: 1.4;
}
@media (max-width: 768px) {
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
  .cta-actions {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
  .cta-btn {
    text-align: center;
  }
}
</style>
