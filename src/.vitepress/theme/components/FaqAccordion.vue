<template>
  <div class="faq-accordion-wrap">
    <div 
      v-for="(item, idx) in items" 
      :key="idx" 
      class="faq-item"
      :class="{ open: openIdx === idx }"
    >
      <button class="faq-question" @click="toggle(idx)">
        <span class="q-icon">Q{{ idx + 1 }}</span>
        <span class="q-text">{{ item.question }}</span>
        <span class="arrow-icon">{{ openIdx === idx ? '▲' : '▼' }}</span>
      </button>

      <div v-show="openIdx === idx" class="faq-answer">
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FaqItem {
  question: string;
  answer: string;
}

const props = defineProps<{
  items: FaqItem[];
}>();

const openIdx = ref<number | null>(0);

const toggle = (idx: number) => {
  openIdx.value = openIdx.value === idx ? null : idx;
};
</script>

<style scoped>
.faq-accordion-wrap {
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.faq-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  overflow: hidden;
  transition: all 0.2s;
}
.faq-item.open {
  border-color: #93c5fd;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.05);
}
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #ffffff;
  border: none;
  cursor: pointer;
  text-align: left;
}
.faq-item.open .faq-question {
  background: #f8faff;
}
.q-icon {
  font-weight: 700;
  font-size: 13px;
  color: #2563eb;
  background: #eff6ff;
  padding: 2px 6px;
  border-radius: 4px;
}
.q-text {
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
}
.arrow-icon {
  font-size: 12px;
  color: #94a3b8;
}
.faq-answer {
  padding: 14px 16px;
  background: #ffffff;
  border-top: 1px solid #f1f5f9;
  font-size: 14px;
  line-height: 1.6;
  color: #334155;
}
.faq-answer p {
  margin: 0;
}
</style>
