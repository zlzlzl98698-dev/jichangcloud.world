<template>
  <div class="brand-grid-container">
    <div class="filter-bar">
      <div class="filter-group">
        <button 
          v-for="f in filterOptions" 
          :key="f.id"
          class="filter-pill"
          :class="{ active: currentFilter === f.id }"
          @click="currentFilter = f.id"
        >
          {{ f.label }}
          <span class="count-badge">{{ getFilterCount(f.id) }}</span>
        </button>
      </div>

      <div class="search-input-wrap">
        <input 
          v-model="searchKeyword" 
          type="text" 
          placeholder="快速筛选品牌名称、协议、价格..." 
          class="brand-search-input"
        />
        <button v-if="searchKeyword" class="clear-search" @click="searchKeyword = ''">×</button>
      </div>
    </div>

    <div class="results-stats">
      共匹配到 <strong>{{ filteredBrands.length }}</strong> 家机场服务商
      <span v-if="currentFilter !== 'all'">（当前筛选：{{ getFilterLabel(currentFilter) }}）</span>
    </div>

    <div class="grid-content">
      <BrandCard 
        v-for="brand in filteredBrands" 
        :key="brand.slug" 
        :brand="brand" 
      />
    </div>

    <div v-if="filteredBrands.length === 0" class="empty-state">
      <p>没有找到符合当前筛选条件的机场服务商。</p>
      <button class="reset-btn" @click="resetFilters">重置筛选条件</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { BRANDS } from '../../../data/brands';
import BrandCard from './BrandCard.vue';

const currentFilter = ref('all');
const searchKeyword = ref('');

const filterOptions = [
  { id: 'all', label: '全部品牌' },
  { id: 'top10', label: '核心推荐 Top 10' },
  { id: 'iepl', label: 'IEPL/IPLC 专线' },
  { id: 'cheap', label: '超值低价 (≤¥10/月)' },
  { id: 'measured', label: '附实测测速图' }
];

const getFilterCount = (id: string) => {
  if (id === 'all') return BRANDS.length;
  if (id === 'top10') return 10;
  if (id === 'iepl') return BRANDS.filter(b => b.lineType.includes('专线') || b.lineType.includes('IEPL') || b.lineType.includes('IPLC')).length;
  if (id === 'cheap') return BRANDS.filter(b => b.priceCategory === 'cheap').length;
  if (id === 'measured') return BRANDS.filter(b => b.speedtestImage !== null).length;
  return 0;
};

const getFilterLabel = (id: string) => {
  return filterOptions.find(f => f.id === id)?.label || id;
};

const filteredBrands = computed(() => {
  return BRANDS.filter(b => {
    // Category filter
    let matchCat = true;
    if (currentFilter.value === 'top10') {
      matchCat = b.rank <= 10;
    } else if (currentFilter.value === 'iepl') {
      matchCat = b.lineType.includes('专线') || b.lineType.includes('IEPL') || b.lineType.includes('IPLC');
    } else if (currentFilter.value === 'cheap') {
      matchCat = b.priceCategory === 'cheap';
    } else if (currentFilter.value === 'measured') {
      matchCat = b.speedtestImage !== null;
    }

    if (!matchCat) return false;

    // Search filter
    if (searchKeyword.value.trim()) {
      const q = searchKeyword.value.trim().toLowerCase();
      const matchName = b.name.toLowerCase().includes(q);
      const matchTag = b.tags.some(t => t.toLowerCase().includes(q));
      const matchLine = b.lineType.toLowerCase().includes(q);
      const matchProto = b.protocols.some(p => p.toLowerCase().includes(q));
      return matchName || matchTag || matchLine || matchProto;
    }

    return true;
  });
});

const resetFilters = () => {
  currentFilter.value = 'all';
  searchKeyword.value = '';
};
</script>

<style scoped>
.brand-grid-container {
  margin: 24px 0;
}
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-bottom: 16px;
}
.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-pill:hover {
  border-color: #93c5fd;
  color: #2563eb;
}
.filter-pill.active {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
}
.count-badge {
  font-size: 11px;
  padding: 1px 6px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 10px;
}
.filter-pill.active .count-badge {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}
.search-input-wrap {
  position: relative;
  min-width: 240px;
}
.brand-search-input {
  width: 100%;
  padding: 8px 30px 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
  background: #ffffff;
  transition: border-color 0.2s;
}
.brand-search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
}
.clear-search {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 16px;
  color: #94a3b8;
  cursor: pointer;
}
.results-stats {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 16px;
}
.results-stats strong {
  color: #0f172a;
}
.empty-state {
  text-align: center;
  padding: 48px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
}
.reset-btn {
  margin-top: 12px;
  padding: 8px 16px;
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .search-input-wrap {
    width: 100%;
  }
}
</style>
