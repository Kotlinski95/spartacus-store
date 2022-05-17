import { CustomTranslationChunksConfig } from './custominterfaces'

export const customConfig: CustomTranslationChunksConfig = {custom: ['slCustomFeature']}
export const customTranslations = {
  en: { // lang
    product: { // chunk
      productSummary: { // keys (nested)
        showReviews: 'Custom Show reviews',
      }
    },
    custom:{
      slCustomFeature: {
        subKey: 'Custom text'
      }
    }
  },
};