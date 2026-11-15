import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import BrandCard from './components/BrandCard.vue';
import BrandGrid from './components/BrandGrid.vue';
import SpeedtestCard from './components/SpeedtestCard.vue';
import UnlockMatrix from './components/UnlockMatrix.vue';
import AffiliateButton from './components/AffiliateButton.vue';
import FaqAccordion from './components/FaqAccordion.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BrandCard', BrandCard);
    app.component('BrandGrid', BrandGrid);
    app.component('SpeedtestCard', SpeedtestCard);
    app.component('UnlockMatrix', UnlockMatrix);
    app.component('AffiliateButton', AffiliateButton);
    app.component('FaqAccordion', FaqAccordion);
  }
} satisfies Theme;
